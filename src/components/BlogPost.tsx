import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostBySlug } from '../data/blog';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Cursor from './Cursor';
import "./styles/BlogPost.css";

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const post = getBlogPostBySlug(slug || '');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post || !post.published) {
        return (
            <div className="blog-page-container">
                <div className="not-found-message">
                    <h1>404 - Post Not Found</h1>
                    <Link to="/blog" className="blog-back-btn">Return to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-page-container">
            <Cursor />

            <div className="blog-nav">
                <Link to="/blog" className="blog-back-btn">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Blog</span>
                </Link>
            </div>

            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="blog-post-header">
                    <div className="blog-post-header-content">
                        <div className="animated-section">
                            <div className="blog-meta mb-4">
                                <span className="blog-meta-item">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </span>
                                <span className="blog-meta-item">
                                    <Clock className="h-4 w-4" />
                                    {post.readTime}
                                </span>
                            </div>

                            <h1 className="blog-post-title-main">{post.title}</h1>

                            <div className="blog-tags">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="blog-badge">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="blog-content-section">
                    <div className="blog-content-container">
                        <div className="animated-section delay-1">
                            <div className="blog-content-card">
                                <ReactMarkdown
                                    components={{
                                        code(props) {
                                            const { children, className, node, ref, ...rest } = props as any;
                                            const match = /language-(\w+)/.exec(className || '');
                                            return match ? (
                                                <SyntaxHighlighter
                                                    {...rest}
                                                    PreTag="div"
                                                    children={String(children).replace(/\n$/, '')}
                                                    language={match[1]}
                                                    style={oneDark}
                                                    className="blog-syntax-highlighter"
                                                />
                                            ) : (
                                                <code {...rest} className="blog-inline-code">
                                                    {children}
                                                </code>
                                            )
                                        },
                                        h1: ({ children }) => <h1 className="md-h1">{children}</h1>,
                                        h2: ({ children }) => <h2 className="md-h2">{children}</h2>,
                                        h3: ({ children }) => <h3 className="md-h3">{children}</h3>,
                                        p: ({ children }) => <p className="md-p">{children}</p>,
                                        ul: ({ children }) => <ul className="md-ul">{children}</ul>,
                                        ol: ({ children }) => <ol className="md-ol">{children}</ol>,
                                        blockquote: ({ children }) => <blockquote className="md-blockquote">{children}</blockquote>,
                                        a: ({ href, children }) => <a href={href} className="md-a" target="_blank" rel="noreferrer">{children}</a>,
                                    }}
                                >
                                    {post.content}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
