import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import PrivatePage from "../containers/private/PrivatePage";

export default function PrivateRoute() {
    return (
        <>
            <SignedIn>
                <PrivatePage />            
            </SignedIn>
            <SignedOut>
            <RedirectToSignIn />
            </SignedOut>
        </>
    );
}