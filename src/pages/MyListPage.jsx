import {useState} from 'react'

function MyListPage(){

const [myList, setMyList] = useState([
  {prop:1},
  {prop:2},
  {prop:3}
])

const [items] = useState([
  {name: "Lamp", brand: "Ikeo", image: "https://cdn.starwebserver.se/shops/sekelskifte/files/led-lampa-112-977.jpg"},
  {name: "Table", brand: "Ikeo", image: "https://assets.hermes.com/is/image/hermesproduct/les-necessaires-d-hermes-satellite-table-small-model--960216M%2001-worn-2-0-0-1000-1000_g.jpg"},
  {name: "Chair", brand: "Ilvo", image: "https://www.ikea.com/se/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg?f=s"},
])

  return <div id="my-list-page">
    <h1>My List Page</h1>
    { myList.map( obj => <p>Property: {obj.prop}</p> ) }
    <article>
      {
        items.map( item => <section>
          <h2>{item.name}</h2>
          <h3>{item.brand}</h3>
          <img src={item.image}/>
        </section>)
      }
    </article>
  </div>
}

export default MyListPage