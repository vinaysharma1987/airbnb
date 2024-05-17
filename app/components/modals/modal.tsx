'use client'

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}
const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel
}) => {
    const [showModel, setShowModel] = useState(isOpen);
    useEffect(() => {
        setShowModel(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled)
            return;
        setShowModel(false);
        setTimeout(() => {
            onClose();
        }, 10);
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled)
            return;
        onSubmit();
    }, [disabled, onSubmit])

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction)
            return;

        secondaryAction();
    }, [disabled, secondaryAction]);

    if (!isOpen)
        return null;

    return (
        <>

            <div id="vi_1" className="justify-center
                    items-center
                    flex 
                    overflow-x-hidden
                    overflow-y-auto
                    fixed
                    inset-0
                    z-50
                    outline-none
                    focus:outline-none
                    bg-orange-200/70">
                <div id="vi_2"
                    className="
                        relative 
                        w-full 
                        md:w-4/6 
                        lg:w-3/6 
                        xl:w-2/5
                        my-6 
                        mx-auto 
                        h-full 
                        lg:h-auto 
                        md:h-auto">
                    {/** sontent */}

                    <div id="vi_3" className="
                            translate
                            duration-50
                            h-full
                            ${showModel ? 'translate-y-0' :'translate-y-full'}
                            ${showModel ? 'opacity-100' : 'opacity-0'}
                            ">
                        <div id="vi_4"
                            className="
                                translate 
                                h-full 
                                lg:h-auto 
                                md:h-auto 
                                border-0 
                                rounded-lg 
                                shadow-lg 
                                relative 
                                flex 
                                flex-col
                                w-full 
                                bg-white 
                                outline-none 
                                focus:outline-none">


                            {/** header */}
                            <div id="vi_5"
                                className="flex 
                                        items-center 
                                        p-6
                                        rounded-t
                                        justify-center
                                        relative
                                        border-b-[1px]">



                                <button onClick={handleClose} className="
                                        p-1
                                        border-0 
                                        hover:opacity-70
                                        transition
                                        absolute 
                                        left-9 ">
                                    <IoMdClose size={18} />

                                </button>
                                <div id="vi_6" className=" text-lg font-semibold">

                                    {title}

                                </div>
                            </div>

                            {/** body */}
                            <div id="vi_7" className="relative p-6 flex-auto">
                                {body}
                            </div>

                            {/** footer */}
                            <div id="vi_8" className="flex flex-col gap-2 p-6 ">
                                <div className=" 
                                flex 
                                flex-row 
                                items-center 
                                gap-4 
                                w-full ">
                               { secondaryActionLabel && (
                                    <Button disabled={disabled}
                                        icon={IoMdClose}
                                        label={secondaryActionLabel}
                                        onClick={handleSecondaryAction} />
                                )}
                                <Button disabled={disabled}
                                        outline
                                    label={actionLabel}
                                    onClick={handleSubmit} />
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal

