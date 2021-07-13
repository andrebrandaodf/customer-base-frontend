import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideoService } from 'src/app/services/video.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.scss'],
})
export class VideoCreateComponent implements OnInit {
  video: Video = new Video();

  constructor(
    private formBuilder: FormBuilder,
    private videoService: VideoService,
    private router: Router
  ) { }

  form: FormGroup = this.formBuilder.group({
    title: [null, [Validators.required]],
    description: [null, [Validators.required]],
    urlVideo: [null, [Validators.required]],
  })

  ngOnInit(): void { }

  createVideo(): void {
    this.videoService.create(this.video).subscribe(() => {
      this.videoService.showMessage('Vídeo Inserido com sucesso!');
      this.router.navigate(['admin/video']);
    });
  }

  cancel(): void {
    this.router.navigate(['admin/video']);
  }
}
