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
        font-size: 28px;
        color: #6c3cff;
        margin-bottom: 16px;
    }

    .desc {
        font-size: 16px;
        color: #333;
        line-height: 1.6;
    }

    .desc ul {
        padding-left: 18px;
        margin-top: 10px;
    }

    .desc li {
        margin-bottom: 8px;
    }

    .image {
        flex: 1;
        height: 260px;
        border-radius: 12px;
        background-size: cover;
        background-position: center;
    }

    /* Mobile */
    @media (max-width: 768px) {
        .service {
            flex-direction: column;
        }

        .service.reverse {
            flex-direction: column;
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
                <div class="title">Niche E-commerce Development</div>
                <div class="desc">
                    We create tailored shopping experiences that go beyond generic templates:
                    <ul>
                        <li>Custom storefronts for your industry & brand</li>
                        <li>Seamless checkout flows to reduce abandonment</li>
                        <li>Product configurators for personalization</li>
                        <li>Subscription & membership systems</li>
                        <li>Mobile-first optimized experience</li>
                    </ul>
                </div>
            </div>
            <div class="image"
                style="background-image:url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d')"></div>
        </div>

        <!-- 2 -->
        <div class="service reverse">
            <div class="text">
                <div class="title">Performance Optimization (CRO & Speed)</div>
                <div class="desc">
                    A slow site is a revenue leak. We fix that:
                    <ul>
                        <li>Lightning-fast load times & Core Web Vitals</li>
                        <li>Conversion Rate Optimization (CRO)</li>
                        <li>Technical SEO improvements</li>
                        <li>A/B testing for continuous growth</li>
                    </ul>
                </div>
            </div>
            <div class="image"
                style="background-image:url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')"></div>
        </div>

        <!-- 3 -->
        <div class="service">
            <div class="text">
                <div class="title">Business Process Automation</div>
                <div class="desc">
                    Automate operations and focus on growth:
                    <ul>
                        <li>Inventory sync across channels</li>
                        <li>Marketing automation flows</li>
                        <li>Order & fulfillment automation</li>
                        <li>ERP & CRM integrations</li>
                        <li>Unified customer data system</li>
                    </ul>
                </div>
            </div>
            <div class="image"
                style="background-image:url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40')"></div>
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

        this.querySelectorAll(".service").forEach(el => {
            observer.observe(el);
        });
    }
}

customElements.define('scroll-reveal-services', ScrollRevealServices);