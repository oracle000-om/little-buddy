import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { StagingBanner } from "@/components/staging-banner";
import "./globals.css";
import "./listings.css";
import "./detail.css";
import "./mill-watch.css";

export const metadata: Metadata = {
    title: "Little Buddy Club",
    description: "Puppies, kittens, and mill survivors — all in one place. Browse adoptable animals and explore industry transparency data.",
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://littlebuddy.club'),
    openGraph: {
        title: "Little Buddy Club",
        description: "Every little buddy deserves a chance — adopt a puppy, kitten, or mill survivor.",
        type: "website",
        siteName: "Little Buddy Club",
    },
    twitter: {
        card: "summary",
        title: "Little Buddy Club",
        description: "Puppies, kittens, and mill survivors looking for homes.",
    },
};

export const viewport: Viewport = {
    themeColor: "#2D7A86",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <StagingBanner />
                <header className="header">
                    <div className="container">
                        <Link href="/" className="header__logo">
                            <span className="header__logo-icon">🐾</span>
                            <span className="header__logo-text">Little Buddy <span>Club</span></span>
                        </Link>
                        <input type="checkbox" id="nav-toggle" className="header__nav-toggle" aria-label="Toggle navigation" />
                        <label htmlFor="nav-toggle" className="header__hamburger" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <nav>
                            <ul className="header__nav">
                                <li><Link href="/">Listings</Link></li>
                                <li><Link href="/mill-watch">Industry Watch</Link></li>
                                <li><Link href="/about">About</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <main>
                    {children}
                </main>

                <footer className="footer">
                    <div className="container">
                        <p className="footer__tagline">Every little buddy deserves a chance.</p>
                        <p>Little Buddy Club &copy; 2026</p>
                        <div className="footer__links">
                            <Link href="/about">About</Link>
                            <span className="footer__sep">·</span>
                            <a href="https://goldenyears.club" target="_blank" rel="noopener">Golden Years Club</a>
                            <span className="footer__sep">·</span>
                            <a href="https://sniffhome.org" target="_blank" rel="noopener">Sniff</a>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
