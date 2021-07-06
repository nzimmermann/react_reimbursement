import Login from "../Pages/Login/Login"
import Register from "../Pages/Login/Register"
import Dashboard from "../Pages/Dashboard/Dashboard"


const routes = [
    {
        path:'/',
        element: <Dashboard /> 
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/register',
        element: <Register />
    }
]

export default routes;