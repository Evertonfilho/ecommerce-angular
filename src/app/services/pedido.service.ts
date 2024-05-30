// src/app/services/pedido.service.ts
import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private localStorageKey = 'pedidos';

  constructor() {}

  getPedidos(): Pedido[] {
    const pedidos = localStorage.getItem(this.localStorageKey);
    return pedidos ? JSON.parse(pedidos) : [];
  }

  addPedido(pedido: Pedido): void {
    const pedidos = this.getPedidos();
    pedidos.push(pedido);
    localStorage.setItem(this.localStorageKey, JSON.stringify(pedidos));
  }

  updatePedido(pedido: Pedido): void {
    const pedidos = this.getPedidos();
    const index = pedidos.findIndex(p => p.id === pedido.id);
    if (index !== -1) {
      pedidos[index] = pedido;
      localStorage.setItem(this.localStorageKey, JSON.stringify(pedidos));
    }
  }

  deletePedido(id: number): void {
    let pedidos = this.getPedidos();
    pedidos = pedidos.filter(p => p.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(pedidos));
  }
}
