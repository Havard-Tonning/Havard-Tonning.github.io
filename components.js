class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="mainfooter">
        Utvikla av <a href="https://www.instagram.com/havard_tonning/" style="color: rgb(203, 234, 255);">Håvard Tonning</a>
        <br>
        &copy;2025 All rights reserved
        <br>
        Spørsmål? Ta kontakt på <a href="mailto:havard@iolden.no" style="color: rgb(203, 234, 255)">havard@iolden.no</a>
        </footer>`; 
        
    }
}

class gtag extends HTMLElement {
    connectedCallback() {
        const gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-0LT1EF01DF';
        document.head.appendChild(gtagScript);

        const configScript = document.createElement('script');
        configScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0LT1EF01DF');
        `;
        document.head.appendChild(configScript);
    }
}

class hamburger extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `    <div class="menu-content">
        <a href="index.html" style="margin-top: 100px;">Heim</a>
        <a href="mainmap.html">Virtuell guida tur</a>
        <a href="picktrip.html">Trimturar i området</a>
        <a href="sites.html">Ein kort køyretur unna</a>
        <a href="weather.html">Vêrmelding</a>
        <a href="bus.html">Buss til Briksdalen</a>
        <a href="toilet.html">Offentlege toalett</a>
        <a href="faq.html">Vanlege spørsmål</a>
        <a href="comments.html">Digital gjestebok</a>
        <a href="feedback.html">Gi tilbakemelding til bygda</a>
    </div>`; 

        const hamMenu = document.querySelector('.ham-menu');
        const menuContent = this.querySelector('.menu-content');

        if (hamMenu && menuContent) {
            hamMenu.addEventListener('click', () => {
                hamMenu.classList.toggle('active');
                menuContent.classList.toggle('active');
            });
        }
    }
}

customElements.define('site-footer', SiteFooter);
customElements.define('g-tag', gtag);
customElements.define('hamburger-menu', hamburger);