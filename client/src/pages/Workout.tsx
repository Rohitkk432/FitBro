import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ExerciseDetails from "../components/ExerciseDetails";
import Exercises from "../components/Exercises";
import VerticalList from "../components/VerticalList";

import WorkoutClass from "../classModels/Workout";

type MyProps = {};

type MyState = {
    exercise: string;
    workoutData: any;
    activeWorkout: any;
    workoutExercises: any;
    exerciseData: any;
    exerciseInfo: string;
};

class Workout extends Component<MyProps, MyState> {
    state: MyState = {
        exercise: "",
        workoutData: [],
        activeWorkout: null,
        workoutExercises: [],
        exerciseData: null,
        exerciseInfo: "",
    };
    public async getAllData() {
        const data = await WorkoutClass.getAll();
        this.setState({ workoutData: data });
    }
    componentDidMount() {
        this.getAllData();
    }
    getExercisesData = async () => {
        const res = await this.state.activeWorkout.getExercises();
        this.setState({ workoutExercises: res });
    };

    componentDidUpdate(prevProps: any, prevState: any) {
        if (this.state.activeWorkout !== prevState.activeWorkout) {
            if (this.state.activeWorkout !== null) {
                this.getExercisesData();
            } else {
                this.setState({ workoutExercises: [] });
            }
        }
    }
    render() {
        const setActive = (data: any) => {
            this.setState({ activeWorkout: data });
            this.setState({ exerciseInfo: "exercises" });
        };
        const setExerciseData = (data: any) => {
            this.setState({ exerciseData: data });
            this.setState({ exerciseInfo: "details" });
        };
        return (
            <>
                <Navbar message="workout" />
                <div className="flex flex-row items-center justify-evenly w-full h-[92vh] py-[3vh]">
                    <VerticalList title="Workouts" data={this.state.workoutData} setActive={setActive} active={this.state.activeWorkout} />
                    <div className="flex flex-col items-center justify-start border border-white rounded-[2%] h-full w-[60%] p-[2vh]">
                        <div className="flex flex-row items-center justify-start w-full">
                            <button
                                className={`mr-[2%] px-[5%] py-[1%] rounded-[1vh] text-[2.5vh] font-bold ${this.state.exerciseInfo === "exercises" ? "bg-[#018749]" : "bg-[#1CAC78]"} ${this.state.exerciseInfo === "" ? "hidden" : ""}`}
                                onClick={() => {
                                    this.setState({ exerciseInfo: "exercises" });
                                }}>
                                Exercises
                            </button>
                            <button className={`mr-[2%] px-[5%] py-[1%] rounded-[1vh] text-[2.5vh] font-bold ${this.state.exerciseInfo === "details" ? "bg-[#018749]" : "bg-[#1CAC78] hidden"}`}>
                                Exercise Details
                            </button>
                        </div>
                        {this.state.exerciseInfo === "exercises" && <Exercises bodypart={this.state.activeWorkout.name} partData={this.state.workoutExercises} setExerciseData={setExerciseData} />}

                        {this.state.exerciseInfo === "details" && <ExerciseDetails exerciseData={this.state.exerciseData} />}
                    </div>
                </div>
            </>
        );
    }
}

export default Workout;
