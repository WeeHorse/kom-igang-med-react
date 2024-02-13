import { useState } from "react"

function MyUseStatePage() {

  const [title, setTitle] = useState('My useState Page')
  const changeTitle = () => setTitle('Changed title')

  const [tick, increaseTick] = useState(1)

  // we should use setTimeout to prevent crazyness
  setInterval(() => increaseTick(tick + 1), 1000)

  return <article>
    <h1>{title}</h1>
    <h2>This button changes title by using an extra method (above)</h2>
    <button onClick={changeTitle}>Change title</button>
    <h2>This button changes title by adding the extra method directly inline</h2>
    <button onClick={() => setTitle('Other change')}>Other title</button>
    <h3>Tick is: {tick}</h3>
  </article>

}

export default MyUseStatePage