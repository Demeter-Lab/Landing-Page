import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";

export default function Home() {
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

  return (
    <>
      <Head>
        <title>BUIDL.io</title>
        <meta name="BUIDL" content="Depoly Smart Contracts Easier" />
      </Head>
      <Navbar
        logoText="BUIDL.io"
        navItems={navItems}
        getStartedButton={getStartedButton}
      />
      <HeroSection />
    </>
  );
}
