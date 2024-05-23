'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModel from '@/app/hooks/useRegisterModel';
import Modal from './modal';
import Heading from '../Heading';
import Input from '../inputs/input';
import toast from 'react-hot-toast';
import Button from '../Button';
import { signIn } from 'next-auth/react';

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
            .then(() => {
                registerModel.onClose();
                toast.success('Registration successful!');
            })
            .catch((error) => {
                toast.error(error.statusText || 'An error occurred \n' + error.statusText + ' ' + error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const bodyContent = (
        <div className='
        flex flex-col gap-4'>
            <Heading
                title="Welcome to Pundit ji"
                subtitle="Create an account"
                center />

            <Input
                id="email"
                label="Email"
                type='email'
                register={register}
                errors={errors}
                required
                disabled={isLoading}
            />

            <Input
                id="name"
                label="Name"
                type='text'
                register={register}
                errors={errors}
                required
                disabled={isLoading}
            />

            <Input
                id="password"
                label="Password"
                type='password'
                register={register}
                errors={errors}
                required
                disabled={isLoading}
            />
        </div>
    );
    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button
                outline
                disabled={isLoading}
                icon={FcGoogle}
                label="Continue with Google"
                onClick={() => { }} />
            <Button
                outline
                disabled={isLoading}
                icon={AiFillGithub}
                label="Continue with GitHub"
                onClick={() => {signIn('github')}} />

            <div className='
            text-neutral-500
            text-center
            mt-4
            font-light'>
                <div className='justify-center flex flex-row items-center gap-2'>
                    <div> Already have an account ?</div>
                    <div 
                    onClick={registerModel.onClose}
                    className='
                    text-neutural-800
                    cursor-pointer hover:underline'>
                        Login
                    </div>
                </div>
            </div>
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
            footer={footerContent}
        />
    );
}

export default RegisterModal;