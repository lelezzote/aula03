
export default function ListaProdutos({lista}){
    return(
        <>
        <h1>Lista de Produtos</h1>
        <ul>
          {
          lista.map(produto => (
            <ul key={produto.id}>
              <img src={produto.image} alt={produto.title} width={100}/>
              <h2>{produto.title}</h2>
              <li>{produto.description}</li>
              <li>Preço: ${produto.price}</li>
              <li>{produto.category}</li>
              <li>{produto.rating.rate}</li>
              <li>{produto.rating.count}</li>
            </ul>
          ))}
        </ul>
      </>
    )
}