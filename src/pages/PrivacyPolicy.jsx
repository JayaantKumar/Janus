import React, { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(".reveal-target");
      targets.forEach((target) => {
        gsap.fromTo(
          target,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: target,
              start: "top 85%",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-black text-white w-full overflow-hidden flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 md:pt-48 pb-32">
        
        {/* ================= HEADER SECTION ================= */}
        <header className="px-6 max-w-4xl mx-auto text-center mb-24 reveal-target">
          <h1 className="text-5xl md:text-7xl lg:text-[7vw] font-bold tracking-tighter uppercase mb-6">
            Privacy Policy
          </h1>
          <p className="text-neutral-400 text-sm tracking-wide">
            Effective Date: March 20, 2025
          </p>
        </header>

        {/* ================= POLICY CONTENT ================= */}
        <div className="px-6 max-w-4xl mx-auto flex flex-col gap-12 md:gap-16">

          {/* 1. Introduction */}
          <section className="reveal-target">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">1. Introduction</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              We are a leading printing and packaging company specializing in mono carton boxes, food packaging boxes, and corrugated boxes. With over 40 years of experience across our group of four companies, we offer a one-stop solution for all your packaging needs—from designing to delivering your product. Our expertise ensures high-quality, customized packaging solutions that enhance your product's appeal and safeguard your brand. Whether it's creative design or timely delivery, we are dedicated to providing seamless packaging services that set your business apart.
            </p>
          </section>

          {/* 2. Company Information */}
          <section className="reveal-target">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">2. Company Information</h2>
            <ul className="flex flex-col md:flex-row gap-2 md:gap-8 text-neutral-400 text-sm md:text-base">
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-400"></span> Company Name: Bearcat Solutions Private Limited</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-400"></span> Brand Name: Janus Print</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-400"></span> Operating Location: Delhi, India</li>
            </ul>
          </section>

          {/* 3. Data Collection */}
          <section className="reveal-target">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">3. Data Collection</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
              We collect personal data from you in various ways, including when you:
            </p>
            <ul className="list-disc pl-5 text-neutral-400 text-sm md:text-base space-y-2 mb-6">
              <li>Fill out forms on our website or LinkedIn ads.</li>
              <li>Engage with us through customer meetings and other communications.</li>
            </ul>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
              The types of personal data we collect include:
            </p>
            <ul className="list-disc pl-5 text-neutral-400 text-sm md:text-base space-y-2">
              <li><strong className="text-white font-medium">Contact Information:</strong> Name, email address, phone number.</li>
              <li><strong className="text-white font-medium">Other Relevant Information:</strong> Any additional details you provide (e.g., your specific needs or requirements) that help us understand and serve you better.</li>
            </ul>
          </section>

          {/* 4. Purpose of Data Collection */}
          <section className="reveal-target">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">4. Purpose of Data Collection</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
              We use your personal data to:
            </p>
            <ul className="list-disc pl-5 text-neutral-400 text-sm md:text-base space-y-2">
              <li>Process orders and provide customer service.</li>
              <li>Send newsletters and marketing communications.</li>
              <li>Conduct analytics to improve our products and services.</li>
              <li>Make automated decisions (e.g., personalized offers) to enhance your experience.</li>
              <li>Understand customer needs and identify areas for improvement.</li>
            </ul>
          </section>

          {/* 5. Data Sharing & Storage */}
          <section className="reveal-target">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">5. Data Sharing & Storage</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
              We do not sell or share your personal data with third parties for their own marketing purposes. However, we may share your data with:
            </p>
            <ul className="list-disc pl-5 text-neutral-400 text-sm md:text-base space-y-2 mb-4">
              <li><strong className="text-white font-medium">Service Providers:</strong> Such as shipping companies and partners who assist in delivering products.</li>
              <li><strong className="text-white font-medium">CRM Storage:</strong> Your data is securely stored on our Zoho CRM platform.</li>
            </ul>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              No personal data is transferred internationally.
            </p>
          </section>

          {/* 6. Data Security */}
          <section className="reveal-target">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">6. Data Security</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
              We employ robust security measures to protect your personal data, including:
            </p>
            <ul className="list-disc pl-5 text-neutral-400 text-sm md:text-base space-y-2">
              <li>Encrypted servers.</li>
              <li>Private password protocols and multi-factor authentication (MFA) for system access.</li>
              <li>Strict policies against offline data downloads.</li>
            </ul>
          </section>

          {/* 7. Data Retention */}
          <section className="reveal-target">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">7. Data Retention</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              We retain your personal data indefinitely unless you explicitly request deletion. However, if you request deletion, we may need to retain certain information until the end of the financial year for record-keeping and legal purposes.
            </p>
          </section>

          {/* 8. Your Rights */}
          <section className="reveal-target">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">8. Your Rights</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-5 text-neutral-400 text-sm md:text-base space-y-2 mb-6">
              <li>Access your personal data.</li>
              <li>Request corrections to any inaccuracies.</li>
              <li>Request deletion or restrict the processing of your personal data.</li>
              <li>Opt-out of marketing communications at any time.</li>
            </ul>
            <p className="text-neutral-500 text-xs md:text-sm italic">
              Please note: In cases where we are providing you with ongoing services, we may be unable to immediately delete all data until certain financial records are finalized.
            </p>
          </section>

          {/* 9. Cookies & Tracking Technologies */}
          <section className="reveal-target">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">9. Cookies & Tracking Technologies</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
              We use cookies and similar technologies as permitted by our Zoho platform. These tools help us:
            </p>
            <ul className="list-disc pl-5 text-neutral-400 text-sm md:text-base space-y-2 mb-6">
              <li>Analyze user behavior.</li>
              <li>Improve our Services.</li>
              <li>Personalize content and advertising.</li>
            </ul>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              For more detailed information on the cookies we use, please refer to our Cookies Policy.
            </p>
          </section>

          {/* 10. Legal Compliance */}
          <section className="reveal-target">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">10. Legal Compliance</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              We comply with all applicable data protection laws and regulations in India, including those set forth by the Information Technology Act and related guidelines.
            </p>
          </section>

          {/* 11. Privacy Inquiries */}
          <section className="reveal-target">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">11. Privacy Inquiries</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or wish to exercise any of your rights (such as accessing, correcting, or deleting your personal data), please contact us at:
            </p>
            <ul className="list-disc pl-5 text-neutral-400 text-sm md:text-base space-y-2">
              <li><strong className="text-white font-medium">Privacy Contact Email:</strong> <a href="mailto:connect@janusprint.com" className="hover:text-white transition-colors">connect@janusprint.com</a></li>
            </ul>
          </section>

          {/* 12. Updates To This Privacy Policy */}
          <section className="reveal-target">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">12. Updates To This Privacy Policy</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>
          </section>

          {/* 13. Acceptance Of This Policy */}
          <section className="reveal-target">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">13. Acceptance Of This Policy</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              By using our Services, you acknowledge that you have read and understood this Privacy Policy and agree to our collection, use, and disclosure practices as described herein.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}