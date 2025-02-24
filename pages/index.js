import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Next.js SSG vs SSR</h1>
            <p>Learn the difference between Static Site Generation and Server-Side Rendering.</p>
            <Link href="/ssg">Go to SSG Page</Link>
            <br />
            <Link href="/ssr">Go to SSR Page</Link>
        </div>
    );
}