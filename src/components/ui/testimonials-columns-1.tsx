"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { type Review } from "@/lib/reviews";

const READ_MORE_THRESHOLD = 140;

function ReviewModal({
  review,
  onClose,
}: {
  review: Review;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      <div
        className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl max-h-[85vh] overflow-y-auto overscroll-contain touch-pan-y"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-0.5 mb-5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {review.text}
        </p>
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm text-brand-dark">
                {review.name}
                {review.suburb ? `, ${review.suburb}` : ""}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{review.service}</p>
            </div>
            {review.source && (
              <span className="text-[10px] text-gray-400 font-medium shrink-0">
                {review.source === "Google Reviews" ? "Google" : "hipages"}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function TestimonialCard({
  review,
  onOpen,
}: {
  review: Review;
  onOpen: () => void;
}) {
  const isLong = review.text.length > READ_MORE_THRESHOLD;
  const displayText = isLong
    ? review.text.slice(0, READ_MORE_THRESHOLD).trimEnd() + "…"
    : review.text;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="p-6 rounded-3xl border border-gray-100 shadow-sm max-w-xs w-full bg-white text-left cursor-pointer hover:border-brand-pink/30 hover:shadow-md transition-all"
    >
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <svg
            key={i}
            className="w-3.5 h-3.5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        &ldquo;{displayText}&rdquo;
      </p>
      {isLong && (
        <span className="mt-2 text-xs font-semibold text-brand-pink inline-block">
          Read more
        </span>
      )}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-brand-dark text-sm leading-5">
              {review.name}
              {review.suburb ? `, ${review.suburb}` : ""}
            </div>
            {review.service && (
              <div className="text-xs text-gray-400 leading-5 mt-0.5">
                {review.service}
              </div>
            )}
          </div>
          {review.source && (
            <span className="text-[10px] text-gray-400 font-medium shrink-0">
              {review.source === "Google Reviews" ? "Google" : "hipages"}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

export const TestimonialsColumn = (props: {
  className?: string;
  reviews: Review[];
  duration?: number;
}) => {
  const [activeReview, setActiveReview] = useState<Review | null>(null);
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
                review={r}
                onOpen={() => setActiveReview(r)}
              />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
      {activeReview && (
        <ReviewModal
          review={activeReview}
          onClose={() => setActiveReview(null)}
        />
      )}
    </div>
  );
};
