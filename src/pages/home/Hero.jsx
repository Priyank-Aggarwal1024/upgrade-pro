import React from 'react';
import '../../styles/hero.css'
import HeroImg from '../../assets/HeroImg.svg'
function Hero(props) {
    return (
        <section className="abcd-section abcd-hero-section">
            <svg className='abcd-hero-design' xmlns="http://www.w3.org/2000/svg" width="571" height="738" viewBox="0 0 571 738" fill="none">
                <g opacity="0.4">
                    <path d="M904.091 681.616C819.673 715.203 730.31 733.956 641.105 736.804C551.9 739.652 464.599 726.538 384.187 698.212C303.775 669.886 231.827 626.903 172.451 571.716C113.074 516.529 67.4317 450.219 38.1299 376.573C8.82808 302.926 -3.55953 223.386 1.67438 142.492C6.90829 61.5981 29.6612 -19.0644 68.6341 -94.8901C107.607 -170.716 162.036 -240.22 228.815 -299.434C295.593 -358.648 373.413 -406.412 457.831 -440L680.961 120.808L904.091 681.616Z" fill="url(#paint0_linear_181_166)" fillOpacity="0.3" />
                    <path d="M898.341 667.164C816.099 699.886 729.039 718.155 642.133 720.93C555.226 723.704 470.175 710.928 391.836 683.332C313.496 655.736 243.402 613.86 185.555 560.096C127.709 506.331 83.2428 441.73 54.696 369.981C26.1493 298.233 14.0809 220.742 19.18 141.933C24.279 63.1238 46.4456 -15.46 84.4141 -89.3317C122.383 -163.203 175.41 -230.916 240.467 -288.604C305.525 -346.293 381.339 -392.826 463.581 -425.548L680.961 120.808L898.341 667.164Z" fill="url(#paint1_linear_181_166)" fillOpacity="0.3" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_181_166" x1="38.1299" y1="376.573" x2="293.129" y2="249.421" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#800080" />
                        <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_181_166" x1="38.1299" y1="376.573" x2="293.129" y2="249.421" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#800080" />
                        <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="abcd-hero-top">
                <div className="abcd-ht-left">
                    <h1 className="abcd-hero-heading abcd-fw-400 abcd-f-55 abcd-text-black"><span className='abcd-text-pink abcd-fw-700'>Upgrade</span> to pro packs and become more smarter</h1>
                    <p className="abcd-hbp">Upgrade your Course and increase REFUND validity to <span className="abcd-fw-700">2 Year</span></p>
                    <button className="abcd-hero-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                            <g clipPath="url(#clip0_844_1752)">
                                <path d="M11.0018 15.566V6.91733M15.3261 10.3768L11.0018 6.05247L6.67747 10.3768M11.0018 19.8903C16.2558 19.8903 20.5153 15.6308 20.5153 10.3768C20.5153 5.12274 16.2558 0.863281 11.0018 0.863281C5.74774 0.863281 1.48828 5.12274 1.48828 10.3768C1.48828 15.6308 5.74774 19.8903 11.0018 19.8903Z" stroke="white" strokeWidth="1.72973" />
                            </g>
                            <defs>
                                <clipPath id="clip0_844_1752">
                                    <rect width="20.7568" height="20.7568" fill="white" transform="translate(0.621094)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Upgrade to Pro Pack</span>
                    </button>
                </div>
                <div className="abcd-ht-right">
                    <img src={HeroImg} alt="Hero Image" />
                </div>
            </div>
        </section>
    );
}

export default Hero;