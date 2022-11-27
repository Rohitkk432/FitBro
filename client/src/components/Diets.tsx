import React, { Component } from "react";

type MyProps = {};

type MyState = {
    day: string;
};

class Diets extends Component<MyProps, MyState> {
    state: MyState = {
        day: "Monday",
    };
    render() {
        return (
            <div className="flex flex-col items-start justify-start w-full h-full mx-[3%]">
                <div className="text-[4vh] ml-[1%] mb-[1%] font-bold">Body Recomposition Diet -</div>
                <div className="text-[3vh] ml-[1%] mb-[1%]">
                    Note : This plan revolves around your workout being in the evening. In case it's in the morning, treat the breakfast Protein Shake as post workout's. You can have the second shake
                    anytime during the day.
                </div>
                <div className="flex flex-row items-start justify-start w-full">
                    <div
                        className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "Monday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                        onClick={() => {
                            this.setState({ day: "Monday" });
                        }}>
                        Mon
                    </div>
                    <div
                        className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "Tuesday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                        onClick={() => {
                            this.setState({ day: "Tuesday" });
                        }}>
                        Tues
                    </div>
                    <div
                        className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "Wednesday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                        onClick={() => {
                            this.setState({ day: "Wednesday" });
                        }}>
                        Wed
                    </div>
                    <div
                        className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "Thursday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                        onClick={() => {
                            this.setState({ day: "Thursday" });
                        }}>
                        Thur
                    </div>
                    <div
                        className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "Friday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                        onClick={() => {
                            this.setState({ day: "Friday" });
                        }}>
                        Fri
                    </div>
                    <div
                        className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "Saturday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                        onClick={() => {
                            this.setState({ day: "Saturday" });
                        }}>
                        Sat
                    </div>
                    <div
                        className={`h-[5vh] m-[1%] rounded-[1vh] bg-[#373737] w-[12%] flex items-center justify-center text-[2.5vh] font-semibold border-2
                    ${this.state.day === "Sunday" ? "border-[#1CAC78]" : "border-[#373737]"}`}
                        onClick={() => {
                            this.setState({ day: "Sunday" });
                        }}>
                        Sun
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[98%] h-[80%] ml-[2%] overflow-y-scroll customScrollbar">
                    <div className="text-[3vh] my-[2vh]">Breakfast : 2 eggs, 1 cup oatmeal, protein shake with milk with 1 paratha ( optional)</div>
                    <div className="text-[3vh] my-[2vh]">Lunch : Dal Makhani & Black Chana (1 serving) with 2-3 chapatis</div>
                    <div className="text-[3vh] my-[2vh]">Snack: Single serve non-fat yogurt, almonds (dozen)</div>
                    <div className="text-[3vh] my-[2vh]">Dinner : 1 serving of eggs/paneer with 2-3 chapatis</div>
                    <div className="text-[3vh] my-[2vh]">Note: post workout : Protein shake ( 1 scoop ) with milk and a banana </div>
                </div>
            </div>
        );
    }
}

export default Diets;
