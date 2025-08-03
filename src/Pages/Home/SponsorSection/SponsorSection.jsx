// components/SponsorsSection.jsx

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import uiuLogo from '../../../assets/sponsors/uiu-logo.png';

export default function SponsorsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          title="Our Sponsor"
          subtitle="Proudly supported by"
          center
        />
        
        <div className="mt-12 flex flex-col items-center justify-center">
          {/* UIU Logo */}
          <div className="mb-8">
            <img
              src={uiuLogo}
              alt="UIU Logo"
              className="w-50 object-contain"
            />
          </div>
          
          {/* Sponsor Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              United International University
            </h3>
            <p className="text-gray-600 text-lg">
              Our Principal Sponsor
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Thank you for believing in our mission
          </p>
        </div>
      </div>
    </section>
  );
}