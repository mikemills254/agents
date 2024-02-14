import { useEffect, useState } from 'react'
import RightBar from '../Components/RightBar'
import LeftBar from '../Components/LeftBar'
import { getDate } from '../Components/CenterBar'
import Input from '../Components/Input'
import { CiSearch } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import Notification from '../Components/Notification'



const CenterBar = () => {
    const [ isDate, setDate ] = useState('')

    useEffect(() => {
        const date = getDate()
        setDate(date)
    }, [isDate])
        return (
            <div className='w-full h-full flex flex-col'>
                <div className='top-center flex flex-row items-center w-full h-12 shadow-lg px-3 justify-between'>
                    
                    <Input
                        ContainerStyles={"w-[30rem] h-10"}
                        IconBefore={CiSearch} 
                        placeholder={"search here"}
                        IconStyleBefore={"text-xl"}
                    />
                    <div className="today flex flex-row items-center gap-2 border-[1px] rounded-md px-3 py-1">
                        <CiCalendar/>
                        <small>{isDate}</small>
                    </div>
    
                </div>
                <div className='content-container h-full overflow-y-auto no-scrollbar p-3 flex flex-col gap-3'>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/> 
                </div>
                
            </div>
        )
}

export default function Urgent() {
  return (
    <div className="w-screen h-screen flex flex-row">
        <LeftBar/>
        <CenterBar/>
        <RightBar/>
    </div>
  )
}
