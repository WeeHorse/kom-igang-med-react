import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function MyUseEffectListPage(){

  // körs vid varje (om)rendering, körs när man lämnar komponenten
  useEffect(()=>{
    async function load(){
      const response = await fetch('data.json')
      const items = await response.json()
      console.log(items)
      setItems(items)
    }
    load()
  }, []) // tom array som andra argument = körs endast vid komponentladdning

  const [items, setItems] = useState([])

  return <div id="my-list-page">
    <h1>MyUseEffectListPage</h1>
    <article>
      {
        items.map( item => <section>
          <h2>{item.name}</h2>
          <h3>{item.brand}</h3>
          <Link to={"/my-list-page/" + item.name}>Details</Link>
          <img src={item.image}/>
        </section>)
      }
    </article>
  </div>
}

export default MyUseEffectListPage