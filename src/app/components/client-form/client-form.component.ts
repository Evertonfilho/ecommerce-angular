import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {
  cliente: Cliente = new Cliente(0, '', '');

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  addCliente(): void {
    this.cliente.id = Date.now(); 
    this.clienteService.addCliente(this.cliente);
    this.router.navigate(['/clients']);
  }
}
