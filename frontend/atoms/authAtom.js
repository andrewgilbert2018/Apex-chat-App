import { atom } from "recoil";

const authScreenAtom = atom({
	key: "authScreenAtom",
	default: "login" | "signup" | "ForgotPassword",
});

export default authScreenAtom;

