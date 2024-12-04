import LoremIpsum from "@/components/LorumImpsum";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));

export const metadata = {
    title: 'Responsive Contact Template',
    description: 'Created by Doni',
};

export default function Contact() {
    return (
        <>
            <HeroSection
                title="Contact"
                subtitle="Reach out to Doni."
                image="/images/webp/wf_contact"
                alt="Watercolor flowers"
            />

            <div className="page-container">
                {/* Display some placeholder text */}
                <LoremIpsum />
            </div>
        </>
    );
}