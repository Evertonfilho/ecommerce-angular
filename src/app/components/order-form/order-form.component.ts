import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Cliente } from '../../models/cliente.model';
import { PedidoProduto } from '../../models/pedido-produto.model';
import { Pedido } from '../../models/pedido.model';
import { Produto } from '../../models/produto.model';
import { ClienteService } from '../../services/cliente.service';
import { PedidoService } from '../../services/pedido.service';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  clientes: Cliente[] = [];
  produtos: Produto[] = [];
  selectedCliente: Cliente | null = null;
  selectedProduto: Produto | null = null;
  quantidade: number = 1;

  constructor(
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    private pedidoService: PedidoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
    this.produtos = this.produtoService.getProdutos();
  }

  addPedido(): void {
    if (this.selectedCliente && this.selectedProduto) {
      const pedidoProduto: PedidoProduto = {
        produto: this.selectedProduto,
        quantidade: this.quantidade
      };
      const total = this.selectedProduto.preco * this.quantidade;
      const pedido = new Pedido(Date.now(), this.selectedCliente, [pedidoProduto], total);
      this.pedidoService.addPedido(pedido);
      this.router.navigate(['/orders']);
    }
  }
}
