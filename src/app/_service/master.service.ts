import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../../_model/posts';
import { Customer } from '../../_model/Customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true // Include credentials in the request
  };

  constructor(private http: HttpClient) {}

  // getall() {
  //   return this.http.get<Posts[]>('http://localhost:3000/posts');
  // }

  GetAllCustomer() {
    return this.http.get<Customer[]>('http://localhost:5187/api/test', this.httpOptions);
  }

  GetCustomerbycode(id: string) {
    return this.http.get<Customer>('http://localhost:5187/api/test/' + id, this.httpOptions);
  }

  CreateCustomer(customer: Customer) {
    return this.http.post('http://localhost:5187/api/test', customer, this.httpOptions);
  }

  UpdateCustomer(customer: Customer) {
    return this.http.put('http://localhost:5187/api/test/' + customer.Id, customer, this.httpOptions);
  }
  
  DeleteCustomer(id: string) {
    return this.http.delete('http://localhost:5187/api/test/' + id, this.httpOptions);
  }

  haveaccess() {
    return true;
  }
}
