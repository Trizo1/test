import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ShelterService } from './shelter.service';


@Injectable({
  providedIn: 'root'
})
export class ShelterResolverService {

  constructor(private sheltersService: ShelterService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.sheltersService.getOneShelter(route.params.shelterId);
  }
}
