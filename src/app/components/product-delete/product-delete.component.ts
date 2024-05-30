import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit {
  produto: Produto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {
    this.produto = new Produto(0, '', '', 0, '', true,0);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const produto = this.produtoService.getProdutos().find(p => p.id === +id);
      if (produto) {
        this.produto = produto;
      }
    }
  }

  deleteProduto(): void {
    this.produtoService.deleteProduto(this.produto.id);
    this.router.navigate(['/products']);
  }
}