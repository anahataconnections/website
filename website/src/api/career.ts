import { JobsData } from "@/types";

export async function getJobs() {
  const res = await fetch(
    "https://cms.anahataaconnections.com/api/careers?populate=*"
  );

  const data = (await res.json()) as { data: JobsData[] };

  return { data: data.data };
}
