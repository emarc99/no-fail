import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import Rightbar from '../components/Rightbar'
import AIChatBotWrapper from "../components/ChatBot"

function UserHome() {

    return (
        <>
        <div className="flex ">
            <div className="flex flex-col gap-4 flex-1">
                <DashboardStatsGrid />
                <AIChatBotWrapper />
                <div className="flex flex-row gap-4 w-full flex-1 mb-5">
                    <TransactionChart />
                    
                </div>
                {/* <div className="flex flex-row gap-4 w-full">
                    <RecentOrders />
                    
                </div> */}
                <p className='text-center font-medium text-[#000000B2] text-[16px]'>© 2024 Nofail Team, Inc.</p>
            </div>
            <Rightbar />
        </div>



        </>
    );
}

export default UserHome;