import Image from "next/image";
import { Card } from "./ui/card";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 py-10">
      <Card className="flex items-center gap-4 flex-col sm:flex-row px-5 py-6 text-center sm:text-left">
        <Image
          src="/images/affordable.png"
          width={80}
          height={80}
          alt="affordable"
        />
        <div>
          <h1 className="text-xl font-semibold mb-1 text-primary-red">
            Affordable Plans
          </h1>
          <p className="text-sm text-gray-700">
            We provide cheap plans for both domestic and international
            locations.
          </p>
        </div>
      </Card>
      <Card className="flex items-center gap-4 flex-col sm:flex-row px-5 py-6 text-center sm:text-left">
        <Image src="/images/secure.png" width={80} height={80} alt="secure" />
        <div>
          <h1 className="text-xl font-semibold mb-1 text-primary-red">
            Safe and Secure
          </h1>
          <p className="text-sm text-gray-700">
            Our website is fully safe and secure, with increased SSL encryption.
          </p>
        </div>
      </Card>
      <Card className="flex items-center gap-4 flex-col sm:flex-row px-5 py-6 text-center sm:text-left">
        <Image src="/images/support.png" width={80} height={80} alt="support" />
        <div>
          <h1 className="text-xl font-semibold mb-1 text-primary-red">
            24/7 Customer Service
          </h1>
          <p className="text-sm text-gray-700">
            Our skilled crew works around the clock; you can reach us via email
            or phone.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Services;
