import Login from "pages/Login/Login"
import { Navigate, Route, Routes } from "react-router-dom"
import Auth from "shared/components/Auth"

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Auth auth={false} Element={<Login />} />} />
      <Route path="register" element={<Auth auth={false} Element={<Login />} />} />
      <Route path="booking" element={<Auth Element={<>booking/reservation page</>} />} />
      <Route path="home" element={<Auth Element={<>bookings list page</>} />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default App
