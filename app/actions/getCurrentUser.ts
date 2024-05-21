import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import toast from "react-hot-toast";
import { create } from "domain";

export async function getSession(){
    return await getServerSession(authOptions);
}

export default async function getCurrentUser() {

    try{
        const session = await getSession();
        if (!session?.user?.email) 
            return null;
        
        
        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string,
            },
        });

        if (!currentUser) 
            return null;

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailverified?.toISOString() || null,
        };
    }
    catch(e){
        toast.error("Error fetching user data");
        return null;
    }
}
