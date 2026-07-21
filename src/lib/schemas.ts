export function PersonSchema(data: {
  name: string;
  jobTitle: string;
  description: string;
  image: string;
  url: string;
  sameAs: string[];
  worksFor: { name: string; url: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    jobTitle: data.jobTitle,
    description: data.description,
    image: data.image,
    url: data.url,
    sameAs: data.sameAs,
    worksFor: {
      "@type": "Organization",
      name: data.worksFor.name,
      url: data.worksFor.url,
    },
  };
}

export function DentistSchema(data: {
  name: string;
  description: string;
  image: string;
  url: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: { latitude: number; longitude: number };
  telephone: string;
  openingHours: string[];
  priceRange: string;
  sameAs?: string[];
  areaServed?: string[];
  aggregateRating?: { ratingValue: string; reviewCount: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": data.url,
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
    telephone: data.telephone,
    openingHours: data.openingHours,
    priceRange: data.priceRange,
    medicalSpecialty: "Microscopic Dentistry",
    sameAs: data.sameAs,
    areaServed: data.areaServed?.map((area) => ({ "@type": "City", name: area })),
    aggregateRating: data.aggregateRating
      ? {
          "@type": "AggregateRating",
          ratingValue: data.aggregateRating.ratingValue,
          reviewCount: data.aggregateRating.reviewCount,
          bestRating: "5",
          worstRating: "1",
        }
      : undefined,
    availableService: [
      { "@type": "MedicalProcedure", name: "Microscopic Root Canal Treatment" },
      { "@type": "MedicalProcedure", name: "Dental Implants" },
      { "@type": "MedicalProcedure", name: "Smile Design" },
      { "@type": "MedicalProcedure", name: "Pediatric Dentistry" },
      { "@type": "MedicalProcedure", name: "Cosmetic Dentistry" },
    ],
  };
}

export function MedicalBusinessSchema(data: {
  name: string;
  description: string;
  image: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: { latitude: number; longitude: number };
  openingHours: string[];
  priceRange: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": data.url,
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
    telephone: data.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
    openingHours: data.openingHours,
    priceRange: data.priceRange,
    medicalSpecialty: ["Microscopic Dentistry", "Pediatric Dentistry", "Cosmetic Dentistry", "Dental Implants"],
    areaServed: [
      { "@type": "City", name: "Attur" },
      { "@type": "City", name: "Yelahanka" },
      { "@type": "City", name: "Hebbal" },
      { "@type": "City", name: "Doddaballapur" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Bengaluru" },
    ],
  };
}

export function LocalBusinessSchema(data: {
  name: string;
  description: string;
  image: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: { latitude: number; longitude: number };
  openingHours: string[];
  priceRange?: string;
  areaServed?: string[];
  sameAs?: string[];
  parentOrganization?: { name: string; url: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": data.url,
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
    telephone: data.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
    openingHours: data.openingHours,
    priceRange: data.priceRange,
    areaServed: data.areaServed?.map((area) => ({ "@type": "City", name: area })),
    sameAs: data.sameAs,
    parentOrganization: data.parentOrganization
      ? {
          "@type": "Organization",
          name: data.parentOrganization.name,
          url: data.parentOrganization.url,
        }
      : undefined,
  };
}

export function ArticleSchema(data: {
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: { name: string; url?: string };
  publisher: { name: string; logo: string };
  articleBody?: string;
  keywords?: string[];
  articleSection?: string;
  mainEntityOfPage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    image: data.image,
    url: data.url,
    datePublished: data.datePublished,
    dateModified: data.dateModified ?? data.datePublished,
    author: {
      "@type": "Person",
      name: data.author.name,
      url: data.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: data.publisher.name,
      logo: {
        "@type": "ImageObject",
        url: data.publisher.logo,
      },
    },
    keywords: data.keywords,
    articleSection: data.articleSection,
    articleBody: data.articleBody,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.mainEntityOfPage ?? data.url,
    },
  };
}

export function OrganizationSchema(data: {
  name: string;
  description: string;
  url: string;
  logo: string;
  image: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    telephone: string;
    contactType: string;
  }[];
  sameAs?: string[];
  aggregateRating?: { ratingValue: string; reviewCount: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    description: data.description,
    url: data.url,
    logo: data.logo,
    image: data.image,
    sameAs: data.sameAs,
    aggregateRating: data.aggregateRating
      ? {
          "@type": "AggregateRating",
          ratingValue: data.aggregateRating.ratingValue,
          reviewCount: data.aggregateRating.reviewCount,
          bestRating: "5",
          worstRating: "1",
        }
      : undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    contactPoint: data.contactPoint.map((point) => ({
      "@type": "ContactPoint",
      telephone: point.telephone,
      contactType: point.contactType,
      availableLanguage: ["English", "Hindi", "Kannada", "Tamil"],
    })),
  };
}

export function BreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.drpremkumar.in${item.href}`,
    })),
  };
}

export function WebSiteSchema(data: {
  name: string;
  url: string;
  description: string;
  publisher: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: data.name,
    url: data.url,
    description: data.description,
    publisher: {
      "@type": "Person",
      name: data.publisher,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${data.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function ServiceSchema(data: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    provider: {
      "@type": "Person",
      name: "Dr. Prem Kumar",
    },
    serviceType: "Dental Service",
    url: data.url,
  };
}

export function MedicalProcedureSchema(data: {
  name: string;
  description: string;
  howPerformed: string;
  preparation?: string;
  recoveryTime?: string;
  followup?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: data.name,
    description: data.description,
    howPerformed: data.howPerformed,
    preparation: data.preparation,
    recoveryTime: data.recoveryTime,
    followup: data.followup,
  };
}

export function ReviewSchema(data: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  itemReviewed: { name: string; author: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: data.author,
    },
    datePublished: data.datePublished,
    reviewRating: {
      "@type": "Rating",
      ratingValue: data.rating,
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: data.reviewBody,
    itemReviewed: {
      "@type": "Dentist",
      name: data.itemReviewed.name,
      author: {
        "@type": "Person",
        name: data.itemReviewed.author,
      },
    },
  };
}

export function AggregateRatingSchema(data: {
  ratingValue: number;
  reviewCount: number;
  itemReviewed: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: data.ratingValue,
    reviewCount: data.reviewCount,
    itemReviewed: {
      "@type": "Dentist",
      name: data.itemReviewed,
    },
  };
}

export function VideoObjectSchema(data: {
  name: string;
  description: string;
  thumbnailUrl: string | string[];
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string;
  description_transcript?: string;
  interactionStatistic?: {
    viewCount?: number;
    likeCount?: number;
  };
  publisher?: { name: string; logo?: string };
  creator?: { name: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: data.name,
    description: data.description,
    thumbnailUrl: Array.isArray(data.thumbnailUrl)
      ? data.thumbnailUrl
      : [data.thumbnailUrl],
    uploadDate: data.uploadDate,
    contentUrl: data.contentUrl,
    embedUrl: data.embedUrl,
    duration: data.duration,
    transcript: data.description_transcript,
    interactionStatistic: data.interactionStatistic
      ? {
          "@type": "InteractionCounter",
          interactionType: "https://schema.org/WatchAction",
          userInteractionCount: data.interactionStatistic.viewCount ?? 0,
        }
      : undefined,
    publisher: data.publisher
      ? {
          "@type": "Organization",
          name: data.publisher.name,
          logo: data.publisher.logo
            ? { "@type": "ImageObject", url: data.publisher.logo }
            : undefined,
        }
      : undefined,
    creator: data.creator
      ? { "@type": "Person", name: data.creator.name }
      : undefined,
  };
}

export function CollectionPageSchema(data: {
  name: string;
  description: string;
  url: string;
  itemListElement?: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: data.name,
    description: data.description,
    url: data.url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: (data.itemListElement ?? []).map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

export function MedicalWebPageSchema(data: {
  name: string;
  description: string;
  url: string;
  breadcrumb?: { name: string; href: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: data.name,
    description: data.description,
    url: data.url,
    lastReviewed: new Date().toISOString(),
    breadcrumb: data.breadcrumb
      ? BreadcrumbSchema(data.breadcrumb)
      : undefined,
  };
}

export function ImageObjectSchema(data: {
  name: string;
  description: string;
  contentUrl: string;
  thumbnailUrl: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: data.name,
    description: data.description,
    contentUrl: data.contentUrl,
    thumbnailUrl: data.thumbnailUrl,
    author: data.author ? { "@type": "Person", name: data.author } : undefined,
  };
}

export function FAQSchema(faqs: { question: string; answer: string }[]) {
  return {
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
  };
}

export function AppointmentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Appointment",
    organizer: {
      "@type": "Person",
      name: "Dr. Prem Kumar",
    },
    location: {
      "@type": "Place",
      name: "Dr. Prem Kumar Dental Clinic",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Attur Layout, Yelahanka",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560064",
        addressCountry: "IN",
      },
    },
  };
}

export function SpeakableSchema(selectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    cssSelector: selectors,
  };
}
