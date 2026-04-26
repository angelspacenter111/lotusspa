import React from 'react'
import { name, image_url, base_url, email, contact, address } from '@/app/info'

export default function HeadSchema() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Spa and Massage Center",
        "name": name,
        "image": image_url,
        "url": base_url,
        "telephone": contact,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": address,
            "addressLocality": "Malad",
            "addressRegion": "Mumbai",
            "postalCode": "400064",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "19.1869",
            "longitude": "72.8486"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "10:00",
            "closes": "22:00"
        },
        "priceRange": "₹500-₹5000",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}
