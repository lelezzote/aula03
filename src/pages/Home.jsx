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

return (
    <>
      <ListaProdutos  lista={listaHome}/>
    </>
  );
}






    