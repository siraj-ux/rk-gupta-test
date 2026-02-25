import { CheckCircle2, ShieldCheck, Youtube, Instagram } from 'lucide-react';

export const MentorSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">

        {/* Header - Increased font size */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-science font-bold text-[#00171f]">
            Aapka Educator: RK Gupta
          </h2>
        </div>

        {/* Mentor Card */}
        <div className="bg-[#f0f9ff] rounded-3xl p-6 md:p-12 border border-[#00a8e8]/30 shadow-lg">
          <div className="flex flex-col md:flex-row gap-10 items-start">

            {/* Image & Socials */}
            <div className="flex-shrink-0 mx-auto md:mx-0 text-center">
              <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-md border border-[#007ea7]/30 mb-4">
                <img
                  src="/coach.jpeg"
                  alt="RK Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex justify-center gap-5">
                <a href="#" className="flex items-center gap-2 text-sm md:text-base font-bold text-[#003459] hover:text-[#007ea7] transition-colors">
                  <Youtube className="h-5 w-5 text-red-600" /> YouTube
                </a>
                <a href="#" className="flex items-center gap-2 text-sm md:text-base font-bold text-[#003459] hover:text-[#007ea7] transition-colors">
                  <Instagram className="h-5 w-5 text-pink-600" /> Instagram
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-science font-bold text-[#00171f]">
                  RK Gupta
                </h3>
                <p className="text-lg md:text-xl font-bold text-[#007ea7]">
                  Crypto Educator
                </p>
              </div>

              {/* BIO CONTENT - Increased to text-lg/xl */}
              <div className="space-y-4 mb-8 text-[#00171f]/90 leading-relaxed">
                <p className="text-lg md:text-xl">
                  6+ saal se digital assets aur blockchain ko Hindi mein explain kar raha hoon. 
                  <span className="font-bold text-[#003459]"> 4,000+ professionals</span> ko in-person aur online sessions de chuka hoon — 
                  bankers, CAs, teachers, aur business owners jinhe basics clearly samajhni thi.
                </p>
                
                <p className="text-base md:text-lg italic border-l-4 border-[#00a8e8] pl-5 bg-white/50 py-2">
                  "Mera ek hi goal hai: jo genuinely complex lagta hai, use simple aur structured banana — bina hype, bina shortcuts."
                </p>
              </div>

              {/* POINTS - Increased to text-base */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Hindi mein clear explanation',
                  'Step-by-step teaching approach',
                  'Overloading se bachkar learning',
                  'Thinking aur discipline pe focus',
                ].map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/80 rounded-xl px-4 py-3 border border-[#00a8e8]/20"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#007ea7] flex-shrink-0" />
                    <p className="text-[#00171f] text-sm md:text-base font-semibold">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* DISCLAIMER - Increased to text-sm/base */}
              <div className="flex items-start gap-4 bg-[#003459] rounded-xl p-5 text-white shadow-md">
                <ShieldCheck className="h-6 w-6 text-[#00a8e8] flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base leading-relaxed opacity-90 text-left">
                  <span className="font-bold text-[#00a8e8]">Education Only:</span> Is session mein <span className="font-semibold text-white">koi tips, calls ya recommendations</span> nahi di jaati.  
                  Yeh ek pure educational learning experience hai.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};