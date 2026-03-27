class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="mainfooter">
        Utvikla av <a href="https://www.instagram.com/havard_tonning/" style="color: rgb(203, 234, 255);">Håvard Tonning</a>
        <br>
        &copy;2026 All rights reserved
        <br>
        Spørsmål? Ta kontakt på <a href="mailto:havard@iolden.no" style="color: rgb(203, 234, 255)">havard@iolden.no</a>
        </footer>`; 
    }
}

class gtagElement extends HTMLElement {
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
        this.innerHTML = `
        <div class="menu-content">
            <span class="menu-close"><i class="fa-solid fa-xmark"></i></span>
            <a href="index.html" style="margin-top: 40px;">Heim</a>
            <a href="mainmap.html">Virtuell guida tur</a>
            <a href="picktrip.html">Trimturar i området</a>
            <a href="sites.html">Ein kort køyretur unna</a>
            <a href="weather.html">Vêrmelding</a>
            <a href="bus.html">Buss til Briksdalen</a>
            <a href="toilet.html">Offentlege toalett</a>
            <a href="faq.html">Vanlege spørsmål</a>
            <a href="comments.html">Digital gjestebok</a>
            <a href="feedback.html">Gi tilbakemelding til bygda</a>
            <a class="auth-btn" style="cursor:pointer;"></a>
        </div>`;

        this.querySelector('.menu-close').addEventListener('click', () => {
            this.querySelector('.menu-content').classList.remove('active');
            document.querySelector('.ham-menu')?.classList.remove('active');
        });

        fetch('auth_status.php')
            .then(r => r.json())
            .then(data => {
                const btn = this.querySelector('.auth-btn');
                if(data.loggedIn){
                    btn.innerText = 'Logg ut';
                    btn.addEventListener('click', () => {
                        fetch('logout.php').then(() => {
                            window.location.href = 'index.html';
                        });
                    });
                } else {
                    btn.innerText = 'Logg inn';
                    btn.addEventListener('click', () => {
                        window.location.href = 'login.php';
                    });
                }
            });
    }
}

class mainHeader extends HTMLElement {
    connectedCallback() {
        let path = window.location.pathname;
        let filename = path.split("/").pop() || "index.html";

        this.innerHTML = `
        <header class="main-header">
            <a href="index.html">
                <img class="logoimg" src="images/logo3.png" alt="">
            </a>    
            <div class="ham-menu"> 
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="languages">
                <div class="active-lang">No</div>
                <a href="en/${filename}"><div class="disactive-lang">En</div></a>
            </div>
        </header>`;

        const hamMenu = this.querySelector('.ham-menu');
        hamMenu.addEventListener('click', () => {
            const menuContent = document.querySelector('.menu-content');
            if (menuContent) menuContent.classList.add('active');
        });
    }
}

customElements.define('site-footer', SiteFooter);
customElements.define('g-tag', gtagElement);
customElements.define('hamburger-menu', hamburger);
customElements.define('main-header', mainHeader);