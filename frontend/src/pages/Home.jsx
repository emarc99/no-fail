// import { useState, useEffect } from "react";
// import api from "../api";
import FAQ from "../components/FAQ";
import  NavBar  from "../components/NavBar"
import arrow from "../assets/arrow_selector_tool.svg";
import users from "../assets/users-overlay.png";
import Footer from "../components/Footer"
import bgfeat from "../assets/Key Features.svg"
import txtfeat from "../assets/Frame 17.svg"
import underline from "../assets/Frame 32.svg";
import avatar1 from "../assets/avatar-04.webp.png";
import spanblue from "../assets/span.icon.svg";
import avatar2 from "../assets/avatar-05.webp.png";
import avatar3 from "../assets/avatar-03.webp.png";
import avatar4 from "../assets/div.avatar.png";

function Home() {

    return (
        <>

        <NavBar />

        <div className="mt-[40px] bg-twinkles-lp bg-no-repeat bg-center">
            <h2 className="text-[64px] font-extrabold text-center">We help businesses thrive</h2>
            <p className="text-[64px] font-extrabold text-center">after funding by tackling common</p>
            {/* <img className="float-left" src={polygon} alt="star icon" /> */}
            <p className="text-[64px] font-extrabold text-center mb-[34px]">challenges</p>
            <p className="text-2xl font-bold text-center text-neutral-500">We support smarter decisions, empowering businesses to grow</p>
            <p className="text-2xl font-bold text-center text-neutral-500">steadily and avoid the usual pitfalls.</p>
        </div>
        
        <div className="mt-20 mx-auto w-[563px] lg:flex justify-between space-x-12 items-center">
            <div className="py-4 px-14 border rounded-full flex justify-center items-center bg-[#3835ED] hover:space-x-2">
                <img className="h-8 w-8" src={arrow} alt="arrow icon" />
                <a href="#" className="text-white text-2xl font-[700]" >Get Started</a>
            </div>
            <div>
                <img className="h-[64px]" src={users} alt="users overlay" />
            </div>
        </div>

        <div className="mt-20 mb-24 mx-auto w-[383px] lg:flex justify-between space-x-12 items-center">
            <div className="">
                <p className="text-5xl font-[700]">560K</p>
                <p className="text-2xl text-neutral-500 font-[500]">Transactions</p>
            </div>
            <div className="">
                <p className="text-5xl font-[700]">5K</p>
                <p className="text-2xl text-neutral-500 font-[500]">Users</p>
            </div>
        </div>

        {/* <h2 className=" text-5xl font-[700] text-center">Our Key Features</h2> */}

        <div className="relative mb-20" id="features">
            <img className="mx-auto w-[]" src={bgfeat} alt="key feature bg" />
            <img className="pt-14 mx-auto inset-10 my-auto w-auto absolute" src={txtfeat} alt="key feature txt" /> 
        </div>
      
        {/* <div className="mx-[58px]  bg-[#3835ED] h-[943px] border rounded-3xl">
            <div></div>
        </div> */}

        <div className="flex flex-col items-center pt-5 mx-auto mb-[8rem]"> 
            <h2 className="text-[64px] font-[700] mb-[40px]">Solutions</h2>
            <p className="text-[48px] font-[400] ">We developed an AI-powered platform that equips 
                <br />
             MSMEs with real-time insights to optimize inventory, 
             <br />
             cash flow, and market trends for sustainable growth.</p>
        </div>

        <div className="py-[7rem] bg-[#3835ED12] flex flex-col items-center">
            <h2 className="text-[64px] font-[700] mb-8 mt-3">Frequently Asked Questions</h2>
            <FAQ />
        </div>
        <div className="flex flex-col px-[8.5rem] mt-20">
            <p className="text-2xl mb-1 font-[500] self-start">Testimonial</p>
            <img src={underline} alt="underline icon" className="ml-20 self-start w-[127px]"/>
            <h2 className="text-center text-[36px] font-[500] mb-14">What They Say</h2>
        </div>
        <div className="w-[83%] gap-y-14 flex flex-wrap mx-auto justify-between pb-48">
            <div className="flex w-[537px]">
                <img src={avatar1} alt="" className="w-[140px] border rounded-lg"/>
                <img src={spanblue} alt="" className="mr-7"/>
                <div className="flex flex-col">
                    <p className="font-[400] text-[#878680] text-[16px] leading-[36px] mb-3">Lörem ipsum lakrossa ussa plagon kav. Metatologi krona. Tudade åpoligen bevis. 
                    Plastbanta vapäbelt. Lanade oviktig. Mingen. </p>
                    <p className="font-[700] text-lg self-end">Bonnie Tolbet</p>
                    <p className="font-[500] text-lg text-[#878680] self-end">Buyer</p>
                </div>
            </div>
            <div className="flex w-[537px]">
                <img src={avatar2} alt="" className="w-[140px] border rounded-lg"/>
                <img src={spanblue} alt="" className="mr-7"/>
                <div className="flex flex-col">
                    <p className="font-[400] text-[#878680] text-[16px] leading-[36px] mb-3">Lörem ipsum lakrossa ussa plagon kav. Metatologi krona. Tudade åpoligen bevis. 
                    Plastbanta vapäbelt. Lanade oviktig. Mingen. </p>
                    <p className="font-[700] text-lg self-end">Bonnie Tolbet</p>
                    <p className="font-[500] text-lg text-[#878680] self-end">Seller</p>
                </div>
            </div>
            <div className="flex w-[537px]">
                <img src={avatar3} alt="" className="w-[140px] border rounded-lg"/>
                <img src={spanblue} alt="" className="mr-7"/>
                <div className="flex flex-col">
                    <p className="font-[400] text-[#878680] text-[16px] leading-[36px] mb-3">Lörem ipsum lakrossa ussa plagon kav. Metatologi krona. Tudade åpoligen bevis. 
                    Plastbanta vapäbelt. Lanade oviktig. Mingen. </p>
                    <p className="font-[700] text-lg self-end">Bonnie Tolbet</p>
                    <p className="font-[500] text-lg text-[#878680] self-end">Buyer</p>
                </div>
            </div>
            <div className="flex w-[537px]">
                <img src={avatar4} alt="" className="w-[140px] border rounded-lg"/>
                <img src={spanblue} alt="" className="mr-7"/>
                <div className="flex flex-col">
                    <p className="font-[400] text-[#878680] text-[16px] leading-[36px] mb-3">Lörem ipsum lakrossa ussa plagon kav. Metatologi krona. Tudade åpoligen bevis. 
                    Plastbanta vapäbelt. Lanade oviktig. Mingen. </p>
                    <p className="font-[700] text-lg self-end">Bonnie Tolbet</p>
                    <p className="font-[500] text-lg text-[#878680] self-end">Seller</p>
                </div>
            </div>
        </div>
        <Footer />
        <div className="py-8 bg-[#1F1E17]">
            <p className="left-0 pl-[7.5rem] text-[#A5A49A]">© All Copyright 2024 by</p>
        </div>




        </>
    );
}

export default Home;
