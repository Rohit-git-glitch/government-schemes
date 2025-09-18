// Basic dataset for demonstration. Extend with real schemes as needed.
// Each scheme contains translations for name, description, eligibility, benefits.

window.SCHEMES = [
  {
    id: "central-pm-kisan",
    state: "All India",
    type: "Agriculture",
    name: {
      en: "PM-KISAN: Pradhan Mantri Kisan Samman Nidhi",
      hi: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)",
      ta: "பிரதான் மந்திரி விவசாயி சம்மான் நிதி (PM-KISAN)",
      ma: "PM-KISAN: प्रधानमंत्री किसान सन्मान निधी",
    },
    description: {
      en: "Income support to all farmer families with cultivable land.",
      hi: "खेती योग्य भूमि वाले सभी किसान परिवारों के लिए आय सहायता।",
      ta: "பயிரிடத்தக்க நிலமுள்ள அனைத்து விவசாயக் குடும்பங்களுக்கும் வருவாய் ஆதரவு."
    },
    eligibility: {
      en: "Small and marginal farmers owning cultivable land as per land records.",
      hi: "भूमि अभिलेखों के अनुसार खेती योग्य भूमि वाले किसान।",
      ta: "நில பதிவுகளின்படி பயிரிடத்தக்க நிலம் கொண்ட விவசாயிகள்."
    },
    benefits: {
      en: "₹6,000 per year in three equal installments.",
      hi: "वर्ष में ₹6,000 तीन किस्तों में।",
      ta: "வருடத்திற்கு ₹6,000, மூன்று தவணைகளில்."
    },
    applyLink: "https://your-apply.example.com/apply/central-pm-kisan",
    link: "https://pmkisan.gov.in/"
  },
  {
    id: "central-ayushman-bharat",
    state: "All India",
    type: "Health",
    name: {
      en: "Ayushman Bharat - PM-JAY",
      hi: "आयुष्मान भारत - PM-JAY",
      ta: "ஆயுஷ்மான் பாரத் - PM-JAY"
    },
    description: {
      en: "Health insurance coverage up to ₹5 lakh per family per year.",
      hi: "प्रति परिवार प्रति वर्ष ₹5 लाख तक का स्वास्थ्य बीमा।",
      ta: "ஒரு குடும்பத்திற்கு ஆண்டுக்கு ₹5 லட்சம் வரை சுகாதார காப்பீடு."
    },
    eligibility: {
      en: "As per SECC and state-specific criteria.",
      hi: "SECC और राज्य मानदंडों के अनुसार।",
      ta: "SECC மற்றும் மாநில அளவுகோல்களின் படி."
    },
    benefits: {
      en: "Cashless treatment at empanelled hospitals.",
      hi: "सूचीबद्ध अस्पतालों में कैशलेस इलाज।",
      ta: "பட்டியலிடப்பட்ட மருத்துவமனைகளில் பணமில்லா சிகிச்சை."
    },
    link: "https://pmjay.gov.in/"
  },
  {
    id: "central-nsp",
    state: "All India",
    type: "Education",
    name: { en: "National Scholarship Portal", hi: "राष्ट्रीय छात्रवृत्ति पोर्टल", ta: "தேசிய உதவித்தொகை தளம்" },
    description: {
      en: "Centralized portal for scholarships offered by central and state governments.",
      hi: "केंद्र और राज्य सरकारों की छात्रवृत्तियों के लिए केंद्रीकृत पोर्टल।",
      ta: "மத்திய மற்றும் மாநில அரசு உதவித்தொகைகளுக்கான ஒருங்கிணைந்த தளம்."
    },
    eligibility: {
      en: "Students meeting scheme-specific criteria.",
      hi: "योजना-विशिष्ट मानदंडों को पूरा करने वाले छात्र।",
      ta: "திட்ட நிபந்தனைகளை பூர்த்தி செய்யும் மாணவர்கள்."
    },
    benefits: { en: "Scholarship amount varies by scheme.", hi: "राशि योजना के अनुसार अलग।", ta: "தொகை திட்டத்தைப் பொறுத்தது." },
    link: "https://scholarships.gov.in/"
  },
  {
    id: "central-mgnrega",
    state: "All India",
    type: "Employment",
    name: { en: "MGNREGA", hi: "मनरेगा", ta: "மகாத்மா காந்தி தேசிய ஊரக வேலை உத்தரவாதம்" },
    description: {
      en: "Guarantees 100 days of wage employment in a financial year to rural households.",
      hi: "ग्रामीण परिवारों को एक वित्तीय वर्ष में 100 दिनों का रोजगार सुनिश्चित।",
      ta: "ஊரக குடும்பங்களுக்கு ஆண்டிற்கு 100 நாட்கள் கூலி வேலை உறுதி."
    },
    eligibility: { en: "Adult members of rural households.", hi: "ग्रामीण परिवारों के वयस्क सदस्य।", ta: "ஊரக குடும்பங்களின் வயது வந்த உறுப்பினர்கள்." },
    benefits: { en: "Wage employment and asset creation.", hi: "मजदूरी रोजगार और परिसंपत्ति निर्माण।", ta: "ஊதிய வேலை மற்றும் சொத்து உருவாக்கம்." },
    link: "https://nrega.nic.in/"
  },
  {
    id: "tn-pudhumai-penn",
    state: "Tamil Nadu",
    type: "Education",
    name: { en: "Pudhumai Penn", hi: "पुधुमई पेन्", ta: "புதுமை பெண்" },
    description: {
      en: "Financial assistance to girls pursuing higher education.",
      hi: "उच्च शिक्षा प्राप्त कर रही लड़कियों के लिए वित्तीय सहायता।",
      ta: "உயர் கல்வி பயிலும் பெண்களுக்கு நிதியுதவி."
    },
    eligibility: { en: "Girls from government schools joining higher education.", hi: "सरकारी स्कूल की छात्राएँ जो उच्च शिक्षा में प्रवेश लेती हैं।", ta: "அரசுப் பள்ளிகளில் இருந்து உயர் கல்வியில் சேரும் பெண்கள்." },
    benefits: { en: "Monthly assistance to continue education.", hi: "शिक्षा जारी रखने हेतु मासिक सहायता।", ta: "கல்வியைத் தொடர மாதாந்திர உதவி." },
    link: "https://www.tn.gov.in/"
  },
  {
    id: "tn-girl-child-protection",
    state: "Tamil Nadu",
    type: "Women & Child",
    name: { en: "Girl Child Protection Scheme", hi: "बालिका सुरक्षा योजना", ta: "பெண் குழந்தை பாதுகாப்புத் திட்டம்" },
    description: {
      en: "Ensures education and welfare of girl children through deposits and support.",
      hi: "जमा राशि और सहायता के माध्यम से बालिकाओं की शिक्षा और कल्याण।",
      ta: "வைப்பு மற்றும் ஆதரவின் மூலம் பெண் குழந்தைகளின் கல்வி மற்றும் நலன்."
    },
    eligibility: { en: "Families with girl children meeting income criteria.", hi: "आय मानदंडों को पूरा करने वाले परिवार जिनमें बालिकाएँ हैं।", ta: "வருமான அளவுகோல்களை பூர்த்தி செய்யும் பெண் குழந்தைகள் உள்ள குடும்பங்கள்." },
    benefits: { en: "Fixed deposits and education support.", hi: "निश्चित जमा और शिक्षा सहायता।", ta: "நிலையான வைப்பு மற்றும் கல்வி ஆதரவு." },
    link: "https://www.tn.gov.in/department/30"
  },
  {
    id: "ka-gruha-lakshmi",
    state: "Karnataka",
    type: "Women & Child",
    name: { en: "Gruha Lakshmi", hi: "गृह लक्ष्मी", ta: "க்ருஹ லக்ஷ்மி" },
    description: {
      en: "Financial assistance to women heads of family.",
      hi: "परिवार की महिला मुखियाओं को वित्तीय सहायता।",
      ta: "குடும்பத்தின் பெண் தலைவர்களுக்கு நிதியுதவி."
    },
    eligibility: { en: "Women heads of BPL families.", hi: "बीपीएल परिवारों की महिला मुखिया।", ta: "பிபிஎல் குடும்பங்களின் பெண் தலைவர்கள்." },
    benefits: { en: "Monthly support as per state norms.", hi: "राज्य के मानकों के अनुसार मासिक सहायता।", ta: "மாநில விதிகளின்படி மாதாந்திர உதவி." },
    link: "https://sevasindhuservices.karnataka.gov.in/"
  },
  {
    id: "mh-mahadbt",
    state: "Maharashtra",
    type: "Education",
    name: { en: "MahaDBT Scholarships", hi: "महाDBT छात्रवृत्तियाँ", ta: "மஹாDBT உதவித்தொகைகள்" },
    description: {
      en: "Direct benefit transfer scholarships for eligible students.",
      hi: "पात्र छात्रों के लिए प्रत्यक्ष लाभ हस्तांतरण छात्रवृत्तियाँ।",
      ta: "தகுதி மாணவர்களுக்கு நேரடி நலன்வழங்கும் உதவித்தொகைகள்."
    },
    eligibility: { en: "As per scheme-specific norms.", hi: "योजना-विशिष्ट मानदंड।", ta: "திட்டத்திற்கு ஏற்ப தகுதி." },
    benefits: { en: "Tuition fee, exam fee reimbursement, etc.", hi: "ट्यूशन, परीक्षा शुल्क वापसी आदि।", ta: "கட்டணம், தேர்வு கட்டணம் திருப்பிச் செலுத்துதல் போன்றவை." },
    link: "https://mahadbt.maharashtra.gov.in/"
  },
  {
    id: "wb-kanyashree",
    state: "West Bengal",
    type: "Women & Child",
    name: { en: "Kanyashree Prakalpa", hi: "कन्याश्री प्रकल्प", ta: "கன்யாஶ்ரீ திட்டம்" },
    description: {
      en: "Conditional cash transfer scheme for adolescent girls to improve status and education.",
      hi: "किशोरियों की स्थिति और शिक्षा सुधार हेतु सशर्त नकद अंतरण योजना।",
      ta: "இளம்பெண்களின் நிலையும் கல்வியும் மேம்பட நிபந்தனை ரொக்க திட்டம்."
    },
    eligibility: { en: "Girls aged 13-19 meeting criteria.", hi: "13-19 आयु बालिकाएँ जो मानदंड पूरा करें।", ta: "13-19 வயதுடைய பெண்கள், நிபந்தனைகளை பூர்த்தி செய்ய வேண்டும்." },
    benefits: { en: "Annual and one-time grants.", hi: "वार्षिक और एकमुश्त अनुदान।", ta: "ஆண்டு மற்றும் ஒருமுறை மானியம்." },
    link: "https://wbkanyashree.gov.in/"
  },
  {
    id: "gj-kisan-suryoday",
    state: "Gujarat",
    type: "Agriculture",
    name: { en: "Kisan Suryoday Yojana", hi: "किसान सूर्योदय योजना", ta: "விவசாயி சூரியோதய திட்டம்" },
    description: {
      en: "Daytime power supply initiative for farmers.",
      hi: "किसानों के लिए दिन के समय बिजली आपूर्ति पहल।",
      ta: "விவசாயிகளுக்கான பகல் நேர மின்சாரம் வழங்கும் முயற்சி."
    },
    eligibility: { en: "Registered farmers in notified areas.", hi: "अधिसूचित क्षेत्रों के पंजीकृत किसान।", ta: "அறிவிக்கப்பட்ட பகுதிகளில் பதிவு செய்யப்பட்ட விவசாயிகள்." },
    benefits: { en: "Reliable daytime power for irrigation.", hi: "सिंचाई हेतु भरोसेमंद बिजली।", ta: "பாசனத்திற்கான நம்பகமான மின்சாரம்." },
    link: "https://gujaratindia.gov.in/"
  },
  {
    id: "kl-karunya",
    state: "Kerala",
    type: "Health",
    name: { en: "Karunya Benevolent Fund", hi: "करुण्या बेनेवोलेंट फंड", ta: "கருண்யா நிவாரண நிதி" },
    description: {
      en: "Financial assistance for critical illnesses.",
      hi: "गंभीर बीमारियों के लिए वित्तीय सहायता।",
      ta: "அதிக ஆபத்தான நோய்களுக்கு நிதியுதவி."
    },
    eligibility: { en: "Residents meeting income criteria.", hi: "आय मानदंडों को पूरा करने वाले निवासी।", ta: "வருமான அளவுகோல்களை பூர்த்தி செய்யும் குடியிருப்பவர்கள்." },
    benefits: { en: "Medical expense support.", hi: "चिकित्सा खर्च सहायत।", ta: "மருத்துவச் செலவுதவிப்பு." },
    link: "https://karunya.kerala.gov.in/"
  },
  {
    id: "dl-old-age-pension",
    state: "Delhi",
    type: "Senior Citizen",
    name: { en: "Delhi Old Age Pension", hi: "दिल्ली वृद्धावस्था पेंशन", ta: "டெல்லி முதியோர் ஓய்வூதியம்" },
    description: {
      en: "Pension for eligible senior citizens in Delhi.",
      hi: "दिल्ली के पात्र वरिष्ठ नागरिकों के लिए पेंशन।",
      ta: "டெல்லியில் தகுதியுள்ள முதியவர்களுக்கு ஓய்வூதியம்."
    },
    eligibility: { en: "Resident seniors meeting income/age norms.", hi: "आय/आयु मानदंडों को पूरा करने वाले वरिष्ठ निवासी।", ta: "வருமான/வயது நிபந்தனைகளை பூர்த்தி செய்யும் முதியவர்கள்." },
    benefits: { en: "Monthly pension as per rules.", hi: "नियमों के अनुसार मासिक पेंशन।", ta: "விதிகளின்படி மாதந்தோறும் ஓய்வூதியம்." },
    link: "https://edistrict.delhigovt.nic.in/"
  },
  {
    id: "up-kanya-sumangala",
    state: "Uttar Pradesh",
    type: "Women & Child",
    name: { en: "Kanya Sumangala Yojana", hi: "कन्या सुमंगला योजना", ta: "கன்னியா சுமங்கலா திட்டம்" },
    description: {
      en: "Conditional cash transfer for education and welfare of the girl child.",
      hi: "बालिका की शिक्षा और कल्याण हेतु सशर्त नकद अंतरण।",
      ta: "பெண் குழந்தையின் கல்வி மற்றும் நலனுக்காக நிபந்தனை ரொக்க உதவி."
    },
    eligibility: { en: "Resident families meeting income criteria.", hi: "आय मानदंडों को पूरा करने वाले परिवार।", ta: "வருமான அளவுகோல்களை பூர்த்தி செய்யும் குடும்பங்கள்." },
    benefits: { en: "Graded financial assistance at key milestones.", hi: "मुख्य पड़ावों पर चरणबद्ध सहायता।", ta: "முக்கிய கட்டங்களில் படிநிலை நிதியுதவி." },
    link: "https://mksy.up.gov.in/"
  },
  {
    id: "mh-shravan-bal",
    state: "Maharashtra",
    type: "Senior Citizen",
    name: { en: "Shravan Bal Seva Pension", hi: "श्रवण बाल सेवा पेंशन", ta: "ஸ்ரவன் பால் சேவா ஓய்வூதியம்" },
    description: {
      en: "Pension for eligible senior citizens in Maharashtra.",
      hi: "महाराष्ट्र के पात्र वरिष्ठ नागरिकों के लिए पेंशन।",
      ta: "மகாராஷ்டிராவில் தகுதியுள்ள முதியவர்களுக்கு ஓய்வூதியம்."
    },
    eligibility: { en: "State residents meeting criteria.", hi: "मानदंडों को पूरा करने वाले राज्य निवासी।", ta: "அளவுகோல்களை பூர்த்தி செய்யும் மாநில குடியிருப்பவர்கள்." },
    benefits: { en: "Monthly pension as per rules.", hi: "नियमों के अनुसार मासिक पेंशन।", ta: "விதிகளின்படி மாதந்தோறும் ஓய்வூதியம்." },
    link: "https://sjsa.maharashtra.gov.in/"
  }
];



