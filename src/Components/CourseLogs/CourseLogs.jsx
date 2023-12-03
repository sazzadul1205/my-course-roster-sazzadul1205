import React from 'react';
import { toast } from 'react-toastify';

const CourseLogs = ({ courseSelected, creditHour, totalPrice }) => {

    if (creditHour < 0) {
        toast.error('Credit Hour Cannot Be Negative', {
            position: 'top-right',
            autoClose: 5000,
            closeOnClick: true,
            progress: undefined,
        });
    }

    return (
        <div className="md:w-1/4">
            <div className='bg-[#FFF] ml-4 mt-2 pt-4 rounded-xl'>
                <h1 className='text-2xl font-bold text-[#2F80ED] m-6 text-center'>Credit Hour Remaining {20 - creditHour} hr</h1>
                <hr className="mx-6 text-[#1c1b1b33]" />
                <div className='ml-6 my-6'>
                    <h1 className='text-xl font-bold text-[#1C1B1B]' >Course Name</h1>
                    <div className='text-base font-normal my-6'>
                        {courseSelected.map((course, index) => (
                            <div key={index}>
                                <p className='text-base font-normal py-2'>{index + 1}. {course.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="mx-6 text-[#1c1b1b33]" />
                <h3 className='text-base font-medium ml-6 my-4 '>Total Credit Hour : {creditHour}</h3>
                <hr className="mx-6 text-[#1c1b1b33]" />
                <h3 className='text-base font-semibold ml-6 py-6'>Total Price : {totalPrice} USD</h3>
            </div>
        </div>
    );
};

export default CourseLogs;
