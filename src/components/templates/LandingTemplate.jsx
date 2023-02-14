import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function LandingTemplate({children}) {
    return(
        <>
            <Navbar />
                <Outlet />
            
        </>
    )
}