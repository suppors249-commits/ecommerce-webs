import { useState } from "react";

export default function DiscountPopup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div
        className="
          w-[90%]
          max-w-[400px]
          bg-[#f2f9f5]
          h-[80%]
          sm:h-[60px]
          rounded-2x3
          overflow-hidden
          shadow-xl
          animate-slideUp
          relative
        "
        style={{
          backgroundImage: `url("https://d3k81ch9hvuctc.cloudfront.net/company/RgNr4T/images/c7d4b736-2939-47cd-a45f-fc255c9042a3.jpeg")`,
          backgroundSize: "cover",
          
           backgroundPosition: "center top",
        }}
      >
        {/* زر الإغلاق */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white text-black flex items-center justify-center text-sm shadow"
        >
          ✕
        </button>

        {/* المحتوى */}
        <div className="p-15 text-center bg-black/40 rounded-b-2xl">
          <h2 className="text-[30px] font-semibold mb-2 text-white">
            Wait — here is 15% off before you go
          </h2>

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-1 py-2 border border-gray-300 mb-5 text-sm focus:outline-none focus:ring-1 focus:ring-white bg-white/40"
          />

          <button
            onClick={() => setOpen(false)}
            className="w-full bg-[#154734] text-white py-2 rounded-xl text-sm font-semibold hover:opacity-10"
          >
            CLAIM 15% OFF
          </button>

          <button className="block mx-auto mt-4 text-xs underline text-white/90">
            NOT INTERESTED
          </button>

          <p className="text-[10px] text-white/70 mt-4 leading-snug">
            Offer cannot be combined with sitewide promotions. <br />
            By submitting your email address you agree to receive marketing emails.
          </p>
        </div>
      </div>
    </div>
  );
}
