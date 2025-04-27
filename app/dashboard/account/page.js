import MainContainer from "@/components/dashboard/MainContainer";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoEyeOff, IoEye } from "react-icons/io5";
import Image from "next/image";

export default function AccountPage() {


  return (
    <>
      <MainContainer>

        <header className="rounded-t-lg bg-blue-bg/70 p-4 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 84.75 88.53" className="fill-white size-9">
                <path d="M117.87,92.83a56.46,56.46,0,0,0-12.14-3.59c-11.1-1.81-22.27-1.37-33.4-.47A49.72,49.72,0,0,0,56.1,93.31a13.58,13.58,0,0,0-7.79,8,60.89,60.89,0,0,0-3.18,21c13.2,12.49,70,12.64,84.73.17a64.72,64.72,0,0,0-2.62-19.63C125.83,98,122.65,94.77,117.87,92.83Z" transform="translate(-45.12 -43.24)" />
                <path d="M76,78.14c7.49,9.13,14.64,10.7,23.32-.31,3.92-5,4.41-10.76,4.37-16.16.13-1.86.23-3.21.32-4.55.34-4.82-1.87-8.37-6-11-6.65-4.3-16.81-3.71-22.84,1.32-2.48,2.07-4.08,4.64-4,7.81.1,4.93,0,9.88,1,14.77A18.45,18.45,0,0,0,76,78.14Z" transform="translate(-45.12 -43.24)" />
              </svg>
            </span>
            <span className="text-white text-lg">
              امیرحسین رنجبر
            </span>
          </div>

          <div className="text-white">
            <div>
              <span>جنسیت: </span><span>مذکر</span>
            </div>
            <div>
              <span>ملیت: </span><span>ایرانی</span>
            </div>
          </div>
        </header>

        <div className="px-10 mt-10 w-full">
          <h3 className="text-blue-text text-2xl font-bold mb-5">اطلاعات کاربری</h3>
          <div className="flex items-center justify-between flex-nowrap" >
            <div className="relative mx-2" style={{ direction: "ltr" }}>
              <input className="bg-blue-bg/80 rounded-md p-2 outline-0 text-white" type="text" defaultValue={`09199756571`} />
              <FaMobileAlt className="absolute top-1/2 right-4 -translate-y-1/2 size-5 fill-white" />
            </div>
            <div className="relative mx-2" style={{ direction: "ltr" }}>
              <input className="bg-blue-bg/80 rounded-md p-2 outline-0 text-white w-70" type="email" defaultValue={`amh.ranjbar@gmail.com`} />
              <MdEmail className="absolute top-1/2 right-4 -translate-y-1/2 size-5 fill-white" />
            </div>
            <div className="relative mx-2" style={{ direction: "ltr" }}>
              <input className="bg-blue-bg/80 rounded-md p-2 outline-0 text-white" type="password" defaultValue={`09199756571`} />
              <IoEyeOff className="absolute top-1/2 right-4 -translate-y-1/2 size-5 fill-white" />
              <IoEye className="absolute top-1/2 right-4 -translate-y-1/2 size-5 fill-white hidden" />
            </div>
          </div>
        </div>

        <div className="px-10 mt-10 w-full">
          <h3 className="text-blue-text text-2xl font-bold mb-1">اطلاعات هویتی</h3>
          <p className="text-red-500 mb-5">از تطابق اطلاعات با شناسنامه و یا پاسپورت خود اطمینان حاصل نمایید!</p>
          <div className="grid lg:grid-cols-2 w-3/4 gap-1 gap-y-5" >
            <div className="relative">
              <label htmlFor="fullname" className="pr-1 mb-1 inline-block">نام و نام خانوادگی:</label>
              <input id="fullname" className="bg-blue-bg-darker rounded-md p-2 outline-0 text-white" type="text" defaultValue={`امیرحسین رنجبر`} />
              <FaMobileAlt className="absolute left-[80px] top-1/2 translate-y-1 size-5 fill-white" />
            </div>
            <div className="relative">
              <label htmlFor="fullname" className="pr-1 mb-1 inline-block">نام و نام خانوادگی:</label>
              <input id="fullname" className="bg-blue-bg-darker rounded-md p-2 outline-0 text-white" type="text" defaultValue={`امیرحسین رنجبر`} />
              <FaMobileAlt className="absolute left-[80px] top-1/2 translate-y-1 size-5 fill-white" />
            </div>
            <div className="relative">
              <label htmlFor="fullname" className="pr-1 mb-1 inline-block">نام و نام خانوادگی:</label>
              <input id="fullname" className="bg-blue-bg-darker rounded-md p-2 outline-0 text-white" type="text" defaultValue={`امیرحسین رنجبر`} />
              <FaMobileAlt className="absolute left-[80px] top-1/2 translate-y-1 size-5 fill-white" />
            </div>
            <div className="relative">
              <label htmlFor="fullname" className="pr-1 mb-1 inline-block">نام و نام خانوادگی:</label>
              <input id="fullname" className="bg-blue-bg-darker rounded-md p-2 outline-0 text-white" type="text" defaultValue={`امیرحسین رنجبر`} />
              <FaMobileAlt className="absolute left-[80px] top-1/2 translate-y-1 size-5 fill-white" />
            </div>
            <div className="relative">
              <label htmlFor="fullname" className="pr-1 mb-1 inline-block">نام و نام خانوادگی:</label>
              <input id="fullname" className="bg-blue-bg-darker rounded-md p-2 outline-0 text-white" type="text" defaultValue={`امیرحسین رنجبر`} />
              <FaMobileAlt className="absolute left-[80px] top-1/2 translate-y-1 size-5 fill-white" />
            </div>
            <div className="relative">
              <label htmlFor="fullname" className="pr-1 mb-1 inline-block">نام و نام خانوادگی:</label>
              <input id="fullname" className="bg-blue-bg-darker rounded-md p-2 outline-0 text-white" type="text" defaultValue={`امیرحسین رنجبر`} />
              <FaMobileAlt className="absolute left-[80px] top-1/2 translate-y-1 size-5 fill-white" />
            </div>
          </div>
        </div>

        <Image src="/assets/img/svgs/main pages/p3.svg" alt="svg" width={300} height={100} className="absolute left-0 bottom-0" />

      </MainContainer>
    </>
  )
}