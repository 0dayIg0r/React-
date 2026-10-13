import { useState } from "react";
import CardProduto from "./CardProduto";

function ListaProdutos({ produtos,index }) {
 
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

  return (
    <section className="card">
      <div className="subTitulo">
        <h2>Produtos cadastrados</h2>

            <div className="filtro">
          <label htmlFor="filtro-categoria">Filtrar: </label>
          <select
            id="filtro-categoria"
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Informática">Informática</option>
            <option value="Móveis">Móveis</option>
            <option value="Eletrônicos">Eletrônicos</option>
          </select>
        </div>
      </div>

      {produtos.length === 0 && <p>Nenhum produto cadastrado.</p>}

      <div>
       {produtos
          .filter((produto) => {
            if (categoriaFiltro === "Todas") {
              return true; 
            } else {
              return produto.categoria === categoriaFiltro; 
            }
          })
          .map((produto) => (
            <CardProduto key={index} produto={produto} />
          ))}
      </div>
    </section>
  );
}

export default ListaProdutos;