import TechGen from "@/components/techgen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Techincal General",
    description: "Description here",
};

export default function TechGenPage() {
    return (
        <>
            <TechGen />
        </>
    );
}
