import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule
  ],
  templateUrl: './client-edit.component.html',
  styleUrl: './client-edit.component.css'
})
export class ClientEditComponent implements OnInit {
  cliente: Cliente;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) {
    this.cliente = new Cliente(0, '', '');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const cliente = this.clienteService.getClientes().find(c => c.id === +id);
      if (cliente) {
        this.cliente = cliente;
      }
    }
  }

  updateCliente(): void {
    this.clienteService.updateCliente(this.cliente);
    this.router.navigate(['/clients']);
  }
}
