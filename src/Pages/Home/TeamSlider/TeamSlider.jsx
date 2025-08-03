// components/TeamSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import mahfuz from "../../../assets/team/mahfuz.jpg";

const teamMembers = [
    {
        name: "Mahfuz Hasan Reza",
        designation: "Head of Academic & Growth",
        image: mahfuz,
        bio: "Passionate about educational innovation and strategic growth",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Sadia Rahman",
        designation: "Lead Software Engineer",
        image: mahfuz,
        bio: "Full-stack developer with expertise in modern web technologies",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Rafiul Islam",
        designation: "Electronics Lead",
        image: mahfuz,
        bio: "Hardware enthusiast specializing in IoT and embedded systems",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Shimul Chowdhury",
        designation: "Aerospace Engineer",
        image: mahfuz,
        bio: "Aerospace engineering expert with focus on UAV systems",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Fahim Reza",
        designation: "Communication Manager",
        image: mahfuz,
        bio: "Strategic communication expert building brand narratives",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Tanvir Alam",
        designation: "UI/UX Designer",
        image: mahfuz,
        bio: "Creative designer crafting intuitive user experiences",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
];

export default function TeamSlider() {
    return (
        <div className="py-20 bg-gray-300 relative overflow-hidden">
            <div className="relative z-10 ">
                <SectionTitle title="Meet Our Team" subtitle="Behind every success" center />
                
                <div className="w-full max-w-7xl mx-auto px-4 mt-16">
                    <Swiper
                        modules={[Autoplay, Pagination, EffectCoverflow]}
                        autoplay={{ 
                            delay: 4000, 
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true 
                        }}
                        loop={true}
                        pagination={{ 
                            clickable: true,
                            dynamicBullets: true
                        }}
                        spaceBetween={30}
                        slidesPerView={4}
                        centeredSlides={false}
                        grabCursor={true}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 20 },
                            640: { slidesPerView: 2, spaceBetween: 25 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                            1280: { slidesPerView: 4, spaceBetween: 30 },
                        }}
                        className="team-swiper"
                    >
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="group relative">
                                    <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl transition-all duration-500 ease-out transform hover:scale-105 border border-gray-200/50 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-indigo-900 group-hover:via-purple-900 group-hover:to-blue-900 group-hover:text-white">
                                        {/* Slide-in Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0 rounded-3xl"></div>
                                        
                                        {/* Corner Accent */}
                                        <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-b-[50px] border-b-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 rounded-tr-3xl"></div>
                                        
                                        <div className="relative z-10">
                                            {/* Profile Image with Glowing Effect */}
                                            <div className="relative mb-6 mx-auto w-32 h-32">
                                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg"></div>
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="relative w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white transition-all duration-500 group-hover:scale-110 group-hover:border-indigo-300 group-hover:shadow-xl"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="text-center space-y-3">
                                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-all duration-500 group-hover:scale-105">
                                                    {member.name}
                                                </h3>
                                                
                                                <div className="relative">
                                                    <p className="text-sm font-medium text-indigo-600 group-hover:text-indigo-200 transition-all duration-500 group-hover:scale-105">
                                                        {member.designation}
                                                    </p>
                                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-white transition-all duration-500 rounded-full"></div>
                                                </div>
                                                
                                                <p className="text-sm text-gray-600 font-medium leading-relaxed group-hover:text-gray-200 transition-all duration-500">
                                                    {member.bio}
                                                </p>
                                            </div>

                                            {/* Social Links */}
                                            <div className="flex justify-center space-x-3 mt-6 transition-all duration-500 group-hover:scale-110">
                                                <a href={member.social.linkedin} className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 hover:shadow-lg">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                                                    </svg>
                                                </a>
                                                <a href={member.social.twitter} className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 hover:shadow-lg">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                                                    </svg>
                                                </a>
                                                <a href={member.social.github} className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 hover:shadow-lg">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx>{`
                .team-swiper .swiper-pagination {
                    bottom: -50px !important;
                }
                
                .team-swiper .swiper-pagination-bullet {
                    width: 12px !important;
                    height: 12px !important;
                    margin: 0 6px !important;
                    border-radius: 50% !important;
                    background: linear-gradient(45deg, #3b82f6, #8b5cf6) !important;
                    opacity: 0.5 !important;
                    transition: all 0.3s ease !important;
                }
                
                .team-swiper .swiper-pagination-bullet-active {
                    opacity: 1 !important;
                    transform: scale(1.25) !important;
                }
                
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                
                .border-3 {
                    border-width: 3px;
                }
            `}</style>
        </div>
    );
}