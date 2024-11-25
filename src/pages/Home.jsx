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
 
const ordemAz = () => {
 const listaOrdenada = [...listaHome].sort((a, b) => a.title.localeCompare(b.title));
  setLista(listaOrdenada);
}

const ordemZa = () => {
  const listaOrdenada = [...listaHome].reverse((a, b) => a.title.localeCompare(b.title));
   setLista(listaOrdenada);
 }

const precoAB = () => {
    const filtro = [...listaHome].sort((a, b) => b.preco - a.preco);
    setLista(filtro);
}



return (
    <>

    <button onClick={() => ordemAz()}>
       AZ
    </button>

    <button onClick ={() => ordemZa()}>
       ZA
    </button>

      <input
      placeholder="Pesquisar"
      onChange={(event) => buscaProdutos(event.target.value)}>
        </input>

      <ListaProdutos  lista={listaHome}/>

     
    </>
  );
}






    