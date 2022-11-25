import React, { Component } from "react";
import Navbar from "../components/Navbar";
// import ExerciseDetails from "../components/ExerciseDetails";
import Exercises from "../components/Exercises";
import Info from "../components/Info";
import AnatomyFront from "../images/human-front-anatomy.svg";
import AnatomyBack from "../images/human-back-anotomy.svg";

type MyProps = {};

type MyState = {
    rotate: boolean;
    exercise: string;
    exerciseInfo: string;
};

class Anatomy extends Component<MyProps, MyState> {
    state: MyState = {
        rotate: true,
        exercise: "",
        exerciseInfo: "",
    };
    render() {
        return (
            <>
                <Navbar message="anatomy" />
                <div className="flex flex-row items-center justify-evenly w-full h-[92vh] py-[3vh]">
                    <div className="flex flex-col items-center justify-between h-full w-[30%]">
                        {this.state.rotate && <img src={AnatomyFront} alt="img" className="h-[85%]" />}
                        {!this.state.rotate && <img src={AnatomyBack} alt="img" className="h-[85%]" />}
                        <button
                            className="border border-white rounded-[5%] text-[2.5vh] px-[14%] py-[1.5%]"
                            onClick={() => {
                                this.setState({ rotate: !this.state.rotate });
                            }}>
                            Rotate
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-start border border-white rounded-[2%] h-full w-[60%] p-[2vh]">
                        <div className="flex flex-row items-center justify-start w-full">
                            <button className={`mr-[2%] px-[5%] py-[1%] rounded-[1vh] text-[2.5vh] font-bold ${this.state.exerciseInfo === "info" ? "bg-[#018749]" : "bg-[#1CAC78]"}`} onClick={()=>{
                                this.setState({exerciseInfo : "info"});
                            }}>
                                Basic Info
                            </button>
                            <button className={`mr-[2%] px-[5%] py-[1%] rounded-[1vh] text-[2.5vh] font-bold ${this.state.exerciseInfo === "exercises" ? "bg-[#018749]" : "bg-[#1CAC78]"}`} onClick={()=>{
                                this.setState({exerciseInfo : "exercises"});
                            }}>
                                Exercises
                            </button>
                        </div>
                        {this.state.exerciseInfo === "info" && <Info />}
                        {this.state.exerciseInfo === "exercises" && <Exercises />}

                        {/* <ExerciseDetails /> */}
                    </div>
                </div>
            </>
        );
    }
}

export default Anatomy;
