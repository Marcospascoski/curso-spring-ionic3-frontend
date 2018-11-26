import { RefDTO } from "./ref.dto";
import { PagamentoDTO } from "./pagamento.dto";
import { itemPedidoDTO } from "./item-pedido.dto";

export interface PedidoDTO{
    cliente: RefDTO;
    enderecoDeEntrega: RefDTO;
    pagamento: PagamentoDTO;
    itens: itemPedidoDTO[];
}