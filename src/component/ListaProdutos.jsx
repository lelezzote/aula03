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
              <h2 >{produto.title} </h2>
              <li className={styles.list}>{produto.description}</li>
              <li>Preço: ${produto.price}</li>
              <li>{produto.category}</li>
              <li>{produto.rating.rate}</li>
              <li>{produto.rating.count}</li>
            </ul>
          ))}
        </div>
      </>
    )
}