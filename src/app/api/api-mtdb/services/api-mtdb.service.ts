import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pelicula } from '../models/pelicula.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiMTDBService {
  pagina: number = 1;

  url: string = "https://api.themoviedb.org/3/movie/popular?api_key=af73d21ed78afc2905e5d76ef0bc58c1&page=";

  constructor(private http: HttpClient) {

  }

  getAPI(): Observable<pelicula> {
    return this.http.get<pelicula>(this.url + `${this.pagina}`);
  }

  getPrevious(): number {
   // if (this.pagina > 1) {
      this.pagina -= 1;
      console.log(this.pagina);
      this.getAPI();
    //}
    return this.pagina;

  }
  getNext(): number {
    //if (this.pagina < 49036) {
      this.pagina += 1;
      console.log(this.pagina);
      this.getAPI();

    //}
    return this.pagina;
  }

}
