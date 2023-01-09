import { Component, Input } from "@angular/core";
import { IProduct } from "src/app/models/product";

@Component ({
    selector: "product",
    templateUrl: "./product.component.html"
})
export class Product {
    @Input() product: IProduct;
    details = false;
}