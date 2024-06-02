
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Heroe } from 'src/app/models/heroeModel';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css',
})
export class HeroDetailsComponent implements OnInit {
  public heroId: number | undefined;
  public heroe: Heroe = {} as Heroe;

  constructor(
    private route: ActivatedRoute,
    private heroesService$: HeroesService
  ) {}

  ngOnInit(): void {
    // Obtener el valor del parámetro 'id' de la URL y convertirlo a número
    const id = this.route.snapshot.paramMap.get('id');
    this.heroId = id !== null ? +id : undefined;

    // Obtener los detalles del héroe usando el id convertido
    if (this.heroId !== undefined) {
      this.heroe = this.heroesService$.getHeroe(this.heroId);
    }
  }
}
