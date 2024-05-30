import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {
  produto: Produto = new Produto(0, '', '', 0, '', true, 0);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const produto = this.produtoService.getProdutos().find(p => p.id === +id);
      if (produto) {
        this.produto = produto;
      }
    }
  }

  updateProduto(): void {
    this.produtoService.updateProduto(this.produto);
    this.router.navigate(['/products']);
  }
}
