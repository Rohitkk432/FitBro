import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { PlusIcon, ArrowPathIcon } from "@heroicons/react/20/solid";
import CalorieItem from "../components/CalorieItem";
import CalorieInput from "../components/CalorieInput";
import InstructionComponent from "../components/InstructionComponent";

import CalorieInFood from "../classModels/CaloriesInFood";

type MyProps = {};

type MyState = {
    addModal: boolean;
    calorieData: CalorieInFood[];
    totalCalories: number;
};

class Calories extends Component<MyProps, MyState> {
    state: MyState = {
        addModal: false,
        calorieData: [],
        totalCalories: 0,
    };

    componentDidUpdate(prevProps:any, prevState:any) {
        if (this.state.calorieData!==prevState.calorieData) {
            const totalCals = CalorieInFood.calculateTotalCalories(this.state.calorieData);
            this.setState({ totalCalories: totalCals });
        }
    }

    render() {
        const closeModal = () => {
            this.setState({ addModal: false });
        };
        const addToCalorieData = (data: any) => {
            this.setState({ calorieData: [...this.state.calorieData, data] });
        };
        const removeCalorieData = (data: any) => {
            this.setState({ calorieData: this.state.calorieData.filter((item: any) => item !== data) });
        };
        const removeCalorieDataAll = (data: any) => {
            this.setState({ calorieData: [] });
        };
        return (
            <>
                <Navbar message="calories" />
                <div className="flex flex-col justify-between items-center w-full h-[92vh] py-[3vh]">
                    <div className="w-[80%] h-[85%] overflow-y-scroll customScrollbar">
                        {this.state.calorieData.length === 0 && <InstructionComponent instruction="'CLICK' on '+' button in bottom left corner to add food items from various campus food outlets and check the total calories on the bottom right corner. You can also remove items by 'CLICKING' the 'X' button on it or remove all using 'Reset' button." />}
                        {this.state.calorieData.length !== 0 &&
                            this.state.calorieData.map((data: any, index: number) => <CalorieItem key={index} index={index} foodItem={data} removeCalorieData={removeCalorieData} />)}
                    </div>
                    <div className="flex flex-row items-center justify-between w-full h-[12%] px-[10%]">
                        <div className="flex flex-row items-center justify-center">
                            <button
                                onClick={() => {
                                    this.setState({ addModal: true });
                                }}
                                className="h-[10vh] w-[10vh] rounded-full bg-[#50C878] flex items-center justify-center mr-[5vh]">
                                <PlusIcon className="h-[7vh] w-[7vh] text-white" />
                            </button>
                            <button onClick={removeCalorieDataAll} className="bg-[#1CAC78] px-[5vh] py-[2%] rounded-[1.5vh] flex items-center justify-center">
                                <ArrowPathIcon className="h-[5vh] w-[5vh] mr-[2vh] text-white" />
                                <div className="text-[3.5vh] font-semibold">Reset</div>
                            </button>
                        </div>

                        <div className="text-[4vh]">Total : {this.state.totalCalories} Calories</div>
                    </div>
                </div>
                {this.state.addModal && <CalorieInput closeModal={closeModal} addToCalorieData={addToCalorieData} />}
            </>
        );
    }
}

export default Calories;
