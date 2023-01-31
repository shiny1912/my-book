import { useCallback } from "react";
import SignIn from "../components/SignIn"

export default function SignInContainer() {
    const login = useCallback((reqData) => { }, []);

    return <SignIn login={login} />;
}