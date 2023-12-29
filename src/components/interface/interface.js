import React, { Component } from 'react';
import image1 from './img/img1.jpg';
import image3 from './img/img3.jpg';
import image4 from './img/img4.jpg';
import image6 from './img/img6.jpg';
import image7 from './img/img7.jpg';
import image8 from './img/img8.jpg';
import image9 from './img/img9.jpg';
import image10 from './img/img10.jpg';
import image11 from './img/img11.jpg';




import './interface.css';
class Interface extends Component {
    render() {
        return (
            <>
                <div className='image1'>
                    <img src={image1} alt=""></img>
                </div>
                <span className='head'>WeRev's Mission</span>
                <div className='image8'>
                    <img src={image8} alt=""></img>
                </div>

                <div className='row'>
                    <div className='col-6'>
                        <div className="card card-animation-left">
                            <img src={image6} className="card-img-top image6" alt="..." />
                            <div className="card-body">
                                <p className="card-text">An electric bicycle that transforms
                                    to transform your life</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-6'>
                        <div className="card card-animation-right ">
                            <img src={image7} className="card-img-top img-fluid image7" alt="..." />
                            <div className="card-body">
                                <p className="card-text">
                                    Portable Electric Bikes
                                    Space-Saving E-Cycles </p>
                            </div>
                        </div>
                    </div>
                </div>

                <span className='head'>Why Electric?</span>
                <div className='row'>
                    <div className='col-6'>
                        <div className='image4'>
                            <img src={image3} alt=""></img>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='image4'>
                            <img src={image4} alt="" ></img>
                        </div>
                    </div>

                </div>
                <p className='head'>Customer Testimonials</p>
                <div className='row'>
                    <div className='col-5 cus1 shadow-lg'>
                        <div class="card-header head1">Aman Shukla, 29</div>
                        <div class="card-body text-secondary">
                            <p class="card-text">I have never been so pleased with a bicycle purchase
                                before my daily come you to work took me less than 10 minutes with no sweat
                                whatsoever. I love the little details that went into this bicycle design and
                                also the companies excellent customer Service I would... Read more</p>
                        </div>
                    </div>
                    <div className='col-5 cus2 shadow-lg'>
                        <div class="card-header head1">John Philips, 26</div>
                        <div class="card-body text-secondary">
                            <p class="card-text">I have never been so pleased with a bicycle purchase
                                before my daily come you to work took me less than 10 minutes with no sweat
                                whatsoever. I love the little details that went into this bicycle design and
                                also the companies excellent customer Service.</p>
                        </div>
                    </div>
                </div>

                <p className='head'>The media is talking about us</p>

                <div className='row'>
                    <div className='col-4'>
                        <div className='image9'>
                            <img src={image9} alt=""></img>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='image10'>
                            <img src={image10} alt=""></img>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='image11'>
                            <img src={image11} alt="" ></img>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='stay'>
                    <p>Stay Updated</p>
                    <p>Sign up for our newsletter to get updates straight to your inbox</p>
                </div>
                <form>
                    <div className='row'>
                        <div className='col-4'></div>
                        <div className='col-4 capsule-container'>
                            <input type='text' className='form-control' placeholder='Enter Email' />
                            <button type='button' className='btn btn-light capsule-btn'>Subscribe</button>
                        </div>
                        <div className='col-4'></div>
                    </div>
                </form>

            </>
        );
    }
}

export default Interface;
