import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-delete',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule
  ],
  templateUrl: './client-delete.component.html',
  styleUrl: './client-delete.component.css'
})
export class ClientDeleteComponent implements OnInit {
  cliente: Cliente | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const cliente = this.clienteService.getClientes().find(c => c.id === +id);
      if (cliente) {
        this.cliente = cliente;
      }
    }
  }

  deleteCliente(): void {
    if (this.cliente) {
      this.clienteService.deleteCliente(this.cliente.id);
      this.router.navigate(['/clients']);
    }
  }
}
