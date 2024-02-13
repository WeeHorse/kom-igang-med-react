import { useState } from "react"

function MyFormInputPage() {

  const [name, setName] = useState()

  return <>
    <h1>My Form Input Page</h1>
    <form>
      <label>Enter your name</label>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <p>My new value: {name}</p>
    </form>
  </>
}

export default MyFormInputPage