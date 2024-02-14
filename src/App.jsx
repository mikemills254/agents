import { useEffect } from "react"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import ForgotPass from "./Pages/ForgotPass"
import Chat from "./Pages/Chat"
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function App() {
    const { isAuthenticated } = useSelector(state => state.auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/chat', { replace: true });
        } else {
            const currentPath = window.location.pathname;
            if (
                !['/signin', '/signup', '/forgotpass'].includes(currentPath)
            ) {
                navigate('/signin', { replace: true });
            }
        }
    }, [isAuthenticated, navigate]);
    
    return (
        <Routes>
            { isAuthenticated && (
                <>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/" element={<Navigate to="/chat"/>} />
                </>
            )}
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/forgotpass" element={<ForgotPass/>}/>
            <Route path="/" element={<Navigate to={'/signin'}/>}/>
            
        </Routes>
    )
}
