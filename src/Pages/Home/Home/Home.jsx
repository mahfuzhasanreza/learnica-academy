import Banner from "../Banner/Banner";
import FAQSection from "../FAQSection/FAQSection";
import MediaCoverageSection from "../MediaCoverageSection/MediaCoverageSection";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import NewsNoticesSection from "../NewsNoticesSection/NewsNoticesSection";
import SponsorsSection from "../SponsorSection/SponsorSection";
import TeamSlider from "../TeamSlider/TeamSlider";
import OurCourses from "../OurCourses/OurCourses";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <OurCourses></OurCourses>
            <TeamSlider></TeamSlider>
            <SponsorsSection></SponsorsSection>
            <MediaCoverageSection></MediaCoverageSection>
            <NewsNoticesSection></NewsNoticesSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;