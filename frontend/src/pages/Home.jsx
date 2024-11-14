// import { useState, useEffect } from "react";
// import api from "../api";
import  NavBar  from "../components/NavBar"
import arrow from "../assets/arrow_selector_tool.svg";
import users from "../assets/users-overlay.png";
// import polygon from "../assets/Polygon 1.svg"
import bgfeat from "../assets/Key Features.svg"
import txtfeat from "../assets/Frame 17.svg"

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

        <div className="relative mb-20">
            <img className="mx-auto w-[]" src={bgfeat} alt="key feature bg" />
            <img className="pt-14 mx-auto inset-10 my-auto w-auto absolute" src={txtfeat} alt="key feature txt" /> 
        </div>
      
        {/* <div className="mx-[58px]  bg-[#3835ED] h-[943px] border rounded-3xl">
            <div></div>
        </div> */}




        </>
    );
}

export default Home;
