import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'This is the pricing page',
    keywords: ['pricing', 'page'],
};

export default function PricingPage() {
    return (
        <>
            <h2 className="text-5xl">Pricing Page</h2>
        </>
    )
}
