'use client';
import { Progress } from '@/components/ui/progress';

const phases = [
  { name: "Kotlin Mastery", progress: 100, status: "✅" },
  { name: "Clean Architecture", progress: 100, status: "✅" },
  { name: "Jetpack Compose Mastery", progress: 55, status: "🔄" },
  { name: "Performance Engineering", progress: 10, status: "⏳" },
  { name: "Kotlin Multiplatform", progress: 0, status: "⏳" },
];

export default function RoadmapProgress() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-10 mt-10">
      <h2 className="text-3xl font-bold text-green-400 mb-8">Live Senior Roadmap Progress</h2>
      {phases.map((phase, i) => (
        <div key={i} className="mb-8">
          <div className="flex justify-between text-sm mb-3">
            <span>{phase.name}</span>
            <span className="text-green-400">{phase.status}</span>
          </div>
          <Progress value={phase.progress} className="h-3" />
          <div className="text-right text-xs text-zinc-500 mt-1">{phase.progress}%</div>
        </div>
      ))}
      <div className="text-center text-green-400 text-xl font-medium mt-12">
        Overall Senior Level Completion — 28%
      </div>
    </div>
  );
}
