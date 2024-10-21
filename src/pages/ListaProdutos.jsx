
export default function ListaProdutos({lista}){
    return(
        <>
        <h1>Lista de Produtos</h1>
        <ul>
          {
          lista.map(produto => (
            <div key={produto.id}>
              <img src={produto.image} alt={produto.title} width={100}/>
              <h2>{produto.title}</h2>
              <p>{produto.description}</p>
              <p>Preço: ${produto.price}</p>
              <p>{produto.category}</p>
              <p>{produto.rating.rate}</p>
              <p>{produto.rating.count}</p>
            </div>
          ))}
        </ul>
      </>
    )
}