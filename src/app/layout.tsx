import { Providers } from "./provider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Auth App</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
