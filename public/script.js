document.addEventListener("DOMContentLoaded", function () {
  // LANGUAGE SWITCHER
  const langSwitcher = document.getElementById("langSwitcher");
  const languageText = langSwitcher?.querySelector("span");

  const translations = {
    en: {
      logo: "Fahd <span>Cooling & Maintenance</span>",
      home: "Home",
      services: "Services",
      about: "About Us",
      contact: "Contact",
      language: "English",
      heroTitle: "Professional AC Repair & Maintenance",
      heroText: "We provide top-quality cooling solutions with 24/7 emergency service in Ta'if and surrounding areas.",
      contactUs: "Contact Us",
      callNow: "Call Now",
      ourServices: "Our Services",
      service1Title: "AC Repair",
      service1Desc: "Professional diagnosis and repair of all air conditioning systems including splits, windows, and central AC units.",
      service2Title: "Preventive Maintenance",
      service2Desc: "Regular maintenance plans to keep your cooling systems running efficiently and extend their lifespan.",
      service3Title: "AC Installation",
      service3Desc: "Expert installation of new air conditioning units with proper sizing and optimal placement.",
      service4Title: "Electronics Repair",
      service4Desc: "Comprehensive repair services for home appliances and electronic devices with warranty.",
      aboutTitle: "<span>Fahd</span> Cooling & Maintenance",
      aboutText1: "Since 2015, we've been providing reliable air conditioning and electronics repair services to the Ta'if community.",
      aboutText2: "Our certified technicians have extensive experience with all major brands and are committed to delivering exceptional service with honesty and integrity.",
      aboutText3: "We understand the importance of a properly functioning cooling system in Ta'if's climate, which is why we offer 24/7 emergency service.",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      phoneLabel: "Phone Number",
      messageLabel: "Your Message",
      sendMessage: "Send Message",
      addressTitle: "Address",
      phoneTitle: "Phone",
      hoursTitle: "Working Hours",
      hoursText: "24/7 Emergency Service\n9:00 AM - 11:00 PM (Regular)",
      copyright: "© 2025 Fahd Cooling & Maintenance. All Rights Reserved.",
    },
    ar: {
      logo: "فهد <span>تبريد وصيانة</span>",
      home: "الرئيسية",
      services: "الخدمات",
      about: "من نحن",
      contact: "اتصل بنا",
      language: "العربية",
      heroTitle: "صيانة وإصلاح تكييف الهواء باحترافية",
      heroText: "نقدم حلول تبريد عالية الجودة مع خدمة طوارئ 24/7 في الطائف والمناطق المجاورة.",
      contactUs: "اتصل بنا",
      callNow: "اتصل الآن",
      ourServices: "خدماتنا",
      service1Title: "إصلاح المكيفات",
      service1Desc: "تشخيص وإصلاح احترافي لجميع أنظمة التكييف بما في ذلك السبليت والنوافذ والمكيفات المركزية.",
      service2Title: "الصيانة الوقائية",
      service2Desc: "خطط صيانة دورية للحفاظ على كفاءة أنظمة التبريد وإطالة عمرها الافتراضي.",
      service3Title: "تركيب المكيفات",
      service3Desc: "تركيب احترافي لوحدات تكييف الهواء الجديدة مع الحجم والمكان المناسب.",
      service4Title: "إصلاح الإلكترونيات",
      service4Desc: "خدمات إصلاح شاملة للأجهزة المنزلية والإلكترونية مع ضمان.",
      aboutTitle: "<span>فهد</span> تبريد وصيانة",
      aboutText1: "منذ عام 2015، نقدم خدمات موثوقة في صيانة التكييف والإلكترونيات لمجتمع الطائف.",
      aboutText2: "فنيونا المعتمدون لديهم خبرة واسعة مع جميع العلامات التجارية الرئيسية ويقدمون خدمة استثنائية بأمانة واحتراف.",
      aboutText3: "ندرك أهمية عمل نظام التبريد بشكل سليم في مناخ الطائف، لذلك نوفر خدمة طوارئ 24/7.",
      nameLabel: "الاسم",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "رقم الهاتف",
      messageLabel: "رسالتك",
      sendMessage: "إرسال الرسالة",
      addressTitle: "العنوان",
      phoneTitle: "الهاتف",
      hoursTitle: "ساعات العمل",
      hoursText: "خدمة طوارئ 24/7\n9:00 صباحًا - 11:00 مساءً (عادي)",
      copyright: "© 2025 فهد تبريد وصيانة. جميع الحقوق محفوظة.",
    }
  };

  function setLanguage(lang) {
    document.querySelectorAll("[data-lang-key]").forEach(el => {
      const key = el.getAttribute("data-lang-key");
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    if (languageText) {
      languageText.textContent = lang === "en" ? "English" : "العربية";
    }

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }

  if (langSwitcher) {
    langSwitcher.addEventListener("click", () => {
      const currentLang = document.documentElement.getAttribute("lang") || "en";
      const newLang = currentLang === "en" ? "ar" : "en";
      setLanguage(newLang);
    });
  }

  setLanguage("en");
  

  // CONTACT FORM
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        phone: contactForm.phone.value,
        message: contactForm.message.value
      };

      try {
        const response = await fetch("http://localhost:3000/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (result.success) {
          alert("✅ Message sent successfully!");
          contactForm.reset();
        } else {
          alert("❌ Failed to send message.");
        }
      } catch (err) {
        alert("🚫 Server error. Try again later.");
        console.error(err);
      }
    });
  }
});
