import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleSelectedCourse, handleCourseHours }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div className="w-3/4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                courses.map(course => <Course
                    handleSelectedCourse={handleSelectedCourse}
                    handleCourseHours={handleCourseHours}
                    key={course.id}
                    course={course}
                ></Course>)
            }

        </div>
    );
};

export default Courses;