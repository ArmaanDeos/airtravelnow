import {
  Facebook,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MobileFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 sm:px-5">
      <div className="max-w-6xl mx-auto py-5 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="mb-2">
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:info@tripstages.com"
              className="text-white hover:text-primary-red"
            >
              {" "}
              info@airtravelnow.online
            </a>
          </p>
          <p className="mb-4">
            📞 <strong>Phone:</strong>{" "}
            <a
              href="tel:0800 058 4202"
              className="text-white hover:text-primary-red"
            >
              0800 058 4202
            </a>
          </p>
          <p className="mb-2">
            📍 <strong>Address:</strong> 871 Cherry Court, SOUTHAMPTON, S163 5PD
            , UK
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 text-center py-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} TripStages. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default MobileFooter;
