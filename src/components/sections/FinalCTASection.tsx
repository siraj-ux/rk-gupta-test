import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
  BookOpen,
} from 'lucide-react';

interface FinalCTASectionProps {
  onCTAClick?: () => void;
}

export const FinalCTASection = ({ onCTAClick }: FinalCTASectionProps) => {

  const scrollToForm = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-10 md:py-16 bg-black text-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl md:text-4xl font-science font-bold mb-4 leading-tight">
            Yeh Session Un Logon Ke Liye Hai Jo{' '}
            <span className="text-[#00a8e8]">Clarity Aur Structure</span> Ke Saath Seekhna Chahte Hain
          </h2>

          <p className="text-md md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Agar aap concepts ko clear aur structured tareeke se samajhna chahte ho,
            aur learning ko bina pressure lena chahte ho,
            toh yeh session aapke liye hai.
            <br className="hidden md:block" />
            Yeh ek calm, safe aur focused learning experience hai —
            bina hype, bina promises, bina shortcuts.
          </p>

          {/* CTA CARD */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl text-[#00171f] border-t-4 border-[#00a8e8]">
            
            {/* SESSION DETAILS AREA */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
              <div className="flex items-center gap-2 text-[#003459]">
                <Calendar className="h-5 w-5 text-[#00a8e8]" />
                <span className="text-base md:text-lg font-bold">28 February 2026</span>
              </div>
              <div className="flex items-center gap-2 text-[#003459]">
                <Clock className="h-5 w-5 text-[#00a8e8]" />
                <span className="text-base md:text-lg font-bold">11 AM — 1 PM</span>
              </div>
            </div>

            {/* REASSURANCE TEXT ADDED HERE */}
            <p className="text-sm md:text-base text-gray-600 italic mb-5 max-w-xl mx-auto leading-relaxed">
              "₹9 ek cup chai se bhi kam hai. Agar session aapke kaam ka na lage, aapko kuch nahi khona. 
              Agar kaam aaya — toh clarity mil gayi."
            </p>

            {/* CTA BUTTON */}
            <Button
              size="lg"
              onClick={scrollToForm}
              className="w-full md:w-auto bg-[#00a8e8] hover:bg-[#003459] text-[#00171f] hover:text-white font-bold px-10 py-5 text-lg rounded-xl transition-all shadow-md mb-6"
            >
              Pay only ₹9/- & Seat Claim Karein
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* FINAL NUDGE & LIMIT NOTE */}
            <div className="space-y-1.5">
              <p className="text-sm md:text-base font-medium text-[#003459]">
                Agar aap is Saturday available ho aur clarity chahte ho — abhi register kar lo.
              </p>
              
              <p className="text-xs text-gray-500 font-medium max-w-md mx-auto">
                Seats are limited to keep the session interactive. 
                <span className="block text-[#007ea7] font-bold">Once full, registration closes.</span>
              </p>
            </div>

            {/* TRUST STRIP */}
            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-[#00a8e8]/50" />
                <span>Live Session</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <BookOpen className="h-3.5 w-3.5 text-[#00a8e8]/50" />
                <span>Educational</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-[#00a8e8]/50" />
                <span>Hindi Language</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <BookOpen className="h-3.5 w-3.5 text-[#00a8e8]/50" />
                <span>Structured</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};