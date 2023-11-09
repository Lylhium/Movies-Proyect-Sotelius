import React, { useState } from "react";

const ReviewSection = ({ reviews }: { reviews: any[] }) => {
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);

  const toggleExpansion = (reviewId: number) => {
    setExpandedReviews((prev) =>
      prev.includes(reviewId)
        ? prev.filter((id) => id !== reviewId)
        : [...prev, reviewId]
    );
  };

  return (
    <div className='px-4 py-10 md:px-6 lg:py-16 md:py-12'>
      <h1 className='text-3xl font-extrabold tracking-tight lg:text-3xl lg:leading-[3.5rem] text-orange-500'>
        User Reviews
      </h1>
      {reviews.map((review) => (
        <article
          key={review.id}
          className='prose prose-zinc mx-auto dark:prose-invert'
        >
          <div className='not-prose'>
            <div className='flex items-center space-x-2'>
              <div className='grid gap-0.5 text-md font-bold'>
                <div className='text-orange-500 dark:text-orange-500 text-md pt-3'>
                  {review.author} {review.author.rating}
                </div>
              </div>
            </div>
            <p className='text-zinc-500 dark:text-zinc-400'>
              Posted on {new Date(review.created_at).toLocaleDateString()}
            </p>
          </div>
          <div className='pt-2'>
            {review.content.length > 200 ? (
              <div>
                {expandedReviews.includes(review.id) ? (
                  <>
                    <p>{review.content}</p>
                    <button
                      className='text-orange-500'
                      onClick={() => toggleExpansion(review.id)}
                    >
                      See Less
                    </button>
                  </>
                ) : (
                  <>
                    <p>{review.content.slice(0, 200)}...</p>
                    <button
                      className='text-orange-500'
                      onClick={() => toggleExpansion(review.id)}
                    >
                      See More
                    </button>
                  </>
                )}
              </div>
            ) : (
              <p>{review.content}</p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default ReviewSection;
