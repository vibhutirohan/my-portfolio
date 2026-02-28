import { Link } from 'react-router-dom';
import { getPublishedBlogPosts } from '../data/blog';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import SocialIcons from './SocialIcons';
import Cursor from './Cursor';
import "./styles/Blog.css"; // Create basic styles
import { useEffect } from 'react';

export default function Blog() {
    const publishedPosts = getPublishedBlogPosts();

    useEffect(() => {
        window.scrollTo(0, 0); // Ensure page starts at top
    }, []);

    return (
        <div className="blog-page-container">
            <Cursor />
            {/* Simplify Navbar/Routing for top level */}
            <div className="blog-nav">
                <Link to="/" className="blog-back-btn">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Portfolio</span>
                </Link>
            </div>

            <SocialIcons />

            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="blog-hero">
                    <div className="blog-hero-content">
                        <div className="animated-section">
                            <h1 className="blog-title">Blog</h1>
                            <p className="blog-subtitle">
                                Technical insights, tutorials, and lessons learned from building data systems
                                and machine learning applications.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Blog Posts */}
                <section className="blog-posts-section">
                    <div className="blog-posts-container">
                        <div className="blog-posts-grid">
                            {publishedPosts.map((post) => (
                                <div key={post.slug} className="animated-section delay-1">
                                    <Link to={`/blog/${post.slug}`} className="blog-card-link">
                                        <div className="blog-card">
                                            <div className="blog-card-content">
                                                <div className="blog-card-layout">
                                                    <div className="blog-card-main">

                                                        <div className="blog-meta">
                                                            <span className="blog-meta-item">
                                                                <Calendar className="h-3 w-3" />
                                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                                    year: 'numeric',
                                                                    month: 'short',
                                                                    day: 'numeric',
                                                                })}
                                                            </span>
                                                            <span className="blog-meta-item">
                                                                <Clock className="h-3 w-3" />
                                                                {post.readTime}
                                                            </span>
                                                        </div>

                                                        <h2 className="blog-post-title">
                                                            {post.title}
                                                        </h2>
                                                        <p className="blog-post-excerpt">
                                                            {post.excerpt}
                                                        </p>

                                                        <div className="blog-tags">
                                                            {post.tags.map((tag: string) => (
                                                                <span key={tag} className="blog-badge">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>

                                                    </div>
                                                    <ArrowRight className="blog-arrow-icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
