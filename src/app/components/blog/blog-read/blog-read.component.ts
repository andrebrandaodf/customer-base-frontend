import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-blog-read',
  templateUrl: './blog-read.component.html',
  styleUrls: ['./blog-read.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BlogReadComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoading: boolean = true;

  dataSource: any;

  expandedElement: any | null;

  columnsToDisplay = [
    'title',
    'action',
  ];
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
