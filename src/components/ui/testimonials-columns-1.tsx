"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { type Review } from "@/lib/reviews";

const READ_MORE_THRESHOLD = 140;

function TestimonialCard({ text, name, service }: { text: string; name: string; service?: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > READ_MORE_THRESHOLD;
  const displayText = isLong && !expanded ? text.slice(0, READ_MORE_THRESHOLD).trimEnd() + "…" : text;

  return (
    <div className="p-6 rounded-3xl border border-gray-100 shadow-sm max-w-xs w-full bg-white">
      <p className="text-gray-600 text-sm leading-relaxed">
        &ldquo;{displayText}&rdquo;
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-xs font-semibold text-brand-pink hover:underline underline-offset-2 focus:outline-none"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="font-semibold text-brand-dark text-sm leading-5">{name}</div>
        {service && (
          <div className="text-xs text-gray-400 leading-5 mt-0.5">{service}</div>
        )}
      </div>
    </div>
  );
}

export const TestimonialsColumn = (props: {
  className?: string;
  reviews: Review[];
  duration?: number;
}) => {
  const doubled = [0, 1];
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {doubled.map((index) => (
          <React.Fragment key={index}>
            {props.reviews.map((r, i) => (
              <TestimonialCard
                key={i}
                text={r.text}
                name={r.name}
                service={r.service}
              />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
