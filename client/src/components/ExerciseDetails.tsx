import React, { Component } from "react";

type MyProps = {};

type MyState = {};

class ExerciseDetails extends Component<MyProps, MyState> {
    render() {
        return (
            <div className="flex flex-col items-start justify-start w-full h-full my-[2%] mx-[2%]">
                <div className="text-[4vh] font-bold">Details on Chin ups -</div>
                <div className="text-[2.5vh] mt-[2%]">
                    The biceps includes a “short head” and a “long head” that work as a single muscle. The biceps is attached to the arm bones by tough connective tissues called tendons. The tendons
                    that connect the biceps muscle to the shoulder joint in two places are called the proximal biceps tendons.
                </div>
                <div className="text-[2.5vh] mt-[2%]">
                    The biceps includes a “short head” and a “long head” that work as a single muscle. The biceps is attached to the arm bones by tough connective tissues called tendons. The tendons
                    that connect the biceps muscle to the shoulder joint in two places are called the proximal biceps tendons.
                </div>
                <div className="flex flex-row flex-wrap items-start justify-start w-full mt-[2%]">
                    <div className="w-[30%] h-[20vh] m-[1%] rounded-[2vh] bg-[#373737]"></div>
                    <div className="w-[30%] h-[20vh] m-[1%] rounded-[2vh] bg-[#373737]"></div>
                </div>
            </div>
        );
    }
}

export default ExerciseDetails;
