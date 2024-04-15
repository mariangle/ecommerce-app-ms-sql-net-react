import * as React from "react";
import { Link } from "react-router-dom";

import Cookies from "@/assets/img/cookies.png";

import Container from "@/components/ui/Container";

export default function CookieConsent() {
  const [acceptedCookies, setAcceptedCookies] = React.useState(() => {
    return document.cookie.includes("acceptedCookies=true");
  });

  const acceptCookies = () => {
    setAcceptedCookies(true);
    document.cookie = "acceptedCookies=true; max-age=31536000";
  };

  return (
    <>
      {!acceptedCookies && (
        <div className="fixed inset-x-0 bottom-0 z-[9999] grid place-content-center bg-blue-200 shadow-2xl">
          <Container className="rounded-xl py-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <img src={Cookies} alt="cookies" className="size-8 opacity-75" />
              <div>
                <div className="mb-1 font-semibold">We use cookies</div>
                <p className="max-w-prose text-gray-600">
                  This website uses cookies to enhance your browsing experience
                  and provide personalized recommendations. By continuing to use
                  our website, you agree to our{" "}
                  <Link to="/privacy-policy" className="underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <button
                className="rounded-sm bg-slate-950 px-3 py-2 text-sm text-white"
                onClick={acceptCookies}
              >
                Accept
              </button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
