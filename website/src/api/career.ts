import { JobsData } from "@/types";

// Assuming JobsData is an array of objects for simplicity
interface ApiResponse {
  data: JobsData[];
}

export async function getJobs(): Promise<{ data: JobsData[] }> {
  try {
    const res = await fetch("https://cms.anahataaconnections.com/api/careers?populate=*");
    if (!res.ok) {
      throw new Error(`HTTP error status: ${res.status}`);
    }
    const data: ApiResponse = await res.json();
    return { data: data.data };
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    // Handle the error appropriately, e.g., by setting an error state in your component
    return { data: [] }; // Return an empty array or appropriate fallback
  }
}
