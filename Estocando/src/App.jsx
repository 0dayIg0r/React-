import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaProdutos from "./components/ListaProdutos";
import './App.css'


function App() {
  const [produtos, setProdutos] = useState([]);

  function adicionarProduto(novoProduto) {
    setProdutos([...produtos, novoProduto]);
  }

  return (
    <div className="app">
      <Header 
        titulo="Meu Estoque" 
        resumo="Cadastro de produtos" 
      />  
      <Formulario adicionarProdutos={adicionarProduto} />
      <ListaProdutos produtos={produtos} />
    </div>
  );
}

export default App;