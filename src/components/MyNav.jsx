import { Link } from "react-router-dom"

function MyNav() {

  return (
    <nav>
      <Link to="/">MyPageComponent</Link> |&nbsp;
      <Link to="/other">MyOtherPageComponent</Link> |&nbsp;
      <Link to="/my-jsx-page">My JSX Page</Link> |&nbsp;
      <Link to="/my-use-state-page">My useState Page</Link> |&nbsp;
      <Link to="/my-form-input-page">My Form Input Page</Link> |&nbsp;
      <Link to="/page-using-context-1">Page Using Context 1</Link> |&nbsp;
      <Link to="/page-using-context-2">Page Using Context 2</Link>
    </nav>
  )

}

export default MyNav