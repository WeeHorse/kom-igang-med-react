import { useParams } from "react-router-dom"
import { useState } from "react"

function MyItemPage(){
  const {name} = useParams()

  const [items] = useState([
    {name: "Lamp", brand: "Ikeo", image: "https://cdn.starwebserver.se/shops/sekelskifte/files/led-lampa-112-977.jpg"},
    {name: "Table", brand: "Ikeo", image: "https://assets.hermes.com/is/image/hermesproduct/les-necessaires-d-hermes-satellite-table-small-model--960216M%2001-worn-2-0-0-1000-1000_g.jpg"},
    {name: "Chair", brand: "Ilvo", image: "https://www.ikea.com/se/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg?f=s"},
  ])

  return items.map( item => (item.name == name) && <article>
    <h1>{item.name}</h1>
    <p>{item.brand}</p>
    <img src={item.image}/>
  </article> )
}




export default MyItemPage