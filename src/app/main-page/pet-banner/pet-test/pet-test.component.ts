import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-pet-test',
  templateUrl: './pet-test.component.html',
  styleUrls: ['./pet-test.component.scss']
})
export class PetTestComponent implements OnInit {

  specieForm: FormGroup;
  sizeForm: FormGroup;
  ageForm: FormGroup;
  healthForm: FormGroup;
  disabilityForm: FormGroup;

  species: any[] = [{ name: 'собаки', value: 'dog' }, { name: 'кошки', value: 'cat' }, { name: 'люблю всех одинаково', value: ['dog', 'cat'] }];
  sizes: any[] = [{ name: 'миниатюрный (до 4 кг)', value: 'миниатюрный (до 4 кг)' }, { name: 'маленький (5-10 кг)', value: 'маленький (5-10 кг)' },
  { name: 'средний (11-25 кг)', value: 'средний (11-25 кг)' }, { name: 'крупный (26-44 кг)', value: 'крупный (26-44 кг)' },
  { name: 'очень крупный (от 45 кг)', value: 'очень крупный (от 45 кг)' }];
  ages: any[] = [{ name: 'да', value: 'взрослый' }, { name: 'нет', value: ['детёныш', 'средний возраст'] }];
  health: any[] = [{ name: 'да', value: 'да' }, { name: 'нет', value: 'нет' }];
  disability: any[] = [{ name: 'да', value: 'да' }, { name: 'нет', value: 'нет' }];


  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.specieForm = this.fb.group({
      specie: [null, [Validators.required]]
    });
    this.sizeForm = this.fb.group({
      size: [null, [Validators.required]]
    });
    this.ageForm = this.fb.group({
      age: [null, [Validators.required]]
    });
    this.healthForm = this.fb.group({
      health: [null, [Validators.required]]
    });
    this.disabilityForm = this.fb.group({
      disability: [null, [Validators.required]]
    });
  }

  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
  }

}
