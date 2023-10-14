import { useLocation, Outlet, Navigate } from "react-router-dom"


const RequireAuth = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const location = useLocation()

  return (
    token
        ? <Outlet/>
        : <Navigate to={"/authorization"} state={{from: location}} replace/>
        );
      }
export default RequireAuth