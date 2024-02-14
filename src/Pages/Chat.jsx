import LeftBar from '../Components/LeftBar'
import CenterBar from '../Components/CenterBar'
export default function Chat() {
    return (
        <div className='flex flex-row items-center h-screen w-screen'>
            <LeftBar/>
            <CenterBar/>
        </div>
    )
}
