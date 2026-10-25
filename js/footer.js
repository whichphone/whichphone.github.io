class SiteFooter extends HTMLElement{
connectedCallback(){
this.innerHTML=`<style>
:host{display:block}
.ftr{background:#fff;border-top:1px solid #d5e1ea;padding:40px 0 24px;color:#14212e;font:16px/1.65 "Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial,sans-serif}
.ftr *{box-sizing:border-box;margin:0}
.ftr a{color:inherit;text-decoration:none}
.ftr a:hover{color:#0ea5c6}
.ftr a:focus-visible{outline:3px solid #5b6cff;outline-offset:2px;border-radius:4px}
.ftr .wrap{max-width:1120px;margin:auto;padding:0 20px}
.ftr-in{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:32px 24px;align-items:start}
.ftr-brand strong{display:inline-block;font:700 1.1rem ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:#0ea5c6;margin-bottom:8px}
.ftr-brand p{color:#5b6b7a;font-size:.9rem;max-width:38ch}
.ftr nav{display:flex;flex-direction:column;gap:8px;font-size:.92rem}
.ftr nav::before{content:attr(aria-label);font:.72rem ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;text-transform:uppercase;letter-spacing:.08em;color:#5b6b7a;margin-bottom:2px}
.ftr nav a{color:#14212e;transition:color .2s}
.ftr .copy{grid-column:1/-1;border-top:1px solid #d5e1ea;padding-top:16px;color:#5b6b7a;font-size:.85rem}
@media(max-width:820px){.ftr{padding:32px 0 20px}.ftr-in{grid-template-columns:1fr 1fr}.ftr-brand{grid-column:1/-1}}
@media(max-width:480px){.ftr-in{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){.ftr a{transition:none}}
</style>
<footer class="ftr"><div class="wrap ftr-in">
<div class="ftr-brand"><strong>WhichPhone</strong><p>Free mobile phone detector. Find your phone model and specs in one tap.</p></div>
<nav aria-label="Product"><a href="/#detector">Detector</a><a href="/#features">Features</a><a href="/#brands">Brands</a><a href="/#privacy">Privacy</a><a href="/#faq">FAQ</a></nav>
<nav aria-label="Company"><a href="/about">About</a><a href="/contact">Contact</a></nav>
<nav aria-label="Legal"><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a><a href="/disclaimer">Disclaimer</a></nav>
<p class="copy">&copy; ${new Date().getFullYear()} WhichPhone &middot; whichphone.github.io &middot; Detection runs in your browser.</p>
</div></footer>`;}}
customElements.define('site-footer',SiteFooter);
