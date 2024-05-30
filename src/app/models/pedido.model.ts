import { Cliente } from "./cliente.model";
import { PedidoProduto } from "./pedido-produto.model";

export class Pedido {
  constructor(
    public id: number,
    public cliente: Cliente,
    public produtos: PedidoProduto[],
    public total: number
  ) {}

}