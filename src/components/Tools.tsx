import React, { useState } from 'react';

const Tools: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tools = [
    {
      name: 'Network Penetration Suite',
      category: 'network',
      description: 'Complete network security assessment toolkit with advanced scanning capabilities',
      features: ['Port Scanning', 'Vulnerability Detection', 'Network Mapping'],
      price: '$149.99',
      popular: true,
      delivery: 'Instant Telegram Delivery'
    },
    {
      name: 'Web Application Scanner',
      category: 'web',
      description: 'Automated security testing for web applications with comprehensive reporting',
      features: ['SQL Injection', 'XSS Detection', 'CSRF Testing'],
      price: '$199.99',
      popular: true,
      delivery: 'Instant Telegram Delivery'
    },
    {
      name: 'WiFi Security Analyzer',
      category: 'wireless',
      description: 'Professional wireless network assessment and penetration testing tools',
      features: ['WPA/WPA2 Testing', 'Packet Analysis', 'Rogue AP Detection'],
      price: '$129.99',
      popular: false,
      delivery: 'Instant Telegram Delivery'
    },
    {
      name: 'Digital Forensics Toolkit',
      category: 'forensics',
      description: 'Comprehensive digital investigation platform for forensic experts',
      features: ['Data Recovery', 'Timeline Analysis', 'Evidence Collection'],
      price: '$299.99',
      popular: true,
      delivery: 'Instant Telegram Delivery'
    },
    {
      name: 'Social Engineering Toolkit',
      category: 'social',
      description: 'Professional social engineering simulation and training platform',
      features: ['Phishing Templates', 'Email Spoofing', 'Awareness Training'],
      price: '$179.99',
      popular: false,
      delivery: 'Instant Telegram Delivery'
    },
    {
      name: 'Cryptography Suite',
      category: 'crypto',
      description: 'Advanced encryption and security analysis tools for researchers',
      features: ['AES/RSA Encryption', 'Steganography', 'Hash Analysis'],
      price: '$159.99',
      popular: false,
      delivery: 'Instant Telegram Delivery'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'network', name: 'Network Security' },
    { id: 'web', name: 'Web Application Security' },
    { id: 'wireless', name: 'Wireless Security' },
    { id: 'forensics', name: 'Digital Forensics' },
    { id: 'social', name: 'Social Engineering' },
    { id: 'crypto', name: 'Cryptography' }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.features.some(feat => feat.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const highlightMatch = (text: string) => {
    if (!searchQuery) return text;
    
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.split(regex).map((part, i) => 
      regex.test(part) ? <mark key={i} className="bg-[#00FF94]/30">{part}</mark> : part
    );
  };

  const selectedCategoryName = categories.find(cat => cat.id === selectedCategory)?.name || 'All Tools';

  return (
    <section id="tools" className="py-12 px-4 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#00FF94]/10 text-[#00FF94] px-4 py-1 rounded-full text-sm font-medium mb-3">
            PROFESSIONAL TOOLS COLLECTION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Premium Security Tools Suite
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Access our curated collection of professional cybersecurity tools
          </p>
        </div>

        {/* Enhanced Search and Filter */}
        <div className="mb-8 sticky top-2 z-10">
          <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700 backdrop-blur-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search tools by name, description or features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-[#00FF94] focus:ring-2 focus:ring-[#00FF94]/30 focus:outline-none text-white placeholder-gray-400 transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg className="w-5 h-5 text-gray-400 hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="relative w-full md:w-auto">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full md:w-64 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-600 transition-colors"
                >
                  <span>{selectedCategoryName}</span>
                  <svg 
                    className={`w-5 h-5 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full md:w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                          selectedCategory === category.id 
                            ? 'bg-[#00FF94]/20 text-[#00FF94]' 
                            : 'text-gray-300'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {searchQuery && (
              <div className="mt-2 text-xs text-gray-400">
                Showing {filteredTools.length} results for "{searchQuery}" in {selectedCategoryName}
              </div>
            )}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-[#00FF94]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF94]/10 group relative"
            >
              {tool.popular && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-gradient-to-r from-[#FF2E63] to-[#CC1E4F] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    POPULAR
                  </span>
                </div>
              )}
              
              {/* Tool Header */}
              <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF94]/10 to-[#00FF94]/5 group-hover:opacity-80 transition-opacity"></div>
                <div className="text-center z-10 px-4">
                  <div className="text-xl font-bold text-white mb-1">
                    {highlightMatch(tool.name)}
                  </div>
                  <div className="text-xs text-[#00FF94] font-medium tracking-wider">
                    {tool.category.toUpperCase()} TOOL
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <p className="text-gray-300 mb-4 text-sm min-h-[60px]">
                  {highlightMatch(tool.description)}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Key Features:</h4>
                  <ul className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start text-sm text-gray-300"
                      >
                        <svg className="w-4 h-4 mt-0.5 mr-2 text-[#00FF94] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{highlightMatch(feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400 font-medium">Price:</span>
                    <div className="text-xl font-bold text-[#00FF94]">{tool.price}</div>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00FF94] to-[#00CC77] hover:from-[#00CC77] hover:to-[#00AA66] text-gray-900 font-medium py-3 rounded-lg transition-all duration-200 text-sm hover:shadow-md hover:shadow-[#00FF94]/30">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.2 1.07-.83 3.66-1.56 7.22-.19.9-.56 1.2-.91 1.23-.76.06-1.33-.5-2.07-.98-1.15-.76-1.8-1.23-2.91-1.97-1.37-.92-.48-1.43.3-2.26.21-.22 3.85-3.68 3.93-4 .01-.01.02-.02.02-.02l.01-.02c.05-.1.06-.19.05-.29-.02-.1-.08-.19-.17-.26-.13-.09-.32-.12-.46-.1-.2.03-.6.38-2.3 1.33-1.81 1.01-2.53 1.35-2.83 1.28-.72-.15-.73-.72.04-1.16 2.28-1.28 3.85-2.15 5.56-3.18 2.16-1.29 2.6-1.51 2.89-1.52.63-.03 1.02.18 1.17.64.2.6.68 1.04 2.32.45 3.63z"/>
                    </svg>
                    Get via Telegram
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16 bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-xl font-bold text-gray-300 mb-1">No tools found</h3>
            <p className="text-gray-500 text-sm">
              No results for "{searchQuery}" in {selectedCategory === 'all' ? 'all categories' : selectedCategoryName}
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-[#00FF94] to-[#00CC77] hover:from-[#00CC77] hover:to-[#00AA66] text-gray-900 rounded-lg text-sm font-medium transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Pricing Note */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-3">How to Access These Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="text-[#00FF94] text-2xl mb-2">1</div>
                <h4 className="text-white font-medium mb-2">Select Your Tool</h4>
                <p className="text-gray-400 text-sm">Browse our collection and choose the security tool that fits your needs.</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="text-[#00FF94] text-2xl mb-2">2</div>
                <h4 className="text-white font-medium mb-2">Complete Purchase</h4>
                <p className="text-gray-400 text-sm">All prices are in USD. We accept various payment methods including crypto.</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="text-[#00FF94] text-2xl mb-2">3</div>
                <h4 className="text-white font-medium mb-2">Instant Delivery</h4>
                <p className="text-gray-400 text-sm">You'll receive the tool instantly via Telegram after purchase.</p>
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>For bulk purchases or custom packages, contact us at <span className="text-[#00FF94] font-medium">@cybertools_support</span> on Telegram.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;