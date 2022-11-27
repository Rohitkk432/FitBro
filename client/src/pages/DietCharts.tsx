import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Diets from "../components/Diets";
import VerticalList from "../components/VerticalList";

type MyProps = {};

type MyState = {};

class DietCharts extends Component<MyProps, MyState> {
    render() {
        return (
            <>
                <Navbar message="diet" />
                <div className="flex flex-row items-center justify-evenly w-full h-[92vh] py-[3vh]">
                    <VerticalList title="Diet Charts" />
                    <div className="flex flex-col items-center justify-start border border-white rounded-[2%] h-full w-[60%] p-[2vh]">
                        <Diets />
                    </div>
                </div>
            </>
        );
    }
}

export default DietCharts;
