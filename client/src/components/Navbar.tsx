import React, { Component } from "react";
import Logo from "../images/fitbro-logo.svg";

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
                        <div className={`mx-[1%] px-[0.5%] py-[1%] border-b-2 ${this.props.message!=="anatomy" && "border-none"}`}>Anatomy</div>
                        <div className={`mx-[1%] px-[0.5%] py-[1%] border-b-2 ${this.props.message!=="workout" && "border-none"}`}>Workout Routines</div>
                        <div className={`mx-[1%] px-[0.5%] py-[1%] border-b-2 ${this.props.message!=="diet" && "border-none"}`}>Diet Charts</div>
                        <div className={`mx-[1%] px-[0.5%] py-[1%] border-b-2 ${this.props.message!=="custom" && "border-none"}`}>Custom Charts</div>
                        <div className={`mx-[1%] px-[0.5%] py-[1%] border-b-2 ${this.props.message!=="bookmark" && "border-none"}`}>Bookmarks</div>
                        <div className={`mx-[1%] px-[0.5%] py-[1%] border-b-2 border-none`}>Logout Btn</div>
                    </div>
                )}
            </div>
        );
    }
}

export default Navbar;
