import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent{

  loading: boolean;
  artista: any= [];
  topTrack: any[]=[];

  constructor(
    private _route: ActivatedRoute,
    private _service: SpotifyService
  ) {
    this.loading = true;
    this._route.params.subscribe( params =>{
      // console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTrackas(params['id']);
    })

  }

  getArtista( id: string ){

    this._service.getArtista(id)
      .subscribe( artista => {
        this.artista = artista;
        this.loading = false;

        console.log(artista);

      });

  }

  getTopTrackas(id: string){
    this._service.getTopTracks(id)
      .subscribe( topTracks => {
        this.topTrack = topTracks;
        console.log(topTracks);
      })
  }

}
