import Banner from "../Banner/Banner";
import FAQSection from "../FAQSection/FAQSection";
import MediaCoverageSection from "../MediaCoverageSection/MediaCoverageSection";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import NewsNoticesSection from "../NewsNoticesSection/NewsNoticesSection";
import SponsorsSection from "../SponsorSection/SponsorSection";
import TeamSlider from "../TeamSlider/TeamSlider";
import OurCourses from "../OurCourses/OurCourses";
import YouTubeFeaturedSection from "../YouTubeFeaturedSection/YouTubeFeaturedSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <OurCourses></OurCourses>
            <YouTubeFeaturedSection></YouTubeFeaturedSection>
            <TeamSlider></TeamSlider>
            <SponsorsSection></SponsorsSection>
            <MediaCoverageSection></MediaCoverageSection>
            <NewsNoticesSection></NewsNoticesSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;