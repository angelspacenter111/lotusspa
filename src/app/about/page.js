import React from 'react'
import Link from 'next/link';
import Navigation from '@/app/components/Navigation'
import Footer from '../components/Footer'
import { contact, base_url } from '@/app/info'

export async function generateMetadata() {
    return {
        title: "About Us | Best Spa & Massage Center in Malad Mumbai | Lotus Spa",
        description: "Learn more about Lotus Spa Malad, the leading massage center in Malad Mumbai. We offer premium body massage, relaxation therapies, and wellness treatments.",
        keywords: [
            "About Lotus Spa Malad",
            "spa in Malad",
            "massage center in Malad",
            "body massage in Malad",
            "best spa in Malad",
            "spa center in Malad Mumbai",
            "wellness center in Malad",
            "spa near Inorbit Mall Malad"
        ],
        openGraph: {
            title: "About Us | Best Spa & Massage Center in Malad Mumbai",
            description: "Lotus Spa is a premium massage center in Malad West, offering top-notch wellness and relaxation therapies in a serene environment.",
            url: base_url + "about",
            siteName: "Lotus Spa",
            images: [
                {
                    url: base_url + "logot.png",
                    width: 800,
                    height: 600,
                    alt: "Lotus Spa Malad Mumbai",
                },
            ],
            locale: "en_IN",
            type: "website",
        },
        alternates: {
            canonical: base_url + "about"
        }
    };
}

const page = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Lotus Spa Malad",
            "description": "Lotus Spa Malad is a professional and trusted spa in Malad, Mumbai offering high-quality wellness and relaxation services.",
            "image": base_url + "logot.png",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Malad West",
                "addressRegion": "Mumbai",
                "addressCountry": "IN"
            },
            "url": base_url
        }
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navigation />
            <section className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link href="/" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </section>
            <section className="section-padding" style={{ paddingBottom: "10px" }}>
                <div className="container">
                    <div className="section-title">
                        <h2>Who We Are – Lotus Spa & Massage Center in Malad</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12 mb-4">
                            <div className="story-content">
                                <p>Lotus Spa Malad is a professional and trusted <Link href="/"><strong>spa in Malad, Mumbai</strong></Link> offering high-quality wellness and relaxation services. Nestled in the heart of one of the city's most bustling suburbs, our sanctuary serves as a peaceful retreat away from the chaotic pace of everyday life. As a well-known <Link href="/"><strong>massage center in Malad</strong></Link>, we are deeply dedicated to helping people reduce stress, relax their muscles, and significantly improve their overall physical and mental well-being.</p>
                                <p>Our primary goal has always been to cultivate an environment that instantly puts you at ease the moment you walk through our doors. At <strong>Lotus Spa in Malad, Mumbai</strong>, we recognize that chronic stress, poor posture, and body pain are increasingly common issues faced by urban professionals. To combat this, we have curated a comprehensive menu of therapeutic services. From a soothing <Link href="/services"><strong>body massage in Malad</strong></Link> that melts away daily fatigue to specialized deep tissue and aromatherapy sessions, our <Link href="/services"><strong>wellness center in Malad</strong></Link> provides treatments that cater to your specific physical demands.</p>
                                <p>Our spa interiors have been meticulously designed with your comfort in mind. We incorporate soft, ambient lighting, calming background music, and subtle, natural aromas to deliver the ultimate sensory relaxation experience. Furthermore, we take immense pride in our team of highly trained, certified therapists. Each therapist brings a wealth of knowledge and an intuitive touch, allowing them to personalize every session to target your unique trouble spots and tension areas. This unwavering commitment to individualized care is exactly what makes us one of the <Link href="/"><strong>best massage centers in Malad</strong></Link>.</p>
                                <p>Cleanliness and safety are non-negotiable at Lotus Spa. We maintain rigorous, world-class hygiene standards, thoroughly sanitizing all rooms, linens, and equipment between sessions to ensure a pristine and secure environment for every client. Whether you are dealing with a stiff neck, lower back pain, or simply seeking the <strong>best spa in Malad</strong> to escape reality for an hour, our <Link href="/contact"><strong>spa center in Malad, Mumbai</strong></Link> is your perfect destination to unwind, recharge, and rediscover your inner balance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ padding: "10px 0" }}>
                <div className="container">
                    <div className="section-title">
                        <h2>Our Mission & Vision – Spa in Malad Mumbai</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12 mb-4">
                            <div className="story-content">
                                <p>At Lotus Spa Malad, our mission is straightforward yet profound: to deliver the finest, most restorative wellness services as a leading <Link href="/"><strong>spa in Malad West</strong></Link>. While our roots are firmly planted here, we are also proud to serve residents from neighboring areas like Goregaon, Kandivali, and Andheri West who seek exceptional therapeutic care. We focus our energy entirely on providing high-quality, evidence-based therapies that actively help people relax, alleviate stubborn muscle pain, and genuinely improve their long-term health.</p>
                                <p>As a trusted, community-focused <Link href="/services"><strong>massage center in Malad</strong></Link>, we prioritize complete customer satisfaction above all else. We listen closely to your feedback, constantly refining our techniques and expanding our service offerings. Our vision is to continually be recognized not just as the <strong>best spa in Malad</strong>, but as an indispensable part of your wellness routine. We strive to remain the top-rated <Link href="/contact"><strong>spa near Inorbit Mall Malad</strong></Link>, distinguished by our unwavering dedication to quality, impeccable hygiene, and absolute professionalism.</p>
                                <p>Whether you are visiting us for a targeted, deep-pressure <strong>body massage in Malad</strong> to recover from a tough workout, or a gentle, flowing relaxation therapy to soothe your mind, we guarantee a deeply comfortable and satisfying experience. We believe that self-care is not a luxury, but a necessity. Regular treatments at our professional <Link href="/"><strong>spa in Malad East</strong></Link> or West can drastically lower cortisol (stress) levels, improve cardiovascular circulation, boost your immune system, and greatly enhance your overall quality of life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ padding: "10px 0" }}>
                <div className="container">
                    <div className="section-title">
                        <h2>Why Choose Our Spa in Malad Mumbai</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12 mb-4">
                            <div className="story-content">
                                <p>With so many options available across the city, you might wonder what sets Lotus Spa apart. Lotus Spa in Malad, Mumbai has established itself as the premier destination for anyone actively seeking a truly professional <strong>massage center in Malad</strong>. Our reputation is built on a foundation of consistency; we are universally recognized for delivering top-tier quality service, maintaining a deeply relaxing and beautifully appointed environment, and consistently achieving high customer satisfaction rates.</p>
                                <p>What truly makes us special is our team of dedicated healers. Our experienced therapists possess a deep understanding of human anatomy, making us the absolute top destination for a highly effective <Link href="/best-deep-tissue-massage-center-in-malad-mumbai-lotus-spa"><strong>muscle pain massage in Malad</strong></Link>. We do not believe in a one-size-fits-all approach. Instead, we provide highly personalized treatments, starting every session with a brief consultation to understand your current physical state. Whether you need a vigorous sports massage or a comprehensive, soothing <Link href="/services"><strong>full body massage in Malad</strong></Link>, our services are specifically tailored to suit your exact requirements.</p>
                                <p>Furthermore, we understand that peace of mind is crucial for genuine relaxation. That is why we strictly maintain world-class hygiene protocols, using premium, skin-safe oils and freshly laundered linens for every single guest. This commitment to cleanliness makes us a safe, trusted, and highly recommended <Link href="/"><strong>spa center in Malad, Mumbai</strong></Link>. Combining our tranquil atmosphere, expert staff, and transparent, affordable pricing plans, it is easy to see why we are the preferred <strong>spa in Malad West</strong> for countless clients who search for the perfect "<strong>spa near me</strong>".</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ padding: "10px 0" }}>
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
            <section className="section-padding" style={{ background: 'var(--gradient-primary)' }}>
                <div className="container text-center">
                    <h2 className="text-white mb-4">Ready to Experience Pure Relaxation?</h2>
                    <p className="text-white mb-5">Book your appointment today and embark on a journey to wellness and rejuvenation.
                    </p>
                    <a href={"tel:" + contact} className="btn btn-outline-light btn-lg">Call Us</a>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default page