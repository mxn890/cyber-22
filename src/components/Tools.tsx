import React, { useState } from 'react';

const Tools: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tools = [
    {
      name: 'Network Penetration Suite',
      category: 'network',
      description: 'Advanced port scanning, vulnerability assessment, and network discovery toolkit for professional penetration testing',
      features: ['Port Scanning', 'Vulnerability Detection', 'Network Mapping', 'Service Enumeration'],
      price: '$149.99',
      popular: true
    },
    {
      name: 'Web Application Scanner',
      category: 'web',
      description: 'Comprehensive web application security testing with automated SQL injection, XSS, and CSRF detection',
      features: ['SQL Injection', 'XSS Detection', 'CSRF Testing', 'Authentication Bypass'],
      price: '$199.99',
      popular: true
    },
    {
      name: 'WiFi Security Analyzer',
      category: 'wireless',
      description: 'Professional wireless network analysis and penetration testing suite with WPA/WPA2 cracking capabilities',
      features: ['WPA/WPA2 Testing', 'Packet Analysis', 'Rogue AP Detection', 'Handshake Capture'],
      price: '$129.99',
      popular: false
    },
    {
      name: 'Digital Forensics Toolkit',
      category: 'forensics',
      description: 'Enterprise-grade digital forensics and incident response platform for professional investigators',
      features: ['Data Recovery', 'Timeline Analysis', 'Evidence Collection', 'Memory Dump Analysis'],
      price: '$299.99',
      popular: true
    },
    {
      name: 'Social Engineering Toolkit',
      category: 'social',
      description: 'Advanced phishing simulation and social engineering awareness training platform',
      features: ['Phishing Templates', 'Email Spoofing', 'Awareness Training', 'Campaign Management'],
      price: '$179.99',
      popular: false
    },
    {
      name: 'Cryptography Suite',
      category: 'crypto',
      description: 'Professional encryption, decryption, and steganography tools for security researchers',
      features: ['AES/RSA Encryption', 'Steganography', 'Hash Analysis', 'Key Management'],
      price: '$159.99',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'network', name: 'Network' },
    { id: 'web', name: 'Web Apps' },
    { id: 'wireless', name: 'Wireless' },
    { id: 'forensics', name: 'Forensics' },
    { id: 'social', name: 'Social Eng' },
    { id: 'crypto', name: 'Crypto' }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="tools" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header Banner */}
        <div className="text-center mb-16">
          <div className="inline-block glassmorphism px-8 py-4 rounded-full mb-6">
            <span className="text-[#00FF94] font-bold text-lg">PROFESSIONAL ARSENAL</span>
          </div>
          <h2 className="text-6xl font-bold mb-6 cyber-gradient">
            Security Tools Suite
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Military-grade cybersecurity tools trusted by professionals worldwide. 
            Each tool is crafted for maximum efficiency and security.
          </p>
        </div>

        {/* Professional Banner */}
        <div className="glassmorphism p-8 rounded-2xl mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FF94]/10 to-[#FF2E63]/10"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 cyber-gradient">Professional Security Arsenal</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Access enterprise-grade cybersecurity tools used by Fortune 500 companies and government agencies. 
                Our comprehensive suite covers every aspect of modern security testing and assessment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00FF94]">500+</div>
                  <div className="text-gray-400 text-sm">Security Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF2E63]">99.9%</div>
                  <div className="text-gray-400 text-sm">Accuracy Rate</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
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
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="glassmorphism p-6 rounded-2xl">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search security tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-800 border border-gray-600 rounded-xl focus:border-[#00FF94] focus:outline-none text-white text-lg pl-12"
                />
                <div className="absolute left-4 top-4">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-[#00FF94] to-[#00CC77] text-black'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300 transform hover:scale-105 relative"
            >
              {tool.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-[#FF2E63] to-[#CC1E4F] text-white px-3 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </span>
                </div>
              )}
              
              {/* Tool Header */}
              <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF94]/20 to-[#FF2E63]/20"></div>
                <div className="text-center z-10">
                  <div className="text-4xl font-bold text-[#00FF94] mb-2">{tool.category.toUpperCase()}</div>
                  <div className="text-sm text-gray-300">PROFESSIONAL GRADE</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#00FF94]">{tool.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-400 mb-3">KEY FEATURES:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="text-xs bg-gray-800 text-gray-300 px-3 py-2 rounded-lg">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#FF2E63]">{tool.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-[#00FF94] to-[#00CC77] text-black font-bold rounded-lg hover:from-[#00CC77] hover:to-[#00AA66] transition-all duration-300 transform hover:scale-105">
                    Deploy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No tools found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tools;