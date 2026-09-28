import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ImageIcon, ArrowRight } from "lucide-react";
import { getCaseStudies } from "../../data/caseStudyApi";

const SITE_URL = "https://advancepainphysiotherapy.com";

// HTML se plain text banata hai (card preview ke liye)
const stripHtml = (html = "") =>
  new DOMParser()
    .parseFromString(
      html.replace(/<\/(p|h[1-6]|li|div|ul|ol)>/gi, " ").replace(/<br\s*\/?>/gi, " "),
      "text/html"
    )
    .body.textContent.replace(/\s+/g, " ")
    .trim();

const CaseStudies = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    getCaseStudies()
      .then(setCases)
      .catch((err) => setError(err.message || "Could not load case studies"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Helmet>
        <title>Case Studies | Advanced Pain Physiotherapy Centre, Delhi</title>
        <meta
          name="description"
          content="Read real patient case studies and recovery stories from Advanced Pain Physiotherapy Centre, Delhi."
        />
        <link rel="canonical" href={`${SITE_URL}/case-studies`} />
        <meta property="og:title" content="Case Studies | Advanced Pain Physiotherapy Centre" />
        <meta property="og:description" content="Real patient recovery stories and treatment results." />
        <meta property="og:url" content={`${SITE_URL}/case-studies`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Case <span className="text-[#8ab72e]">Studies</span>
            </h1>
            <p className="mt-3 text-gray-600">
              Real recovery stories from our patients and the treatments that helped them.
            </p>
          </div>

          {loading && <p className="text-center text-gray-500 py-16">Loading...</p>}

          {!loading && error && <p className="text-center text-red-500 py-16">{error}</p>}

          {!loading && !error && cases.length === 0 && (
            <p className="text-center text-gray-500 py-16">No case studies available yet.</p>
          )}

          {!loading && !error && cases.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((c) => (
                <Link
                  key={c.id}
                  to={`/case-studies/${c.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col"
                >
                  <div className="h-52 w-full overflow-hidden">
                    {c.image ? (
                      <img
                        src={c.image}
                        alt={c.title}
                        loading="lazy"
                        className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <ImageIcon className="h-10 w-10" />
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-[#8ab72e] transition">
                      {c.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {stripHtml(c.description)}
                    </p>
                    <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-[#8ab72e]">
                      Read case study <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CaseStudies;