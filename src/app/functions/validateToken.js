import { jwtVerify } from "jose";
import { decode } from "jsonwebtoken";
const validateToken = async(token) => {
    const secret = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NTY5MTU0MiwiaWF0IjoxNjk1NjkxNTQyfQ";
    try {
        /*const isTokenValidate = await jwtVerify(token, new TextEncoder().encode(secret));
        if (isTokenValidate) {
            return true
        }*/
        const isTokenValidate = await decode(token);
        if (isTokenValidate) {
            return true
        }
    } catch {
        return false
    }
}
export { validateToken }













/*import { jwtVerify } from "jose";
import Cookies from "js-cookie";

const validateToken = async (token) => {
    const secret = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5ODE2ODAwMSwiaWF0IjoxNjk4MTY4MDAxfQ.3BEiSD5w4JpxwypAIB5L-2iTfoyGtf8MTcDfjUyS4Ts";
    try {
        const userJwt = await jwtVerify(token, new TextEncoder().encode(secret));

        if (userJwt) {
            Cookies.set('user', userJwt?.payload.id, { expires: 8400 });
            Cookies.set('token', token, { expires: 8400 });

            return true
        }
    }
    catch {
        return false;
    }
}
export { validateToken };
*/









