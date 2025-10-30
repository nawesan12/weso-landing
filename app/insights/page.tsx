"use client";

import { cursorMarkup, footerMarkup, headerMarkup } from "../lib/chrome";
import { useInteractiveExperience } from "../lib/useInteractiveExperience";

const insightsMarkup = /* html */ String.raw`
${cursorMarkup}
${headerMarkup}
<main>
    <section class="page-hero" id="insights">
        <div class="container page-hero-grid">
            <div>
                <span
                    class="eyebrow"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.05s"
                >
                    Insights & Research
                </span>
                <h1
                    class="font-serif"
                    data-animate="fade-up"
                    style="--animate-delay: 0.12s"
                >
                    Ideas, frameworks y reportes para liderar el futuro de tu
                    marca.
                </h1>
                <p data-animate="fade-up" style="--animate-delay: 0.2s">
                    Compartimos aprendizajes accionables, guías descargables y
                    análisis de tendencias para equipos que buscan ir más allá.
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
                        >Sumarse a la lista</a
                    >
                    <a
                        href="/casos"
                        class="btn-outline"
                        data-cursor-hover
                        data-cursor-pointer
                        >Ver casos relacionados</a
                    >
                </div>
            </div>
            <aside
                class="page-hero-meta"
                data-animate="fade-up"
                style="--animate-delay: 0.24s"
            >
                <p>
                    Ediciones mensuales con insights de estrategia, diseño,
                    contenido y growth.
                </p>
                <ul class="meta-list">
                    <li data-cursor-hover>Frameworks listos para aplicar</li>
                    <li data-cursor-hover>Plantillas de workshops</li>
                    <li data-cursor-hover>Benchmarks regionales</li>
                    <li data-cursor-hover>Alertas de tendencias emergentes</li>
                </ul>
            </aside>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Temáticas</span>
                <h2 class="section-title font-serif">
                    Curamos contenido en torno a cuatro pilares.
                </h2>
            </div>
            <div
                class="info-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article class="info-card" data-cursor-hover>
                    <h3>Brand Leadership</h3>
                    <p>
                        Estrategia, posicionamiento y narrativa para construir
                        marcas memorables.
                    </p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Product Experience</h3>
                    <p>
                        UX, service design y crecimiento basado en producto.
                    </p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Content & Storytelling</h3>
                    <p>
                        Campañas, producción creativa y contenido interactivo.
                    </p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Data & Growth</h3>
                    <p>
                        Analítica, automatización y experimentos de performance.
                    </p>
                </article>
            </div>
        </div>
    </section>

    <section class="section-surface">
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Publicaciones recientes</span>
                <h2 class="section-title font-serif">
                    Descargá nuestras guías y frameworks más recientes.
                </h2>
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
                    <h3>Playbook para escalar productos con IA generativa</h3>
                    <p>
                        Pasos y herramientas para integrar modelos generativos en
                        tu propuesta digital.
                    </p>
                    <a href="/contacto" class="case-link" data-cursor-hover>
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
                    <span class="insight-tag">Reporte</span>
                    <h3>Retail inmersivo en LATAM 2025</h3>
                    <p>
                        Tendencias, casos y métricas para diseñar experiencias
                        phygital memorables.
                    </p>
                    <a href="/contacto" class="case-link" data-cursor-hover>
                        Obtener reporte
                        <span aria-hidden="true">→</span>
                    </a>
                </article>
                <article
                    class="insight-card"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.3s"
                >
                    <span class="insight-tag">Framework</span>
                    <h3>Content Engine Always-On</h3>
                    <p>
                        Metodología para coordinar storytelling, paid media y
                        growth en ciclos mensuales.
                    </p>
                    <a href="/contacto" class="case-link" data-cursor-hover>
                        Acceder al framework
                        <span aria-hidden="true">→</span>
                    </a>
                </article>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="newsletter-card" data-animate="fade-up">
                <div>
                    <span class="section-label">Newsletter mensual</span>
                    <h2 class="font-serif">Recibí insights antes que nadie.</h2>
                    <p>
                        Cada edición incluye tendencias, herramientas y plantillas
                        exclusivas. Sin spam, solo valor.
                    </p>
                </div>
                <form class="newsletter-form" data-cursor-pointer>
                    <label class="sr-only" for="newsletter-email">
                        Correo electrónico
                    </label>
                    <input
                        id="newsletter-email"
                        type="email"
                        name="email"
                        placeholder="tu@email.com"
                        required
                    />
                    <button type="submit" class="btn" data-cursor-hover>
                        Unirme ahora
                    </button>
                </form>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
            <div class="cta-wrapper" data-animate="fade-up">
                <h2 class="font-serif">
                    ¿Querés que preparemos un reporte exclusivo para tu equipo?
                </h2>
                <p>
                    Contanos tus objetivos y armamos una sesión in-company con
                    insights personalizados.
                </p>
                <div class="cta-actions">
                    <a
                        href="/contacto"
                        class="btn"
                        data-cursor-hover
                        data-cursor-pointer
                        >Solicitar sesión</a
                    >
                    <a
                        href="/servicios"
                        class="btn-outline"
                        data-cursor-hover
                        data-cursor-pointer
                        >Ver cómo ejecutamos</a
                    >
                </div>
            </div>
        </div>
    </section>
</main>
${footerMarkup}
`;

export default function InsightsPage() {
    useInteractiveExperience();

    return (
        <div
            id="insights-page"
            dangerouslySetInnerHTML={{ __html: insightsMarkup }}
        />
    );
}
