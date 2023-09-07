import { FC, PropsWithChildren } from 'react'
import "./Layout.scss"
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className='layout-container'>
            <div className='navigation'>
                <div className='profile-container'>
                    <div className='profile'></div>
                    <h1 className='title'>Lorem ipsum dolor sit</h1>
                    <p className='description'>Lorem ipsum</p>
                </div>
                <div className='menu-container'>
                    <div onClick={()=>{
                        navigate("/booking")
                    }} className={`menu ${location.pathname.includes("/booking")?"active":""}`}>
                        <p>Book Appointments</p>
                    </div>
                    <div onClick={()=>{
                        navigate("/my-bookings")
                    }}  className={`menu ${location.pathname.includes("/my-bookings")?"active":""}`}>
                        <p>My Bookings</p>
                    </div>
                   
                </div>

            </div>
            <div className='child-container'>
                <div className='child-wrapper'>
                    {children}
                </div>
            </div>
            <div className='contact'>

            </div>
        </div>
    )
}

export  {Layout}