import { clinic } from "@/config/clinic";
import { ButtonLink } from "@/components/ui/button-link";
import { getVerifiedRating, toSafeGoogleHref } from "@/lib/utils";

export function ReviewsSection() {
  const reviewsHref = toSafeGoogleHref(clinic.googleReviewsUrl);
  const rating = getVerifiedRating(clinic.rating);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      tabIndex={-1}
      className="bg-accent-strong text-on-accent"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)] lg:items-center lg:py-24">
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-[0.16em] text-on-accent-muted uppercase">
            Google reviews
          </p>
          <h2
            id="reviews-heading"
            className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-5xl"
          >
            Read what patients have shared
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-on-accent-muted sm:text-lg sm:leading-8">
            {reviewsHref
              ? "Reviews stay on the clinic’s Google profile. This page links to that profile and does not copy the wording."
              : "Patient reviews stay on Google. This page does not copy them."}
          </p>
          {rating ? (
            <p className="mt-5 text-base text-on-accent">
              {rating.value.toFixed(1)} from {rating.reviewCount}{" "}
              {rating.reviewCount === 1 ? "review" : "reviews"} on {rating.source}.
            </p>
          ) : null}
        </div>
        {reviewsHref ? (
          <div className="border border-white/15 p-6 sm:p-8">
            <p className="font-serif text-2xl leading-tight">On Google</p>
            <p className="mt-3 text-sm leading-6 text-on-accent-muted">
              Opens the clinic’s Google profile in a new tab.
            </p>
            <div className="mt-6">
              <ButtonLink href={reviewsHref} external variant="inverse" className="w-full sm:w-auto">
                View Google reviews
              </ButtonLink>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
