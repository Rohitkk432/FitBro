import React, { Component } from "react";

import ExerciseObj from "../classModels/Exercise";

type MyProps = {
    exerciseData: ExerciseObj | null;
};

type MyState = {};

class ExerciseDetails extends Component<MyProps, MyState> {
    render() {
        return (
            <div className="flex flex-col items-start justify-start w-full h-full my-[2%] mx-[2%]">
                {this.props.exerciseData !== null && (
                    <>
                        <div className="text-[4vh] mb-[1%] font-bold ">Details on {this.props.exerciseData.name} -</div>
                        <div className="flex flex-col items-start justify-start w-full h-[78%] overflow-y-scroll customScrollbar">
                            <div className="text-[2.5vh] mb-[2%]">{this.props.exerciseData.info}</div>
                            <div className="flex flex-row flex-wrap items-start justify-start w-full mb-[2%]">
                                <img src={this.props.exerciseData.image_link} alt="img" className="h-[20vh] m-[1%] rounded-[2vh]" />
                                <a
                                    href={this.props.exerciseData.wiki_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[30%] h-[20vh] m-[1%] rounded-[2vh] bg-[#373737] flex items-center justify-center text-[3.5vh] font-bold">
                                    Muscle Wiki
                                </a>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default ExerciseDetails;
