import Navigation from '@/app/components/Navigation'
import hero from '@/app/dataset/herosection.json'
import services from '@/app/dataset/services.json'
import differentsection from '@/app/dataset/weAreDifferent.json'
import { name, image_url, base_url } from '@/app/info'


export async function generateMetadata() {
	return {
		title: "Best Spa Center In Malad, Mumbai | " + name,
		description: "Find " + name + " in Malad, Mumbai. Enjoy Thai massage, body therapy & premium wellness services. Check reviews and book your relaxing session today.",
		alternates: {
			canonical: base_url
		},
		openGraph: {
			title: "Best Spa Center In Malad, Mumbai | " + name,
			description: "Find " + name + " in Malad, Mumbai. Enjoy Thai massage, body therapy & premium wellness services. Check reviews and book your relaxing session today.",
			url: base_url,
			siteName: name,
			images: [
				{
					url: base_url + '/assets/logot.png',
					width: 1200,
					height: 630,
					alt: "Lotus Spa In Mumbai",
				},
			],
			locale: "en_IN",
			type: "website",
		},
	};
}

export default function Home() {
	const heroSectionContent = hero.sections[0];
	return (
		<>
			<Navigation />
			<section className="service-hero">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<h1 className="fw-bold text-white mb-4">{heroSectionContent.headline}</h1>
							<p className="lead text-white mb-4">{heroSectionContent.subtext}</p>
							<div className="d-flex gap-3">
								<button className="btn btn-light btn-lg">
									<i className="fas fa-search me-2" />Find Your Service
								</button>
								<a href="#services" className="btn btn-outline-light btn-lg">
									<i className="fas fa-spa me-2" />{heroSectionContent.cta}
								</a>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="text-center">
								<img src={base_url + '/assets/logot.png'} alt={'Spa center in mumbai - ' + name} className="img-fluid rounded-3" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="container">
				<div className="service-finder" id="serviceFinder">
					<h3 className="text-center mb-4">Find Your Perfect Treatment</h3>
					<p className="text-center mb-4">Answer a few questions to discover the ideal service for your needs</p>
					<form id="serviceFinderForm">
						<div className="row g-3">
							<div className="col-md-4">
								<label className="form-label">What's your primary goal?</label>
								<select className="form-select" id="goalSelect">
									<option value>Select your goal</option>
									<option value="relaxation">Stress Relief &amp; Relaxation</option>
									<option value="pain">Pain Relief</option>
									<option value="beauty">Beauty &amp; Skincare</option>
									<option value="detox">Detox &amp; Cleansing</option>
									<option value="energy">Energy Boost</option>
								</select>
							</div>
							<div className="col-md-4">
								<label className="form-label">How much time do you have?</label>
								<select className="form-select" id="timeSelect">
									<option value>Select duration</option>
									<option value={30}>30 minutes</option>
									<option value={60}>60 minutes</option>
									<option value={90}>90 minutes</option>
									<option value={120}>2 hours or more</option>
								</select>
							</div>
							<div className="col-md-4">
								<label className="form-label">Preferred treatment type?</label>
								<select className="form-select" id="typeSelect">
									<option value>Select type</option>
									<option value="massage">Massage</option>
									<option value="facial">Facial</option>
									<option value="body">Body Treatment</option>
									<option value="package">Package</option>
								</select>
							</div>
						</div>
						<div className="text-center mt-4">
							<button type="submit" className="btn btn-primary btn-lg">
								<i className="fas fa-magic me-2" />Find My Perfect Service
							</button>
						</div>
					</form>
					<div id="finderResult" className="mt-4" style={{ display: 'none' }}>
						<div className="alert alert-success">
							<h5>Recommended Service:</h5>
							<p id="recommendedService" />
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding bg-light">
				<div className="container">
					<div className="section-title">
						<h2>Featured Services</h2>
					</div>
					<div className="row">
						{
							services.content.slice(0, 4).map((item, index) => {
								return (
									<div className="col-md-6 col-lg-3 mb-4" key={index}>
										<div className="service-card">
											<img src={item.image_url} alt="Aromatherapy Massage" />
											<div className="service-card-content">
												<h3>{item.name}</h3>
												<p>{item.description}.</p>
												<a href="services.html" className="btn btn-sm btn-outline-primary">Learn More</a>
											</div>
										</div>
									</div>
								)
							})
						}

					</div>
				</div>
			</section>
			<section className="section-padding" style={{ background: 'var(--gradient-primary)' }}>
				<div className="container text-center">
					<h2 className="text-white mb-4">Ready to Experience Pure Relaxation?</h2>
					<p className="text-white mb-5">Book your appointment today and embark on a journey to wellness and rejuvenation.
					</p>
					<a href="tel:+919876543210" className="btn btn-outline-light btn-lg">Call Us</a>
				</div>
			</section>
			<section className="section-padding">
				<div className="container">
					<div className="section-title">
						<h2>We Are Different Because...</h2>
						<p className="mt-3">Providing premium spa elements to enhance customer satisfaction</p>
					</div>
					<div className="row">
						{
							differentsection.weAreDifferent.slice(0, 3).map(item => {
								return (
									<div className="col-md-4 col-lg-4 mb-4" key={item.id}>
										<div className="why-choose-card text-center">
											<h3>{item.title}</h3>
											<p>{item.description}</p>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</section>

			<section className="section-padding">
				<div className="container">
					<div className="section-title">
						<h2>How It Works</h2>
						<h4>Discover Your Path to Deep Relaxation at Lotus Spa</h4>
					</div>
					<div className="row align-items-center">
						<div className="story-content">
							<p>Welcome to Lotus Spa, the Best Spa Center in Malad, Mumbai, where tranquility meets luxury. We understand that in the bustling neighborhood of Malad, finding moments of peace and rejuvenation is essential for your well-being. That's why we've made your spa experience effortlessly simple and incredibly relaxing. Discover how easy it is to escape the chaos of Mumbai and step into a world of serenity at our premium Spa Center in Malad, Mumbai.</p>
							<h5>Step 1: Choose Your Perfect Service</h5>
							<p>Your relaxation journey begins with selecting from our extensive menu of wellness treatments. At Lotus Spa, we offer a diverse range of therapeutic services tailored to meet your unique needs. Whether you're seeking relief from muscle tension with our signature deep tissue massage, looking to detoxify with our aromatherapy sessions, or planning a romantic couple's spa experience, we have something special for everyone.</p>
							<p>Our experienced therapists at this renowned Spa Center in Malad, Mumbai specialize in traditional Ayurvedic massages, Swedish therapy, hot stone treatments, and rejuvenating facials. Browse through our comprehensive service catalog on our website or call our friendly team who will guide you in choosing the perfect treatment based on your wellness goals. Each service is designed with precision to deliver maximum relaxation and therapeutic benefits.</p>
							<h5>Step 2: Book Your Appointment Conveniently</h5>
							<p>Booking your appointment at the Best Spa Center in Malad, Mumbai | Lotus Spa is incredibly simple and hassle-free. We value your time and have streamlined our booking process to ensure convenience at every step. You can schedule your session through multiple channels:</p>
							<p><b>Online Booking:</b> Visit our user-friendly website and select your preferred service, date, and time slot with just a few clicks. Our real-time availability calendar ensures you get the appointment that fits perfectly into your busy Mumbai schedule.</p>
							<p><b>Phone Reservations:</b> Prefer speaking to someone? Our courteous staff is available to assist you with bookings, answer your queries, and provide personalized recommendations.</p>
							<p><b>Walk-in Options:</b> Located conveniently in Malad, Mumbai, we also welcome walk-in guests, though advance booking is recommended to secure your preferred time slot.</p>
							<h5>Step 3: Visit Our Serene Spa Sanctuary</h5>
							<p>When you arrive at our Spa Center in Malad, Mumbai, you'll immediately feel the stress melting away. Our strategically located facility is easily accessible from all parts of Malad East and West, with ample parking facilities for your convenience.</p>
							<p>Upon entering Lotus Spa, you'll be warmly greeted by our professional reception team who will guide you through a brief consultation. This helps us understand your specific concerns, preferences, and any health considerations. You'll then be escorted to our beautifully designed changing rooms where you can freshen up and slip into comfortable spa attire.</p>
							<p>Our tranquil ambiance features soothing music, aromatic fragrances, and calming décor that instantly transports you away from the hustle of Mumbai city life. Every corner of our Best Spa Center in Malad, Mumbai | Lotus Spa is thoughtfully designed to create an oasis of peace.</p>
							<h5>Step 4: Relax & Rejuvenate Completely</h5>
							<p>Now comes the best part – your complete relaxation experience! As you settle into our premium treatment rooms, our certified therapists will begin your chosen therapy with utmost care and professionalism. Each session at our Spa Center in Malad, Mumbai is customized to your comfort level and therapeutic needs.</p>
							<p>Feel the tension dissolve from your muscles, let your mind drift into peaceful meditation, and allow the healing touch of our experts to rejuvenate your body and soul. We use only premium quality organic oils, natural products, and state-of-the-art spa equipment to ensure you receive the finest treatment.</p>
							<p>After your therapy, enjoy complimentary herbal tea in our relaxation lounge, giving your body time to absorb the benefits of the treatment. Our post-treatment care advice helps you maintain that blissful feeling long after you leave.</p>
							<p>Lotus Spa is more than just a spa – it's your personal wellness destination in the heart of Malad, Mumbai. Experience the difference that genuine care, professional expertise, and serene ambiance can make to your well-being.</p>
							<p>Visit us today and discover why locals consistently rate us as the Best Spa Center in Malad, Mumbai | Lotus Spa. Your journey to complete relaxation is just four simple steps away!</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding">
				<div className="container">
					<div className="section-title">
						<h2>Our Locations</h2>
					</div>
					<div className="row">
						<div className="col-md-4 mb-4">
							<div className="location-card">
								<img src="https://picsum.photos/seed/borivali/400/250" alt="Borivali Spa" />
								<div className="location-content">
									<h3>Borivali</h3>
									<p>Experience premium spa services in the heart of Borivali with a calm and luxurious ambiance.</p>
									<a href="#" className="btn btn-outline-primary">View Details</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<div className="location-card">
								<img src="https://picsum.photos/seed/malad/400/250" alt="Malad Spa" />
								<div className="location-content">
									<h3>Malad</h3>
									<p>Relax and rejuvenate at our Malad branch with expert therapists and modern facilities.</p>
									<a href="#" className="btn btn-outline-primary">View Details</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<div className="location-card">
								<img src="https://picsum.photos/seed/andheri/400/250" alt="Andheri Spa" />
								<div className="location-content">
									<h3>Andheri</h3>
									<p>Enjoy a peaceful escape in Andheri with premium wellness treatments and soothing interiors.</p>
									<a href="#" className="btn btn-outline-primary">View Details</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="section-padding">
				<div className="container">
					<div className="section-title">
						<h2>Special Offers</h2>
					</div>
					<div className="row">
						<div className="col-md-6 col-lg-4 mb-4">
							<div className="offer-card">
								<h3>Weekend Relaxation Package</h3>
								<div className="discount">20% OFF</div>
								<p>Enjoy a full day of pampering with our weekend special package including massage, facial, and
									lunch.</p>
								<a href="contact.html" className="btn btn-light">Book Now</a>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 mb-4">
							<div className="offer-card">
								<h3>Couples Retreat</h3>
								<div className="discount">15% OFF</div>
								<p>Bring your partner and enjoy a romantic spa experience with side-by-side treatments in our
									couple's suite.</p>
								<a href="contact.html" className="btn btn-light">Book Now</a>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 mb-4">
							<div className="offer-card">
								<h3>First Visit Special</h3>
								<div className="discount">25% OFF</div>
								<p>New to Lotus Spa? Enjoy 25% off your first treatment when you book this month.</p>
								<a href="contact.html" className="btn btn-light">Book Now</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section-padding bg-light">
				<div className="container">
					<div className="section-title">
						<h2>What Our Clients Say</h2>
					</div>
					<div className="row">
						<div className="col-md-6 col-lg-4 mb-4">
							<div className="testimonial-card">
								<div className="stars">
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
								</div>
								<p>"Lotus Spa is my sanctuary in the busy city of Mumbai. The aromatherapy massage
									completely melted away my stress. The therapists are highly skilled and the ambiance is
									absolutely tranquil."</p>
								<div className="client-info">
									<img src="https://picsum.photos/seed/client1/100/100.jpg" alt="Priya Sharma" />
									<div>
										<h5>Priya Sharma</h5>
										<p>Regular Client</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 mb-4">
							<div className="testimonial-card">
								<div className="stars">
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
								</div>
								<p>"I had the most amazing couples massage experience with my husband. The private suite was
									beautiful and the therapists were attentive to our needs. We left feeling completely
									refreshed and reconnected."</p>
								<div className="client-info">
									<img src="https://picsum.photos/seed/client2/100/100.jpg" alt="Rahul Mehta" />
									<div>
										<h5>Rahul Mehta</h5>
										<p>First-time Client</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 mb-4">
							<div className="testimonial-card">
								<div className="stars">
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
								</div>
								<p>"The luxury facial transformed my skin! The esthetician was knowledgeable and used premium
									products. My skin has never looked better. I've already booked my next appointment."</p>
								<div className="client-info">
									<img src="https://picsum.photos/seed/client3/100/100.jpg" alt="Anita Patel" />
									<div>
										<h5>Anita Patel</h5>
										<p>Monthly Client</p>
									</div>
								</div>
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
					<a href="contact.html" className="btn btn-light btn-lg me-3">Book Appointment</a>
					<a href="tel:+919876543210" className="btn btn-outline-light btn-lg">Call Us</a>
				</div>
			</section>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-lg-3 mb-4">
							<h4>About Lotus Spa</h4>
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
								<li><i className="fas fa-map-marker-alt" /> Lotus Spa, Malad West, Mumbai, Maharashtra
									400064</li>
								<li><i className="fas fa-phone" /> +91 98765 43210</li>
								<li><i className="fas fa-envelope" /> info@skywellnessspa.com</li>
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
	);
}

