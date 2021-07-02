import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideoService } from 'src/app/services/video.service';


@Component({
  selector: 'app-video-read',
  templateUrl: './video-read.component.html',
  styleUrls: ['./video-read.component.scss'],
})
export class VideoReadComponent implements OnInit {
  video!: Video[];
  displayedColumns = ['id', 'title', 'description', 'urlVideo', 'action'];

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getAll().subscribe((video: any) => {
      console.log(video);
      this.video = video;
    });
    this.videoService.read().subscribe((video: any) => {
      this.video = video;
      console.log(video);
    });
  }
}
