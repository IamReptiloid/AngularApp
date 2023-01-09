import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http"
import { catchError, delay, Observable, throwError, tap } from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
}) 
export class ProductService {
    products: IProduct[] = []

    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) {}

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams().append('limit', 5)
        })
        .pipe(
            delay(200),
            tap(data => this.products = data),
            catchError(this.errorHandler.bind(this))
        );
    }

    errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError(() => error.message);
    }

    create(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
            .pipe(tap(data => this.products = [...this.products, data]));
    }
}