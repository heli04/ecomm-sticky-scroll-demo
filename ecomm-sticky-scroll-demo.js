class ScrollRevealServices extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<style>
:host {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
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
  align-items: flex-start;
  gap: 50px;
  margin-bottom: 120px;

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
  font-size: 18px;
  margin-bottom: 16px;
}

.desc {
  font-size: 16px;
  line-height: 1.8rem;
  color: rgb(var(--color_38));
  latter-spacing: -0.01em
}

.desc ul {
  padding-left: 20px;
  margin-top: 15px;
  list-style: disc;
}

.desc li {
  margin-bottom: 10px;
}

.desc strong {
  font-weight: bold;
}

/* IMAGE FIX (no radius as requested) */
.image {
  flex: 1;
  height: 320px;
  background-size: cover;
  background-position: center;
}

/* Mobile */
@media (max-width: 768px) {
  .service {
    flex-direction: column !important;
  }

  .image {
    width: 100%;
  }
}
</style>

<div class="section">
  <div class="container">

    <!-- 1 -->
    <div class="service">
      <div class="text">
        <h3 class="title font_3">Niche E-commerce Development</h3>
        <div class="desc">
          We create tailored shopping experiences that go beyond generic templates:
          <ul>
            <li>Custom storefronts designed for your brand</li>
            <li>Seamless checkout flows to reduce friction</li>
            <li>Advanced product configurators</li>
            <li>Subscription & membership systems</li>
            <li>Mobile-first optimized UX</li>
          </ul>
        </div>
      </div>
      <div class="image" style="background-image:url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d')"></div>
    </div>

    <!-- 2 -->
    <div class="service reverse">
      <div class="text">
        <h3 class="title font_3">Performance Optimization (CRO & Speed)</h3>
        <div class="desc">
          A slow site is a revenue leak. We apply data-driven improvements:
          <ul>
            <li>Speed optimization & Core Web Vitals</li>
            <li>Conversion Rate Optimization (CRO)</li>
            <li>Technical SEO improvements</li>
            <li>A/B testing for continuous growth</li>
          </ul>
        </div>
      </div>
      <div class="image" style="background-image:url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')"></div>
    </div>

    <!-- 3 -->
    <div class="service">
      <div class="text">
        <h3 class="title font_3">Business Process Automation</h3>
        <div class="desc">
          We automate operations so you can focus on growth:
          <ul>
            <li><strong>Inventory Sync:</strong> Real-time synchronization across Shopify, Amazon, eBay, etc.</li>
            <li><strong>Marketing Automation:</strong> Smart flows for abandoned carts and retention</li>
            <li><strong>Order & Fulfillment:</strong> Automated workflows from order to delivery</li>
            <li><strong>ERP & CRM Integrations:</strong> Seamless tool connectivity</li>
            <li><strong>Customer Data:</strong> Unified view across all touchpoints</li>
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
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal");
                }
            });
        }, { threshold: 0.2 });

        this.querySelectorAll(".service").forEach(el => observer.observe(el));
    }
}

if (!customElements.get('scroll-reveal-services')) {
    customElements.define('scroll-reveal-services', ScrollRevealServices);
}