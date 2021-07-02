import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/models/video.model';
import { VideoService } from 'src/app/services/video.service';


@Component({
  selector: 'app-video-delete',
  templateUrl: './video-delete.component.html',
  styleUrls: ['./video-delete.component.scss'],
})
export class VideoDeleteComponent implements OnInit {
  video: Video = new Video();
  private id!: number;

  constructor(
    private videoService: VideoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (getParam) => {
        this.videoService
          .readById(getParam.id)
          .subscribe((video: any) => {
            this.video = video;
          });
        this.id = getParam.id;
      },
      (erro) => {
        console.log('Erro ao pegar ID', erro);
      }
    );
  }

  deleteVideo(): void {
    this.videoService.delete(this.id).subscribe(
      () => {
        this.videoService.showMessage('Vídeo deletado com sucesso!');
        this.router.navigate(['admin/video']);
      },
      (errow) => {
        this.videoService.showMessage(`Erro na solicitação: ${errow}`);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['admin/video']);
  }
}
