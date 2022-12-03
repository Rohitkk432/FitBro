import React, { Component } from "react";
import Navbar from "../components/Navbar";
// import ExerciseDetails from "../components/ExerciseDetails";
import Exercises from "../components/Exercises";
import VerticalList from "../components/VerticalList";

type MyProps = {};

type MyState = {
    exercise: string;
};

class Workout extends Component<MyProps, MyState> {
    state: MyState = {
        exercise: "",
    };
    render() {
        return (
            <>
                <Navbar message="workout" />
                <div className="flex flex-row items-center justify-evenly w-full h-[92vh] py-[3vh]">
                    {/* <VerticalList title="Workouts" /> */}
                    <div className="flex flex-col items-center justify-start border border-white rounded-[2%] h-full w-[60%] p-[2vh]">
                        <Exercises />

                        {/* <ExerciseDetails /> */}
                    </div>
                </div>
            </>
        );
    }
}

export default Workout;
