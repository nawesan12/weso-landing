"use client";

import { cursorMarkup, footerMarkup, headerMarkup } from "./lib/chrome";
import { useInteractiveExperience } from "./lib/useInteractiveExperience";

const landingMarkup = /* html */ String.raw`
${cursorMarkup}
${headerMarkup}
<main>
    <!-- ===== HERO SECTION ===== -->
    <section class="hero" id="inicio">
        <div class="container hero-grid">
            <div>
                <span
                    class="eyebrow"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.05s"
                >
                    Estudio Global · 100% Independiente
                </span>
                <h1
                    class="font-serif"
                    data-animate="fade-up"
                    style="--animate-delay: 0.12s"
                >
                    Diseñamos experiencias que convierten marcas
                    ambiciosas en fenómenos culturales.
                </h1>
                <p data-animate="fade-up" style="--animate-delay: 0.2s">
                    Desde Mar del Plata hacia el mundo, construimos
                    universos de marca, productos digitales y campañas
                    integrales que multiplican resultados. Cada proyecto
                    nace de la estrategia y se lanza con creatividad sin
                    límites.
                </p>
                <div
                    class="hero-actions"
                    data-animate="fade-up"
                    style="--animate-delay: 0.28s"
                >
                    <a
                        href="/contacto"
                        class="btn"
                        data-cursor-hover
                        data-cursor-pointer
                        >Agenda una sesión estratégica</a
                    >
                    <a
                        href="/casos"
                        class="btn-outline"
                        data-cursor-hover
                        data-cursor-pointer
                        >Explorar portafolio</a
                    >
                </div>
                <div
                    class="hero-stats"
                    data-animate="fade-up"
                    style="--animate-delay: 0.36s"
                >
                    <article class="hero-stat" data-cursor-hover>
                        <strong>+120</strong>
                        <span>lanzamientos regionales</span>
                        <p>
                            Productos, campañas y marcas que hoy lideran en
                            LATAM y Europa.
                        </p>
                    </article>
                    <article class="hero-stat" data-cursor-hover>
                        <strong>15</strong>
                        <span>industrias transformadas</span>
                        <p>
                            Fintech, salud, consumo masivo, educación,
                            energía, turismo y más.
                        </p>
                    </article>
                    <article class="hero-stat" data-cursor-hover>
                        <strong>98%</strong>
                        <span>de retención anual</span>
                        <p>
                            Nos convertimos en partners de confianza con
                            equipos que comparten nuestra ambición.
                        </p>
                    </article>
                </div>
            </div>
            <aside
                class="hero-visual"
                data-cursor-hover
                data-animate="fade-in"
                style="--animate-delay: 0.32s"
            >
                <img
                    src="/banner.webp"
                    alt="Equipo creativo de Weso trabajando"
                    loading="lazy"
                />
                <p>
                    Somos estrategas, diseñadores, storytellers y
                    tecnólogos. Trabajamos como un equipo híbrido junto
                    a tu marca para diseñar soluciones que nacen en la
                    data y viven en el corazón de las personas.
                </p>
                <div
                    class="tag-list"
                    data-animate="fade-up"
                    style="--animate-delay: 0.46s"
                >
                    <span class="tag" data-cursor-hover
                        >Branding Vivo</span
                    >
                    <span class="tag" data-cursor-hover
                        >Productos Interactivos</span
                    >
                    <span class="tag" data-cursor-hover
                        >Campañas Multiformato</span
                    >
                    <span class="tag" data-cursor-hover
                        >Growth & Data</span
                    >
                </div>
            </aside>
        </div>
    </section>

    <!-- ===== TICKER ===== -->
    <section class="ticker" aria-label="Servicios destacados de Weso">
        <div
            class="ticker-track"
            data-animate="fade-up"
            style="--animate-delay: 0.1s"
        >
            <span data-cursor-hover>Estrategia de Marca</span>
            <span data-cursor-hover>•</span>
            <span data-cursor-hover>Arquitectura Digital</span>
            <span data-cursor-hover>•</span>
            <span data-cursor-hover>Campañas Globales</span>
            <span data-cursor-hover>•</span>
            <span data-cursor-hover>Experiencias Inmersivas</span>
            <span data-cursor-hover>•</span>
            <span data-cursor-hover>Contenido Premium</span>
            <span data-cursor-hover>•</span>
            <span data-cursor-hover>Estrategia de Marca</span>
            <span data-cursor-hover>•</span>
            <span data-cursor-hover>Arquitectura Digital</span>
            <span data-cursor-hover>•</span>
            <span data-cursor-hover>Campañas Globales</span>
            <span data-cursor-hover>•</span>
            <span data-cursor-hover>Experiencias Inmersivas</span>
            <span data-cursor-hover>•</span>
            <span data-cursor-hover>Contenido Premium</span>
        </div>
    </section>

    <!-- ===== CLIENTS ===== -->
    <section id="clientes">
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Confían en nosotros</span>
                <h2 class="section-title font-serif">
                    Socios creativos de líderes que marcan la
                    diferencia.
                </h2>
                <p class="section-description">
                    Aliados de startups en hipercrecimiento, scaleups
                    tecnológicas y compañías consolidadas que se
                    transforman para conquistar nuevas audiencias.
                </p>
            </div>
            <div
                class="clients-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <div
                    class="client-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.16s"
                >
                    Atlas Bank
                </div>
                <div
                    class="client-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.2s"
                >
                    Nova Health
                </div>
                <div
                    class="client-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.24s"
                >
                    Arq Labs
                </div>
                <div
                    class="client-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.28s"
                >
                    Lumina AI
                </div>
                <div
                    class="client-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.32s"
                >
                    Blue Harbor
                </div>
                <div
                    class="client-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.36s"
                >
                    Terra Foods
                </div>
            </div>
        </div>
    </section>

    <!-- ===== PARTNERS ===== -->
    <section class="partners" aria-label="Alianzas estratégicas de Weso">
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Colaboraciones</span>
                <h2 class="section-title font-serif">
                    Impulsamos innovación junto a partners expertos.
                </h2>
                <p class="section-description">
                    Trabajamos en co-creación con compañías líderes para
                    potenciar soluciones tecnológicas, creatividad
                    aplicada y capacidad operativa en cada desafío.
                </p>
            </div>
            <div
                class="partners-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article
                    class="partner-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.16s"
                >
                    <h3>Rubicom</h3>
                    <p>
                        Tecnología financiera para diseñar productos
                        digitales con datos en tiempo real.
                    </p>
                </article>
                <article
                    class="partner-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.2s"
                >
                    <h3>Finnegans</h3>
                    <p>
                        Plataformas de gestión cloud para acelerar la
                        transformación de experiencias omnicanal.
                    </p>
                </article>
                <article
                    class="partner-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.24s"
                >
                    <h3>Animal Feed</h3>
                    <p>
                        Innovación agroalimentaria con foco en
                        sostenibilidad y trazabilidad de origen.
                    </p>
                </article>
                <article
                    class="partner-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.28s"
                >
                    <h3>Urban Pulse</h3>
                    <p>
                        Especialistas en experiencias inmersivas para
                        eventos híbridos y lanzamientos globales.
                    </p>
                </article>
                <article
                    class="partner-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.32s"
                >
                    <h3>DataSouth</h3>
                    <p>
                        Infraestructura analítica que integra modelos de
                        IA y tableros inteligentes para growth.
                    </p>
                </article>
                <article
                    class="partner-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.36s"
                >
                    <h3>Atlantic Studio</h3>
                    <p>
                        Producción audiovisual premium para contenidos de
                        alto impacto y distribución multiformato.
                    </p>
                </article>
            </div>
        </div>
    </section>

    <!-- ===== RECOGNITIONS ===== -->
    <section class="awards" aria-label="Reconocimientos globales de Weso">
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Reconocimientos</span>
                <h2 class="section-title font-serif">
                    Creatividad premiada por su impacto en resultados.
                </h2>
                <p class="section-description">
                    Celebramos cada logro junto a nuestros clientes. Somos
                    la agencia creativa latinoamericana con más premios en
                    campañas data-driven durante los últimos dos años.
                </p>
            </div>
            <div
                class="awards-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article class="award-card" data-cursor-hover>
                    <span class="award-pill">Cannes Lions</span>
                    <h3>Bronce · Experiencia de Marca</h3>
                    <p>
                        Caso Lumina OS: ecosistema omnicanal que elevó un 63%
                        el MRR en seis meses.
                    </p>
                </article>
                <article class="award-card" data-cursor-hover>
                    <span class="award-pill">El Ojo de Iberoamérica</span>
                    <h3>Oro · Innovación Digital</h3>
                    <p>
                        Activación inmersiva para Atlas Bank con asistentes de
                        IA y data en tiempo real.
                    </p>
                </article>
                <article class="award-card" data-cursor-hover>
                    <span class="award-pill">Webby Awards</span>
                    <h3>People's Voice · Mejor Web B2B</h3>
                    <p>
                        Plataforma de Terra Foods con storytelling interactivo
                        y comunidad global.
                    </p>
                </article>
                <article class="award-card" data-cursor-hover>
                    <span class="award-pill">Effie LATAM</span>
                    <h3>Plata · Campaña Integrada</h3>
                    <p>
                        Programa de fidelización para Nova Health con +210% en
                        adquisición mensual.
                    </p>
                </article>
            </div>
        </div>
    </section>

    <!-- ===== SERVICES ===== -->
    <section id="servicios">
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Servicios</span>
                <h2 class="section-title font-serif">
                    Un equipo integral para cada etapa del crecimiento.
                </h2>
                <p class="section-description">
                    Co-creamos estrategias y experiencias memorables,
                    alineadas con métricas de negocio y listas para
                    escalar. Cada servicio es un sprint creativo
                    respaldado por data y foco en resultados.
                </p>
            </div>
            <div
                class="services-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article
                    class="service-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.18s"
                >
                    <span class="service-icon">✨</span>
                    <div>
                        <h3>Branding & Identidad</h3>
                        <p>
                            Posicionamos tu marca en el corazón de su
                            comunidad con plataformas verbales y
                            visuales que se adaptan a cada punto de
                            contacto.
                        </p>
                    </div>
                    <ul class="service-list">
                        <li>Investigación & workshops</li>
                        <li>Arquitectura y narrativa de marca</li>
                        <li>Design systems dinámicos</li>
                    </ul>
                </article>
                <article
                    class="service-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.24s"
                >
                    <span class="service-icon">🧠</span>
                    <div>
                        <h3>Producto & Experiencia Digital</h3>
                        <p>
                            Diseñamos y desarrollamos plataformas
                            digitales, ecommerce y experiencias híbridas
                            que convierten y fidelizan.
                        </p>
                    </div>
                    <ul class="service-list">
                        <li>UX Research & CX mapping</li>
                        <li>Prototipado & diseño UI</li>
                        <li>Desarrollo web full-stack</li>
                    </ul>
                </article>
                <article
                    class="service-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.3s"
                >
                    <span class="service-icon">🚀</span>
                    <div>
                        <h3>Contenido & Growth</h3>
                        <p>
                            Activamos campañas omnicanal que conectan
                            historias poderosas con audiencias listas
                            para enamorarse de tu marca.
                        </p>
                    </div>
                    <ul class="service-list">
                        <li>Estrategia always-on & lanzamientos</li>
                        <li>Producción audiovisual y copywriting</li>
                        <li>Medición, optimización & growth loops</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <!-- ===== GLOBAL IMPACT ===== -->
    <section class="global-impact" aria-labelledby="impacto-global">
        <div class="container impact-grid">
            <div data-animate="fade-up">
                <span class="section-label" id="impacto-global"
                    >Impacto global</span
                >
                <h2 class="section-title font-serif">
                    Operamos como un hub creativo con alcance mundial.
                </h2>
                <p class="section-description">
                    Desde Mar del Plata lideramos squads distribuidos en
                    Buenos Aires, Ciudad de México, Madrid y São Paulo. Nos
                    conectamos con tus equipos internos para lanzar ideas con
                    la velocidad de una startup y la rigurosidad de una
                    consultora.
                </p>
                <ul class="impact-list">
                    <li data-cursor-hover>
                        <strong>+20 países</strong> con campañas activas y
                        soporte en tres husos horarios.
                    </li>
                    <li data-cursor-hover>
                        <strong>5 idiomas</strong> para narrar tu historia sin
                        perder consistencia cultural.
                    </li>
                    <li data-cursor-hover>
                        <strong>Labs de innovación</strong> dedicados a IA
                        generativa, Web3 y experiencias inmersivas.
                    </li>
                </ul>
            </div>
            <aside
                class="impact-visual"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <div class="impact-map" aria-hidden="true">
                    <span class="halo halo-1"></span>
                    <span class="halo halo-2"></span>
                    <span class="halo halo-3"></span>
                    <img src="/mapa-weso.svg" alt="Mapa del impacto global" />
                </div>
                <div class="impact-badges">
                    <span class="impact-badge" data-cursor-hover>
                        Partner HubSpot Solutions
                    </span>
                    <span class="impact-badge" data-cursor-hover>
                        Miembros de Remote First Institute
                    </span>
                    <span class="impact-badge" data-cursor-hover>
                        Certificados en Google Marketing Platform
                    </span>
                </div>
            </aside>
        </div>
    </section>

    <!-- ===== CASE STUDIES ===== -->
    <section id="casos">
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Casos destacados</span>
                <h2 class="section-title font-serif">
                    Resultados tangibles que transforman industrias.
                </h2>
                <p class="section-description">
                    Historias reales de marcas que confiaron en Weso
                    para amplificar su impacto. Estrategia, creatividad
                    y ejecución en sincronía.
                </p>
            </div>
            <div
                class="cases-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article
                    class="case-card"
                    data-image="tech"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.18s"
                >
                    <div class="case-content">
                        <span class="case-label">SaaS · Serie B</span>
                        <h3 class="case-title">Lumina OS</h3>
                        <p class="case-description">
                            Rebranding integral, reposicionamiento
                            global y ecosistema digital que elevó el MRR
                            en un 63% tras seis meses.
                        </p>
                        <a
                            href="/contacto"
                            class="case-link"
                            data-cursor-hover
                        >
                            Ver cómo lo logramos
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </article>
                <article
                    class="case-card"
                    data-image="finance"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.24s"
                >
                    <div class="case-content">
                        <span class="case-label">Fintech · LATAM</span>
                        <h3 class="case-title">Atlas Bank</h3>
                        <p class="case-description">
                            Diseño de app, onboarding inteligente y
                            campañas de adquisición que duplicaron la
                            base de usuarios activos.
                        </p>
                        <a
                            href="/contacto"
                            class="case-link"
                            data-cursor-hover
                        >
                            Descubrir el proyecto
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </article>
                <article
                    class="case-card"
                    data-image="food"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.3s"
                >
                    <div class="case-content">
                        <span class="case-label">Consumo masivo</span>
                        <h3 class="case-title">Terra Foods</h3>
                        <p class="case-description">
                            Plataforma ecommerce, storytelling y
                            programa de fidelización que generaron +140%
                            en ventas directas.
                        </p>
                        <a
                            href="/contacto"
                            class="case-link"
                            data-cursor-hover
                        >
                            Agenda una demo
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- ===== PROCESS ===== -->
    <section id="metodologia">
        <div class="container process-grid">
            <div data-animate="fade-up">
                <div class="section-header">
                    <span class="section-label">Metodología Weso</span>
                    <h2 class="section-title font-serif">
                        Equipos integrados, velocidad y claridad total.
                    </h2>
                    <p class="section-description">
                        Operamos como un partner dentro de tu
                        organización. Equipos ágiles, rituales semanales
                        y métricas compartidas para acelerar decisiones
                        y lanzar con precisión.
                    </p>
                </div>
                <a
                    href="/contacto"
                    class="btn-outline"
                    data-cursor-hover
                    data-cursor-pointer
                    data-animate="fade-up"
                    style="--animate-delay: 0.12s"
                >
                    Solicitar blueprint personalizado
                </a>
            </div>
            <ol
                class="process-list"
                data-animate="fade-up"
                style="--animate-delay: 0.18s"
            >
                <li
                    class="process-step"
                    data-step="01"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.22s"
                >
                    <h3>Descubrimiento inmersivo</h3>
                    <p>
                        Workshops, entrevistas y research para mapear
                        oportunidades, audiencias y diferenciales
                        competitivos.
                    </p>
                </li>
                <li
                    class="process-step"
                    data-step="02"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.28s"
                >
                    <h3>Strategic Sprint</h3>
                    <p>
                        Definimos narrativa, UX blueprint y roadmap
                        creativo con foco en KPIs y quick wins
                        accionables.
                    </p>
                </li>
                <li
                    class="process-step"
                    data-step="03"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.34s"
                >
                    <h3>Producción & activación</h3>
                    <p>
                        Diseño, desarrollo y contenidos integrados
                        listos para salir al mercado y medir impacto
                        desde el día cero.
                    </p>
                </li>
                <li
                    class="process-step"
                    data-step="04"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.4s"
                >
                    <h3>Optimización continua</h3>
                    <p>
                        Iteramos con data en vivo, experimentos y
                        automatizaciones para seguir escalando tu
                        crecimiento.
                    </p>
                </li>
            </ol>
        </div>
    </section>

    <!-- ===== WESO LABS ===== -->
    <section class="labs-section" id="labs">
        <div class="container">
            <div class="labs-wrapper" data-animate="fade-up">
                <div
                    class="labs-text space-y-4"
                    data-animate="fade-up"
                    style="--animate-delay: 0.08s"
                >
                    <span class="section-label">Weso Labs</span>
                    <h2 class="section-title font-serif">
                        Innovación aplicada en IA, Web3 y experiencias
                        inmersivas.
                    </h2>
                    <p>
                        Nuestro laboratorio interno explora tecnologías
                        emergentes y prototipa soluciones que luego
                        llevamos a las marcas con las que trabajamos.
                        Desde asistentes de IA entrenados en tus datos
                        hasta activaciones phygital con realidad
                        aumentada.
                    </p>
                    <a
                        href="/contacto"
                        class="btn"
                        data-cursor-hover
                        data-cursor-pointer
                        data-animate="fade-up"
                        style="--animate-delay: 0.16s"
                    >
                        Probar un piloto con Weso Labs
                    </a>
                </div>
                <div
                    class="labs-highlights"
                    data-animate="fade-up"
                    style="--animate-delay: 0.18s"
                >
                    <article
                        class="labs-card"
                        data-cursor-hover
                        data-animate="fade-up"
                        style="--animate-delay: 0.24s"
                    >
                        <h4>Experiencias activadas por IA</h4>
                        <p>
                            Personalizamos cada punto del journey con
                            contenido dinámico y asistentes
                            conversacionales.
                        </p>
                    </article>
                    <article
                        class="labs-card"
                        data-cursor-hover
                        data-animate="fade-up"
                        style="--animate-delay: 0.3s"
                    >
                        <h4>Digital twins & eventos híbridos</h4>
                        <p>
                            Diseñamos entornos inmersivos para
                            lanzamientos globales y comunidades 24/7.
                        </p>
                    </article>
                    <article
                        class="labs-card"
                        data-cursor-hover
                        data-animate="fade-up"
                        style="--animate-delay: 0.36s"
                    >
                        <h4>Growth automation</h4>
                        <p>
                            Automatizamos campañas, reporting y ciclos
                            de iteración para escalar sin fricción.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    <section id="testimonios">
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Testimonios</span>
                <h2 class="section-title font-serif">
                    Historias de crecimiento contadas por nuestros
                    socios.
                </h2>
                <p class="section-description">
                    Relaciones que se convierten en alianzas a largo
                    plazo. Equipos que confían en nuestra forma de
                    trabajar y en los resultados que entregamos.
                </p>
            </div>
            <div
                class="testimonials-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article
                    class="testimonial-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.18s"
                >
                    <p class="testimonial-text">
                        “Weso se incrustó en nuestro equipo con una
                        velocidad increíble. En tres meses lanzamos un
                        nuevo posicionamiento y una web que duplicó la
                        generación de leads calificados.”
                    </p>
                    <div class="testimonial-author">
                        <img
                            src="https://i.pravatar.cc/150?img=12"
                            alt="Retrato de Carla Domínguez"
                            loading="lazy"
                        />
                        <div>
                            <strong>Carla Domínguez</strong>
                            <span>VP Marketing · Lumina OS</span>
                        </div>
                    </div>
                </article>
                <article
                    class="testimonial-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.24s"
                >
                    <p class="testimonial-text">
                        “Desde el primer workshop entendieron nuestra
                        visión. Integraron data, creatividad y
                        performance para lanzar campañas globales que
                        triplicaron el ROI.”
                    </p>
                    <div class="testimonial-author">
                        <img
                            src="https://i.pravatar.cc/150?img=25"
                            alt="Retrato de Diego Ortega"
                            loading="lazy"
                        />
                        <div>
                            <strong>Diego Ortega</strong>
                            <span
                                >Chief Growth Officer · Atlas Bank</span
                            >
                        </div>
                    </div>
                </article>
                <article
                    class="testimonial-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.3s"
                >
                    <p class="testimonial-text">
                        “Su enfoque colaborativo y la obsesión por el
                        detalle nos permitieron acelerar la
                        transformación digital y crear experiencias
                        memorables para nuestros clientes.”
                    </p>
                    <div class="testimonial-author">
                        <img
                            src="https://i.pravatar.cc/150?img=32"
                            alt="Retrato de Fernanda Vélez"
                            loading="lazy"
                        />
                        <div>
                            <strong>Fernanda Vélez</strong>
                            <span
                                >Directora de Innovación · Terra
                                Foods</span
                            >
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- ===== INSIGHTS ===== -->
    <section id="insights">
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Insights</span>
                <h2 class="section-title font-serif">
                    Ideas frescas para liderar el futuro de tu marca.
                </h2>
                <p class="section-description">
                    Cada mes compartimos frameworks, guías y
                    aprendizajes accionables para tu equipo. Suscríbete
                    y recibe antes que nadie nuestras novedades.
                </p>
            </div>
            <div
                class="insights-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article
                    class="insight-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.18s"
                >
                    <span class="insight-tag">Guía</span>
                    <h3>
                        Cómo construir una plataforma de marca con IA
                        generativa
                    </h3>
                    <p>
                        De la investigación a la activación: procesos,
                        herramientas y casos reales para crear universos
                        de marca inteligentes.
                    </p>
                    <a
                        href="/contacto"
                        class="case-link"
                        data-cursor-hover
                    >
                        Solicitar descarga
                        <span aria-hidden="true">→</span>
                    </a>
                </article>
                <article
                    class="insight-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.24s"
                >
                    <span class="insight-tag">Framework</span>
                    <h3>
                        Playbook de lanzamientos de alto impacto en 45
                        días
                    </h3>
                    <p>
                        Un paso a paso para coordinar equipos creativos,
                        medios y tecnología con foco en métricas
                        comerciales.
                    </p>
                    <a
                        href="/contacto"
                        class="case-link"
                        data-cursor-hover
                    >
                        Recibir el playbook
                        <span aria-hidden="true">→</span>
                    </a>
                </article>
                <article
                    class="insight-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.3s"
                >
                    <span class="insight-tag">Reporte</span>
                    <h3>El futuro del retail híbrido en LATAM</h3>
                    <p>
                        Tendencias, datos y oportunidades para marcas
                        que buscan combinar experiencias físicas y
                        digitales con éxito.
                    </p>
                    <a
                        href="/contacto"
                        class="case-link"
                        data-cursor-hover
                    >
                        Unirme a la lista
                        <span aria-hidden="true">→</span>
                    </a>
                </article>
            </div>
        </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-section" id="contacto">
        <div class="container">
            <div class="cta-wrapper" data-animate="fade-up">
                <h2
                    class="font-serif"
                    data-animate="fade-up"
                    style="--animate-delay: 0.08s"
                >
                    ¿Listo para construir la próxima historia icónica?
                </h2>
                <p
                    data-animate="fade-up"
                    style="--animate-delay: 0.16s"
                >
                    Cuéntanos sobre tu desafío y diseñaremos una
                    propuesta a medida en menos de 48 horas. Somos el
                    partner creativo y tecnológico que acompaña a
                    equipos con ambición global.
                </p>
                <div
                    class="cta-actions"
                    data-animate="fade-up"
                    style="--animate-delay: 0.24s"
                >
                    <a
                        href="mailto:contacto@weso.ar"
                        class="btn"
                        data-cursor-hover
                        data-cursor-pointer
                        data-animate="fade-up"
                        style="--animate-delay: 0.28s"
                        >contacto@weso.ar</a
                    >
                    <a
                        href="https://cal.com/nahuel-santillan"
                        class="btn-outline"
                        target="_blank"
                        rel="noreferrer"
                        data-cursor-hover
                        data-cursor-pointer
                        data-animate="fade-up"
                        style="--animate-delay: 0.32s"
                    >
                        Reservar una llamada
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>
${footerMarkup}
`;

export default function HomePage() {
    useInteractiveExperience();

    return (
        <div
            id="landing-page"
            dangerouslySetInnerHTML={{ __html: landingMarkup }}
        />
    );
}
