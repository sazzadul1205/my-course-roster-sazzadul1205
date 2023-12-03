import React, { useState } from "react";
import { BsCurrencyDollar, BsBook } from 'react-icons/bs';
import { toast } from "react-toastify";

const Course = ({ course, handleSelectedCourse }) => {
    const { id, title, description, price, credit, image_link } = course;
    const [isSelected, setIsSelected] = useState(false);

    const handleButtonClick = () => {
        if (isSelected) {
            toast.error('This course has already been selected.', {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
                progress: undefined,
            });
        } else {
            setIsSelected(true);
            handleSelectedCourse(course);
        }
    };

    return (
        <div className={`max-w-sm bg-white rounded-lg overflow-hidden shadow-m flex flex-col h-full`}>
            <img src={image_link} alt={title} className="w-full p-4" />
            <div className="px-6 py-4 flex-grow">
                <h2 className="text-xl font-bold mb-3 text-[#1C1B1B]">{title}</h2>
                <p className="text-[#1c1b1b99] text-sm font-normal">{description}</p>
            </div>
            <div className="px-6 py-4">
                <div className="flex justify-between mt-4">
                    <div className="flex items-center">
                        <BsCurrencyDollar className="mr-1 text-black text-xl font-semibold" />
                        <p className="font-medium text-base text-[#1c1b1b99]">Price: {price}</p>
                    </div>
                    <div className="flex items-center">
                        <BsBook className="mr-1 text-black text-xl font-semibold" />
                        <p className="font-medium text-base text-[#1c1b1b99]">Credit: {credit}hr</p>
                    </div>
                </div>
                <button
                    className={`px-4 py-2 mt-6 rounded-lg text-lg font-semibold text-[#FFF] bg-blue-500 hover:bg-blue-600 w-full`}
                    onClick={handleButtonClick}
                >
                    Select
                </button>
            </div>
        </div>

    );
};

export default Course