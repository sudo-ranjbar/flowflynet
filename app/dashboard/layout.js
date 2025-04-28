import DashboardBanner from "@/components/dashboard/DashboardBanner";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SideNavbar from "@/components/dashboard/SideNavbar";
import TopInfoCard from "@/components/dashboard/TopInfoCard";
import BottomNavigation from "@/components/dashboard/BottomNavigation";


export default function DashboardLayout({ children }) {
  return (
    <>
      <DashboardHeader />

      <section className="container xl:max-w-[80rem] mx-auto p-3 mb-[70px]">

        <div className="grid md:grid-cols-12 lg:grid-cols-12 mx-auto gap-5 mb-5">
          <div className="md:col-span-6 lg:col-span-4 bg-blue-bg h-full rounded-lg shadow-lg flex justify-between p-2">
            <TopInfoCard />
          </div>

          <div className="md:col-span-6 lg:col-span-8 h-full rounded-lg shadow-lg">
            <DashboardBanner />
          </div>
        </div>


        <div className="grid lg:grid-cols-12 mx-auto gap-5 mt-3">
          <div className="lg:col-span-4 h-[650px] rounded-r-[40px] rounded-l-lg lg:flex relative xl:overflow-hidden hidden">
            <SideNavbar />
          </div>

          <div className="lg:col-span-8 rounded-lg">
            <div className="flex flex-col gap-y-3">
              {children}
            </div>
          </div>
        </div>

      </section>

      <BottomNavigation />
    </>
  )
}