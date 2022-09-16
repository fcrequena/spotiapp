import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises:any[] = [];
  loading: boolean;
  error: boolean;
  mensaje_error: string = '';
  // constructor(
    //para realizar peticiones get
  //   private http: HttpClient
  // ) {
  //   this.http.get('https://restcountries.com/v3.1/lang/spa')
  //     .subscribe( (data: any) => {
  //       this.paises = data;
  //       console.log(data);
  //     });
  // }

  nuevasCanciones: any[] = [];

  constructor( private _serviceSpotify: SpotifyService){
    this.error = false;
    this.loading = true;

    this._serviceSpotify.getNewReleases()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
      console.log(data);
      this.loading = false;
    }, (error_servicio) => {
      this.error = true;
      this.mensaje_error = error_servicio.error.error.message;
      this.loading = false;
    });

  }

  ngOnInit(): void {
  }

}
