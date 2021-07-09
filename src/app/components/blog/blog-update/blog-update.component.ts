import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { BlogForm } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.scss'],
})
export class BlogUpdateComponent implements OnInit {
  [x: string]: any;
  blog: BlogForm = new BlogForm();
  private id!: number;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (getParam) => {
        this.blogService.readById(getParam.id).subscribe((blog: any) => {
          this.blog = blog;
        });
        this.id = getParam.id;
      },
      (erro) => {
        console.log('Erro ao pegar ID', erro);
      }
    );
  }

  addFile(ev: any) {
    console.log(ev.target.files)
    this.blog.photograph = ev.target.files[0];
  }

  updateBlog(): void {

    const formData = new FormData();
    formData.append('id', this.blog.id.toString());
    formData.append('title', this.blog.title);
    formData.append('description', this.blog.description);
    formData.append('content', this.blog.content);

    // formData.append('photograph', this.blog.photograph, this.blog.photograph.name);

    console.log(this.formData);
    this.blogService.update(formData).subscribe(() => {
      this.blogService.showMessage('Blog atualizado com sucesso!');
      this.router.navigate(['admin/blog']);
    });
  }

  cancel(): void {
    this.router.navigate(['admin/blog']);
  }


}
