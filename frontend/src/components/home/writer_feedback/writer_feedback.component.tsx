import React from "react";
import { useGetReviewsQuery } from "../../../redux/apis/review.api";
import { Review } from "../../../models/review";
import ReviewForm from "./ReviewForm";

const WriterFeedbackComponent = () => {
  const { data: feedbackData = [], isLoading } =
    useGetReviewsQuery({});

  if (isLoading) {
    return (
      <div className="text-center text-slate-600 dark:text-gray-400 py-10">
        Loading reviews...
      </div>
    );
  }

  return (
    <section className="story-section">
      <div className="story-page-shell">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <h2 className="story-section-heading">
            What Our Writers Say
          </h2>

          <p className="story-section-copy mt-4">
    <section className="mb-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-gray-300">
            What Our Writers Say
          </h2>

          <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from our community of writers about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {feedbackData.map((writer: Review, index: number) => (
            <div
              key={index}
              className="motion-card-subtle story-panel rounded-lg p-6 hover:border-blue-400/35"
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-300/25"
                  src={writer.imgSrc}
                  alt={writer.name}
                />

                <div className="ml-4 min-w-0">
                  <h4 className="truncate text-lg font-bold text-slate-200">
                    {writer.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-700 dark:text-gray-400">
                    {writer.name}
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-gray-400">
                    {writer.role}
                  </p>
                </div>
              </div>

              <p className="leading-relaxed text-slate-400 italic">
              <p className="text-slate-600 dark:text-gray-500 italic">
                &#34;{writer.feedback}&#34;
              </p>
            </div>
          ))}
        </div>
      </div>
      <ReviewForm />
    </section>
  );
};

export default WriterFeedbackComponent;
