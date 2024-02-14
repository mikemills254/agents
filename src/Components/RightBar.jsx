/* eslint-disable react/prop-types */
import profile from '../assets/person.jpeg'
import { CiMail } from "react-icons/ci";
const AgentProfile = ({ name, email }) => {
    return(
        <div className="agent-profile flex flex-row items-center bg-[#1C8783] h-[4rem] w-full rounded-md gap-2 p-1">
            <div className="image-contain flex flex-col">
                <div className='w-12 h-12'>
                    <img
                        src={profile}
                        alt='profile image'
                        className='w-full h-full rounded-md bg-cover border-[1px] border-[#F12E5E]'
                    />
                </div>
                
            </div>
            <div className='h-full w-3/4 flex flex-col'>
                <small className='text-md font-semibold'>{name}</small>
                <small>{email}</small>
            </div>
            <div>
                <CiMail/>
            </div>
        </div>
    )
}

export default function RightBar() {
    const profiles = [
        {name: "Mike Mills", email: "mikemills930@gmail.com"},
        {name: "Mike Mills", email: "mikemills930@gmail.com"},
        {name: "Mike Mills", email: "mikemills930@gmail.com"},
        {name: "Mike Mills", email: "mikemills930@gmail.com"},
        {name: "Mike Mills", email: "mikemills930@gmail.com"},
        {name: "Mike Mills", email: "mikemills930@gmail.com"},
        {name: "Mike Mills", email: "mikemills930@gmail.com"},
        {name: "Mike Mills", email: "mikemills930@gmail.com"},
        {name: "Mike Mills", email: "mikemills930@gmail.com"},
        {name: "Mike Mills", email: "mikemills930@gmail.com"},
        {name: "Mike Mills", email: "mikemills930@gmail.com"},
    ]
    return (
        <div className='flex flex-col h-screen w-[40%] bg-[#d6f2ff] shadow-lg p-2 no-scrollbar'>
            <p className='text-xl font-bold '>Available Agents</p>
            <div className='flex flex-col items-center gap-3 max-h-[20rem] overflow-y-auto no-scrollbar'>
                {profiles.map((item, index) => (
                    <AgentProfile key={index} name={item.name} email={item.email}/>
                ))}
            </div>
        </div>
    )
}
