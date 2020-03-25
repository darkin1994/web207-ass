import {Component, OnInit} from '@angular/core';
import {Product} from "../Product";
import {ServiceProductService} from '../Service/service-product.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  data: Product[];
  // tslint:disable-next-line:variable-name
  private service: ServiceProductService;

  constructor(private _service: ServiceProductService) {
    this.service = _service;
  }

  ngOnInit(): void {
    this.getproduct();
  }

  getproduct(): void {
    this._service.getListProduct().subscribe(data => {
      this.data = data;
    });
  }
}

