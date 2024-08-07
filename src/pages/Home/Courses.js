import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses"; // Use named import

function Courses() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div>
            <SectionTitle title="Courses" />

            <div className="flex py-10 gap-20 sm:flex-col">
                <div className="flex flex-col gap-5 border-l-2 gap-10 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {courses.map((course, index) => (
                        <div 
                            key={index}
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }}
                            className="cursor-pointer"
                        >
                            <h1 className={`text-xl px-5
                                ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px]" : "text-white"}`}>
                                {course.title}
                            </h1>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-10">
                    <img src={courses[selectedItemIndex].image} className="h-60 w-72" alt="Course" />
                    <div className="flex flex-col gap-5">
                        <h1 className="text-secondary text-xl">{courses[selectedItemIndex].title}</h1>
                        <h1 className="text-tertiary text-xl">{courses[selectedItemIndex].project}</h1>
                        <p className="text-white">
                            These are the extra curricular external courses that I have completed throughout my B.Tech duration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;
