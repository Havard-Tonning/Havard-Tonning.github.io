class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="mainfooter">
        Developed by <a href="https://www.instagram.com/havard_tonning/" style="color: rgb(203, 234, 255);">Håvard Tonning</a>
        <br>
        &copy;2026 All rights reserved
        <br>
        Questions? Contact <a href="mailto:havard@iolden.no" style="color: rgb(203, 234, 255)">havard@iolden.no</a>
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
    connectedCallback() {
        this.innerHTML = `
        <div class="menu-content">
            <span class="menu-close"><i class="fa-solid fa-xmark"></i></span>
            <a href="index.html" style="margin-top: 40px;">Heim</a>
            <a href="mainmap.html">Virtual guided tour</a>
            <a href="calendar_front.php">Calendar</a>
            <a href="picktrip.html">Hikes in the area</a>
            <a href="food.html">Food and drink</a>
            <a href="pick_stores.html">Shops</a>
            <a href="pick_accommodation.html">Accommodation</a>
            <a href="pick_tour.html">Experiences and transport</a>
            <a href="weather.html">Weather</a>
            <a href="toilet.html">Public toilets</a>
            <a href="questions_front.php">Questions and answers</a>
            <a class="auth-btn" style="cursor:pointer;"></a>
        </div>`;;

        this.querySelector('.menu-close').addEventListener('click', () => {
            this.querySelector('.menu-content').classList.remove('active');
            document.querySelector('.ham-menu')?.classList.remove('active');
        });

        fetch('auth_status.php')
            .then(r => r.json())
            .then(data => {
                const btn = this.querySelector('.auth-btn');
                if (data.loggedIn) {
                    btn.innerText = 'Log out';
                    btn.addEventListener('click', () => {
                        fetch('logout.php').then(() => {
                            window.location.href = 'index.html';
                        });
                    });
                } else {
                    btn.innerText = 'Logg inn';
                    btn.addEventListener('click', () => {
                        const currentPath = encodeURIComponent(window.location.href);
                        window.location.href = `login_front.php?return=${currentPath}`;
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
                <img class="logoimg" src="../images/logo3.png" alt="iOlden logo">
            </a>    
            <div class="ham-menu"> 
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="languages">
                <a href="../${filename}"><div class="disactive-lang">No</div></a>
                <div class="active-lang">En</div>
            </div>
        </header>`;

        const hamMenu = this.querySelector('.ham-menu');
        hamMenu.addEventListener('click', () => {
            const menuContent = document.querySelector('.menu-content');
            if (menuContent) menuContent.classList.add('active');
        });
    }
}


class altMainHeader extends HTMLElement {
    connectedCallback() {
        let path = window.location.pathname;
        let filename = path.split("/").pop() || "index.html";

        this.innerHTML = `
        <header class="main-header">
            <a href="index.html">
                <img class="logoimg" src="images/logo3.png" alt="iOlden logo">
            </a>    
            <div class="ham-menu"> 
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="languages">
                <a href="../../info/${filename}"><div class="disactive-lang">No</div></a>
                <div class="active-lang">En</div>
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
customElements.define('info-header', altMainHeader);