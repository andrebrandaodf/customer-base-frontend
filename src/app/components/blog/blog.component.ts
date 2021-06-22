import { Component, OnInit, ViewChild } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  blog: Blog = new Blog();

  constructor(private blogService: BlogService, private router: Router) {}

  ckeditorContent: string = '<b>Probando contenido</b>';
  @ViewChild(CKEditorComponent) ckEditor!: CKEditorComponent;

  ngAfterViewChecked() {
    let editor = this.ckEditor.instance;
    editor.config.height = '400';
    editor.config.toolbarGroups = [
      { name: 'document', groups: ['mode', 'document', 'doctools'] },
      { name: 'clipboard', groups: ['clipboard', 'undo'] },
      {
        name: 'editing',
        groups: ['find', 'selection', 'spellchecker', 'editing'],
      },
      {
        name: 'paragraph',
        groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'],
      },
      { name: 'insert', groups: ['insert'] },
    ];
    editor.config.removeButtons =
      'Source, Save,Templates,Find,Replace,Scayt,SelectAll,Form,Radio';
  }

  createBlog(): void {
    this.blogService.create(this.blog).subscribe(() => {
      this.blogService.showMessage('Blog cadastrado!');
      this.router.navigate(['admin/blog']);
    });
  }

  //preciso Limpar o formulário
  cancel(): void {
    this.router.navigate(['admin/blog']);
  }
}
