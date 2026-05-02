import Link from 'next/link'
import React from 'react'
import { contact } from '@/app/info'

const ServicesSidebar = () => {
    return (
        <div className="col-lg-4">
            <div className="sd-sidebar">
                <div className="sd-sidebar-widget">
                    <h4 className="sd-widget-title">Our Services</h4>
                    <ul className="sd-services-list">
                        <li className="sd-service-list-item active">
                            <Link href="/best-swedish-massage-center-in-malad-mumbai-lotus-spa" id="svc-aromatherapy">
                                <i className="fas fa-spa me-2" />Swedish Massage
                                <i className="fas fa-chevron-down ms-auto" />
                            </Link>
                        </li>
                        {/* <li className="sd-service-list-item">
                            <a href="#" id="svc-luxury-facial">
                                <i className="fas fa-smile-beam me-2" />Luxury Facial
                                <i className="fas fa-chevron-right ms-auto" />
                            </a>
                        </li>
                        <li className="sd-service-list-item">
                            <a href="#" id="svc-hot-stone">
                                <i className="fas fa-fire me-2" />Hot Stone Therapy
                                <i className="fas fa-chevron-right ms-auto" />
                            </a>
                        </li>
                        <li className="sd-service-list-item">
                            <a href="#" id="svc-body-wrap">
                                <i className="fas fa-leaf me-2" />Detox Body Wrap
                                <i className="fas fa-chevron-right ms-auto" />
                            </a>
                        </li>
                        <li className="sd-service-list-item">
                            <a href="#" id="svc-couples">
                                <i className="fas fa-heart me-2" />Couples Retreat
                                <i className="fas fa-chevron-right ms-auto" />
                            </a>
                        </li>
                        <li className="sd-service-list-item">
                            <a href="#" id="svc-wellness">
                                <i className="fas fa-star me-2" />Wellness Packages
                                <i className="fas fa-chevron-right ms-auto" />
                            </a>
                        </li> */}
                    </ul>
                </div>
                {/* <div className="sd-sidebar-widget sd-brochure-widget">
                    <h4 className="sd-widget-title">Download Brochure</h4>
                    <p className="sd-brochure-text">Get our complete services guide with pricing, packages &amp;
                        treatment details delivered to you.</p>
                    <a href="#" id="downloadPdf" className="sd-download-btn">
                        <i className="fas fa-file-pdf me-2" />PDF Download
                    </a>
                    <a href="#" id="downloadDoc" className="sd-download-btn">
                        <i className="fas fa-file-word me-2" />DOC Download
                    </a>
                </div> */}
                <div className="sd-sidebar-widget sd-contact-widget">
                    <h4 className="sd-widget-title sd-contact-title">Need Help? Contact Us</h4>
                    <p className="sd-contact-text">Our wellness consultants are available to guide you to the
                        perfect treatment.</p>
                    <a href={contact} id="sidebarCallBtn" className="sd-call-btn">
                        <i className="fas fa-phone-alt me-2" />{contact}
                    </a>
                </div>
                <div className="sd-sidebar-widget sd-hours-widget">
                    <h4 className="sd-widget-title"><i className="fas fa-clock me-2" />Opening Hours</h4>
                    <ul className="sd-hours-list">
                        <li><span>Monday – Friday</span><span>9:00 AM – 9:00 PM</span></li>
                        <li><span>Saturday</span><span>8:00 AM – 10:00 PM</span></li>
                        <li><span>Sunday</span><span>10:00 AM – 8:00 PM</span></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default ServicesSidebar