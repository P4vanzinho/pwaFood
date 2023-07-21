import { AppRoutes } from "../appRoutes";

/**
 * @params asPath :string 
 * @returns : boolean
 * */

export const checkIsPublicRoute=(asPath:string)=>{
    const appPublicRoutes=Object.values(AppRoutes.public);
    return appPublicRoutes.includes(asPath);
};