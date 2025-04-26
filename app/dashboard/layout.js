import DashboardBanner from "@/components/dashboard/DashboardBanner";
import DashboardHeader from "@/components/dashboard/DashboardHeader";


export default function DashboardLayout({ children }) {
  return (
    <>
      <DashboardHeader />
      <section className="container mx-auto p-3">

        <div className="flex items-center bg-amber-300 mx-auto gap-x-3">
          <div className="w-[30%] bg-sky-300 h-full rounded-lg">
            money card
          </div>
          <div className="w-[70%] h-full overflow-hidden">
            <DashboardBanner />
          </div>
        </div>


        {children}
      </section>
    </>
  )
}