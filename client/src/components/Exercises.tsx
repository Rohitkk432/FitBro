import React, { Component } from "react";

type MyProps = {};

type MyState = {};

class Exercises extends Component<MyProps, MyState> {
    render() {
        return (
            <div className="flex flex-col items-start justify-start w-full h-full my-[2%] mx-[2%]">
                <div className="text-[4vh] font-bold">Exercises for Biceps -</div>
                <div className="flex flex-row flex-wrap items-start justify-start w-full">
                    <div className="w-[30%] h-[20vh] m-[1%] rounded-[2vh] bg-[#373737]"></div>
                    <div className="w-[30%] h-[20vh] m-[1%] rounded-[2vh] bg-[#373737]"></div>
                    <div className="w-[30%] h-[20vh] m-[1%] rounded-[2vh] bg-[#373737]"></div>
                    <div className="w-[30%] h-[20vh] m-[1%] rounded-[2vh] bg-[#373737]"></div>
                    <div className="w-[30%] h-[20vh] m-[1%] rounded-[2vh] bg-[#373737]"></div>
                    <div className="w-[30%] h-[20vh] m-[1%] rounded-[2vh] bg-[#373737]"></div>
                </div>
            </div>
        );
    }
}

export default Exercises;
