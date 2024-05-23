'use client'

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avtar";
import React, { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModel from "@/app/hooks/useRegisterModel";
import useLoginModel from "@/app/hooks/useLoginModel";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const registerModel = useRegisterModel();
    const loginModel = useLoginModel();
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])
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
                    onClick={toggleOpen}
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
            {isOpen && (
                <div className="
                absolute
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-white
                overflow-hidden
                right-0
                top-12
                text-sm">
                    <div
                        className="flex flex-col cursor-pointer">

                        {currentUser ? (
                            <>
                                <MenuItem onClick={() => { }} label="My Trips" />
                                <MenuItem onClick={() => { }} label="MY Favorites" />
                                <MenuItem onClick={() => { }} label="Reservations" />
                                <MenuItem onClick={() => { }} label="My Properties" />
                                <MenuItem onClick={() => { }} label="My Home" />
                                <MenuItem onClick={() => { signOut() }} label="Logout" />
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={() => { loginModel.onOpen() }} label="login" />
                                <MenuItem onClick={() => { registerModel.onOpen() }} label="Sign up" />
                                <MenuItem onClick={() => { }} label="Request Demo" />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu;