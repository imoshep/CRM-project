import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";
import {  Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/interfaces/customer';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  }

  constructor(
    private activatedRouteService: ActivatedRoute,
    private routerService: Router,
    private customerService: CustomerService
  ) { }

  async onSubmit({ value, valid }: { value: Customer; valid: boolean }) {
    if (valid) {
      await this.customerService.update(this.customer.id, value);
      this.routerService.navigate(['/customers']);
    }
  }

  ngOnInit(): void {
    //get customer observable
    this.activatedRouteService.params
    .pipe(switchMap(params => this.customerService.getOne(params?.id)))
    .subscribe(data => this.customer = data)
  }
}
