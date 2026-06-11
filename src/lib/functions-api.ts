const defaultFunctionsBaseUrl =
  "https://asia-south1-rv-it-consulting.cloudfunctions.net";

const functionsBaseUrl = (
  process.env.NEXT_PUBLIC_FUNCTIONS_BASE_URL || defaultFunctionsBaseUrl
).replace(/\/$/, "");

export function functionsEndpoint(name: "submitContact" | "submitCareer"): string {
  return `${functionsBaseUrl}/${name}`;
}
