import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Outlet, useLocation } from "react-router-dom";

export function ProtectedLayout() {
  const location = useLocation();

  return (
    <>
      <SignedIn>
        <Outlet />
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn redirectUrl={location.pathname} />
      </SignedOut>
    </>
  );
}