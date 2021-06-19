import { MediaVideoService } from './../service/media-video.service';
import { MediaVideo } from './../models/media-video.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-video-read',
  templateUrl: './media-video-read.component.html',
  styleUrls: ['./media-video-read.component.css']
})
export class MediaVideoReadComponent implements OnInit {

  
  mediaVideo!: MediaVideo[];
  displayedColumns = ['id', 'title', 'description','urlVideo', 'action']

  constructor(private mediaVideoService: MediaVideoService) { 

  }

  ngOnInit(): void {
    this.mediaVideoService.getAll().subscribe((mediaVideo: any) => { console.log(mediaVideo); this.mediaVideo = mediaVideo});
    this.mediaVideoService.read().subscribe((mediaVideo: any) => {
    this.mediaVideo = mediaVideo;
      console.log(mediaVideo);
    })
  }

}
