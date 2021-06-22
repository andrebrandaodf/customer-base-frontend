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
