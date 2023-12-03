import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Courses from './Components/Courses/Courses';
import CourseLogs from './Components/CourseLogs/CourseLogs';

function App() {
  const [courseSelected, setCourseSelected] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectedCourse = (course) => {
    const newCreditHour = creditHour + course.credit;

    if (newCreditHour <= 20) {
      const newCourseSelected = [...courseSelected, course];
      setCourseSelected(newCourseSelected);

      setCreditHour(newCreditHour);

      setTotalPrice(totalPrice + course.price);
    } else {

      toast.error('Total Credit Hour Limit Exceeded (20 Credit Hours)', {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        progress: undefined,
      });
    }
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <h1 className='text-4xl font-bold text-[#1C1B1B] text-center py-10 '>Course Registration</h1>
      <div className='md:flex mx-12'>
        <Courses handleSelectedCourse={handleSelectedCourse}></Courses>
        <CourseLogs courseSelected={courseSelected} creditHour={creditHour} totalPrice={totalPrice}></CourseLogs>
      </div>
    </>
  );
}

export default App;
