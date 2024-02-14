/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { CiCalendar } from 'react-icons/ci';
import { useState, useEffect } from 'react';
import Input from './Input';
import { HiOutlineArrowUpCircle } from 'react-icons/hi2';
import { GoPaperclip } from 'react-icons/go';
import Logo from '../assets/logo.png';
import { useSelector } from 'react-redux';
import { selectSocket } from '../Utilities/socketSlice';

const SentMessage = ({ content, sentDate }) => {
    return(
        <div className='bg-[#f0faff] w-full p-3 border-r-4 border-[#06334b] rounded-md'>
            <p className='font-semibold text-md'>You</p>
            <p className='text-sm px-2'>{content}</p>
            <small className='text-[10px]'>{sentDate}</small>
        </div>
    )
}

export const getDate = () => {
    const date = new Date();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${dayOfWeek}, ${day} ${month}`;
};
  

export default function CenterBar() {
    const [isDate, setDate] = useState('');
    const [isResponse, setResponse] = useState('');
    const [isChat, setChat] = useState([]);
    const [agentResponse, setAgentResponse] = useState([]);
    const socket = useSelector(selectSocket);

    useEffect(() => {
        const date = getDate();
        setDate(date);
        
        // Handle agent_response event
        socket.socket.on("agent_response", (data) => {
            console.log(data)
            setAgentResponse(prev => [...prev, data]);
        });

        // Cleanup the event listener when the component unmounts
        return () => {
            socket.socket.off("agent_response");
        };
    }, [socket]);

    const handleSendMessage = async () => {
        try {
            const message = {
                sender: localStorage.getItem('user'),
                content: isResponse,
                socketId: localStorage.getItem("socket_id"),
                username: localStorage.getItem("username"),
            };
            
            const url = 'http://localhost:9000/api/v1/sendMessage';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const data = await response.json();
            setChat(prev => [...prev, data.data]);
            
            socket.socket.emit("client_message", data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setResponse('');
        }
    };      
    return (
        <div className="w-full h-full flex flex-col">
            <div className="top-center flex flex-row items-center w-full h-20 shadow-lg px-3 justify-between">
                <div className="flex flex-row items-center justify-center gap-2">
                    <div className="h-12 w-12 border-2 border-[#3da2c4] rounded-full">
                        <img src={Logo} className="h-full w-full rounded-full" alt="Logo"/>
                    </div>
                    <div className='flex flex-col items-start gap-0'>
                        <small className="text-lg font-bold text-[#3da2c4]">Branch Customer Care</small>
                        <small>online</small>
                    </div>
                </div>
                <div className="today flex flex-row items-center gap-2 border-[1px] rounded-md px-3 py-1">
                    <CiCalendar/>
                    <small>{isDate}</small>
                </div>
            </div>
            <div className="content-container h-full overflow-y-auto no-scrollbar p-3 flex flex-col gap-3">
                
            {isChat.map((message, index) => (
                    <SentMessage 
                        key={index} 
                        content={message.content} 
                        sentDate={new Date(message.createdAt).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                    />
                ))
            }
                
                {agentResponse.map((response, index) => {
                    const date= new Date(response.createdAt).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

                    return(
                        <div key={index} className='w-full border-l-2 border-[#0079a6] p-2 flex flex-col items-end bg-[#d6f2ff] rounded-md '>
                            <p className='font-semibold text-md'>Branch Customer Care</p>
                            <p className='text-sm px-2'>{response.content}</p>
                            <small className='text-[10px]'>{date}</small>
                        </div>
                    )
                })}
            </div>
            <div className="h-16 flex flex-row items-center px-2 bg-[#83dfff] justify-center">
                <Input
                    placeholder="Type message here"
                    IconAfter={() => (
                        <div className="flex flex-row gap-2 px-2 items-center">
                            <HiOutlineArrowUpCircle key="upArrow" size={20} onClick={handleSendMessage}/>
                        </div>
                    )}
                    IconBefore={() => (
                        <div className="flex flex-row gap-4 px-2 items-center h-full">
                            <GoPaperclip size={20}/>
                        </div>
                    )}
                    ContainerStyles="w-[50rem] border-none"
                    InputStyles="pl-5"
                    value={isResponse}
                    onChange={(event) => setResponse(event.target.value)}
                />
            </div>
        </div>
    );
}
