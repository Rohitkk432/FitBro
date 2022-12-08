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
                    <div className="flex flex-col items-start justify-center h-full w-[35%]">
                        <div className="font-black flex flex-row text-[8vh] mb-[2vh] text-[#50C878]">FitBro<div className="text-white">.</div></div>
                        <div className="font-semibold text-[3.5vh] h-[30%]">Bitsian Website with info on exercises based on body part, workouts, diet charts, calorie counter.</div>
                        <Link to="/anatomy" className="py-[2%] px-[8%] bg-white text-black rounded-[1vh] ">
                            Get Started
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}

export default Landing;
