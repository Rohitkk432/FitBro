import React, { Component } from "react";
import Logo from "../images/fitbro-logo.svg";
import { Link } from "react-router-dom";

type MyProps = {
    message: string;
};

type MyState = {};

class Navbar extends Component<MyProps, MyState> {
    render() {
        return (
            <div className="w-screen h-[8vh] bg-[#50C878] px-[3%] flex flex-row items-start justify-between ">
                <div className="flex flex-row items-center justify-center mt-[0.7vh]">
                    <img src={Logo} alt="logo" className="h-[6.5vh] mr-[10%]" />
                    <div className="font-black text-[4vh]">FitBro.</div>
                </div>
                {this.props.message !== "landing" && (
                    <div className="flex flex-row items-center justify-end w-[80%] text-[2.7vh]">
                        <Link to="/anatomy" className={`mx-[1%] px-[0.5%] py-[1%] border-b-2 ${this.props.message !== "anatomy" && "border-[#50C878]"}`}>
                            <div>Anatomy</div>
                        </Link>
                        <Link to="/workout" className={`mx-[1%] px-[0.5%] py-[1%] border-b-2 ${this.props.message !== "workout" && "border-[#50C878]"}`}>
                            <div>Workout</div>
                        </Link>
                        <Link to="/diet-charts" className={`mx-[1%] px-[0.5%] py-[1%] border-b-2 ${this.props.message !== "diet" && "border-[#50C878]"}`}>
                            <div>Diet Charts</div>
                        </Link>
                        <Link to="/calories" className={`mx-[1%] px-[0.5%] py-[1%] border-b-2 ${this.props.message !== "calories" && "border-[#50C878]"}`}>
                            <div>Calories</div>
                        </Link>
                        <Link to="/" className={`mx-[1%] px-[0.5%] py-[1%] border-b-2 border-[#50C878]`}>
                            <div>Go to Home</div>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

export default Navbar;
