import "./globals.css";

export const metadata = {
  title: "Lip Blushing in Delhi | Natural Korean Lip Tint",
  description:
    "Get premium Lip Blushing in Delhi with Korean techniques. Safe, natural, long-lasting lip tint. Book now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Lip Blushing Delhi",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressCountry: "India",
              },
              telephone: "+918750427198",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
