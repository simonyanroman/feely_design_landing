/**
 * FEELY DESIGN // R&D LAB — CONFIGURATION & DISPATCH ENGINE
 */
const FEELY_CONFIG = {
    telegramUsername: "simonyanrr",                     // Telegram username (without @)
    whatsappNumber: "972533455929",                     // WhatsApp phone in international format
    instagramUsername: "feely_design",                  // Instagram handle (without @)
    email: "simonyan.creator@gmail.com",                // Direct contact email
    emailSubject: "[FEELY_LEAD] Заявка с сайта feelydesign.com", // Unified subject for Gmail filter -> Important
    formSubmitEndpoint: "https://formsubmit.co/ajax/simonyan.creator@gmail.com"
};

// Bilingual Dictionary (EN / RU)
const I18N = {
    en: {
        nav_services: "Capabilities",
        nav_cases: "Case Studies",
        nav_archive: "R&D Lab",
        nav_process: "Workflow",
        nav_cta: "Start a Project →",
        hero_tag1: "Parametric R&D",
        hero_tag2: "Direct 3D-Printed Formwork",
        hero_tag3: "Small-Batch Fabrication",
        hero_title: "Algorithmic Surfaces, Silicone-Free Molds & Custom Products",
        hero_sub: "We engineer parametric geometries in Grasshopper, print modular casting matrices with interchangeable faceplates, and craft tactile architectural tiles, interior objects, and workshop tooling.",
        hero_btn_quote: "Configure Request →",
        hero_btn_cases: "Explore Case Studies",
        spec_focus_k: "Focus",
        spec_focus_v: "Parametric Design & Digital Fabrication",
        spec_innov_k: "Core Tech",
        spec_innov_v: "Direct 3D-Printed Formwork (Zero Silicone)",
        spec_cad_k: "CAD / Algo",
        spec_cad_v: "Rhino + Grasshopper / Fusion 360 / Blender",
        spec_mat_k: "Materials",
        spec_mat_v: "Architectural Gypsum, Concrete, Leather, Technical Polymers",
        spec_loc_k: "Location",
        spec_loc_v: "Haifa, Israel // Worldwide Shipping & CAD",
        status_line: "[SYSTEM STATUS]: R&D and small-batch production slots open for current month.",
        sec_services_l: "01 // Core Capabilities",
        sec_services_r: "From Algorithm to Physical Object",
        srv1_title: "Parametric Tiles & Casting Matrices",
        srv1_desc: "Generative surface relief design in Grasshopper paired with our proprietary modular 3D-printed formwork. Interchangeable front plates allow rapid texture iteration without waiting 24h for silicone curing.",
        srv1_meta1: "<strong>Applications:</strong> 80×80mm & custom wall tiles, diptychs/triptychs, acoustic & sculptural panels.",
        srv1_meta2: "<strong>Deliverable:</strong> Finished cast gypsum/concrete series or ready-to-cast modular matrices.",
        srv2_title: "Tactile Objects & Composite Goods",
        srv2_desc: "Product R&D combining 3D-printed structural cores, mineral casting, metal frames, and vegetable-tanned / Crazy Horse leather. Engineered from algorithmic concept to small-batch series.",
        srv2_meta1: "<strong>Applications:</strong> Interior clocks, lighting, vessels, Instax/analog accessories, desk architecture.",
        srv2_meta2: "<strong>Deliverable:</strong> Bespoke product batches, functional prototypes, and embossing stamps.",
        srv3_title: "Workshop Jigs & Custom G-Code",
        srv3_desc: "Precision assembly jigs, snap-on drilling templates for cabinetry, and direct algorithmic G-code generation (0.8mm+ nozzle spiral extrusion, non-standard overhangs) beyond standard slicer limits.",
        srv3_meta1: "<strong>Clients:</strong> Furniture workshops, leathercraft studios, 3D printing farms, architects.",
        srv3_meta2: "<strong>Deliverable:</strong> Physical shop-floor tooling or parametric Grasshopper/CAD packages.",
        sec_cases_l: "02 // Flagship Case Studies",
        sec_cases_r: "Deep Product Research",
        case1_tag: "CASE_01 // MODULAR CASTING SYSTEM",
        case1_title: "Waves & Convex 80×80: Silicone-Free Parametric Gypsum Tiles",
        case1_desc: "Traditional silicone molds make R&D slow and expensive. We engineered a unified outer retention frame with interchangeable 3D-printed parametric faceplates—cutting screen-to-cast time from days to hours.",
        case1_ch_k: "Innovation",
        case1_ch_v: "Direct FDM formwork with draft-angle compensation and reusable clamping rails instead of silicone.",
        case1_sol_k: "Geometry",
        case1_sol_v: "Grasshopper wave & spherical attractor scripts that lock perimeter edges flat for seamless diptych/wall mounting.",
        case1_imp_k: "Colorways",
        case1_imp_v: "Raw unbleached gypsum & deep iron-oxide terracotta.",
        case1_btn: "Read Full Technical Breakdown →",
        case2_tag: "CASE_02 // HYBRID MATERIAL R&D",
        case2_title: "Tension Leather Clock & Embossing Tooling",
        case2_desc: "An exploration of material contrast: a radial cut Crazy Horse leather dial suspended under tension inside a minimalist steel ring, backed by a custom 3D-printed structural movement housing.",
        case2_ch_k: "Challenge",
        case2_ch_v: "Achieve crisp geometric tension and tactile embossing on pull-up leather without costly brass dies.",
        case2_sol_k: "Solution",
        case2_sol_v: "Parametric radial tab geometry + high-density polymer cold-press stamps and precision rear housing.",
        case2_imp_k: "Result",
        case2_imp_v: "5–7x tooling cost reduction and rapid visual/tactile prototyping in Rhino & Blender.",
        case2_btn: "Inspect Concept & Tooling →",
        case3_tag: "CASE_03 // ALGORITHMIC EXTRUSION & ACCESSORY R&D",
        case3_title: "Non-Planar Overhangs, Spiral Vessels & Analog Accessories",
        case3_desc: "Pushing FDM hardware with 0.8mm nozzles, 0.6mm layer heights, and custom Grasshopper toolpaths to produce structural ribbed textures, differential growth vessels, and tactile desk stands.",
        case3_ch_k: "Parameters",
        case3_ch_v: "0.8mm nozzle // 1.2mm wall // 15 mm/s controlled extrusion // zero support material.",
        case3_sol_k: "Portfolio",
        case3_sol_v: "Ribbed Instax film stands, Differential Growth vases, Perlin noise planters, and parametric threads.",
        case3_imp_k: "Impact",
        case3_imp_v: "Layer lines transformed from a printing artifact into an intentional architectural rib texture.",
        case3_btn: "Explore R&D Archive →",
        sec_archive_l: "03 // R&D Lab Archive",
        sec_archive_r: "Parametric Studies & Prototypes",
        sec_process_l: "04 // Workflow",
        sec_process_r: "Screen to Physical Reality",
        step1_t: "Research & Algorithm",
        step1_d: "Visual search, material testing, or writing a custom Grasshopper definition tailored to your dimensions.",
        step2_t: "Modular Matrix Print",
        step2_d: "We print the unified formwork and textured faceplate directly on FDM/SLA hardware—bypassing silicone.",
        step3_t: "Cast & Post-Process",
        step3_d: "Mineral casting (gypsum/concrete), vibration degassing, edge chamfering, and hydrophobic sealing.",
        step4_t: "Delivery / CAD Handover",
        step4_d: "Worldwide shipping of finished tiles/tooling, or digital handover of STEP, STL, and G-code files.",
        sec_contact_l: "05 // Direct Messenger & Email Dispatch",
        sec_contact_r: "Instant routing to TG / WhatsApp / IG / Email",
        contact_title: "Ready to commission a piece or engineer custom tooling?",
        contact_sub: "Fill out the brief on the right and click your preferred channel. Every submission is also automatically sent to our email with a unified priority tag [FEELY_LEAD].",
        form_name: "Your Name / Studio *",
        form_contact: "Your Handle or Phone (TG / WA / IG / Email) *",
        form_cat: "Inquiry Type",
        form_scale: "Estimated Scope / Format",
        form_msg: "Project / Order Details *",
        dispatch_label: "Send your formatted brief via:",
        btn_tg: "Telegram (@simonyanrr)",
        btn_wa: "WhatsApp (+972533455929)",
        btn_ig: "Instagram (@feely_design)",
        btn_email: "Send Direct to Email"
    },
    ru: {
        nav_services: "Направления",
        nav_cases: "Кейсы",
        nav_archive: "R&D Архив",
        nav_process: "Процесс",
        nav_cta: "Обсудить проект →",
        hero_tag1: "Параметрический R&D",
        hero_tag2: "Печать матриц без силикона",
        hero_tag3: "Малосерийное производство",
        hero_title: "Алгоритмический рельеф, печатные матрицы и предметный дизайн",
        hero_sub: "Проектируем генеративную геометрию в Grasshopper, печатаем модульную опалубку со сменными фасадами и создаем тактильную гипсовую плитку, предметы интерьера и оснастку для мастерских.",
        hero_btn_quote: "Оставить заявку →",
        hero_btn_cases: "Смотреть кейсы",
        spec_focus_k: "Специализация",
        spec_focus_v: "Параметрический дизайн и цифровое производство",
        spec_innov_k: "Технология",
        spec_innov_v: "Прямая 3D-печать матриц (без силиконовых форм)",
        spec_cad_k: "CAD / Алгоритмы",
        spec_cad_v: "Rhino + Grasshopper / Fusion 360 / Blender 3D",
        spec_mat_k: "Материалы",
        spec_mat_v: "Архитектурный гипс, бетон, кожа, тех. полимеры",
        spec_loc_k: "Локация",
        spec_loc_v: "Хайфа, Израиль // Доставка и CAD по всему миру",
        status_line: "[СТАТУС СИСТЕМЫ]: Открыты слоты на R&D, плитку и прототипирование в этом месяце.",
        sec_services_l: "01 // Направления работы",
        sec_services_r: "От алгоритма до физического объекта",
        srv1_title: "Декоративная плитка и литьевые матрицы",
        srv1_desc: "Генеративный рельеф в Grasshopper и собственная технология прямой печати модульной опалубки. Сменные фасадные панели позволяют менять дизайн без затрат времени и денег на силикон.",
        srv1_meta1: "<strong>Форматы:</strong> Плитка 80×80 мм и кастомные форматы, диптихи/триптихи, стеновые панно.",
        srv1_meta2: "<strong>Результат:</strong> Готовая серия отливок (гипс/терракота) или печатные матрицы под ваше литье.",
        srv2_title: "Предметный дизайн и работа с кожей",
        srv2_desc: "Разработка предметов интерьера на стыке 3D-печати, литья, металла и натуральной кожи. Каждый продукт начинается с визуального и инженерного исследования глубины материала.",
        srv2_meta1: "<strong>Продукты:</strong> Натяжные часы из кожи, светильники, кашпо, подставки Instax, декор.",
        srv2_meta2: "<strong>Результат:</strong> Кастомные изделия, малые серии и полимерные клише для тиснения кожи.",
        srv3_title: "Оснастка для мастерских и кастомный G-Code",
        srv3_desc: "Кондукторы и шаблоны для мебельных производств, а также алгоритмическая генерация траекторий печати (сопло 0.8+ мм, спиральная экструзия, управляемые нависания).",
        srv3_meta1: "<strong>Клиенты:</strong> Мебельные и кожевенные мастерские, студии дизайна, 3D-фермы.",
        srv3_meta2: "<strong>Результат:</strong> Физическая оснастка или готовые CAD/Grasshopper/G-code файлы.",
        sec_cases_l: "02 // Ключевые проекты",
        sec_cases_r: "Глубина инженерного поиска",
        case1_tag: "КЕЙС_01 // МОДУЛЬНАЯ СИСТЕМА ЛИТЬЯ",
        case1_title: "Waves & Convex 80×80: Параметрическая плитка без силикона",
        case1_desc: "Отказ от классических силиконовых форм: унифицированная жесткая опалубка со сменными 3D-печатными фасадами кратно снижает себестоимость R&D и ускоряет путь от экрана до готовой отливки.",
        case1_ch_k: "Инновация",
        case1_ch_v: "Прямая печать матриц со сменными вставками — минус 24 часа на застывание силикона.",
        case1_sol_k: "Геометрия",
        case1_sol_v: "Алгоритм в Grasshopper удерживает плоский кант по периметру для бесшовной стыковки в диптихи и панно.",
        case1_imp_k: "Палитра",
        case1_imp_v: "Натуральный гипс и глубокий терракотовый пигмент.",
        case1_btn: "Подробнее о технологии и процессе →",
        case2_tag: "КЕЙС_02 // СИНТЕЗ МАТЕРИАЛОВ",
        case2_title: "Концепт часов из кожи на растяжении и штампы тиснения",
        case2_desc: "Исследование натяжения и тактильности: радиальный циферблат из кожи Crazy Horse, растянутый на стальном кольце, с печатным полимерным корпусом механизма сзади.",
        case2_ch_k: "Задача",
        case2_ch_v: "Соединить ремесленную фактуру кожи с точной параметрической геометрией без дорогих латунных клише.",
        case2_sol_k: "Решение",
        case2_sol_v: "Радиальная выкройка в Rhino/Blender + твердотельные полимерные штампы для холодного тиснения.",
        case2_imp_k: "Эффект",
        case2_imp_v: "Снижение стоимости оснастки в 5–7 раз и быстрая проверка тактильной глубины изделия.",
        case2_btn: "Смотреть концепт и детали →",
        case3_tag: "КЕЙС_03 // ЭКСТРУЗИЯ И ПРЕДМЕТНЫЙ R&D",
        case3_title: "Спиральная печать (0.8 мм), биоморфные вазы и аксессуары",
        case3_desc: "Управление физикой слоев: печать соплом 0.8 мм при высоте слоя 0.6 мм на низкой скорости (15 мм/с) превращает слои в выразительную архитектурную фактуру без поддержек.",
        case3_ch_k: "Параметры",
        case3_ch_v: "Сопло 0.8 мм // Стенка 1.2 мм // Спиральный режим // Полный контроль нависаний.",
        case3_sol_k: "Объекты",
        case3_sol_v: "Ребристые стенды для Instax, вазы Differential Growth, кашпо с дренажем и абажуры.",
        case3_imp_k: "Результат",
        case3_imp_v: "Чистая тактильная геометрия на стыке алгоритма и возможностей экструдера.",
        case3_btn: "Открыть архив проектов →",
        sec_archive_l: "03 // Архив R&D Лаборатории",
        sec_archive_r: "Алгоритмы и прототипы",
        sec_process_l: "04 // Алгоритм работы",
        sec_process_r: "От идеи до серии",
        step1_t: "Исследование и алгоритм",
        step1_d: "Визуальный поиск, подбор пропорций и написание параметрического скрипта в Grasshopper под вашу задачу.",
        step2_t: "Печать модульной матрицы",
        step2_d: "Прямая 3D-печать опалубки и сменного рельефного фасада с учетом уклонов для легкой распалубки.",
        step3_t: "Литье и постобработка",
        step3_d: "Заливка гипса с вибро-дегазацией, отщелкивание формы, доводка граней и защитная гидрофобизация.",
        step4_t: "Отправка / Передача файлов",
        step4_d: "Доставка готовых плиток/изделий или передача архива производственных файлов (STEP, STL, G-code).",
        sec_contact_l: "05 // Быстрая заявка в TG / WhatsApp / Instagram / Email",
        sec_contact_r: "Прямая связь без посредников",
        contact_title: "Хотите заказать плитку, кастомный объект или разработку оснастки?",
        contact_sub: "Заполните короткий бриф справа и выберите удобный канал. Каждая заявка также автоматически дублируется на почту с единой темой [FEELY_LEAD] для фильтрации в Важные.",
        form_name: "Ваше имя / Студия *",
        form_contact: "Ваш контакт (TG / WhatsApp / Телефон / Email) *",
        form_cat: "Направление запроса",
        form_scale: "Формат / Объем задачи",
        form_msg: "Описание задачи или пожелания *",
        dispatch_label: "Отправить готовую заявку напрямую:",
        btn_tg: "Telegram (@simonyanrr)",
        btn_wa: "WhatsApp (+972533455929)",
        btn_ig: "Instagram (@feely_design)",
        btn_email: "Отправить на Почту"
    }
};

function setLanguage(lang) {
    if (!I18N[lang]) return;
    localStorage.setItem("feely_lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (I18N[lang][key]) {
            el.innerHTML = I18N[lang][key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
}

function getFormFields() {
    const name = (document.getElementById("name")?.value || "").trim();
    const contact = (document.getElementById("contact-method")?.value || "").trim();
    const categoryEl = document.getElementById("task-type");
    const category = categoryEl ? categoryEl.options[categoryEl.selectedIndex].text : "";
    const scaleEl = document.getElementById("task-scale");
    const scale = scaleEl ? scaleEl.options[scaleEl.selectedIndex].text : "";
    const message = (document.getElementById("message")?.value || "").trim();

    if (!name || !message) {
        alert(document.documentElement.lang === "ru"
            ? "Пожалуйста, укажите ваше имя и кратко опишите задачу."
            : "Please enter your name and briefly describe your project.");
        return null;
    }

    const text = [
        "⚡ FEELY DESIGN // PROJECT INQUIRY",
        "--------------------------------",
        `👤 Client: ${name}`,
        contact ? `📱 Contact: ${contact}` : null,
        category ? `🔧 Category: ${category}` : null,
        scale ? `📐 Scope: ${scale}` : null,
        `📝 Details: ${message}`
    ].filter(Boolean).join("\n");

    return { name, contact, category, scale, message, text };
}

async function sendEmailLead(fields) {
    try {
        const formData = new FormData();
        formData.append("_subject", FEELY_CONFIG.emailSubject);
        formData.append("_captcha", "false");
        formData.append("_template", "table");
        formData.append("Client_Name", fields.name);
        formData.append("Client_Contact", fields.contact || "Not provided");
        formData.append("Category", fields.category);
        formData.append("Scope", fields.scale);
        formData.append("Project_Details", fields.message);
        formData.append("Source_Page", window.location.href);

        const response = await fetch("https://formsubmit.co/ajax/simonyan.creator@gmail.com", {
            method: "POST",
            headers: {
                "Accept": "application/json"
            },
            body: formData
        });
        return response.ok;
    } catch (e) {
        return false;
    }
}

function openInstagramModal(text) {
    let modal = document.getElementById("feely-ig-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "feely-ig-modal";
        modal.className = "feely-modal-backdrop";
        modal.innerHTML = `
            <div class="feely-modal-box">
                <span class="tag tag-accent">INSTAGRAM DIRECT // READY</span>
                <h3 id="ig-modal-title">Текст заявки скопирован!</h3>
                <p id="ig-modal-desc" style="font-size: 0.88rem; color: var(--text-muted);">
                    Instagram не позволяет сторонним сайтам автоматически вставлять текст в поле ввода Direct из-за правил безопасности Meta.<br>
                    Мы скопировали готовую карточку заявки в буфер обмена. Просто нажмите <strong>«Вставить» (Ctrl+V / Paste)</strong> в открывшемся диалоге с <strong>@feely_design</strong>.
                </p>
                <div class="feely-modal-preview" id="ig-modal-preview"></div>
                <div class="feely-modal-actions">
                    <button type="button" id="ig-open-btn" class="btn-primary" style="flex: 1; justify-content: center;">
                        Открыть Instagram Direct ↗
                    </button>
                    <button type="button" id="ig-close-btn" class="btn-secondary">
                        Закрыть
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById("ig-close-btn").addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    const isRu = document.documentElement.lang === "ru";
    document.getElementById("ig-modal-title").textContent = isRu 
        ? "Текст заявки скопирован в буфер!" 
        : "Inquiry brief copied to clipboard!";
    document.getElementById("ig-modal-desc").innerHTML = isRu
        ? "Instagram блокирует авто-вставку стороннего текста в целях безопасности Meta.<br>Карточка вашего проекта уже в буфере обмена — просто нажмите <strong>Вставить (Ctrl+V / Paste)</strong> в чате с <strong>@feely_design</strong>."
        : "Instagram security prevents third-party sites from prepopulating direct messages.<br>Your formatted brief is copied to your clipboard — simply click <strong>Paste (Ctrl+V)</strong> in the chat with <strong>@feely_design</strong>.";
    document.getElementById("ig-open-btn").textContent = isRu
        ? "Перейти в Direct @feely_design ↗"
        : "Open @feely_design Direct ↗";
    document.getElementById("ig-modal-preview").textContent = text;

    document.getElementById("ig-open-btn").onclick = () => {
        window.open(`https://ig.me/m/${FEELY_CONFIG.instagramUsername}`, "_blank", "noopener");
        modal.style.display = "none";
    };

    modal.style.display = "flex";
}

function showStatus(msg) {
    const statusBox = document.getElementById("dispatch-status");
    if (statusBox) {
        statusBox.textContent = msg;
        statusBox.style.display = "block";
    }
}

async function dispatchInquiry(channel) {
    const fields = getFormFields();
    if (!fields) return;

    // Copy to clipboard automatically so the user never loses their text
    try {
        await navigator.clipboard.writeText(fields.text);
    } catch (e) {}

    // Always dispatch background email copy with the unified subject [FEELY_LEAD]
    const emailPromise = sendEmailLead(fields);

    const encoded = encodeURIComponent(fields.text);
    const isRu = document.documentElement.lang === "ru";

    if (channel === "tg") {
        showStatus(isRu
            ? "✓ Заявка скопирована и передана в Telegram (@simonyanrr)..."
            : "✓ Brief copied & routed to Telegram (@simonyanrr)...");
        window.open(`https://t.me/${FEELY_CONFIG.telegramUsername}?text=${encoded}`, "_blank", "noopener");
    } else if (channel === "wa") {
        showStatus(isRu
            ? "✓ Заявка сформирована. Открываем WhatsApp (+972533455929)..."
            : "✓ Brief formatted. Opening WhatsApp (+972533455929)...");
        window.open(`https://wa.me/${FEELY_CONFIG.whatsappNumber}?text=${encoded}`, "_blank", "noopener");
    } else if (channel === "ig") {
        openInstagramModal(fields.text);
    } else if (channel === "email") {
        showStatus(isRu
            ? "⏳ Отправляем заявку на simonyan.creator@gmail.com..."
            : "⏳ Sending inquiry to simonyan.creator@gmail.com...");
        const ok = await emailPromise;
        if (ok) {
            showStatus(isRu
                ? "✓ Заявка успешно отправлена на почту с темой: " + FEELY_CONFIG.emailSubject
                : "✓ Inquiry successfully sent to email with subject: " + FEELY_CONFIG.emailSubject);
        } else {
            // Native email client fallback
            const formEl = document.getElementById("inquiry-form");
            if (formEl) {
                formEl.submit();
            } else {
                const subj = encodeURIComponent(FEELY_CONFIG.emailSubject);
                window.location.href = `mailto:${FEELY_CONFIG.email}?subject=${subj}&body=${encoded}`;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const subjEncoded = encodeURIComponent(FEELY_CONFIG.emailSubject);

    document.querySelectorAll("[data-channel-link='tg']").forEach(el => {
        el.href = `https://t.me/${FEELY_CONFIG.telegramUsername}`;
    });
    document.querySelectorAll("[data-channel-link='wa']").forEach(el => {
        el.href = `https://wa.me/${FEELY_CONFIG.whatsappNumber}`;
    });
    document.querySelectorAll("[data-channel-link='ig']").forEach(el => {
        el.href = `https://instagram.com/${FEELY_CONFIG.instagramUsername}`;
    });
    document.querySelectorAll("[data-channel-link='email']").forEach(el => {
        el.href = `mailto:${FEELY_CONFIG.email}?subject=${subjEncoded}`;
        const span = el.querySelector(".email-val");
        if (span) span.textContent = FEELY_CONFIG.email;
    });

    const savedLang = localStorage.getItem("feely_lang") || "en";
    setLanguage(savedLang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.getAttribute("data-lang"));
        });
    });

    document.querySelectorAll("[data-dispatch]").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            dispatchInquiry(btn.getAttribute("data-dispatch"));
        });
    });
});
