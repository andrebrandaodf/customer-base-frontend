import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaVideo } from 'src/app/models/media-video.model';
import { MediaVideoService } from 'src/app/services/media-video.service';

@Component({
  selector: 'app-media-video-delete',
  templateUrl: './media-video-delete.component.html',
  styleUrls: ['./media-video-delete.component.css'],
})
export class MediaVideoDeleteComponent implements OnInit {
  mediaVideo: MediaVideo = new MediaVideo();
  private id!: number;

  constructor(
    private mediaVideoService: MediaVideoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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

  deleteMedia(): void {
    this.mediaVideoService.delete(this.id).subscribe(
      () => {
        this.mediaVideoService.showMessage('Vídeo deletado com sucesso!');
        this.router.navigate(['admin/media']);
      },
      (errow) => {
        this.mediaVideoService.showMessage(`Erro na solicitação: ${errow}`);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['admin/media']);
  }
}
