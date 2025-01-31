import React from "react";

function LeftSider(){
    return(
        <div className="fixed left-0 bottom-0 px-10 sm:static">
            <div className="flex flex-col items-center">
            <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://www.instagram.com/aviral_ll/"><i class="ri-instagram-line text-gray-400 "></i></a>
            <a href="https://github.com/aviral-shrivastava"><i class="ri-github-line text-gray-400 "></i></a>
            <a href="https://www.linkedin.com/in/aviral-shrivastava-9b0805215/"><i class="ri-linkedin-line text-gray-400 "></i></a>
            <a href="mailto: aviralshrivastava604@gmail.com"><i class="ri-mail-line text-gray-400 "></i></a>
            </div>
            <div className="w-[1px] h-32 bg-[#125f63] sm:bg-black">
            </div>
            </div>
        </div>
    )
}

export default LeftSider;