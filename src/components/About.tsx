import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#00FF94] rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-[#FF2E63] rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#00B4FF] rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0  opacity-50 bg-[url('/images/about.png')]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block glassmorphism px-8 py-3 rounded-full mb-6 border border-[#00FF94]/30 hover:border-[#00FF94]/50 transition-all duration-300 hover:scale-105">
            <span className="text-[#00FF94] font-bold text-lg tracking-widest">ABOUT CYBERFORTRESS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 cyber-gradient">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] via-[#00FF94] to-[#FF2E63]">
              Elite Security Platform
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF94] to-[#FF2E63] mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We provide <span className="text-[#00FF94] font-semibold">cutting-edge cybersecurity tools</span> and penetration testing solutions 
              for security professionals, ethical hackers, and organizations worldwide.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our platform combines <span className="text-white font-medium">advanced automation</span> with professional-grade security 
              tools, making complex security assessments <span className="text-[#00B4FF]">accessible and efficient</span>.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center glassmorphism p-6 rounded-xl hover:scale-105 transition-transform duration-300 border border-[#00FF94]/20 hover:border-[#00FF94]/40">
                <div className="text-4xl font-bold text-[#00FF94] mb-2">50K+</div>
                <div className="text-gray-300">Active Users</div>
                <div className="text-xs text-gray-500 mt-1 tracking-widest">WORLDWIDE</div>
              </div>
              <div className="text-center glassmorphism p-6 rounded-xl hover:scale-105 transition-transform duration-300 border border-[#FF2E63]/20 hover:border-[#FF2E63]/40">
                <div className="text-4xl font-bold text-[#FF2E63] mb-2">500+</div>
                <div className="text-gray-300">Security Tools</div>
                <div className="text-xs text-gray-500 mt-1 tracking-widest">PROFESSIONAL GRADE</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg hover:bg-gradient-to-r from-[#00FF94]/10 to-transparent border border-[#00FF94]/10 hover:border-[#00FF94]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-[#00FF94] rounded-lg flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Military-Grade Security</h4>
                  <p className="text-gray-400 text-sm">Enterprise-level protection standards</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg hover:bg-gradient-to-r from-[#FF2E63]/10 to-transparent border border-[#FF2E63]/10 hover:border-[#FF2E63]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-[#FF2E63] rounded-lg flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Real-Time Monitoring</h4>
                  <p className="text-gray-400 text-sm">24/7 threat detection and response</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg hover:bg-gradient-to-r from-[#00B4FF]/10 to-transparent border border-[#00B4FF]/10 hover:border-[#00B4FF]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-[#00B4FF] rounded-lg flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Encrypted Platform</h4>
                  <p className="text-gray-400 text-sm">End-to-end encryption for all data</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glassmorphism p-8 rounded-2xl border border-gray-700/50 hover:border-[#00FF94]/30 transition-all duration-500">
              <div className="relative group">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="relative overflow-hidden rounded-lg h-32">
                    <img
                      src="/images/about1.png"
                      alt="Cybersecurity Hacking"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-xs font-mono text-[#00FF94]">SECURITY OPERATIONS</div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg h-32">
                    <img
                      src="images/about2.png"
                      alt="Security Operations"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-xs font-mono text-[#00FF94]">NETWORK PROTECTION</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#FF2E63] rounded-full flex items-center justify-center text-white text-2xl z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-[#00B4FF]">Why Choose CyberFortress?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-[#00FF94] rounded-full flex items-center justify-center mt-1 shrink-0 group-hover:animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#00FF94] transition-colors duration-300">Professional-Grade Tools</h4>
                    <p className="text-gray-300 text-sm">Industry-standard security solutions used by Fortune 500 companies</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-[#00FF94] rounded-full flex items-center justify-center mt-1 shrink-0 group-hover:animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#00FF94] transition-colors duration-300">Regular Updates</h4>
                    <p className="text-gray-300 text-sm">Daily threat intelligence updates and new features</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-[#00FF94] rounded-full flex items-center justify-center mt-1 shrink-0 group-hover:animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#00FF94] transition-colors duration-300">Expert Support</h4>
                    <p className="text-gray-300 text-sm">24/7 technical assistance from certified security experts</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-[#00FF94] rounded-full flex items-center justify-center mt-1 shrink-0 group-hover:animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#00FF94] transition-colors duration-300">Secure Infrastructure</h4>
                    <p className="text-gray-300 text-sm">Bank-level AES-256 encryption and zero-trust architecture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack logos */}
      
      </div>
    </section>
  );
};

export default About;