import Image from "next/image";


export default function TopInfoCard() {

  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between">
      <div className="flex lg:flex-col items-center lg:space-y-3 justify-around lg:justify-normal mb-1">
        <Image src="/assets/img/avatar.jpg" alt="avatar" width={500} height={50} className="w-20 h-20 lg:w-35 lg:h-35 rounded-full border-4 border-blue-700 ml-5" />
        <h2 className="text-xl text-zinc-100 font-medium">امیرحسین رنجبر</h2>
      </div>
      <div className="flex flex-col text-white my-auto space-y-4">
        <h1 className="text-3xl">موجودی کل:</h1>
        <h2 className=""><span className="ml-3 underline text-xl">10</span><span className="text-4xl font-bold">ریال</span></h2>
        <p><span className="ml-3">اعتبار غیرقابل برداشت:</span><span className="ml-1 underline">0</span><span className="font-vazir-medium">ریال</span></p>
        <p><span className="ml-3">امتیاز باشگاه مشتریان:</span><span className="ml-1 underline">5</span><span className="font-vazir-medium">امتیاز</span></p>
      </div>
    </div>
  )
}