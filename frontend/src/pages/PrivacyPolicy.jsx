import React from "react";

import Container from "@/components/ui/Container";

export default function PrivacyPolicy() {
  return (
    <Container page className="max-w-prose">
      <h1 className="mb-4 text-2xl font-bold">Privacy Policy</h1>
      <p className="mb-4">
        At restocks, we value your privacy and strive to provide a transparent
        experience regarding the use of cookies and similar technologies. This
        Cookie Policy explains how we use cookies and similar tracking
        technologies when you visit our website.
      </p>
      <p className="mb-2">Here's how we use them:</p>
      <p className="list-item list-inside list-disc pl-4">
        <b>Essential Cookies:</b> These ensure basic website functionality, like
        adding items to your cart and wishlist. No personal data is stored.{" "}
      </p>
      <p className="mb-4 list-item list-inside list-disc pl-4">
        <b>Local Storage:</b> We utilize local storage to remember your cart
        items, wishlist items, and currency preferences.
      </p>
      <p>
        This enhances your browsing convenience. By using our website, you
        consent to the use of cookies and local storage as outlined above. You
        can manage your cookie preferences in your browser settings.
      </p>
    </Container>
  );
}
