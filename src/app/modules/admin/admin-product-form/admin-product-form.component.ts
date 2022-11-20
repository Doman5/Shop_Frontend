import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: `app-admin-product-form`,
    template: `
    <div [formGroup]="parentForm" fxLayout="column">
        <mat-form-field appearance="fill">
            <mat-label>Nazwa</mat-label>
            <input matInput placeholder="Podaj nazwe produktu" formControlName="name">
            <div *ngIf="name?.invalid && (name?.dirty || name?.touched)">
                <div *ngIf="name?.errors?.['required']" class="errorMessage">
                    Nazwa jest wymagana
                </div>
                <div *ngIf="name?.errors?.['minlength']" class="errorMessage"> 
                    Nazwa musi mieć conajmniej 4 znaki
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Przyjazny url</mat-label>
            <input matInput placeholder="Podaj url" formControlName="slug">
            <div *ngIf="slug?.invalid && (slug?.dirty || slug?.touched)">
                <div *ngIf="slug?.errors?.['required']" class="errorMessage">
                    Url jest wymagana
                </div>
                <div *ngIf="slug?.errors?.['minlength']" class="errorMessage"> 
                    Url musi mieć conajmniej 4 znaki
                </div>
            </div>
        </mat-form-field>

        <mat-form-field>
            <mat-label>Opis</mat-label>
            <textarea rows="20" matInput placeholder="Podaj opis produktu" formControlName="description"></textarea>
            <div *ngIf="description?.invalid && (description?.dirty || description?.touched)">
                <div *ngIf="description?.errors?.['required']" class="errorMessage">
                     Opis jest wymagana
                </div>
                <div *ngIf="name?.errors?.['minlength']" class="errorMessage">
                    Opis musi mieć conajmniej 4 znaki
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Kategoria</mat-label>
            <input matInput placeholder="Podaj kategorie produktu" formControlName="category">
            <div *ngIf="category?.invalid && (category?.dirty || category?.touched)">
                <div *ngIf="category?.errors?.['required']" class="errorMessage">
                    Kategoria jest wymagana
                </div>
                <div *ngIf="name?.errors?.['minlength']" class="errorMessage">
                    Kategoria musi mieć conajmniej 4 znaki
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Cena</mat-label>
            <input matInput placeholder="Podaj cene produktu" formControlName="price">
            <div *ngIf="price?.invalid && (price?.dirty || price?.touched)">
                <div *ngIf="price?.errors?.['required']" class="errorMessage">
                    Cena jest wymagana
                </div>
                <div *ngIf="price?.errors?.['min']" class="errorMessage">
                    Cena musi być większa od zera
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Waluta</mat-label>
            <input matInput placeholder="Podaj walute" formControlName="currency">
            <div *ngIf="currency?.invalid && (currency?.dirty || currency?.touched)">
                <div *ngIf="currency?.errors?.['required']" class="errorMessage">
                    Waluta jest wymagana
                </div>
            </div>
        </mat-form-field>

        <div fxLayoutAlign="end">
            <button mat-flat-button color="primary" [disabled]="!parentForm.valid"> Zapisz </button>
        </div>
    </div>`,
    styles: [`
        .errorMessage {
            color: red;
        }
    `]
})
export class AdminProductFromComponent implements OnInit {

    
    @Input() parentForm!: FormGroup;
    
    ngOnInit(): void {
    
    }

    get name() {
        return this.parentForm.get("name")
    }

    get description() {
        return this.parentForm.get("description")
    }

    get category() {
        return this.parentForm.get("category")
    }

    get price() {
        return this.parentForm.get("price")
    }

    get currency() {
        return this.parentForm.get("currency")
    }

    get slug() {
        return this.parentForm.get("slug")
    }

}