import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-blog-read',
  templateUrl: './blog-read.component.html',
  styleUrls: ['./blog-read.component.scss'],
})
export class BlogReadComponent implements OnInit {
  blog!: Blog[];
  displayedColumns = ['id', 'title', 'description', 'action'];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAll().subscribe((blog: any) => {
      console.log(blog);
      this.blog = blog;
    });
    this.blogService.read().subscribe((blog: any) => {
      this.blog = blog;
      console.log(blog);
    });
  }
}
