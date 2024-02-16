function MyItem(props){

  const item = props.item

  return <article class="my-item">
  <h1>{item.name}</h1>
  <p>{item.brand}</p>
  <img src={item.image}/>
</article>


}

export default MyItem