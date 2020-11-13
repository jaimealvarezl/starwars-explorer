export class Movie {
  title: string;
  episode_id: number;
  director: string;
  producer: string;
  release_date: string;
  characters: string[] = [];
  planets: string[] = [];

  constructor(data) {
    this.title = data.title;
    this.episode_id = data.episode_id;
    this.director = data.director;
    this.producer = data.producer;
    this.release_date = data.release_date;
    if (data.characters.length > 0) {
      for (const i in data.characters) {
        this.characters.push(data.characters[i]);
      }
    }
    if (data.planets.length > 0) {
      for (const i in data.planets) {
        this.planets.push(data.planets[i]);
      }
    }
  }
}
