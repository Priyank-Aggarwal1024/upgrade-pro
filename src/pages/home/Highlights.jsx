import React from 'react';
import '../../styles/highlight.css'
import I1 from '../../assets/high1.png'
import I2 from '../../assets/high2.png'
import I3 from '../../assets/high3.png'
import I4 from '../../assets/high4.png'
import I5 from '../../assets/high5.png'
import I6 from '../../assets/high6.png'
function Highlights(props) {
    return (
        <section className="section section-highlight abcd-section ">
            <h2 className="abcd-heading abcd-f-48 abcd-fw-500 abcd-text-black abcd-text-center">
                Key <span className="abcd-fw-700 abcd-text-pink"> Highlights</span>
            </h2>
            <div className="abcd-cards">
                <div className="abcd-card">
                    <div className="abcd-card-inner">
                        <div className="abcd-card-icon">
                            <img src={I1} alt="Placement
                        Assistance" />
                        </div>
                        <p className="abcd-card-text">Placement
                            Assistance</p>
                    </div>
                </div>
                <div className="abcd-card">
                    <div className="abcd-card-inner">
                        <div className="abcd-card-icon">
                            <img src={I2} alt="Guranteed Certification" />
                        </div>
                        <p className="abcd-card-text">Guranteed Certification</p>
                    </div>
                </div>
                <div className="abcd-card">
                    <div className="abcd-card-inner">
                        <div className="abcd-card-icon">
                            <img src={I3} alt="Guranteed Internship" />
                        </div>
                        <p className="abcd-card-text">Guranteed Internship</p>
                    </div>
                </div>
                <div className="abcd-card">
                    <div className="abcd-card-inner">
                        <div className="abcd-card-icon">
                            <img src={I4} alt="Personal Mentor" />
                        </div>
                        <p className="abcd-card-text">Personal Mentor</p>
                    </div>
                </div>
                <div className="abcd-card">
                    <div className="abcd-card-inner">
                        <div className="abcd-card-icon">
                            <img src={I5} alt="Industry Standard Projects" />
                        </div>
                        <p className="abcd-card-text">Industry Standard Projects</p>
                    </div>
                </div>
                <div className="abcd-card">
                    <div className="abcd-card-inner">
                        <div className="abcd-card-icon">
                            <img src={I6} alt="24x7 Support Over Chat" />
                        </div>
                        <p className="abcd-card-text">24x7 Support
                            Over Chat</p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Highlights;