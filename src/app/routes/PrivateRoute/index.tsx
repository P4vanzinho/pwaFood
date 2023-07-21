'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

import { AppRoutes } from '../appRoutes';
import { checkIsPublicRoute } from '../CheckIsPublicAuth';
import checkUserAuthenticated from '../CheckUserAuthenticated';

type PrivateRouteProps={
    children:ReactNode;
}

export default function PrivateRoute({children}:PrivateRouteProps){
    const { push } =useRouter();
    
    const isUserAuthenticated=checkUserAuthenticated();
    
    useEffect(()=>{
        if(!isUserAuthenticated) {
            push(AppRoutes.public.login)
        }
    },[isUserAuthenticated,push]);

    return(
        <>
        {!isUserAuthenticated && null}
        {isUserAuthenticated && children}
        </>
    )
    
}
   

    
