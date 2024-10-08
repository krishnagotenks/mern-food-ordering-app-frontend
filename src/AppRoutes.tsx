
import { Routes,Route, Navigate } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage"

import UserProfilePage from "./pages/UserProfilePage"
import ProtectedRoute from "./auth/ProtectedRoute"
import ManagaeRestaurantPage from "./pages/ManageRestaurantPage"
const AppRoutes=()=>{
    return (<Routes>
        < Route path="/" element={<Layout showHero={true}><HomePage/></Layout>}/>
        <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
        <Route element={<ProtectedRoute/>}>
        < Route path="/user-profile" element={<Layout><UserProfilePage/></Layout>}/>
        < Route path="/manage-restaurant" element={<Layout><ManagaeRestaurantPage/></Layout>}/>
        </Route>
        
        
        < Route path="*" element={<Navigate to="/"/>} />
    </Routes>
)
}
export default AppRoutes