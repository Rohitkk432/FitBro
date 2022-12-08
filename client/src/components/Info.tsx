import React, { Component } from "react";

type MyProps = {
    data: any;
};

type MyState = {};

class Info extends Component<MyProps, MyState> {
    render() {
        return (
            <div className="flex flex-col items-start justify-start w-full h-full mt-[2%] ml-[2%]">
                {this.props.data !== null && (
                    <>
                        <div className="text-[4vh] mb-[1%] font-bold">Information on {this.props.data.bodypart} -</div>
                        <div className="flex flex-col items-start justify-start w-full h-[78%] overflow-y-scroll customScrollbar">
                            <div className="text-[2.5vh] mb-[2%] w-[95%]">{this.props.data.info}</div>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default Info;
