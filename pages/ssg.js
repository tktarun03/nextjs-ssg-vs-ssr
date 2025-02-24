export async function getStaticProps() {
    return {
        props: {
            time: new Date().toISOString()
        }
    };
}

export default function SSG({ time }) {
    return (
        <div>
            <h1>Static Site Generation (SSG)</h1>
            <p>This page was generated at build time.</p>
            <p>Generated at: {time}</p>
        </div>
    );
}