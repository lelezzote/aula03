import { useEffect, useState } from "react";
import ListaProdutos from "../component/ListaProdutos";




export default function Home (){
    
const [listaHome, setLista] =  useState([]);

useEffect(() => {
    const receberListaProdutos = async () => {
        try{
            const resposta = await fetch('https://fakestoreapi.com/products');
    const dados = await resposta.json();
    setLista(dados);
        }catch{
         alert("A conexão com a API falhou!")
        }
    }
    receberListaProdutos(); 
}, []);
 
//de A para Z
const ordemAz = () => {
 const listaOrdenada = [...listaHome].sort((a, b) => a.title.localeCompare(b.title));
  setLista(listaOrdenada);
}

//de Z para A
const ordemZa = () => {
  const listaOrdenada = [...listaHome].reverse((a, b) => a.title.localeCompare(b.title));
   setLista(listaOrdenada);
 }

 //do MAIOR para o MENOR
const precoDescrescente = () => {
    const filtro = [...listaHome].sort((a, b) => b.price - a.price);
    setLista(filtro);
}

//do MENOR para o MAIOR
const precoCrescente = () => {
  const filtro = [...listaHome].sort((a, b) => a.price - b.price);
  setLista(filtro);
}

//Pesquisar
const buscaProdutos = () => {
  const busca = document.getElementById("search-Box").value;
  const resultado = [...listaHome].filter(produto => produto.title.includes(busca))
}

return (
    <>

    <button onClick={() => ordemAz()}>
       AZ
    </button>

    <button onClick ={() => ordemZa()}>
       ZA
    </button>

    <button onClick ={() => precoDescrescente()}>
    AB
 </button>

 <button onClick ={() => precoCrescente()}>
    BA
 </button>

      <input
      placeholder="Pesquisar"
      onChange={(event) => buscaProdutos(event.target.value)}>
        </input>

      <ListaProdutos  lista={listaHome}/>

     
    </>
  );
}






    