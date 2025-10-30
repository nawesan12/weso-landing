export const cursorMarkup = '<div class="cursor"></div>';

export const headerMarkup = /* html */ String.raw`
<header class="site-header">
    <div class="container header-content">
        <a href="/" class="brand" data-cursor-hover>
            <img src="/image.png" alt="Logotipo de Weso" />
            <span class="sr-only">Weso Studio</span>
        </a>
        <nav class="site-nav">
            <a href="/" data-cursor-hover>Inicio</a>
            <a href="/servicios" data-cursor-hover>Servicios</a>
            <a href="/casos" data-cursor-hover>Casos</a>
            <a href="/metodologia" data-cursor-hover>Metodología</a>
            <a href="/labs" data-cursor-hover>Labs</a>
            <a href="/insights" data-cursor-hover>Insights</a>
            <a href="/contacto" data-cursor-hover>Contacto</a>
        </nav>
        <a
            href="/contacto"
            class="btn"
            data-cursor-hover
            data-cursor-pointer
            >Agendar reunión</a
        >
    </div>
</header>`;

export const footerMarkup = /* html */ String.raw`
<footer class="site-footer">
    <div class="container">
        <div class="footer-content" data-animate="fade-up">
            <div class="footer-brand">
                <img
                    src="/image.png"
                    class="object-contain"
                    alt="Logotipo de Weso"
                />
                <span
                    >Agencia creativa y de producto digital con base en Mar del
                    Plata y equipos distribuidos.</span
                >
            </div>
            <div class="footer-links">
                <strong>Explorar</strong>
                <a href="/" data-cursor-hover>Inicio</a>
                <a href="/servicios" data-cursor-hover>Servicios</a>
                <a href="/casos" data-cursor-hover>Casos</a>
                <a href="/labs" data-cursor-hover>Labs</a>
                <a href="/insights" data-cursor-hover>Insights</a>
            </div>
            <div class="footer-contact">
                <strong>Conversemos</strong>
                <a href="mailto:contacto@weso.ar" data-cursor-hover>
                    contacto@weso.ar</a
                >
                <a href="tel:+5492235123456" data-cursor-hover>
                    +54 9 223 512 3456</a
                >
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    >Instagram</a
                >
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    >LinkedIn</a
                >
            </div>
        </div>
        <div
            class="footer-bottom"
            data-animate="fade-up"
            style="--animate-delay: 0.12s"
        >
            <span>© 2025 Weso Studio. Todos los derechos reservados.</span>
            <span>Hecho con creatividad y tecnología.</span>
        </div>
    </div>
</footer>`;
