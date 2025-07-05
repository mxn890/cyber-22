import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 px-4 relative overflow-hidden border-t border-gray-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#00FF94] rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-[#FF2E63] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-[#00FF94] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-[#FF2E63] rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Hacker pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2NCAwIEwgMCAwIDAgNjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00FF94] to-[#00CC77] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12">
                <span className="text-black font-bold text-xl">CF</span>
              </div>
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00CC77]">
                CyberFortress
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading provider of professional cybersecurity tools and penetration testing solutions. 
              Empowering security professionals worldwide with military-grade protection.
            </p>
            
            {/* Cybersecurity Images */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative group overflow-hidden rounded-lg border border-gray-800">
                <img
                  src="/images/footer2.png"
                  alt="Cybersecurity Terminal"
                  className="w-full h-24 object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-xs text-[#00FF94] font-mono">Terminal Access</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg border border-gray-800">
                <img
                  src="/images/footer3.png"
                  alt="Data Encryption"
                  className="w-full h-24 object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-xs text-[#00FF94] font-mono">Data Encryption</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-[#00CC77]">
              Quick Access
            </h3>
            <ul className="space-y-3">
              {['Home', 'Breach Checker', 'Security Tools', 'About Us', 'Documentation'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[#00FF94] transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#00FF94] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#00FF94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Security Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E63] to-[#CC1E4F]">
              Specializations
            </h3>
            <ul className="space-y-3">
              {['Network Security', 'Web Security', 'Wireless Security', 'Digital Forensics', 'Social Engineering'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[#FF2E63] transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#FF2E63] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF2E63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="backdrop-blur-sm bg-gray-900/50 p-8 rounded-2xl mb-12 border border-gray-800/50 hover:border-[#00FF94]/30 transition-all duration-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Active Users", color: "text-[#00FF94]" },
              { value: "500+", label: "Security Tools", color: "text-[#FF2E63]" },
              { value: "99.9%", label: "Uptime", color: "text-[#00FF94]" },
              { value: "24/7", label: "Support", color: "text-[#FF2E63]" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`text-4xl font-bold ${stat.color} mb-2 transition-all duration-300 group-hover:scale-110`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="/images/footer1.png"
                  alt="Security Badge"
                  className="w-12 h-12 rounded-lg opacity-80 hover:opacity-100 transition-opacity border border-[#00FF94]/20 hover:border-[#00FF94]/50 object-cover"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#00FF94] rounded-full animate-ping opacity-75"></div>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                © 2024 CyberFortress. All rights reserved. Professional security platform.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Security', 'Contact'].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-[#00FF94] text-sm transition-colors flex items-center group"
                >
                  <span className="hidden group-hover:inline-block mr-1 text-[#00FF94]">#</span>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;