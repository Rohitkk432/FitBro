import React, { Component } from "react";

import ExtendedDietChart from "../classModels/ExtendedDietChart";
import DietChart from "../classModels/DietChart";

type MyProps = {
    data: DietChart | null;
};

type MyState = {
    day: string;
    dataToShow: any;
};

class Diets extends Component<MyProps, MyState> {
    state: MyState = {
        day: "monday",
        dataToShow: null,
    };

    getData = async (dietChart: DietChart) => {
        this.setState({ dataToShow: null });
        const res = await ExtendedDietChart.fromDietChart(dietChart);
        this.setState({ dataToShow: res });
    };

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.data !== this.props.data) {
            this.setState({ day: "monday" });
            if (this.props.data !== null) {
                this.getData(this.props.data);
            } else {
                this.setState({ dataToShow: null });
            }
        }
    }

    render() {
        return (
            this.state.dataToShow !== null && (
                <div className="flex flex-col items-start justify-start w-full h-full mx-[3%]">
                    <div className="text-[4vh] ml-[1%] mb-[1%] font-bold">{this.state.dataToShow.name} Diet -</div>
                    <div className="text-[3vh] ml-[1%] mb-[1%]">Note : {this.state.dataToShow.info}</div>
                    <div className="flex flex-row items-start justify-start w-full">
                        <div
                            className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "monday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                            onClick={() => {
                                this.setState({ day: "monday" });
                            }}>
                            Mon
                        </div>
                        <div
                            className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "tuesday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                            onClick={() => {
                                this.setState({ day: "tuesday" });
                            }}>
                            Tues
                        </div>
                        <div
                            className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "wednesday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                            onClick={() => {
                                this.setState({ day: "wednesday" });
                            }}>
                            Wed
                        </div>
                        <div
                            className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "thursday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                            onClick={() => {
                                this.setState({ day: "thursday" });
                            }}>
                            Thur
                        </div>
                        <div
                            className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "friday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                            onClick={() => {
                                this.setState({ day: "friday" });
                            }}>
                            Fri
                        </div>
                        <div
                            className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "saturday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                            onClick={() => {
                                this.setState({ day: "saturday" });
                            }}>
                            Sat
                        </div>
                        <div
                            className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "sunday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                            onClick={() => {
                                this.setState({ day: "sunday" });
                            }}>
                            Sun
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[98%] h-[80%] ml-[2%] overflow-y-scroll customScrollbar">
                        <div className="text-[3vh] my-[2vh]">Breakfast : {this.state.dataToShow[`${this.state.day}`].breakfast}</div>
                        <div className="text-[3vh] my-[2vh]">Lunch : {this.state.dataToShow[`${this.state.day}`].lunch}</div>
                        <div className="text-[3vh] my-[2vh]">Snack: {this.state.dataToShow[`${this.state.day}`].snack}</div>
                        <div className="text-[3vh] my-[2vh]">Dinner : {this.state.dataToShow[`${this.state.day}`].dinner}</div>
                        <div className="text-[3vh] my-[2vh]">Note: {this.state.dataToShow[`${this.state.day}`].note}</div>
                    </div>
                </div>
            )
        );
    }
}

export default Diets;
