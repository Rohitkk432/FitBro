import React, { Component } from "react";

type MyProps = {
    instruction: string;
};

type MyState = {};

class InstructionComponent extends Component<MyProps, MyState> {
    render() {
        return (
            <div className="flex flex-col items-start justify-start w-[90%] mt-[5%]">
                <div className="text-[4vh] mb-[2%] font-bold">
                    {this.props.instruction}
                </div>
            </div>
        );
    }
}

export default InstructionComponent;
