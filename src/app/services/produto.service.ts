import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private localStorageKey = 'produtos';

  constructor() {}

  getProdutos(): Produto[] {
    const produtos = localStorage.getItem(this.localStorageKey);
    return produtos ? JSON.parse(produtos) : [];
  }

  addProduto(produto: Produto): void {
    const produtos = this.getProdutos();
    produtos.push(produto);
    localStorage.setItem(this.localStorageKey, JSON.stringify(produtos));
  }

  updateProduto(produto: Produto): void {
    const produtos = this.getProdutos();
    const index = produtos.findIndex(p => p.id === produto.id);
    if (index !== -1) {
      produtos[index] = produto;
      localStorage.setItem(this.localStorageKey, JSON.stringify(produtos));
    }
  }

  deleteProduto(id: number): void {
    let produtos = this.getProdutos();
    produtos = produtos.filter(p => p.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(produtos));
  }
}
