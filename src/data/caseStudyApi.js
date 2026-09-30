const API_URL =
  import.meta.env.VITE_API_BASE_URL || "https://api.advancepainphysiotherapy.com/api";

const request = async (path) => {
  const res = await fetch(`${API_URL}${path}`);

  let json = {};
  try {
    json = await res.json();
  } catch {
    // response JSON nahi tha
  }

  if (!res.ok || json.success === false) {
    const err = new Error(json.message || `Request failed (${res.status})`);
    err.status = res.status;
    throw err;
  }
  return json.data;
};

export const getCaseStudies = () => request("/case-studies");
export const getCaseStudyBySlug = (slug) => request(`/case-studies/${slug}`);