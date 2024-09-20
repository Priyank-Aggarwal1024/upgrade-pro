import React from 'react'
import '../../styles/DoubtSolve.css'
import Chat from '../../assets/Chat.png'
import Read from '../../assets/Read.png'
import Doubt from '../../assets/doubtSolve.png'

function DoubtSolve() {

    return (
        <>
            <section className="abcd-section ds-abcd-doubt-solve">
                <h2 className="ds-abcd-doubt-solve-heading ds-abcd-fw-400">
                    Instant{" "}<span className="ds-abcd-text-pink ds-abcd-fw-700">Doubt Solving</span>
                </h2>
                <div className="ds-abcd-doubt-main">
                    <div className="ds-abcd-doubt-left">
                        <svg className='ds-abcd-doubt-design' xmlns="http://www.w3.org/2000/svg" width="526" height="249" viewBox="0 0 526 249" fill="none">
                            <g opacity="0.4">
                                <path d="M446.942 668.481C478.099 632.982 500.727 590.612 513.532 543.79C526.338 496.968 529.072 446.611 521.576 395.594C514.081 344.577 496.505 293.9 469.85 246.455C443.195 199.011 407.984 155.728 366.227 119.079C324.47 82.43 276.985 53.1318 226.484 32.8573C175.982 12.5829 123.453 1.72929 71.8948 0.916199C20.3369 0.103113 -29.24 9.34648 -74.005 28.1185C-118.77 46.8906 -157.847 74.8237 -189.004 110.323L128.969 389.402L446.942 668.481Z" fill="url(#paint0_linear_221_163)" fillOpacity="0.3" />
                                <path d="M438.748 661.29C469.102 626.705 491.146 585.427 503.622 539.811C516.098 494.196 518.761 445.136 511.459 395.434C504.157 345.732 487.033 296.361 461.065 250.139C435.097 203.917 400.793 161.75 360.113 126.046C319.432 90.3409 273.171 61.7977 223.971 42.0457C174.77 22.2937 123.595 11.7198 73.3655 10.9277C23.1362 10.1355 -25.163 19.1407 -68.7745 37.429C-112.386 55.7173 -150.456 82.9305 -180.81 117.515L128.969 389.402L438.748 661.29Z" fill="url(#paint1_linear_221_163)" fillOpacity="0.3" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_221_163" x1="366.227" y1="119.079" x2="261.605" y2="224.283" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#800080" />
                                    <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_221_163" x1="366.227" y1="119.079" x2="261.605" y2="224.283" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#800080" />
                                    <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="ds-abcd-doubt-card ds-abcd-doubt-card1">
                            <div className="ds-abcd-dc-left">
                                <img src={Chat} alt="Chat Doubt Image" />
                            </div>
                            <div className="ds-abcd-dc-right">
                                <p className="ds-abcd-dc-heading">Doubts Solved in 5-10 min</p>
                                <p className="ds-abcd-dc-text">
                                    Ask your doubts when you want, and get it solved within 5-10 minutes
                                </p>
                            </div>
                        </div>
                        <div className="ds-abcd-doubt-card ds-abcd-doubt-card2">
                            <div className="ds-abcd-dc-left">
                                <img src={Read} alt="Read Doubt Image" />
                            </div>
                            <div className="ds-abcd-dc-right">
                                <p className="ds-abcd-dc-heading">Experience 1 to 1 learning</p>
                                <p className="ds-abcd-dc-text">
                                    With robust Mentor Support, experience seamless learning with personal mentorship
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ds-abcd-doubt-right">
                        <img src={Doubt} alt="Doubt Solve Main Image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DoubtSolve