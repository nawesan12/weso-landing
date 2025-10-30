"use client";

import { cursorMarkup, footerMarkup, headerMarkup } from "../lib/chrome";
import { useInteractiveExperience } from "../lib/useInteractiveExperience";

const metodologiaMarkup = /* html */ String.raw`
${cursorMarkup}
${headerMarkup}
<main>
    <section class="page-hero" id="metodologia">
        <div class="container page-hero-grid">
            <div>
                <span
                    class="eyebrow"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.05s"
                >
                    Metodología Weso
                </span>
                <h1
                    class="font-serif"
                    data-animate="fade-up"
                    style="--animate-delay: 0.12s"
                >
                    Procesos ágiles, claridad total y equipos integrados para
                    acelerar el impacto.
                </h1>
                <p data-animate="fade-up" style="--animate-delay: 0.2s">
                    Nos sumamos a tu organización como un partner estratégico.
                    Priorizamos la colaboración, los rituales transparentes y el
                    seguimiento de métricas compartidas.
                </p>
                <div
                    class="hero-actions"
                    data-animate="fade-up"
                    style="--animate-delay: 0.28s"
                >
                    <a
                        href="/servicios"
                        class="btn-outline"
                        data-cursor-hover
                        data-cursor-pointer
                        >Descubrir servicios</a
                    >
                    <a
                        href="/contacto"
                        class="btn"
                        data-cursor-hover
                        data-cursor-pointer
                        >Agendar workshop</a
                    >
                </div>
            </div>
            <aside
                class="page-hero-meta"
                data-animate="fade-up"
                style="--animate-delay: 0.24s"
            >
                <p>
                    Trabajamos con squads híbridos de 4 a 8 especialistas y
                    lideramos con OKRs trimestrales.
                </p>
                <ul class="meta-list">
                    <li data-cursor-hover>Sprints de 2 semanas</li>
                    <li data-cursor-hover>Demo abierta cada viernes</li>
                    <li data-cursor-hover>Dashboard compartido en vivo</li>
                    <li data-cursor-hover>Documentación accesible 24/7</li>
                </ul>
            </aside>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Blueprint en cuatro actos</span>
                <h2 class="section-title font-serif">
                    De la investigación profunda al crecimiento sostenido.
                </h2>
                <p class="section-description">
                    Adaptamos nuestros procesos a la escala del proyecto, pero
                    siempre mantenemos la misma base: empatía, claridad y foco en
                    resultados.
                </p>
            </div>
            <ol
                class="process-list"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <li class="process-step" data-step="01" data-cursor-hover>
                    <h3>Descubrimiento profundo</h3>
                    <p>
                        Immersion sessions, entrevistas con stakeholders y
                        auditorías digitales para mapear oportunidades.
                    </p>
                </li>
                <li class="process-step" data-step="02" data-cursor-hover>
                    <h3>Strategic Sprint</h3>
                    <p>
                        Definimos visión, objetivos, roadmap y governance.
                        Creamos la narrativa y definimos criterios de éxito.
                    </p>
                </li>
                <li class="process-step" data-step="03" data-cursor-hover>
                    <h3>Producción colaborativa</h3>
                    <p>
                        Squads multidisciplinares trabajando en paralelo con
                        check-ins, demos y QA continuo.
                    </p>
                </li>
                <li class="process-step" data-step="04" data-cursor-hover>
                    <h3>Activación & optimización</h3>
                    <p>
                        Lanzamos, medimos y escalamos mediante experimentos y
                        rituales de aprendizaje compartidos.
                    </p>
                </li>
            </ol>
        </div>
    </section>

    <section class="section-surface">
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Rituales clave</span>
                <h2 class="section-title font-serif">
                    Cadencia clara y comunicación sin fricciones.
                </h2>
            </div>
            <div
                class="info-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article class="info-card" data-cursor-hover>
                    <h3>Monday Kickoff</h3>
                    <p>
                        Revisión de objetivos semanales, asignación de prioridades
                        y actualización del roadmap.
                    </p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Daily async & standups</h3>
                    <p>
                        Comunicación asincrónica para asegurar foco y desbloquear
                        dependencias sin frenar al equipo.
                    </p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Demo Friday</h3>
                    <p>
                        Espacio abierto para mostrar avances, recibir feedback y
                        tomar decisiones rápidas.
                    </p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Retro & insights</h3>
                    <p>
                        Cerramos cada sprint con aprendizajes accionables y
                        próximos experimentos.
                    </p>
                </article>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Herramientas compartidas</span>
                <h2 class="section-title font-serif">
                    Transparencia total en tableros, documentación y assets.
                </h2>
            </div>
            <div
                class="info-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article class="info-card" data-cursor-hover>
                    <h3>Plataforma de proyectos</h3>
                    <p>
                        Gestionamos tareas y roadmaps en Linear, Jira o Asana con
                        tableros personalizados.
                    </p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Design Ops</h3>
                    <p>
                        Figma, Storybook y librerías compartidas para iterar en
                        conjunto con tus equipos internos.
                    </p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Data & Analytics</h3>
                    <p>
                        Dashboard en Looker Studio, Notion o Mode con métricas en
                        vivo y automatizaciones de reportes.
                    </p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Knowledge Hub</h3>
                    <p>
                        Documentación centralizada en Notion con decisiones,
                        rituales y assets actualizados.
                    </p>
                </article>
            </div>
        </div>
    </section>

    <section class="section-surface">
        <div class="container">
            <div
                class="stat-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <div class="stat-card" data-cursor-hover>
                    <strong>95%</strong>
                    <span>Proyectos lanzados en deadline acordado</span>
                </div>
                <div class="stat-card" data-cursor-hover>
                    <strong>+70</strong>
                    <span>Personas integradas a squads híbridos</span>
                </div>
                <div class="stat-card" data-cursor-hover>
                    <strong>4,8/5</strong>
                    <span>CSAT promedio en rituales y entregables</span>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
            <div class="cta-wrapper" data-animate="fade-up">
                <h2 class="font-serif">
                    ¿Querés que armemos tu blueprint personalizado?
                </h2>
                <p>
                    Organizamos un workshop gratuito para diagnosticar tu
                    situación actual y diseñar el plan de trabajo ideal.
                </p>
                <div class="cta-actions">
                    <a
                        href="/contacto"
                        class="btn"
                        data-cursor-hover
                        data-cursor-pointer
                        >Reservar workshop</a
                    >
                    <a
                        href="/casos"
                        class="btn-outline"
                        data-cursor-hover
                        data-cursor-pointer
                        >Ver blueprint en acción</a
                    >
                </div>
            </div>
        </div>
    </section>
</main>
${footerMarkup}
`;

export default function MetodologiaPage() {
    useInteractiveExperience();

    return (
        <div
            id="metodologia-page"
            dangerouslySetInnerHTML={{ __html: metodologiaMarkup }}
        />
    );
}
