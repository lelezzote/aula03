import styles from '../styles/listaProdutos.module.css'

export default function ListaProdutos({lista}){
    return(
        <>
        <h1 className={styles.tituloPagina}>Lista de Produtos</h1>
        <div className={styles.blocoLista}>
          {
          lista.map(produto => (
            <ul className={styles.blocoCards} key={produto.id}>
              <img src={produto.image} alt={produto.title} width={300} height={300}/>
              <h2>{produto.title} </h2>
              <li className={styles.preco}>Price: ${produto.price}</li>
              <li>Category: {produto.category}</li>
              <li>Rating rate: {produto.rating.rate}</li>
              <li>Rating count: {produto.rating.count}</li>
              <li className={styles.list}>{/*Description: {produto.description} */}</li>
            </ul>
          ))}
        </div>
      </>
    )
}