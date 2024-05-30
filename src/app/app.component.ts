import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterModule,
    CommonModule,
    FormsModule,
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductEditComponent,
    ProductDeleteComponent,
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'Trabalho CRUD';
}
