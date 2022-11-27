import React, { Component } from "react";

type MyProps = {
    title:string
};

type MyState = {};

class VerticalList extends Component<MyProps, MyState> {
    render() {
        return (
            <div className="flex flex-col items-start justify-start w-[30%] h-full my-[2%] mx-[2%]">
                <div className="text-[4vh] mb-[2%] font-bold">{this.props.title} -</div>
                <div className=" w-full h-[95%] overflow-y-scroll customScrollbar">
                    <div className="w-[90%] h-[23vh] my-[4%] rounded-[2vh] bg-[#373737]"></div>
                    <div className="w-[90%] h-[23vh] my-[4%] rounded-[2vh] bg-[#373737]"></div>
                    <div className="w-[90%] h-[23vh] my-[4%] rounded-[2vh] bg-[#373737]"></div>
                    <div className="w-[90%] h-[23vh] my-[4%] rounded-[2vh] bg-[#373737]"></div>
                    <div className="w-[90%] h-[23vh] my-[4%] rounded-[2vh] bg-[#373737]"></div>
                    <div className="w-[90%] h-[23vh] my-[4%] rounded-[2vh] bg-[#373737]"></div>
                </div>
            </div>
        );
    }
}

export default VerticalList;
