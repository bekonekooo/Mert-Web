import { createClient ,OAuthStrategy } from "@wix/sdk";
import { NextResponse, NextRequest} from "next/server";

export const middleware = async (request: NextRequest) => {

    const cookies = request.cookies;
    const res = NextResponse.next();
    if(cookies.get("refreshToken")){
       return res
    }
    
//     const wixClieent = createClient({
//       auth: OAuthStrategy({
//   clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
// }),
    const wixClieent = createClient({
      auth: OAuthStrategy({
  clientId: "ff0a6f69-9090-48a8-8236-5a7d33227c62",
}),
        
    });

    const tokens = await wixClieent.auth.generateVisitorTokens();
    res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken),{
        maxAge : 60 * 60 * 24 * 30,

    });

    return res;

}
