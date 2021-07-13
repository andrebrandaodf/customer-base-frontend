import { Component, OnInit, ViewChild } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-blog-read',
  templateUrl: './blog-read.component.html',
  styleUrls: ['./blog-read.component.scss'],
})
export class BlogReadComponent implements OnInit {
  // blog!: Blog[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  isLoading: boolean = true;

  displayedColumns = ['title', 'description', 'action'];

  dataSource!: MatTableDataSource<any>;

  constructor(private blogService: BlogService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getAllPaginator();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllPaginator() {
    this.isLoading = true;
    this.blogService.getAll().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res || []);
      setTimeout(() => this.dataSource.paginator = this.paginator);
      this.isLoading = false;
    })
  }
}
