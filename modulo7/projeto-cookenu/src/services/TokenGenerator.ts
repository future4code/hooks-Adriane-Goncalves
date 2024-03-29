import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/user";

export class TokenGenerator {
    public generateToken = (id: AuthenticationData ) => {
        const token = jwt.sign({id}, process.env.JWT_KEY as string, {
            expiresIn: "1h",
        })
        return token;
    }
}
