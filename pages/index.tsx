import Head from "next/head";
import Navbar from "@/components/Modules/Navbar";
import HeroSection from "@/components/Hero";
import StatCounter from "@/components/StatCounter";
import AboutUs from "@/components/AboutUs";
import ContractCards from "@/components/Modules/ContractCards";
import CompactibleChains from "@/components/Modules/CompactibleChains";
import FAQ from "@/components/Modules/FAQ";
import Footer from "@/components/Modules/Footer";

export default function Home () {
  const navItems = [
    { href: "/explore", text: "Explorer" },
    { href: "/blog", text: "Documentation" },
    { href: "/blog", text: "Blog" },
    { href: "/support", text: "Support" },
  ];

  const getStartedButton = {
    text: "Get Started",
    href: "/",
    className: "mt-4",
  };

  const faqItems = [
    {
      question: "What is a no-code smart contract platform?",
      answer: "A no-code smart contract platform is a platform that allows users to create, deploy, and manage smart contracts without the need for coding or programming skills. It provides intuitive tools and interfaces for users to define contract parameters, conditions, and actions visually"
    },
    {
      question: "Can I customize the smart contracts created on the platform?",
      answer: "Yes, the platform allows for customization of smart contracts. Users can define contract parameters such as token supply, token distribution, contract expiry, conditions for triggering actions, and more. This flexibility enables users to tailor the contracts to their specific requirements"
    },
    {
      question: "Which blockchain networks are supported by the platform?",
      answer: "The platform may support various blockchain networks, such as Ethereum, Binance Smart Chain, or others. Users can choose the desired network for deploying their smart contracts based on their requirements."
    },
    {
      question: "How can I get support if I have questions or issues?",
      answer: "The platform typically offers customer support channels, on discord, where users can seek assistance. Additionally, educational resources, tutorials, and documentation may be available to help users understand the platform's features and functionalities."
    },
    {
      question: "Can I contribute to the development of the platform?",
      answer: "Absolutely! The platform is open source, which means anyone can contribute to its development. Whether you are a developer, designer, or have other skills to offer, you can actively participate in improving the platform and adding new features. Visit the platform's GitHub repository to learn more about how you can contribute."
    },
  ];

  return (
    <>
      <Head>
        <title>BUIDL3.io</title>
        <meta name="BUIDL3" content="Depoly Smart Contracts Easier" />
      </Head>
      <Navbar
        logoText="BUIDL3"
        navItems={navItems}
        getStartedButton={getStartedButton}
      />
      <HeroSection />
      <StatCounter />
      <AboutUs />
      <ContractCards />
      <CompactibleChains />
      <FAQ faqItems={faqItems} />
      <Footer />
    </>
  );
}
