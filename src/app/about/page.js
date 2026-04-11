import React from 'react'
import Navigation from '@/app/components/Navigation'
const page = () => {
    return (
        <>
            <Navigation />
            <section className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a href="index.html" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </section>
            <section className="section-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Story</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4">
                            <div className="story-content">
                                <p>Blue Lotus was founded in 2015 with a simple mission: to provide a sanctuary of peace
                                    and rejuvenation in the bustling city of Mumbai. What began as a small wellness center with
                                    just three treatment rooms has grown into one of Malad West's premier destinations for
                                    relaxation and self-care.</p>
                                <p>Our founder, Maya Patel, envisioned a space where people could escape the stresses of daily
                                    life and reconnect with their inner peace. Drawing inspiration from ancient wellness
                                    traditions and modern therapeutic techniques, she created a holistic approach to wellness
                                    that addresses the needs of the mind, body, and spirit.</p>
                                <p>Today, Blue Lotus spans over 5,000 square feet, featuring 12 treatment rooms, a
                                    relaxation lounge, steam rooms, and a team of highly skilled therapists dedicated to
                                    providing exceptional experiences for every client.</p>
                                <p>Despite our growth, we remain committed to our founding principles of personalized care,
                                    attention to detail, and creating an atmosphere of tranquility that transports you far from
                                    the city's hustle and bustle.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="story-image">
                                <img src="https://picsum.photos/seed/spa-interior/600/500.jpg" alt="Blue Lotus Interior" className="img-fluid rounded-3 shadow" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="section-title">
                        <h2>Meet Our Team</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="team-member">
                                <img src="https://picsum.photos/seed/maya-patel/400/400.jpg" alt="Maya Patel" />
                                <h4>Maya Patel</h4>
                                <p>Founder &amp; Director</p>
                                <p>With over 15 years of experience in wellness and spa management, Maya is the visionary behind
                                    Blue Lotus.</p>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                                    <a href="#"><i className="fab fa-instagram" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="team-member">
                                <img src="https://picsum.photos/seed/rahul-sharma/400/400.jpg" alt="Rahul Sharma" />
                                <h4>Rahul Sharma</h4>
                                <p>Head Therapist</p>
                                <p>A certified massage therapist with expertise in various modalities including Swedish, deep
                                    tissue, and sports massage.</p>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                                    <a href="#"><i className="fab fa-instagram" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="team-member">
                                <img src="https://picsum.photos/seed/priya-nair/400/400.jpg" alt="Priya Nair" />
                                <h4>Priya Nair</h4>
                                <p>Senior Esthetician</p>
                                <p>Specializing in advanced facial treatments and skincare solutions with over 10 years of
                                    experience.</p>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                                    <a href="#"><i className="fab fa-instagram" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="team-member">
                                <img src="https://picsum.photos/seed/arjun-verma/400/400.jpg" alt="Arjun Verma" />
                                <h4>Arjun Verma</h4>
                                <p>Wellness Consultant</p>
                                <p>A yoga and meditation instructor who helps clients achieve holistic wellness through
                                    mind-body practices.</p>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                                    <a href="#"><i className="fab fa-instagram" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Philosophy</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="philosophy-card">
                                <i className="fas fa-spa" />
                                <h3>Holistic Approach</h3>
                                <p>We believe in treating the whole person—mind, body, and spirit. Our treatments are designed
                                    to create balance and harmony across all aspects of your being.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="philosophy-card">
                                <i className="fas fa-leaf" />
                                <h3>Natural Ingredients</h3>
                                <p>We use only the finest natural and organic products in our treatments, ensuring they are
                                    gentle on your skin and the environment.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="philosophy-card">
                                <i className="fas fa-user-friends" />
                                <h3>Personalized Care</h3>
                                <p>Every client is unique, and we tailor our treatments to address your specific needs and
                                    preferences for a truly personalized experience.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="philosophy-card">
                                <i className="fas fa-heart" />
                                <h3>Passion &amp; Excellence</h3>
                                <p>Our team is passionate about wellness and committed to excellence in every treatment,
                                    ensuring you receive the highest quality care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="section-title">
                        <h2>Awards &amp; Recognition</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="award-card">
                                <i className="fas fa-trophy" />
                                <h3>Best Spa in Mumbai</h3>
                                <p>Mumbai Wellness Awards 2022</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="award-card">
                                <i className="fas fa-medal" />
                                <h3>Excellence in Service</h3>
                                <p>India Spa &amp; Wellness Awards 2021</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="award-card">
                                <i className="fas fa-award" />
                                <h3>Customer Choice Award</h3>
                                <p>Times of India Lifestyle 2020</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="award-card">
                                <i className="fas fa-star" />
                                <h3>5-Star Rating</h3>
                                <p>Traveler's Choice 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Gallery</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="gallery-item">
                                <img src="https://picsum.photos/seed/spa-reception/400/300.jpg" alt="Spa Reception" />
                                <div className="gallery-overlay">
                                    <i className="fas fa-search-plus" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="gallery-item">
                                <img src="https://picsum.photos/seed/treatment-room/400/300.jpg" alt="Treatment Room" />
                                <div className="gallery-overlay">
                                    <i className="fas fa-search-plus" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="gallery-item">
                                <img src="https://picsum.photos/seed/relaxation-lounge/400/300.jpg" alt="Relaxation Lounge" />
                                <div className="gallery-overlay">
                                    <i className="fas fa-search-plus" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="gallery-item">
                                <img src="https://picsum.photos/seed/steam-room/400/300.jpg" alt="Steam Room" />
                                <div className="gallery-overlay">
                                    <i className="fas fa-search-plus" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="gallery-item">
                                <img src="https://picsum.photos/seed/couples-suite/400/300.jpg" alt="Couples Suite" />
                                <div className="gallery-overlay">
                                    <i className="fas fa-search-plus" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="gallery-item">
                                <img src="https://picsum.photos/seed/spa-lobby/400/300.jpg" alt="Spa Lobby" />
                                <div className="gallery-overlay">
                                    <i className="fas fa-search-plus" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4">
                            <h4>About Blue Lotus</h4>
                            <p>Your premier destination for relaxation and rejuvenation in Malad West, Mumbai. Experience
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
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <h4>Our Services</h4>
                            <ul>
                                <li><a href="services.html">Massages</a></li>
                                <li><a href="services.html">Facials</a></li>
                                <li><a href="services.html">Body Treatments</a></li>
                                <li><a href="services.html">Wellness Packages</a></li>
                                <li><a href="services.html">Couples Treatments</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <h4>Contact Info</h4>
                            <ul>
                                <li><i className="fas fa-map-marker-alt" /> Blue Lotus, Malad West, Mumbai, Maharashtra
                                    400064</li>
                                <li><i className="fas fa-phone" /> +91 98765 43210</li>
                                <li><i className="fas fa-envelope" /> info@skywellnessspa.com</li>
                                <li><i className="fas fa-clock" /> Mon-Sun: 9:00 AM - 9:00 PM</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© 2023 Blue Lotus. All Rights Reserved. Designed with <i className="fas fa-heart text-danger" /> in Mumbai</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default page