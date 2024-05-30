import { Produto } from "./produto.model";

export class PedidoProduto {
    constructor(
      public produto: Produto,
      public quantidade: number
    ) {}
  }