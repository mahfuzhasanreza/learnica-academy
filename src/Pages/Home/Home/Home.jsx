import Banner from "../Banner/Banner";
import FAQSection from "../FAQSection/FAQSection";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import OurCourses from "../OurCourses/OurCourses";
import YouTubeFeaturedSection from "../YouTubeFeaturedSection/YouTubeFeaturedSection";
import Instructor from "../Instructor/Instructor";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <OurCourses></OurCourses>
            <Instructor></Instructor>
            <FAQSection></FAQSection>
            <YouTubeFeaturedSection></YouTubeFeaturedSection>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;