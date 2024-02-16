import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyNav from "./MyNav.jsx"
import MyPageComponent from "../pages/MyPageComponent.jsx"
import MyOtherPageComponent from "../pages/MyOtherPageComponent.jsx"
import MyJsxPage from "../pages/MyJsxPage.jsx"
import MyUseStatePage from "../pages/MyUseStatePage.jsx"
import MyFormInputPage from "../pages/MyFormInputPage.jsx"
import MyListPage from "../pages/MyListPage.jsx"
import MyItemPage2 from "../pages/MyItemPage2.jsx"


function MyRouter() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        {/* Our route definitions (controller) */}
        <Route path="/" element={<MyPageComponent />}></Route>
        <Route path="/other" element={<MyOtherPageComponent />}></Route>
        <Route path="/my-jsx-page" element={<MyJsxPage />} />
        <Route path="/my-use-state-page" element={<MyUseStatePage />} />
        <Route path="/my-form-input-page" element={<MyFormInputPage />} />
        <Route path="/my-list-page" element={<MyListPage />} />
        <Route path="/my-list-page/:name" element={<MyItemPage2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter