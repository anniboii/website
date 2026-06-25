import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { blogPosts } from "@/content/data";

import PlacementSeason from "@/content/blogs/placement-season-iitb";

const blogContent: Record<string, React.ComponentType> = {
    "placement-season-iitb": PlacementSeason,
};

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Blog Not Found",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const BlogContent = blogContent[slug];

    if (!BlogContent) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-28 pb-24">
            <div className="max-w-3xl mx-auto px-6">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm mb-10 hover:opacity-70 transition-opacity"
                    style={{ color: "var(--text-muted)" }}
                >
                    <ArrowLeft size={14} />
                    Back to Blog
                </Link>

                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-full"
                                style={{
                                    background: "var(--border)",
                                    color: "var(--text-muted)",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ color: "var(--text-primary)" }}
                    >
                        {post.title}
                    </h1>

                    <p
                        className="text-sm mb-10"
                        style={{ color: "var(--text-muted)" }}
                    >
                        {post.date} • {post.readingTime}
                    </p>
                </div>

                <BlogContent />
            </div>
        </div>
    );
}