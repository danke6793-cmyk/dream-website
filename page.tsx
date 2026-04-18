"use client";

import { useState, useEffect, useRef } from "react";
import { analyzeDream, type DreamEntry, type Lang } from "@/lib/dreamData";

const UI = {
  ko: {
    title: "꿈 해몽",
    subtitle: "당신의 꿈이 전하는 비밀을 풀어드립니다",
    inputLabel: "✦ 어떤 꿈을 꾸셨나요?",
    placeholder:
      "꿈의 내용을 자세히 적어주세요.\n예) 커다란 돼지가 집 안으로 들어오는 꿈을 꿨어요.\n예) 돌아가신 할머니가 웃으며 음식을 주셨어요.",
    hint: "Ctrl+Enter로도 분석할 수 있어요",
    button: "꿈 해몽하기 ✦",
    analyzing: "분석 중...",
    resultLabel: "해몽 결과",
    energyLabel: "오늘의 기운",
    luckyNumLabel: "행운의 숫자",
    luckyColorLabel: "행운의 색상",
    energyIndex: "오늘의 에너지 지수",
    reset: "다른 꿈을 해몽하기 →",
    footer1: "✦ 꿈 해몽은 오락·참고 목적으로만 활용하세요 ✦",
    footer2: "한국 전통 해몽 + 심리 분석 기반",
    loading: [
      "꿈의 조각을 맞추는 중...",
      "밤하늘의 별자리를 읽고 있어요...",
      "무의식의 문을 여는 중...",
      "잠든 기억을 깨우고 있어요...",
      "달빛 아래 해몽서를 펼치는 중...",
    ],
  },
  en: {
    title: "Dream Oracle",
    subtitle: "Uncover the secrets your dreams are telling you",
    inputLabel: "✦ What did you dream about?",
    placeholder:
      "Describe your dream in detail.\ne.g. A huge pig walked into my house.\ne.g. My late grandmother smiled and gave me food.",
    hint: "Ctrl+Enter to analyze",
    button: "Interpret Dream ✦",
    analyzing: "Analyzing...",
    resultLabel: "Dream Reading",
    energyLabel: "Today's Energy",
    luckyNumLabel: "Lucky Number",
    luckyColorLabel: "Lucky Color",
    energyIndex: "Energy Index",
    reset: "Interpret another dream →",
    footer1: "✦ For entertainment and reference purposes only ✦",
    footer2: "Based on Korean traditional dream lore + psychology",
    loading: [
      "Piecing together your dream...",
      "Reading the constellations...",
      "Opening the door to your unconscious...",
      "Awakening sleeping memories...",
      "Unfolding the dream codex by moonlight...",
    ],
  },
};

const ENERGY_LABEL: Record<DreamEntry["energy"], { ko: string; en: string }> = {
  "매우 좋음": { ko: "매우 좋음", en: "Very Good" },
  "좋음": { ko: "좋음", en: "Good" },
  "보통": { ko: "보통", en: "Neutral" },
  "주의": { ko: "주의", en: "Caution" },
};

const ENERGY_STYLES: Record<DreamEntry["energy"], { badge: string; bar: string; width: string }> = {
  "매우 좋음": { badge: "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30", bar: "bg-gradient-to-r from-yellow-400 to-amber-300", width: "w-full" },
  "좋음": { badge: "bg-emerald-400/20 text-emerald-300 border border-emerald-400/30", bar: "bg-gradient-to-r from-emerald-400 to-teal-300", width: "w-4/5" },
  "보통": { badge: "bg-blue-400/20 text-blue-300 border border-blue-400/30", bar: "bg-gradient-to-r from-blue-400 to-indigo-400", width: "w-3/5" },
  "주의": { badge: "bg-red-400/20 text-red-300 border border-red-400/30", bar: "bg-gradient-to-r from-red-400 to-orange-400", width: "w-2/5" },
};

const COLOR_MAP: Record<string, string> = {
  금색: "#f8c840", Gold: "#f8c840",
  황금색: "#f0a500", Golden: "#f0a500",
  흰색: "#f1f5f9", White: "#f1f5f9",
  청색: "#3b82f6", Blue: "#3b82f6",
  초록색: "#22c55e", Green: "#22c55e",
  빨간색: "#ef4444", Red: "#ef4444",
  하늘색: "#38bdf8", "Sky Blue": "#38bdf8",
  은색: "#94a3b8", Silver: "#94a3b8",
  노란색: "#facc15", Yellow: "#facc15",
  파란색: "#60a5fa",
  청록색: "#2dd4bf", Teal: "#2dd4bf",
  분홍색: "#f472b6", Pink: "#f472b6",
  보라색: "#a78bfa", Purple: "#a78bfa",
  갈색: "#a16207", Brown: "#a16207",
  주황색: "#f97316", Orange: "#f97316",
  검정색: "#6b7280", Black: "#6b7280",
  회색: "#9ca3af", Gray: "#9ca3af",
};

function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2.5 + 0.5,
    duration: `${Math.random() * 5 + 3}s`,
    delay: `${Math.random() * 5}s`,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            "--duration": s.duration,
            "--delay": s.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("ko");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<DreamEntry | null>(null);
  const [loading, setLoading] = useState(false);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const t = UI[lang];

  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setPhraseIdx((i) => (i + 1) % t.loading.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [loading, t.loading.length]);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setResult(null);
    setLoading(true);
    setPhraseIdx(0);
    await new Promise((r) => setTimeout(r, 2200));
    setResult(analyzeDream(input, lang));
    setLoading(false);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const handleReset = () => {
    setResult(null);
    setInput("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const colorDot = result ? (COLOR_MAP[result.luckyColor[lang]] ?? "#f8c840") : "#f8c840";

  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 py-16 z-10">
      <StarField />

      {/* 언어 스위치 */}
      <div className="fixed top-5 right-5 z-50">
        <div
          className="flex rounded-xl overflow-hidden border text-xs font-bold"
          style={{ borderColor: "rgba(248,200,64,0.3)", background: "rgba(6,13,31,0.85)" }}
        >
          {(["ko", "en"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setResult(null); setInput(""); }}
              className="px-3 py-2 transition-all duration-200"
              style={
                lang === l
                  ? { background: "rgba(248,200,64,0.2)", color: "#f8c840" }
                  : { color: "#64748b" }
              }
            >
              {l === "ko" ? "KOR" : "ENG"}
            </button>
          ))}
        </div>
      </div>

      {/* 헤더 */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="text-5xl mb-4">🌙</div>
        <h1 className="text-4xl md:text-5xl font-bold gold-glow" style={{ color: "#f8c840" }}>
          {t.title}
        </h1>
        <p className="mt-3 text-slate-400 text-lg">{t.subtitle}</p>
        <div className="mt-4 h-px w-32 mx-auto" style={{ background: "linear-gradient(to right, transparent, #f8c840, transparent)" }} />
      </div>

      {/* 입력 영역 */}
      <div className="w-full max-w-2xl animate-fade-in">
        <div
          className="rounded-2xl p-6 card-glow"
          style={{ background: "linear-gradient(135deg, #060d1f, #0a1530)" }}
        >
          <label className="block text-sm font-medium mb-3" style={{ color: "#f8c840" }}>
            {t.inputLabel}
          </label>
          <textarea
            className="w-full rounded-xl p-4 text-slate-200 placeholder-slate-500 resize-none bg-[#03060f]/80 border border-white/10 transition-all text-sm leading-relaxed"
            rows={5}
            placeholder={t.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleAnalyze(); }}
          />
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-slate-600">{t.hint}</span>
            <button
              onClick={handleAnalyze}
              disabled={loading || !input.trim()}
              className="px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: loading || !input.trim()
                  ? "rgba(248,200,64,0.3)"
                  : "linear-gradient(135deg, #f8c840, #f0a500)",
                color: "#03060f",
              }}
            >
              {loading ? t.analyzing : t.button}
            </button>
          </div>
        </div>
      </div>

      {/* 로딩 */}
      {loading && (
        <div className="mt-10 text-center animate-fade-in">
          <div className="flex justify-center gap-2 mb-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full animate-bounce"
                style={{ background: "#f8c840", animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <p className="text-slate-300 text-base italic" key={phraseIdx}>
            {t.loading[phraseIdx]}
          </p>
        </div>
      )}

      {/* 결과 */}
      {result && !loading && (
        <div ref={resultRef} className="w-full max-w-2xl mt-10 animate-fade-in">
          <div
            className="rounded-2xl p-6 md:p-8 card-glow border border-white/5"
            style={{ background: "linear-gradient(135deg, #060d1f, #0a1530)" }}
          >
            {/* 타이틀 */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                style={{ background: "rgba(248,200,64,0.15)" }}>
                🔮
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest">{t.resultLabel}</p>
                <h2 className="text-xl font-bold" style={{ color: "#f8c840" }}>{result.title[lang]}</h2>
              </div>
            </div>

            {/* 해몽 내용 */}
            <div
              className="rounded-xl p-5 mb-6 border border-white/5 text-slate-300 text-sm leading-7"
              style={{ background: "rgba(3,6,15,0.6)" }}
            >
              {result.interpretation[lang]}
            </div>

            {/* 3가지 정보 카드 */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="rounded-xl p-4 text-center border border-white/5" style={{ background: "rgba(3,6,15,0.5)" }}>
                <p className="text-xs text-slate-500 mb-2">{t.energyLabel}</p>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${ENERGY_STYLES[result.energy].badge}`}>
                  {ENERGY_LABEL[result.energy][lang]}
                </span>
              </div>
              <div className="rounded-xl p-4 text-center border border-white/5" style={{ background: "rgba(3,6,15,0.5)" }}>
                <p className="text-xs text-slate-500 mb-2">{t.luckyNumLabel}</p>
                <span className="text-3xl font-bold" style={{ color: "#f8c840" }}>{result.luckyNumber}</span>
              </div>
              <div className="rounded-xl p-4 text-center border border-white/5" style={{ background: "rgba(3,6,15,0.5)" }}>
                <p className="text-xs text-slate-500 mb-2">{t.luckyColorLabel}</p>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-6 h-6 rounded-full border-2 border-white/20" style={{ backgroundColor: colorDot }} />
                  <span className="text-xs text-slate-300">{result.luckyColor[lang]}</span>
                </div>
              </div>
            </div>

            {/* 에너지 바 */}
            <div>
              <div className="flex justify-between text-xs text-slate-500 mb-2">
                <span>{t.energyIndex}</span>
                <span style={{ color: "#f8c840" }}>{ENERGY_LABEL[result.energy][lang]}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-1000 ${ENERGY_STYLES[result.energy].bar} ${ENERGY_STYLES[result.energy].width}`} />
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 w-full py-3 rounded-xl text-sm font-medium transition-all border border-white/10 text-slate-400 hover:border-yellow-400/40 hover:text-yellow-300"
            >
              {t.reset}
            </button>
          </div>
        </div>
      )}

      {/* 푸터 */}
      <footer className="mt-20 text-center text-xs text-slate-700 space-y-1">
        <p>{t.footer1}</p>
        <p>{t.footer2}</p>
      </footer>
    </main>
  );
}
