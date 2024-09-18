import ICPP from "@/components/icpp";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Indigo Cadet Pilot Program",
    description: "Description here",
};

export default function AICPPPage() {
    return (
        <>
            <ICPP />
        </>
    );
}
