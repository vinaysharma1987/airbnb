'use client'

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avtar";

const UserMenu = () => {
    return (
        <div className="relative">
            <div className="
            flex
            flex-row
            items-center
            gap-3">
                <div onClick={() => { }}
                 className="
                  
                 mb:block
                 text-sm 
                 font-semibold 
                 py-3 
                 px-4 
                 rounded-full 
                hover:bg-neutral-100
                transition
                cursor-pointer
                ">
                    Airbng Your Home
                </div>
                <div
                onClick={() => {}}
                className="
                p-4
                mb:py-1
                mb:px-2
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3 
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
                ">
                    <AiOutlineMenu />
                    <div className=" mb-block">
                        <Avatar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserMenu;