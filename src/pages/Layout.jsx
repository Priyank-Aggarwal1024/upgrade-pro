import React from 'react';
import './layout.css'; // Assuming layout.css contains styles for Layout component
import Navbar from './home/Navbar';
import Faq from './home/Faq';
import Footer from './home/Footer';
import Hero from './home/Hero';
import Refund from './home/Refund';
import OtherCourses from './home/OtherCourses';
import Highlights from './home/Highlights';
import DoubtSolve from './home/DoubtSolve';
import UpgradeCourses from './home/UpgradeCourses';
import VideoCarousel from './home/VideoCarousel';

function Layout(props) {


    return (
        <>
            <div className="abcd-layout">
                <Navbar />
                <Hero />
                <UpgradeCourses />
                <Refund />
                <Highlights />
                <DoubtSolve />
                <OtherCourses />
                <VideoCarousel />
                <Faq />
                <Footer />
            </div>

            {/* Example of conditional bottom layout based on window width */}
            <div className="abcd-layout-bottom">
                <div className="abcd-hm-left">
                    <span className="">45% </span>
                    <span className="">OFF</span>
                </div>
                <div className="abcd-hm-middle">
                    <p className="abcd-fw-700 abcd-layout-price-bottom abcd-text-pink abcd-text-center">
                        <span className="abcd-layout-bottom-small">₹1,499</span>
                    </p>
                    <p className="abcd-fw-700 abcd-f-16 abcd-text-pink abcd-text-center" style={{ color: "#263238" }}>Total Price </p>
                </div>
                <div className="abcd-hm-right">
                    <div className="abcd-proceed abcd-layout-proceed abcd-text-white">Upgrade Now</div>
                </div>
            </div>
        </>
    );
}

export default Layout;
