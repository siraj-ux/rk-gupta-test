import { useEffect, useRef } from 'react';

export const PastAttendeesSection = () => {
  const testimonials = [
    {
      name: 'Priya Mehta',
      role: 'HR Manager, Pune',
      quote: 'Maine pehle kaafi YouTube videos dekhe the lekin confusion hi badhti rahi. Is session ke baad pehli baar laga ki mujhe actually samajh aa raha hai.',
      initials: 'PM',
    },
    {
      name: 'Arvind Sharma',
      role: 'CA, Delhi',
      quote: 'RK sir ka style bahut calm aur clear hai. Koi pressure nahi, koi hype nahi. Sirf concepts.',
      initials: 'AS',
    },
    {
      name: 'Vikram Singh',
      role: 'Bank Manager, Bhopal',
      quote: 'Banking mein hone ke baad bhi crypto complex lagta tha. Sir ne isse daily finance se relate karke simple bana diya.',
      initials: 'VS',
    },
    {
      name: 'Megha Sharma',
      role: 'Software Engineer',
      quote: 'Technical jargon se dar lagta tha, par yahan sab kuch basic logic se samjhaya gaya. Process-based learning at its best.',
      initials: 'MS',
    },
    {
      name: 'Rajesh Iyer',
      role: 'Retired Govt Officer',
      quote: 'Mujhe laga tha yeh young logo ke liye hai, par RK sir ki Hindi explanations ne mere saare doubts clear kar diye.',
      initials: 'RI',
    },
    {
      name: 'Sneha Kapoor',
      role: 'Teacher, Jaipur',
      quote: '₹9/- mein itni clarity milegi yeh expect nahi tha. Sahi sawaal poochna seekh gayi hoon ab.',
      initials: 'SK',
    },
    {
      name: 'Ankit Jain',
      role: 'Business Owner, Indore',
      quote: 'Shortcuts ke peeche bhagna band kiya. Ab pehle framework samajhta hoon fir news follow karta hoon.',
      initials: 'AJ',
    },
    {
      name: 'Dr. Sameer Khan',
      role: 'Doctor, Lucknow',
      quote: 'Very professional and structured. Bina kisi hype ke digital assets ki reality samjhne ko mili.',
      initials: 'SK',
    },
    {
      name: 'Pooja Verma',
      role: 'Interior Designer',
      quote: 'Finally koi aisa educator mila jo FOMO create nahi karta. Very safe and calm learning experience.',
      initials: 'PV',
    },
    {
      name: 'Manish Malhotra',
      role: 'Real Estate, Noida',
      quote: 'Information overload se kaise bachna hai, yeh is session ki best baat thi. Decision thinking build hui.',
      initials: 'MM',
    },
    {
      name: 'Sunita Gupta',
      role: 'Homemaker, Delhi',
      quote: 'Maine apne husband ke saath join kiya tha. Dono ko concepts ekdum clear ho gaye bina kisi complication ke.',
      initials: 'SG',
    },
    {
      name: 'Sandeep Rawat',
      role: 'Freelancer, Dehradun',
      quote: 'Purely educational! RK sir calls ya tips nahi dete, balki aapko khud judge karna sikhate hain.',
      initials: 'SR',
    },
    {
      name: 'Kavita Reddy',
      role: 'Financial Analyst',
      quote: 'Blockchain basics ko itne simple models ke saath explain kiya ki koi bhi samajh sakta hai. Brilliant flow.',
      initials: 'KR',
    },
    {
      name: 'Rahul Varma',
      role: 'Architect, Mumbai',
      quote: 'Simple Hindi explanations and zero technical jargon. Highly recommended for absolute beginners.',
      initials: 'RV',
    }
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 0.6; // Slightly faster for more items

    const scroll = () => {
      scrollAmount += speed;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 md:py-12 bg-[#00171f] text-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-science font-bold mb-2">
            What past attendees are saying
          </h2>
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto">
            Real learners, real stories – clarity aur confidence ke saath next step.
          </p>
        </div>

        <div className="relative">
          {/* Side Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#00171f] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#00171f] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-hidden flex-nowrap py-2"
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className="
                  min-w-[250px] md:min-w-[320px]
                  bg-white/5 border border-white/10
                  rounded-2xl p-5
                  flex flex-col justify-between
                  shadow-xl backdrop-blur-sm
                "
              >
                <p className="text-xs md:text-sm text-white/90 italic leading-relaxed whitespace-normal mb-5">
                  “{t.quote}”
                </p>

                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#00a8e8] flex items-center justify-center text-[10px] font-bold text-[#00171f] shrink-0 shadow-inner uppercase">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white tracking-wide">
                      {t.name}
                    </p>
                    <p className="text-[9px] text-[#00a8e8] font-semibold uppercase tracking-wider">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[10px] text-white/30 mt-6 text-center tracking-widest uppercase font-medium">
          4,000+ Professionals Empowered • Live Educational Format
        </p>
      </div>
    </section>
  );
};