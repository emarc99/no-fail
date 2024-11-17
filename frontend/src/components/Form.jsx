import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator";
import logo from "../assets/logo.svg";
import socialauth from "../assets/Frame 45.svg";
import entrepreneur  from  "../assets/Ellipse 5.png";
import line from "../assets/Line design.svg";
import back from "../assets/keyboard_backspace.svg";


function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [business_name, setBusiness] = useState("");
    const [cac, setCac] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const signInAskOpen = name === "Login" ? true : false; 


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/dashboard")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
    <><div className="flex justify-center">
        <div className="form-side min-h-screen w-1/2 flex justify-center flex-col items-center relative top-3">
            <a href="/home" className="absolute flex space-x-4 border border-[#3835ED80] rounded-full py-2 px-5 items-center top-5 left-9">
            <img src={back} alt="go back to home" className="w-[39px]"/>
            <p className="font-[700] text-[12px]">Go Back</p>
            </a>

            <a href="/home"><img className="h-[105px] w-[75px] mb-2 mr-4" src={logo} alt="Logo" /></a>
            <p className="font-[700] text-[40px]">Welcome to <span className="font-[800] font-['UNDERRATED'] text-[30px]">NOFAIL</span></p>
            <p className="font-[700] text-[12px] text-neutral-400">We support smarter decisions, empowering businesses</p>
            <p className="font-[700] text-[12px] text-neutral-400">to grow steadily and avoid the usual pitfalls.</p>
            <form onSubmit={handleSubmit} className="form-container ">
                <input
                    className="form-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Email"
                    required
                />
                {!signInAskOpen && (
                <><input
                    className="form-input"
                    type="text"
                    value={business_name}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder="Business Name"
                    required />
                <input
                    className="form-input"
                    type="text"
                    value={cac}
                    onChange={(e) => setCac(e.target.value)}
                    placeholder="CAC Reg. Number" 
                    required/>

                </>
                )}
                <input
                    className="form-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                
                {loading && <LoadingIndicator />}
                <button className="form-button bg-[#3835ED] hover:bg-[#3835ED80]" type="submit">
                    {name}
                </button>
                <p className="text-[12px] text-neutral-500 mb-5">Or sign in with</p>
                <img src={socialauth} alt="social authentication icons  " />
                {signInAskOpen && (
                    <p className="font-[700] text-[16px] mt-10 text-neutral-400">Don&apos;t have an account? <span className="text-bold text-[#3835ED]"> <a href="/register">Sign up</a></span></p>
                )}
                
            </form>
        </div>

        <div className="right-side relative min-h-screen items-center w-1/2 flex justify-center bg-hero-pattern bg-cover bg-[#3835ED] text-white" >
            <div className="bg-twinkles-sp absolute top-10 left-10 bg-no-repeat h-[591px] w-[477px]"></div>
            <img src={line} alt="Line design" className="absolute top-[379px] left-[185px]" />
            <div className="flex flex-col bg-no-repeat ">
                <p className="font-[800] text-[80px] leading-[5rem]">Helping</p>
                {/* <p className="font-[800] text-[80px] leading-[5rem]">Small</p> */}
                <p className="font-[800] text-[80px] leading-[5rem]">Businesses</p>
                <p className="font-[800] text-[80px] leading-[5rem]">Thrive</p>
               
                <div className="self-end mr-2">
                    <p >Antipol oprel. Trimatisk preng som sad.</p>
                    <p className="self-end">Reaaktiv ögonkramp. Pasa dövis inklusive plal.</p>
                </div>
                
                <div className=" self-end flex justify-between items-center w-[151px] mr-[140px] mt-[30px]">
                    <img src={entrepreneur} alt="female entrepreneur icon" className="w-10 h-10" />
                    <div>
                        <h2 className="text-[12px] font-[800]">Elizabeth Ibrahim</h2>
                        <p className="text-[9px] font-[500]">Entrepreneur</p>
                    </div>
                </div>
            </div>
            
        </div>

    </div>    
    </> 
    );
}

export default Form