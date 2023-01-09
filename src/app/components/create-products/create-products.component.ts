import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/prodduct.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProductsComponent {
	form = new FormGroup({
		title: new FormControl<string>('', [
			Validators.required,
			Validators.minLength(4)
		])
	});

	constructor(
		private productService: ProductService,
		private modalService: ModalService	
	) {}

	submit() {
		this.productService.create(
			{
				title: this.form.value.title as string,
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
			}
		).subscribe(() => this.modalService.close())
	}
}
