import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AnimalService } from './animal.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalsResolverService {

  constructor(private animalService: AnimalService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.animalService.getAllPets();
  }
}
