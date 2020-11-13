export class Planet {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[] = [];
  films: string[] = [];

  constructor(data) {
    this.name = data.name;
    this.diameter = data.diameter;
    this.rotation_period = data.rotation_period;
    this.orbital_period = data.orbital_period;
    this.gravity = data.gravity;
    this.population = data.population;
    this.climate = data.climate;
    this.terrain = data.terrain;
    this.surface_water = data.surface_water;
    if (data.residents.length > 0) {
      for (const i in data.residents) {
        this.residents.push(data.residents[i]);
      }
    }
    if (data.films.length > 0) {
      for (const i in data.films) {
        this.films.push(data.films[i]);
      }
    }
  }
}
