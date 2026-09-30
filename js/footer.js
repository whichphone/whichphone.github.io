class SiteFooter extends HTMLElement{
connectedCallback(){
this.innerHTML=`<footer class="ftr"><div class="wrap ftr-in">
<div><strong>WhichPhone</strong><p>Free mobile phone detector. Find your phone model and specs in one tap.</p></div>
<nav aria-label="Footer"><a href="/#detector">Detector</a><a href="/#features">Features</a><a href="/#brands">Brands</a><a href="/#privacy">Privacy</a><a href="/#faq">FAQ</a></nav>
<p class="copy">&copy; ${new Date().getFullYear()} WhichPhone &middot; whichphone.github.io &middot; Detection runs in your browser.</p>
</div></footer>`;}}
customElements.define('site-footer',SiteFooter);
