import { useState } from "react";

function CardProduto({ produto }) {
  const [quantidade, setQuantidade] = useState(produto.quantidade);

  function aumentar() {
    setQuantidade(quantidade + 1);
  }

  function diminuir() {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  }

  return (
    <div className="produto">
      <div>
        <h3>{produto.nome}</h3>
        <p>Categoria: {produto.categoria}</p>
        <p>Quantidade:{quantidade}</p>

       
      </div>

      <div className="controle">
        <button onClick={diminuir}>
          - 
        </button>

        <button onClick={aumentar}>
          + 
        </button>
      </div>
    </div>
  );
}

export default CardProduto;