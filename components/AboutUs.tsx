import React from "react";
import Image from "next/image";
import FeatureSection from "./Modules/FeatureSection";
import Code from "./assets/icons/code.png";
import Deploy from "./assets/icons/deploy.png";
import Secure from "./assets/icons/secure.png";

const features = [
  {
    icon: <Image src={Code} alt="Code" />,
    header: "No Code Platform",
    paragraph:
      "With our user-friendly platform, even individuals without any coding or technical background can effortlessly create smart contracts.",
  },
  {
    icon: <Image src={Deploy} alt="Deploy" />,
    header: "Fast Deployment",
    paragraph:
      "We simplifies the  process of creating and deploying smart contracts. You can create a smart contract in minutes, not months.",
  },
  {
    icon: <Image src={Secure} alt="secure" />,
    header: "Increased Security",
    paragraph:
      "Achieve project goals faster and more efficiently with our platform. In just minutes, you can accomplish what used to take months, at reduced cost.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <div id="features">
      <FeatureSection features={features} />
    </div>
  );
};

export default AboutUs;
