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

//pesquisar
const buscaProdutos = (valor) => {
  const busca = valor.toLowerCase();
  const produtosFiltrados = listaHome.filter((produto) =>
    produto.title.toLowerCase().includes(busca)
  );
  setLista(produtosFiltrados); 
};








return (
    <>

    <button onClick={() => ordemAz()}>
       AZ
    </button>

    <button onClick ={() => ordemZa()}>
       ZA
    </button>

    <button onClick ={() => precoDescrescente()}>
    Descrecente
 </button>

 <button onClick ={() => precoCrescente()}>
    Crescente
 </button>

 <input
  type="text"
  onChange={(event) => buscaProdutos(event.target.value)} // chama a função com o valor digitado
  placeholder="Pesquisar"
  id="search-Box"
/>


      <ListaProdutos  lista={listaHome}/>

     
    </>
  );
}






    