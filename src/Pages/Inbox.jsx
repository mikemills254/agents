/* eslint-disable react/prop-types */
import LeftBar from '../Components/LeftBar'
import Input from '../Components/Input'
import { CiSearch } from "react-icons/ci";
import Notification from '../Components/Notification';
import Person from '../assets/person.jpeg'
import { MdOutlineQuickreply } from "react-icons/md";
import { HiOutlineArrowUpCircle } from "react-icons/hi2";
import { GoPaperclip } from "react-icons/go";
import Proptypes from 'prop-types'
import { Modal, Button } from 'flowbite-react';
import { useState } from 'react';

const Notifs = ({ onClick }) => {
    return(
        <div 
            className='w-full flex flex-row min-h-16 gap-2 p-2 border-b-[1px] cursor-pointer bg-[#edfaff] rounded-sm'
            onClick={onClick}
        >
            <section className='prof-image'>
                <div className='h-full flex items-center justify-center'>
                    <img
                        src={Person}
                        className='h-10 w-10 rounded-full'
                    />
                </div>
            </section>
            <section className='flex flex-col w-full'>
                <div className='flex flex-row item-center justify-between w-full'>
                    <small className='max-w-20 text-[15px] font-semibold'>Mike Mills </small>
                    <small>12th Dec 2023</small>
                </div>
                <div>
                <small className='text-ellipsis text-pretty overflow-hidden line-clamp-1'> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda facilis quia impedit? Ea consectetur culpa sed repellendus veniam maxime quia possimus obcaecati, eum quaerat architecto amet sit autem quasi?
                </small>
                </div>
            </section>
        </div>
    )
}

Notifs.prototype = {
    onClick: Proptypes.func,
}

const Messages = () => {
    return(
        <div className='w-[25rem] h-full flex flex-col shadow-lg '>
            <div className='p-3 flex flex-col bg-[#83dfff]'>
                <p>Chats</p>
                <Input
                    placeholder={"search chats here"}
                    IconBefore={CiSearch}
                />
            </div>
            <div className='flex flex-col overflow-y-auto no-scrollbar'>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
                <Notifs/>
            </div>
        </div>
    )
}


const QuickReplyModal = ({ show, onClose, selected }) => {
    const quickResponses = [
      "Thank you for reaching out! How can I assist you today?",
      "Hi there! I'm here to help. What's on your mind?",
      "Hello! How can I make your experience better today?",
      "Thanks for contacting us. How may I assist you?",
      "Hi! I'm ready to help with any questions or concerns you have.",
      "Welcome! Let me know how I can assist you today.",
      "Hello! What can I do to help resolve your issue?",
      "Thanks for getting in touch. How can I support you?",
      "Hi there! How can I provide assistance to you right now?",
      "Welcome to our support center! How may I assist you today?",
      "Hello! Let's work together to find a solution for you.",
      "Thanks for reaching out. How can I make things right for you?",
      "Hi! I'm here to listen and help. What's going on?",
      "Welcome! How can I assist you with your inquiry?",
      "Hello! I'm here to provide quick and efficient assistance.",
      "Thanks for contacting us. How can I be of service to you?",
      "Hi there! Let's tackle this issue together. What's the matter?",
      "Hello! How can I help resolve any concerns you have?",
      "Thanks for reaching out to us. How can I assist you today?",
      "Hi! I'm here to ensure your experience is as smooth as possible. What do you need help with?"
    ];
  
    const handleResponseClick = (response) => {
      console.log("Selected response:", response);
      selected(response)
      onClose();
    };
  
    return (
        <Modal
            show={show}
            onClose={onClose}
            dismissible
            className='w-[50%]'
            style={{ margin: "0px auto" }}
        >
            <Modal.Header className='bg-[#d6f2ff]'>
                <p>Quick Responses</p>
            </Modal.Header>
            <Modal.Body className='h-[25rem] overflow-y-auto no-scrollbar'>
                {quickResponses.map((response, index) => (
                    <button key={index} className="quick-response-btn border-b-[1px] p-2 w-full flex items-start " onClick={() => handleResponseClick(response)}>
                        {response}
                    </button>
                ))}
            </Modal.Body>
            <Modal.Footer className='bg-[#d6f2ff] h-2'>
                <Button onClick={onClose} className='text-[#085ec5]'>Cancel</Button>
            </Modal.Footer>
      </Modal>
    );
};
  

const RespondArea = () => {
    const [ isModal, setModal ] = useState(false)
    const [ isResponse, setResponse ] = useState('')
    return(
        <>
            <QuickReplyModal show={isModal} onClose={() => setModal(false)} selected={(item) => setResponse(item)} />
            <div className='w-full h-full flex flex-col'>
                <div className='messages-top flex flex-row gap-2 items-center justify-between py-2 px-3 bg-[#83dfff]'>
                    <div className='flex flex-row items-center gap-3'>
                        <div className='h-10 w-10 rounded-full bg-white flex flex-col items-center justify-center text-[#007bff]'>
                            CQ
                        </div>
                        <p>Mike Mills</p>
                    </div>
                    <div className=''>
                        <CiSearch size={25}/>
                    </div>
                </div>
                <div className='h-full overflow-y-auto no-scrollbar shadow-inner p-3'>
                    <Notification/> 
                </div>
                <div className='h-16 flex flex-row items-center px-2 bg-[#83dfff] justify-center'>
                    <Input
                        placeholder={"Type message here"}
                        IconAfter={() => (
                            <div className='flex flex-row gap-2 px-2 items-center'>
                                {[
                                    <HiOutlineArrowUpCircle key="upArrow" size={20}/>,
                                ]}
                            </div>
                        )}
                        IconBefore={() => (
                                <div className='flex flex-row gap-4 px-2 items-center h-full'>
                                    <GoPaperclip size={20}/>
                                    <MdOutlineQuickreply key="quickReply" size={18} onClick={() => setModal(true)} />
                                </div>
                            )}
                        ContainerStyles={"w-[50rem] border-none"}
                        InputStyles={"pl-5"}
                        value={isResponse}
                        onChange={(item) => setResponse(item.target.value)}
                    />
                </div>
            </div>
        </>
    )
}

export default function Inbox() {
  return (
    <div className='h-screen w-screen flex flex-row'>
        <LeftBar/>
        <Messages/>
        <RespondArea/>
    </div>
  )
}
