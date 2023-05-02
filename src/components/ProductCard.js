import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const [isProductInCart, setIsProductInCart] = useState(false)
  const dispatch = useDispatch()
  const { cartList: products, total } = useSelector(state => state.cartState)
  const { name, price, image } = product;

  useEffect(() => {
    const productInCart = products.find(p => p.id === product.id)
    if (productInCart) {
      setIsProductInCart(true)
    } else {
      setIsProductInCart(false)
    }
  }, [products, product.id])



  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isProductInCart ? (<button className="remove" onClick={() => dispatch(remove(product))} >Remove</button>) : (<button onClick={() => dispatch(add(product))} >Add To Cart</button>)}
      </div>
    </div>
  )
}
