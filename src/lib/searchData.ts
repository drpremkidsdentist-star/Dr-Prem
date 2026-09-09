export interface SearchItem {
  id: string;
  title: string;
  category: "Treatment" | "Symptom" | "Location" | "Doctor" | "Guide" | "FAQ";
  description: string;
  keywords: string[];
  href: string;
  actionText?: string;
}

export const searchableCatalog: SearchItem[] = [
  // --- TREATMENTS ---
  {
    id: "microscopic-rct",
    title: "Microscopic Root Canal Treatment (RCT)",
    category: "Treatment",
    description: "Painless, single-visit root canal performed under high-power surgical operating microscopes for calcified and complex canals.",
    keywords: ["root canal", "rct", "painless rct", "toothache", "nerve pain", "calcified canal", "microscope", "endodontics", "single visit root canal"],
    href: "/services/microscopic-root-canal",
    actionText: "Learn About RCT",
  },
  {
    id: "pediatric-dentistry",
    title: "Specialist Pediatric & Kids Dentistry",
    category: "Treatment",
    description: "Fear-free, gentle dentistry for children, toddlers, and special needs kids. Child behavior guidance, zirconia crowns, and cavity prevention.",
    keywords: ["kids dentist", "pediatric dentist", "children teeth", "baby teeth", "milk tooth cavity", "pulpotomy", "fluoride", "kids crown", "nitrous oxide"],
    href: "/services/pediatric-dentistry",
    actionText: "Explore Kids Care",
  },
  {
    id: "dental-implants",
    title: "Precision Dental Implants",
    category: "Treatment",
    description: "Permanent, natural-looking titanium and zirconia dental implants planned with 3D CBCT digital imaging for lifetime tooth replacement.",
    keywords: ["dental implants", "tooth replacement", "missing tooth", "titanium implant", "cbct", "artificial tooth", "permanent teeth", "fixed teeth"],
    href: "/services/dental-implants",
    actionText: "View Implant Care",
  },
  {
    id: "smile-design-aligners",
    title: "Clear Aligners & Digital Smile Design",
    category: "Treatment",
    description: "Invisalign and clear aligners to straighten crooked teeth without metal braces. Includes 3D digital simulation of your new smile.",
    keywords: ["clear aligners", "invisalign", "invisible braces", "teeth straightening", "smile makeover", "gap between teeth", "crooked teeth", "orthodontics"],
    href: "/services/smile-design",
    actionText: "Explore Aligners",
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry & Porcelain Veneers",
    category: "Treatment",
    description: "Custom aesthetic veneers, ultra-thin laminates, dental bonding, and professional laser teeth whitening for a confident, bright smile.",
    keywords: ["cosmetic dentistry", "veneers", "porcelain veneers", "teeth whitening", "dental bonding", "yellow teeth", "stained teeth", "hollywood smile"],
    href: "/services/cosmetic-dentistry",
    actionText: "View Cosmetic Options",
  },
  {
    id: "laser-dentistry",
    title: "Soft-Tissue Laser Dentistry",
    category: "Treatment",
    description: "Minimally invasive, scalpel-free dental treatments using advanced lasers for faster healing, zero stitches, and painless gum treatments.",
    keywords: ["laser dentistry", "scalpel free", "bleeding gums", "frenectomy", "tongue tie", "gum contouring", "painless laser", "laser treatment"],
    href: "/services/laser-dentistry",
    actionText: "Explore Laser Dentistry",
  },
  {
    id: "preventive-care",
    title: "Preventive Care, Cleanings & Checkups",
    category: "Treatment",
    description: "Ultrasonic scaling, deep plaque removal, enamel remineralization, and customized preventive dental care for the entire family.",
    keywords: ["cleaning", "scaling", "teeth cleaning", "tartar removal", "bad breath", "checkup", "dental hygiene", "preventive dentistry"],
    href: "/services/preventive-care",
    actionText: "View Preventive Care",
  },

  // --- SYMPTOMS & CONCERNS ---
  {
    id: "symptom-severe-toothache",
    title: "Severe Toothache or Sensitivity to Hot/Cold",
    category: "Symptom",
    description: "Deep throbbing pain, nocturnal toothache, or sharp sensitivity usually indicates pulp inflammation or deep decay treatable with microscopic RCT.",
    keywords: ["toothache", "pain", "hot cold sensitivity", "throbbing tooth", "night pain", "decay pain", "nerve infection"],
    href: "/services/microscopic-root-canal",
    actionText: "Emergency RCT Solutions",
  },
  {
    id: "symptom-kids-cavity",
    title: "Cavities or Black Spots on Child's Teeth",
    category: "Symptom",
    description: "Early childhood caries or bottle tooth decay in toddlers can spread fast. Dr. Prem offers gentle tooth-colored fillings and pediatric crowns.",
    keywords: ["child toothache", "baby tooth black spot", "kids cavity", "child hole in tooth", "bottle tooth decay", "milk tooth pain"],
    href: "/services/pediatric-dentistry",
    actionText: "Book Gentle Kids Visit",
  },
  {
    id: "symptom-bleeding-gums",
    title: "Bleeding Gums, Bad Breath or Gum Swelling",
    category: "Symptom",
    description: "Bleeding while brushing or persistent swollen gums indicates gingivitis or periodontitis. Effectively treated with painless laser therapy.",
    keywords: ["bleeding gums", "blood in spit", "bad breath", "halitosis", "swollen gums", "gum infection", "gingivitis", "periodontitis"],
    href: "/services/laser-dentistry",
    actionText: "Check Gum Treatments",
  },
  {
    id: "symptom-crooked-teeth",
    title: "Crooked, Crowded or Spaced Teeth",
    category: "Symptom",
    description: "Misaligned teeth affect chewing, speech, and confidence. Correct them discreetly with transparent, removable clear aligners.",
    keywords: ["crooked teeth", "forward teeth", "spaced teeth", "overlapping teeth", "teeth gap", "ugly smile", "bite issue"],
    href: "/services/smile-design",
    actionText: "Check Clear Aligners",
  },
  {
    id: "symptom-broken-tooth",
    title: "Broken, Chipped or Cracked Tooth",
    category: "Symptom",
    description: "Trauma or biting hard food can crack dental enamel. We restore natural tooth strength with microscopic biomimetic bonding or crowns.",
    keywords: ["broken tooth", "chipped tooth", "cracked enamel", "fractured tooth", "sports dental injury", "crown"],
    href: "/services",
    actionText: "Explore Tooth Repair",
  },

  // --- LOCATIONS ---
  {
    id: "location-attur",
    title: "Attur Flagship Clinic (Yelahanka New Town)",
    category: "Location",
    description: "No. 12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore 560064. Flagship clinic with surgical microscopes, kids operatory, and digital imaging.",
    keywords: ["attur", "attur main road", "yelahanka new town", "attur layout", "dental clinic attur", "dentist near attur", "north bangalore"],
    href: "/locations/attur",
    actionText: "Get Clinic Directions",
  },
  {
    id: "location-yelahanka",
    title: "Yelahanka Clinic Hub",
    category: "Location",
    description: "Serving families across Yelahanka, Yelahanka Old Town, Kogilu, and Judicial Layout with premier microscopic dental care.",
    keywords: ["yelahanka", "yelahanka new town", "yelahanka old town", "kogilu", "judicial layout", "dentist yelahanka"],
    href: "/locations/yelahanka",
    actionText: "Visit Yelahanka Page",
  },
  {
    id: "location-hebbal",
    title: "Hebbal & Manyata Tech Park Service Area",
    category: "Location",
    description: "Conveniently accessible for patients from Hebbal, Kodigehalli, Sahakara Nagar, and Manyata Embassy Business Park.",
    keywords: ["hebbal", "manyata tech park", "kodigehalli", "sahakara nagar", "dentist near hebbal", "north bangalore dentist"],
    href: "/locations/hebbal",
    actionText: "View Hebbal Access",
  },
  {
    id: "location-sahakara-nagar",
    title: "Sahakara Nagar Hub",
    category: "Location",
    description: "Premium pediatric and microscopic dentistry within a quick 10-minute drive from Sahakara Nagar, Amruthahalli, and Bellary Road.",
    keywords: ["sahakara nagar", "amruthahalli", "bellary road", "dentist sahakara nagar"],
    href: "/locations/sahakara-nagar",
    actionText: "View Location Details",
  },
  {
    id: "location-vidyaranyapura",
    title: "Vidyaranyapura & BEL Layout Hub",
    category: "Location",
    description: "Specialist pediatric dentistry & microscopic root canals for Vidyaranyapura families, directly bordering our Attur clinic.",
    keywords: ["vidyaranyapura", "bel layout", "hmt layout", "dentist vidyaranyapura", "kids dentist vidyaranyapura"],
    href: "/locations/vidyaranyapura",
    actionText: "View Vidyaranyapura Details",
  },
  {
    id: "location-jakkur",
    title: "Jakkur & Plantation Hub",
    category: "Location",
    description: "High-precision microscopic dental treatments and fear-free kids care for Jakkur, Jakkur Plantation, and Bellary Highway residents.",
    keywords: ["jakkur", "jakkur aerodrome", "dentist jakkur", "kids dentist jakkur"],
    href: "/locations/jakkur",
    actionText: "View Jakkur Details",
  },
  {
    id: "location-kogilu",
    title: "Kogilu & Yelahanka Bypass Hub",
    category: "Location",
    description: "Immediate 5-minute access from Kogilu Cross and Yelahanka bypass for emergency root canals and children's dentistry.",
    keywords: ["kogilu", "kogilu cross", "dentist kogilu", "pediatric dentist kogilu"],
    href: "/locations/kogilu",
    actionText: "View Kogilu Details",
  },
  {
    id: "location-kodigehalli",
    title: "Kodigehalli & Thindlu Hub",
    category: "Location",
    description: "Gentle pediatric dentistry and painless single-visit root canals for Kodigehalli and Thindlu Circle residents.",
    keywords: ["kodigehalli", "thindlu", "dentist kodigehalli", "kids dentist kodigehalli"],
    href: "/locations/kodigehalli",
    actionText: "View Kodigehalli Details",
  },
  {
    id: "location-doddaballapur",
    title: "Doddaballapur & Rajankunte Area",
    category: "Location",
    description: "Specialist referral center for pediatric dental care and micro-endodontics for patients across Doddaballapur Road and Rajankunte.",
    keywords: ["doddaballapur", "rajankunte", "doddaballapur road", "maruthi nagar", "north bengaluru"],
    href: "/locations/doddaballapur",
    actionText: "View Doddaballapur Info",
  },

  // --- DOCTOR & CLINIC CREDENTIALS ---
  {
    id: "doctor-prem-kumar",
    title: "Dr. Prem Kumar R (MDS Pediatric & Preventive Dentistry)",
    category: "Doctor",
    description: "Bangalore's leading microscopic dentist & pediatric specialist. Former Assistant Professor at M.S. Ramaiah Dental College with 6+ years of clinical excellence.",
    keywords: ["dr prem kumar", "dr prem kumar r", "mds pediatric dentist", "ramaiah dental college", "qualifications", "experience", "specialist"],
    href: "/about/dr-prem-kumar",
    actionText: "Read Doctor Biography",
  },
  {
    id: "microscopic-technology",
    title: "Dental Operating Microscope Technology",
    category: "Doctor",
    description: "Why magnification matters: 25x optical magnification and coaxial shadowless LED lighting to treat what the naked eye cannot see.",
    keywords: ["dental operating microscope", "magnification", "precision dentistry", "technology", "cbct", "digital dentistry"],
    href: "/technology",
    actionText: "Discover Technology",
  },

  // --- GUIDES & FAQS ---
  {
    id: "faq-root-canal-cost",
    title: "Root Canal Treatment Cost & Duration in Bangalore",
    category: "FAQ",
    description: "Most microscopic root canals are completed in 60–90 minutes in a single visit. High success rates and transparent pricing.",
    keywords: ["cost", "price", "rct cost", "root canal price", "duration", "single visit", "how long rct takes"],
    href: "/faq",
    actionText: "Read FAQ Answers",
  },
  {
    id: "faq-kids-first-visit",
    title: "When Should My Child Have Their First Dental Visit?",
    category: "FAQ",
    description: "The American and Indian Academy of Pediatric Dentistry recommend the first dental visit by age 1 or within 6 months of the first tooth eruption.",
    keywords: ["child first dental visit", "age for dentist", "baby first checkup", "toddler dental exam", "pediatric advice"],
    href: "/knowledge-center/pediatric-dental-care",
    actionText: "Read Kids Guide",
  },
  {
    id: "book-appointment-direct",
    title: "Book Consultation & Appointment Online",
    category: "Guide",
    description: "Choose your preferred date, time slot, and specialist treatment for immediate confirmation at Dr. Prem Kumar's Attur clinic.",
    keywords: ["book appointment", "appointment", "consultation", "timing", "schedule", "phone number", "contact", "visit"],
    href: "/book-appointment",
    actionText: "Book Appointment Now",
  },
];

export function searchCatalog(query: string): SearchItem[] {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return [];

  const terms = cleanQuery.split(/\s+/).filter(Boolean);

  return searchableCatalog
    .map((item) => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const descLower = item.description.toLowerCase();
      const categoryLower = item.category.toLowerCase();

      // Exact title match gets highest score
      if (titleLower === cleanQuery) score += 100;
      else if (titleLower.includes(cleanQuery)) score += 50;

      // Check each term against title, keywords, and description
      for (const term of terms) {
        if (titleLower.includes(term)) score += 30;
        if (item.keywords.some((k) => k.toLowerCase().includes(term))) score += 20;
        if (descLower.includes(term)) score += 10;
        if (categoryLower === term) score += 15;
      }

      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.item);
}
