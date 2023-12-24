import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'This is the contact page',
    keywords: ['contact', 'page'],
};

export default function ContactPage() {
    return (
        <>
            <h2 className='text-5xl'>Contact Page</h2>
        </>
    )
}
