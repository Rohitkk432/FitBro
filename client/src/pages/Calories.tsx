import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { PlusIcon, RefreshIcon } from "@heroicons/react/solid";
import CalorieItem from "../components/CalorieItem";

type MyProps = {};

type MyState = {};

class Calories extends Component<MyProps, MyState> {
    render() {
        return (
            <>
                <Navbar message="calories" />
                <div className="flex flex-col justify-between items-center w-full h-[92vh] py-[3vh]">
                    <div className="w-[80%] h-[85%] overflow-y-scroll customScrollbar">
                        <CalorieItem />
                        <CalorieItem />
                        <CalorieItem />
                        <CalorieItem />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full h-[12%] px-[10%]">
                        <div className="flex flex-row items-center justify-center">
                            <button className="h-[10vh] w-[10vh] rounded-full bg-[#50C878] flex items-center justify-center mr-[5vh]">
                                <PlusIcon className="h-[7vh] w-[7vh] text-white" />
                            </button>
                            <button className="bg-[#1CAC78] px-[5vh] py-[2%] rounded-[1.5vh] flex items-center justify-center">
                                <RefreshIcon className="h-[5vh] w-[5vh] mr-[2vh] text-white" />
                                <div className="text-[3.5vh] font-semibold">Reset</div>
                            </button>
                        </div>

                        <div className="text-[4vh]">Total : 450 Calories</div>
                    </div>
                </div>
            </>
        );
    }
}

export default Calories;
