import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = '1 BQDvdmQ5DQGhnzjqwJjLWoph67ZKyoaQqnQclVGOe_rqy9r_rhhitg042OiAfyAv_QRH1aGAVc_TwFNu3Ig1sNogWxCIdj3gTeJ7SJmXS8FrvrYZvAfGpkvCoKorbTtY0jBUYBma2A3H8wOYxILlg9k6uxBBvJ7HlzTLc2XVgj3U8AVNJQ7lznAoZ0mKvV0XH78';
  topTrack: any[]=[];
  constructor(private http: HttpClient) {
    console.log('Servicio Listo');
  }

  getQuery(query: string){
    const url= `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })

    return this.http.get(url, {headers});

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
      .pipe( map( (data:any) => data['albums'].items ) )

    // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    //   .pipe( map( (data:any) => data['albums'].items ) )


  }

  getArtistas( termino: string){

    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe( map( (data:any) => data['artists'].items));

    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers})
    //   .pipe( map( (data:any) => data['artists'].items ));

  }

  getArtista( id: string ){
    // https://api.spotify.com/v1/artists/{id}
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string){
    return this.getQuery(`artists/${id}/top-tracks?market=ES`)
      .pipe(map( (data:any) => data['tracks']));
  }

}
