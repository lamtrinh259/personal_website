import fs from "fs";
import matter from "gray-matter";
import {PostMetadata} from "../components/PostMetadata";


const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  // slug is just the name of the post (file) without the .md extension and also the name of the url
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      Title: matterResult.data.Title,
      Date: matterResult.data.Date,
      Subtitle: matterResult.data.Subtitle,
      slug: fileName.replace(".md", ""),
    }
  });
  return posts;
};

export default getPostMetadata;
