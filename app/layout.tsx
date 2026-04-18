import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "꿈 해몽 — 당신의 꿈이 말하는 것",
  description: "꿈의 의미를 한국 전통 해몽 데이터로 분석해 드립니다.",
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌙</text></svg>" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#03060f] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
