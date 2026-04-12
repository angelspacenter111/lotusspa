import Navigation from '@/app/components/Navigation'
import hero from '@/app/dataset/herosection.json'
import services from '@/app/dataset/services.json'
import differentsection from '@/app/dataset/weAreDifferent.json'
import { name, image_url, base_url, email, contact, address } from '@/app/info'
import { Metadata } from 'next';


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
					url: base_url + 'logot.png',
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
								<img src={base_url + 'logot.png'} alt={'Spa center in mumbai - ' + name} className="img-fluid rounded-3" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="container">
				<div className="service-finder" id="serviceFinder">
					<h3 className="text-center mb-4">Discover Your Ideal Spa Journey at Lotus Spa, Malad</h3>
					<p className="mb-4">Every guest deserves a personalised experience. Simply select your nearest location and preferred service so our team can prepare everything in advance — that way, when you arrive, you can leave the outside world behind and step straight into relaxation.</p>
					<form id="serviceFinderForm">
						<div className="row g-3">
							<div className="col-md-6">
								<label className="form-label">Location</label>
								<select className="form-select" id="locationSelect">
									<option value="">Select your location</option>
									<option value="malad-west">Malad West</option>
									<option value="malad-east">Malad East</option>
									<option value="evershine-nagar">Evershine Nagar</option>
									<option value="kandivali-west">Kandivali West</option>
									<option value="kandivali-east">Kandivali East</option>
									<option value="thakur-village">Thakur Village</option>
									<option value="goregaon-west">Goregaon West</option>
									<option value="goregaon-east">Goregaon East</option>
									<option value="aarey-colony">Aarey Colony</option>
									<option value="mindspace-malad">Mindspace Malad</option>
								</select>
							</div>
							<div className="col-md-6">
								<label className="form-label">Services</label>
								<select className="form-select" id="serviceSelect">
									<option value="">Select Spa Service</option>
									<option value="swedish-massage">Swedish Massage</option>
									<option value="deep-tissue-massage">Deep Tissue Massage</option>
									<option value="aromatherapy">Aromatherapy Massage</option>
									<option value="hot-stone-therapy">Hot Stone Therapy</option>
									<option value="body-scrub">Body Scrub</option>
									<option value="facial-treatment">Facial Treatment</option>
									<option value="body-wrap">Body Wrap</option>
									<option value="reflexology">Reflexology</option>
									<option value="thai-massage">Thai Massage</option>
									<option value="head-massage">Head & Scalp Massage</option>
								</select>
							</div>
						</div>
						<div className="text-center mt-4">
							<button type="submit" className="btn btn-primary btn-lg">
								<i className="fas fa-magic me-2" />Find My Perfect Service
							</button>
						</div>
					</form>
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
						<h2>Why Choose Lotus Spa in Malad, Mumbai</h2>
					</div>
					<div className="row align-items-center">
						<div className="story-content">
							<p>If you are searching for a trusted spa in Malad, your search ends here. Lotus Spa has built a reputation for genuine relaxation, professional care, and a welcoming environment — making us a go-to wellness destination for residents across Malad and the surrounding areas.</p>
							<p>We believe that wellness is not a luxury — it is a necessity. Our team of trained therapists works with every guest individually, ensuring each session is safe, hygienic, and tailored to what your body actually needs.</p>

							<h5>Professional & Experienced Therapists</h5>
							<p>Our therapists are certified specialists in a range of massage and wellness techniques. Whether you are looking for a gentle relaxation session or targeted deep-tissue work, they bring both expertise and care to every appointment.</p>

							<h5>Premium Services at Honest Prices</h5>
							<p>Quality spa treatment should not come with a surprise bill. At Lotus Spa, we price our services transparently and fairly — so you get a premium experience without stretching your budget. That commitment to value is one of the reasons our clients keep coming back.</p>

							<h5>Clean, Safe & Comfortable Environment</h5>
							<p>Hygiene is non-negotiable for us. Every room, treatment bed, and piece of equipment is thoroughly sanitised between sessions. You can walk in, switch off, and relax — knowing everything around you is clean and taken care of.</p>

							<h5>A Wide Range of Treatments Under One Roof</h5>
							<p>From aromatherapy and hot stone therapy to reflexology, body wraps, and full-body massages — we cover a broad spectrum of wellness needs. Whatever brings you in, we have a treatment that fits.</p>

							<h5>Conveniently Located in Malad</h5>
							<p>Our spa is easily accessible from both Malad West and Malad East, with good connectivity from nearby areas like Kandivali and Goregaon. Getting here is simple — and leaving refreshed is guaranteed.</p>

							<h5>A Community of Happy, Returning Guests</h5>
							<p>We take pride in the trust our guests place in us. Many of our clients visit regularly and refer their friends and family — not because we ask them to, but because the experience speaks for itself.</p>

							<h5>Treatments Designed Around You</h5>
							<p>No two guests are the same, and we do not treat them that way. Our team takes the time to understand your needs before every session and adjusts the treatment accordingly — so you always leave feeling exactly as you hoped.</p>

							<p>Whether you are a first-time visitor or a long-time regular, Lotus Spa in Malad is here to give you a genuine, restorative experience every single time. Come visit us and see why so many people in Mumbai make us part of their wellness routine.</p>
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
	);
}