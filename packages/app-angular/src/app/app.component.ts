import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPokemon } from 'src/models/IPokemon';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _pokemonService: PokemonService){}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  private subscription: Subscription;
  term: string = '';
  allPokemons: IPokemon[] = [];
  error: string = '';


  searchPokemon(){
      this.subscription = this._pokemonService.getPokemon(this.term).subscribe(
        (pokemon) => {
          this.error = '';
          let duplicated = false;
          for(let iterator = 0; iterator < this.allPokemons.length; iterator++){
            if(this.allPokemons[iterator].Name == pokemon.Name){
              duplicated = true;
            }
          }
          if(!duplicated)
            this.allPokemons.push(pokemon);
          else 
            this.error = 'Pokemon is already in list';
        },
        (error) => {
          this.error = error;
        }
      )
  }

  title = 'angular';


}
