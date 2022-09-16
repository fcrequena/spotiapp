import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loading: boolean;
  artistas: any[] =[];

  error: boolean;
  mensaje_error: string = '';

  constructor(private spotify: SpotifyService) {
    this.loading = false;
    this.error = false;
  }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.loading = true;
    this.spotify.getArtistas(termino)
      .subscribe((data:any) => {
        this.artistas = data;
        this.loading = false;
      }, (error_servicio) => {
        this.error = true;
        this.mensaje_error = error_servicio.error.error.message;
        this.loading = false;
      })
  }

}
