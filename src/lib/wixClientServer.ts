import  { createClient , OAuthStrategy } from '@wix/sdk';
import { members } from '@wix/members';
import {collections} from "@wix/stores";
import { products } from '@wix/stores';
import { orders } from '@wix/ecom';
import Cookies from 'js-cookie';
import { createContext, ReactNode } from 'react';
import { cookies } from 'next/headers';



export const wixClientServer= async ()=>{

let refreshToken;

try {
    const cookieStore = cookies();   
     refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || 'null');
} catch (error) {
    
}
 const wixClient = createClient({
    modules: { 
        
         collections, 
         products, 
         orders,
         members,
         },
//     auth: OAuthStrategy({
//         clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,   
//         tokens: {
//             accessToken :{value:"", expiresAt:0},
//             refreshToken 
//         }
//  })
   auth: OAuthStrategy({
        clientId: "9b13e616-e40a-4aa3-ac39-481ceee3f41b",   
        tokens: {
            accessToken :{value:"", expiresAt:0},
            refreshToken 
        }
 })
})
return wixClient;
}