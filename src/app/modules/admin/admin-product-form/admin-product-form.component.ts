import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: `app-admin-product-form`,
    template: `
    <div [formGroup]="parentForm" fxLayout="column">
        <mat-form-field appearance="fill">
            <mat-label>Nazwa</mat-label>
            <input matInput placeholder="Podaj nazwe produktu" formControlName="name">
        </mat-form-field>

        <mat-form-field>
            <mat-label>Opis</mat-label>
            <textarea rows="20" matInput placeholder="Podaj opis produktu" formControlName="description"></textarea>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Kategoria</mat-label>
            <input matInput placeholder="Podaj kategorie produktu" formControlName="category">
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Cena</mat-label>
            <input matInput placeholder="Podaj cene produktu" formControlName="price">
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Waluta</mat-label>
            <input matInput placeholder="Podaj walute" formControlName="currency">
        </mat-form-field>

        <div fxLayoutAlign="end">
            <button mat-flat-button color="warn"> Zapisz </button>
        </div>
    </div>`
})
export class AdminProductFromComponent implements OnInit {

    
    @Input() parentForm!: FormGroup;
    
    ngOnInit(): void {
    
    }

}