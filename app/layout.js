export const metadata = {
  title: 'Hello, Dolphins',
  description: 'A hello world site about dolphins.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
