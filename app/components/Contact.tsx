export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-[#FFF8EE]"
      aria-label="Contact information"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#C8332A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Get In Touch
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold text-[#1E0E05] mb-4"
          style={{ fontFamily: "var(--font-oranienbaum), serif" }}
        >
          We&apos;d Love to
          <span className="text-[#C8332A] italic"> Hear From You</span>
        </h2>
        <div className="w-16 h-1 bg-[#D4941A] mx-auto mb-8 rounded-full" />
        <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
          For reservations, catering inquiries, or any questions — don&apos;t hesitate to reach out.
          We&apos;re always happy to help.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          <a
            href="tel:+18109663400"
            className="group bg-white hover:bg-[#C8332A] border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-[#C8332A]/10 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors">
              <svg className="w-6 h-6 text-[#C8332A] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="font-bold text-[#1E0E05] group-hover:text-white mb-1 transition-colors" style={{ fontFamily: "var(--font-oranienbaum), serif" }}>
              Call Us
            </p>
            <p className="text-[#C8332A] group-hover:text-[#E8A832] font-semibold text-sm transition-colors">
              (810) 966-3400
            </p>
          </a>

          <a
            href="mailto:pompeiis@sbcglobal.net"
            className="group bg-white hover:bg-[#D4941A] border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-[#D4941A]/10 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors">
              <svg className="w-6 h-6 text-[#D4941A] group-hover:text-[#1E0E05] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="font-bold text-[#1E0E05] mb-1" style={{ fontFamily: "var(--font-oranienbaum), serif" }}>
              Email Us
            </p>
            <p className="text-[#D4941A] group-hover:text-[#1E0E05] font-medium text-xs break-all transition-colors">
              pompeiis@sbcglobal.net
            </p>
          </a>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=1120+Military+St,+Port+Huron,+MI+48060"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white hover:bg-[#3D5C34] border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-[#3D5C34]/10 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors">
              <svg className="w-6 h-6 text-[#3D5C34] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="font-bold text-[#1E0E05] group-hover:text-white mb-1 transition-colors" style={{ fontFamily: "var(--font-oranienbaum), serif" }}>
              Visit Us
            </p>
            <p className="text-[#3D5C34] group-hover:text-[#E8A832] font-medium text-xs leading-relaxed transition-colors">
              1120 Military St<br />Port Huron, MI 48060
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
