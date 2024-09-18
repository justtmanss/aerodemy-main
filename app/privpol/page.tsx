import PrivPoli from "@/components/privpol";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Description here",
};

export default function PrivPol() {
    return (
        <>
            <PrivPoli />
        </>
    );
}
