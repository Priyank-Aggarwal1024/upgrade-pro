import React, { useState } from 'react';
import '../../styles/videoreview.css'
import PrevArrow from '../../components/reusable/PrevArrow';
import NextArrow from '../../components/reusable/NextArrow'

function VideoReview(props) {
    const [carousel, setCarousel] = useState([
        {
            img: "./video1.png",
            name: "Hard Branots",
            profession: "Student"
        },
        {
            img: "./video2.png",
            name: "Hard Branots",
            profession: "Student"
        },
        {
            img: "./video3.png",
            name: "Hard Branots",
            profession: "Student"
        },
        {
            img: "./video4.png",
            name: "Hard Branots",
            profession: "Student"
        },
    ])
    const prevCallback = () => {


        let temp = [carousel[carousel.length - 1], ...carousel];
        temp.pop();
        setCarousel(temp)
    }
    const nextCallback = (idx) => {
        let temp1 = carousel.filter((item, index) => {
            if (index < idx) {
                return true;
            }
            else {
                return false;
            }
        })
        let temp2 = carousel.filter((item, index) => {
            if (index >= idx) {
                return true;
            }
            else {
                return false;
            }
        })
        let temp = [...temp2, ...temp1];
        console.log("Hello")
        setCarousel(temp)
    }
    return (
        <section className="abcd-section abcd-section-videoreview">
            <div className="abcd-video-review-heading">
                <p className="abcd-f-48 abcd-fw-400 abcd-text-black">Video
                    Reviews from</p>
                <p className="abcd-f-48 abcd-fw-700 abcd-text-pink">Our Students!</p>
                <p className="abcd-wood-smoke-950 abcd-fw-400 abcd-review-video-para">Watch and be inspired by our students sharing their success stories through video reviews.</p>
            </div>
            <div className="abcd-video-review-carousel">
                <div className="abcd-video-review-top">
                    {
                        carousel.map((item, idx) => {
                            return (
                                <div className="abcd-video-carousel-card" key={idx} onClick={idx == 0 ? () => { } : () => nextCallback(idx)}>
                                    <img src={item.img} alt="Video Review" />
                                    <div className="abcd-video-review-author">{item.name}</div>
                                    <div className="abcd-video-review-profession">{item.profession}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="abcd-video-review-bottom">
                    <PrevArrow onClick={prevCallback} style={{}} classN="" />
                    <NextArrow onClick={() => nextCallback(1)} style={{}} classN="" />
                    {/* <Next onClick={prevCallback} style={{}} classN="" /> */}
                </div>
            </div>
        </section>
    );
}

export default VideoReview;