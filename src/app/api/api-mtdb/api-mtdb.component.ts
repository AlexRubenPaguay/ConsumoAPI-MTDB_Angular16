import { Component } from '@angular/core';
import { ApiMTDBService } from '../api-mtdb/services/api-mtdb.service';
import { peliculaDatos } from '../api-mtdb/models/pelicula.interface';

@Component({
  selector: 'app-api-mtdb',
  templateUrl: './api-mtdb.component.html',
  styleUrls: ['./api-mtdb.component.css']
})
export class ApiMtdbComponent {
  isBottonVisible: boolean = false;
  private url_poster_path: string = "https://image.tmdb.org/t/p/w500/";
  total_paginas: number = 0;
  pagina_actual: number = 0;
  botonPaginacionPrevious: boolean = true;
  botonPaginacionNext: boolean = false;
  peliculasPopulares: peliculaDatos[] = [];
  constructor(private apiService: ApiMTDBService) {
    this.getDataAPI();

  }

  getDataAPI() {
    this.apiService.getAPI().subscribe((data) => {
      console.log(data);
      this.peliculasPopulares = data.results;
      this.pagina_actual = data.page;
      this.total_paginas = data.total_pages;
      console.log(this.peliculasPopulares);
    });
  }
  getFullPath_Image(code_image: string): string {
    return `${this.url_poster_path}${code_image}`;
  }
  getPrevious(): void {
    this.pagina_actual = this.apiService.getPrevious();
    this.getDataAPI();
    console.log("PAGINA ACTUAL " + this.pagina_actual);
    if (this.pagina_actual === 1) {
      this.botonPaginacionPrevious = true
    }
    else {
      this.botonPaginacionPrevious = false
    }

  }

  getNext(): void {
    this.pagina_actual = this.apiService.getNext();
    this.getDataAPI();
    console.log("PAGINA ACTUAL " + this.pagina_actual);
    if (this.pagina_actual === 1 || this.pagina_actual === this.total_paginas) {
      this.botonPaginacionPrevious = true
      this.botonPaginacionNext = true
    }
    else {
      this.botonPaginacionPrevious = false
      this.botonPaginacionNext = false
    }
  }

  getDeletePhoto(index: number) {
    this.peliculasPopulares.splice(index, 1);
  }


  imageSrc: string | ArrayBuffer | null = null;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      this.isBottonVisible = true;
      reader.readAsDataURL(file);
    }
    else {
      this.isBottonVisible = false;
      this.imageSrc = "";
    }
  }
}
