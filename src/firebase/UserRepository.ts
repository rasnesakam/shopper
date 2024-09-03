import {collection, getDoc, getDocs, getFirestore, query, where} from "@firebase/firestore";
import firebase from "./firebase.config";
import User from "../types/User";

const db = getFirestore(firebase);
const DB_NAME = "users";

export async function getUserByUsername(username: string): Promise<User | undefined> {
    let q = query(collection(db, DB_NAME), where("username", "==", username));
    let userDoc = await getDocs(q);
    if (!userDoc)
        return undefined;
    return userDoc.docs.at(0)?.data() as User;
}