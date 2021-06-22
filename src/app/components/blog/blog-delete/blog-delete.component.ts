import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.scss'],
})
export class BlogDeleteComponent implements OnInit {
  blog: Blog = new Blog();
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

  deleteBlog(): void {
    this.blogService.delete(this.id).subscribe(
      () => {
        this.blogService.showMessage('Blog deletado com sucesso!');
        this.router.navigate(['admin/blog']);
      },
      (errow) => {
        this.blogService.showMessage(`Erro na solicitação: ${errow}`);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['admin/blog']);
  }
}
