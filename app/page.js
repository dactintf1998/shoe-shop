import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { featuredProducts } from "@/lib/products";
import { Contact, Why } from "@/lib/contact"
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedProducts products={featuredProducts} />
        <Why />
        <Contact />
      </main>
    </>
  );
}
