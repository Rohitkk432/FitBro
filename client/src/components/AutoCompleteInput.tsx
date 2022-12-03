import React,{ Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface propsExample {
    data: Array<{ id: number; name: string }>;
    stateData: string;
    setDataState: React.Dispatch<React.SetStateAction<string>>;
    disabledState: boolean;
}

const AutoCompleteInput: React.FC<propsExample> = ({data,stateData,setDataState,disabledState}) => {
    const [query, setQuery] = useState("");

    const filtereddata = query === "" ? data : data.filter((dataItem:any) => dataItem.name.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")));

    return (
        <Combobox value={stateData} onChange={setDataState} disabled={disabledState}>
            <div className="w-[70%] relative">
                <div className="relative w-full cursor-default overflow-hidden rounded-[1vh] bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 text-[2.5vh]">
                    <Combobox.Input
                        className="w-full border-none py-[2%] pl-[5%] pr-[15%] text-[2.5vh] leading-5 text-gray-900 focus:ring-0"
                        displayValue={(dataItem: any) => dataItem?.name}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-[2%]">
                        <ChevronUpDownIcon className="h-[3vh] w-[3vh] text-gray-400" aria-hidden="true" />
                    </Combobox.Button>
                </div>
                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery("")}>
                    <Combobox.Options className="absolute mt-[1%] max-h-[30vh] w-full overflow-auto rounded-[1vh] bg-white py-[1%] text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-[2.5vh] customScrollbar z-30">
                        {filtereddata.length === 0 && query !== "" ? (
                            <div className="relative cursor-default select-none py-[2%] px-[4%] text-gray-700">Nothing found.</div>
                        ) : (
                            filtereddata.map((dataItem) => (
                                <Combobox.Option
                                    key={dataItem.id}
                                    className={({ active }) => `z-40 relative cursor-default select-none py-[2%] pl-[12%] pr-[4%] ${active ? "bg-teal-600 text-white" : "text-gray-900"}`}
                                    value={dataItem}>
                                    {({ selected, active }) => (
                                        <>
                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{dataItem.name}</span>
                                            {selected ? (
                                                <span className={`z-50 absolute inset-y-0 left-0 flex items-center pl-[3%] ${active ? "text-white" : "text-teal-600"}`}>
                                                    <CheckIcon className="h-[3vh] w-[3vh]" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    );
}

export default AutoCompleteInput;