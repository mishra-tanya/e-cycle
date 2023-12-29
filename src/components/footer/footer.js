import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 title">
                                <h1>WeRev</h1>
                            </div>
                            <div className="col-md-3">
                                <h4 className='mb-4'>About Us</h4>
                                <a href="/" className='text-light' style={{ textDecoration: 'none' }}>Your About Us content goes here.</a>

                            </div>
                            <div className="col-md-3">
                                <h4 className='mb-4'>Learn</h4>
                                <a href="/" className='text-light' style={{ textDecoration: 'none' }}>Your contact information.</a>

                            </div>
                            <div className="col-md-3">
                                <h4 className='mb-4'>Follow Us</h4>
                                <a href="/" className='text-light' style={{ textDecoration: 'none' }}>Instagram</a>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-3">

                            </div>
                            <div className="col-md-3">

                            </div>
                            <div className="col-md-3">

                            </div>
                            <div className="col-md-3">
                                <a href="/" className='text-light' style={{ textDecoration: 'none' }}>Twitter</a>
                            </div>
                        </div>

                        <div className='row'>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3">
                            <a href="/" className='text-light' style={{ textDecoration: 'none' }}>Facebook</a>
                        </div>
                        </div>
                      
                    </div>

                    <div className="footer-bottom">
                        <div className="container">
                            <p>&copy; 2023 WeRev Bike. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
