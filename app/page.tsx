import { JSX, lazy, Suspense } from "react";

// Critical components for the initial view (load immediately)
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Topbar from "@/components/Topbar";
import Services from "@/components/Services";

// Lazy load non-critical components
const About = lazy(() => import("@/components/About"));
const Drillingrigs = lazy(() => import("@/components/Drillingrigs"));
const Wireline = lazy(() => import("@/components/Wireline"));
const Pressurepumping = lazy(() => import("@/components/Pressurepumping"));
const Ourteam = lazy(() => import("@/components/Ourteam"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// A simple loading fallback component
const SectionLoader = () => <div className="py-20 text-center">Loading Section...</div>;

const Home = (): JSX.Element => {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <Services />

      {/* Wrap lazy components in Suspense */}
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Drillingrigs />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Wireline />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Pressurepumping />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Ourteam />
      </Suspense>

            <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>

      {/* --- Separator Line --- */}
      <div className="container mx-auto">
        <hr className="border-gray-700" />
      </div>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;