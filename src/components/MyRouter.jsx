import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyNav from "./MyNav.jsx"
import MyPageComponent from "../pages/MyPageComponent.jsx"
import MyOtherPageComponent from "../pages/MyOtherPageComponent.jsx"
import MyJsxPage from "../pages/MyJsxPage.jsx"
import MyUseStatePage from "../pages/MyUseStatePage.jsx"
import MyFormInputPage from "../pages/MyFormInputPage.jsx"
import PageUsingContext1 from "../pages/PageUsingContext1.jsx"
import PageUsingContext2 from "../pages/PageUsingContext2.jsx"
import { GlobalProvider } from "../GlobalContext.jsx"

function MyRouter() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <MyNav />
        <Routes>
          {/* Our route definitions (controller) */}
          <Route path="/" element={<MyPageComponent />}></Route>
          <Route path="/other" element={<MyOtherPageComponent />}></Route>
          <Route path="/my-jsx-page" element={<MyJsxPage />} />
          <Route path="/my-use-state-page" element={<MyUseStatePage />} />
          <Route path="/my-form-input-page" element={<MyFormInputPage />} />
          <Route path="page-using-context-1" element={<PageUsingContext1 />} />
          <Route path="page-using-context-2" element={<PageUsingContext2 />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default MyRouter