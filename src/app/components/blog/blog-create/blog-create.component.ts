import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { BlogForm } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss'],
})
export class BlogCreateComponent {
  blog: BlogForm = new BlogForm();

  config = {
    height: 500,
    plugins: `print preview paste importcss searchreplace autolink save
      directionality code visualblocks visualchars fullscreen image link template
      codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime
      advlist lists wordcount imagetools textpattern noneditable help charmap emoticons`,
    menubar: 'file edit view insert format tools table help',
    toolbar: `undo redo fullscreen | bold italic underline strikethrough | fontselect
      fontsizeselect formatselect | alignleft aligncenter alignright alignjustify |
      outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak |
      charmap emoticons | fullscreen  preview save print | insertfile image template link
      anchor codesample | ltr rtl`,
    toolbar_sticky: true,
    image_caption: true,
    quickbars_selection_toolbar:
      'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    toolbar_mode: 'sliding',
    contextmenu: 'link image imagetools table',
    language: 'pt_BR',
    file_picker_callback: (callback: any, value: any, meta: any) => {
      /* Provide file and text for the link dialog */
      if (meta.filetype === 'file') {
        console.warn(
          'Função não implementada, entre em contato com o administrador do sistema para mais informações'
        );
        // callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
      }

      /* Provide image and alt text for the image dialog */
      if (meta.filetype === 'image') {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        input.onchange = (ev: any) => {
          const file = ev.target.files[0];

          const fb = new FormData();
          fb.append('file', file, file.name);
          this.blogService.uploadFile(fb).subscribe((res: any) => {
            callback(res.url, { alt: file.name });
          });
        };
        input.click();
      }

      /* Provide alternative source and posted for the media dialog */
      if (meta.filetype === 'media') {
        console.warn(
          'Função não implementada, entre em contato com o administrador do sistema para mais informações'
        );
        //   callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
      }
    },
  };

  constructor(private blogService: BlogService, private router: Router) { }

  addFile(ev: any) {
    console.log(ev.target.files)
    this.blog.photograph = ev.target.files[0];
  }

  createBlog(): void {

    const formData = new FormData();
    formData.append('title', this.blog.title);
    formData.append('description', this.blog.description);
    formData.append('content', this.blog.content);

    formData.append('photograph', this.blog.photograph, this.blog.photograph.name);

    this.blogService.create(formData).subscribe(() => {
      this.blogService.showMessage('Blog cadastrado!');
      this.router.navigate(['admin/blog']);
    });
  }

  cancel(): void {
    this.router.navigate(['admin/blog']);
  }
}
