import React from "react";

interface Feature {
  icon: React.ReactNode;
  header: string;
  paragraph: string;
}

interface FeatureSectionProps {
  features: Feature[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  return (
    <section className="container mx-auto py-8 mt-16">
      <h2 className="text-large text-white text-center font-bold mb-4 mt-4">
        Why BUIDL3.io
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center sm:px-4 sm:py-8 px-2 py-4 bg-[#060606] text-white shadow-sm rounded-lg border border-gray-700 mb-4"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{feature.header}</h3>
            <p className="text-grey-300">{feature.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
