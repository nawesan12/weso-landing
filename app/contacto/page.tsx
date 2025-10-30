"use client";

import { cursorMarkup, footerMarkup, headerMarkup } from "../lib/chrome";
import { useInteractiveExperience } from "../lib/useInteractiveExperience";

const contactoMarkup = /* html */ String.raw`
${cursorMarkup}
${headerMarkup}
<main>
    <section class="page-hero" id="contacto">
        <div class="container page-hero-grid">
            <div>
                <span
                    class="eyebrow"
                    data-cursor-hover
                    data-animate="fade-up"
                    style="--animate-delay: 0.05s"
                >
                    Conversemos
                </span>
                <h1
                    class="font-serif"
                    data-animate="fade-up"
                    style="--animate-delay: 0.12s"
                >
                    Diseñemos juntos el próximo gran salto de tu marca.
                </h1>
                <p data-animate="fade-up" style="--animate-delay: 0.2s">
                    Contanos tus objetivos y armemos un plan a medida. En menos de
                    48 horas recibirás un diagnóstico inicial y una propuesta
                    clara de trabajo.
                </p>
                <div
                    class="hero-actions"
                    data-animate="fade-up"
                    style="--animate-delay: 0.28s"
                >
                    <a
                        href="mailto:contacto@weso.ar"
                        class="btn"
                        data-cursor-hover
                        data-cursor-pointer
                        >Escribir ahora</a
                    >
                    <a
                        href="https://cal.com/nahuel-santillan"
                        class="btn-outline"
                        target="_blank"
                        rel="noreferrer"
                        data-cursor-hover
                        data-cursor-pointer
                        >Agendar llamada</a
                    >
                </div>
            </div>
            <aside
                class="page-hero-meta"
                data-animate="fade-up"
                style="--animate-delay: 0.24s"
            >
                <p>
                    Disponibles de lunes a viernes de 9 a 18 hs (GMT-3) con
                    equipos distribuidos.
                </p>
                <ul class="meta-list">
                    <li data-cursor-hover>Respuesta en 24/48 hs</li>
                    <li data-cursor-hover>Workshop inicial sin costo</li>
                    <li data-cursor-hover>Contratos flexibles y escalables</li>
                    <li data-cursor-hover>Confidencialidad garantizada</li>
                </ul>
            </aside>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Canales directos</span>
                <h2 class="section-title font-serif">
                    Elegí cómo querés comenzar la conversación.
                </h2>
            </div>
            <div
                class="info-grid"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <article class="info-card" data-cursor-hover>
                    <h3>Escríbenos</h3>
                    <p>
                        contacto@weso.ar
                    </p>
                    <p class="muted">Respondemos en menos de 24 hs hábiles.</p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>Agenda una llamada</h3>
                    <p>
                        cal.com/nahuel-santillan
                    </p>
                    <p class="muted">
                        Elige día y horario y coordinamos un discovery remoto.
                    </p>
                </article>
                <article class="info-card" data-cursor-hover>
                    <h3>WhatsApp</h3>
                    <p>+54 9 223 512 3456</p>
                    <p class="muted">Resolvemos dudas rápidas y coordinamos demos.</p>
                </article>
            </div>
        </div>
    </section>

    <section class="section-surface">
        <div class="container">
            <div class="section-header" data-animate="fade-up">
                <span class="section-label">Cuéntanos más</span>
                <h2 class="section-title font-serif">
                    Completa el formulario y preparamos un diagnóstico.
                </h2>
            </div>
            <form
                class="contact-form"
                data-animate="fade-up"
                style="--animate-delay: 0.12s"
            >
                <div class="form-grid">
                    <label>
                        <span>Nombre y apellido</span>
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        <span>Correo electrónico</span>
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        <span>Empresa</span>
                        <input type="text" name="company" />
                    </label>
                    <label>
                        <span>Rol</span>
                        <input type="text" name="role" />
                    </label>
                </div>
                <label>
                    <span>Cuéntanos sobre tu proyecto</span>
                    <textarea name="project" rows="5" required></textarea>
                </label>
                <label>
                    <span>Objetivo principal</span>
                    <select name="goal" required>
                        <option value="">Selecciona una opción</option>
                        <option value="branding">Rebranding / Identidad</option>
                        <option value="producto">Producto digital</option>
                        <option value="campanas">Campañas y contenido</option>
                        <option value="growth">Growth & automatización</option>
                        <option value="otro">Otro desafío</option>
                    </select>
                </label>
                <div class="form-footer">
                    <label class="consent">
                        <input type="checkbox" required />
                        <span>
                            Acepto recibir comunicaciones sobre servicios e
                            insights de Weso.
                        </span>
                    </label>
                    <button type="submit" class="btn" data-cursor-hover>
                        Enviar mensaje
                    </button>
                </div>
            </form>
        </div>
    </section>

    <section>
        <div class="container contact-details" data-animate="fade-up">
            <div>
                <h3 class="font-serif">Estamos donde nos necesites</h3>
                <p>
                    Base en Mar del Plata con células en Buenos Aires, Madrid y
                    Ciudad de México. Trabajamos 100% remoto con encuentros
                    presenciales para hitos clave.
                </p>
            </div>
            <div>
                <h3 class="font-serif">Documentación y seguimiento</h3>
                <p>
                    Acceso a Notion, dashboards en vivo y canal directo en Slack
                    o Teams para todo el equipo.
                </p>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
            <div class="cta-wrapper" data-animate="fade-up">
                <h2 class="font-serif">
                    ¿Listo para agendar el kick-off?
                </h2>
                <p>
                    Coordinemos una reunión para mapear objetivos, definir el
                    scope inicial y armar un timeline de trabajo.
                </p>
                <div class="cta-actions">
                    <a
                        href="https://cal.com/nahuel-santillan"
                        class="btn"
                        target="_blank"
                        rel="noreferrer"
                        data-cursor-hover
                        data-cursor-pointer
                        >Reservar llamada</a
                    >
                    <a
                        href="mailto:contacto@weso.ar"
                        class="btn-outline"
                        data-cursor-hover
                        data-cursor-pointer
                        >Escribir un correo</a
                    >
                </div>
            </div>
        </div>
    </section>
</main>
${footerMarkup}
`;

export default function ContactoPage() {
    useInteractiveExperience();

    return (
        <div
            id="contacto-page"
            dangerouslySetInnerHTML={{ __html: contactoMarkup }}
        />
    );
}
