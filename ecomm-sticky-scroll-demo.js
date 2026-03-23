class ScrollRevealServices extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<style>
:host {
  display: block;
  font-family: madefor-text-mediumbold,helveticaneuew01-45ligh,helveticaneuew02-45ligh,helveticaneuew10-45ligh,sans-serif;
}

.section {
  padding: 80px 20px;
  background: #fff;
}

.container {
  max-width: 1100px;
  margin: auto;
}

.service {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 100px;
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s ease;
}

.service.reveal {
  opacity: 1;
  transform: translateY(0);
}

.service.reverse {
  flex-direction: row-reverse;
}

.text {
  flex: 1;
}

.title {
  font-size: 20px;
  margin-bottom: 16px;
  color: rgb(64,64,64);
  font-family: madefor-text-mediumbold,helveticaneuew01-45ligh,helveticaneuew02-45ligh,helveticaneuew10-45ligh,sans-serif;
}

.desc {
  font-size: 16px;
  line-height: 1.8rem;
  color: rgb(0,0,0);
  font-family: madefor-text-mediumbold,helveticaneuew01-45ligh,helveticaneuew02-45ligh,helveticaneuew10-45ligh,sans-serif;
}

.desc ul {
  padding-left: 20px;
  margin-top: 15px;
  list-style: disc;
  font-family: madefor-text-mediumbold,helveticaneuew01-45ligh,helveticaneuew02-45ligh,helveticaneuew10-45ligh,sans-serif;
}

.desc li {
  margin-bottom: 15px;
  font-family: madefor-text-mediumbold,helveticaneuew01-45ligh,helveticaneuew02-45ligh,helveticaneuew10-45ligh,sans-serif;
}

.desc strong {
  font-weight: bold;
}

/* IMAGE FIX (no radius, vertically centered) */
.image {
  flex: 1;
  height: 320px;
  background-size: cover;
  background-position: center;
}

@media (max-width: 768px) {
  .service {
    flex-direction: column !important;
    align-items: flex-start;
  }
  .image {
    width: 100%;
    margin-top: 20px;
  }
}
</style>

<div class="section">
  <div class="container">

    <!-- 1 -->
    <div class="service">
      <div class="text">
        <h3 class="title">Niche E-commerce Development</h3>
        <div class="desc">
          We create tailored shopping experiences that go beyond generic templates. Whether you're on Shopify, WooCommerce, Magento, or a headless architecture, we build:
          <ul>
            <li><strong>Custom storefronts</strong> designed for your specific industry and brand identity</li>
            <li><strong>Seamless checkout flows</strong> to reduce cart abandonment and friction</li>
            <li><strong>Complex product configurators</strong> for personalized shopping experiences</li>
            <li><strong>Subscription & membership models</strong> for recurring revenue streams</li>
            <li><strong>Mobile-first experiences </strong>optimized for on-the-go shoppers</li>
          </ul>
        </div>
      </div>
      <div class="image" style="background-image:url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d')"></div>
    </div>

    <!-- 2 -->
    <div class="service reverse">
      <div class="text">
        <h3 class="title">Performance Optimization (CRO & Speed)</h3>
        <div class="desc">
          A slow site is a revenue leak. We apply data-driven strategies to ensure your store performs at its peak.
          <ul>
            <li><strong>Speed Optimization:</strong> Achieving lightning-fast load times and Core Web Vitals compliance</li>
            <li><strong>Conversion Rate Optimization (CRO):</strong> Auditing user behavior to tweak designs and flows that maximize sales</li>
            <li><strong>Technical SEO:</strong> Ensuring your site structure is perfectly readable by search engines</li>
            <li><strong>A/B Testing:</strong> Systematic experimentation to identify high-impact improvements</li>
          </ul>
        </div>
      </div>
      <div class="image" style="background-image:url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')"></div>
    </div>

    <!-- 3 -->
    <div class="service">
      <div class="text">
        <h3 class="title">Business Process Automation</h3>
        <div class="desc">
          We believe you should spend time growing your brand, not copying and pasting data. We automate the "boring" stuff.
          <ul>
            <li><strong>Inventory Sync:</strong> Real-time synchronization across multiple sales channels (Shopify, Amazon, eBay, etc.)</li>
            <li><strong>Marketing Automation:</strong> Smart flows for abandoned carts, post-purchase upsells, and customer retention</li>
            <li><strong>Order & Fulfillment Automation:</strong> Streamlined workflows from order capture to shipping notification</li>
            <li><strong>ERP & CRM Integrations:</strong> Connecting your store to accounting, shipping, and customer support tools seamlessly</li>
            <li><strong>Customer Data Unification:</strong> Single source of truth across all touchpoints</li>
          </ul>
        </div>
      </div>
      <div class="image" style="background-image:url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40')"></div>
    </div>

  </div>
</div>
`;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle("reveal", entry.isIntersecting);
            });
        }, { threshold: 0.2 });

        this.querySelectorAll(".service").forEach(el => observer.observe(el));
    }
}

if (!customElements.get('scroll-reveal-services')) {
    customElements.define('scroll-reveal-services', ScrollRevealServices);
}