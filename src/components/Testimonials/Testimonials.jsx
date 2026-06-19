import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Quote,
  Instagram,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Local thumbnails — one per reel, in order
import client01 from "../../assets/testimonialsimg/client01.jpeg";
import client02 from "../../assets/testimonialsimg/client02.jpeg";
import client03 from "../../assets/testimonialsimg/client03.jpeg";
import client04 from "../../assets/testimonialsimg/client04.jpeg";
import client05 from "../../assets/testimonialsimg/client05.jpeg";
import client06 from "../../assets/testimonialsimg/client06.jpeg";
import client07 from "../../assets/testimonialsimg/client07.jpeg";
import client08 from "../../assets/testimonialsimg/client08.jpeg";

/**
 * "Hear Directly From Our Clients" — video testimonials slider.
 *
 * Drop this file in as e.g. src/components/Home/Testimonials.jsx
 * and render <Testimonials /> wherever the section should appear.
 *
 * Each card shows a LOCAL thumbnail image (imported above) so every
 * card looks correct immediately, with no dependency on Instagram's
 * CORS-blocked oEmbed API. Tapping a card opens the real Instagram
 * reel in a centered modal player.
 */

const REELS = [
  {
    url: "https://www.instagram.com/p/CdfhNzapuMa/",
    name: "Client story 1",
    thumb: client08,
  },
  {
    url: "https://www.instagram.com/reel/CzAtbFHJFlf/",
    name: "Client story 2",
    thumb: client06,
  },
  {
    url: "https://www.instagram.com/reel/Cy4lGccJZ9-/",
    name: "Client story 3",
    thumb: client05,
  },
  {
    url: "https://www.instagram.com/reel/CynC1ZAvSFy/",
    name: "Client story 4",
    thumb: client04,
  },
  {
    url: "https://www.instagram.com/reel/CykDWUSPkG3/",
    name: "Client story 5",
    thumb: client03,
  },
  {
    url: "https://www.instagram.com/reel/Cvgg3X9pSrC/",
    name: "Client story 6",
    thumb: client02,
  },
  {
    url: "https://www.instagram.com/reel/CvUfGddpS3M/",
    name: "Client story 7",
    thumb: client01,
  },
  {
    url: "https://www.instagram.com/reel/CnTu41OpivA/",
    name: "Client story 8",
    thumb: client07,
  },
];

let igScriptPromise = null;
function loadInstagramScript() {
  if (igScriptPromise) return igScriptPromise;
  igScriptPromise = new Promise((resolve) => {
    if (window.instgrm) {
      resolve(window.instgrm);
      return;
    }
    const existing = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );
    const onReady = () => resolve(window.instgrm);
    if (existing) {
      existing.addEventListener("load", onReady, { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = onReady;
    document.body.appendChild(script);
  });
  return igScriptPromise;
}

/* ---------------- Modal player ---------------- */

function ReelModal({ url, onClose }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    loadInstagramScript().then((instgrm) => {
      requestAnimationFrame(() => {
        instgrm && instgrm.Embeds && instgrm.Embeds.process();
        setTimeout(() => setReady(true), 500);
      });
    });
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 py-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[400px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-3 -right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white text-gray-700 shadow-lg hover:bg-gray-100 transition"
        >
          <X size={18} />
        </button>

        {!ready && (
          <div className="flex flex-col items-center justify-center gap-3 py-24">
            <span
              className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
              style={{ borderColor: "#8ab72e", borderTopColor: "transparent" }}
            />
            <span className="text-xs text-gray-400">Loading reel…</span>
          </div>
        )}

        <blockquote
          className="instagram-media"
          data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            margin: 0,
            padding: 0,
            width: "100%",
            minWidth: "100%",
            display: ready ? "block" : "none",
          }}
        />
      </div>
    </div>
  );
}

/* ---------------- Equal-size card with local thumbnail ---------------- */

function ReelCard({ reel, onPlay }) {
  return (
    <button
      type="button"
      onClick={() => onPlay(reel.url)}
      className="group relative flex-shrink-0 w-[160px] sm:w-[200px] lg:w-[225px] rounded-2xl overflow-hidden border border-gray-100 bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ aspectRatio: "9 / 16" }}
      aria-label={`Play ${reel.name}`}
    >
      {/* Local thumbnail, cropped to fill the fixed box */}
      <img
        src={reel.thumb}
        alt={reel.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Darken slightly for icon/text legibility, deepen on hover */}
      <span className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />

      {/* Instagram glyph watermark */}
      <span className="absolute top-3 right-3 text-white drop-shadow">
        <Instagram size={16} />
      </span>

      {/* Play button */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/95 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Play size={22} fill="#8ab72e" color="#8ab72e" className="ml-0.5" />
        </span>
      </span>

      {/* Bottom label */}
      <span className="absolute bottom-0 left-0 right-0 px-3 py-3 bg-gradient-to-t from-black/80 to-transparent text-left">
        <span className="block text-white text-xs font-medium leading-tight">
          Watch on Instagram
        </span>
      </span>
    </button>
  );
}

/* ---------------- Slider ---------------- */

export default function Testimonials() {
  const trackRef = useRef(null);
  const [activeUrl, setActiveUrl] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    loadInstagramScript();
  }, []);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.offsetWidth + 16 : 220;
    el.scrollBy({ left: dir * cardWidth * 2, behavior: "smooth" });
  };

  return (
    <section
      className="relative py-14 sm:py-20 lg:py-24 overflow-hidden"
      style={{ fontFamily: "'Gantari', sans-serif" }}
    >
      {/* Soft background accents */}
      <div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "#8ab72e" }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "#8ab72e" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#8ab72e1a", color: "#5d8a1e" }}
          >
            <Quote size={14} />
            Real Stories, Real Recovery
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
            Hear Directly From{" "}
            <span style={{ color: "#8ab72e" }}>Our Clients</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-500">
            Watch our patients share their own journey to recovery, in their
            own words.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Left arrow */}
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 items-center justify-center w-10 h-10 rounded-full bg-white text-gray-700 shadow-lg border border-gray-100 transition disabled:opacity-0 disabled:pointer-events-none hover:bg-gray-50"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {REELS.map((reel) => (
              <div key={reel.url} data-card className="snap-start">
                <ReelCard reel={reel} onPlay={setActiveUrl} />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 items-center justify-center w-10 h-10 rounded-full bg-white text-gray-700 shadow-lg border border-gray-100 transition disabled:opacity-0 disabled:pointer-events-none hover:bg-gray-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Follow CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm text-gray-500 mb-3">
            Want more recovery stories like these?
          </p>
          <a
            href="https://www.instagram.com/advancedphysio19?igsh=c2hpdzkyN21zZ2U="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium shadow-md hover:shadow-lg transition"
            style={{ background: "#8ab72e" }}
          >
            <Instagram size={18} />
            Follow us on Instagram
          </a>
        </div>
      </div>

      {activeUrl && (
        <ReelModal url={activeUrl} onClose={() => setActiveUrl(null)} />
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}