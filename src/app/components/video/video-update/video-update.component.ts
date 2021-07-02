import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-video-update',
  templateUrl: './video-update.component.html',
  styleUrls: ['./video-update.component.scss'],
})
export class VideoUpdateComponent implements OnInit {
  video: Video = new Video();
  private id?: number;

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

  updateVideo(): void {
    console.log(this.video);
    this.videoService.update(this.video).subscribe(() => {
      this.videoService.showMessage('Vídeo atualizado com sucesso!');
      this.router.navigate(['admin/video']);
    });
  }

  cancel(): void {
    this.router.navigate(['admin/video']);
  }
}
