import React from "react";
import ContactForm from "./contact/ContactForm";
import ContactInfoGrid from "./contact/ContactInfoGrid";
import NewsletterSection from "./contact/NewsletterSection";
import QuickContact from "./contact/QuickContact";
import ContactHeaderPage from "./contact/ContactHeaderPage";

export default function Contact() {
  return (
    <div>
      <ContactHeaderPage />
      <ContactInfoGrid />
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1 ">
          <QuickContact />
        </div>
      </div>
      <NewsletterSection />
    </div>
  );
}
