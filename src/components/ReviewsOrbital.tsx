"use client";
import { Star, Home, Building2, Wrench, TreePine, Layers, Shield, Users, Award } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const reviewData = [
  {
    id: 1,
    title: "MetzMagicGames",
    date: "Apr 2025",
    content: "Professional, reliable and outstanding service. Retaining wall with concrete sleepers and Colorbond on top. Punctual, detailed quote, clean worksite. Kalid even helped with a tricky pool fence connection — above and beyond.",
    category: "Retaining Wall & Colorbond Fence",
    icon: Layers,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Vanessa Strong",
    date: "Jan 2025",
    content: "Kalid and his team were impressively professional throughout. Detailed written quote, workers kept us informed at each stage, yard left spotless. Cannot speak highly enough of Kalid and his team.",
    category: "Fencing",
    icon: Award,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 98,
  },
  {
    id: 3,
    title: "Paymon Husayni",
    date: "Nov 2024",
    content: "Fantastic from initial quote to final install. Clear communication, supportive approach, went above and beyond. Rare to find tradespeople who show up on time and deliver exactly what they promise.",
    category: "Fencing",
    icon: Shield,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 96,
  },
  {
    id: 4,
    title: "Christina Saul",
    date: "Nov 2024",
    content: "Bent over backwards to accommodate my neighbours so I could get agreement on all 3 boundary fences. Professional from start to finish. The final result is 3 beautiful new fences.",
    category: "Boundary Fencing × 3",
    icon: Users,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 94,
  },
  {
    id: 5,
    title: "Esben Strodl",
    date: "Aug 2024",
    content: "Got 5 quotes — Khalid provided the most considered yet fair one. 72 metres across sloping, challenging terrain. Excellent competency, regular communication, flexible problem solving. Neighbours and I all happy.",
    category: "72m Fencing · Challenging Terrain",
    icon: Building2,
    relatedIds: [4, 6],
    status: "completed" as const,
    energy: 92,
  },
  {
    id: 6,
    title: "Max Ushakov",
    date: "Sep 2024",
    content: "Retaining wall and fence — couldn't be happier. Every step clearly explained, timelines kept on track, outstanding workmanship, tidy finish. Highly recommend for quality work backed by fantastic customer service.",
    category: "Retaining Wall & Fencing",
    icon: Wrench,
    relatedIds: [5, 7],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 7,
    title: "Adrian Muhs",
    date: "Apr 2025",
    content: "Awesome crew, double gates are awesome. Beats other companies. Updated on every stage of the job. Quoted very good, excellent work. Will definitely use again. Kalid and crew thank you.",
    category: "Fencing & Double Gates",
    icon: Home,
    relatedIds: [6, 8],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 8,
    title: "Mandii Simmonds",
    date: "Apr 2025",
    content: "Clear and consistent communication throughout. High level of professionalism. Good standard of workmanship with attention to detail. Questions addressed promptly. Smooth and stress-free process. Would recommend.",
    category: "Fencing",
    icon: Star,
    relatedIds: [7, 1],
    status: "completed" as const,
    energy: 86,
  },
];

export default function ReviewsOrbital() {
  return (
    <div className="w-full">
      <RadialOrbitalTimeline timelineData={reviewData} />
      <p className="text-center text-white/30 text-xs mt-4">
        Click any reviewer to read their review · Click background to reset
      </p>
    </div>
  );
}
