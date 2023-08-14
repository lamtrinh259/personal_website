import Link from 'next/link';
import { PostMetadata } from './PostMetadata';

const PostPreview = (props: PostMetadata) => {
  return (<div>
  <Link href={`/posts/${props.slug}`}>
  <h2>{props.Title}</h2>
  </Link>
  <p>{props.Subtitle}</p>
  <p>{props.Date}</p>
</div>);
};

export default PostPreview;
