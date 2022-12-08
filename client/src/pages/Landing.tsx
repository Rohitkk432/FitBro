import React, { Component } from "react";
import Navbar from "../components/Navbar";
import landingIllustration from "../images/landing-illustration.svg";
import { Link } from "react-router-dom";

type MyProps = {};

type MyState = {};

class Landing extends Component<MyProps, MyState> {
    render() {
        return (
            <>
                <Navbar message="landing" />
                <div className="flex flex-row items-center justify-evenly w-full h-full">
                    <img src={landingIllustration} alt="img" className="w-[30%]" />
                    <div className="flex flex-col items-start justify-center h-full w-[30%]">
                        <div className="font-black text-[8vh] mb-[2vh]">FitBro.</div>
                        <div className="font-semibold text-[4vh] h-[30%]">Planking can help Strengthen Your Core</div>
                        <Link to="/anatomy" className="py-[2%] px-[8%] bg-white text-black rounded-[1vh] ">Get Started</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default Landing;
