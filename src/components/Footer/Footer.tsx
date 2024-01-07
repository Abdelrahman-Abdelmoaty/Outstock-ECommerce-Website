"use client";
import logo from "@public/assets/images/logo-footer.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RssFeedOutlinedIcon from "@mui/icons-material/RssFeedOutlined";
import Wrapper from "../Wrapper/Wrapper";

export default function Footer() {
  return (
    <div className="bg-[#232323] text-[#6c6c6c] text-sm mt-auto">
      <Wrapper>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-40 pb-16">
          <div className="col-span-2 flex flex-col gap-y-4">
            <a href="/">
              <div className="mb-6">
                <img src={logo.src} alt="" />
              </div>
            </a>
            <p>Outstock is a premium Templates theme with advanced admin module. It's extremely customizable, easy to use and fully responsive and retina ready.</p>
            <ul>
              <li>
                <div className="flex items-center my-2">
                  <LocationOnIcon className="w-6 h-6 mr-1" />
                  <p>1234 Heaven Stress, Beverly Hill.</p>
                </div>
              </li>
              <li>
                <div className="flex items-center my-2">
                  <EmailIcon className="w-5 h-5 mr-2" />
                  <p>Email: info@thebuesky.com</p>
                </div>
              </li>
              <li>
                <div className="flex items-center my-2">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  <p>Telephone: +01 234 567 89</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-base mb-5 text-white">Information</p>
            <ul>
              <li className="my-3">
                <a href="/">About Us</a>
              </li>
              <li className="my-3">
                <a href="/">Careers</a>
              </li>
              <li className="my-3">
                <a href="/">Delivery Inforamtion</a>
              </li>
              <li className="my-3">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="my-3">
                <a href="/">Terms & Condition</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-base mb-5 text-white">Customer Service</p>
            <ul>
              <li className="my-3">
                <a href="/" className="hover:text-[var(--secondary-color)] ease-500">
                  Shipping Policy
                </a>
              </li>
              <li className="my-3">
                <a href="/" className="hover:text-[var(--secondary-color)] ease-500">
                  Help & Contact Us
                </a>
              </li>
              <li className="my-3">
                <a href="/" className="hover:text-[var(--secondary-color)] ease-500">
                  Returns & Refunds
                </a>
              </li>
              <li className="my-3">
                <a href="/" className="hover:text-[var(--secondary-color)] ease-500">
                  Online Stores
                </a>
              </li>
              <li className="my-3">
                <a href="/" className="hover:text-[var(--secondary-color)] ease-500">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-[rgba(255,255,255,.1)]" />
        <div className="flex items-center justify-between py-5 w-[65%] mx-auto flex-wrap">
          <p className="flex-[3] min-w-fit mb-5">Copyright © 2021 Blueskytechco. All rights reserved</p>
          <ul className="flex-1 flex items-center justify-between min-w-[200px]">
            <li>
              <a href="/">
                <TwitterIcon className="w-5 h-5 hover:text-[var(--secondary-color)] ease-500" />
              </a>
            </li>
            <li>
              <a href="/">
                <FacebookOutlinedIcon className="w-5 h-5 hover:text-[var(--secondary-color)] ease-500" />
              </a>
            </li>
            <li>
              <a href="/">
                <GoogleIcon className="w-5 h-5 hover:text-[var(--secondary-color)] ease-500" />
              </a>
            </li>
            <li>
              <a href="/">
                <LinkedInIcon className="w-5 h-5 hover:text-[var(--secondary-color)] ease-500" />
              </a>
            </li>
            <li>
              <a href="/">
                <RssFeedOutlinedIcon className="w-5 h-5 hover:text-[var(--secondary-color)] ease-500" />
              </a>
            </li>
          </ul>
        </div>
      </Wrapper>
    </div>
  );
}
