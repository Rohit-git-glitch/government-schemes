(function() {
  const TRANSLATIONS = {
    en: {
      app_title: "Government Schemes Explorer",
      hero_title: "Find government schemes by state and type",
      hero_subtitle: "Browse central and state benefits in your language.",
      language_label: "Language",
      filters_title: "Filters",
      state_label: "State",
      type_label: "Type",
      search_label: "Search",
      search_placeholder: "Search by name, benefits, eligibility",
      all_states: "All states",
      all_types: "All types",
      results_count: "Showing {count} of {total} schemes",
      no_results: "No schemes found.",
      eligibility: "Eligibility",
      benefits: "Benefits",
      official_link: "Official link",
      footer_note: "Unofficial catalogue compiled for demonstration."
    },
    hi: {
      app_title: "सरकारी योजनाएँ खोजें",
      hero_title: "राज्य और प्रकार के अनुसार सरकारी योजनाएँ ढूँढें",
      hero_subtitle: "केंद्र और राज्य लाभ अपनी भाषा में ब्राउज़ करें।",
      language_label: "भाषा",
      filters_title: "फ़िल्टर",
      state_label: "राज्य",
      type_label: "प्रकार",
      search_label: "खोजें",
      search_placeholder: "नाम, लाभ, पात्रता से खोजें",
      all_states: "सभी राज्य",
      all_types: "सभी प्रकार",
      results_count: "{total} में से {count} योजनाएँ दिख रही हैं",
      no_results: "कोई योजना नहीं मिली।",
      eligibility: "पात्रता",
      benefits: "लाभ",
      official_link: "आधिकारिक लिंक",
      footer_note: "डेमो हेतु संकलित अनौपचारिक सूची।"
    },
    ta: {
      app_title: "அரசுத் திட்டங்கள் தேடுபொறி",
      hero_title: "மாநிலம் மற்றும் வகையின்படி அரசுத் திட்டங்களைத் தேடுங்கள்",
      hero_subtitle: "மத்திய மற்றும் மாநில நலன்களை உங்கள் மொழியில் உலாவுங்கள்.",
      language_label: "மொழி",
      filters_title: "வடிப்பான்கள்",
      state_label: "மாநிலம்",
      type_label: "வகை",
      search_label: "தேடு",
      search_placeholder: "பெயர், நன்மை, தகுதி மூலம் தேடு",
      all_states: "அனைத்து மாநிலங்கள்",
      all_types: "அனைத்து வகைகள்",
      results_count: "மொத்தம் {total} இல் {count} காட்டப்படுகிறது",
      no_results: "திட்டங்கள் எதுவும் இல்லை.",
      eligibility: "தகுதி",
      benefits: "நன்மைகள்",
      official_link: "அதிகாரப்பூர்வ இணைப்பு",
      footer_note: "டெமோவுக்காக தொகுக்கப்பட்ட அதிகாரப்பூர்வமற்ற பட்டியல்."
    }
  };

  function getLanguage() {
    try { return localStorage.getItem('lang') || document.documentElement.lang || 'en'; } catch (_) { return 'en'; }
  }

  function setLanguage(lang) {
    try { localStorage.setItem('lang', lang); } catch (_) {}
    document.documentElement.setAttribute('lang', lang);
  }

  function translate(key, lang) {
    const l = lang || getLanguage();
    return (TRANSLATIONS[l] && TRANSLATIONS[l][key]) || TRANSLATIONS.en[key] || key;
  }

  window.I18N = { TRANSLATIONS, getLanguage, setLanguage, t: translate };
})();


