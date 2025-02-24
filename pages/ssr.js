export async function getServerSideProps() {
    return {
        props: {
            time: new Date().toISOString()
        }
    };
}

export default function SSR({ time }) {
    return (
        <div>
            <h1>Server-Side Rendering (SSR)</h1>
            <p>This page is generated on each request.</p>
            <p>Generated at: {time}</p>
        </div>
    );
}