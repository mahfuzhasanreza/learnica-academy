import Banner from "../Banner/Banner";
import FAQSection from "../FAQSection/FAQSection";
import MediaCoverageSection from "../MediaCoverageSection/MediaCoverageSection";
import MissionVisionSection from "../MissionVisionSection/MissionVisionSection";
import NewsNoticesSection from "../NewsNoticesSection/NewsNoticesSection";
import SponsorsSection from "../SponsorSection/SponsorSection";
import TeamSlider from "../TeamSlider/TeamSlider";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MissionVisionSection></MissionVisionSection>
            <TeamSlider></TeamSlider>
            <SponsorsSection></SponsorsSection>
            <MediaCoverageSection></MediaCoverageSection>
            <NewsNoticesSection></NewsNoticesSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;