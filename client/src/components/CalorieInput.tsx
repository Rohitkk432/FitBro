import React, { Component } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import AutoCompleteInput from "./AutoCompleteInput";

type MyProps = {
    closeModal : ()=>void
};

type MyState = {};

class CalorieInput extends Component<MyProps, MyState> {

    render() {
        const outlets = [
            { id: 1, name: "Ice N Spice" },
            { id: 2, name: "Food King" },
            { id: 3, name: "Gajalaxmi" },
            { id: 4, name: "Red Chillies" },
            { id: 5, name: "Subspot" },
            { id: 6, name: "Institute Cafeteria" },
        ];
        const foodItems = [
            { id: 1, name: "Fried Cheese Maggie" },
            { id: 2, name: "Ice Tea" },
            { id: 3, name: "Rava Masala Dosa" },
            { id: 4, name: "Masala Cheese Sandwich" },
            { id: 5, name: "Chicken Tikka Roll" },
            { id: 6, name: "Doughnut" },
        ];
        return (
            <div className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.3)] z-10 flex items-center justify-center">
                <div className="w-[35%] h-[60%] flex flex-col items-center justify-between bg-[#232323] rounded-[3vh] z-20 p-[1.5%]">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="text-[3.5vh] font-semibold">Calculate Calories -</div>
                        <XMarkIcon onClick={()=>{this.props.closeModal()}} className="h-[4.5vh] w-[4.5vh]" />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="text-[3.5vh] font-semibold">Outlet -</div>
                        <AutoCompleteInput data={outlets} />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="text-[3.5vh] font-semibold">FoodItem -</div>
                        <AutoCompleteInput data={foodItems} />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="text-[3.5vh] font-semibold">Quantity -</div>
                        <input type="number" min="0" className="w-[50%] text-[2.5vh] px-[2%] py-[1%] rounded-[1vh] text-black" placeholder="units" />
                        <div className="text-[3vh] w-[15%] ml-[2%]" >unit</div>
                    </div>
                    <button className="text-[3.5vh] font-semibold w-full py-[1%] rounded-[1vh] bg-[#018749]">Add Food Item</button>
                </div>
            </div>
        );
    }
}

export default CalorieInput;
