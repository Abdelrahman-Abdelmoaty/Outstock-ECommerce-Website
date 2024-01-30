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
    <div className="mt-auto bg-[#232323] text-sm text-[#6c6c6c]">
      <Wrapper>
        <div className="grid grid-cols-2 gap-4 pb-16 pt-40 md:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-y-4">
            <a href="#">
              <div className="mb-6">
                <img src={logo.src} alt="" />
              </div>
            </a>
            <p>
              Outstock is a premium Templates theme with advanced admin module.
              It's extremely customizable, easy to use and fully responsive and
              retina ready.
            </p>
            <ul>
              <li>
                <div className="my-2 flex items-center">
                  <LocationOnIcon className="mr-1 h-6 w-6" />
                  <p>1234 Heaven Stress, Beverly Hill.</p>
                </div>
              </li>
              <li>
                <div className="my-2 flex items-center">
                  <EmailIcon className="mr-2 h-5 w-5" />
                  <p>Email: info@thebuesky.com</p>
                </div>
              </li>
              <li>
                <div className="my-2 flex items-center">
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  <p>Telephone: +01 234 567 89</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="mb-5 text-base text-white">Information</p>
            <ul>
              <li className="my-3">
                <a href="#">About Us</a>
              </li>
              <li className="my-3">
                <a href="#">Careers</a>
              </li>
              <li className="my-3">
                <a href="#">Delivery Inforamtion</a>
              </li>
              <li className="my-3">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="my-3">
                <a href="#">Terms & Condition</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-5 text-base text-white">Customer Service</p>
            <ul>
              <li className="my-3">
                <a
                  href="#"
                  className="ease-500 hover:text-[var(--secondary-color)]"
                >
                  Shipping Policy
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#"
                  className="ease-500 hover:text-[var(--secondary-color)]"
                >
                  Help & Contact Us
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#"
                  className="ease-500 hover:text-[var(--secondary-color)]"
                >
                  Returns & Refunds
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#"
                  className="ease-500 hover:text-[var(--secondary-color)]"
                >
                  Online Stores
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#"
                  className="ease-500 hover:text-[var(--secondary-color)]"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-[rgba(255,255,255,.1)]" />
        <div className="mx-auto flex w-[65%] flex-wrap items-center justify-between gap-5 py-5">
          <p className="min-w-fit flex-[3] text-center">
            Copyright © 2021 Blueskytechco. All rights reserved
          </p>
          <ul className="flex min-w-[200px] flex-1 items-center justify-center gap-5">
            <li>
              <a href="#">
                <TwitterIcon className="ease-500 h-5 w-5 hover:text-[var(--secondary-color)]" />
              </a>
            </li>
            <li>
              <a href="#">
                <FacebookOutlinedIcon className="ease-500 h-5 w-5 hover:text-[var(--secondary-color)]" />
              </a>
            </li>
            <li>
              <a href="#">
                <GoogleIcon className="ease-500 h-5 w-5 hover:text-[var(--secondary-color)]" />
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedInIcon className="ease-500 h-5 w-5 hover:text-[var(--secondary-color)]" />
              </a>
            </li>
            <li>
              <a href="#">
                <RssFeedOutlinedIcon className="ease-500 h-5 w-5 hover:text-[var(--secondary-color)]" />
              </a>
            </li>
          </ul>
        </div>
      </Wrapper>
    </div>
  );
}
