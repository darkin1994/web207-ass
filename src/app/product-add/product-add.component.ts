import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ServiceProductService} from '../Service/service-product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  add: Product = new Product();
  private service: ServiceProductService;
  // tslint:disable-next-line:variable-name
  constructor(private _service: ServiceProductService) {
    ServiceProductService
  }

  ngOnInit(): void {
  }
  Insert(product: Product) {
    this._service.insertProduct(product).subscribe(value => { console.log('Sucsses'); } );
  }
}
