import { baseurl } from "@/constants";

export async function fetchBlog() {
  try {
    const res = await fetch(`${baseurl}/blogs/?populate=*`);
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const fetchBlogByName = async (id: string) => {
  try {
    const res = await fetch(
      `${baseurl}/blogs?filters[tiltle][$eq]=${id}&populate=*`
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch blog");
  }
};
