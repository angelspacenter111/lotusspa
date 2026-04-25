import React from 'react'
import Navigation from '../components/Navigation'
import { name, image_url, base_url, email, contact, address } from '@/app/info'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <Navigation />
            <section className="page-header">
                <div className="container">
                    <h1>Services</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link href="/" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </section>
            <section className="service-tabs section-padding" id="services">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Premium Services</h2>
                        <p className="mt-3">Explore our comprehensive range of treatments designed to nurture your body and soul</p>
                    </div>
                    {/* <ul className="nav nav-tabs justify-content-center mb-5" id="serviceTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="massage-tab" data-bs-toggle="tab" data-bs-target="#massage" type="button">
                                <i className="fas fa-hand-sparkles me-2" />Massage Therapies
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="facial-tab" data-bs-toggle="tab" data-bs-target="#facial" type="button">
                                <i className="fas fa-spa me-2" />Facial Treatments
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="body-tab" data-bs-toggle="tab" data-bs-target="#body" type="button">
                                <i className="fas fa-water me-2" />Body Treatments
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="wellness-tab" data-bs-toggle="tab" data-bs-target="#wellness" type="button">
                                <i className="fas fa-om me-2" />Wellness Packages
                            </button>
                        </li>
                    </ul> */}
                    <div className="tab-content" id="serviceTabContent">
                        <div className="tab-pane fade show active" id="massage" role="tabpanel">
                            <div className="service-grid">
                                <div className="service-card-new">
                                    <div className="service-image" style={{ backgroundImage: 'url("/assets/swedish-massage-in-malad-mumbai-lotus-spa.webp")' }}>
                                        <span className="service-badge">Lotus Spa</span>
                                    </div>
                                    <div className="service-content">
                                        <Link href={"/best-swedish-massage-center-in-malad-mumbai-lotus-spa"}><h3>Swedish Massage</h3></Link>
                                        <p>Gentle, relaxing massage using long strokes to improve circulation and reduce stress.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">2,500</span>
                                            <span className="duration">60 min</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Reduces stress and anxiety</li>
                                            <li><i className="fas fa-check-circle" />Improves blood circulation</li>
                                            <li><i className="fas fa-check-circle" />Relieves muscle tension</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                                <div className="service-card-new" >
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/deep-tissue/400/300.jpg")' }}>
                                    </div>
                                    <div className="service-content">
                                        <h3>Deep Tissue Massage</h3>
                                        <p>Targets deeper muscle layers to relieve chronic pain and muscle tension.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">3,500</span>
                                            <span className="duration">75 min</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Relieves chronic pain</li>
                                            <li><i className="fas fa-check-circle" />Breaks up scar tissue</li>
                                            <li><i className="fas fa-check-circle" />Improves mobility</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                                <div className="service-card-new">
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/hot-stone/400/300.jpg")' }}>
                                        <span className="service-badge">Bestseller</span>
                                    </div>
                                    <div className="service-content">
                                        <h3>Hot Stone Therapy</h3>
                                        <p>Smooth heated stones placed on key points to warm and loosen tight muscles.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">3,000</span>
                                            <span className="duration">60 min</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Deep muscle relaxation</li>
                                            <li><i className="fas fa-check-circle" />Improves circulation</li>
                                            <li><i className="fas fa-check-circle" />Reduces stress</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                                <div className="service-card-new">
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/aromatherapy/400/300.jpg")' }}>
                                    </div>
                                    <div className="service-content">
                                        <h3>Aromatherapy Massage</h3>
                                        <p>Customized massage with essential oils for physical and emotional well-being.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">2,800</span>
                                            <span className="duration">60 min</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Enhances mood</li>
                                            <li><i className="fas fa-check-circle" />Reduces anxiety</li>
                                            <li><i className="fas fa-check-circle" />Improves sleep quality</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                                <div className="service-card-new" >
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/couples/400/300.jpg")' }}>
                                        <span className="service-badge">Romantic</span>
                                    </div>
                                    <div className="service-content">
                                        <h3>Couples Massage</h3>
                                        <p>Share a relaxing experience with your partner in our couple's suite.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">5,500</span>
                                            <span className="duration">60 min</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Shared experience</li>
                                            <li><i className="fas fa-check-circle" />Private suite</li>
                                            <li><i className="fas fa-check-circle" />Quality time together</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                                <div className="service-card-new" >
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/thai/400/300.jpg")' }}>
                                    </div>
                                    <div className="service-content">
                                        <h3>Thai Massage</h3>
                                        <p>Ancient healing system combining acupressure and assisted yoga postures.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">3,200</span>
                                            <span className="duration">75 min</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Increases flexibility</li>
                                            <li><i className="fas fa-check-circle" />Improves energy flow</li>
                                            <li><i className="fas fa-check-circle" />Reduces muscle tension</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="facial" role="tabpanel">
                            <div className="service-grid">
                                <div className="service-card-new" >
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/classic-facial/400/300.jpg")' }}>
                                    </div>
                                    <div className="service-content">
                                        <h3>Classic Facial</h3>
                                        <p>Customized facial treatment for refreshed, glowing complexion.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">2,200</span>
                                            <span className="duration">60 min</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Deep cleansing</li>
                                            <li><i className="fas fa-check-circle" />Exfoliation</li>
                                            <li><i className="fas fa-check-circle" />Hydration</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                                <div className="service-card-new" >
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/anti-aging/400/300.jpg")' }}>
                                        <span className="service-badge">Premium</span>
                                    </div>
                                    <div className="service-content">
                                        <h3>Anti-Aging Facial</h3>
                                        <p>Reduces fine lines and wrinkles with advanced techniques.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">3,500</span>
                                            <span className="duration">75 min</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Collagen boost</li>
                                            <li><i className="fas fa-check-circle" />Firming effect</li>
                                            <li><i className="fas fa-check-circle" />Youthful glow</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                                <div className="service-card-new" >
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/gold-facial/400/300.jpg")' }}>
                                        <span className="service-badge">Luxury</span>
                                        <div className="booking-ribbon">Exclusive</div>
                                    </div>
                                    <div className="service-content">
                                        <h3>Luxury Gold Facial</h3>
                                        <p>Premium treatment with 24K gold for ultimate rejuvenation.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">5,500</span>
                                            <span className="duration">90 min</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Luxury experience</li>
                                            <li><i className="fas fa-check-circle" />Anti-aging benefits</li>
                                            <li><i className="fas fa-check-circle" />Skin rejuvenation</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="body" role="tabpanel">
                            <div className="service-grid">
                                <div className="service-card-new" >
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/detox-wrap/400/300.jpg")' }}>
                                    </div>
                                    <div className="service-content">
                                        <h3>Detox Body Wrap</h3>
                                        <p>Purifying treatment that eliminates toxins and hydrates skin.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">3,000</span>
                                            <span className="duration">75 min</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Detoxification</li>
                                            <li><i className="fas fa-check-circle" />Deep hydration</li>
                                            <li><i className="fas fa-check-circle" />Improved circulation</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                                <div className="service-card-new" >
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/body-polish/400/300.jpg")' }}>
                                    </div>
                                    <div className="service-content">
                                        <h3>Herbal Body Polish</h3>
                                        <p>Exfoliating treatment with natural herbs for smooth, glowing skin.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">2,500</span>
                                            <span className="duration">60 min</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Exfoliation</li>
                                            <li><i className="fas fa-check-circle" />Skin softening</li>
                                            <li><i className="fas fa-check-circle" />Natural ingredients</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                                <div className="service-card-new" >
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/mud-therapy/400/300.jpg")' }}>
                                    </div>
                                    <div className="service-content">
                                        <h3>Mud Therapy</h3>
                                        <p>Therapeutic treatment using mineral-rich mud for detoxification.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">3,200</span>
                                            <span className="duration">75 min</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Mineral absorption</li>
                                            <li><i className="fas fa-check-circle" />Toxin removal</li>
                                            <li><i className="fas fa-check-circle" />Skin toning</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="wellness" role="tabpanel">
                            <div className="service-grid">
                                <div className="service-card-new" >
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/stress-relief/400/300.jpg")' }}>
                                        <span className="service-badge">Popular</span>
                                    </div>
                                    <div className="service-content">
                                        <h3>Stress Relief Package</h3>
                                        <p>Complete relaxation experience to melt away stress.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">5,500</span>
                                            <span className="duration">3 hours</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Swedish massage</li>
                                            <li><i className="fas fa-check-circle" />Aromatherapy facial</li>
                                            <li><i className="fas fa-check-circle" />Steam room access</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                                <div className="service-card-new" >
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/rejuvenation/400/300.jpg")' }}>
                                    </div>
                                    <div className="service-content">
                                        <h3>Rejuvenation Package</h3>
                                        <p>Complete revitalization for body and mind.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">7,500</span>
                                            <span className="duration">4 hours</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Deep tissue massage</li>
                                            <li><i className="fas fa-check-circle" />Anti-aging facial</li>
                                            <li><i className="fas fa-check-circle" />Healthy spa lunch</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                                <div className="service-card-new" >
                                    <div className="service-image" style={{ backgroundImage: 'url("https://picsum.photos/seed/bridal/400/300.jpg")' }}>
                                        <span className="service-badge">Special</span>
                                        <div className="booking-ribbon">Bridal</div>
                                    </div>
                                    <div className="service-content">
                                        <h3>Bridal Package</h3>
                                        <p>Special treatments for your perfect day.</p>
                                        <div className="service-price-new">
                                            <span className="currency">₹</span>
                                            <span className="amount">10,000</span>
                                            <span className="duration">5 hours</span>
                                        </div>
                                        <ul className="benefits-list">
                                            <li><i className="fas fa-check-circle" />Luxury facial</li>
                                            <li><i className="fas fa-check-circle" />Full body massage</li>
                                            <li><i className="fas fa-check-circle" />Manicure &amp; pedicure</li>
                                        </ul>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Your Journey to Wellness</h2>
                        <p className="mt-3">Experience our seamless process from booking to bliss</p>
                    </div>
                    <div className="process-flow">
                        <div className="process-step">
                            <div className="step-icon">
                                <i className="fas fa-search" />
                            </div>
                            <h5>Discover</h5>
                            <p>Browse our services or use our finder to select your perfect treatment</p>
                        </div>
                        <div className="process-step">
                            <div className="step-icon">
                                <i className="fas fa-calendar-check" />
                            </div>
                            <h5>Book</h5>
                            <p>Schedule your appointment online or call our spa concierge</p>
                        </div>
                        <div className="process-step">
                            <div className="step-icon">
                                <i className="fas fa-spa" />
                            </div>
                            <h5>Experience</h5>
                            <p>Arrive, relax, and enjoy your personalized treatment</p>
                        </div>
                        <div className="process-step">
                            <div className="step-icon">
                                <i className="fas fa-heart" />
                            </div>
                            <h5>Rejuvenate</h5>
                            <p>Leave feeling refreshed, renewed, and ready to return</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="testimonial-slider">
                    <div className="testimonial-item">
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <p>"The Deep Tissue Massage at Blue Lotus Spa completely transformed my chronic back pain. The therapist was incredibly knowledgeable and tailored the treatment perfectly to my needs."</p>
                        <div className="client-info">
                            <img src="https://picsum.photos/seed/client1/100/100.jpg" alt="Client" />
                            <div>
                                <h5>Rajesh Kumar</h5>
                                <p>Regular Client</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding" style={{ background: 'var(--gradient-primary)' }}>
                <div className="container text-center">
                    <h2 className="text-white mb-4">Ready to Begin Your Wellness Journey?</h2>
                    <p className="text-white mb-5">Book your appointment today and experience the transformative power of our spa treatments</p>
                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-light btn-lg" >
                            <i className="fas fa-calendar-plus me-2" />Book Appointment
                        </button>
                        <a href="tel:+919876543210" className="btn btn-outline-light btn-lg">
                            <i className="fas fa-phone me-2" />Call Us Now
                        </a>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4">
                            <h4>About Lotus Spa</h4>
                            <p>A premium wellness destination in Malad West, Mumbai — where skilled therapists, a calming environment, and personalised treatments come together for a truly restorative experience.</p>
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
                                <li><i className="fas fa-map-marker-alt" />{address}</li>
                                <li><i className="fas fa-phone" /> {contact}</li>
                                <li><i className="fas fa-envelope" /> {email}</li>
                                <li><i className="fas fa-clock" /> Mon-Sun: 9:00 AM - 9:00 PM</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© 2023 Lotus Spa. All Rights Reserved. Designed with <i className="fas fa-heart text-danger" /> in Mumbai</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default page