import { Button, ButtonProps, styled } from "@mui/material"
import { teal } from "@mui/material/colors";
import { IoCartOutline } from "react-icons/io5";
import BannerModel from "../../assets/banner.png"

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(teal[600]),
    backgroundColor: teal[600],
    borderRadius: "20px",
    '&:hover': {
      backgroundColor: teal[700],
    },
  }));

const Banner = () => {
  return (
    <>
        <div className="h-[500px] w-full flex gap-4 px-6 sm:px-10 md:px-14 lg:px-24 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600">
            <div className="flex flex-col justify-center items-center md:items-start gap-4 h-full w-full md:w-2/3">
            <h1 className="text-5xl text-center md:text-left font-bold text-white md:tracking-wide">Lorem Ipsum is simply dummy</h1>
            <p className="text-lg text-white text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ColorButton variant="contained" className="w-fit text-white" endIcon={<IoCartOutline className="animate-bounce"/>}>Shop Now</ColorButton>
            </div>
            <div className="hidden w-1/2 md:flex justify-center items-center">
            <img src={BannerModel} alt="" className="h-full"/>
            </div>
        </div> 
    </>
  )
}

export default Banner