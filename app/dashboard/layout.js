import DashboardBanner from "@/components/dashboard/DashboardBanner";
import DashboardHeader from "@/components/dashboard/DashboardHeader";


export default function DashboardLayout({ children }) {
  return (
    <>
      <DashboardHeader />
      <section className="container mx-auto p-3">

        <div className="grid lg:grid-cols-12 mx-auto gap-5">
          <div className="lg:col-span-4 bg-sky-300 h-full rounded-lg">
            money card
          </div>
          <div className="lg:col-span-8 h-full overflow-hidden">
            <DashboardBanner />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 mx-auto gap-2 mt-3">
          <div className="lg:col-span-3 bg-sky-300 h-full rounded-lg">
            money card
          </div>
          <div className="lg:col-span-9 h-full overflow-hidden">
            <DashboardBanner />
          </div>
        </div>


        {children}
      </section>
    </>
  )
}