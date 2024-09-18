import AirNav from "@/components/airnav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Air Navigation",
    description: "Description here",
};

export default function AirNavPage() {
    return (
        <>
            <AirNav />
        </>
    );
}
