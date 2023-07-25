import fs from "fs";
// import React from "react";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts";
  const file = '${folder}/${slug}.md';
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult; // Should only the return the contents of the post, not the metadata
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }))
};

const PostPage = (props:any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <h1>{post.data.Title}{slug}</h1>
      <Markdown>{post.content}</Markdown>
    </div>
  );
};

export default PostPage;