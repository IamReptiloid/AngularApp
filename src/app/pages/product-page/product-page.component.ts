import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/prodduct.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent implements OnInit {
  title = 'new-app';
  isLoading = false;
  search = '';

  constructor(
    public productService: ProductService,
    public modalService: ModalService,
    private cdr: ChangeDetectorRef
    ) {}

  ngOnInit() {
    // this.products = this.productService.getAll().pipe(
    //   tap(() => this.isLoading = false)
    // )
    if(this.productService.products.length === 0) {
      this.isLoading = true;
      this.productService.getAll().subscribe(() => {
        this.isLoading = false;
        this.cdr.detectChanges();
      })
    }
    
  }
}
