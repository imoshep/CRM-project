import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customerID: Observable<string> = null;
  customer$: Observable<Customer> = null;

  constructor(
    private activatedRouteService: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    // get params observable - async
    this.customer$ = this.activatedRouteService.params.pipe(
      switchMap((params) => this.customerService.getOne(params.id))
    );

    this.activatedRouteService.params.subscribe(data => this.customerID = data.id)
   }


}
