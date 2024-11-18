import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import Rightbar from '../components/Rightbar'

function UserHome() {

    return (
        <>
        <div className="flex ">
            <div className="flex flex-col gap-4 flex-1">
                <DashboardStatsGrid />
                <div className="flex flex-row gap-4 w-full">
                    <TransactionChart />
                    
                </div>
                <div className="flex flex-row gap-4 w-full">
                    <RecentOrders />
                    
                </div>
            </div>
            <Rightbar />
        </div>



        </>
    );
}

export default UserHome;