import { Button, ButtonProps, styled } from "@mui/material";
import BannerModel from "../../assets/react.svg";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";

const ColorButton = styled(Button)<ButtonProps>(() => ({
    backgroundColor: "transparent",
    color:"white",
    marginTop:"10px",
    borderColor:"white",
    borderRadius: "10px",
  }));
  
const PromotionalBanner = () => {
  return (
    <>
    <Link to="" className="my-6">
      <div className="w-full h-64 sm:px-20 py-6 my-6 rounded-2xl flex  bg-gradient-to-r from-sky-800 via-sky-600 to-sky-800">
        <div className="flex flex-col justify-center items-center md:items-start gap-2 h-full w-full md:w-1/2">
          <p className="text-xl text-white text-center md:text-left">
            Best deal online on smart watches
          </p>
          <h1 className="text-5xl uppercase text-center md:text-left font-bold text-white md:tracking-wide">
            smart wearable
          </h1>
          <p className="text-xl text-white text-center md:text-left">
            Upto 80% off
          </p>
          <button className="block md:hidden">
            <Link to="">
          <ColorButton variant="outlined" endIcon={<CiLocationArrow1/>}>Visit</ColorButton>
          </Link>
          </button>
        </div>
        <div className="hidden w-1/2 md:flex justify-center items-center">
          <img src={BannerModel} alt="" className="h-full" />
        </div>
      </div>
      </Link>
    </>
  );
};

export default PromotionalBanner;
