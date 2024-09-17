import Banner from "./Banner"
import Featured from "./Featured"
import LuckyDrawWinners from "./LuckyDrawWinners"
import PromotionalBanner from "./PromotionalBanner"
import TopFranchise from "./TopFranchise"
import TopMembers from "./TopMembers"
import TopOffers from "./TopOffers"
import TopProduct from "./TopProduct"

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
     <LuckyDrawWinners/>
    </>
  )
}

export default Home
