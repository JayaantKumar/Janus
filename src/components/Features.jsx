import React from 'react';

const Features = () => {
  return (
    <section className="sticky top-0 h-screen w-full bg-[#0f0f0f] flex flex-col items-center justify-center border-t border-[#1f1f1f] shadow-[0_-20px_40px_rgba(0,0,0,0.8)]">
      <div className="max-w-[1200px] px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-medium mb-12">[Features Section]</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Replace with client's actual cards */}
           <div className="bg-[#121212] p-8 rounded-2xl border border-[#1f1f1f]">Card 1</div>
           <div className="bg-[#121212] p-8 rounded-2xl border border-[#1f1f1f]">Card 2</div>
           <div className="bg-[#121212] p-8 rounded-2xl border border-[#1f1f1f]">Card 3</div>
        </div>
      </div>
    </section>
  );
};

export default Features;