import { Router } from '@angular/router';
import { MediaVideoService } from './../service/media-video.service';
import { MediaVideo } from '../models/media-video.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-video',
  templateUrl: './media-video.component.html',
  styleUrls: ['./media-video.component.css']
})
export class MediaVideoComponent implements OnInit {

  mediaVideo: MediaVideo ={
    title: '',
    description: '',
    urlVideo:''
  }
  
  constructor(private mediaVideoService: MediaVideoService, private router: Router) { }

  ngOnInit(): void {
  }

  createMedia(): void{
    this.mediaVideoService.create(this.mediaVideo).subscribe(() => {
      this.mediaVideoService.showMessage('Vídeo Inserido com sucesso!')
      this.router.navigate(['/medias'])
    })
  }
   
  cancel(): void{
    this.router.navigate(['/medias'])
  }

}
