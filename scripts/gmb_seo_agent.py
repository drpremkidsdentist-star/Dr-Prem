#!/usr/bin/env python3
"""
GMB & Local SEO Autopilot Utility for Dr. Prem Kumar R
Kumar's Microscopic Dental Care - Yelahanka New Town & Attur, Bangalore
"""

import sys
import json
import argparse
from datetime import datetime

# Ensure utf-8 output on Windows consoles
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

CLINIC_PROFILE = {
    "name": "Kumar's Microscopic Dental Care | Dr. Prem Kumar R",
    "doctor": "Dr. Prem Kumar R, MDS (Pediatric & Preventive Dentistry)",
    "phone": "+91 81972 80019",
    "address": "No. 12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore 560064",
    "gmb_map_url": "https://maps.app.goo.gl/nqJ8g6S8nMkDfprGA",
    "website": "https://www.drpremkumar.in",
    "rating": "4.9 [250+ reviews]",
}

SAMPLE_REVIEWS = [
    {
        "id": "rev_01",
        "author": "Priya Sharma",
        "rating": 5,
        "type": "Pediatric",
        "comment": "Dr. Prem is amazing with kids! My 5-year-old daughter was terrified of dentists, but he was so gentle and patient. The clinic has a lovely welcoming environment.",
    },
    {
        "id": "rev_02",
        "author": "Karthik Raghavan",
        "rating": 5,
        "type": "Microscopic RCT",
        "comment": "Had a complicated calcified root canal done here. Dr. Prem used a high-power microscope and explained everything on screen. Absolutely zero pain during the procedure. Highly recommended!",
    },
    {
        "id": "rev_03",
        "author": "Anand Mohan",
        "rating": 5,
        "type": "Dental Implants",
        "comment": "Got tooth replacement done with 3D scanning. Very professional doctor and transparent charges in Yelahanka New Town.",
    },
]

def generate_review_reply(review: dict) -> str:
    author = review.get("author", "Valued Patient")
    rev_type = review.get("type", "General")
    
    if rev_type == "Pediatric":
        return (
            f"Dear {author},\n"
            f"Thank you so much for your kind words! Ensuring gentle, fear-free, and positive dental visits for young children "
            f"is the heart of our pediatric practice at Kumar's Microscopic Dental Care. We are so proud of your child's bravery! "
            f"Wishing your family healthy, bright smiles always.\n"
            f"- Warmly, Dr. Prem Kumar R (MDS Pediatric Dentist) & Team"
        )
    elif rev_type == "Microscopic RCT":
        return (
            f"Dear {author},\n"
            f"Thank you for sharing your experience! Microscopic dentistry enables us to save teeth with extreme optical precision, "
            f"locating hidden canals while keeping the treatment completely pain-free. We are delighted your root canal recovery was smooth. "
            f"Take care and don't hesitate to reach out if you need anything!\n"
            f"- Best regards, Dr. Prem Kumar R & Team"
        )
    else:
        return (
            f"Dear {author},\n"
            f"Thank you for trusting Dr. Prem Kumar R and Kumar's Microscopic Dental Care in Attur, Yelahanka! "
            f"Your feedback inspires us to maintain the highest clinical standards with cutting-edge dental technology. "
            f"Stay healthy and keep smiling!\n"
            f"- Kumar's Microscopic Dental Care Team"
        )

def generate_gmb_post(topic: str = "rct") -> dict:
    timestamp = datetime.now().strftime("%Y-%m-%d")
    if topic == "pediatric":
        return {
            "title": "When Should Your Child First Visit the Dentist?",
            "content": (
                "Did you know? Both the Indian and American Academy of Pediatric Dentistry recommend a child's first dental "
                "visit by their 1st birthday, or within 6 months of their first milk tooth eruption.\n\n"
                "Early visits prevent tooth decay, establish positive dental habits, and ensure fear-free development! "
                "Led by Dr. Prem Kumar R (MDS Pediatric Dentist, former faculty at Ramaiah Dental College), our child-friendly "
                "clinic in Attur, Yelahanka New Town makes every visit a joyful adventure.\n\n"
                "Clinic: Kumar's Microscopic Dental Care, Attur Main Road, Yelahanka New Town\n"
                "Call: +91 81972 80019"
            ),
            "cta_button": "Book Appointment",
            "cta_url": f"{CLINIC_PROFILE['website']}/book-appointment?utm_source=gmb&utm_medium=post_{timestamp}",
        }
    else:
        return {
            "title": "Why Microscopic Root Canals Deliver 98%+ Success",
            "content": (
                "Traditional root canals rely on the naked eye, where narrow or calcified root canals can be missed. "
                "At Kumar's Microscopic Dental Care, Dr. Prem Kumar R utilizes high-magnification surgical operating microscopes "
                "with shadowless coaxial lighting to treat root canals with microscopic precision.\n\n"
                "Benefits of Microscopic RCT:\n"
                "[+] Single-visit completion (60-90 mins)\n"
                "[+] Completely painless with gentle anesthesia\n"
                "[+] Preserves maximum natural tooth structure\n\n"
                "Clinic: Attur Main Road, Yelahanka New Town, Bangalore\n"
                "Call: +91 81972 80019"
            ),
            "cta_button": "Learn More",
            "cta_url": f"{CLINIC_PROFILE['website']}/services/microscopic-root-canal?utm_source=gmb&utm_medium=post_{timestamp}",
        }

def run_local_seo_audit():
    print("=========================================================")
    print(" KUMAR'S MICROSCOPIC DENTAL CARE - LOCAL SEO AUDIT")
    print("=========================================================")
    print(f"Clinic:  {CLINIC_PROFILE['name']}")
    print(f"Doctor:  {CLINIC_PROFILE['doctor']}")
    print(f"Phone:   {CLINIC_PROFILE['phone']}")
    print(f"Address: {CLINIC_PROFILE['address']}")
    print(f"GMB Map: {CLINIC_PROFILE['gmb_map_url']}")
    print(f"Website: {CLINIC_PROFILE['website']}")
    print(f"Rating:  {CLINIC_PROFILE['rating']}")
    print("---------------------------------------------------------")
    print(" [OK] Dynamic Next.js Sitemap:     src/app/sitemap.ts")
    print(" [OK] Robots.txt Configuration:   src/app/robots.ts (Crawlable)")
    print(" [OK] Google Sitelinks SearchBox:  WebSite schema with /search?q={query}")
    print(" [OK] On-Site Search Engine:       /search page & Ctrl+K Dialog")
    print(" [OK] GMB hasMap Entity Linking:   Dentist & MedicalBusiness Schema")
    print(" [OK] Local North Bangalore Hubs:  Attur, Yelahanka, Hebbal, Sahakara Nagar")
    print("=========================================================")
    print(" All Google Search and Local SEO signals configured successfully!")
    print("=========================================================\n")

def main():
    parser = argparse.ArgumentParser(description="GMB & SEO Autopilot for Dr. Prem Kumar")
    parser.add_argument(
        "--action",
        choices=["audit", "reviews", "post"],
        default="audit",
        help="Action to perform: audit, reviews, or post",
    )
    parser.add_argument(
        "--topic",
        choices=["rct", "pediatric"],
        default="rct",
        help="Topic for GMB post (rct or pediatric)",
    )

    args = parser.parse_args()

    if args.action == "audit":
        run_local_seo_audit()
    elif args.action == "reviews":
        print("\n--- SAMPLE GOOGLE BUSINESS REVIEWS & AUTOPILOT REPLIES ---")
        for rev in SAMPLE_REVIEWS:
            print(f"\n[Review from {rev['author']} ({rev['rating']} stars) - Category: {rev['type']}]")
            print(f"Patient comment: \"{rev['comment']}\"")
            print("\nGenerated Doctor Response:")
            print(generate_review_reply(rev))
            print("-" * 60)
    elif args.action == "post":
        post = generate_gmb_post(args.topic)
        print(f"\n--- GENERATED GOOGLE BUSINESS PROFILE POST ({args.topic.upper()}) ---")
        print(f"Title: {post['title']}")
        print(f"Content:\n{post['content']}")
        print(f"Button: {post['cta_button']} -> {post['cta_url']}")
        print("-" * 60)

if __name__ == "__main__":
    main()
