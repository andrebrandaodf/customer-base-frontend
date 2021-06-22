import { Component } from '@angular/core';
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

  config = {
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount',
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help',

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

  constructor(private blogService: BlogService, private router: Router) {}

  createBlog(): void {
    this.blogService.create(this.blog).subscribe(() => {
      this.blogService.showMessage('Blog cadastrado!');
      this.router.navigate(['admin/blog']);
    });
  }

  cancel(): void {
    this.router.navigate(['admin/blog']);
  }
}
