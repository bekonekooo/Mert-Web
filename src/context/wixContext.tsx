"use client"

import  { createClient , OAuthStrategy } from '@wix/sdk';
import { members } from '@wix/members';
import {collections} from "@wix/stores";
import { products } from '@wix/stores';
import { currentCart } from '@wix/ecom';
import Cookies from 'js-cookie';
import { createContext, ReactNode } from 'react';
import { redirects } from '@wix/redirects';

const refreshToken = JSON.parse(Cookies.get("refreshToken")! || '{}');


export const wixClient = createClient({
    modules: { 
        members,
         collections, 
         products, 
         currentCart ,
            redirects,
        },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,   
        tokens: {
            accessToken :{value:"", expiresAt:0},
            refreshToken 
        }
 })
});


//...
export type WixClient = typeof wixClient;

export const WixClientContext = createContext<WixClient>(wixClient)

export const WixClientContextProvider = ({children}:{children:ReactNode})=>{
    return(
        <WixClientContext.Provider value={wixClient}>
            {children}
            </WixClientContext.Provider>
    )
}
