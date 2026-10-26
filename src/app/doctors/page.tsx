import { DoctorSection } from "@/components/sections/doctor-section";
import { pageDescriptions } from "@/content/site-copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Dr. Apexa Tuvar",
  description: pageDescriptions.doctors,
  path: "/doctors",
});

export default function DoctorsPage() {
  return <DoctorSection />;
}
