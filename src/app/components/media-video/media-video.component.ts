import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { MediaVideo } from 'src/app/models/media-video.model';
import { MediaVideoService } from 'src/app/services/media-video.service';

@Component({
  selector: 'app-media-video',
  templateUrl: './media-video.component.html',
  styleUrls: ['./media-video.component.css'],
})
export class MediaVideoComponent implements OnInit {
  mediaVideo: MediaVideo = new MediaVideo();

  constructor(
    private mediaVideoService: MediaVideoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createMedia(): void {
    this.mediaVideoService.create(this.mediaVideo).subscribe(() => {
      this.mediaVideoService.showMessage('Vídeo Inserido com sucesso!');
      this.router.navigate(['/medias']);
    });
  }

  cancel(): void {
    this.router.navigate(['/medias']);
  }
}
