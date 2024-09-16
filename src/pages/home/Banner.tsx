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
        <div className="h-[500px] w-full flex gap-10 px-24 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600">
            <div className="flex flex-col justify-center gap-4 h-full w-1/2">
            <h1 className="text-5xl font-bold text-white tracking-wide">Lorem Ipsum is simply dummy</h1>
            <p className="text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ColorButton variant="contained" className="w-fit text-white" endIcon={<IoCartOutline/>}>Shop Now</ColorButton>
            </div>
            <div className="w-1/2 flex justify-center items-center">
            <img src={BannerModel} alt="Let's go" className="h-full"/>
            </div>
        </div> 
    </>
  )
}

export default Banner
