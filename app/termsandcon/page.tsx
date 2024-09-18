import TnC from "@/components/termsandcon";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditons",
    description: "Description here",
};

export default function Disc() {
    return (
        <>
            <TnC />
        </>
    );
}
