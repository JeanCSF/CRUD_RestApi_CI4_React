// import { Link } from "react-router-dom";

import {FaDollarSign } from "react-icons/fa";
type ProductCardProps = {
    produto: any;
  }

const ProductCard: React.FC<ProductCardProps> = ({ produto }) => {
    return (
        <div className="products-card">
            <img width={500}  src='https://placehold.co/00' alt={produto.nome_produto} />
            <h2>{produto.nome_produto}</h2>
            <p>
                <FaDollarSign  color="#F7D354" title="Preço"/> {produto.preco_produto}
            </p>
        </div>
    )
}

export default ProductCard;