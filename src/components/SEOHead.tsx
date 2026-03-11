import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const BASE_URL = "https://kefejoias.com.br";
const DEFAULT_OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6de301e3-6665-4fbf-bead-fabf2fde3acd/id-preview-43cf2232--c9f46a1b-dd19-4c7e-b3e1-3083f2ae072a.lovable.app-1773156310840.png";

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd,
  noindex = false,
}: SEOHeadProps) => {
  const location = useLocation();
  const canonicalUrl = canonical || `${BASE_URL}${location.pathname}`;
  const fullTitle = title.includes("Kefe") ? title : `${title} | Kefe Joias`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    if (noindex) setMeta("robots", "noindex, nofollow");

    // Open Graph
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:type", ogType, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:site_name", "Kefe Joias", true);
    setMeta("og:locale", "pt_BR", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;

    // JSON-LD
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach((s) => s.remove());

    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((item) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }

    return () => {
      const scripts = document.querySelectorAll('script[data-seo-jsonld]');
      scripts.forEach((s) => s.remove());
    };
  }, [fullTitle, description, canonicalUrl, ogImage, ogType, jsonLd, noindex]);

  return null;
};

export default SEOHead;

// Reusable JSON-LD generators
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: "Kefe Joias",
  url: "https://kefejoias.com.br",
  logo: "https://kefejoias.com.br/favicon.ico",
  description: "Biojoias artesanais com pedras naturais, flores desidratadas e elementos encapsulados em resina.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  telephone: "+5511996470414",
  sameAs: ["https://instagram.com/kefe.joias"],
  priceRange: "$$",
};

export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

export const productJsonLd = (product: {
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  inStock?: boolean;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  url: `https://kefejoias.com.br/produto/${product.slug}`,
  brand: { "@type": "Brand", name: "Kefe Joias" },
  offers: {
    "@type": "Offer",
    price: product.price.toFixed(2),
    priceCurrency: "BRL",
    availability: product.inStock !== false
      ? "https://schema.org/InStock"
      : "https://schema.org/OutOfStock",
    seller: { "@type": "Organization", name: "Kefe Joias" },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "12",
  },
});

export const faqJsonLd = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
