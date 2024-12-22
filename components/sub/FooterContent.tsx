"use client";
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";

const FooterContent = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
      <div className="w-full flex flex-wrap justify-around">
        {/* Community Section */}
        <div className="min-w-[200px] flex flex-col items-center">
          <h3 className="font-bold text-lg mb-4">Community</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.youtube.com/@jesusa9342"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white"
              >
                <FaYoutube className="text-red-500 mr-2" />
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jar285"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white"
              >
                <RxGithubLogo className="mr-2" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://discordapp.com/users/351827249697128469"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white"
              >
                <RxDiscordLogo className="mr-2" />
                Discord
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="min-w-[200px] flex flex-col items-center">
          <h3 className="font-bold text-lg mb-4">Social Media</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.instagram.com/jesus_rosarioav/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white"
              >
                <RxInstagramLogo className="text-pink-500 mr-2" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.link/3w36c9" // Replace with your whatsapp link
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white"
              >
                <FaWhatsapp className="mr-2 text-green-500" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jesus-adonis-rosario-vargas-371508255"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white"
              >
                <RxLinkedinLogo className="text-blue-500 mr-2" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className="min-w-[200px] flex flex-col items-center">
          <h3 className="font-bold text-lg mb-4">About</h3>
          <ul className="space-y-3">
            <li className="text-gray-400">Thanks for Stopping By!</li>
            <li className="text-gray-400">Feel free to Contact me!</li>
            <li>
              <a
                href="mailto:jar285@njit.edu"
                className="text-gray-400 hover:text-white"
              >
                jar285@njit.edu
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; Jesus Adonis Rosario Vargas Dev 2025 Inc. All rights reserved.
      </div>
    </div>
  );
};

export default FooterContent;
