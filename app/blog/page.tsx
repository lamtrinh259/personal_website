// import React from "react";
import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

const BlogPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return <div>{postPreviews}</div>;
};

export default BlogPage;
