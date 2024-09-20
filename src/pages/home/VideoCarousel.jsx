import React, { useState, useRef, useEffect } from 'react';
import '../../styles/VideoCarousel.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function VideoCarousel({ slug }) {
    const [width, setWidth] = useState(window.innerWidth);
    const settings = {
        className: width < 1296 ? "slider variable-width" : "",
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: width > 1296 ? 4 : 1,
        slidesToScroll: width > 1296 ? 3 : 2,
        variableWidth: width < 1296 ? true : false,
    };
    const [arr, setArr] = useState([
        {
            src: "https://d2omxbf10armxs.cloudfront.net/tdmw/salman.mp4",
            name: "Salman",
            prof: "Student"
        },
        {
            src: "https://d2omxbf10armxs.cloudfront.net/tdmw/Apeksha.mp4",
            name: "Apeksha",
            prof: "Student"
        },
        {
            src: "https://d2omxbf10armxs.cloudfront.net/tdmw/Naveen.mp4",
            name: "Naveen",
            prof: "Student"
        },
        {
            src: "https://d2omxbf10armxs.cloudfront.net/tdmw/mern1.mp4",
            name: "Shadab Ahmed",
            prof: "Student"
        },
        {
            src: "https://d2omxbf10armxs.cloudfront.net/tdmw/mern2.mp4",
            name: "Uttam",
            prof: "Student"
        },
        {
            src: "https://d2omxbf10armxs.cloudfront.net/tdmw/mern3.mp4",
            name: "Ish Aggarwal",
            prof: "Student"
        },
        {
            src: "https://d2omxbf10armxs.cloudfront.net/tdmw/Python.mp4",
            name: "Arsh Pathak",
            prof: "Student"
        },
        {
            src: "https://d2omxbf10armxs.cloudfront.net/tdmw/fmv.mp4",
            name: "Gaurav Chavda",
            prof: "Student"
        },
        {
            src: "https://d2omxbf10armxs.cloudfront.net/tdmw/datascience.mp4",
            name: "Shrinath Padvane",
            prof: "Student"
        },
    ])
    const [play, setPlay] = useState(arr.length);
    useEffect(() => {
        if (slug) {

            if (slug == "mernstack" || slug == "fullstackdevelopment") {
                setArr([...arr.slice(3, arr.length), ...arr.slice(0, 3)]);
            } else if (slug == "datascientist" || slug == "datascience") {
                setArr([...arr.slice(8, 9), arr[6], ...arr.slice(0, 6), arr[7]]);
            } else if (slug == "financialmodelling") {
                setArr([...arr.slice(7, 8), ...arr.slice(0, 7), arr[8]]);
            } else if (slug == "python" || slug == "pythondevelopment") {
                setArr([...arr.slice(6, 7), ...arr.slice(0, 6), ...arr.slice(7)]);
            }

        }
        window.addEventListener("resize", (e) => {
            setWidth(window.innerWidth)
        })
    }, [])
    return (
        <>
            <div className="video-carousel">
                <h2 className="video-carousel-heading">Video Reviews from</h2>
                <h2 className="video-carousel-heading video-carousel-heading-pink">Our Students!</h2>
                <div className="slider-container">
                    <Slider {...settings}>
                        {
                            arr.map((item, idx) => <VideoComp src={item.src} name={item.name} prof={item.prof} play={play} key={idx} idx={idx} setPlay={setPlay} />)
                        }
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default VideoCarousel;

const VideoComp = ({ src, name, prof, play, idx, setPlay }) => {
    return (<>
        <div className="video-carousel-card">
            <div className="video-carousel-video-box">
                <video className={`video-carousel-video `} id={`video-carousel-video-${idx}`} src={src} controls={play == idx} onPause={() => {
                    document.getElementById(`video-carousel-video-${idx}`)?.pause();
                }}></video>
                {
                    play != idx &&
                    <div div className="video-carousel-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none"
                            onClick={() => {
                                if (idx == play) {
                                    document.getElementById(`video-carousel-video-${idx}`)?.pause();
                                } else {
                                    document.getElementById(`video-carousel-video-${play}`)?.pause();
                                    document.getElementById(`video-carousel-video-${idx}`)?.play();
                                    setPlay(idx)
                                }
                            }}
                        >
                            <g clipPath="url(#clip0_517_206)">
                                <path d="M7.77791 43.4903C5.34457 41.1401 3.40366 38.3288 2.06842 35.2205C0.73318 32.1121 0.030358 28.769 0.000961939 25.3862C-0.0284342 22.0033 0.616184 18.6485 1.8972 15.5174C3.17822 12.3863 5.06999 9.54175 7.46212 7.14962C9.85425 4.75749 12.6988 2.86572 15.8299 1.5847C18.961 0.303684 22.3158 -0.340934 25.6987 -0.311538C29.0815 -0.282142 32.4246 0.42068 35.533 1.75592C38.6413 3.09116 41.4526 5.03207 43.8028 7.46541C48.4437 12.2705 51.0116 18.7061 50.9536 25.3862C50.8955 32.0662 48.2161 38.4562 43.4924 43.1799C38.7687 47.9036 32.3787 50.583 25.6987 50.6411C19.0186 50.6991 12.583 48.1312 7.77791 43.4903ZM40.2105 39.898C44.0349 36.0735 46.1835 30.8864 46.1835 25.4778C46.1835 20.0692 44.0349 14.8822 40.2105 11.0577C36.386 7.23325 31.1989 5.08469 25.7903 5.08469C20.3817 5.08469 15.1947 7.23325 11.3702 11.0577C7.54575 14.8822 5.39719 20.0692 5.39719 25.4778C5.39719 30.8864 7.54575 36.0735 11.3702 39.898C15.1947 43.7224 20.3817 45.871 25.7903 45.871C31.1989 45.871 36.386 43.7224 40.2105 39.898ZM18.1472 15.2869L38.529 25.4778L18.1472 35.6688V15.2869Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_517_206">
                                    <rect width="50.9545" height="50.9545" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                }
            </div>
            <div className="video-carousel-name">
                {name}
            </div>
            <div className="video-carousel-profession">{prof}</div>

        </div >
    </>)
}