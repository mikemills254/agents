import { useState } from "react"
import Button from "../Components/Button"
import Input from "../Components/Input"
import { AiOutlineMail } from 'react-icons/ai'


export default function ForgotPass() {
  const [ isEmail, setEmail ] = useState("")
  return (
    <div className='flex flex-col items-center p-10 w-screen h-screen bg-[#e0f6fe]'>
        <form className="signup-form gap-5 flex flex-col w-[30rem] items-center p-10 bg-[#7de3fc] rounded-md shadow-sm">
            <p className="text-md">Please provide a valied email address and check you email for instructions</p>
            <Input
                placeholder={"Enter email"}
                IconBefore={AiOutlineMail}
                type={'email'}
                ContainerStyles={" w-full border-[#076885] h-[2.2rem]"}
                IconStyleBefore={"text-[#076885] text-xl"}
                InputStyles={"pl-2 bg-[#7de3fc]"}
                value={isEmail}
                onChange={(item) => setEmail(item.target.value)}
            />
            <Button
              text={"Send"}
              ContainerStyle={"bg-[#076885] text-md font-semibold uppercase text-white"}
            />
        </form>
    </div>
  )
}
