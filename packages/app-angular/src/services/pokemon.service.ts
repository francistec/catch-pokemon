import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pokemon } from '@catch-pokemon/services';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IPokemon } from 'src/models/IPokemon';

@Injectable()
export class PokemonService{

    baseUr = 'https://pokeapi.co/api/v2';

    constructor( private httpClient: HttpClient ){
        
    }

    getPokemon(name: string): Observable<IPokemon> {
        return from(Pokemon.get(name)).pipe(
            map((item: any) =>{
                return {
                    Id: item.id,
                    Name: item.name,
                    Image: item.sprites.other['official-artwork'].front_default
                }
            }),
            catchError(this.handleError)
        )
    }
    
    private handleError(errorResponse: HttpErrorResponse){
        if(errorResponse.error instanceof ErrorEvent){
            console.log('Client side error', errorResponse.error.message);   
        } else {
            console.log('server response error', errorResponse);
        }

        return throwError('Something is wrong');
    }

}