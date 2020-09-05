import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Customer } from "../interfaces/customer";
import { Observable } from 'rxjs';
import { map, share, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // customerRef = a reference to the customer collection on the DB
  private customerRef: AngularFirestoreCollection<Customer>;
  private customers$: Observable<Customer[]>;

  selectedCustomer = null;

  constructor(private afs: AngularFirestore) {
    this.customerRef = afs.collection('customer');

    this.customers$ = this.customerRef
    .valueChanges({ idField: 'id' })
    .pipe(shareReplay(1))
  }

  add(customer: Customer) {
    return this.customerRef.add(customer);
  }

  update(id: string, customer: Customer) {
    return this.customerRef.doc(id).update(customer)
  }

  getAll() {
    return this.customers$;
  }

  remove(id: string) {
    return this.customerRef.doc(id).delete();
  }

  getOne(id: string): Observable<Customer> {
    return this.customerRef
    .doc<Customer>(id)
    .valueChanges()
    .pipe(
      map((doc) => {
        if (doc) {
          return { id, ...doc };
        }
        return null;
      })
    );
  }

  // deleteDB() {
  //   this.customerRef.get().then((snapshot) => {
  //     snapshot.docs.forEach(doc => {

  //     });
  //   })
  // }
}
