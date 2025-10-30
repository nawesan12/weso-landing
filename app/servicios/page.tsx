"use client";

import { cursorMarkup, footerMarkup, headerMarkup } from "../lib/chrome";
import { useInteractiveExperience } from "../lib/useInteractiveExperience";

const serviciosMarkup = /* html */ String.raw`
${cursorMarkup}
${headerMarkup}
<main>
    <section class="page-hero" id="servicios">
        <div class="container page-hero-grid">
            <div>
                <span
                    class="eyebrow"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.05s"
                >
                    Servicios end-to-end
                </span>
                <h1
                    class="font-serif"
                    data-animate="fade-up"
                    style="--animate-delay: 0.12s"
                >
                    Equipos creativos, tecnológicos y estratégicos para
                    escalar marcas imparables.
                </h1>
                <p data-animate="fade-up" style="--animate-delay: 0.2s">
                    Acompañamos a compañías ambiciosas desde la visión hasta la
                    activación. Cada célula de Weso combina investigación,
                    diseño, contenido y growth para transformar ideas en
                    experiencias memorables.
                </p>
                <div
                    class="hero-actions"
                    data-animate="fade-up"
                    style="--animate-delay: 0.28s"
                >
                    <a
                        href="/casos"
                        class="btn-outline"
                        data-cursor-hover
                        data-cursor-pointer
                        >Ver casos en acción</a
                    >
                    <a
                        href="/contacto"
                        class="btn"
                        data-cursor-hover
                        data-cursor-pointer
                        >Co-crear mi próximo proyecto</a
                    >
                </div>
            </div>
            <aside
                class="page-hero-meta"
                data-animate="fade-up"
                style="--animate-delay: 0.24s"
            >
                <p>
                    Operamos como una extensión de tu equipo, con squads
                    especializados y metodologías ágiles que garantizan
                    velocidad sin perder profundidad.
                </p>
                <ul class="meta-list">
                    <li data-cursor-hover>Brand systems escalables</li>
                    <li data-cursor-hover>Productos digitales de alto impacto</li>
                    <li data-cursor-hover>Campañas integradas multicanal</li>
                    <li data-cursor-hover>Activaciones basadas en data</li>
                </ul>
            </aside>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Oferta integral</span>
                <h2 class="section-title font-serif">
                    Servicios diseñados para responder a cada etapa de
                    crecimiento.
                </h2>
                <p class="section-description">
                    Organizamos nuestras capacidades en verticales que se
                    integran entre sí. Podemos liderar un rebranding completo,
                    lanzar un nuevo producto digital o potenciar una campaña
                    global en semanas.
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
                    style="--animate-delay: 0.16s"
                >
                    <span class="service-icon">✨</span>
                    <div>
                        <h3>Estrategia & Identidad</h3>
                        <p>
                            Definimos el posicionamiento, la narrativa y la voz
                            de tu marca para conquistar nuevas audiencias.
                        </p>
                    </div>
                    <ul class="service-list">
                        <li>Investigación cuali & cuantitativa</li>
                        <li>Arquitectura de marca y portafolio</li>
                        <li>Plataformas verbales y visuales vivas</li>
                    </ul>
                </article>
                <article
                    class="service-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.22s"
                >
                    <span class="service-icon">🛰️</span>
                    <div>
                        <h3>Producto & Experiencia</h3>
                        <p>
                            Diseñamos y desarrollamos plataformas digitales
                            end-to-end con foco en usabilidad y performance.
                        </p>
                    </div>
                    <ul class="service-list">
                        <li>Discovery, UX research & CX mapping</li>
                        <li>Product design systems & prototipado</li>
                        <li>Desarrollo web, mobile y ecommerce</li>
                    </ul>
                </article>
                <article
                    class="service-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.28s"
                >
                    <span class="service-icon">🎥</span>
                    <div>
                        <h3>Contenido & Storytelling</h3>
                        <p>
                            Creamos narrativas inmersivas que conectan tu
                            propuesta de valor con los momentos clave de tus
                            audiencias.
                        </p>
                    </div>
                    <ul class="service-list">
                        <li>Campañas always-on y lanzamientos</li>
                        <li>Producción audiovisual & motion</li>
                        <li>Copywriting multiformato & guidelines</li>
                    </ul>
                </article>
                <article
                    class="service-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.34s"
                >
                    <span class="service-icon">📈</span>
                    <div>
                        <h3>Growth & Automatización</h3>
                        <p>
                            Activamos ecosistemas medibles que impulsan
                            adquisición, retención y revenue recurrente.
                        </p>
                    </div>
                    <ul class="service-list">
                        <li>Modelos de atribución y dashboards</li>
                        <li>CRM, marketing automation & CDP</li>
                        <li>Optimización creativa basada en data</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <section class="section-surface">
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Capacidades clave</span>
                <h2 class="section-title font-serif">
                    Un ecosistema modular de especialistas listos para sumarse
                    a tu roadmap.
                </h2>
                <p class="section-description">
                    Cada célula de Weso combina estrategia, creatividad y
                    tecnología. Podemos sumarnos en modo squad dedicado o como
                    task-force para hitos específicos.
                </p>
            </div>
            <div
                class="info-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article class="info-card" data-cursor-hover>
                    <h3>Research & Insights</h3>
                    <p>
                        Detectamos oportunidades accionables con research
                        mixto, analítica y modelos predictivos.
                    </p>
                    <ul class="info-list">
                        <li>Entrevistas en profundidad y comunidades</li>
                        <li>Mapeo de experiencia y blueprint de servicio</li>
                        <li>Analítica avanzada y experimentación</li>
                    </ul>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Diseño & Tecnología</h3>
                    <p>
                        Combinamos visión creativa con ingeniería para lanzar
                        productos robustos y escalables.
                    </p>
                    <ul class="info-list">
                        <li>Design systems multi-brand</li>
                        <li>Desarrollo headless y JAMStack</li>
                        <li>Integraciones con IA generativa y APIs</li>
                    </ul>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Contenidos & Experiencias</h3>
                    <p>
                        Storytelling, producción y activaciones phygital que
                        amplifican la voz de tu marca.
                    </p>
                    <ul class="info-list">
                        <li>Dirección creativa y scripting</li>
                        <li>Producción audiovisual, podcast & eventos</li>
                        <li>Experiencias inmersivas y Web3</li>
                    </ul>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Growth & Revenue</h3>
                    <p>
                        Implementamos ecosistemas medibles que conectan
                        marketing, producto y ventas.
                    </p>
                    <ul class="info-list">
                        <li>Optimización de funnels y LTV</li>
                        <li>Automatización de nurturing y loyalty</li>
                        <li>Modelos de atribución y MMM</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Cómo trabajamos</span>
                <h2 class="section-title font-serif">
                    Roadmaps ágiles, rituales claros y foco en métricas
                    compartidas.
                </h2>
                <p class="section-description">
                    Nos integramos a tus herramientas y cultura. Operamos con
                    squads pequeños, ciclos de validación cortos y dashboards
                    compartidos en tiempo real.
                </p>
            </div>
            <ol
                class="process-list"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <li class="process-step" data-step="01" data-cursor-hover>
                    <h3>Kickoff inmersivo</h3>
                    <p>
                        Workshops y mapeo de objetivos para definir hipótesis,
                        KPIs y governance del proyecto.
                    </p>
                </li>
                <li class="process-step" data-step="02" data-cursor-hover>
                    <h3>Strategic Sprint</h3>
                    <p>
                        Desarrollo de blueprint estratégico, ruta creativa y
                        backlog priorizado con quick wins.
                    </p>
                </li>
                <li class="process-step" data-step="03" data-cursor-hover>
                    <h3>Producción iterativa</h3>
                    <p>
                        Diseño, desarrollo y contenido corren en paralelo con
                        checkpoints semanales y demos abiertas.
                    </p>
                </li>
                <li class="process-step" data-step="04" data-cursor-hover>
                    <h3>Activación & Growth</h3>
                    <p>
                        Lanzamos, medimos y optimizamos con experimentos
                        continuos y tableros compartidos.
                    </p>
                </li>
            </ol>
            <div
                class="cta-inline"
                data-animate="fade-up"
                style="--animate-delay: 0.24s"
            >
                <p>
                    Diseñamos una propuesta estratégica a medida en menos de 72
                    horas.
                </p>
                <a
                    href="/contacto"
                    class="btn"
                    data-cursor-hover
                    data-cursor-pointer
                    >Solicitar diagnóstico gratuito</a
                >
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
            <div class="cta-wrapper" data-animate="fade-up">
                <h2 class="font-serif" style="--animate-delay: 0.08s">
                    ¿Listo para lanzar algo extraordinario?
                </h2>
                <p style="--animate-delay: 0.16s">
                    Sumemos fuerzas para construir experiencias que enamoren a
                    tu audiencia y generen impacto real en el negocio.
                </p>
                <div class="cta-actions" style="--animate-delay: 0.24s">
                    <a
                        href="/contacto"
                        class="btn"
                        data-cursor-hover
                        data-cursor-pointer
                        >Hablar con el equipo</a
                    >
                    <a
                        href="/casos"
                        class="btn-outline"
                        data-cursor-hover
                        data-cursor-pointer
                        >Explorar resultados</a
                    >
                </div>
            </div>
        </div>
    </section>
</main>
${footerMarkup}
`;

export default function ServiciosPage() {
    useInteractiveExperience();

    return (
        <div
            id="servicios-page"
            dangerouslySetInnerHTML={{ __html: serviciosMarkup }}
        />
    );
}
