
import "./globals.css";
import HeadSchema from "./components/HeadSchema";
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />

				<meta name="robots" content="index, follow" />
				<meta name="geo.region" content="IN-MH" />
				<meta name="geo.placename" content="Mumbai" />


				<link rel="icon" type="image/x-icon" href="http://localhost:3000/assets/logot.png"></link>
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
