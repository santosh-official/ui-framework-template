import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CargillModalService } from 'cargill-modal';
import { CargillSpinnerService } from 'cargill-spinner';
import { CommonService } from 'src/app/ui-common/services/common.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})

export class SupportComponent implements OnInit {

  caroiselgallery = [
    { "image": "../../../assets/images/carousel/carousel-1.jpg", "alt": "image-one" },
    { "image": "../../../assets/images/carousel/carousel-2.jpg", "alt": "image-second" },
    { "image": "../../../assets/images/carousel/carousel-3.jpg", "alt": "image-third" },
  ];

  listGroupItem = [
    { name: 'Home', description: 'This is home list group' },
    { name: 'Profile', description: 'This is profile list group' },
    { name: 'Message', description: 'This is message list group' },
    { name: 'Settings', description: 'This is settings list group' },
  ];

  technology = [
    { name: 'Frontend Developer', checked: false },
    { name: 'Backend Developer', checked: false },
    { name: 'Fullstack Developer', checked: true }
  ];

  enterprise = [
    { value: 'agriculturalsupplychain', label: 'Agricultural Supply Chain' },
    { value: 'animalnutrition', label: 'Animal Nutrition And Health' },
    { value: 'corporatefunction', label: 'Corporate Function' },
    { value: 'proteinsalt', label: 'Protein & Salt' },
    { value: 'foodingredients', label: 'Food Ingredients & Bio-Industrial' },
    { value: 'metalsshipping', label: 'Metals & Shipping' }
  ]

  employement = [
    { value: "permanent", label: "Permanent" },
    { value: "contractor", label: "Contractor" },
  ];

  tableData!: any;

  submitted = false;
  submitForm!: FormGroup;

  carousel: boolean = false;
  alert: boolean = false;
  tiles: boolean = false;
  collapse: boolean = false;
  card: boolean = false;
  listGroup: boolean = false;
  modal: boolean = false;
  progressbar: boolean = false;
  imageCard: boolean = false;
  spinner: boolean = false;

  constructor(private commonService: CommonService, private formBuilder: FormBuilder, private cargillSpinner: CargillSpinnerService, private modalService: CargillModalService) { }

  ngOnInit(): void {
    this.commonService.fetchTableInformation().subscribe((response) => {
      this.tableData = response;
    });
    this.submitForm = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      password: [null, Validators.required],
      technology: new FormArray([]),
      employement: [null, Validators.required],
      enterprise: [null, Validators.required],
      date: [null, Validators.required],
      comments: [null, Validators.required],
      file: [null, Validators.required],
      accept: [false, Validators.requiredTrue],
    });
    this._patchValues();
  }

  private _patchValues() {
    const formArray = this.submitForm.get('technology') as FormArray;
    this.technology.forEach(fruit => {
      formArray.push(new FormGroup({
        name: new FormControl(fruit.name),
        checked: new FormControl(fruit.checked)
      }))
    })
  }

  showCarousel() {
    this.carousel = true;
    this.alert = false;
    this.tiles = false;
    this.collapse = false;
    this.card = false;
    this.listGroup = false;
    this.modal = false;
    this.progressbar = false;
    this.imageCard = false;
    this.spinner = false;
  }

  showAlert() {
    this.carousel = false;
    this.alert = true;
    this.tiles = false;
    this.collapse = false;
    this.card = false;
    this.listGroup = false;
    this.modal = false;
    this.progressbar = false;
    this.imageCard = false;
    this.spinner = false;
  }

  showTiles() {
    this.carousel = false;
    this.alert = false;
    this.tiles = true;
    this.collapse = false;
    this.card = false;
    this.listGroup = false;
    this.modal = false;
    this.progressbar = false;
    this.imageCard = false;
    this.spinner = false;
  }

  showCollapse() {
    this.carousel = false;
    this.alert = false;
    this.tiles = false;
    this.collapse = true;
    this.card = false;
    this.listGroup = false;
    this.modal = false;
    this.progressbar = false;
    this.imageCard = false;
    this.spinner = false;
  }

  showCard() {
    this.carousel = false;
    this.alert = false;
    this.tiles = false;
    this.collapse = false;
    this.card = true;
    this.listGroup = false;
    this.modal = false;
    this.progressbar = false;
    this.imageCard = false;
    this.spinner = false;
  }

  showListGroup() {
    this.carousel = false;
    this.alert = false;
    this.tiles = false;
    this.collapse = false;
    this.card = false;
    this.listGroup = true;
    this.modal = false;
    this.progressbar = false;
    this.imageCard = false;
    this.spinner = false;
  }

  showModal() {
    this.carousel = false;
    this.alert = false;
    this.tiles = false;
    this.collapse = false;
    this.card = false;
    this.listGroup = false;
    this.modal = true;
    this.progressbar = false;
    this.imageCard = false;
    this.spinner = false;
  }

  showProgressbar() {
    this.carousel = false;
    this.alert = false;
    this.tiles = false;
    this.collapse = false;
    this.card = false;
    this.listGroup = false;
    this.modal = false;
    this.progressbar = true;
    this.imageCard = false;
    this.spinner = false;
  }

  showImageCard() {
    this.carousel = false;
    this.alert = false;
    this.tiles = false;
    this.collapse = false;
    this.card = false;
    this.listGroup = false;
    this.modal = false;
    this.progressbar = false;
    this.imageCard = true;
    this.spinner = false;
  }

  showSpinner() {
    this.cargillSpinner.show();
    this.carousel = false;
    this.alert = false;
    this.tiles = false;
    this.collapse = false;
    this.card = false;
    this.listGroup = false;
    this.modal = false;
    this.progressbar = false;
    this.imageCard = false;
    this.spinner = true;
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.submitForm.valid) {
      alert(JSON.stringify(this.submitForm.value));
    }
  }

  openModal() {
    let modalOption = {
      header: 'Modal Header',
      body: 'Modal body goes here ...',
      size: 'large',
      btnName: 'Cancel'
    }
    this.modalService.showDefaultModalComponent(modalOption)
  }
}
