// Código em inglês 
import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ProductList() {
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([])

  function searchProductsByTitle(search: string) {
    const productsFilteredByTitle = productList.filter(product => product.title.includes(search))

    setProductsFiltered(productsFilteredByTitle)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProductsByTitle(e.target.value)} />

      {productsFiltered.map(product => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
