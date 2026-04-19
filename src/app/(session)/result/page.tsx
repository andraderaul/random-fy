import { ResultContent } from "@/features/result/components/result-content";
import type { ResultSearchParams } from "@/lib/types/spotify";

const resultGlowTop =
  "pointer-events-none absolute left-1/2 top-0 h-[min(72vmin,440px)] w-[min(92vw,720px)] -translate-x-1/2 -translate-y-[38%] rounded-full bg-primary/12 blur-[100px]";

const resultGlowGreen =
  "pointer-events-none absolute left-1/2 top-[min(28vh,220px)] h-[min(48vmin,320px)] w-[min(80vw,520px)] -translate-x-1/2 rounded-full bg-brand/8 blur-[90px]";

const resultGlowMagenta =
  "pointer-events-none absolute -right-[min(20vw,120px)] bottom-0 h-[min(56vmin,360px)] w-[min(72vw,480px)] translate-y-[20%] rounded-full bg-fuchsia-950/35 blur-[100px]";

interface ResultPageProps {
  searchParams: Promise<ResultSearchParams>;
}

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const params = await searchParams;

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className={resultGlowTop} />
        <div className={resultGlowGreen} />
        <div className={resultGlowMagenta} />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center gap-14 px-4 py-12 sm:gap-16 sm:py-16 md:py-20">
        <ResultContent searchParams={params} />
      </div>
    </main>
  );
}
