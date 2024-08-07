import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
    const user = {
        name: "Aviral",
        age: "21",
        gender: "male",
        email: "aviralshrivastava604@gmail.com",
        mobile: "960170378",
    };

    return (
        <div>
            <SectionTitle title='Say Hello' />
            <div className="flex sm:flex-col items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-tertiary">{"{"}</p>
                    {Object.keys(user).map((key) => (
                        <p className="ml-5">
                            <span className="text-tertiary ">{key} : </span>
                            <span className="text-tertiary ">{user[key]}</span>
                            
                        </p>
                    ))}
                    <p className="text-tertiary text-sm">{"}"}</p>
                </div>
                <div className="h-[300px]">
                <lottie-player src="https://lottie.host/ab50b596-20b9-4ecd-8850-5196a49c8c5d/yBJS3lnHJ5.json" background="transparent" speed="1" autoplay ></lottie-player>
            </div>
            </div>
        </div>
    );
}

export default Contact;
