import React from 'react'
import { contact, email } from '@/app/info'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 mb-4">
                        <h4>About Lotus Spa</h4>
                        <p>Your premier destination for relaxation and rejuvenation in Malad, Mumbai. Experience
                            tranquility and wellness at its finest.</p>
                        <div className="social-links-footer mt-3">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-instagram" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            {/* <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact Us</a></li> */}
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <h4>Our Services</h4>
                        <ul>
                            <li><Link href="/best-swedish-massage-center-in-malad-mumbai-lotus-spa">Swedish Massage</Link></li>
                            {/* <li><a href="#">Luxury Facial</a></li>
                            <li><a href="#">Hot Stone Therapy</a></li>
                            <li><a href="#">Detox Body Wrap</a></li>
                            <li><a href="#">Couples Retreat</a></li> */}
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <h4>Contact Info</h4>
                        <ul>
                            <li><i className="fas fa-map-marker-alt" /> Lotus Spa, Malad, Mumbai, Maharashtra
                                400064</li>
                            <li><i className="fas fa-phone" />{contact}</li>
                            <li><i className="fas fa-envelope" /> {email}</li>
                            <li><i className="fas fa-clock" /> Mon–Sun: 9:00 AM – 9:00 PM</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2024 Lotus Spa. All Rights Reserved. Designed with <i className="fas fa-heart text-danger" /> in
                        Mumbai</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer