import { Divider } from "@mui/material"
import Featured from "./Featured"
import LuckyDrawWinners from "./LuckyDrawWinners"
import PromotionalBanner from "./PromotionalBanner"
import TopFranchise from "./TopFranchise"
import TopMembers from "./TopMembers"
import TopOffers from "./TopOffers"
import TopProduct from "./TopProduct"
import Banner from "./Banner"

const Home = () => {
  return (
    <>
     <Banner/> 
     <Featured/>
     <TopOffers/>
     <TopProduct/>
     <PromotionalBanner/>
     <TopFranchise/>
     <TopMembers/>
     <Divider/>
     <LuckyDrawWinners/>
     {/* <PromotionalBanner/> */}
    </>
  )
}

export default Home
