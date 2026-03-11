import {
  ShieldCheck,
  Syringe,
  Scissors,
  Sparkles,
  Smile,
  Crown,
  Stethoscope,
  Scan,
  Heart,
  Brush,
} from "lucide-react";

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: typeof ShieldCheck;
  image: string;
  bg: string;
  duration: string;
  priceRange: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "cavity-protection",
    name: "Cavity Protection",
    tagline: "Prevent decay before it starts",
    description:
      "Advanced cavity prevention using the latest dental sealants and fluoride treatments. We protect your teeth with thorough examinations and personalized care plans.",
    longDescription:
      "Cavities are one of the most common dental problems, but they are also one of the most preventable. At K Dental Hub, our cavity protection program combines cutting-edge dental sealants, professional fluoride applications, and personalized oral hygiene coaching to keep your teeth strong and decay-free. Our team uses digital scanning technology to detect early signs of decay that are invisible to the naked eye, allowing us to intervene before a cavity ever forms.",
    icon: ShieldCheck,
    image:
      "https://images.pexels.com/photos/6502019/pexels-photo-6502019.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bg: "#FFF0D4",
    duration: "30–45 min",
    priceRange: "$75–$200",
    benefits: [
      "Early detection of decay with digital imaging",
      "Long-lasting dental sealants for molars",
      "Professional fluoride treatments",
      "Personalized oral hygiene coaching",
      "Reduced risk of future dental procedures",
    ],
    process: [
      {
        step: "Examination",
        description:
          "Thorough dental examination using digital scanners to identify early signs of decay.",
      },
      {
        step: "Cleaning",
        description:
          "Professional cleaning to remove plaque and tartar buildup from all tooth surfaces.",
      },
      {
        step: "Sealant Application",
        description:
          "Protective sealants applied to the grooves of back teeth to prevent bacteria from settling.",
      },
      {
        step: "Fluoride Treatment",
        description:
          "Professional-strength fluoride application to strengthen tooth enamel.",
      },
    ],
    faqs: [
      {
        question: "How long do dental sealants last?",
        answer:
          "Dental sealants can last up to 10 years with proper care. We check them at every visit and can reapply as needed.",
      },
      {
        question: "Is fluoride treatment safe?",
        answer:
          "Yes, professional fluoride treatments are completely safe and have been proven effective at preventing cavities for decades.",
      },
      {
        question: "At what age should cavity prevention start?",
        answer:
          "We recommend starting cavity prevention as soon as a child's first teeth appear, typically around age 1. Sealants are usually applied when permanent molars come in, around age 6.",
      },
    ],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    tagline: "Save your natural teeth, pain-free",
    description:
      "Pain-free root canal therapy with modern techniques and sedation options. Our specialists ensure comfort while saving your natural teeth from extraction.",
    longDescription:
      "A root canal doesn't have to be something you dread. At K Dental Hub, we use the latest endodontic technology including rotary instruments, digital apex locators, and advanced anesthesia techniques to make root canal therapy as comfortable as a routine filling. Our goal is always to save your natural tooth, preserving your smile and your bite. With sedation options available, even the most anxious patients can relax during treatment.",
    icon: Syringe,
    image:
      "https://images.pexels.com/photos/6627578/pexels-photo-6627578.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bg: "#EDD8FF",
    duration: "60–90 min",
    priceRange: "$300–$1,000",
    benefits: [
      "Pain-free procedure with modern anesthesia",
      "Save your natural tooth from extraction",
      "Same-day treatment available",
      "Sedation options for anxious patients",
      "High success rate (over 95%)",
    ],
    process: [
      {
        step: "Diagnosis",
        description:
          "Digital X-rays and examination to confirm the need for root canal therapy.",
      },
      {
        step: "Anesthesia",
        description:
          "Local anesthesia is administered to ensure complete comfort throughout the procedure.",
      },
      {
        step: "Treatment",
        description:
          "Infected pulp is carefully removed, canals are cleaned, shaped, and disinfected.",
      },
      {
        step: "Restoration",
        description:
          "The tooth is sealed and a crown is placed to restore full function and appearance.",
      },
    ],
    faqs: [
      {
        question: "Does a root canal hurt?",
        answer:
          "With modern anesthesia and techniques, a root canal feels similar to getting a filling. Most patients report feeling little to no discomfort.",
      },
      {
        question: "How long does recovery take?",
        answer:
          "Most patients return to normal activities the same day. Mild soreness may last 2-3 days and can be managed with over-the-counter pain medication.",
      },
      {
        question: "Will I need a crown after a root canal?",
        answer:
          "In most cases, yes. A crown protects the treated tooth and restores its full strength and function.",
      },
    ],
  },
  {
    slug: "oral-surgery",
    name: "Oral Surgery",
    tagline: "Expert surgical care you can trust",
    description:
      "Expert oral surgery procedures including wisdom tooth extraction, dental implants, and corrective jaw surgery performed with precision and care.",
    longDescription:
      "From wisdom tooth extractions to complex corrective jaw procedures, our oral surgery team combines surgical expertise with a patient-first approach. We use 3D imaging and computer-guided surgical planning to ensure precision, minimize recovery time, and deliver optimal outcomes. Every surgical procedure is performed in our fully equipped, state-of-the-art surgical suite with comprehensive monitoring for your safety and comfort.",
    icon: Scissors,
    image:
      "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bg: "#D4EEFF",
    duration: "45–120 min",
    priceRange: "$200–$3,000",
    benefits: [
      "3D imaging for precise surgical planning",
      "Multiple sedation options available",
      "Minimally invasive techniques",
      "Faster recovery times",
      "Comprehensive post-operative care",
    ],
    process: [
      {
        step: "Consultation",
        description:
          "Comprehensive evaluation with 3D imaging to plan your surgical procedure.",
      },
      {
        step: "Pre-operative Prep",
        description:
          "Detailed instructions and pre-surgery preparation to ensure a smooth procedure.",
      },
      {
        step: "Surgery",
        description:
          "Procedure performed in our surgical suite with continuous monitoring and comfort management.",
      },
      {
        step: "Recovery Support",
        description:
          "Detailed aftercare instructions and follow-up appointments to ensure proper healing.",
      },
    ],
    faqs: [
      {
        question: "When should wisdom teeth be removed?",
        answer:
          "We typically recommend removal between ages 17-25, before the roots fully develop. However, wisdom teeth can be removed at any age if they're causing problems.",
      },
      {
        question: "What sedation options are available?",
        answer:
          "We offer local anesthesia, nitrous oxide (laughing gas), oral sedation, and IV sedation depending on the procedure and your comfort level.",
      },
      {
        question: "How long is the recovery period?",
        answer:
          "Recovery varies by procedure. Simple extractions may take 3-5 days, while more complex surgeries may require 1-2 weeks of recovery.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    tagline: "A brighter smile in just one visit",
    description:
      "Professional whitening treatments that brighten your smile safely and effectively. Get a radiant, confident smile in just one visit.",
    longDescription:
      "Our professional teeth whitening treatments deliver dramatic results that over-the-counter products simply can't match. Using advanced LED-activated whitening gel, we can brighten your teeth up to 8 shades in a single session. Our in-office treatments are safe, effective, and include custom-fitted take-home trays so you can maintain your brilliant smile between visits. We also offer sensitivity management for patients with delicate teeth.",
    icon: Sparkles,
    image:
      "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bg: "#D4F5E9",
    duration: "60–90 min",
    priceRange: "$250–$600",
    benefits: [
      "Up to 8 shades whiter in one visit",
      "Professional-grade whitening gel",
      "Custom take-home maintenance trays",
      "Safe for tooth enamel",
      "Sensitivity management included",
    ],
    process: [
      {
        step: "Shade Assessment",
        description:
          "We document your current tooth shade and discuss your whitening goals.",
      },
      {
        step: "Preparation",
        description:
          "Gums and soft tissues are carefully protected before whitening gel is applied.",
      },
      {
        step: "Whitening Session",
        description:
          "Professional whitening gel is activated with our LED light system for optimal results.",
      },
      {
        step: "Take-Home Kit",
        description:
          "Custom-fitted trays and whitening gel provided for maintaining your results at home.",
      },
    ],
    faqs: [
      {
        question: "How long do whitening results last?",
        answer:
          "Results typically last 6-12 months depending on your diet and habits. Regular touch-ups with your take-home kit can extend results.",
      },
      {
        question: "Will whitening damage my teeth?",
        answer:
          "Professional whitening is safe for your enamel when performed by a dental professional. We use enamel-safe formulations and monitor the process carefully.",
      },
      {
        question: "Can I whiten if I have sensitive teeth?",
        answer:
          "Yes! We offer desensitizing treatments before and after whitening, and can adjust the whitening protocol for sensitive teeth.",
      },
    ],
  },
  {
    slug: "teeth-straightening",
    name: "Teeth Straightening",
    tagline: "Your perfect smile, your way",
    description:
      "Modern orthodontic solutions including clear aligners and traditional braces. Achieve a perfectly aligned smile with our customized treatment plans.",
    longDescription:
      "Whether you prefer the discretion of clear aligners or the proven reliability of traditional braces, our orthodontic team creates a customized treatment plan tailored to your unique needs and lifestyle. Using 3D digital scanning and treatment simulation, you can preview your final results before treatment even begins. From minor alignment corrections to complex bite issues, we have the expertise and technology to give you the straight, beautiful smile you've always wanted.",
    icon: Smile,
    image:
      "https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bg: "#FFE4E6",
    duration: "6–24 months",
    priceRange: "$2,000–$6,000",
    benefits: [
      "Clear aligner and traditional braces options",
      "3D treatment simulation preview",
      "Customized treatment plans",
      "Flexible payment plans available",
      "Regular progress monitoring",
    ],
    process: [
      {
        step: "Digital Scan",
        description:
          "Precise 3D digital impressions of your teeth — no messy molds required.",
      },
      {
        step: "Treatment Plan",
        description:
          "Custom plan created with 3D simulation showing your projected results.",
      },
      {
        step: "Active Treatment",
        description:
          "Regular adjustments and check-ins to keep your treatment on track.",
      },
      {
        step: "Retention",
        description:
          "Custom retainers provided to maintain your beautiful new smile permanently.",
      },
    ],
    faqs: [
      {
        question: "Am I too old for braces?",
        answer:
          "Absolutely not! There's no age limit for orthodontic treatment. Many of our adult patients achieve excellent results with clear aligners.",
      },
      {
        question: "How often will I need appointments?",
        answer:
          "Typically every 4-8 weeks depending on your treatment type. Clear aligner check-ins are often less frequent.",
      },
      {
        question: "Will straightening my teeth hurt?",
        answer:
          "You may experience mild pressure or soreness for a few days after adjustments, but this is normal and manageable with over-the-counter pain relief.",
      },
    ],
  },
  {
    slug: "dental-implant",
    name: "Dental Implant",
    tagline: "Permanent solutions that look natural",
    description:
      "Permanent tooth replacement with state-of-the-art implant technology. Restore your smile and chewing function with natural-looking, long-lasting implants.",
    longDescription:
      "Dental implants are the gold standard for replacing missing teeth. Our implant specialists use computer-guided placement technology to position each implant with sub-millimeter precision, ensuring optimal function and aesthetics. Made from biocompatible titanium, implants fuse naturally with your jawbone to create a permanent foundation for crowns, bridges, or dentures. The result is a restoration that looks, feels, and functions just like your natural teeth.",
    icon: Crown,
    image:
      "https://images.pexels.com/photos/6627573/pexels-photo-6627573.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bg: "#FFF0D4",
    duration: "3–6 months (total)",
    priceRange: "$1,500–$4,500",
    benefits: [
      "Permanent tooth replacement",
      "Computer-guided precision placement",
      "Natural look and feel",
      "Preserves jawbone health",
      "95%+ long-term success rate",
    ],
    process: [
      {
        step: "3D Planning",
        description:
          "CT scan and digital planning to determine optimal implant position.",
      },
      {
        step: "Implant Placement",
        description:
          "Titanium implant is precisely placed in the jawbone using guided surgery.",
      },
      {
        step: "Healing Period",
        description:
          "3-6 months for the implant to fuse with the bone (osseointegration).",
      },
      {
        step: "Crown Placement",
        description:
          "Custom-crafted crown attached to create a natural-looking, fully functional tooth.",
      },
    ],
    faqs: [
      {
        question: "How long do dental implants last?",
        answer:
          "With proper care, dental implants can last a lifetime. The crown may need replacement after 10-15 years due to normal wear.",
      },
      {
        question: "Am I a candidate for implants?",
        answer:
          "Most adults with good general health are candidates. We'll evaluate your bone density and overall health during your consultation.",
      },
      {
        question: "Is the procedure painful?",
        answer:
          "The procedure is performed under local anesthesia and sedation. Most patients report less discomfort than expected, similar to having a tooth extracted.",
      },
    ],
  },
  {
    slug: "dental-checkup",
    name: "Dental Checkup",
    tagline: "Prevention is the best medicine",
    description:
      "Comprehensive dental examinations with digital X-rays and oral cancer screening. Regular checkups keep your smile healthy and catch issues early.",
    longDescription:
      "Your regular dental checkup at K Dental Hub is far more than just a cleaning. Our comprehensive examination includes digital X-rays, oral cancer screening, gum health assessment, bite analysis, and a thorough evaluation of every tooth surface. We use intraoral cameras so you can see exactly what we see, empowering you to make informed decisions about your dental health. Early detection is key — most dental problems are simpler and less expensive to treat when caught early.",
    icon: Stethoscope,
    image:
      "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bg: "#EDD8FF",
    duration: "45–60 min",
    priceRange: "$100–$300",
    benefits: [
      "Comprehensive oral examination",
      "Digital X-rays with low radiation",
      "Oral cancer screening included",
      "Professional cleaning and polishing",
      "Personalized treatment recommendations",
    ],
    process: [
      {
        step: "Health Review",
        description:
          "Review of your medical history and any dental concerns or changes.",
      },
      {
        step: "Examination",
        description:
          "Thorough evaluation of teeth, gums, bite, and oral tissues with intraoral camera.",
      },
      {
        step: "Digital X-Rays",
        description:
          "Low-radiation digital imaging to detect issues below the surface.",
      },
      {
        step: "Cleaning & Plan",
        description:
          "Professional cleaning followed by a personalized care plan discussion.",
      },
    ],
    faqs: [
      {
        question: "How often should I get a checkup?",
        answer:
          "We recommend every 6 months for most patients. Some patients with specific conditions may benefit from more frequent visits.",
      },
      {
        question: "What does the checkup include?",
        answer:
          "A full examination, digital X-rays (as needed), oral cancer screening, professional cleaning, and a personalized care plan.",
      },
      {
        question: "Are digital X-rays safe?",
        answer:
          "Yes, digital X-rays use up to 90% less radiation than traditional X-rays and are considered very safe.",
      },
    ],
  },
  {
    slug: "dental-x-ray",
    name: "Dental X-Ray",
    tagline: "See what's beneath the surface",
    description:
      "State-of-the-art digital imaging for accurate diagnosis and treatment planning. Low-radiation technology ensures safety while providing crystal-clear results.",
    longDescription:
      "Our digital X-ray technology provides exceptionally detailed images of your teeth, jawbone, and surrounding structures while using up to 90% less radiation than traditional film X-rays. Results are available instantly on our chairside monitors, allowing us to review findings with you in real-time. We offer a full range of dental imaging including bitewing X-rays, panoramic X-rays, and 3D cone beam CT scans for implant planning and complex cases.",
    icon: Scan,
    image:
      "https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bg: "#D4EEFF",
    duration: "15–30 min",
    priceRange: "$25–$250",
    benefits: [
      "90% less radiation than traditional X-rays",
      "Instant digital results",
      "Multiple imaging options available",
      "Enhanced diagnostic accuracy",
      "Easy image sharing with specialists",
    ],
    process: [
      {
        step: "Positioning",
        description:
          "Digital sensor or panoramic unit positioned for the specific images needed.",
      },
      {
        step: "Imaging",
        description:
          "Quick, comfortable image capture with minimal radiation exposure.",
      },
      {
        step: "Analysis",
        description:
          "Images reviewed on high-resolution monitors for detailed analysis.",
      },
      {
        step: "Discussion",
        description:
          "Findings reviewed with you using our chairside display for full transparency.",
      },
    ],
    faqs: [
      {
        question: "How often do I need dental X-rays?",
        answer:
          "Most patients need bitewing X-rays once a year. A full set is typically taken every 3-5 years, or as needed based on your dental health.",
      },
      {
        question: "Are dental X-rays safe during pregnancy?",
        answer:
          "While dental X-rays are very low radiation, we generally postpone non-urgent X-rays during pregnancy as a precaution. Emergency X-rays can be taken safely with proper shielding.",
      },
      {
        question: "What can X-rays detect?",
        answer:
          "X-rays can reveal cavities between teeth, bone loss, infections, cysts, tumors, impacted teeth, and other conditions invisible during a visual exam.",
      },
    ],
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    tagline: "Building healthy smiles from day one",
    description:
      "Gentle, child-friendly dental care in a fun and welcoming environment. Building positive dental habits from the very first visit for lifelong healthy smiles.",
    longDescription:
      "Our pediatric dental team specializes in making dental visits fun and stress-free for children of all ages. From a child's first tooth to their teenage years, we provide comprehensive dental care in an environment designed to put kids at ease. Our treatment rooms feature kid-friendly décor, entertainment options, and our team is trained in child behavior management techniques. We focus on prevention, education, and building positive associations with dental care that last a lifetime.",
    icon: Heart,
    image:
      "https://images.pexels.com/photos/5355840/pexels-photo-5355840.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bg: "#FFE4E6",
    duration: "30–45 min",
    priceRange: "$80–$250",
    benefits: [
      "Child-friendly environment and team",
      "Gentle, patient approach",
      "Age-appropriate dental education",
      "Preventive care focus",
      "Sedation available for anxious children",
    ],
    process: [
      {
        step: "Welcome Tour",
        description:
          "Fun introduction to our office and team to help your child feel comfortable.",
      },
      {
        step: "Gentle Exam",
        description:
          "Age-appropriate examination using kid-friendly language and techniques.",
      },
      {
        step: "Cleaning",
        description:
          "Gentle professional cleaning with flavored polishing paste your child can choose.",
      },
      {
        step: "Education",
        description:
          "Interactive brushing and flossing demonstration your child will enjoy and remember.",
      },
    ],
    faqs: [
      {
        question: "When should my child first visit the dentist?",
        answer:
          "The American Academy of Pediatric Dentistry recommends a first visit by age 1 or within 6 months of the first tooth appearing.",
      },
      {
        question: "What if my child is afraid of the dentist?",
        answer:
          "Our team is specially trained to work with anxious children. We use tell-show-do techniques, positive reinforcement, and can offer sedation options if needed.",
      },
      {
        question: "Are baby teeth really important?",
        answer:
          "Yes! Baby teeth hold space for permanent teeth, aid in speech development, and are essential for proper nutrition. Treating them is important for your child's overall health.",
      },
    ],
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    tagline: "Restore your gum health",
    description:
      "Thorough scaling and root planing to remove plaque and tartar buildup below the gumline. Essential treatment for maintaining gum health and preventing disease.",
    longDescription:
      "Deep cleaning, also known as scaling and root planing, goes beyond a regular cleaning to address buildup below the gumline. This essential treatment is the first line of defense against periodontal (gum) disease, which affects nearly half of adults over 30. Using ultrasonic and hand instruments, our hygienists carefully remove bacteria, plaque, and tartar from the tooth roots and periodontal pockets, then smooth the root surfaces to promote healing and prevent future buildup.",
    icon: Brush,
    image:
      "https://images.pexels.com/photos/6502552/pexels-photo-6502552.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bg: "#D4F5E9",
    duration: "60–90 min per quadrant",
    priceRange: "$150–$400 per quadrant",
    benefits: [
      "Treats and prevents gum disease",
      "Removes deep tartar and bacteria",
      "Promotes gum reattachment",
      "Reduces pocket depths",
      "Prevents tooth loss from gum disease",
    ],
    process: [
      {
        step: "Assessment",
        description:
          "Comprehensive gum evaluation measuring pocket depths around each tooth.",
      },
      {
        step: "Anesthesia",
        description:
          "Local anesthesia to ensure complete comfort during the procedure.",
      },
      {
        step: "Scaling & Root Planing",
        description:
          "Careful removal of tartar and bacteria from below the gumline and smoothing of root surfaces.",
      },
      {
        step: "Follow-Up",
        description:
          "Re-evaluation in 4-6 weeks to assess healing and determine if additional treatment is needed.",
      },
    ],
    faqs: [
      {
        question: "How do I know if I need a deep cleaning?",
        answer:
          "Signs include bleeding gums, persistent bad breath, receding gums, and loose teeth. Your dentist will measure pocket depths to determine if deep cleaning is needed.",
      },
      {
        question: "Does deep cleaning hurt?",
        answer:
          "With local anesthesia, the procedure is comfortable. You may experience mild soreness for a few days afterward, which is normal and manageable.",
      },
      {
        question: "How often do I need deep cleaning?",
        answer:
          "Most patients need deep cleaning once, followed by maintenance cleanings every 3-4 months. Your dentist will recommend the right schedule based on your gum health.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((s) => s.slug);
}
