import { useEffect, useState } from "react";


export default function Home (){
    
const [lista, setLista] =  useState([lista]);

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
      <ListaProdutos lista={produtos}/>
    </>
  );
}






    