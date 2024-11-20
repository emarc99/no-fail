import logo from "../assets/logo.svg";
import spanline from "../assets/span.elementor-divider-separator.svg";
import socials from "../assets/div.master-social-icons.svg";
import call from "../assets/Icon.svg";
import mail from "../assets/Icon1.svg";
import location from "../assets/Icon2.svg";
import enterarrow from "../assets/Frame 8.svg";

function Footer() {

    return (
      <>
      <div className="flex justify-around bg-[#24231D] pt-[8rem] pb-[5rem]">
        <div className="w-[300px] ">
            <div className="flex items-center flex-shrink-0 mb-7">
                <img className="h-16 w-12 mr-4" src={logo} alt="Logo" />
                <span className="font-['UNDERRATED'] text-xl font-extrabold text-white">NOFAIL</span>
            </div>
            <p className="text-[#A5A49A] font-[500] text-[14px] leading-[30px] mb-9">There are many variations of passages of lorem ipsum available, but the majority suffered.</p>
            <img src={socials} alt="" />
        </div>
        <div className="w-[200px]">
            <p className="font-[700] text-white text-[20px] leading-[30px] mb-3">Explore</p>
            <img src={spanline} alt="" className="mb-3"/>
            <p className="font-[500] text-[#A5A49A] text-[14px] leading-[30px] mb-3 mt-4">Features</p>
            <p className="font-[500] text-[#A5A49A] text-[14px] leading-[30px]">Pricing</p>
        </div>
        <div className="w-[300px]">
            <p className="font-[700] text-white text-[20px] leading-[30px] mb-3">Contact</p>
            <img src={spanline} alt="" className="mb-3"/>
            <div className="flex justify-start mt-4 mb-3">
                <img src={call} alt="" />
                <p className="font-[500] text-[#A5A49A] text-[14px] leading-[30px] ml-2">234 888 0000</p>
            </div>
            <div className="flex justify-start mb-3">
                <img src={mail} alt="" />
                <p className="font-[500] text-[#A5A49A] text-[14px] leading-[30px] ml-2"> nofail.officials@gmail.com</p>
            </div>
            <div className="flex justify-start mb-8">
                <img src={location} alt="" />
                <p className="font-[500] text-[#A5A49A] text-[14px] leading-[30px] ml-2">Lagos, Nigeria</p>
            </div>
            <label className="relative block">
                <span className="absolute inset-y-0 right-0 flex items-center pr-10">
                    <img src={enterarrow} alt="" />
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border rounded-full border-slate-300 py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter email address..." type="text" name="search"/>
            </label>
        </div>
      </div>
      
      </>
    )



  };
  
  export default Footer