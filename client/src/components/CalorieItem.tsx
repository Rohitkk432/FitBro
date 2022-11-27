import React, { Component } from "react";
import { XIcon } from "@heroicons/react/solid";

type MyProps = {};

type MyState = {};

class CalorieItem extends Component<MyProps, MyState> {
    render() {
        return (
            <div className="flex flex-row items-center justify-between px-[2%] w-[98%] h-[8.5vh] bg-[#434343] mt-[1%] rounded-[1vh] text-[3.5vh]">
                <div className="w-[5%]">1</div>
                <div className="w-[20%]">Food King</div>
                <div className="w-[35%]">Cheese Fried Maggie</div>
                <div className="w-[15%]">1 bowl</div>
                <div className="w-[15%]">150 Calories</div>
                <div className="w-[3%]">
                    <XIcon className="h-[5vh] w-[5vh]" />
                </div>
            </div>
        );
    }
}

export default CalorieItem;
