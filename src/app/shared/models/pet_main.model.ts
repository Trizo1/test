import { Pet_additional } from './pet_additional.model';
import { Pet_catchInfo } from './pet_catchInfo.model';
import { Pet_move } from './pet_move.model';
import { Pet_responsible } from './pet_responsible.model';

export interface Pet_main {
    id?: number;
    card_num: string;
    species: string;
    age: string;
    weight: number;
    name: string;
    gender: string;
    breed: string;
    hair_color: string;
    hair_type: string;
    ears_type: string;
    tail_type: string;
    enclosure: number;
    shelter_id: number;
    Pet_additional?: Pet_additional;
    Pet_catchInfo: Pet_catchInfo;
    Pet_move: Pet_move;
    Pet_responsible: Pet_responsible;
}