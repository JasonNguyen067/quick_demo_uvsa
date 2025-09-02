import "./globals.css";
import Navbar from "./components/navbar";
import Imagedescription from "./components/imagedescription";

export const metadata = {
  title: "UVSA Demo",
  description: "A clean site with navbar + typewriter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>   {/* Always at the top */}
        {children}   {/* Page content */}
      </body>
    </html>
  );
}
