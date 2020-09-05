import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/interfaces/customer';
import { Observable } from 'rxjs';
import { seedData } from "./data";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Observable<Customer[]> = null;
  selectedCustomers: Customer[] = [];
  selectedOne = null;

  constructor(private customerService: CustomerService) {
    this.customers = this.customerService.getAll()
  }

  initialize() {
    seedData.forEach((item) => this.customerService.add(item))
  }

  remove(id: string) {
    this.customerService.remove(id);
  }

  addToSelected(id: string) {
    this.selectedOne = this.customerService.getOne(id);
    this.selectedCustomers.push(this.selectedOne);
    console.log(this.selectedCustomers)
  }

  // clearDB() {
  //   this.customerService
  // }

  ngOnInit(): void {
  }
}
