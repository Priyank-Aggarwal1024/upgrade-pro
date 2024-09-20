import React from 'react';
import '../../styles/UpgradeCourses.css'
function UpgradeCourses() {
    const cards = [
        {
            no: "01",
            icon: "./u1.svg",
            title: "Python",
            duration: "Duration: 34h 37m",
            purchased: true
        },
        {
            no: "02",
            icon: "./u2.svg",
            title: "App Development",
            duration: "Duration: 34h 37m",
            purchased: false
        },
        {
            no: "03",
            icon: "./u3.svg",
            title: "Ethical Hacking",
            duration: "Duration: 17h 25m",
            purchased: false
        },
        {
            no: "04",
            icon: "./u4.svg",
            title: "Java",
            duration: "Duration: 29h 57m",
            purchased: false
        },
        {
            no: "05",
            icon: "./u5.svg",
            title: "Data Science",
            duration: "Duration: 19h 52m",
            purchased: false
        },
        {
            no: "06",
            icon: "./u6.svg",
            title: "MERN Stack",
            duration: "Duration: 19h 52m",
            purchased: false
        },
    ]
    return (
        <section className="section section-upgradec abcd-section ">
            <h2 className="abcd-heading abcd-f-48 abcd-fw-500 abcd-text-black abcd-text-center">
                <span className="abcd-fw-700 abcd-text-pink"> Upgrade</span> Your Courses
            </h2>
            <div className="abcd-upgc-main">
                {
                    cards.map((item, key) => {
                        return (
                            <div className={`abcd-upgc-main-card ${item.purchased && "purchased"}`} key={key}>
                                <div className="abcd-upgc-mc-top">
                                    <div className="abcd-upgc-mct-top">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <div className="abcd-upgc-mct-bottom">
                                        <div className={`abcd-upgc-mct-b-head ${item.purchased && "purchased"}`}>{item.title}</div>
                                        <div className={`abcd-upgc-mct-b-dur ${item.purchased && "purchased"}`}>
                                            {
                                                item.purchased ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                        <path d="M6.83203 2.42578H18.832V8.42578L14.832 12.4258L18.832 16.4258V22.4258H6.83203V16.4258L10.832 12.4258L6.83203 8.42578V2.42578ZM16.832 16.9258L12.832 12.9258L8.83203 16.9258V20.4258H16.832V16.9258ZM12.832 11.9258L16.832 7.92578V4.42578H8.83203V7.92578L12.832 11.9258ZM10.832 6.42578H14.832V7.17578L12.832 9.17578L10.832 7.17578V6.42578Z" fill="white" />
                                                    </svg> :
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                        <path d="M6.5 2.42578H18.5V8.42578L14.5 12.4258L18.5 16.4258V22.4258H6.5V16.4258L10.5 12.4258L6.5 8.42578V2.42578ZM16.5 16.9258L12.5 12.9258L8.5 16.9258V20.4258H16.5V16.9258ZM12.5 11.9258L16.5 7.92578V4.42578H8.5V7.92578L12.5 11.9258ZM10.5 6.42578H14.5V7.17578L12.5 9.17578L10.5 7.17578V6.42578Z" fill="#800080" />
                                                    </svg>
                                            }
                                            <span>{item.duration}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="abcd-upgc-mc-bottom">
                                    {item.purchased ? <div className="abcd-upgc-purchased">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" viewBox="0 0 22 12" fill="none">
                                            <path d="M1.45703 7.05078L5.20703 10.8008M10.457 4.80078L14.207 1.05078M7.45703 7.05078L11.207 10.8008L20.207 1.05078" stroke="#29BF12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>Already purchased</span>
                                    </div> : <div className="abcd-upgc-npurchased">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                            <g clip-path="url(#clip0_844_2423)">
                                                <path d="M13.4948 5.80078C8.07812 5.80078 3.45229 9.16995 1.57812 13.9258C3.45229 18.6816 8.07812 22.0508 13.4948 22.0508C18.9115 22.0508 23.5373 18.6816 25.4115 13.9258C23.5373 9.16995 18.9115 5.80078 13.4948 5.80078ZM13.4948 19.3424C10.5048 19.3424 8.07812 16.9158 8.07812 13.9258C8.07812 10.9358 10.5048 8.50911 13.4948 8.50911C16.4848 8.50911 18.9115 10.9358 18.9115 13.9258C18.9115 16.9158 16.4848 19.3424 13.4948 19.3424ZM13.4948 10.6758C11.6965 10.6758 10.2448 12.1274 10.2448 13.9258C10.2448 15.7241 11.6965 17.1758 13.4948 17.1758C15.2931 17.1758 16.7448 15.7241 16.7448 13.9258C16.7448 12.1274 15.2931 10.6758 13.4948 10.6758Z" fill="#800080" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_844_2423">
                                                    <rect width="26" height="26" fill="white" transform="translate(0.5 0.925781)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>View Curriculum </span></div>}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="abcd-upgrade-bottomde">
                <div className="abcd-upbt-left">
                    <div className="abc-upbt-pri">
                        ₹1,499
                    </div>
                    <div className="abcd-upbt-dis">₹2,796</div>
                    <div className="abcd-upbt-off">
                        45% OFF
                    </div>
                </div>
                <button className="abcd-hero-button abcd-upbt-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                        <g clip-path="url(#clip0_844_1752)">
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
        </section>
    );
}

export default UpgradeCourses;