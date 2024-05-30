import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  produto: Produto = new Produto(0, '', '', 0, '', true,0);

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  addProduto(): void {
    this.produto.id = Date.now();
    this.produtoService.addProduto(this.produto);
    this.router.navigate(['/products']);
  }
}
