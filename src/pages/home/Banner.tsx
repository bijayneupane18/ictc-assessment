import { Button, ButtonProps, styled } from "@mui/material"
import { teal } from "@mui/material/colors";
import { IoCartOutline } from "react-icons/io5";
import BannerModel from "../../assets/banner.png"
import { Link } from "react-router-dom";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(teal[600]),
    backgroundColor: teal[600],
    borderRadius: "20px",
    '&:hover': {
      backgroundColor: teal[700],
    },
  }));

  const navbarItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Showcase",
      path: "/showcase",
    },
    {
      name: "Product",
      path: "/product",
    },
    {
      name: "Offer",
      path: "/offer",
    },
    {
      name: "Job",
      path: "/job",
    },
  ];

const Banner = () => {
  return (
    <>
    <div className="relative mb-4 md:mb-16">
        <div className="h-[440px] w-full flex gap-4 px-6 sm:px-10 md:px-14 lg:px-24 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600">
            <div className="flex flex-col justify-center items-center md:items-start gap-4 h-full w-full md:w-2/3">
            <h1 className="text-5xl text-center md:text-left font-bold text-white md:tracking-wide">Lorem Ipsum is simply dummy</h1>
            <p className="text-lg text-white text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ColorButton variant="contained" className="w-fit text-white" endIcon={<IoCartOutline className="animate-bounce"/>}>Shop Now</ColorButton>
            </div>
            <div className="hidden w-1/2 md:flex justify-center items-center">
            <img src={BannerModel} alt="" className="h-full"/>
            </div>
        </div> 
        <div className="hidden absolute -bottom-10 md:flex justify-center w-full items-center">
        <ul className="shadow-xl rounded-2xl h-fit w-fit flex justify-center items-center bg-white">
          {navbarItems.map((data, index)=>
            <li key={index} className="font-bold md:px-10 lg:px-14 py-7 hover:bg-teal-600 rounded-lg"><Link to={data.path}>{data.name}</Link></li>
          )}
          </ul>
        </div>
        </div>
    </>
  )
}

export default Banner