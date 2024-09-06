import { baseurl, monthsArray } from "@/constants";

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

export const formatDate = (publishedDate: string) => {
  const date = new Date(publishedDate);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const fetchBannerImage = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:1337/api/blog-banner?populate=*`);
    // const res = await fetch(`${baseurl}/blog-banner?populate=*`);
    const response = await res.json();
    console.log(response)
    return response;
  } catch (error) {
    console.log(error);
  }
}
