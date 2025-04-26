import Logo from "@/public/logo-svg.svg"
import Image from "next/image"

export default function DashboardHeader() {

  return (
    <div className="w-full bg-sky-500 h-15 flex justify-center items-center text-white mb-5">
      {/* <Image src={Logo} alt="My Icon" width={100} height={100} /> */}
      <h1 className="font-semibold text-3xl">flynet</h1>
    </div>
  )
}