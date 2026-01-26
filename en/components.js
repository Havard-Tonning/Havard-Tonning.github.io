class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    <footer class="mainfooter">
        Developed by <a href="https://www.instagram.com/havard_tonning/" style="color: rgb(203, 234, 255);">Håvard Tonning</a>
        <br>
        &copy;2025 All rights reserved
        <br>
        Questions? Write to me at <a href="mailto:havard@iolden.no" style="color: rgb(203, 234, 255)">havard@iolden.no</a>
    </footer> `
            
        
    }
}

customElements.define('site-footer', SiteFooter);