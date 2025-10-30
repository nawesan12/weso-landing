"use client";

import { cursorMarkup, footerMarkup, headerMarkup } from "../lib/chrome";
import { useInteractiveExperience } from "../lib/useInteractiveExperience";

const casosMarkup = /* html */ String.raw`
${cursorMarkup}
${headerMarkup}
<main>
    <section class="page-hero" id="casos">
        <div class="container page-hero-grid">
            <div>
                <span
                    class="eyebrow"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.05s"
                >
                    Casos de éxito
                </span>
                <h1
                    class="font-serif"
                    data-animate="fade-up"
                    style="--animate-delay: 0.12s"
                >
                    Resultados tangibles que escalan negocios y definen
                    categorías.
                </h1>
                <p data-animate="fade-up" style="--animate-delay: 0.2s">
                    Co-creamos soluciones con startups, scaleups y corporaciones
                    globales. Nuestro foco: impacto en negocio, experiencias que
                    enamoran y lanzamientos que se recuerdan.
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
                        >Planificar mi próximo caso</a
                    >
                    <a
                        href="/servicios"
                        class="btn-outline"
                        data-cursor-hover
                        data-cursor-pointer
                        >Explorar servicios</a
                    >
                </div>
            </div>
            <aside
                class="page-hero-meta"
                data-animate="fade-up"
                style="--animate-delay: 0.24s"
            >
                <p>
                    +70 proyectos lanzados en LATAM, EEUU y Europa.
                </p>
                <ul class="meta-list">
                    <li data-cursor-hover>MRR multiplicado x2.4 en SaaS</li>
                    <li data-cursor-hover>Conversión ecommerce +140%</li>
                    <li data-cursor-hover>Engagement social +310%</li>
                    <li data-cursor-hover>Equipos integrados en 3 continentes</li>
                </ul>
            </aside>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Historias destacadas</span>
                <h2 class="section-title font-serif">
                    Transformamos desafíos complejos en relatos memorables.
                </h2>
                <p class="section-description">
                    Cada caso es un partnership a largo plazo. Diseñamos
                    estrategias, lideramos la ejecución y acompañamos la
                    optimización continua.
                </p>
            </div>
            <div
                class="case-showcase"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article class="case-story" data-cursor-hover>
                    <header class="case-story-header">
                        <span class="case-label">SaaS · Serie B</span>
                        <h3 class="case-title">Lumina OS</h3>
                    </header>
                    <p class="case-description">
                        Rebranding completo, nuevo onboarding digital y
                        estrategia de growth que duplicó el MRR en seis meses.
                        Construimos un ecosistema product-led con loops de
                        activación y referidos.
                    </p>
                    <ul class="info-list">
                        <li>Brand platform y design system vivo</li>
                        <li>Producto web y mobile con roadmap trimestral</li>
                        <li>Automatizaciones de lifecycle & customer success</li>
                    </ul>
                    <a
                        href="/contacto"
                        class="case-link"
                        data-cursor-hover
                        >Solicitar blueprint</a
                    >
                </article>
                <article class="case-story" data-cursor-hover>
                    <header class="case-story-header">
                        <span class="case-label">Fintech · LATAM</span>
                        <h3 class="case-title">Atlas Bank</h3>
                    </header>
                    <p class="case-description">
                        Diseñamos una experiencia omnicanal con onboarding
                        inteligente, campañas always-on y contenido educativo
                        hipersegmentado que duplicó la base de usuarios activos.
                    </p>
                    <ul class="info-list">
                        <li>UX research, service design y journeys</li>
                        <li>Producción audiovisual y content hub</li>
                        <li>Growth loops con CRM y paid media</li>
                    </ul>
                    <a
                        href="/contacto"
                        class="case-link"
                        data-cursor-hover
                        >Explorar estrategia</a
                    >
                </article>
                <article class="case-story" data-cursor-hover>
                    <header class="case-story-header">
                        <span class="case-label">Consumo masivo</span>
                        <h3 class="case-title">Terra Foods</h3>
                    </header>
                    <p class="case-description">
                        Activamos un ecommerce directo al consumidor, con nueva
                        identidad, storytelling y un club de fidelidad que
                        generó +140% en revenue directo.
                    </p>
                    <ul class="info-list">
                        <li>Workshop de posicionamiento y innovación</li>
                        <li>Producción de contenido y campañas retail</li>
                        <li>Programa de loyalty y referidos con automatización</li>
                    </ul>
                    <a
                        href="/contacto"
                        class="case-link"
                        data-cursor-hover
                        >Solicitar caso completo</a
                    >
                </article>
            </div>
        </div>
    </section>

    <section class="section-surface">
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Impacto medible</span>
                <h2 class="section-title font-serif">
                    Métricas que acompañan cada proyecto.
                </h2>
                <p class="section-description">
                    Unimos creatividad y analítica para medir el impacto real.
                    Compartimos tableros en vivo y priorizamos decisiones basadas
                    en data.
                </p>
            </div>
            <div
                class="stat-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <div class="stat-card" data-cursor-hover>
                    <strong>+184%</strong>
                    <span>Incremento promedio en revenue directo</span>
                </div>
                <div class="stat-card" data-cursor-hover>
                    <strong>3,2x</strong>
                    <span>Aceleración en velocidad de lanzamiento</span>
                </div>
                <div class="stat-card" data-cursor-hover>
                    <strong>+65</strong>
                    <span>Experimentos activos por trimestre</span>
                </div>
                <div class="stat-card" data-cursor-hover>
                    <strong>92%</strong>
                    <span>Clientes que continúan en nuevos proyectos</span>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Industrias</span>
                <h2 class="section-title font-serif">
                    Experiencia transversal y foco en sectores de alto
                    crecimiento.
                </h2>
            </div>
            <div
                class="info-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article class="info-card" data-cursor-hover>
                    <h3>Finanzas & Fintech</h3>
                    <p>
                        Banca digital, pagos, wealth management y cripto con
                        foco en confianza y cumplimiento.
                    </p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Salud & Wellbeing</h3>
                    <p>
                        Plataformas de telemedicina, healthtech y wellness que
                        combinan empatía y eficiencia.
                    </p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Retail & Consumo masivo</h3>
                    <p>
                        Estrategias phygital, ecommerce directo y experiencias
                        inmersivas en puntos de venta.
                    </p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Educación & Impacto</h3>
                    <p>
                        Edtech, organizaciones sociales y proyectos culturales
                        que inspiran comunidades.
                    </p>
                </article>
            </div>
        </div>
    </section>

    <section class="quote-section">
        <div class="container">
            <figure class="quote-card" data-animate="fade-up">
                <blockquote>
                    “Weso no es una agencia más. Son un partner estratégico que
                    entiende el negocio, se involucra en nuestras métricas y
                    trae ideas listas para ejecutar.”
                </blockquote>
                <figcaption>
                    Sofía Méndez · VP Marketing, Atlas Bank
                </figcaption>
            </figure>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
            <div class="cta-wrapper" data-animate="fade-up">
                <h2 class="font-serif">
                    Contanos tu reto y diseñamos el próximo caso de éxito.
                </h2>
                <p>
                    Agenda una sesión estratégica para mapear oportunidades,
                    priorizar quick wins y proyectar impacto.
                </p>
                <div class="cta-actions">
                    <a
                        href="/contacto"
                        class="btn"
                        data-cursor-hover
                        data-cursor-pointer
                        >Reservar sesión</a
                    >
                    <a
                        href="/servicios"
                        class="btn-outline"
                        data-cursor-hover
                        data-cursor-pointer
                        >Ver cómo lo hacemos</a
                    >
                </div>
            </div>
        </div>
    </section>
</main>
${footerMarkup}
`;

export default function CasosPage() {
    useInteractiveExperience();

    return (
        <div
            id="casos-page"
            dangerouslySetInnerHTML={{ __html: casosMarkup }}
        />
    );
}
