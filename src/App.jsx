
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/user-page" element={<UserPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
