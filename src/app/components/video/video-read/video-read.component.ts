import { Component, OnInit, ViewChild } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideoService } from 'src/app/services/video.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-video-read',
  templateUrl: './video-read.component.html',
  styleUrls: ['./video-read.component.scss'],
})
export class VideoReadComponent implements OnInit {
  // video!: Video[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  isLoading: boolean = true;

  dataSource!: MatTableDataSource<any>;

  displayedColumns = ['title', 'description', 'urlVideo', 'action'];

  constructor(private videoService: VideoService) {
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
    this.videoService.getAll().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res || []);
      setTimeout(() => this.dataSource.paginator = this.paginator);
      this.isLoading = false;
    })
  }
}
