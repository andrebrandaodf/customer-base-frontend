import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.scss'],
})
export class BlogUpdateComponent implements OnInit {
  blog: Blog = new Blog();
  private id?: number;

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

  updateBlog(): void {
    console.log(this.blog);
    this.blogService.update(this.blog).subscribe(() => {
      this.blogService.showMessage('Blog atualizado com sucesso!');
      this.router.navigate(['admin/blog']);
    });
  }

  cancel(): void {
    this.router.navigate(['admin/blog']);
  }
}
