---
name: gmb-seo-autopilot
description: Autonomous management of Google Business Profile (GMB) and Google Search visibility for Dr. Prem Kumar R's pediatric & microscopic dental practice in Bangalore. Handles patient review responses, local SEO rank tracking, Google Search Console indexing checks, and weekly GMB posts.
---

# Google My Business (GMB) & SEO Autopilot for Dr. Prem Kumar R

This skill equips Antigravity to autonomously manage and monitor the Google ecosystem for **Kumar's Microscopic Dental Care | Dr. Prem Kumar R** (Attur, Yelahanka New Town, Bangalore).

---

## 1. Practice Core Information (Local SEO Anchors)

- **Official Business Name**: Kumar's Microscopic Dental Care | Dr. Prem Kumar R
- **Primary Doctor**: Dr. Prem Kumar R, MDS Pediatric & Preventive Dentistry (Ex-faculty M.S. Ramaiah Dental College)
- **Flagship Location**: No. 12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore – 560064
- **Google Maps Listing**: `https://maps.app.goo.gl/nqJ8g6S8nMkDfprGA`
- **Phone**: `+91 81972 80019` | **Alternate**: `+91 80882 66714`
- **Official Website**: `https://www.drpremkumar.in`
- **Primary Specialties**: Microscopic Root Canal Treatment (RCT), Pediatric & Gentle Kids Dentistry, Dental Implants, Clear Aligners, Laser Dentistry.

---

## 2. Workflows & Capabilities

### Workflow A: Google Reviews Auto-Responder
When the user asks to *"Check new Google reviews"* or *"Reply to GMB reviews"*:
1. Run `python scripts/gmb_seo_agent.py --action reviews` or inspect via the browser agent at `https://business.google.com`.
2. For each unanswered review:
   - **5-Star Pediatric Review**: Warm, reassuring reply acknowledging the child by first name if mentioned, praising their bravery, and highlighting fear-free gentle dental care.
   - **5-Star Root Canal / Adult Review**: Professional reply emphasizing pain-free single-visit microscopic precision and natural tooth preservation.
   - **Critical / Low Rating (< 4 stars)**: Empathetic, calm response offering direct doctor escalation via `+91 81972 80019` without defensive language.

#### Sample Doctor Reply Template:
> *"Dear [Parent/Patient Name], thank you for sharing your experience with Dr. Prem Kumar R at Kumar's Microscopic Dental Care! We are thrilled to hear that [Child/Patient Name] felt comfortable and pain-free during their visit. Ensuring gentle, microscopic precision care for your family's smiles is our greatest passion. Wishing you great oral health!"*

---

### Workflow B: Weekly GMB Post Generator
When asked to *"Create a GMB post"* or *"Draft a Google Business update"*:
1. Generate an engaging 100–150 word post focused on one high-intent topic:
   - Topic 1: *Why Microscopic Dentistry Saves Teeth that Traditional RCT Cannot*
   - Topic 2: *When Should Your Child First Visit a Pediatric Dentist? (Age 1 Rule)*
   - Topic 3: *Pain-Free Laser Gum Care for Children & Adults*
   - Topic 4: *Invisible Clear Aligners vs Traditional Metal Braces*
2. Include a clear Call-To-Action (CTA):
   - **Button**: Book Appointment
   - **URL**: `https://www.drpremkumar.in/book-appointment?utm_source=gmb&utm_medium=post`
   - **Call**: `+91 81972 80019`

---

### Workflow C: Local SEO & Google SERP Rank Health Check
When asked to *"Check Google rankings"* or *"Audit search visibility"*:
1. Run `python scripts/gmb_seo_agent.py --action audit`.
2. Inspect target keyword performance:
   - `pediatric dentist near me` / `kids dentist Bangalore`
   - `microscopic root canal Bangalore` / `painless rct Yelahanka`
   - `dentist in Attur Yelahanka` / `dental clinic near me`
3. Verify that `https://www.drpremkumar.in/sitemap.xml` is reachable and returns HTTP 200 with all valid routes.
4. Verify structured data with Schema.org validators (`Dentist`, `MedicalBusiness`, `WebSite` with `SearchAction`).
