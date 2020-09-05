import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Customer } from '../../interfaces/customer';
import { CustomerService } from "../../services/customer.service";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  form = {
    firstName: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  }

  constructor(
    private routerService: Router,
    private customerService: CustomerService
  ) {}

  // onSubmit({ value, valid } : { value:Customer; valid:boolean }): void {
  // onSubmit(form) : void {
  //   if (form.valid) {
  //     this.customerService.add(form.value);
  //     form.resetForm()
  //   }
  // }

  async onSubmit({ value, valid }: { value: Customer; valid: boolean }) {
    if (valid) {
      await this.customerService.add(value);
      this.routerService.navigate(['/customers']);
    }
  }


  resetForm(form) {
    form.resetForm();
  }

  ngOnInit(): void {
  }

}
