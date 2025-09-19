export const metadata = {
  title: "Den-Marafon",
  description: "Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
