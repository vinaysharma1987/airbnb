'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModel from '@/app/hooks/useRegisterModel';
import Modal from './modal';
import { BiHeading } from 'react-icons/bi';
import Heading from '../Heading';

const RegisterModal = () => {
    const registerModel = useRegisterModel();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''

        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/register', data)
        .then(() => { registerModel.onClose(); })
        .catch((error) => { console.log(error); })
        .finally(() => { setIsLoading(false); });
    }

    const bodyContent = (
        <div className='
        flex flex-col gap-4'>
            <Heading title="Welcome to Pundit ji" subtitle="Create an account"  center/>
        </div>
    );
    return (
        <Modal 
        disabled={isLoading} 
        isOpen={registerModel.isOpen}
        title="Register"
        actionLabel="continue"
        onClose={registerModel.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        />
    );
}

export default RegisterModal;