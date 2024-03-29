import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div>
            <>

                <footer>
                    <div className="row">
                        <div className="col">
                            <img src="logo.png" className="logo" />
                            <p>this is laboratory management software.</p>
                        </div>
                        <div className="col">
                            <h3>
                                Address{" "}
                                <div className="underline">
                                    <span />
                                </div>
                            </h3>
                            <p>GDB hall of residence</p>
                            <p>NIT Rourkela</p>
                            <p className="email-id">lms@gmail.com</p>
                            <h4>9898989898</h4>
                        </div>
                        <div className="col">
                            <h3>
                                Links{" "}
                                <div className="underline">
                                    <span />
                                </div>
                            </h3>
                            <ul>
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">services</a>
                                </li>
                                <li>
                                    <a href="">About Us</a>
                                </li>
                                <li>
                                    <a href="">Features</a>
                                </li>
                                <li>
                                    <a href="">Contacts</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>
                                Newsletter{" "}
                                <div className="underline">
                                    <span />
                                </div>{" "}
                            </h3>
                            <form>
                                <i className="fa-solid fa-envelope" />
                                <input type="email" placeholder="Enter your email id" required="" />
                                <button type="submit">
                                    <i className="fa-solid fa-arrow-right" />
                                </button>
                            </form>
                            <div className="social-icons">
                                <i className="fa-brands fa-facebook" />
                                <i className="fa-brands fa-twitter" />
                                <i className="fa-brands fa-instagram" />
                                <i className="fa-brands fa-whatsapp" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="copyright">
                        Laboratory Management System © 2024 - All Rights Reserved
                    </p>
                </footer>
            </>
        </div>
    );
}

export default Footer;
