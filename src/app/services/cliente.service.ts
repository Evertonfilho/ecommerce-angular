import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private localStorageKey = 'clientes';

  constructor() {}

  getClientes(): Cliente[] {
    const clientes = localStorage.getItem(this.localStorageKey);
    return clientes ? JSON.parse(clientes) : [];
  }

  addCliente(cliente: Cliente): void {
    const clientes = this.getClientes();
    clientes.push(cliente);
    localStorage.setItem(this.localStorageKey, JSON.stringify(clientes));
  }

  updateCliente(cliente: Cliente): void {
    const clientes = this.getClientes();
    const index = clientes.findIndex(c => c.id === cliente.id);
    if (index !== -1) {
      clientes[index] = cliente;
      localStorage.setItem(this.localStorageKey, JSON.stringify(clientes));
    }
  }

  deleteCliente(id: number): void {
    let clientes = this.getClientes();
    clientes = clientes.filter(c => c.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(clientes));
  }
}
