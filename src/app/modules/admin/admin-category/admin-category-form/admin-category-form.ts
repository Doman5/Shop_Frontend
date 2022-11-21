import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: `app-admin-category-form`,
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

        <mat-form-field>
            <mat-label>Opis</mat-label>
            <textarea rows="10" matInput placeholder="Podaj opis produktu" formControlName="description"></textarea>
            <div *ngIf="description?.invalid && (description?.dirty || description?.touched)">
                <div *ngIf="description?.errors?.['required']" class="errorMessage">
                     Opis jest wymagana
                </div>
                <div *ngIf="description?.errors?.['minlength']" class="errorMessage">
                    Opis musi mieć conajmniej 4 znaki
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
export class AdminCategoryFormComponent implements OnInit {

    constructor(){
        
    }
    
    @Input() parentForm!: FormGroup;
    
    ngOnInit(): void {
    }


    get name() {
        return this.parentForm.get("name")
    }

    get description() {
        return this.parentForm.get("description")
    }

    get slug() {
        return this.parentForm.get("slug")
    }
}