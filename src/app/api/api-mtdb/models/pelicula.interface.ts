export interface pelicula {
    page: number,
    results: [peliculaDatos],
    total_pages: number,
    total_results:number
}

export interface peliculaDatos {
    title: string,
    release_date: string,
    backdrop_path: string,
    poster_path:string
}

