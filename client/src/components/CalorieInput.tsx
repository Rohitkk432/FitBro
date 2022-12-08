import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import AutoCompleteInput from "./AutoCompleteInput";

import CaloriesInFood from "../classModels/CaloriesInFood"

interface MyProps {
    closeModal: () => void;
    addToCalorieData: (data: any) => void;
}

const CalorieInput: React.FC<MyProps> = ({ closeModal,addToCalorieData }) => {
    const outlets = [
        { id: 1, name: "INS" },
        { id: 2, name: "FK" },
        { id: 3, name: "GAJA" },
        { id: 4, name: "NC" },
        { id: 5, name: "SUBSPOT" },
        { id: 6, name: "AMUL" },
    ];

    const [outlet, setOutlet] = useState<any>();
    const [foodItem, setFoodItem] = useState<any>();
    const [quantity, setQuantity] = useState<any>(0);

    const [foodData, setFoodData] = useState<any>([]);

    const getFoodData = async (outlet: string) => {
        const data = await CaloriesInFood.getByFoodOutlet(outlet);
        setFoodData(data);
    };

    const submitCalorieData = () => {
        if(quantity!==0 && foodItem!==undefined && outlet!==undefined){
            const newData = CaloriesInFood.recalculateCalorie(foodItem,quantity);
            addToCalorieData(newData);
            setFoodData([]);
            setFoodItem(undefined);
            setOutlet(undefined);
            setQuantity(0);
            closeModal();
        }
    };

    useEffect(() => {
        if (outlet !== null && outlet !== undefined) {
            setFoodItem(null);
            getFoodData(outlet.name);
        }else{
            setFoodData([]);
            setFoodItem(null);
        }
    }, [outlet]);
    

    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.3)] z-10 flex items-center justify-center">
            <div className="w-[35%] h-[60%] flex flex-col items-center justify-between bg-[#232323] rounded-[3vh] z-20 p-[1.5%]">
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="text-[3.5vh] font-semibold">Calculate Calories -</div>
                    <XMarkIcon
                        onClick={() => {
                            closeModal();
                        }}
                        className="h-[4.5vh] w-[4.5vh]"
                    />
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="text-[3.5vh] font-semibold">Outlet -</div>
                    <AutoCompleteInput data={outlets} stateData={outlet} setDataState={setOutlet} disabledState={false} />
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="text-[3.5vh] font-semibold">FoodItem -</div>
                    <AutoCompleteInput data={foodData} stateData={foodItem} setDataState={setFoodItem} disabledState={(outlet===null || outlet===undefined)} />
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="text-[3.5vh] font-semibold">Quantity -</div>
                    <input value={quantity} onChange={(e)=>setQuantity(e.target.value)} type="number" min="0" className="w-[40%] text-[2.5vh] px-[2%] py-[1%] rounded-[1vh] text-black" placeholder="units" />
                    <div className="text-[3vh] w-[25%] mr-[2%]">{foodItem?foodItem.unit:"unit"}</div>
                </div>
                <button onClick={submitCalorieData} className="text-[3.5vh] font-semibold w-full py-[1%] rounded-[1vh] bg-[#018749]">Add Food Item</button>
            </div>
        </div>
    );
};

export default CalorieInput;
