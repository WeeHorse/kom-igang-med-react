import React, { useContext } from "react"
import { GlobalContext } from "../GlobalContext.jsx"

function PageUsingContext2() {

  const { value, setValue } = useContext(GlobalContext)

  return <>
    <h1>Page using context 2</h1>
    <p>This is the value: {value}</p>
    <button onClick={() => setValue(value - 1)}>Decrease</button>
  </>

}

export default PageUsingContext2