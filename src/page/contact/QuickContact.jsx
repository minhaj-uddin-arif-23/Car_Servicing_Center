import { MapPin, Mail, Smartphone, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function QuickContact() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Quick Contact</h2>
      <p className="text-gray-600 mb-6">
        If you have any questions simply use the following contact details.
      </p>

      {/* Contact Items */}
      <div className="space-y-4">
        <ContactItem icon={<MapPin className="text-white" />} label="Address">
          Chittagong Bangladesh
        </ContactItem>
        <ContactItem icon={<Mail className="text-white" />} label="Email">
          xyz@company.com
        </ContactItem>
        <ContactItem icon={<Smartphone className="text-white" />} label="Phone">
          +91 123 456 7890
        </ContactItem>
      </div>

      {/* Social Media Icons */}
      <h1 className="mt-5">Follow Us</h1>
      <div className="flex gap-3 mt-6 text-white">
       
        <SocialIcon icon={<Facebook className="w-4 h-4" />} />
        <SocialIcon icon={<Twitter className="w-4 h-4" />} />
        <SocialIcon icon={<Linkedin className="w-4 h-4" />} />
        {/* <SocialIcon icon={<Pinterest className="w-4 h-4" />} /> */}
        <SocialIcon icon={<Youtube className="w-4 h-4" />} />
      </div>
 

    </div>
  );
}

function ContactItem({ icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="bg-blue-600 p-2 rounded-md">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold uppercase text-gray-800">{label}:</p>
        <p className="text-gray-700">{children}</p>
      </div>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <div className="bg-blue-600 hover:bg-blue-800 transition p-2 rounded">
      {icon}
    </div>
  );
}
