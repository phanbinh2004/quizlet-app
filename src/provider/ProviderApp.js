import { useNavigate } from "react-router-dom";
import {
  ClerkProvider
} from "@clerk/clerk-react";

if(!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY){
    throw new Error("Missing Publishable Key");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

export const ClerkProviderWithRoutes = ({children}) => {
    const navigate = useNavigate();

    return (
        <ClerkProvider
            publishableKey={clerkPubKey}
            navigate={(to)=>navigate(to)}
        >
            {children}
        </ClerkProvider>
    )
}