
import "./globals.css";
import HeadSchema from "./components/HeadSchema";
import second from '@/app/components/WhatsAppButton'

export const metadata = {
	robots: "index, follow",
	verification: {
		google: "-Fh3HXsAeNhlvKE-0Z4BzNo5-G2Q-EGJvIqHIXenIQ4",
	},
	other: {
		"geo.region": "IN-MH",
		"geo.placename": "Mumbai"
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="https://lotusspainmalad.vercel.app/logot.png"></link>
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
				<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
				<link rel="stylesheet" href="style.css" />
				<HeadSchema />
			</head>
			<body>{children}</body>
		</html>
	);
}
