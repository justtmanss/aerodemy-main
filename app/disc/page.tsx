import Disclaimer from "@/components/disc";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disclaimer",
    description: "Description here",
};

export default function Disc() {
    return (
        <>
            <Disclaimer />
        </>
    );
}
