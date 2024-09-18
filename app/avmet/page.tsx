import AvMet from "@/components/avmet";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aviation Meterology",
    description: "Description here",
};

export default function AvMetPage() {
    return (
        <>
            <AvMet />
        </>
    );
}
