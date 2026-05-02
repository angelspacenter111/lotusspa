'use client';

import React from 'react';
import { contact } from '@/app/info';

const WhatsAppButton = () => {
    // Ensure contact is treated as a string and extract only the numbers
    const formattedContact = contact ? String(contact).replace(/\D/g, '') : '';
    // If it's a 10-digit Indian number, automatically prepend '91' 
    const waNumber = formattedContact.length === 10 ? `91${formattedContact}` : formattedContact;

    return (
        <a
            href={`https://wa.me/${waNumber}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                backgroundColor: '#25D366',
                color: '#FFF',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '35px',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                zIndex: 9999,
                textDecoration: 'none',
                transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            aria-label="Chat on WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    );
};

export default WhatsAppButton;
