import RecentOrders from '../components/RecentOrders'
import Rightbar from '../components/Rightbar'
import AIChatBotWrapper from "../components/ChatBot"

export default function Products() {

	return(

        <>
        <div className="flex ">
            <div className="flex flex-col gap-4 flex-1">
    
                <div className="flex flex-row gap-4 w-full flex-1 mb-5">
                    <RecentOrders />
                    
                </div>
                <AIChatBotWrapper />
                <p className='text-center font-medium text-[#000000B2] text-[16px]'>© 2024 Nofail Team, Inc.</p>
            </div>
            <Rightbar />
        </div>



        </>

    )
     

}