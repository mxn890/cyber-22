import React, { useState } from 'react';

const DataBreachChecker: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<{
    found: boolean;
    breaches: string[];
    message: string;
  } | null>(null);

  const handleCheck = async () => {
    if (!email) return;
    
    setIsChecking(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock data - in real implementation, you'd call HaveIBeenPwned API
    const mockBreaches = ['LinkedIn (2012)', 'Adobe (2013)', 'Yahoo (2014)'];
    const isBreached = Math.random() > 0.6; // 40% chance of breach for demo
    
    setResult({
      found: isBreached,
      breaches: isBreached ? mockBreaches.slice(0, Math.floor(Math.random() * 3) + 1) : [],
      message: isBreached 
        ? 'Your email was found in data breaches!' 
        : 'Good news! Your email was not found in any known breaches.'
    });
    
    setIsChecking(false);
  };

  return (
    <section id="breach-checker" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-5xl font-bold mb-6 cyber-gradient">
            Dark Web Breach Scanner
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Check if your personal data has been compromised in any known data breaches
          </p>
        </div>

        <div className="glassmorphism p-8 rounded-2xl max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-lg focus:border-[#00FF94] focus:outline-none text-white text-lg"
            />
            <button
              onClick={handleCheck}
              disabled={!email || isChecking}
              className="px-8 py-4 bg-gradient-to-r from-[#00FF94] to-[#00CC77] text-black font-bold rounded-lg hover:from-[#00CC77] hover:to-[#00AA66] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isChecking ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Scanning...
                </div>
              ) : (
                'Check Now'
              )}
            </button>
          </div>

          {result && (
            <div className={`p-6 rounded-lg ${result.found ? 'bg-red-900/30 border border-red-500' : 'bg-green-900/30 border border-green-500'}`}>
              <div className="flex items-center gap-3 mb-4">
                {result.found ? (
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">!</span>
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                )}
                <h3 className={`text-xl font-bold ${result.found ? 'text-red-400' : 'text-green-400'}`}>
                  {result.message}
                </h3>
              </div>
              
              {result.found && result.breaches.length > 0 && (
                <div>
                  <p className="text-gray-300 mb-3">Found in these breaches:</p>
                  <ul className="space-y-2">
                    {result.breaches.map((breach, index) => (
                      <li key={index} className="flex items-center gap-2 text-red-300">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        {breach}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="mt-6 text-sm text-gray-400">
            <p>🔒 Your email is never stored or shared. We only check against public breach databases.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataBreachChecker;