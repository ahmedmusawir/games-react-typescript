export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic: number;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string | null;
  searchText: string | null;
}
