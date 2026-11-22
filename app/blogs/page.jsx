import { BsMedium } from "react-icons/bs";
import { getMediumPosts } from "@/lib/medium";
import { profile } from "@/lib/profile";

export const revalidate = 21600;

export const metadata = {
  title: "Writing · Nur Alam Chowdhury",
};

export default async function BlogPage() {
  const posts = await getMediumPosts();

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-10">
          <p className="text-accent text-sm tracking-[0.2em] uppercase">Medium</p>
          <h1 className="text-4xl font-bold mt-2">Writing</h1>
          <p className="text-white/60 mt-3">
            Notes on the stack I use. New posts appear here from Medium.
          </p>
        </div>
        {posts.length === 0 ? (
          <p className="text-white/70 mb-8">
            Medium did not return posts just now. The profile is still linked below.
          </p>
        ) : (
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {posts.map((post) => (
              <li key={post.link}>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#122033] p-6 transition hover:-translate-y-1 hover:border-accent"
                >
                  {post.date && (
                    <p className="text-xs uppercase tracking-[0.16em] text-accent">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  )}
                  <h2 className="text-2xl font-semibold mt-3 group-hover:text-accent">{post.title}</h2>
                  {post.excerpt && (
                    <p className="text-white/60 mt-3 leading-relaxed">{post.excerpt}</p>
                  )}
                  <span className="mt-6 text-sm text-accent">Read on Medium</span>
                </a>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-16 border-t border-white/10 pt-10 flex flex-col items-center text-center">
          <p className="text-white/50 text-sm">The full archive is on Medium, separate from the notes above.</p>
          <a
            href={profile.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-3 rounded-full border border-accent/50 px-6 py-3 text-accent transition hover:bg-accent hover:text-[#001021]"
          >
            <BsMedium className="text-xl" />
            <span className="text-left">
              <span className="block font-semibold leading-tight">All posts on Medium</span>
              <span className="block text-xs opacity-80">medium.com/@nuralam201425</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
