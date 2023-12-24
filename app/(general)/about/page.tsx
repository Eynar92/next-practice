import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'This is the about page',
    keywords: ['about', 'page'],
};

export default function AboutPage() {
    return (
        <>
            <h2 className="text-5xl">About Page</h2>
        </>
    )
}
