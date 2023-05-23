import React from "react";
import Link from "next/link";
import { FaTwitter, FaDiscord, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto px-4 py-8 flex flex-col items-center text-white">
      <div className="lg:w-5/6 mx-auto grid lg:grid-cols-12 py-16">
        {/* Logo */}
        <div className="text-3xl lg:col-span-4">
          <h2 className="cursor-pointer">
            BUIDL3
          </h2>
        </div>

        <div className="lg:col-span-8 grid grid-cols-12">
          {/* Contact */}
          <div className="col-span-12 lg:col-span-6">
            <div className="mt-10 mb-3 text-xl text-[#754ac3] font-semibold lg:hidden">
              Contact
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex space-x-2 items-center">
                <div>
                  <FaPhone size={24} />
                </div>
                <div>+234 708 361 3083</div>
              </div>
              <div className="flex space-x-2 items-center">
                <div>
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <a href="mailto:buidl3@gmail.com">buidl3@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Site Links */}
          <div className="col-span-6 lg:col-span-3 lg:justify-self-end">
            <div className="mt-10 mb-3 text-xl text-[#754ac3] font-semibold lg:hidden">
              Menu
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <Link href="/">Home</Link>
              </div>
              <div>
                <Link href="/#about-us">About Us</Link>
              </div>
              <div>
                <Link href="/#features">Features</Link>
              </div>
              <div>
                <Link href="/#faq">FAQs</Link>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="col-span-6 lg:col-span-3 lg:justify-self-end">
            <div className="mt-10 mb-3 text-xl text-[#754ac3] font-semibold lg:hidden">
              Socials
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/quizardHQ"
                >
                  <div className="flex space-x-2 items-center">
                    <div>
                      <FaTwitter size={24} />
                    </div>
                    <div>Twitter</div>
                  </div>
                </a>
              </div>
              <div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/quizardhq/frontend"
                >
                  <div className="flex space-x-2 items-center">
                    <div>
                      <FaGithub size={24} />
                    </div>
                    <div>GitHub</div>
                  </div>
                </a>
              </div>
              <div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://join.slack.com/t/quiardhq/shared_invite/zt-1uys4uo7k-PNdgNv0bdsk7Ezb52HMhfg"
                >
                  <div className="flex space-x-2 items-center">
                    <div>
                      <FaDiscord size={24} />
                    </div>
                    <div>Discord</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="w-4/5 border border-[#594D6F] mb-5 mx-auto"></div>
        <div>&copy; BUIDL3 2023. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
