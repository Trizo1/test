import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Destroyer } from 'src/app/shared/destroyer';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { ShelterService } from 'src/app/shared/services/shelter.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-animal-manage',
  templateUrl: './animal-manage.component.html',
  styleUrls: ['./animal-manage.component.scss']
})
export class AnimalManageComponent extends Destroyer implements OnInit, OnDestroy {

  petMain: FormGroup;
  petAdditional: FormGroup;
  petCatchInfo: FormGroup;
  petHealth: FormGroup;
  petImages: FormGroup;
  petMove: FormGroup;
  petOwners: FormGroup;
  petResponsible: FormGroup;
  petSanitation: FormGroup;
  petVaccination: FormGroup;
  curId: number;
  animal: any;
  dictionary: any;
  breeds = [];
  hair_colors = [];
  hair_types = [];
  ear_types = [];
  tail_types = [];
  sizes = ['маленький', 'средний', 'крупный', 'очень крупный'];
  move_types = [];
  shelters = [];

  healthOrders = [];
  sanitationOrders = [];
  vaccinationOrders = [];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private animalService: AnimalService,
    private dictionaryService: DictionaryService, private shelterService: ShelterService, private router: Router, private location: Location) {
    super();
    this.createPetMain();
    this.createPetAdditional();
    this.createPetCatchInfo();
    this.createPetHealth();
    this.createPetMove();
    this.createPetOwners();
    this.createPetResponsible();
    this.createPetSanitation();
    this.createPetVaccination();
    this.curId = this.route.snapshot.params['animalId'];
  }

  ngOnInit() {
    this.shelterService.getShelters().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.shelters = data;
    })
    this.dictionaryService.getDictionary().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.dictionary = data;
      this.dictionary.forEach(item => {
        if (item.list == 'cat_breeds' || item.list == 'dog_breeds')
          this.breeds.push(item);
        if (item.list == 'cat_colors' || item.list == 'dog_colors')
          this.hair_colors.push(item);
        if (item.list == 'cat_hair_types' || item.list == 'dog_hair_types')
          this.hair_types.push(item);
        if (item.list == 'ear_types')
          this.ear_types.push(item);
        if (item.list == 'tail_types')
          this.tail_types.push(item);
        if (item.list == 'move_types')
          this.move_types.push(item);
      });
      if (this.curId) {
        this.animal = this.route.snapshot.data.animal;
        this.patchPetMain();
        this.patchPetAdditional();
        this.patchPetCatchInfo();
        this.patchPetMove();
        this.patchPetResponsible();
        if (this.animal.species == 'собака')
          this.refreshDictionary('собака');
        else
          this.refreshDictionary('кошка');

        this.animalService.getPetHealth(this.curId).pipe(takeUntil(this.destroy$)).subscribe(data => {
          if (data) {
            this.healthOrders = data;
            this.initPetHealth();
          }
        });
        this.animalService.getPetOwner(this.curId).pipe(takeUntil(this.destroy$)).subscribe(data => {
          if (data)
            this.patchPetOwners(data);
        });
        this.animalService.getPetSanitation(this.curId).pipe(takeUntil(this.destroy$)).subscribe(data => {
          if (data) {
            this.sanitationOrders = data;
            this.initPetSanitation();
          }
        });
        this.animalService.getPetVaccination(this.curId).pipe(takeUntil(this.destroy$)).subscribe(data => {
          if (data) {
            this.vaccinationOrders = data;
            this.initPetVaccination();
          }
        });
      } else {
        this.addHealthOrder();
        this.addPetSanitation();
        this.addPetVaccination();
      }
    });
  }

  goBack() {
    this.location.back();
  }


  speciesChanged(event: any) {
    if (event.value == 'собака') {
      this.refreshDictionary('собака');
    } else {
      this.refreshDictionary('кошка');
    }
  }

  refreshDictionary(value: string) {
    if (value == 'собака') {
      this.breeds = this.dictionary.filter(item => item.list == 'dog_breeds');
      this.hair_colors = this.dictionary.filter(item => item.list == 'dog_colors');
      this.hair_types = this.dictionary.filter(item => item.list == 'dog_hair_types');
    } else {
      this.breeds = this.dictionary.filter(item => item.list == 'cat_breeds');
      this.hair_colors = this.dictionary.filter(item => item.list == 'cat_colors');
      this.hair_types = this.dictionary.filter(item => item.list == 'cat_hair_types');
    }
  }

  createPetMain() {
    this.petMain = this.fb.group({
      "card_num": ["", [Validators.required]],
      "species": ["", [Validators.required]],
      "age": ["", [Validators.required]],
      "weight": ["", [Validators.required]],
      "name": ["", [Validators.required]],
      "gender": ["", [Validators.required]],
      "breed": ["", [Validators.required]],
      "hair_color": ["", [Validators.required]],
      "hair_type": ["", [Validators.required]],
      "ears_type": ["", [Validators.required]],
      "tail_type": ["", [Validators.required]],
      "size": ["", [Validators.required]],
      "special": ["", [Validators.required]],
      "enclosure": ["", [Validators.required]],
    });
  }

  createPetAdditional() {
    this.petAdditional = this.fb.group({
      "id_tag": ["", [Validators.required]],
      "ster_date": ["", [Validators.required]],
      "doctor": ["", [Validators.required]],
      "socialised": ["", [Validators.required]],
    });
  }

  createPetCatchInfo() {
    this.petCatchInfo = this.fb.group({
      "order_num": ["", [Validators.required]],
      "order_date": ["", [Validators.required]],
      "district": ["", [Validators.required]],
      "catch_report": ["", [Validators.required]],
      "catch_address": ["", [Validators.required]],
    });
  }

  createPetHealth() {
    this.petHealth = this.fb.group({
      "healthOrders": this.fb.array([])
    });
  }

  initPetHealth() {
    let orders = this.petHealth.controls.healthOrders as FormArray;
    this.healthOrders.forEach(order => {
      orders.push(this.fb.group({
        "check_date": [order.check_date, [Validators.required]],
        "anamnesis": [order.anamnesis, [Validators.required]]
      }));
    })
  }

  addHealthOrder() {
    let orders = this.petHealth.controls.healthOrders as FormArray;
    orders.push(this.fb.group({
      "check_date": ["", [Validators.required]],
      "anamnesis": ["", [Validators.required]]
    }));
  }

  deleteHealthOrder(index: number) {
    let orders = this.petHealth.controls.healthOrders as FormArray;
    orders.removeAt(index);
  }

  createPetSanitation() {
    this.petSanitation = this.fb.group({
      "sanitationOrders": this.fb.array([])
    });
  }

  initPetSanitation() {
    let orders = this.petSanitation.controls.sanitationOrders as FormArray;
    this.sanitationOrders.forEach(order => {
      orders.push(this.fb.group({
        "order": [order.order, [Validators.required]],
        "date": [order.date, [Validators.required]],
        "medicine": [order.medicine, [Validators.required]],
        "dose": [order.dose, [Validators.required]]
      }));
    })
  }

  addPetSanitation() {
    let orders = this.petSanitation.controls.sanitationOrders as FormArray;
    orders.push(this.fb.group({
      "order": ["", [Validators.required]],
      "date": ["", [Validators.required]],
      "medicine": ["", [Validators.required]],
      "dose": ["", [Validators.required]]
    }));
  }

  deletePetSanitation(index: number) {
    let orders = this.petSanitation.controls.sanitationOrders as FormArray;
    orders.removeAt(index);
  }

  createPetVaccination() {
    this.petVaccination = this.fb.group({
      "vaccinationOrders": this.fb.array([])
    });
  }

  initPetVaccination() {
    let orders = this.petVaccination.controls.vaccinationOrders as FormArray;
    this.vaccinationOrders.forEach(order => {
      orders.push(this.fb.group({
        "order": [order.order, [Validators.required]],
        "date": [order.date, [Validators.required]],
        "vaccine": [order.vaccine, [Validators.required]],
        "series": [order.series, [Validators.required]]
      }));
    })
  }

  addPetVaccination() {
    let orders = this.petVaccination.controls.vaccinationOrders as FormArray;
    orders.push(this.fb.group({
      "order": ["", [Validators.required]],
      "date": ["", [Validators.required]],
      "vaccine": ["", [Validators.required]],
      "series": ["", [Validators.required]]
    }));
  }

  deletePetVaccination(index: number) {
    let orders = this.petVaccination.controls.vaccinationOrders as FormArray;
    orders.removeAt(index);
  }

  createPetMove() {
    this.petMove = this.fb.group({
      "date_in": ["", [Validators.required]],
      "act": ["", [Validators.required]],
      "date_out": ["", []],
      "reason": ["", []],
      "order": ["", []],
    });
  }

  createPetOwners() {
    this.petOwners = this.fb.group({
      "legal_entity": ["", []],
      "guardian": ["", []],
      "individual": ["", []],
    });
  }

  createPetResponsible() {
    this.petResponsible = this.fb.group({
      "shelter": ["", [Validators.required]],
      "person": ["", [Validators.required]],
    });
  }


  patchPetMain() {
    this.petMain.patchValue(
      {
        card_num: this.animal.card_num,
        species: this.animal.species,
        age: this.animal.age,
        weight: this.animal.weight,
        name: this.animal.name,
        gender: this.animal.gender,
        breed: this.animal.breed,
        hair_color: this.animal.hair_color,
        hair_type: this.animal.hair_type,
        ears_type: this.animal.ears_type,
        tail_type: this.animal.tail_type,
        size: this.animal.size,
        special: this.animal.special,
        enclosure: this.animal.enclosure,
      });
  }

  patchPetAdditional() {
    this.petAdditional.patchValue(
      {
        id_tag: this.animal.Pets_additional.id_tag,
        ster_date: this.animal.Pets_additional.ster_date,
        doctor: this.animal.Pets_additional.doctor,
        socialised: this.animal.Pets_additional.socialised,
      });
  }

  patchPetCatchInfo() {
    this.petCatchInfo.patchValue(
      {
        order_num: this.animal.Pets_catch_info.order_num,
        order_date: this.animal.Pets_catch_info.order_date,
        district: this.animal.Pets_catch_info.district,
        catch_report: this.animal.Pets_catch_info.catch_report,
        catch_address: this.animal.Pets_catch_info.catch_address
      });
  }

  patchPetHealth(data: any) {
    this.petHealth.patchValue({
      check_data: data.check_data,
      anamnesis: data.anamnesis
    });
  }

  patchPetMove() {
    this.petMove.patchValue({
      date_in: this.animal.Pets_move.date_in,
      act: this.animal.Pets_move.act,
      date_out: this.animal.Pets_move.date_out,
      reason: this.animal.Pets_move.reason,
      order: this.animal.Pets_move.order
    });
  }

  patchPetOwners(data: any) {
    this.petOwners.patchValue({
      legal_entity: data.legal_entity,
      guardian: data.guardian,
      individual: data.individual,
    });
  }

  patchPetResponsible() {
    this.petResponsible.patchValue({
      shelter: this.animal.shelter_id,
      person: this.animal.Pets_responsible.person,
    });
  }

  patchPetSanitation(data: any) {
    this.petSanitation.patchValue({
      order: data.order,
      date: data.date,
      medicine: data.medicine,
      dose: data.dose,
    });
  }

  patchPetVaccination(data: any) {
    this.petVaccination.patchValue({
      order: data.order,
      date: data.date,
      vaccine: data.vaccine,
      series: data.series,
    });
  }

  createPet() {
    let main = this.petMain.value;
    main.shelter_id = this.petResponsible.get('shelter').value;
    let additional = this.petAdditional.value;
    let catch_info = this.petCatchInfo.value;
    let move = this.petMove.value;
    let responsible = this.petResponsible.value;
    let owner = this.petOwners.value;

    let health = this.petHealth.value.healthOrders;
    let sanit = this.petSanitation.value.sanitationOrders;
    let vaccine = this.petVaccination.value.vaccinationOrders;

    this.animalService.postPetMain(main).pipe(takeUntil(this.destroy$)).subscribe(data => {
      let pet_id = data['id'];
      health.forEach(e => {
        e.pet_num = pet_id;
      });
      vaccine.forEach(e => {
        e.pet_num = pet_id;
      });
      sanit.forEach(e => {
        e.pet_num = pet_id;
      });

      this.animalService.postPetAdditional(additional, pet_id).pipe(takeUntil(this.destroy$)).subscribe(res => {
        console.log(res);
      })
      this.animalService.postPetCatchInfo(catch_info, pet_id).pipe(takeUntil(this.destroy$)).subscribe(res => {
        console.log(res);
      })
      this.animalService.postPetMove(move, pet_id).pipe(takeUntil(this.destroy$)).subscribe(res => {
        console.log(res);
      })
      this.animalService.postPetResponsible(responsible, pet_id).pipe(takeUntil(this.destroy$)).subscribe(res => {
        console.log(res);
      })
      this.animalService.postPetOwner(owner, pet_id).pipe(takeUntil(this.destroy$)).subscribe(res => {
        console.log(res);
      })
      this.animalService.postPetHealth(health, pet_id).pipe(takeUntil(this.destroy$)).subscribe(res => {
        console.log(res);
      })
      this.animalService.postPetSanitation(sanit, pet_id).pipe(takeUntil(this.destroy$)).subscribe(res => {
        console.log(res);
      })
      this.animalService.postPetVactination(vaccine, pet_id).pipe(takeUntil(this.destroy$)).subscribe(res => {
        console.log(res);
      })

    })

    this.router.navigate(["admin-panel/animals"]);
  }

  updatePet() {
    let main = this.petMain.value;
    main.shelter_id = this.petResponsible.get('shelter').value;
    let additional = this.petAdditional.value;
    let catch_info = this.petCatchInfo.value;
    let move = this.petMove.value;
    let responsible = this.petResponsible.value;
    let owner = this.petOwners.value;

    let health = this.petHealth.value.healthOrders;
    let sanit = this.petSanitation.value.sanitationOrders;
    let vaccine = this.petVaccination.value.vaccinationOrders;

    health.forEach(e => {
      e.pet_num = this.curId;
    });
    vaccine.forEach(e => {
      e.pet_num = this.curId;
    });
    sanit.forEach(e => {
      e.pet_num = this.curId;
    });
    this.animalService.updatePetMain(main, this.curId).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log(data);
    })
    this.animalService.updatePetAdditional(additional, this.curId).pipe(takeUntil(this.destroy$)).subscribe(res => {
      console.log(res);
    })
    this.animalService.updatePetCatchInfo(catch_info, this.curId).pipe(takeUntil(this.destroy$)).subscribe(res => {
      console.log(res);
    })
    this.animalService.updatePetMove(move, this.curId).pipe(takeUntil(this.destroy$)).subscribe(res => {
      console.log(res);
    })
    this.animalService.updatePetResponsible(responsible, this.curId).pipe(takeUntil(this.destroy$)).subscribe(res => {
      console.log(res);
    })
    this.animalService.postPetOwner(owner, this.curId).pipe(takeUntil(this.destroy$)).subscribe(res => {
      console.log(res);
    })
    this.animalService.postPetHealth(health, this.curId).pipe(takeUntil(this.destroy$)).subscribe(res => {
      console.log(res);
    })
    this.animalService.postPetSanitation(sanit, this.curId).pipe(takeUntil(this.destroy$)).subscribe(res => {
      console.log(res);
    })
    this.animalService.postPetVactination(vaccine, this.curId).pipe(takeUntil(this.destroy$)).subscribe(res => {
      console.log(res);
    })

    this.router.navigate(["admin-panel/animals"]);
  }

  formValid() {
    if (this.petMain.valid && this.petAdditional.valid && this.petCatchInfo.valid && this.petMove.valid && this.petResponsible.valid)
      return true;
  }

}

