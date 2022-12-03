import React, { Component } from "react";

type MyProps = {
    title: string;
    data: any;
    setActive: any;
    active: any;
};

type MyState = {};

class VerticalList extends Component<MyProps, MyState> {
    render() {
        return (
            <div className="flex flex-col items-start justify-start w-[30%] h-full my-[2%] mx-[2%]">
                <div className="text-[4vh] mb-[2%] font-bold">{this.props.title} -</div>
                <div className=" w-full h-[95%] overflow-y-scroll customScrollbar">
                    {this.props.data.map((item: any, index: any) => (
                        <div
                            onClick={() => {
                                this.props.setActive(item);
                            }}
                            key={index}
                            className={`w-[90%] h-[23vh] my-[4%] rounded-[2vh] bg-[#373737] flex items-center justify-center text-[4vh] font-semibold border-2
                            ${this.props.active === item ? "border-[#1CAC78]" : "border-[#373737]"}`}>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default VerticalList;
