import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Diets from "../components/Diets";
import VerticalList from "../components/VerticalList";
import DietChart from "../classModels/DietChart"

type MyProps = {};

type MyState = {
    diets: any;
    activeDiet: any;
};

class DietCharts extends Component<MyProps, MyState> {
    state: MyState = {
        diets: [],
        activeDiet: null,
    };
    public async getAllData(){
        const data = await DietChart.getAll();
        this.setState({ diets: data });
    };
    componentDidMount() {
        this.getAllData();
    }
    render() {
        const setActive = (data:any) => {
            this.setState({ activeDiet: data });
        };
        return (
            <>
                <Navbar message="diet" />
                <div className="flex flex-row items-center justify-evenly w-full h-[92vh] py-[3vh]">
                    <VerticalList title="Diet Charts" data={this.state.diets} setActive={setActive} active={this.state.activeDiet}/>
                    <div className="flex flex-col items-center justify-start border border-white rounded-[2%] h-full w-[60%] p-[2vh]">
                        <Diets data={this.state.activeDiet} />
                    </div>
                </div>
            </>
        );
    }
}

export default DietCharts;
