import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/product_card/ProductCard";
import './ProdutosGrid.css'

type Produto = {
  id_produto: number;
  nome_produto: string;
  preco_produto: number;
}

function Produtos() {
  const { data: produtos, isFetching, error } = useFetch<Produto[]>('http://localhost:8080/produtos')
  return (
    <div className="container">
      <h2 className="title">TODOS OS PRODUTOS</h2>
      <hr />
      {error && <p>Erro inesperado, tente novamente mais tarde!</p>}
      {isFetching && <p className="text-center fs-1 text-info">Carregando...</p>}
      <div className="products-container">
        {produtos?.map((produto) => <ProductCard produto={produto} key={produto.id_produto} />)}
      </div>
    </div>
  )
}

export default Produtos