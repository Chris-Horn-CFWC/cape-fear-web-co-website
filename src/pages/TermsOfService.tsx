import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";

const SITE_URL = "https://www.capefearweb.co";

const TermsOfService = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  useEffect(() => {
    document.title = "Terms of Service | Cape Fear Web Co.";
    const desc = "Terms of Service for Cape Fear Web Co. Read the terms and conditions governing the use of our web design and development services.";

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement(selector.startsWith("link") ? "link" : "meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", "Terms of Service | Cape Fear Web Co.");
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[property="og:url"]', "content", `${SITE_URL}/terms`);
    setMeta('link[rel="canonical"]', "href", `${SITE_URL}/terms`);

    return () => {
      document.title = "Web Design Wilmington NC | Cape Fear Web Co.";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar onGetStarted={openContact} />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-2">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: February 15, 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the Cape Fear Web Co. website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Services</h2>
              <p>Cape Fear Web Co. provides web design, web development, branding, SEO optimization, and rapid prototyping services. The specific scope, deliverables, and timeline for each project will be outlined in a separate project agreement or proposal provided to the client.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Intellectual Property</h2>
              <p>Upon full payment, the client receives ownership of the final deliverables, including custom designs and code created specifically for their project. Cape Fear Web Co. retains the right to display completed work in our portfolio unless otherwise agreed in writing.</p>
              <p className="mt-2">Third-party assets (stock photos, fonts, plugins) are subject to their respective licenses and remain the property of their owners.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Payment Terms</h2>
              <p>Payment terms will be specified in the project proposal. Typical terms include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>A deposit is required before work begins.</li>
                <li>The remaining balance is due upon project completion and before final files are delivered.</li>
                <li>Late payments may result in project delays or suspension of services.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Client Responsibilities</h2>
              <p>Clients are responsible for providing content, feedback, and approvals in a timely manner. Delays in providing materials may affect the project timeline. Clients are also responsible for the accuracy of the content they provide.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Revisions</h2>
              <p>Each project includes a set number of revision rounds as outlined in the project proposal. Additional revisions beyond the agreed scope may incur extra charges at our standard hourly rate.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
              <p>Cape Fear Web Co. shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website. Our total liability shall not exceed the amount paid by the client for the specific project in question.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Termination</h2>
              <p>Either party may terminate a project agreement with written notice. If the client terminates, payment is due for all work completed up to the termination date. Cape Fear Web Co. reserves the right to terminate services if the client breaches these terms or fails to make timely payments.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Governing Law</h2>
              <p>These Terms of Service are governed by and construed in accordance with the laws of the State of North Carolina. Any disputes arising from these terms shall be resolved in the courts of New Hanover County, North Carolina.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">10. Changes to These Terms</h2>
              <p>We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of our services after changes constitutes acceptance of the revised terms.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <ul className="list-none mt-2 space-y-1">
                <li>Email: <a href="mailto:contact@capefearweb.co" className="text-primary hover:underline">contact@capefearweb.co</a></li>
                <li>Phone: <a href="tel:+14702631395" className="text-primary hover:underline">(470) 263-1395</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer onGetStarted={openContact} />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default TermsOfService;
