import type { Metadata } from 'next';
import ModernNavbar from './components/ModernNavbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import CategorySection from './components/CategorySection';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Ali Bags82 | Premium Leather Bags in Pakistan',
  description: 'Design and order custom premium leather bags in Pakistan. Enjoy cash on delivery, 100% genuine leather, and exquisite craftsmanship.',
  keywords: ['leather bags pakistan', 'custom bags', 'buy leather bags online', 'Ali Bags82'],
  openGraph: {
    title: 'Ali Bags82 | Premium Leather Bags',
    description: 'Design your perfect leather bag today.',
    url: 'https://latherbags82.myshopify.com',
    siteName: 'Ali Bags82',
    locale: 'en_PK',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-vh-100 bg-white overflow-hidden">
      <ModernNavbar />
      
      {/* Schema Markup for Local Business (Pakistan) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            "name": "Ali Bags82",
            "image": "https://latherbags82.myshopify.com/logo.png",
            "description": "Premium leather bags and customization in Pakistan.",
            "url": "https://latherbags82.myshopify.com",
            "telephone": "+923000000000",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "PK"
            },
            "priceRange": "$$"
          })
        }}
      />

      <HeroSection />
      <AboutUs />
      <CategorySection />
      <FeaturedProducts />
      <Testimonials />
      <PreFooter />
      <Footer />
    </main>
  );
}
