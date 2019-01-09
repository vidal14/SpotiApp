import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
   }

   getQuery( query: string ) {
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': '[{"key":"Authorization","value":"Bearer BQAeVwd96yz2k8LoX97X5DA3RXAyQxzWdFJ6kf4SQezXSPOvquQybh6ddgdZ3wYiY2QD2wFFkuu4GW-5lFE","description":"","type":"text","enabled":true}]'
    });

    return this.http.get(url, { headers });
   }

   getNewReleases() {

      // const headers = new HttpHeaders({
      //   'Authorization': 'Bearer BQDS6GCL7fmAG5OxKWOrIyghrfTigXcUkQm5SNGj3B_kXwMxyKvJgA1yt1cj9bRBTeP923YzPps6cOEVFQc'
      // });

      // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      //             .pipe( map( (data: any) => {
      //               return data.albums.items;
      //             }));

      return this.getQuery('browse/new-releases')
                .pipe( map( (data: any) => {
                  return data.albums.items;
                }));

      
   }

   getArtist( termino: string) {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQDS6GCL7fmAG5OxKWOrIyghrfTigXcUkQm5SNGj3B_kXwMxyKvJgA1yt1cj9bRBTeP923YzPps6cOEVFQc'
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20`, { headers })
    //             .pipe( map( (data: any) => {
    //               return data.artists.items;
    //             }))   
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
                .pipe( map( (data: any) => {
                  return data.artists.items;
                }));
  }

}
