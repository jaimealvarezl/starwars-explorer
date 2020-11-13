export class  Person {
  name: string;
  height: number;
  mass: number;
  hair_colour: string;
  skin_colour: string;
  eye_colour: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[] = [];

  constructor(data) {
    this.name = data.name;
    this.height = data.height;
    this.mass = data.mass;
    this.hair_colour = data.hair_color;
    this.skin_colour = data.skin_color;
    this.eye_colour = data.eye_colour;
    this.birth_year = data.birth_year;
    this.gender = data.gender;
    this.homeworld = data.homeworld;
    if (data.films.length > 0) {
      for (const i in data.films) {
        this.films.push(data.films[i]);
      }
    }
  }
}
