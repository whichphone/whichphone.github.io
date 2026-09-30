class SiteHeader extends HTMLElement{
connectedCallback(){
this.innerHTML=`<header class="hdr"><div class="wrap hdr-in">
<a class="logo" href="/" aria-label="WhichPhone home"><svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><rect x="8" y="3" width="16" height="26" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="13" cy="12" r="1.8" fill="currentColor"/><circle cx="19" cy="12" r="1.8" fill="currentColor"/><path d="M12 19h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span>WhichPhone</span></a>
<button class="burger" aria-label="Toggle menu" aria-expanded="false"><i></i><i></i><i></i></button>
<nav class="nav" aria-label="Main"><a href="/#detector">Detector</a><a href="/#features">Features</a><a href="/#how">How it works</a><a href="/#specs">Specs</a><a href="/#privacy">Privacy</a><a href="/#faq">FAQ</a></nav>
</div></header>`;
const b=this.querySelector('.burger'),n=this.querySelector('.nav');
b.onclick=()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)};
n.onclick=e=>{if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded',false)}};
}}
customElements.define('site-header',SiteHeader);
