import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { MediaVideo } from 'src/app/models/media-video.model';
import { MediaVideoService } from 'src/app/services/media-video.service';


@Component({
  selector: 'app-media-video-create',
  templateUrl: './media-video-create.component.html',
  styleUrls: ['./media-video-create.component.scss'],
})
export class MediaVideoCreateComponent implements OnInit {
  mediaVideo: MediaVideo = new MediaVideo();

  constructor(
    private mediaVideoService: MediaVideoService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  createMedia(): void {
    this.mediaVideoService.create(this.mediaVideo).subscribe(() => {
      this.mediaVideoService.showMessage('Vídeo Inserido com sucesso!');
      this.router.navigate(['admin/media']);
    });
  }

  cancel(): void {
    this.router.navigate(['admin/media']);
  }
}
