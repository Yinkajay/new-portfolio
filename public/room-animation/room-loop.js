const asset = name => new URL(`./assets/${name}`, import.meta.url).href;

class PortfolioRoom extends HTMLElement {
  static observedAttributes = ['paused'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; width:100%; }
        * { box-sizing:border-box; }
        .room { position:relative; width:100%; aspect-ratio:1; isolation:isolate; }
        .still,.base,.cap,.effects { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; }
        .base,.cap,.effects,.rotor-plane { visibility:hidden; }
        :host([ready]) .still { visibility:hidden; }
        :host([ready]) :is(.base,.cap,.effects,.rotor-plane) { visibility:visible; }
        .base { z-index:0; }
        .rotor-plane { position:absolute; left:60.5%; top:7.5%; width:31%; aspect-ratio:1;
          transform:translate(-50%,-50%) rotate(7deg) scaleY(.34); z-index:1; pointer-events:none; }
        .rotor { display:block; width:100%; height:100%; animation:spin 3.6s linear infinite; }
        .cap { z-index:2; clip-path:polygon(59% 2.8%,61% 2.8%,61.8% 3.7%,61.4% 5.4%,61.5% 6.5%,63% 7.2%,63.8% 8.1%,63.7% 10%,63% 11.2%,61.5% 11.7%,59.4% 11.5%,57.6% 10.5%,57% 9.2%,57.2% 7.7%,58.1% 6.9%,59.3% 6.5%,59.4% 5%); }
        .effects { z-index:3; overflow:visible; }
        .steam { fill:none; stroke:#eee3cd; stroke-width:2.5; stroke-linecap:round;
          opacity:0; animation:steam 6s linear infinite; }
        .steam.b { animation-delay:-2s; stroke-width:2; }
        .steam.c { animation-delay:-4s; stroke-width:1.8; }
        .screen-line { stroke:#c7d5cc; stroke-width:2.5; stroke-linecap:round; opacity:.65; }
        .code-new { animation:code-line 12s steps(1,end) infinite; }
        .code-new.b { animation-delay:-4s; }
        .code-new.c { animation-delay:-8s; }
        .cursor { fill:#e2d4ba; animation:blink 1.2s steps(1,end) infinite; }
        .wash { fill:#a1b7c6; opacity:0; animation:screen-light 12s ease-in-out infinite; }
        .toolbar { display:flex; justify-content:center; padding-top:12px; }
        button { appearance:none; font:inherit; color:inherit; border:1px solid currentColor;
          background:transparent; border-radius:5px; padding:9px 15px; min-height:44px; cursor:pointer; }
        button:focus-visible { outline:2px solid currentColor; outline-offset:4px; }
        :host(:not([controls])) .toolbar { display:none; }
        :host(:not([running])) :is(.rotor,.steam,.code-new,.cursor,.wash) { animation-play-state:paused; }
        :host([reduced]) .still { visibility:visible; }
        :host([reduced]) :is(.base,.cap,.effects,.rotor-plane) { visibility:hidden; }
        [hidden] { display:none!important; }
        @keyframes spin { to { transform:rotate(360deg); } }
        @keyframes steam {
          0% { opacity:0; transform:translate(0,5px) scaleX(.92); }
          18% { opacity:.28; }
          65% { opacity:.2; }
          100% { opacity:0; transform:translate(9px,-43px) scaleX(1.05); }
        }
        @keyframes blink { 0%,48% { opacity:.85; } 49%,100% { opacity:0; } }
        @keyframes code-line { 0%,24% { opacity:0; } 25%,83% { opacity:.65; } 84%,100% { opacity:0; } }
        @keyframes screen-light { 0%,100% { opacity:.012; } 50% { opacity:.055; } }
        @media(prefers-reduced-motion:reduce) {
          .still { visibility:visible!important; }
          .base,.cap,.effects,.rotor-plane { visibility:hidden!important; }
          .rotor,.steam,.code-new,.cursor,.wash { animation:none!important; }
        }
      </style>
      <div class="room" role="img" aria-label="A developer working in a warmly lit room with album covers, plants and books. The ceiling fan turns, steam rises from a mug and the monitor shows gentle activity.">
        <img class="still" src="${asset('room-still.png')}" alt="" width="1254" height="1254" fetchpriority="high">
        <img class="base" src="${asset('room-base.png')}" alt="" width="1254" height="1254">
        <div class="rotor-plane"><img class="rotor" src="${asset('fan-rotor.png')}" alt="" width="1254" height="1254"></div>
        <img class="cap" src="${asset('room-base.png')}" alt="" width="1254" height="1254">
        <svg class="effects" viewBox="0 0 1254 1254" aria-hidden="true">
          <defs><clipPath id="monitor"><polygon points="220,414 385,381 391,493 226,557"/></clipPath></defs>
          <g clip-path="url(#monitor)">
            <polygon class="wash" points="220,414 385,381 391,493 226,557"/>
            <path class="screen-line code-new" d="M250 488 l30 -8"/>
            <path class="screen-line code-new b" d="M253 500 l46 -12"/>
            <path class="screen-line code-new c" d="M256 512 l24 -6"/>
            <path class="cursor" d="M285 478 l3 -.8 .8 6 -3 .8 Z"/>
          </g>
          <g>
            <path class="steam" d="M323 745 C312 733 338 723 324 708 C316 699 328 690 330 685"/>
            <path class="steam b" d="M335 748 C348 736 321 728 336 713 C344 705 333 696 336 687"/>
            <path class="steam c" d="M317 746 C304 734 330 725 318 712 C309 702 322 693 320 685"/>
          </g>
        </svg>
      </div>
      <div class="toolbar"><button type="button" aria-pressed="false">Pause animation</button></div>
    `;
    this._motion = matchMedia('(prefers-reduced-motion: reduce)');
    this._visible = true;
    this._sync = () => this.sync();
    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      this.toggleAttribute('paused');
    });
  }

  connectedCallback() {
    this._motion.addEventListener('change', this._sync);
    document.addEventListener('visibilitychange', this._sync);
    this._observer = new IntersectionObserver(([entry]) => {
      this._visible = entry.isIntersecting;
      this.sync();
    }, { threshold:0.01 });
    this._observer.observe(this);
    Promise.all([...this.shadowRoot.querySelectorAll('img')].map(image => image.decode()))
      .then(() => { if (this.isConnected) { this.setAttribute('ready',''); this.sync(); } })
      .catch(() => {
        this.shadowRoot.querySelector('.toolbar').hidden = true;
        this.setAttribute('data-status','static-fallback');
      });
    this.sync();
  }

  disconnectedCallback() {
    this._observer?.disconnect();
    this._motion.removeEventListener('change', this._sync);
    document.removeEventListener('visibilitychange', this._sync);
  }

  attributeChangedCallback() { if (this._motion) this.sync(); }

  sync() {
    const reduced = this._motion.matches;
    const paused = this.hasAttribute('paused');
    this.toggleAttribute('reduced', reduced);
    this.toggleAttribute('running', !reduced && !paused && this._visible && !document.hidden && this.hasAttribute('ready'));
    const button = this.shadowRoot.querySelector('button');
    button.disabled = reduced;
    button.textContent = reduced ? 'Still image · reduced motion' : paused ? 'Play animation' : 'Pause animation';
    button.setAttribute('aria-pressed', String(paused));
  }
}

if (!customElements.get('portfolio-room')) customElements.define('portfolio-room', PortfolioRoom);
