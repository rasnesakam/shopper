import {NextApiRequest, NextApiResponse} from "next";
import Bcrypt from "bcrypt";
import {getUserByUsername} from "../../../src/firebase/UserRepository";
import {cookies} from "next/headers";
import {RequestCookie} from "next/dist/server/web/spec-extension/cookies";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        let username = req.body.username;
        let password = req.body.password;

        let user = await getUserByUsername(username);
        if (!user)
            res.status(401).json({"message": "Invalid username or password"});
        if (Bcrypt.compareSync(password, user!.password)) {
            cookies().set("auth",user!.id);
            res.redirect(`/panel/urunler`);
        }
        else
            res.status(401).json({"message": "Invalid username or password"});
    }
}