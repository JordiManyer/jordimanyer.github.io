import Layout from "../components/Layout.tsx";
import Head from "../components/Head.tsx";

interface BlogPost {
  title: string;
  date: string;
  content: string;
  tags: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Joining Monash University",
    date: "2024-03-09",
    content:`I am thrilled to announce that I have joined Monash University as 
    a Computational Mathematics Researcher. In this role, I will be focusing on developing 
    distributed computing solutions for finite element methods. 
    My research will continue to build upon my work with Gridap and GridapDistributed, 
    aiming to push the boundaries of what's possible in large-scale scientific computing.`,
    tags: ["career", "research", "announcement"],
    slug: "joining-monash-university",
  },
];

export default function Blog() {
  return (
    <>
      <Head
        title="Blog & News"
        description="Latest updates, research news, and insights from Jordi Manyer"
        type="blog"
        path="/blog"
      />
      <Layout active="/blog">
        <div class="space-y-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Blog & News
          </h1>

          <div class="space-y-8">
            {blogPosts.map((post) => (
              <article class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {post.title}
                </h2>
                <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <time datetime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <div class="flex gap-2">
                    {post.tags.map((tag) => (
                      <span class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div class="prose dark:prose-invert max-w-none">
                    <p class="text-gray-600 dark:text-gray-300">
                      {post.content.trim()}
                    </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
