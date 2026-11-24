export const hospitalData = {
  name: "Kridha Hospital",
  tagline: "Advanced Orthopaedic & Surgical Care",
  subTitle: "Best Orthopaedic & Spine Hospital in Bundi, Rajasthan",
  description: "Kridha Hospital is a premier advanced surgical center in Bundi specializing in spine surgery, joint replacement, orthopaedics, urology, laparoscopic procedures, and 24/7 trauma emergency care.",
  
  contact: {
    phonePrimary: "+91-9530397346",
    phoneSecondary: "+91-9887830911",
    phoneDisplay: "+91 95303 97346",
    emergency: "24/7 Emergency: +91 95303 97346",
    email: "kridhahospitalbundi@gmail.com",
    address: {
      street: "Trimurti Colony, Chhatrapura Road (Madhuban Colony Area)",
      city: "Bundi",
      state: "Rajasthan",
      pincode: "323001",
      full: "Trimurti Colony, Chhatrapura Road, Bundi, Rajasthan - 323001"
    },
    timings: "Mon - Sat: 9:00 AM - 8:00 PM | Emergency 24×7 Available",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.574635836461!2d75.641662!3d25.441434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f0762cf1d1db9%3A0x6b44dd87cb3fa63!2sKridha%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000"
  },

  // Verified statistics from original website and reference design
  statistics: [
    {
      id: "patients",
      number: 5000,
      suffix: "+",
      title: "Happy Patients",
      description: "Successfully treated & recovered",
      icon: "Users"
    },
    {
      id: "experience",
      number: 15,
      suffix: "+",
      title: "Years Experience",
      description: "Dedicated clinical excellence",
      icon: "Award"
    },
    {
      id: "services",
      number: 25,
      suffix: "+",
      title: "Specialized Services",
      description: "Comprehensive medical care",
      icon: "Stethoscope"
    },
    {
      id: "emergency",
      number: 24,
      suffix: "×7",
      title: "Emergency Support",
      description: "Round-the-clock trauma readiness",
      icon: "ShieldAlert"
    }
  ],

  // 8 Verified Specialities & Departments
  specialities: [
    {
      id: "orthopaedics",
      title: "Orthopaedics & Joint Care",
      shortDesc: "Complete bone, joint, and trauma care with modern non-invasive and surgical expertise.",
      icon: "Bone",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      treatments: [
        "Knee Replacement",
        "Hip Replacement",
        "Arthritis & Joint Pain",
        "Complex Fracture Care",
        "Sports Injury & Ligament Reconstruction"
      ]
    },
    {
      id: "spine-surgery",
      title: "Spine Surgery",
      shortDesc: "Advanced minimally invasive spine procedures for disc herniation, back pain, and sciatica.",
      icon: "Activity",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      treatments: [
        "Minimally Invasive Spine Surgery",
        "Slip Disc Treatment",
        "Sciatica Nerve Decompression",
        "Chronic Back & Neck Pain",
        "Spine Trauma & Stabilization"
      ]
    },
    {
      id: "urology",
      title: "Urology & Kidney Care",
      shortDesc: "Comprehensive kidney stone treatment, prostate management, and modern endoscopic urology.",
      icon: "ShieldCheck",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      treatments: [
        "Kidney Stone Laser Treatment",
        "Prostate Enlargement Surgery (TURP)",
        "Cystoscopy & Diagnostic Endourology",
        "Urinary Tract Infection Management"
      ]
    },
    {
      id: "laparoscopic-surgery",
      title: "Laparoscopic & General Surgery",
      shortDesc: "Keyhole surgery ensuring minimal blood loss, minimal scarring, and rapid patient recovery.",
      icon: "Scissors",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
      treatments: [
        "Gallbladder Stone Laparoscopy",
        "Hernia Repair (Inguinal & Ventral)",
        "Appendix Laparoscopic Surgery",
        "Hydrocele & Soft Tissue Surgeries"
      ]
    },
    {
      id: "ent-care",
      title: "ENT Care & Head-Neck",
      shortDesc: "Specialized diagnosis and surgical management of ear, nose, throat, and sinus conditions.",
      icon: "Ear",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      treatments: [
        "Sinusitis & Endoscopic Sinus Surgery",
        "Hearing Loss & Ear Discharge Care",
        "Tonsillitis & Adenoid Treatment",
        "Voice & Vocal Cord Disorders",
        "Allergic Rhinitis Management"
      ]
    },
    {
      id: "piles-clinic",
      title: "Piles, Fissure & Fistula Clinic",
      shortDesc: "Advanced anorectal treatments providing permanent relief with minimal pain and quick healing.",
      icon: "Sparkles",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      treatments: [
        "Piles (Hemorrhoids) Modern Treatment",
        "Anal Fissure Pain-Free Healing",
        "Anal Fistula Surgical Treatment",
        "Pilonidal Sinus Care"
      ]
    },
    {
      id: "endoscopy",
      title: "Endoscopy & Colonoscopy",
      shortDesc: "High-definition diagnostic gastrointestinal imaging and mucosal evaluation.",
      icon: "Eye",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      treatments: [
        "Upper GI Diagnostic Endoscopy",
        "Colonoscopy & Polyp Screening",
        "GERD & Acidity Evaluation",
        "GI Bleeding Investigation"
      ]
    },
    {
      id: "breast-surgery",
      title: "Breast Cancer Surgery",
      shortDesc: "Early screening, benign breast lump removal, and oncological surgical management.",
      icon: "HeartPulse",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      treatments: [
        "Breast Lump (Fibroadenoma) Surgery",
        "Breast Cancer Oncological Resection",
        "Early Diagnostic Breast Screening",
        "Post-Surgical Follow-up Care"
      ]
    }
  ],

  // Verified Facilities from original website
  facilities: [
    {
      title: "Modern Modular Operation Theatre",
      description: "Equipped with advanced surgical lighting, laminar airflow, and precision monitoring for sterile operations.",
      icon: "DoorClosed"
    },
    {
      title: "Comfortable AC Rooms",
      description: "Platinum, Gold, and Diamond category inpatient rooms designed for serene and hygienic patient recovery.",
      icon: "Hotel"
    },
    {
      title: "ETO Sterilization System",
      description: "Hospital-grade Ethylene Oxide (ETO) technology ensures 100% micro-biological sterilization of delicate instruments.",
      icon: "ShieldCheck"
    },
    {
      title: "State-of-the-Art Medical Equipment",
      description: "High-definition endoscopes, C-Arm fluoroscopy for spine surgery, and modern laparoscopic towers.",
      icon: "Cpu"
    },
    {
      title: "24×7 Trauma & Emergency Unit",
      description: "Round-the-clock emergency medical officers, trauma resuscitation facilities, and immediate surgical backup.",
      icon: "Ambulance"
    },
    {
      title: "Compassionate Nursing Care",
      description: "Highly qualified, polite, and responsive nursing professionals ensuring patient comfort at every step.",
      icon: "HeartHandshake"
    }
  ],

  // 6 Verified Pillars
  whyChooseUs: [
    {
      title: "Dedicated Spine & Joint Care",
      desc: "Specialized focus on complex joint replacements and endoscopic spine therapies in Bundi."
    },
    {
      title: "Experienced Surgical Specialists",
      desc: "Skilled surgeons with over 15+ years of clinical excellence in orthopaedics and general surgery."
    },
    {
      title: "Minimally Invasive Techniques",
      desc: "Modern keyhole methods resulting in minimal incisions, reduced pain, and rapid hospital discharge."
    },
    {
      title: "Patient-Centered Compassion",
      desc: "Ethical medical guidance, transparent treatment costs, and personalized attention for every family."
    },
    {
      title: "Comprehensive Care Under One Roof",
      desc: "OPD, IPD, Diagnostics, OT, Endoscopy, and Pharmacy available seamlessly inside the hospital."
    },
    {
      title: "24×7 Emergency Support",
      desc: "Round-the-clock availability for accidental fractures, surgical crises, and acute pain emergencies."
    }
  ],

  // Patient Reviews & Testimonials
  testimonials: [
    {
      id: 1,
      patientName: "Rajendra Sharma",
      treatment: "Knee Replacement Surgery",
      rating: 5,
      date: "Recent Patient",
      review: "I had severe arthritis for 4 years and was unable to walk without support. The knee replacement at Kridha Hospital transformed my life. Within 3 weeks I was walking comfortably. Doctors and nursing staff are very caring."
    },
    {
      id: 2,
      patientName: "Sunita Meena",
      treatment: "Spine Surgery (Slip Disc)",
      rating: 5,
      date: "Recent Patient",
      review: "Suffering from acute sciatica, I visited several hospitals before coming to Kridha Hospital. The spine surgery went smoothly with very small incisions. I was discharged in 2 days completely pain-free!"
    },
    {
      id: 3,
      patientName: "Vikram Singh Hada",
      treatment: "Laparoscopic Gallstone Surgery",
      rating: 5,
      date: "Recent Patient",
      review: "Very clean hospital, excellent AC rooms, and modern operation theatre. Laparoscopic surgery for gallbladder was done seamlessly without any complications. Best surgical center in Bundi."
    },
    {
      id: 4,
      patientName: "Dinesh Kumar Verma",
      treatment: "Kidney Stone Laser Removal",
      rating: 5,
      date: "Recent Patient",
      review: "My 12mm kidney stone was treated quickly with endoscopic laser treatment. No pain, prompt service, and very reasonable treatment cost compared to Jaipur or Kota hospitals."
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "What are the OPD consultation timings at Kridha Hospital?",
      answer: "Our outpatient departments (OPD) are open Monday through Saturday from 9:00 AM to 8:00 PM. Our 24/7 Emergency and Trauma care unit is open round-the-clock, 365 days a year."
    },
    {
      question: "How do I book an appointment with a specialist?",
      answer: "You can book directly by calling our helpline at +91 9530397346 / +91 9887830911, sending a WhatsApp message through the green button on this website, or using our online booking form."
    },
    {
      question: "Is emergency trauma care available during night hours?",
      answer: "Yes, Kridha Hospital has a dedicated 24×7 Emergency & Trauma team with on-duty medical officers, nursing staff, and emergency surgical capabilities for fractures, trauma, and acute medical conditions."
    },
    {
      question: "What categories of patient rooms are available?",
      answer: "We offer Platinum, Gold, and Diamond category air-conditioned inpatient rooms designed for maximum patient privacy, hygiene, and caregiver comfort."
    },
    {
      question: "What are the benefits of minimally invasive laparoscopic surgery?",
      answer: "Laparoscopic (keyhole) procedures involve significantly smaller incisions, minimal blood loss, minimal post-operative pain, lower infection risk, and faster return to daily activities."
    }
  ]
};
