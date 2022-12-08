import React, { Component } from "react";

import ExerciseObj from "../classModels/Exercise";

type MyProps = {
    bodypart: string;
    partData: ExerciseObj[];
    setExerciseData: (data: any) => void;
};

type MyState = {};

class Exercises extends Component<MyProps, MyState> {
    render() {
        return (
            <div className="flex flex-col items-start justify-start w-full h-full my-[2%] mx-[2%]">
                <div className="text-[4vh] font-bold">Exercises for {this.props.bodypart} -</div>
                <div className="flex flex-row flex-wrap items-start justify-start w-full h-[80%] overflow-y-scroll customScrollbar">
                    {this.props.partData.length !== 0 &&
                        this.props.partData.map((data: any, index: number) => (
                            <div
                                key={index}
                                className="w-[30%] h-[19vh] m-[1%] rounded-[2vh] bg-[#373737] flex flex-col items-center justify-center text-center text-[2.5vh] font-semibold p-[2%]"
                                onClick={() => {
                                    this.props.setExerciseData(data);
                                }}>
                                {data.name}
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}

export default Exercises;
