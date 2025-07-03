import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#00FF94] rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-[#FF2E63] rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-[#00FF94] rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-[#FF2E63] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00FF94] to-[#00CC77] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">CF</span>
              </div>
              <div className="text-3xl font-bold cyber-gradient">
                CyberFortress
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading provider of professional cybersecurity tools and penetration testing solutions. 
              Empowering security professionals worldwide with military-grade protection.
            </p>
            
            {/* Cybersecurity Images */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <img
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Cybersecurity Hacking"
                className="w-full h-24 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Network Security"
                className="w-full h-24 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00FF94] to-[#00CC77] rounded-lg flex items-center justify-center hover:from-[#00CC77] hover:to-[#00AA66] transition-all cursor-pointer transform hover:scale-110">
                <span className="text-black font-bold">T</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF2E63] to-[#CC1E4F] rounded-lg flex items-center justify-center hover:from-[#CC1E4F] hover:to-[#AA1A42] transition-all cursor-pointer transform hover:scale-110">
                <span className="text-white font-bold">G</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center hover:from-gray-600 hover:to-gray-500 transition-all cursor-pointer transform hover:scale-110">
                <span className="text-white font-bold">D</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center hover:from-blue-500 hover:to-blue-400 transition-all cursor-pointer transform hover:scale-110">
                <span className="text-white font-bold">L</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00FF94]">Quick Access</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-[#00FF94] transition-colors">Home</a></li>
              <li><a href="#breach-checker" className="text-gray-300 hover:text-[#00FF94] transition-colors">Breach Checker</a></li>
              <li><a href="#tools" className="text-gray-300 hover:text-[#00FF94] transition-colors">Security Tools</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#00FF94] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00FF94] transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          {/* Security Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00FF94]">Specializations</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#00FF94] transition-colors">Network Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00FF94] transition-colors">Web Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00FF94] transition-colors">Wireless Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00FF94] transition-colors">Digital Forensics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00FF94] transition-colors">Social Engineering</a></li>
            </ul>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="glassmorphism p-8 rounded-2xl mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#00FF94] mb-2">50K+</div>
              <div className="text-gray-400 text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF2E63] mb-2">500+</div>
              <div className="text-gray-400 text-sm">Security Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00FF94] mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF2E63] mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Security Badge"
                className="w-12 h-12 rounded-lg opacity-80"
              />
              <p className="text-gray-400 text-sm">
                © 2024 CyberFortress. All rights reserved. Professional security platform.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-400 hover:text-[#00FF94] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#00FF94] text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#00FF94] text-sm transition-colors">Security</a>
              <a href="#" className="text-gray-400 hover:text-[#00FF94] text-sm transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;