import GetInTouch from "@/components/get-in-touch";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Description here",
};

export default function ContactPage() {
    return (
        <div>
            <GetInTouch />
        </div>
    );
}
