import React from 'react'
import Navigation from '@/app/components/Navigation'
import Link from 'next/link'
import ServicesSidebar from '@/app/components/ServicesSidebar'
import Footer from '../components/Footer'
import { contact, base_url } from '@/app/info'

export async function generateMetadata() {
    return {
        title: "Best Aromatherapy Massage Center in Malad Mumbai | Lotus Spa",
        description: "Relax your mind and body with the best aromatherapy massage in Malad, Mumbai at Lotus Spa. Enjoy premium essential oils for ultimate stress and fatigue relief.",
        keywords: [
            "Best Aromatherapy Massage Center in Malad Mumbai",
            "Aromatherapy massage in Malad",
            "Stress relief massage Malad",
            "Fatigue relief therapy Malad",
            "Best spa near me Malad",
            "Best massage center in Malad",
            "Lotus Spa in Malad Mumbai",
            "Relaxation massage Malad"
        ],
        openGraph: {
            title: "Best Aromatherapy Massage Center in Malad Mumbai | Lotus Spa",
            description: "Experience profound relaxation and stress relief with our customized aromatherapy massage services at Lotus Spa in Malad.",
            url: base_url + "best-aromatherapy-massage-center-in-malad-mumbai-lotus-spa",
            siteName: "Lotus Spa",
            images: [
                {
                    url: base_url + "assets/aromatherapy-massage-in-malad-mumbai-lotus-spa.webp",
                    width: 1200,
                    height: 630,
                    alt: "Best Aromatherapy Massage Center in Malad Mumbai",
                },
            ],
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Best Aromatherapy Massage Center in Malad Mumbai | Lotus Spa",
            description: "Expert Aromatherapy Massage with pure essential oils for mental and physical rejuvenation in Malad, Mumbai.",
            images: [
                base_url + "assets/aromatherapy-massage-in-malad-mumbai-lotus-spa.webp",
            ],
        },
        alternates: {
            canonical: base_url + "best-aromatherapy-massage-center-in-malad-mumbai-lotus-spa"
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        }
    };
}

const page = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Aromatherapy Massage",
        "provider": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Lotus Spa",
            "image": base_url + "logot.png",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Malad West",
                "addressRegion": "Mumbai",
                "addressCountry": "IN"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": "Malad, Mumbai"
        },
        "description": "Experience deeply soothing aromatherapy massage in Malad at Lotus Spa. Combines gentle massage strokes with pure essential oils for stress and anxiety relief.",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "1999",
            "url": base_url + "best-aromatherapy-massage-center-in-malad-mumbai-lotus-spa"
        }
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navigation />
            <section className="page-header sd-page-header">
                <div className="container text-center">
                    <h1>Best Aromatherapy Massage in Malad Mumbai</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link href="/services">Our Services</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Aromatherapy Massage</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="sd-main-section">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="sd-hero-img-wrap">
                                <img src="/assets/aromatherapy-massage-in-malad-mumbai-lotus-spa.webp" alt="Best Aromatherapy Massage Center in Malad Mumbai" className="sd-hero-img" />
                                <div className="sd-img-badge"><i className="fas fa-leaf me-1" />Holistic Healing</div>
                            </div>

                            <div className="sd-content-block">
                                <h2 className="sd-section-title">Discover Tranquility at the Best Aromatherapy Massage Center in Malad Mumbai</h2>
                                <p>In today's fast-paced world, finding a moment of absolute peace can feel nearly impossible. The constant demands of work, endless commutes across Mumbai, and daily life stressors accumulate in our bodies, leading to chronic physical fatigue and mental exhaustion. While standard massages are wonderful for physical knots, sometimes you need a treatment that heals the mind as much as it heals the body.</p>
                                <p>If you find yourself constantly drained and are actively seeking a profound <Link href="/best-aromatherapy-massage-center-in-malad-mumbai-lotus-spa"><strong>stress relief massage in Malad</strong></Link>, Lotus Spa is your perfect sanctuary. We specialize in authentic aromatherapy therapies that blend the science of human touch with the incredible healing properties of pure plant extracts and essential oils.</p>
                                <p>Regarded as the <Link href="/"><strong>best massage center in Malad</strong></Link>, we ensure that every session is a customized sensory journey. Let the soothing aromas envelop you as our expert therapists melt away your deepest anxieties, leaving you completely refreshed and revitalized.</p>

                                <div className="sd-info-pills">
                                    <span className="sd-pill"><i className="fas fa-clock me-1" />60-90 Min</span>
                                    <span className="sd-pill"><i className="fas fa-tag me-1" />From ₹1,999</span>
                                    <span className="sd-pill"><i className="fas fa-spa me-1" />Pure Essential Oils</span>
                                    <span className="sd-pill"><i className="fas fa-brain me-1" />Mental Clarity</span>
                                </div>
                            </div>

                            <div className="sd-content-block">
                                <h2 className="sd-section-title">What Makes an Aromatherapy Massage Unique?</h2>
                                <p>At its core, an <Link href="/services"><strong>Aromatherapy massage in Malad</strong></Link> is a beautifully holistic treatment. Unlike a deep tissue massage which focuses heavily on intense pressure, aromatherapy utilizes gentle, sweeping Swedish massage techniques designed to stimulate your lymphatic system and promote deep relaxation.</p>
                                <p>The true magic, however, lies in the essential oils. These are highly concentrated plant extracts derived from flowers, leaves, roots, and seeds. During your session, the skin absorbs these therapeutic oils, entering your bloodstream to promote physical healing. Simultaneously, as you inhale the fragrant scents, the olfactory nerves in your nose send direct signals to the limbic system—the part of your brain responsible for emotions, memory, and mood regulation. This dual-action approach makes it the ultimate <Link href="/services"><strong>relaxation massage in Malad</strong></Link>.</p>
                            </div>

                            <div className="sd-content-block">
                                <h2 className="sd-section-title">Customized Blends for Your Specific Needs</h2>
                                <p>At Lotus Spa, we understand that no two individuals are alike. What calms one person might invigorate another. Because we are a dedicated <Link href="/"><strong>wellness center in Malad</strong></Link>, our therapists consult with you before your massage begins to understand your current physical and emotional state. We then create a bespoke oil blend tailored specifically for you.</p>
                                <p>Whether you need Lavender and Chamomile to combat severe insomnia, Eucalyptus to relieve muscular aches, or Citrus and Peppermint for an uplifting burst of energy, our premium-grade essential oils are guaranteed to deliver the exact <Link href="/best-aromatherapy-massage-center-in-malad-mumbai-lotus-spa"><strong>fatigue relief therapy in Malad</strong></Link> that your body is crying out for.</p>
                            </div>

                            <div className="sd-content-block">
                                <h2 className="sd-section-title">Incredible Benefits of Aromatherapy</h2>
                                <p>Choosing an aromatherapy session at <strong>Lotus Spa in Malad Mumbai</strong> brings a wealth of physical and psychological benefits. Our clients consistently report massive improvements in their day-to-day well-being:</p>

                                <ul style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                                    <li><strong>Reduces Anxiety and Depression:</strong> The scents of specific oils directly interact with the brain's emotional center, naturally reducing cortisol levels and replacing feelings of anxiety with profound calmness.</li>
                                    <li><strong>Improves Sleep Quality:</strong> If you struggle with insomnia, our relaxing essential oil blends help sedate the nervous system, allowing you to fall into a deeper, more restorative sleep.</li>
                                    <li><strong>Boosts Energy and Focus:</strong> Feeling sluggish? A custom blend of citrus and rosemary acts as a powerful, natural stimulant, clearing brain fog and drastically improving your concentration.</li>
                                    <li><strong>Relieves Headaches and Migraines:</strong> The gentle massage strokes combined with peppermint or eucalyptus oils improve blood circulation to the head, naturally easing tension headaches.</li>
                                    <li><strong>Enhances Immune Function:</strong> Many essential oils possess strong antimicrobial and antibacterial properties. When absorbed into the skin, they help fortify your body's natural immune defenses.</li>
                                </ul>
                            </div>

                            <div className="sd-content-block sd-benefits-block">
                                <h2 className="sd-section-title">Is Aromatherapy Right For You?</h2>
                                <p>Aromatherapy is generally perfect for anyone looking to decompress, but it is especially beneficial for individuals dealing with high-stress environments or emotional burnout.</p>
                                <div className="row g-4 mt-1">
                                    <div className="col-md-6">
                                        <div className="sd-benefit-card" style={{ height: '100%' }}>
                                            <div className="sd-benefit-icon"><i className="fas fa-wind" /></div>
                                            <h5>Perfect For</h5>
                                            <p>Those suffering from chronic stress, anxiety, insomnia, emotional exhaustion, or anyone looking for a deeply soothing, fragrant escape from reality.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="sd-benefit-card" style={{ height: '100%' }}>
                                            <div className="sd-benefit-icon"><i className="fas fa-ban" /></div>
                                            <h5>When to Avoid</h5>
                                            <p>If you have severe skin allergies, are in the first trimester of pregnancy, or are highly sensitive to strong smells, we recommend opting for an unscented Swedish massage instead.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sd-content-block">
                                <h2 className="sd-section-title">What to Expect During Your Visit</h2>
                                <p>From the moment you step into the <Link href="/contact"><strong>best spa near me in Malad</strong></Link>, you will be greeted by a deeply serene and aromatic environment. Your session begins with a brief consultation to select your perfect oil blend. Once settled in our hygienic, low-lit therapy room, your massage therapist will use smooth, flowing strokes to work the customized oils deep into your skin.</p>
                                <p>Post-massage, we highly recommend that you leave the oils on your skin for a few hours to maximize their therapeutic absorption. Drink plenty of warm water to help your lymphatic system flush out any released toxins.</p>
                            </div>

                            <div className="sd-content-block">
                                <h2 className="sd-section-title">Book Your Sensory Escape Today</h2>
                                <p>You deserve to take a break and nurture your mental and physical health. Allow the power of nature to restore your inner balance. Visit Lotus Spa, recognized widely as the <Link href="/"><strong>Best Aromatherapy Massage Center in Malad Mumbai</strong></Link>, and treat yourself to an unforgettable sensory experience.</p>
                                <p>Are you ready to breathe deeply and let go of all your stress? Contact our friendly reception team today to schedule your personalized aromatherapy session. Let us help you embark on a beautiful journey toward complete relaxation and wellness.</p>
                                <div className="text-center mt-4">
                                    <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--gradient-primary)', border: 'none', padding: '14px 35px', borderRadius: 30, fontWeight: 500, color: 'white', textDecoration: 'none' }}>
                                        Book Your Appointment Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <ServicesSidebar />

                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Pricing &amp; Plans</h2>
                        <p className="mt-3">Choose the perfect aromatherapy package to relax your mind and body</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-card featured">
                                <div className="package-header">
                                    <h3>Standard Aroma</h3>
                                    <div className="package-price">
                                        <span className="currency">₹</span>
                                        <span className="amount">1999</span>
                                    </div>
                                    <div className="package-meta">Starting from 60 min</div>
                                </div>
                                <div className="package-body">
                                    <ul className="package-features" style={{ paddingLeft: 0 }}>
                                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span><i className="fas fa-clock text-white me-2" /> 60 min</span>
                                            <strong>₹1999</strong>
                                        </li>
                                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span><i className="fas fa-clock text-white me-2" /> 90 min</span>
                                            <strong>₹2999</strong>
                                        </li>
                                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span><i className="fas fa-clock text-white me-2" /> 120 min</span>
                                            <strong>₹3999</strong>
                                        </li>
                                        <li className="mt-3"><i className="fas fa-check text-white" /> Custom Oil Selection</li>
                                        <li><i className="fas fa-check text-white" /> Stress Relief Strokes</li>
                                    </ul>
                                    <button className="btn btn-light package-btn mt-auto" style={{ color: 'var(--primary-color)' }}>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-card featured">
                                <div className="package-header">
                                    <h3>Signature Blend</h3>
                                    <div className="package-price">
                                        <span className="currency">₹</span>
                                        <span className="amount">2999</span>
                                    </div>
                                    <div className="package-meta">Starting from 60 min</div>
                                </div>
                                <div className="package-body">
                                    <ul className="package-features" style={{ paddingLeft: 0 }}>
                                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span><i className="fas fa-clock text-white me-2" /> 60 min</span>
                                            <strong>₹1999</strong>
                                        </li>
                                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span><i className="fas fa-clock text-white me-2" /> 90 min</span>
                                            <strong>₹2999</strong>
                                        </li>
                                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span><i className="fas fa-clock text-white me-2" /> 120 min</span>
                                            <strong>₹3999</strong>
                                        </li>
                                        <li className="mt-3"><i className="fas fa-check text-white" /> Rare Floral Extracts</li>
                                        <li><i className="fas fa-check text-white" /> Complete Mental Detox</li>
                                    </ul>
                                    <button className="btn btn-light package-btn mt-auto" style={{ color: 'var(--primary-color)' }}>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="package-card featured">
                                <div className="package-header">
                                    <h3>Aroma Couples</h3>
                                    <div className="package-price">
                                        <span className="currency">₹</span>
                                        <span className="amount">4999</span>
                                    </div>
                                    <div className="package-meta">Starting from 60 min</div>
                                </div>
                                <div className="package-body">
                                    <ul className="package-features" style={{ paddingLeft: 0 }}>
                                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span><i className="fas fa-clock text-white me-2" /> 60 min</span>
                                            <strong>₹1999</strong>
                                        </li>
                                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span><i className="fas fa-clock text-white me-2" /> 90 min</span>
                                            <strong>₹2999</strong>
                                        </li>
                                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span><i className="fas fa-clock text-white me-2" /> 120 min</span>
                                            <strong>₹3999</strong>
                                        </li>
                                        <li className="mt-3"><i className="fas fa-check text-white" /> Side-by-Side Massage</li>
                                        <li><i className="fas fa-check text-white" /> Romantic Essential Oils</li>
                                    </ul>
                                    <button className="btn btn-light package-btn mt-auto" style={{ color: 'var(--primary-color)' }}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sd-more-services">
                <div className="container">
                    <div className="sd-more-services-header">
                        <h2>Explore Our More Services</h2>
                        <p>Discover our full range of premium spa treatments crafted for total well-being</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="sd-more-card sd-more-card-active">
                                <div className="sd-more-card-icon"><i className="fas fa-leaf" /></div>
                                <h5>Aromatherapy Massage</h5>
                                <p>Soothe your senses and calm your mind with custom-blended essential oils and gentle massage strokes.</p>
                                <Link href="/best-aromatherapy-massage-center-in-malad-mumbai-lotus-spa" className="sd-more-card-link" id="moreCardAromatherapy">Read More <i className="fas fa-arrow-right ms-1" /></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="sd-more-card">
                                <div className="sd-more-card-icon"><i className="fas fa-spa" /></div>
                                <h5>Swedish Massage</h5>
                                <p>Our signature essential-oil massage that melts stress, boosts energy, and restores natural balance from within.</p>
                                <Link href="/best-swedish-massage-center-in-malad-mumbai-lotus-spa" className="sd-more-card-link" id="moreCardSwedish">Read More <i className="fas fa-arrow-right ms-1" /></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="sd-more-card">
                                <div className="sd-more-card-icon"><i className="fas fa-hand-holding-medical" /></div>
                                <h5>Deep Tissue Massage</h5>
                                <p>Advanced therapy focusing on inner muscle layers to relieve chronic tension and stubborn physical pain.</p>
                                <Link href="/best-deep-tissue-massage-center-in-malad-mumbai-lotus-spa" className="sd-more-card-link" id="moreCardDeepTissue">Read More <i className="fas fa-arrow-right ms-1" /></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="sd-more-card">
                                <div className="sd-more-card-icon"><i className="fas fa-fire" /></div>
                                <h5>Hot Stone Therapy</h5>
                                <p>Smooth heated basalt stones ease deep muscle tension and improve circulation for total physical renewal.</p>
                                <Link href="/" className="sd-more-card-link" id="moreCardHotStone">Read More <i className="fas fa-arrow-right ms-1" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sd-cta-banner">
                <div className="container text-center">
                    <h2>Ready to Experience Pure Relaxation?</h2>
                    <p>Book your Aromatherapy Massage session today and start your journey to complete wellness.</p>
                    <div className="sd-cta-btns">
                        <Link href="/contact" id="ctaBookBtn" className="sd-cta-primary">Book Appointment</Link>
                        <a href={"tel: " + contact} className="sd-cta-secondary">Call Us Now</a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default page