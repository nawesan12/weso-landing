"use client";

import { cursorMarkup, footerMarkup, headerMarkup } from "../lib/chrome";
import { useInteractiveExperience } from "../lib/useInteractiveExperience";

const labsMarkup = /* html */ String.raw`
${cursorMarkup}
${headerMarkup}
<main>
    <section class="page-hero" id="labs">
        <div class="container page-hero-grid">
            <div>
                <span
                    class="eyebrow"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.05s"
                >
                    Weso Labs
                </span>
                <h1
                    class="font-serif"
                    data-animate="fade-up"
                    style="--animate-delay: 0.12s"
                >
                    Experimentamos con IA, Web3 y experiencias inmersivas para
                    crear ventajas competitivas reales.
                </h1>
                <p data-animate="fade-up" style="--animate-delay: 0.2s">
                    Nuestro laboratorio interno explora tecnologías emergentes,
                    prototipa soluciones y las lleva al mercado junto a nuestros
                    socios.
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
                        >Co-crear un piloto</a
                    >
                    <a
                        href="/insights"
                        class="btn-outline"
                        data-cursor-hover
                        data-cursor-pointer
                        >Explorar investigaciones</a
                    >
                </div>
            </div>
            <aside
                class="page-hero-meta"
                data-animate="fade-up"
                style="--animate-delay: 0.24s"
            >
                <p>
                    Validamos ideas en ciclos de 6 semanas con prototipos
                    funcionales y pruebas con usuarios reales.
                </p>
                <ul class="meta-list">
                    <li data-cursor-hover>IA aplicada a customer experience</li>
                    <li data-cursor-hover>Experiencias phygital y XR</li>
                    <li data-cursor-hover>Token gating & loyalty programado</li>
                    <li data-cursor-hover>Automatizaciones con data en vivo</li>
                </ul>
            </aside>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Programas</span>
                <h2 class="section-title font-serif">
                    Laboratorios diseñados para explorar, validar y escalar.
                </h2>
            </div>
            <div
                class="info-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article class="info-card" data-cursor-hover>
                    <h3>Launch Sprints</h3>
                    <p>
                        Sprints de 6 semanas para prototipar productos digitales
                        con IA generativa y automatizaciones.
                    </p>
                    <ul class="info-list">
                        <li>Discovery & mapa de oportunidades</li>
                        <li>Prototipos funcionales listos para testeo</li>
                        <li>Informe de viabilidad técnica y roadmap</li>
                    </ul>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Labs Immersive</h3>
                    <p>
                        Conceptos phygital, instalaciones interactivas y
                        experiencias XR para eventos y retail.
                    </p>
                    <ul class="info-list">
                        <li>Creative tech + arquitectura efímera</li>
                        <li>Realidad aumentada y WebGL</li>
                        <li>Integración con CRM y medición in-situ</li>
                    </ul>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Growth Automation</h3>
                    <p>
                        Pipelines de data, personalización en tiempo real y
                        bots entrenados con información de la marca.
                    </p>
                    <ul class="info-list">
                        <li>Implementación de CDP y data layers</li>
                        <li>Agentes conversacionales multicanal</li>
                        <li>Experimentación con modelos generativos</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <section class="section-surface">
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Casos piloto</span>
                <h2 class="section-title font-serif">
                    Innovación aplicada junto a marcas visionarias.
                </h2>
            </div>
            <div
                class="case-showcase"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article class="case-story" data-cursor-hover>
                    <header class="case-story-header">
                        <span class="case-label">Retail · Experiencia híbrida</span>
                        <h3 class="case-title">Nova Pop-up</h3>
                    </header>
                    <p class="case-description">
                        Diseñamos un espacio inmersivo con realidad aumentada y
                        tracking de visitantes que elevó el tiempo de permanencia
                        un 210%.
                    </p>
                    <ul class="info-list">
                        <li>Escenografía interactiva con WebAR</li>
                        <li>Integración con CRM para lead capture</li>
                        <li>KPIs en tiempo real desde sensores IoT</li>
                    </ul>
                </article>
                <article class="case-story" data-cursor-hover>
                    <header class="case-story-header">
                        <span class="case-label">Hospitalidad · IA</span>
                        <h3 class="case-title">Aurea Hotels</h3>
                    </header>
                    <p class="case-description">
                        Implementamos un asistente de IA entrenado con protocolos
                        de servicio que incrementó la satisfacción de huéspedes a
                        4,9/5.
                    </p>
                    <ul class="info-list">
                        <li>Entrenamiento con data propia y feedback loop</li>
                        <li>Integración con PMS y sistemas de tickets</li>
                        <li>Panel de métricas y sentimiento en vivo</li>
                    </ul>
                </article>
                <article class="case-story" data-cursor-hover>
                    <header class="case-story-header">
                        <span class="case-label">Educación · Web3</span>
                        <h3 class="case-title">Future Campus</h3>
                    </header>
                    <p class="case-description">
                        Creamos credenciales digitales coleccionables y un hub de
                        comunidad token gated que triplicó la retención.
                    </p>
                    <ul class="info-list">
                        <li>Onboarding walletless y UX educativa</li>
                        <li>Gamificación con misiones y recompensas</li>
                        <li>Panel de analytics para la comunidad</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div
                class="stat-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <div class="stat-card" data-cursor-hover>
                    <strong>12</strong>
                    <span>Prototipos lanzados por año</span>
                </div>
                <div class="stat-card" data-cursor-hover>
                    <strong>8 semanas</strong>
                    <span>Tiempo promedio de MVP funcional</span>
                </div>
                <div class="stat-card" data-cursor-hover>
                    <strong>5 alianzas</strong>
                    <span>Con universidades y hubs tecnológicos</span>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
            <div class="cta-wrapper" data-animate="fade-up">
                <h2 class="font-serif">
                    Activemos juntos un piloto de innovación.
                </h2>
                <p>
                    Diseñamos un sprint a medida para validar la idea, construir
                    el prototipo y testearlo con usuarios reales.
                </p>
                <div class="cta-actions">
                    <a
                        href="/contacto"
                        class="btn"
                        data-cursor-hover
                        data-cursor-pointer
                        >Reservar discovery</a
                    >
                    <a
                        href="/insights"
                        class="btn-outline"
                        data-cursor-hover
                        data-cursor-pointer
                        >Leer nuestros experimentos</a
                    >
                </div>
            </div>
        </div>
    </section>
</main>
${footerMarkup}
`;

export default function LabsPage() {
    useInteractiveExperience();

    return (
        <div id="labs-page" dangerouslySetInnerHTML={{ __html: labsMarkup }} />
    );
}
