"use client";
import { MapPin } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const suburbData = [
  {
    id: 1,
    title: "North Brisbane",
    date: "Active",
    content: "Chermside, North Lakes, Kallangur, Caboolture, Strathpine, Sandgate, Bracken Ridge.",
    category: "Northern Suburbs",
    icon: MapPin,
    relatedIds: [2, 8],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Inner West",
    date: "Active",
    content: "Toowong, Indooroopilly, Auchenflower, St Lucia, Chapel Hill, Kenmore, Fig Tree Pocket.",
    category: "Inner Western Suburbs",
    icon: MapPin,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "South Brisbane",
    date: "Active",
    content: "Sunnybank, Moorooka, Rocklea, Acacia Ridge, Salisbury, Coopers Plains, Yeronga.",
    category: "Southern Suburbs",
    icon: MapPin,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 92,
  },
  {
    id: 4,
    title: "Logan",
    date: "Active",
    content: "Logan Central, Springwood, Slacks Creek, Loganholme, Beenleigh, Shailer Park.",
    category: "Logan City",
    icon: MapPin,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 5,
    title: "Ipswich",
    date: "Active",
    content: "Ipswich City, Springfield, Redbank, Goodna, Collingwood Park, Brassall.",
    category: "Ipswich Region",
    icon: MapPin,
    relatedIds: [4, 6],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 6,
    title: "Redlands",
    date: "Active",
    content: "Redland Bay, Victoria Point, Cleveland, Capalaba, Alexandra Hills, Thornlands.",
    category: "Redland City",
    icon: MapPin,
    relatedIds: [5, 7],
    status: "completed" as const,
    energy: 83,
  },
  {
    id: 7,
    title: "South East",
    date: "Active",
    content: "Carindale, Rochedale, Eight Mile Plains, Mansfield, Wishart, Mount Gravatt.",
    category: "South Eastern Suburbs",
    icon: MapPin,
    relatedIds: [6, 8],
    status: "completed" as const,
    energy: 93,
  },
  {
    id: 8,
    title: "Moreton Bay",
    date: "Active",
    content: "Redcliffe, Woody Point, Deception Bay, Morayfield, Burpengary, Griffin.",
    category: "Moreton Bay Region",
    icon: MapPin,
    relatedIds: [7, 1],
    status: "completed" as const,
    energy: 87,
  },
];

export default function SuburbsOrbital() {
  return (
    <div className="w-full">
      <RadialOrbitalTimeline timelineData={suburbData} />
      <p className="text-center text-white/30 text-xs mt-4">
        Click any region to see the suburbs we cover · Click background to reset
      </p>
    </div>
  );
}
