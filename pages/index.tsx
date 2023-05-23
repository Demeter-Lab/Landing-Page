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
      question: "What is the platform all about?",
      answer: "The platform is designed to provide........"
    },
    {
      question: "What is the platform all about?",
      answer: "The platform is designed to provide........"
    },
    {
      question: "What is the platform all about?",
      answer: "The platform is designed to provide........"
    },
    {
      question: "What is the platform all about?",
      answer: "The platform is designed to provide........"
    },
    {
      question: "What is the platform all about?",
      answer: "The platform is designed to provide........"
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
