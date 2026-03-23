class ScrollRevealServices extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<style>
:host {
  display: block;
  font-family: madefor-text-mediumbold,helveticaneuew01-45ligh,helveticaneuew02-45ligh,helveticaneuew10-45ligh,sans-serif;
}

.reveal-section {
  padding: 80px 20px;
  background: #fff;
}

.reveal-section__container {
  max-width: 1100px;
  margin: auto;
}
.reveal-section__card {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 100px;
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s ease;
}

.reveal-section__card:first-child {
  opacity: 1;
  transform: translateY(0);
}

/* Reveal animation */
.reveal-section__card.reveal {
  opacity: 1;
  transform: translateY(0);
}

.reveal-section__card--reverse {
  flex-direction: row-reverse;
}

.reveal-section__content {
  flex: 1;
}

.reveal-section__title {
  font-size: 20px;
  margin-bottom: 16px;
  color: rgb(64,64,64);
  font-family: madefor-text-mediumbold,helveticaneuew01-45ligh,helveticaneuew02-45ligh,helveticaneuew10-45ligh,sans-serif;
}

.reveal-section__description {
  font-size: 16px;
  line-height: 1.8rem;
  color: rgb(0,0,0);
  font-family: madefor-text-mediumbold,helveticaneuew01-45ligh,helveticaneuew02-45ligh,helveticaneuew10-45ligh,sans-serif;
  letter-spacing: -0.01em; 
}

.reveal-section__list {
  padding-left: 20px;
  margin-top: 15px;
  list-style: disc;
  font-family: madefor-text-mediumbold,helveticaneuew01-45ligh,helveticaneuew02-45ligh,helveticaneuew10-45ligh,sans-serif;
}

.reveal-section__list-item {
  margin-bottom: 15px;
  font-family: madefor-text-mediumbold,helveticaneuew01-45ligh,helveticaneuew02-45ligh,helveticaneuew10-45ligh,sans-serif;
}

.reveal-section__bold {
  font-weight: bold;
}

.reveal-section__image {
  flex: 1;
  height: 320px;
  min-height: 320px; 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .reveal-section__card {
    flex-direction: column !important;
    align-items: stretch;
  }

  .reveal-section__content {
    width: 100%;
  }

  .reveal-section__image {
    width: 100%;
    height: 250px;
    min-height: 250px;
    display: block;
    margin-top: 20px;
    visibility: visible !important;
    opacity: 1 !important;
    background-size: contain;
  }
}
</style>

<div class="reveal-section">
  <div class="reveal-section__container">

    <!-- 1 -->
    <div class="reveal-section__card">
      <div class="reveal-section__content">
        <h3 class="reveal-section__title">Niche E-commerce Development</h3>
        <div class="reveal-section__description">
          We create tailored shopping experiences that go beyond generic templates. Whether you're on Shopify, WooCommerce, Magento, or a headless architecture, we build:
          <ul class="reveal-section__list">
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">Custom storefronts</strong> designed for your specific industry and brand identity</li>
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">Seamless checkout flows</strong> to reduce cart abandonment and friction</li>
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">Complex product configurators</strong> for personalized shopping experiences</li>
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">Subscription & membership models</strong> for recurring revenue streams</li>
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">Mobile-first experiences </strong>optimized for on-the-go shoppers</li>
          </ul>
        </div>
      </div>
      <div class="reveal-section__image" style="background-image:url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d')"></div>
    </div>

    <!-- 2 -->
    <div class="reveal-section__card reveal-section__card--reverse">
      <div class="reveal-section__content">
        <h3 class="reveal-section__title">Performance Optimization (CRO & Speed)</h3>
        <div class="reveal-section__description">
          A slow site is a revenue leak. We apply data-driven strategies to ensure your store performs at its peak.
          <ul class="reveal-section__list">
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">Speed Optimization:</strong> Achieving lightning-fast load times and Core Web Vitals compliance</li>
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">Conversion Rate Optimization (CRO):</strong> Auditing user behavior to tweak designs and flows that maximize sales</li>
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">Technical SEO:</strong> Ensuring your site structure is perfectly readable by search engines</li>
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">A/B Testing:</strong> Systematic experimentation to identify high-impact improvements</li>
          </ul>
        </div>
      </div>
      <div class="reveal-section__image" style="background-image:url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')"></div>
    </div>

    <!-- 3 -->
    <div class="reveal-section__card">
      <div class="reveal-section__content">
        <h3 class="reveal-section__title">Business Process Automation</h3>
         <div class="reveal-section__description">
          We believe you should spend time growing your brand, not copying and pasting data. We automate the "boring" stuff.
          <ul class="reveal-section__list">
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">Inventory Sync:</strong> Real-time synchronization across multiple sales channels (Shopify, Amazon, eBay, etc.)</li>
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">Marketing Automation:</strong> Smart flows for abandoned carts, post-purchase upsells, and customer retention</li>
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">Order & Fulfillment Automation:</strong> Streamlined workflows from order capture to shipping notification</li>
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">ERP & CRM Integrations:</strong> Connecting your store to accounting, shipping, and customer support tools seamlessly</li>
            <li class="reveal-section__list-item"><strong class="reveal-section__bold">Customer Data Unification:</strong> Single source of truth across all touchpoints</li>
          </ul>
        </div>
      </div>
      <div class="reveal-section__image" style="background-image:url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40')"></div>
    </div>

  </div>
</div>
`;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal");

                    // stop observing after first reveal
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        // Observe all except first
        this.querySelectorAll(".reveal-section__card:not(:first-child)").forEach(el => {
            observer.observe(el);
        });
    }
}

if (!customElements.get('scroll-reveal-services')) {
    customElements.define('scroll-reveal-services', ScrollRevealServices);
}