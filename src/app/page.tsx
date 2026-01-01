import HeroSection from "./sections/HeroSection";
import DealsAndOffers from "./sections/Deals";
import HomeAndOutdoor from "./sections/HomeOutdoor";
import ConsumerElectronics from './sections/ConsumerElectronics'
import QuoteRequestSection from "./sections/QuoteRequestSection";
import RecommendedItems from "./sections/RecommendedItems";
import ExtraServices from "./sections/ExtraServices";
import NewsletterSubscription from "./sections/NewsLetterSubscription";

const LandingPage = () => {
  return (
    <main>
       <HeroSection/>
       <DealsAndOffers/>
       <HomeAndOutdoor/>
       <ConsumerElectronics/>
       <QuoteRequestSection/>
       <RecommendedItems/>
       <ExtraServices/>
       <NewsletterSubscription/>
    </main>
  )
}

export default LandingPage;