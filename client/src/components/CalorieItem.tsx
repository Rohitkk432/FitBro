import React, { Component } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

import CaloriesInFood from "../classModels/CaloriesInFood";

type MyProps = {
    foodItem: CaloriesInFood;
    index: number;
    removeCalorieData: (data: any) => void;
};

type MyState = {};

class CalorieItem extends Component<MyProps, MyState> {
    render() {
        return (
            <div className="flex flex-row items-center justify-between px-[2%] w-[98%] h-[8.5vh] bg-[#434343] mt-[1%] rounded-[1vh] text-[3.5vh]">
                <div className="w-[5%]">{this.props.index + 1}</div>
                <div className="w-[20%]">{this.props.foodItem.outlet}</div>
                <div className="w-[35%]">{this.props.foodItem.name}</div>
                <div className="w-[15%]">
                    {this.props.foodItem.quantity} {this.props.foodItem.unit.slice(0, 11)}
                </div>
                <div className="w-[15%]">{this.props.foodItem.calories} Calories</div>
                <div className="w-[3%]">
                    <XMarkIcon onClick={() => this.props.removeCalorieData(this.props.foodItem)} className="h-[5vh] w-[5vh]" />
                </div>
            </div>
        );
    }
}

export default CalorieItem;
