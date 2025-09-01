import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="container px-4 2x:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} alt="" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @ Greatstack.dev | All Rights Reserved
      </p>
      <div className="flex gap-2.5">
        <img width={38} src={assets.facebook_icon} alt="Facebook" />
        <img width={38} src={assets.twitter_icon} alt="Twitter" />
        <img width={38} src={assets.instagram_icon} alt="Instagram" />
      </div>
    </div>
  );
};

export default Footer;
