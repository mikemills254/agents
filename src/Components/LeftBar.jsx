/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import Person from '../assets/person.jpeg';
import { IoIosLogOut } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import Button from './Button';
import { useDispatch} from 'react-redux';
import { logout } from '../Utilities/authSlice';
import { LuMessageCircle } from "react-icons/lu";
import { disconnect } from '../Utilities/socketSlice';

const AccountModal = ({ show, onClose, onLogOut, onEditDetails }) => {
    const id = localStorage.getItem('user')
    const [ isName, setName ] = useState('')
    const [ isEmail, setEmail ] = useState('')

    useEffect(() => {
        const getUser = async () => {
            try {
                const url = `http://localhost:9000/api/v1/user/${id}`;
                const response = await fetch(url, {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const userData = await response.json();
                localStorage.setItem("username", userData.data.username)
                setName(userData.data.username)
                setEmail(userData.data.email)
            } catch (error) {
                console.error(error);
            }
        };
        getUser();
    }, [id]);

    return (
        <div onClick={onClose} className={`modal fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center ${show ? 'block' : 'hidden'}`} style={{ backgroundColor: "rgba(0, 0, 0, .15)" }}>
            <div className='bg-white w-[30rem] shadow-md rounded-md'>
                <div className='flex flex-row items-right rounded-t-md justify-end p-2'>
                    <IoCloseOutline
                        size={25} 
                        color='#0092cc' 
                        className='cursor-pointer' 
                        onClick={onClose}
                    /> 
                </div>
                <div className='flex flex-col items-center rounded-b-md p-2 gap-2'>
                    <div className='flex flex-col h-[8rem] w-[8rem] border-[#0092cc] rounded-full border-2'>
                        <img src={Person} className='-full h-full rounded-full' alt="Profile"/>
                    </div>
                    <div className='flex flex-col w-full item-center justify-center gap-5 text-center'>
                        <h1 className='text-xl font-extrabold text-[#0092cc]'>Hello!</h1>
                        <div>
                            <p>{isName}</p>
                            <small>{isEmail}</small>
                        </div>
                        <div className='flex flex-row w-full items-center justify-evenly gap-5 mb-5'>
                            <Button text="Edit Details" IconBefore={FiEdit} ContainerStyle="bg-[#0092cc] text-md font-semibold text-white w-40" onClick={onEditDetails} />
                            <Button 
                                text="Log Out" 
                                IconBefore={IoIosLogOut}
                                IconBeforeStyle={"text-xl"}
                                ContainerStyle="border-[#0092cc] hover:bg-[#f0faff] border-2 text-md font-semibold text-[#0092cc] w-40" 
                                onClick={onLogOut}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function SideBar() {
    const [isModal, setModal] = useState(false);
    const dispatch = useDispatch()

    const toggleModal = () => {
        setModal(!isModal);
    };

    const handleLogOut = () => {
        dispatch(logout())
        dispatch(disconnect())
        localStorage.removeItem("user")
        localStorage.removeItem("socket_id")
        localStorage.removeItem("username")
        
    };

    const handleEditDetails = () => {
        console.log("edit details");
    };

    return (
        <>
            <AccountModal
                show={isModal}
                onClose={toggleModal}
                onLogOut={handleLogOut}
                onEditDetails={handleEditDetails}
            />
            <div className='w-[20%] bg-[#83dfff] flex flex-col items-center h-screen shadow-lg gap-10'>
                <img
                    src={Logo}
                    alt='logo'
                    className='w-[6rem] m-5'
                />
                <nav className='nav-container flex flex-col h-full w-full items-center justify-between'>
                    <ul className="flex flex-col w-full items-center justify-center gap-2">
                        {
                            [
                                ["Customer Care", <LuMessageCircle size={25} color='#0e315d' />, "/your_inbox"]
                            ].map(([title, icon, to], index) => (
                                <Link key={index} to={to} className='links flex flex-row items-center gap-5 px-5 py-3 w-full cursor-pointer'>
                                    {icon}
                                    <p className='font-semibold text- text-[#0e315d]'>{title}</p>
                                </Link>
                            ))
                        }
                    </ul>
                    <ul className="flex flex-col w-full items-center justify-center gap-2 hover:bg-[#0075a5] my-3">
                        <li className='links flex flex-row hover:text-white items-center gap-3 px-5 py-3 w-full cursor-pointer' onClick={toggleModal}>
                            <VscAccount/>
                            Account
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
