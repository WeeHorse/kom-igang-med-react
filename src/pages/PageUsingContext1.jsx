import React, { useContext } from "react"
import { GlobalContext } from "../GlobalContext.jsx"

function PageUsingContext1() {

  const { value, setValue } = useContext(GlobalContext)

  return <>
    <h1>Page using context 1</h1>
    <p>This is the value: {value}</p>
    <button onClick={() => setValue(value + 1)}>Increase</button>
  </>

}

export default PageUsingContext1