import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent {
  fullName: string = '';
  shortName: string = '';
  contactEmail: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const product = {
      fullName: this.fullName,
      shortName: this.shortName,
      contactEmail: this.contactEmail
    };

    this.http.post('http://localhost:8081/db/product', product)
      .subscribe(response => {
        console.log('Product saved successfully', response);
      }, error => {
        console.error('Error saving product', error);
      });
  }
}