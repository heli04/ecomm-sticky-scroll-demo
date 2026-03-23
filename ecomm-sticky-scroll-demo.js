class ScrollRevealServices extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<style>
  :host { 
    display: block; 
    --bg-color: #ffffff;
    font-family: sans-serif;
  }

  .scroll-container {
    position: relative;
    background: var(--bg-color);
  }

  /* Each wrapper acts as the scrollable distance for one 'slide' */
  .service-wrapper {
    height: 150vh; /* Increased height to give more "stay" time */
    position: relative;
  }

  /* This locks the content to the screen */
  .sticky-content {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .container {
    max-width: 1100px;
    width: 100%;
    margin: auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 50px;
    /* Initial state: Hidden and moved down */
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  }

  /* Active state: Visible and in place */
  .service-wrapper.active .container {
    opacity: 1;
    transform: translateY(0);
  }

  .service-wrapper.reverse .container {
    flex-direction: row-reverse;
  }

  .text, .image { flex: 1; }

  .title {
    font-size: 24px;
    margin-bottom: 16px;
    color: #333;
    font-weight: bold;
  }

  .desc {
    font-size: 16px;
    line-height: 1.8;
    color: #000;
  }

  .desc ul {
    padding-left: 20px;
    margin-top: 15px;
    list-style: disc;
  }

  .desc li { margin-bottom: 10px; }

  .image {
    height: 400px;
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    background-color: #f0f0f0;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    .container { flex-direction: column !important; text-align: left; gap: 20px; }
    .image { width: 100%; height: 250px; }
    .service-wrapper { height: auto; }
    .sticky-content { position: relative; height: auto; padding: 40px 0; }
    .container { opacity: 1; transform: none; }
  }
</style>

<div class="scroll-container">
  <div class="service-wrapper">
    <div class="sticky-content">
      <div class="container">
        <div class="text">
          <h3 class="title">Niche E-commerce Development</h3>
          <div class="desc">
            We create tailored shopping experiences that go beyond generic templates.
            <ul>
              <li><strong>Custom storefronts</strong> designed for your specific industry</li>
              <li><strong>Seamless checkout flows</strong> to reduce friction</li>
              <li><strong>Complex product configurators</strong></li>
              <li><strong>Subscription & membership models</strong></li>
              <li><strong>Mobile-first experiences</strong></li>
            </ul>
          </div>
        </div>
        <div class="image" style="background-image:url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d')"></div>
      </div>
    </div>
  </div>

  <div class="service-wrapper reverse">
    <div class="sticky-content">
      <div class="container">
        <div class="text">
          <h3 class="title">Performance Optimization (CRO & Speed)</h3>
          <div class="desc">
            A slow site is a revenue leak. We ensure your store performs at its peak.
            <ul>
              <li><strong>Speed Optimization:</strong> Lightning-fast load times</li>
              <li><strong>Conversion Rate Optimization (CRO):</strong> Auditing user behavior</li>
              <li><strong>Technical SEO:</strong> Perfectly readable by search engines</li>
              <li><strong>A/B Testing:</strong> Systematic experimentation</li>
            </ul>
          </div>
        </div>
        <div class="image" style="background-image:url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')"></div>
      </div>
    </div>
  </div>

  <div class="service-wrapper">
    <div class="sticky-content">
      <div class="container">
        <div class="text">
          <h3 class="title">Business Process Automation</h3>
          <div class="desc">
            We automate the "boring" stuff so you can grow your brand.
            <ul>
              <li><strong>Inventory Sync:</strong> Real-time across all channels</li>
              <li><strong>Marketing Automation:</strong> Smart flows for retention</li>
              <li><strong>Order & Fulfillment:</strong> Streamlined workflows</li>
              <li><strong>ERP & CRM Integrations:</strong> Seamless connections</li>
              <li><strong>Customer Data Unification:</strong> Single source of truth</li>
            </ul>
          </div>
        </div>
        <div class="image" style="background-image:url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40')"></div>
      </div>
    </div>
  </div>
</div>
`;

        const observerOptions = {
            root: null,
            threshold: 0.5 // Section is active when half-visible in viewport
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove("active");
                }
            });
        }, observerOptions);

        this.querySelectorAll(".service-wrapper").forEach(el => observer.observe(el));
    }
}

if (!customElements.get('scroll-reveal-services')) {
    customElements.define('scroll-reveal-services', ScrollRevealServices);
}