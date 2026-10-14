import { useState } from "react";

function Formulario({adicionarProdutos, produtos}) {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");

  function enviarFormulario(e) {
    e.preventDefault();

    if(produtos){
      const produtoExistente = produtos.some(
        (produto) => produto.nome.trim().toLowerCase() === nome.trim().toLowerCase()
      )

      if (produtoExistente) {
        alert('Este produto ja foi adicionado!')
          return
        
      }
    }

    const novoProduto = {
        nome :nome,
        categoria : categoria,
        quantidade: Number(quantidade)
    }

    adicionarProdutos(novoProduto)
    
    setNome("");
    setCategoria("disable");
    setQuantidade("");
  }

// Está podendo adicionar o item duplicado, faça uma verificação se ele já existe no array, caso exista, pode retornar um alert('')



  return (
    <form className="formulario" onSubmit={enviarFormulario}>
      <h2>Cadastrar produto</h2>

      <label htmlFor="nome">Nome do produto</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Ex.: Teclado"
        required
      />

      <label htmlFor="categoria">Categoria</label>
      <select
        id="categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="disable">Selecione uma categoria</option>
        <option value="Informática">Informática</option>
        <option value="Móveis">Móveis</option>
        <option value="Eletrônicos">Eletrônicos</option>
      </select>

      <label htmlFor="quantidade">Quantidade</label>
      <input
        type="number"
        id="quantidade"
        value={quantidade}
        onChange={(e) =>Number(e.target.value)>= 1 ? setQuantidade(e.target.value) : alert('Valor inválido')}
        placeholder="Ex.: 10"
        required
      />

      

      <button type="submit">Cadastrar produto</button>
    </form>
  );
}

export default Formulario;
