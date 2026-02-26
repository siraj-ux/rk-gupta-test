import React, { useState } from 'react';
import { ShieldCheck, Youtube, Instagram, Linkedin, Book, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const MentorSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contents = [
    "Myths in Stock Market",
    "Biggest Mistakes People Do in Options Trading",
    "Options Basics",
    "How to Diversify your portfolio in Options Trading",
    "Role of Coach/Mentor in Options Trading",
    "Why Trading Options?",
    "Common Options Trading Strategies",
    "RK Options Strategies",
    "Risk Management in Options Trading",
    "Right Trading Mindset",
    "Final Thoughts and Encouragement",
    "Options Trading & RK Strategies FAQs"
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#00171f]">
            Aapka Educator: RK Gupta
          </h2>
        </div>

        {/* Mentor Card */}
        <div className="bg-[#f0f9ff] rounded-3xl p-6 md:p-10 border border-[#00a8e8]/30 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Image & Socials */}
            <div className="flex-shrink-0 mx-auto md:mx-0 text-center">
              <div className="w-64 md:w-72 h-80 rounded-2xl overflow-hidden shadow-md border border-[#007ea7]/30 mb-6">
                <img
                  src="/coach.jpeg"
                  alt="RK Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center gap-4">
                <a href="https://www.youtube.com/@CryptowithRKGupta" target="_blank" className="flex items-center gap-2 text-xs font-bold text-[#003459] hover:text-[#007ea7]"><Youtube className="h-4 w-4 text-red-600" /> YouTube</a>
                <a href="https://www.instagram.com/compoundthemoney/" target="_blank" className="flex items-center gap-2 text-xs font-bold text-[#003459] hover:text-[#007ea7]"><Instagram className="h-4 w-4 text-pink-600" /> Instagram</a>
                <a href="https://www.linkedin.com/in/ctm-rkgupt" target="_blank" className="flex items-center gap-2 text-xs font-bold text-[#003459] hover:text-[#007ea7]"><Linkedin className="h-4 w-4 text-blue-700" /> LinkedIn</a>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#00171f]">RK Gupta</h3>
                <p className="text-md md:text-lg font-bold text-[#007ea7]">Crypto Educator</p>
              </div>
              <div className="space-y-3 mb-6 text-[#00171f]/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  6+ saal se digital assets aur blockchain ko Hindi mein explain kar raha hoon. 
                  <span className="font-bold text-[#003459]"> 4,000+ professionals</span> ko in-person aur online sessions de chuka hoon.
                </p>
                <p className="text-sm md:text-base italic border-l-4 border-[#00a8e8] pl-4 bg-white/50 py-1.5">
                  "Mera ek hi goal hai: jo genuinely complex lagta hai, use simple aur structured banana."
                </p>
              </div>
              <div className="flex items-start gap-3 bg-[#003459] rounded-xl p-4 text-white shadow-md">
                <ShieldCheck className="h-5 w-5 text-[#00a8e8] flex-shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm opacity-90">
                  <span className="font-bold text-[#00a8e8]">Education Only:</span> Is session mein koi tips, calls ya recommendations nahi di jaati.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COMPACT BOOK SECTION */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-2xl p-5 md:p-8 shadow-xl flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            
            {/* Smaller Book Image */}
            <div className="flex-shrink-0">
              <div className="relative w-40 md:w-48 aspect-[2/3] bg-gray-100 rounded-lg shadow-xl overflow-hidden border border-gray-200">
                <img 
                  src="/amazon-book.jpg" 
                  alt="Risk Hai To Ishq Hai Book Cover"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00a8e8]/10 text-[#00a8e8] text-[10px] font-bold uppercase tracking-widest mb-3">
                <Book className="h-3 w-3" /> Published Author
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#00171f] mb-1">
                Risk hai to Ishq hai: Dive into Options Trading
              </h3>
              <p className="text-xs md:text-sm font-bold text-gray-400 mb-4">
                By R K Gupta & Sakshi Gupta
              </p>
              
              <div className="text-gray-600 text-sm md:text-base space-y-3">
                <p>
                  Idea behind this book is to make people aware about Stock Market Options Trading and making consistent source of income through it.
                </p>

                {isExpanded && (
                  <div className="space-y-3 animate-in fade-in slide-in-from-top-1 duration-300">
                    <p className="text-xs md:text-sm">
                      This book clears myths and talks about Risk Management. It contains strategies which can be learned by beginners as well as advanced people.
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <h4 className="text-xs font-bold text-[#00171f] mb-2 uppercase tracking-tight">Table of Contents:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                        {contents.map((item, index) => (
                          <li key={index} className="flex items-start gap-1.5 text-[11px] md:text-xs">
                            <span className="text-[#00a8e8] font-bold">{index + 1}.</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-1 text-[#00a8e8] text-xs font-bold hover:underline transition-all"
                >
                  {isExpanded ? (
                    <>Show Less <ChevronUp className="h-3 w-3" /></>
                  ) : (
                    <>Read Book Details & Contents <ChevronDown className="h-3 w-3" /></>
                  )}
                </button>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center gap-5">
                <a 
                  href="https://www.amazon.in/Risk-hai-Ishq-Options-Trading-ebook/dp/B0CW18QZS5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FF9900] hover:bg-[#e68a00] text-black font-bold px-6 py-2.5 rounded-lg text-sm transition-all shadow hover:shadow-lg"
                >
                  Buy on Amazon <ExternalLink className="h-3.5 w-3.5" />
                </a>
                
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex text-yellow-400 text-sm">
                    {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Top Rated on Kindle</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};