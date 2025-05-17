import {
  MapPin,
  Mail,
  Smartphone,
  Printer,
  Clock,
  Globe,
  User,
  Building,
} from "lucide-react";

const contactData = [
  {
    icon: <MapPin className="w-10 h-10 text-red-500" />,
    title: "Address",
    lines: [
      "123 West Street, Chittagong",
      "  Chittagong Bangladesh",
    ],
  },
  {
    icon: <Mail className="w-10 h-10 text-red-500" />,
    title: "Email",
    lines: [
      "xyz@company.com",
      "xyz@industrycompany.com",
    ],
  },
  {
    icon: <Smartphone className="w-10 h-10 text-red-500" />,
    title: "Phone",
    lines: [
      "+91 123 456 7890",
      "+23 123 456 7890",
    ],
  },
  {
    icon: <Printer className="w-10 h-10 text-red-500" />,
    title: "Fax",
    lines: [
      "+91 123 456 7890",
      "+23 123 456 7890",
    ],
  },
  {
    icon: <Clock className="w-10 h-10 text-red-500" />,
    title: "Business Hours",
    lines: [
      "Mon - Fri: 9:00 AM - 6:00 PM",
      "Sat: 10:00 AM - 4:00 PM",
    ],
  },
  {
    icon: <Globe className="w-10 h-10 text-red-500" />,
    title: "Website",
    lines: [
      "www.example.com",
      "@example (Twitter)",
    ],
  },
  {
    icon: <User className="w-10 h-10 text-red-500" />,
    title: "Contact Person",
    lines: [
      "John Doe",
      "Head of Customer Relations",
    ],
  },
  {
    icon: <Building className="w-10 h-10 text-red-500" />,
    title: "Company Info",
    lines: [
      "ABC Pvt Ltd",
      "Reg. No. 123456789",
    ],
  },
];

export default function ContactInfoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {contactData.map((item, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow"
        >
          <div className="flex justify-center mb-4">{item.icon}</div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2 uppercase tracking-wide">
            {item.title}
          </h4>
          <div className="text-sm text-gray-600 space-y-1">
            {item.lines.map((line, lineIdx) => (
              <p key={lineIdx}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
