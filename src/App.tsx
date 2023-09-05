import Booking from "pages/Booking/Booking"
import Login from "pages/Login/Login"
import Register from "pages/Register/Register"
import { Navigate, Route, Routes } from "react-router-dom"
import Auth from "shared/components/Auth"

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Auth auth={false} Element={<Login />} />} />
      <Route path="register" element={<Auth auth={false} Element={<Register />} />} />
      <Route path="booking" element={<Auth Element={<Booking />} />} />
      <Route path="*" element={<Navigate to="/booking" />} />
    </Routes>
  )
}

export default App
