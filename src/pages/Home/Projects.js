import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div>
            <SectionTitle title="Projects" />


            <div className="flex py-10 gap-20 sm:flex-col">
                <div className="flex flex-col gap-5 border-l-2 gap-10 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full ">
                    {projects.map((project, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }}
                            className="cursor-pointer"
                        >
                            <h1 className={`text-xl px-5
                                ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px]" :
                                    "text-white"}`}>
                                {project.period}
                            </h1>
                        </div>

                    ))}
                </div>

                <div className="flex items-center justify-center gap-10">
                    <img src={projects[selectedItemIndex].image} className="h-60 w-72"/>
                <div className="flex flex-col gap-5">
                    <h1 className="text-secondary text-xl">{projects[selectedItemIndex].title}</h1>
                    <h1 className="text-tertiary text-xl">{projects[selectedItemIndex].project}</h1>
                    <p className="text-white">
                    {projects[selectedItemIndex].description}  
                    </p>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Projects