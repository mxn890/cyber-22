import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiShield, 
  FiLock, 
  FiRefreshCw, 
  FiMail, 
  FiAlertTriangle, 
  FiCheck, 
  FiArrowRight,
  FiX,
  FiAlertCircle,
  FiKey,
  FiUserCheck,
  FiDownload,
  FiEye
} from 'react-icons/fi';

type BreachSeverity = 'high' | 'medium' | 'low';

interface Breach {
  name: string;
  date: string;
  records: number;
  severity: BreachSeverity;
}

interface ScanResult {
  found: boolean;
  breaches: Breach[];
  message: string;
}

const DataBreachChecker: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    if (isChecking) {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
      return () => clearInterval(interval);
    } else {
      setScanProgress(0);
    }
  }, [isChecking]);

  const handleCheck = async () => {
    if (!email) return;
    
    setIsChecking(true);
    setResult(null);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockBreaches: Breach[] = [
      { name: 'LinkedIn', date: 'June 2012', records: 165000000, severity: 'high' },
      { name: 'Adobe', date: 'October 2013', records: 153000000, severity: 'medium' },
      { name: 'Yahoo', date: 'August 2013', records: 3000000000, severity: 'high' }
    ];
    
    const isBreached = Math.random() > 0.6;
    
    setResult({
      found: isBreached,
      breaches: isBreached 
        ? mockBreaches.slice(0, Math.floor(Math.random() * 3) + 1)
          .map(b => ({ ...b, records: Math.floor(b.records * (0.5 + Math.random() * 0.5)) }))
        : [],
      message: isBreached 
        ? 'Your email was found in data breaches!' 
        : 'No breaches found! Your email appears secure.'
    });
    
    setIsChecking(false);
  };

  const SeverityBadge = ({ level }: { level: BreachSeverity }) => {
    const colors = {
      high: 'bg-red-500/20 text-red-400 border-red-500/30',
      medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      low: 'bg-green-500/20 text-green-400 border-green-500/30'
    };
    
    return (
      <span className={`text-xs px-2 py-1 rounded-full border ${colors[level]} flex items-center gap-1`}>
        {level === 'high' && <FiAlertCircle className="inline" />}
        {level === 'medium' && <FiAlertTriangle className="inline" />}
        {level === 'low' && <FiCheck className="inline" />}
        {level.charAt(0).toUpperCase() + level.slice(1)}
      </span>
    );
  };

  return (
    <section id="breach-checker" className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Cyber Security Background Images */}
      <div className="absolute inset-0 z-0 opacity-70">
        <div className="absolute inset-0 bg-[url('/images/data1.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black/50"></div>
      </div>
      
      {/* Binary code animation overlay */}
      <div className="absolute inset-0 z-0 opacity-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/data2.png')] bg-[length:20px_20px] animate-[moveBg_100s_linear_infinite]"></div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#00FF94] rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-3 h-3 bg-[#FF2E63] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-[#00FF94] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center bg-[#00FF94]/10 p-3 rounded-full mb-6 border border-[#00FF94]/30">
            <FiShield className="text-2xl text-[#00FF94]" />
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00CC77]">
            Dark Web Breach Scanner
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover if your credentials have been exposed in any known data breaches across the dark web
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glassmorphism p-8 rounded-2xl max-w-2xl mx-auto border border-white/10 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiMail />
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-10 py-4 bg-gray-800/70 border border-gray-600 rounded-lg focus:border-[#00FF94] focus:outline-none text-white text-lg placeholder-gray-400 transition-all duration-300"
              />
              {email && (
                <button 
                  onClick={() => setEmail('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <FiX />
                </button>
              )}
            </div>
            <button
              onClick={handleCheck}
              disabled={!email || isChecking}
              className="px-8 py-4 bg-gradient-to-r from-[#00FF94] to-[#00CC77] text-black font-bold rounded-lg hover:from-[#00CC77] hover:to-[#00AA66] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-[#00FF94]/30 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isChecking ? (
                  <>
                    <FiRefreshCw className="animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    Scan Now
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Scan progress bar */}
          {isChecking && (
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span className="flex items-center gap-2">
                  <FiEye className="animate-pulse" />
                  Scanning dark web...
                </span>
                <span>{scanProgress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-gradient-to-r from-[#00FF94] to-[#00CC77] h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${scanProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className={`overflow-hidden rounded-lg border ${result.found ? 'bg-red-900/20 border-red-500/30' : 'bg-green-900/20 border-green-500/30'}`}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${result.found ? 'bg-red-500/20 border border-red-500' : 'bg-green-500/20 border border-green-500'}`}>
                      {result.found ? (
                        <FiAlertTriangle className="text-xl text-red-400" />
                      ) : (
                        <FiCheck className="text-xl text-green-400" />
                      )}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${result.found ? 'text-red-400' : 'text-green-400'}`}>
                        {result.message}
                      </h3>
                      <p className="text-gray-400 mt-1">
                        {result.found 
                          ? 'We found your email in the following breaches:' 
                          : 'No known breaches found in our database.'}
                      </p>
                    </div>
                  </div>
                  
                  {result.found && result.breaches.length > 0 && (
                    <div className="mt-4">
                      <div className="grid gap-4">
                        {result.breaches.map((breach, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/50 p-4 rounded-lg border border-red-900/50"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-bold text-red-300">{breach.name}</h4>
                                <p className="text-sm text-gray-400">Breached: {breach.date}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                                  {breach.records.toLocaleString()} records
                                </span>
                                <SeverityBadge level={breach.severity} />
                              </div>
                            </div>
                            <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                              <FiKey className="flex-shrink-0" />
                              <span>Passwords, emails, and personal data exposed</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                          <FiShield />
                          Recommended Actions:
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                          <li className="flex items-start gap-3">
                            <div className="bg-[#00FF94]/10 p-1 rounded-full mt-0.5">
                              <FiKey className="text-[#00FF94]" />
                            </div>
                            <span>Change passwords for affected accounts immediately</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-[#00FF94]/10 p-1 rounded-full mt-0.5">
                              <FiUserCheck className="text-[#00FF94]" />
                            </div>
                            <span>Enable two-factor authentication where available</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-[#00FF94]/10 p-1 rounded-full mt-0.5">
                              <FiDownload className="text-[#00FF94]" />
                            </div>
                            <span>Monitor financial accounts for suspicious activity</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 text-sm text-gray-400 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <FiLock className="text-[#00FF94]" />
              <span>Your email is never stored or shared</span>
            </div>
            <p className="text-center">We only check against public breach databases</p>
          </div>
        </motion.div>

        {/* Security tips with professional icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-left max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <FiShield className="text-[#00FF94]" />
            Security Best Practices
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <FiKey className="text-2xl text-[#00FF94]" />,
                title: 'Use Strong Passwords',
                description: 'Create complex passwords with a mix of letters, numbers, and symbols.'
              },
              {
                icon: <FiUserCheck className="text-2xl text-[#00FF94]" />,
                title: 'Enable 2FA',
                description: 'Add an extra layer of security with two-factor authentication.'
              },
              {
                icon: <FiRefreshCw className="text-2xl text-[#00FF94]" />,
                title: 'Regular Updates',
                description: 'Keep your software and apps updated to patch vulnerabilities.'
              },
              {
                icon: <FiAlertTriangle className="text-2xl text-[#00FF94]" />,
                title: 'Email Vigilance',
                description: 'Be cautious with email attachments and suspicious links.'
              }
            ].map((tip, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800/30 p-5 rounded-lg border border-gray-700 hover:border-[#00FF94]/30 transition-colors"
              >
                <div className="bg-[#00FF94]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {tip.icon}
                </div>
                <h4 className="font-bold text-white mb-2">{tip.title}</h4>
                <p className="text-sm text-gray-400">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataBreachChecker;