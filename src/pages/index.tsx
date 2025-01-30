import { NavBar } from "@/components/NavBar";
import { LandingBody } from "@/components/LandingBody";
import { LandingFooter } from "@/components/LandingFooter";
import { Introduction } from "@/components/Introduction";
import { Talent } from "@/components/Talent";
import { Job } from "@/components/Job";
import { FocusedPosition } from "@/components/FocusedPosition";
import { JoinUs } from "@/components/JoinUs";
import { ServiceContact } from "@/components/ServiceContact";
import { Community } from "@/components/Community";
import { FAQ } from "@/components/FAQ";

import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen flex flex-col">
        <NavBar />
        <LandingBody />
        <LandingFooter />
        <Introduction />
        <Talent />
        <Job />
        <FocusedPosition />
        <JoinUs />
        <ServiceContact />
        <Community />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
