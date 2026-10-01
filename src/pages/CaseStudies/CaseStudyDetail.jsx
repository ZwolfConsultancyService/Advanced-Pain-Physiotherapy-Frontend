import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";
import { ArrowLeft, Calendar } from "lucide-react";
import { getCaseStudyBySlug } from "../../data/caseStudyApi";

const SITE_URL = "https://advancepainphysiotherapy.com";

/* Tailwind reset ke baad heading, para, list sahi dikhane ke liye */
const contentStyles = `
  .cs-content { font-size: 1.0625rem; line-height: 1.8; color: #374151; word-wrap: break-word; }
  .cs-content > *:first-child { margin-top: 0; }
  .cs-content p { margin: 0 0 1.1rem; }
  .cs-content h1 {
    font-size: 2rem; font-weight: 700; line-height: 1.25;
    margin: 2rem 0 0.85rem; color: #111827;
  }
  .cs-content h2 {
    font-size: 1.6rem; font-weight: 600; line-height: 1.3;
    margin: 1.75rem 0 0.75rem; color: #111827;
  }
  .cs-content h3 {
    font-size: 1.3rem; font-weight: 600; line-height: 1.35;
    margin: 1.5rem 0 0.6rem; color: #111827;
  }
  .cs-content ul { list-style: disc; padding-left: 1.6rem; margin: 0 0 1.1rem; }
  .cs-content ol { list-style: decimal; padding-left: 1.6rem; margin: 0 0 1.1rem; }
  .cs-content li { margin-bottom: 0.4rem; }
  .cs-content strong, .cs-content b { font-weight: 700; color: #111827; }
  .cs-content em, .cs-content i { font-style: italic; }
  .cs-content a { color: #8ab72e; text-decoration: underline; }
  .cs-content a:hover { color: #7aa625; }
  .cs-content img { max-width: 100%; height: auto; border-radius: 0.5rem; margin: 1rem 0; }
  .cs-content blockquote {
    border-left: 4px solid #8ab72e; padding-left: 1rem;
    margin: 1.25rem 0; color: #4b5563; font-style: italic;
  }
`;

// HTML se plain text (meta description ke liye)
const stripHtml = (html = "") =>
  new DOMParser()
    .parseFromString(
      html.replace(/<\/(p|h[1-6]|li|div|ul|ol)>/gi, " ").replace(/<br\s*\/?>/gi, " "),
      "text/html"
    )
    .body.textContent.replace(/\s+/g, " ")
    .trim();

// Purani plain-text case studies ke liye check
const isHtml = (s = "") => /<\/?[a-z][\s\S]*>/i.test(s);

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const [study, setStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setNotFound(false);
    setError("");

    getCaseStudyBySlug(slug)
      .then(setStudy)
      .catch((err) => {
        if (err.status === 404) setNotFound(true);
        else setError(err.message || "Something went wrong");
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <p className="text-center text-gray-500 py-24">Loading...</p>;
  }

  if (notFound || error || !study) {
    return (
      <div className="text-center py-24 px-4">
        <Helmet>
          <title>Case Study Not Found | Advanced Pain Physiotherapy Centre</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          {notFound ? "Case study not found" : "Something went wrong"}
        </h1>
        <p className="text-gray-600 mb-6">
          {error || "The page you are looking for does not exist."}
        </p>
        <Link
          to="/case-studies"
          className="inline-block bg-[#8ab72e] text-white px-5 py-2.5 rounded-full hover:bg-[#7aa625] transition"
        >
          View all case studies
        </Link>
      </div>
    );
  }

  const url = `${SITE_URL}/case-studies/${study.slug}`;
  const metaDescription = stripHtml(study.description).slice(0, 155);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: metaDescription,
    datePublished: study.createdAt,
    dateModified: study.updatedAt,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Advanced Pain Physiotherapy Centre" },
    publisher: { "@type": "Organization", name: "Advanced Pain Physiotherapy Centre" },
  };

  return (
    <>
      <Helmet>
        <title>{`${study.title} | Case Study | Advanced Pain Physiotherapy`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={study.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <style>{contentStyles}</style>

      <article className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-sm text-gray-600 hover:text-[#8ab72e] mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Case Studies
          </Link>

          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
            {study.title}
          </h1>

          <p className="mt-3 flex items-center gap-1.5 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <time dateTime={study.createdAt}>
              {new Date(study.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>

          {study.image && (
            <img
              src={study.image}
              alt={study.title}
              className="mt-8 w-full max-h-[480px] object-cover rounded-xl border border-gray-200"
            />
          )}

          {/* Description: heading, bold, bullets, links sab sahi dikhenge */}
          {isHtml(study.description) ? (
            <div
              className="cs-content mt-8"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(study.description, { ADD_ATTR: ["target"] }),
              }}
            />
          ) : (
            <div className="cs-content mt-8 whitespace-pre-line">
              {study.description}
            </div>
          )}

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Suffering from a similar problem?
            </h2>
            <p className="mt-2 text-gray-600">
              Book an appointment and our physiotherapists will guide you.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-[#8ab72e] text-white px-6 py-2.5 rounded-full hover:bg-[#7aa625] transition shadow-md"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default CaseStudyDetail;