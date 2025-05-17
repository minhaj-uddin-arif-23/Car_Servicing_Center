import { User, Car, Headphones, Settings, ShieldCheck,  Gauge } from "lucide-react";
import AboutFeatureCard from "./AboutFeatureCard";

export default function AboutSection() {
  return (
    <section className="w-11/12 mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6">ABOUT COMPANY</h2>
      <p className="text-gray-600 mb-4">
        At CarCare, we offer expert vehicle maintenance and support that’s fast,
        honest, and affordable. Whether it’s a routine oil change, brake
        inspection, or complex engine diagnostics, our certified technicians
        ensure every service is done right the first time.
      </p>
      <p className="text-gray-600 mb-4">
        We use the latest tools and technology to provide accurate assessments
        and high-quality repairs. Our goal is to minimize your downtime and
        maximize your vehicle’s performance and lifespan.
      </p>
      <p className="text-gray-600 mb-4">
        Our team is committed to keeping your car running smoothly with 24/7
        service, top-quality staff, and a customer-first attitude. We believe in
        clear communication, transparent pricing, and delivering reliable
        solutions that earn your trust.
      </p>
      <p className="text-gray-600 mb-10">
        From family cars to commercial vehicles, CarCare is your one-stop
        destination for all automotive needs. Experience peace of mind with our
        guaranteed workmanship and friendly service tailored to your schedule.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <AboutFeatureCard
          icon={<User />}
          title="Our Best Workers"
          description="Skilled and experienced professionals ready to serve."
        />
        <AboutFeatureCard
          icon={<Car />}
          title="Fast Car Service"
          description="Quick, reliable, and efficient car servicing."
        />
        <AboutFeatureCard
          icon={<Headphones />}
          title="Well Qualified Staff"
          description="Trained staff with customer-first support."
        />
        <AboutFeatureCard
          icon={<Settings />}
          title="24X7 Service"
          description="Available any time you need us — day or night."
        />
        <AboutFeatureCard
          icon={<ShieldCheck />}
          title="Trusted & Secure"
          description="Committed to safety, trust, and high-quality service."
        />
   <AboutFeatureCard
  icon={<Gauge />}
  title="Performance Focused"
  description="We enhance your car’s reliability and road performance."
/>
      </div>
    </section>
  );
}
