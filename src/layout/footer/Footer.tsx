import { Avatar } from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Bottom from "./Bottom";

const Footer = () => {
  return (
    <>
      <footer className="border border-slate-300 bg-slate-50 p-4 md:px-28 lg:px-40 2xl:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-x-5">
            <div className="flex flex-col items-start">
                <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
                <Link to="/"><p className="py-2 text-sm">Home</p></Link>
                <Link to="/showcase"><p className="py-2 text-sm">Showcase</p></Link>
                <Link to="/offer"><p className="py-2 text-sm">Offer</p></Link>
                <Link to="/product"><p className="py-2 text-sm">Product</p></Link>
                <Link to="/job"><p className="py-2 text-sm">Job</p></Link>
            </div>
            <div className="flex flex-col items-start">
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <p className="py-2 text-sm">Don’t hesitate to contact and feel free <br></br> to reach us !</p>
                <p className="py-2 text-sm flex items-center gap-2"><CiLocationOn/>Hattisar, Kathmandu, Nepal</p>
                <p className="py-2 text-sm flex items-center gap-2"><CiPhone/>071123456, 9812345678, 9812345678</p>
                <p className="py-2 text-sm flex items-center gap-2"><CiMail/>info@example.com.np</p>
            </div>
            <div className="flex items-start flex-col">
                <h2 className="text-lg font-semibold mb-4">Social Media</h2>
                <div className="flex gap-4">
                <Avatar sx={{bgcolor:"white",height:"25px", width:"25px"}}><FaFacebookF size={18} color="black"/></Avatar>
                <Avatar sx={{bgcolor:"white",height:"25px", width:"25px"}}><RiInstagramFill size={18} color="black"/></Avatar>
                <Avatar sx={{bgcolor:"white",height:"25px", width:"25px"}}><FaTwitter size={18} color="black"/></Avatar>
                <Avatar sx={{bgcolor:"white",height:"25px", width:"25px"}}><FaYoutube size={18} color="black"/></Avatar>
                </div>
            </div>
        </div>
      </footer>
      <Bottom/>
    </>
  );
};

export default Footer;
