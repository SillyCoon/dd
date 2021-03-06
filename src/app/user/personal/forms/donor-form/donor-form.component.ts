import { DropdownElement } from './../../models/dropdown-element';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { DonorFormService } from './donor-form.service';

@Component({
  selector: 'user-donor-form',
  templateUrl: './donor-form.component.html',
  styleUrls: ['./donor-form.component.scss']
})
export class DonorFormComponent implements OnInit {

  donorFormGroup: FormGroup;
  weightOptions: Observable<DropdownElement[]>;
  citizenshipOptions: Observable<DropdownElement[]>;
  registrationOptions: Observable<DropdownElement[]>;

  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();

  constructor(private _formBuilder: FormBuilder, private donorFormService: DonorFormService) {

  }

  ngOnInit() {
    this.donorFormGroup = this._formBuilder.group({
      weight: [''],
      citizenship: [''],
      registration: ['']
    });
    this.subscribeInfo();
    this.formReady.emit(this.donorFormGroup);
  }

  /**
   * Получаем Observables на гражданство и вес, потом через | asynс данные
   */
  subscribeInfo() {
    this.citizenshipOptions = this.donorFormService.getCitizenshipOptions();
    this.weightOptions = this.donorFormService.getWeightOptions();
    this.registrationOptions = this.donorFormService.getRegistrationOptions();
  }
}
