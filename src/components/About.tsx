import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block glassmorphism px-8 py-4 rounded-full mb-6">
            <span className="text-[#00FF94] font-bold text-lg">ABOUT US</span>
          </div>
          <h2 className="text-5xl font-bold mb-8 cyber-gradient">
            Elite Security Platform
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We provide cutting-edge cybersecurity tools and penetration testing solutions 
              for security professionals, ethical hackers, and organizations worldwide.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our platform combines advanced automation with professional-grade security 
              tools, making complex security assessments accessible and efficient.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center glassmorphism p-6 rounded-xl">
                <div className="text-4xl font-bold text-[#00FF94] mb-2">50K+</div>
                <div className="text-gray-400">Active Users</div>
                <div className="text-sm text-gray-500 mt-1">Worldwide</div>
              </div>
              <div className="text-center glassmorphism p-6 rounded-xl">
                <div className="text-4xl font-bold text-[#FF2E63] mb-2">500+</div>
                <div className="text-gray-400">Security Tools</div>
                <div className="text-sm text-gray-500 mt-1">Professional Grade</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg">
                <div className="w-12 h-12 bg-[#00FF94] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Military-Grade Security</h4>
                  <p className="text-gray-400 text-sm">Enterprise-level protection standards</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg">
                <div className="w-12 h-12 bg-[#FF2E63] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Real-Time Monitoring</h4>
                  <p className="text-gray-400 text-sm">24/7 threat detection and response</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg">
                <div className="w-12 h-12 bg-[#00FF94] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Encrypted Platform</h4>
                  <p className="text-gray-400 text-sm">End-to-end encryption for all data</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glassmorphism p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Cybersecurity Hacking"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Security Operations"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-[#00FF94]">Why Choose CyberFortress?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#00FF94] rounded-full flex items-center justify-center mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Professional-Grade Tools</h4>
                    <p className="text-gray-300 text-sm">Industry-standard security solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#00FF94] rounded-full flex items-center justify-center mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Regular Updates</h4>
                    <p className="text-gray-300 text-sm">Latest threat intelligence and features</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#00FF94] rounded-full flex items-center justify-center mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Expert Support</h4>
                    <p className="text-gray-300 text-sm">24/7 technical assistance from experts</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#00FF94] rounded-full flex items-center justify-center mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Secure Infrastructure</h4>
                    <p className="text-gray-300 text-sm">Bank-level security and encryption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;