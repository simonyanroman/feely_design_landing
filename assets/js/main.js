/**
 * FEELY DESIGN // R&D LAB — FULL SITE BILINGUAL DICTIONARY (EN / RU)
 */
const FEELY_CONFIG = {
    telegramUsername: "simonyanrr",
    whatsappNumber: "972533455929",
    instagramUsername: "feely_design",
    email: "simonyan.creator@gmail.com",
    emailSubject: "[FEELY_LEAD] Заявка с сайта feelydesign.com"
};

const I18N = {
    en: {
        // GLOBAL HEADER & NAV
        brand_name: "FEELY DESIGN // R&D LAB",
        nav_work: "Projects",
        nav_services: "Capabilities",
        nav_about: "About Me",
        nav_all_cases: "← All Projects",
        nav_cta: "Discuss a Project →",
        nav_order_tiles: "Order Tiles / Molds →",
        nav_order_clock: "Commission Object / Die →",
        nav_order_print: "Request Script / Print →",
        nav_write_roman: "Message Roman →",
        breadcrumb_home: "HOME",

        // MAIN HERO
        hero_tag1: "Parametric R&D",
        hero_tag2: "Silicone-Free Formwork",
        hero_tag3: "Product Design",
        hero_title: "Transforming digital algorithms into tactile objects.",
        hero_sub: "I design generative surface relief in Grasshopper, 3D-print modular formwork with interchangeable faceplates without silicone, and craft tactile gypsum tiles, interior goods, and workshop tooling.",
        hero_btn_cases: "Explore Works ↓",
        hero_btn_about: "About & Manifesto →",

        // AUTHOR CARD
        author_name: "Roman Simonyan",
        author_role: "Founder of Feely Design",
        author_loc: "Haifa • Worldwide",
        author_quote: "“Every product begins with research — a visual exploration, an algorithmic curve, or overcoming a shop floor bottleneck. It matters that you feel the depth of the finished object.”",
        spec_innov_k: "Technology",
        spec_innov_v: "Direct 3D-Printed Formwork (Zero Silicone)",
        spec_cad_k: "CAD / Algo",
        spec_cad_v: "Rhino + Grasshopper / Fusion / Blender",
        spec_mat_k: "Materials",
        spec_mat_v: "Gypsum, Terracotta, Leather, Technical Polymers",
        status_line: "[STATUS]: Slots open for R&D, tiles, and prototyping for the current month.",

        // SECTION BARS
        sec_cases_l: "01 // Featured Projects",
        sec_cases_r: "Visual Research & Products",
        sec_services_l: "02 // Core Capabilities",
        sec_services_r: "How I can help your studio",
        sec_contact_l: "03 // Direct Inquiry",
        sec_contact_r: "Response within 1–2 hours",

        // CASE 1: TILES
        case1_badge_featured: "Flagship R&D",
        case1_badge_nosilicone: "Zero Silicone",
        case1_title: "Waves & Convex 80×80: Parametric Tiles without Silicone Molds",
        case1_desc: "Instead of classical silicone molds, I engineered a unified rigid retention frame with swap-in 3D-printed faceplates. This cuts R&D costs 4x and shrinks lead time from algorithm to cast tile down to 4 hours.",
        case1_h1_k: "Innovation",
        case1_h1_v: "Direct 3D-printed formwork with interchangeable plates — no 24h silicone curing wait.",
        case1_h2_k: "Geometry",
        case1_h2_v: "Algorithm locks perimeter edges flat for seamless diptych and wall mounting.",
        case1_btn: "View process photos & technology →",
        case1_format: "FORMAT: 80×80 mm (Diptychs / Wall Panels)",
        case1_colors: "COLORS: Natural Gypsum / Terracotta",

        // CASE 2: CLOCK
        case2_title: "Tension Leather Clock & Embossing Dies",
        case2_desc: "An exploration of tension: a Crazy Horse leather dial suspended by radial tabs on a steel hoop. Backed by a custom 3D-printed movement housing and polymer embossing dies without expensive brass tooling.",
        case2_h1_k: "Structure",
        case2_h1_v: "Radial membrane tension + hidden 3D-printed movement housing.",
        case2_h2_k: "Tooling",
        case2_h2_v: "High-density polymer dies to validate embossing depth and tactile feel.",
        case2_btn: "View concept & renders →",

        // CASE 3: DIGITAL FAB
        case3_title: "Spiral Extrusion, Ribbed Stands & R&D Archive",
        case3_desc: "Treating layer lines as an architectural feature: wide 0.8mm nozzle slow extrusion of overhangs without supports, corrugated Instax photo stands, Differential Growth vessels, and parametric threads.",
        case3_h1_k: "Physics",
        case3_h1_v: "0.8mm nozzle / 1.2mm wall / 15 mm/s speed / Spiral vase mode.",
        case3_h2_k: "Products",
        case3_h2_v: "Photo stands, drainage planters, lampshades, and custom G-code.",
        case3_btn: "Explore visual model archive →",

        // CAPABILITIES
        srv1_title: "Architectural Tiles & Wall Panels",
        srv1_desc: "Bespoke 80×80mm gypsum tiles, diptychs, and dimensional relief wall compositions for interior designers and private spaces.",
        srv1_meta: "<strong>Deliverable:</strong> Finished cast batches in unbleached white or terracotta.",
        srv2_title: "Casting Matrices & Workshop Tooling",
        srv2_desc: "Engineering and fabrication of modular formwork for mineral casting, furniture assembly templates, and cold-press leather dies.",
        srv2_meta: "<strong>Deliverable:</strong> Ready-to-use workshop tooling or CAD packages.",
        srv3_title: "Parametric CAD & Algorithm R&D",
        srv3_desc: "Generative surface scripts in Grasshopper, DFM optimization for batch production, and non-standard 3D printing toolpaths.",
        srv3_meta: "<strong>Deliverable:</strong> STEP/STL models, custom algorithms, and technical consulting.",

        // CONTACT FORM
        contact_title: "Have a project in mind?",
        contact_sub: "Fill out the brief on the right and pick your preferred messenger. Your inquiry will format instantly and open a direct chat with me, with an automatic copy sent to email.",
        form_name: "Your Name / Studio *",
        form_contact: "Contact (Telegram, WhatsApp, or Phone) *",
        form_cat: "Inquiry Type",
        form_msg: "Briefly describe your project *",
        dispatch_label: "Send your formatted brief directly via:",
        opt_tiles: "Parametric Tiles (Convex / Waves / Wall Panels)",
        opt_molds: "3D-Printed Casting Matrices (Silicone-Free)",
        opt_objects: "Product Design (Leather Clock / Vessels / Stands)",
        opt_tooling: "Workshop Jigs, Templates & Leather Stamps",
        opt_cad: "Parametric CAD / Grasshopper R&D",

        // ABOUT PAGE
        about_title: "I craft design you can feel with your fingertips.",
        about_p1: "Hello! My name is Roman. I founded <strong>Feely Design</strong> at the intersection of two worlds: precise digital algorithms (Grasshopper, parametric geometry, 3D printing) and physical craftsmanship (mineral casting, gypsum tactile surfaces, genuine leather).",
        about_quote: "“Every product begins with research — visual exploration, unique mathematics, or solving a manufacturing dead-end. For example, I completely abandoned silicone molding in favor of direct 3D-printed modular matrices with interchangeable faceplates, shrinking R&D from days down to hours.”",
        about_software: "Software Stack",
        about_hardware: "Hardware & Machines",
        about_materials: "Materials",

        // CASE 1 PAGE
        c1_hero_title: "Waves & Convex 80×80: Silicone-Free Parametric Gypsum Tiles",
        c1_hero_sub: "How I eliminated silicone molding by engineering a unified rigid retention frame with swap-in 3D-printed faceplates. Screen to physical cast in under 4 hours.",
        c1_fig1: "FIG 1.1 // CONVEX 80×80 SERIES (NATURAL GYPSUM & TERRACOTTA)",
        c1_fig2: "FIG 1.2 // MODULAR FRAME + DETACHABLE WAVE FACEPLATE",
        c1_fig3: "FIG 1.3 // 3D-PRINTED FACEPLATE WITH DRAFT-ANGLE COMPENSATION",
        c1_fig4: "FIG 1.4 // GYPSUM SLURRY POUR & VIBRATION DEGASSING",
        c1_fig5: "FIG 1.5 // IRON-OXIDE PIGMENTED CAST IN CLAMPED FORMWORK",
        c1_fig6: "FIG 1.6 // DEMOLDED WAVE TILE SHOWING DRAMATIC LIGHT AND SHADOW",
        c1_card1_t: "Zero Silicone Bottleneck",
        c1_card1_d: "Traditional silicone is expensive and requires a full 24 hours to cure each mold iteration. In parametric design, where every wave frequency is an experiment, silicone kills momentum. My direct-printed formwork cuts R&D costs 4x.",
        c1_card2_t: "Interchangeable Faceplates",
        c1_card2_d: "All tiles within a format family share the same outer retention clamp. To launch a new relief, only the thin faceplate needs to be printed and snapped in.",
        c1_card3_t: "Custom Commissions",
        c1_card3_d: "I cast custom compositions for interior projects and design ready-to-cast modular matrix packages for third-party workshops.",

        // CASE 2 PAGE
        c2_hero_title: "Tension Leather Clock & Polymer Cold-Press Embossing Dies",
        c2_hero_sub: "Merging the warmth of soft craft with digital precision: a radial tab leather dial suspended under tension on a steel hoop, paired with solid-infill polymer stamps without expensive brass engraving.",
        c2_fig1: "FIG 2.1 // RADIAL LEATHER MEMBRANE SUSPENDED ON STEEL HOOP",
        c2_fig2: "FIG 2.2 // 3D-PRINTED MOVEMENT HOUSING & RADIAL TAB LOCK",
        c2_card1_t: "Drumhead Tension",
        c2_card1_d: "Instead of gluing leather to flat plywood, the dial is held in tension by 8 radial tabs wrapping a perimeter metal hoop, celebrating its raw tactile edges.",
        c2_card2_t: "Polymer Embossing Dies",
        c2_card2_d: "CNC machining brass dies is costly for rapid prototyping. We print high-density polymer matrices with draft-angle compensation that easily handle cold-press tonnage.",
        c2_card3_t: "Commissions & Tooling",
        c2_card3_d: "Order bespoke tension clocks or commission custom embossing dies, patterns, and templates for your leather workshop.",

        // CASE 3 PAGE
        c3_hero_title: "Non-Planar Overhangs, Spiral Vessels & Tactile Objects",
        c3_hero_sub: "Treating the 3D printer as a weaving loom for molten polymer: combining Grasshopper attractors with wide 0.8mm nozzle slow extrusion (15 mm/s) to produce deliberate structural ribs and overhang loops without supports.",
        c3_fig1: "FIG 3.1 // CORRUGATED INSTAX PHOTO STAND (TACTILE RIB GEOMETRY)",
        c3_fig2: "FIG 3.2 // GRASSHOPPER SURFACE DEFORMATION & ATTRACTOR GRAPH",
        c3_card1_t: "0.8mm Heavy Slicing Protocol",
        c3_card1_d: "To achieve monolithic wall strength and deep tactile grooves, standard fine slicing is replaced with calibrated wide-bead parameters: 0.8mm nozzle, 0.6mm layer height, 15 mm/s slow extrusion.",
        c3_card2_t: "Generative Model Families",
        c3_card2_d: "Every object in the archive is fully parametric: Differential Growth planters with drainage, weaved attractor vessels, and custom pitch helical threads.",
        c3_card3_t: "G-Code & Small Batches",
        c3_card3_d: "I provide optimized production G-code packages for 3D farms, license Grasshopper definitions, and fabricate physical product batches.",

        // FOOTER
        footer_loc: "HAIFA, ISRAEL • WORLDWIDE SHIPPING & CAD"
    },
    ru: {
        brand_name: "FEELY DESIGN // R&D LAB",
        nav_work: "Проекты",
        nav_services: "Направления",
        nav_about: "Обо мне",
        nav_all_cases: "← Все проекты",
        nav_cta: "Обсудить проект →",
        nav_order_tiles: "Заказать плитку / матрицу →",
        nav_order_clock: "Заказать изделие / штамп →",
        nav_order_print: "Заказать модель / печать →",
        nav_write_roman: "Написать Роману →",
        breadcrumb_home: "ГЛАВНАЯ",

        hero_tag1: "Параметрический R&D",
        hero_tag2: "Печать матриц без силикона",
        hero_tag3: "Предметный дизайн",
        hero_title: "Материализую цифровые алгоритмы в осязаемые предметы.",
        hero_sub: "Я проектирую генеративный рельеф в Grasshopper, печатаю модульную опалубку со сменными фасадами без силикона и создаю тактильную гипсовую плитку, предметы интерьера и оснастку для мастерских.",
        hero_btn_cases: "Смотреть работы ↓",
        hero_btn_about: "Обо мне и манифест →",

        author_name: "Роман Симонян",
        author_role: "Основатель Feely Design",
        author_loc: "Хайфа • Worldwide",
        author_quote: "«Каждый свой продукт я начинаю с исследования — визуального поиска, уникального алгоритма или решения технологического тупика. Важно, чтобы вы чувствовали глубину продукта».",
        spec_innov_k: "Технология",
        spec_innov_v: "Прямая печать матриц (Zero Silicone)",
        spec_cad_k: "CAD / Алгоритмы",
        spec_cad_v: "Rhino + Grasshopper / Fusion / Blender",
        spec_mat_k: "Материалы",
        spec_mat_v: "Гипс, Терракота, Кожа, Полимеры",
        status_line: "[СТАТУС]: Открыты слоты на R&D, плитку и прототипирование в этом месяце.",

        sec_cases_l: "01 // Избранные проекты",
        sec_cases_r: "Визуальные исследования и продукты",
        sec_services_l: "02 // Направления работы",
        sec_services_r: "Чем я могу помочь вашему проекту",
        sec_contact_l: "03 // Прямая связь & Заявка",
        sec_contact_r: "Ответ в течение 1–2 часов",

        case1_badge_featured: "Флагманский R&D",
        case1_badge_nosilicone: "Без силикона",
        case1_title: "Waves & Convex 80×80: Параметрическая плитка без силикона",
        case1_desc: "Вместо классических силиконовых форм я создал унифицированную жесткую опалубку со сменными 3D-печатными фасадами. Это снижает себестоимость R&D в 4 раза и ускоряет путь от экрана до готовой отливки до нескольких часов.",
        case1_h1_k: "Инновация",
        case1_h1_v: "Прямая печать матриц со сменными фасадами — минус 24 часа на силикон.",
        case1_h2_k: "Геометрия",
        case1_h2_v: "Алгоритм удерживает плоский кант для бесшовного монтажа в настенные панно.",
        case1_btn: "Смотреть фото процесса и технологию →",
        case1_format: "ФОРМАТ: 80×80 мм (Диптихи / Панно)",
        case1_colors: "ЦВЕТА: Натуральный гипс / Терракота",

        case2_title: "Концепт часов на растяжении кожи и штампы тиснения",
        case2_desc: "Исследование натяжения: циферблат из кожи Crazy Horse растянут лепестками на стальном обруче. В дополнение к часам — печатные полимерные штампы для холодного тиснения без дорогих латунных клише.",
        case2_h1_k: "Конструкция",
        case2_h1_v: "Радиальное натяжение мембраны + скрытый печатный корпус механизма.",
        case2_h2_k: "Оснастка",
        case2_h2_v: "Твердотельные клише для проверки тактильной глубины тиснения.",
        case2_btn: "Смотреть концепт и рендеры →",

        case3_title: "Спиральная печать, ребристые стенды и архив R&D",
        case3_desc: "Превращение физики слоев 3D-печати в архитектурный прием: медленная печать широким соплом нависаний без поддержек, подставки под Instax, вазы Differential Growth и параметрическая резьба.",
        case3_h1_k: "Физика",
        case3_h1_v: "Сопло 0.8 мм / Стенка 1.2 мм / Скорость 15 мм/с / Спиральный режим.",
        case3_h2_k: "Продукты",
        case3_h2_v: "Стенды для фото, вазы с дренажем, плафоны и кастомный G-code.",
        case3_btn: "Смотреть визуальный архив моделей →",

        srv1_title: "Плитка и настенные панно",
        srv1_desc: "Авторская гипсовая плитка 80×80 мм, диптихи и крупные рельефные композиции для дизайнеров интерьера и архитектурных бюро.",
        srv1_meta: "<strong>Результат:</strong> Готовая серия отливок в натуральном цвете или терракоте.",
        srv2_title: "Печатные матрицы и оснастка",
        srv2_desc: "Проектирование и изготовление модульной опалубки под гипсовое/бетонное литье, кондукторов для мебели и клише для тиснения кожи.",
        srv2_meta: "<strong>Результат:</strong> Готовая оснастка для мастерской или файлы под ваш станочный парк.",
        srv3_title: "Параметрический CAD / R&D",
        srv3_desc: "Генерация уникального рельефа в Grasshopper, адаптация изделий под серийное производство и нестандартные траектории 3D-печати.",
        srv3_meta: "<strong>Результат:</strong> Модели STEP/STL, генеративные скрипты и консультации.",

        contact_title: "Обсудим вашу задачу?",
        contact_sub: "Заполните короткий бриф справа и выберите удобный мессенджер. Заявка мгновенно сформируется и откроется в чате со мной, а копия улетит на почту.",
        form_name: "Ваше имя / Студия *",
        form_contact: "Контакт (Telegram, WhatsApp или телефон) *",
        form_cat: "Направление запроса",
        form_msg: "Пара слов о задаче *",
        dispatch_label: "Отправить готовую заявку напрямую:",
        opt_tiles: "Параметрическая плитка (Convex / Waves / Панно на стену)",
        opt_molds: "Печатные матрицы для литья гипса/бетона (без силикона)",
        opt_objects: "Предметный дизайн (Часы из кожи / Вазы / Стенды)",
        opt_tooling: "Оснастка, шаблоны и штампы для мастерских",
        opt_cad: "Параметрический CAD / Grasshopper R&D",

        about_title: "Я создаю дизайн, который чувствуется кончиками пальцев.",
        about_p1: "Привет! Меня зовут Роман. Я основал <strong>Feely Design</strong> на стыке двух миров: точной цифровой математики (алгоритмы Grasshopper, параметрика, 3D-печать) и физического ремесла (минеральное литье, тактильность гипса, натуральная кожа).",
        about_quote: "«Каждый свой продукт я начинаю с исследования — визуального поиска, необычного алгоритма или решения технологического тупика. Например, я полностью отказался от силикона в пользу прямой 3D-печати модульных матриц со сменными фасадами, сократив R&D с суток до нескольких часов».",
        about_software: "Стек программ",
        about_hardware: "Оборудование",
        about_materials: "Материалы",

        c1_hero_title: "Waves & Convex 80×80: Параметрическая плитка без силиконовых форм",
        c1_hero_sub: "Как я полностью исключил этап заливки силикона, создав унифицированную жесткую опалубку со сменными печатными вставками. Процесс от скрипта в Grasshopper до первой физической отливки сократился с 24 часов до 4 часов.",
        c1_fig1: "РИС 1.1 // СЕРИЯ CONVEX 80×80 В НАТУРАЛЬНОМ ГИПСЕ И ТЕРРАКОТЕ",
        c1_fig2: "РИС 1.2 // МОДУЛЬНЫЙ КОРПУС + СМЕННЫЙ ФАСАД С ВОЛНАМИ",
        c1_fig3: "РИС 1.3 // 3D-ПЕЧАТНЫЙ ФАСАД С КОМПЕНСАЦИЕЙ УКЛОНОВ",
        c1_fig4: "РИС 1.4 // ЗАЛИВКА МИНЕРАЛЬНОГО РАСТВОРА И ДЕГАЗАЦИЯ",
        c1_fig5: "РИС 1.5 // ПИГМЕНТИРОВАННАЯ ТЕРРАКОТА В УНИФИЦИРОВАННОЙ ОПАЛУБКЕ",
        c1_fig6: "РИС 1.6 // ГОТОВАЯ ПЛИТКА WAVES ПОД СКОЛЬЗЯЩИМ СВЕТОМ",
        c1_card1_t: "Отказ от силикона",
        c1_card1_d: "Классический силикон дорог и требует целые сутки на застывание каждой итерации формы. В параметрическом дизайне, где каждая волна или купол — это эксперимент, силикон убивает темп. Моя технология прямой печати матриц снижает стоимость R&D в 4 раза.",
        c1_card2_t: "Сменные фасады",
        c1_card2_d: "Все плитки одного формата (80×80 мм) используют один и тот же внешний контур с зажимами. Чтобы запустить в серию новую волну или купол, достаточно напечатать только тонкую фасадную пластину с нужным микрорельефом.",
        c1_card3_t: "Заказ плитки или матриц",
        c1_card3_d: "Я изготавливаю как готовые серии плитки и настенных панно для интерьерных проектов, так и разрабатываю матрицы под ключ для вашей мастерской.",

        c2_hero_title: "Натяжные интерьерные часы из кожи и оснастка для тиснения",
        c2_hero_sub: "Соединение ремесленной мягкости кожи и точности цифрового производства: радиальный циферблат, натянутый лепестками на стальном обруче, и твердотельные полимерные штампы для холодного тиснения без латунных клише.",
        c2_fig1: "РИС 2.1 // РАДИАЛЬНАЯ КОЖАНАЯ МЕМБРАНА НА СТАЛЬНОМ КОНТУРЕ",
        c2_fig2: "РИС 2.2 // 3D-ПЕЧАТНЫЙ КОРПУС МЕХАНИЗМА И ФИКСАТОР ЛЕПЕСТКОВ",
        c2_card1_t: "Эффект барабана",
        c2_card1_d: "Вместо наклеивания кожи на плоскую фанеру циферблат удерживается натяжением 8 радиальных лепестков вокруг стального кольца. Задняя печатная шайба фиксирует натяжение и прячет кварцевый механизм.",
        c2_card2_t: "Полимерные штампы",
        c2_card2_d: "Фрезеровка латунных клише стоит дорого и не подходит для быстрого тестирования тактильной глубины. Мы печатаем высокоплотные полимерные матрицы с рассчитанными фасками, выдерживающими усилие пресса при холодном тиснении.",
        c2_card3_t: "Заказ объекта или штампа",
        c2_card3_d: "Вы можете заказать как авторские интерьерные часы, так и разработку клише, выкроек и шаблонов для вашей кожевенной студии.",

        c3_hero_title: "Непланарные нависания, спиральные вазы и тактильные объекты",
        c3_hero_sub: "3D-принтер как ткацкий станок для расплавленного полимера: сочетая аттракторы в Grasshopper с широким соплом (0.8 мм) и медленной печатью (15 мм/с), мы создаем выразительные ребристые текстуры и контролируемые петли нависаний без единой поддержки.",
        c3_fig1: "РИС 3.1 // ВОЛНИСТАЯ ПОДСТАВКА ДЛЯ ФОТОКАРТОЧЕК INSTAX",
        c3_fig2: "РИС 3.2 // ГРАФ ДЕФОРМАЦИИ ПОВЕРХНОСТЕЙ В GRASSHOPPER",
        c3_card1_t: "Протокол 0.8 мм",
        c3_card1_d: "Чтобы получить монолитную стенку с выраженными светотеневыми бороздами, мы отключаем стандартные тонкие слои: сопло 0.8 мм, слой 0.6 мм, стенка 1.2 мм в режиме Spiral Vase при скорости 15 мм/с.",
        c3_card2_t: "Генеративные модели",
        c3_card2_d: "Каждый объект в архиве лаборатории параметризован — пропорции, частоту волны и допуски можно пересчитать под нужные габариты: вазы Differential Growth, плетеные сосуды и настенные крепежи.",
        c3_card3_t: "Файлы и малые серии",
        c3_card3_d: "Мы готовим оптимизированные G-code пакеты для 3D-ферм, лицензируем определения Grasshopper и отливаем готовые физические серии.",

        footer_loc: "ХАЙФА, ИЗРАИЛЬ • ДОСТАВКА ПО ВСЕМУ МИРУ"
    }
};

function setLanguage(lang) {
    if (!I18N[lang]) return;
    localStorage.setItem("feely_lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (I18N[lang] && I18N[lang][key] !== undefined) {
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
        `📝 Details: ${message}`
    ].filter(Boolean).join("\n");

    return { name, contact, category, message, text };
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
        formData.append("Project_Details", fields.message);
        formData.append("Source_Page", window.location.href);

        const response = await fetch("https://formsubmit.co/ajax/simonyan.creator@gmail.com", {
            method: "POST",
            headers: { "Accept": "application/json" },
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
                <p id="ig-modal-desc" style="font-size: 0.88rem; color: var(--text-muted);"></p>
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
        ? "Instagram блокирует авто-вставку текста по внешним ссылкам.<br>Карточка вашего проекта уже в буфере обмена — нажмите <strong>Вставить (Ctrl+V / Paste)</strong> в чате с <strong>@feely_design</strong>."
        : "Instagram security prevents third-party sites from prepopulating direct messages.<br>Your brief is copied to clipboard — simply press <strong>Paste (Ctrl+V)</strong> in chat with <strong>@feely_design</strong>.";
    document.getElementById("ig-open-btn").textContent = isRu
        ? "Перейти в Direct @feely_design ↗"
        : "Open @feely_design Direct ↗";
    document.getElementById("ig-close-btn").textContent = isRu ? "Закрыть" : "Close";
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

    try {
        await navigator.clipboard.writeText(fields.text);
    } catch (e) {}

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
                ? "✓ Заявка успешно отправлена на почту: " + FEELY_CONFIG.emailSubject
                : "✓ Inquiry successfully sent to email: " + FEELY_CONFIG.emailSubject);
        } else {
            const subj = encodeURIComponent(FEELY_CONFIG.emailSubject);
            window.location.href = `mailto:${FEELY_CONFIG.email}?subject=${subj}&body=${encoded}`;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialise language across ALL pages from shared localStorage
    const savedLang = localStorage.getItem("feely_lang") || "ru";
    setLanguage(savedLang);

    // 2. Language switchers on any page
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.getAttribute("data-lang"));
        });
    });

    // 3. Messenger dispatch buttons
    document.querySelectorAll("[data-dispatch]").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            dispatchInquiry(btn.getAttribute("data-dispatch"));
        });
    });
});
