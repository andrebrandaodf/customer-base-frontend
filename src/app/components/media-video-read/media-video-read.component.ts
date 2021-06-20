import { Component, OnInit } from '@angular/core';
import { MediaVideo } from 'src/app/models/media-video.model';
import { MediaVideoService } from 'src/app/services/media-video.service';

@Component({
  selector: 'app-media-video-read',
  templateUrl: './media-video-read.component.html',
  styleUrls: ['./media-video-read.component.css'],
})
export class MediaVideoReadComponent implements OnInit {
  mediaVideo!: MediaVideo[];
  displayedColumns = ['id', 'title', 'description', 'urlVideo', 'action'];

  constructor(private mediaVideoService: MediaVideoService) {}

  ngOnInit(): void {
    this.mediaVideoService.getAll().subscribe((mediaVideo: any) => {
      console.log(mediaVideo);
      this.mediaVideo = mediaVideo;
    });
    this.mediaVideoService.read().subscribe((mediaVideo: any) => {
      this.mediaVideo = mediaVideo;
      console.log(mediaVideo);
    });
  }
}
