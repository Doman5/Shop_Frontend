import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminMessageService } from '../admin-message/admin-message.service';
import { AdminProductAddService } from './admin-product-add.service';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.scss']
})
export class AdminProductAddComponent implements OnInit {

  productForm!: FormGroup;
  imageForm!: FormGroup;
  image: string | null = null;
  reqiuredFileTypes = "image/jpeg, image/png"

  constructor(
    private formBuilder: FormBuilder,
    private adminProductAddService: AdminProductAddService,
    private router: Router,
    private snacBar: MatSnackBar,
    private adminMessageService: AdminMessageService
    ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(4)]],
      fullDescription: ['', [Validators.required, Validators.minLength(4)]],
      category: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required, Validators.min(0)]],
      currency: ['PLN', Validators.required],
      slug: ['',[Validators.required,Validators.minLength(4)]]
    });
    this.imageForm = this.formBuilder.group({
      file: ['']
    })
  }

  submit() {
    this.adminProductAddService.saveNewProduct(this.productForm.value)
    .subscribe({
      next: product => {
      this.router.navigate(["/admin/products/update", product.id])
      .then(() => this.snacBar.open("Produkt zosatał dodany", "", {duration:3000}))
    },
    error: err => this.adminMessageService.addSpringError(err.error)
  })
  }

  uploadFile() {
    let formData = new FormData();
    formData.append('file', this.imageForm.get("file")?.value);
    this.adminProductAddService.uploadImage(formData)
        .subscribe(result => this.image = result.filename);
  }

  onFileChange(event: any) {
    if(event.target.files.length > 0) {
      this.imageForm.patchValue({
        file: event.target.files[0]
      });
    }
  } 
}
