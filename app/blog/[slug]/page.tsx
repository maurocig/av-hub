export const revalidate = 420;
// ^ update the cache every Nth seconds (Incremental Static Regeneration).

interface Post {
  title: string;
  content: string;
  slug: string;
}
// ^ describes the shape of the data that we're fetching from the server

interface Props {
  params: { slug: string };
}

// everything in this function will be rendered in advance to serve static html.
export async function generateStaticParams() {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );
  ('');
  let post = posts.find((post) => post.slug === params.slug);

  if (post) {
    return (
      <div className="text-gray-300">
        <h1 className="mb-2 text-xl">{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }

  return (
    <div className="text-gray-300">
      <h1>404 Not Found</h1>
      <p>The post you're looking for does no longer exist.</p>
    </div>
  );
}
