import Image from "next/image"

export default function DashboardHeader() {

  return (
    <div className="w-full bg-blue-bg h-15 flex justify-center items-center text-white mb-5">
      <Image src="/assets/img/flynet-header-logo.png" alt="My Icon" width={100} height={10} />
    </div>
  )
}