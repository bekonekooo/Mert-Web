// import  { createClient , OAuthStrategy } from '@wix/sdk';
// import { members } from '@wix/members';
// import {collections} from "@wix/stores";
// import { products } from '@wix/stores';
// import { currentCart } from '@wix/ecom';
// import Cookies from 'js-cookie';

// const refreshToken = JSON.parse(Cookies.get("refreshToken")! || 'null');
// const accessToken = JSON.parse(Cookies.get("accessToken")! || 'null');

// export const wixClient = createClient({
//     modules: { 
//         members,
//          collections, 
//          products, 
//          currentCart },
//     auth: OAuthStrategy({
//         clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,   
//         tokens: {
//             accessToken,
//             refreshToken
//         }
//  })
// });
