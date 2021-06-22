import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaVideo } from 'src/app/models/media-video.model';
import { MediaVideoService } from 'src/app/services/media-video.service';

@Component({
  selector: 'app-media-video-update',
  templateUrl: './media-video-update.component.html',
  styleUrls: ['./media-video-update.component.scss'],
})
export class MediaVideoUpdateComponent implements OnInit {
  mediaVideo: MediaVideo = new MediaVideo();
  private id?: number;

  constructor(
    private mediaVideoService: MediaVideoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (getParam) => {
        this.mediaVideoService
          .readById(getParam.id)
          .subscribe((mediaVideo: any) => {
            this.mediaVideo = mediaVideo;
          });
        this.id = getParam.id;
      },
      (erro) => {
        console.log('Erro ao pegar ID', erro);
      }
    );
  }

  updateMedia(): void {
    console.log(this.mediaVideo);
    this.mediaVideoService.update(this.mediaVideo).subscribe(() => {
      this.mediaVideoService.showMessage('Vídeo atualizado com sucesso!');
      this.router.navigate(['admin/media']);
    });
  }

  cancel(): void {
    this.router.navigate(['admin/media']);
  }
}
