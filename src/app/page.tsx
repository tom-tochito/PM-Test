import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AccessMarkets from "@/components/AccessMarkets";
import JoinTraders from "@/components/JoinTraders";
import OurMarkets from "@/components/OurMarkets";
import EmpowerTrading from "@/components/EmpowerTrading";
import SeamlessWithdrawals from "@/components/SeamlessWithdrawals";
import DailyUpdates from "@/components/DailyUpdates";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AccessMarkets />
        <JoinTraders />
        <OurMarkets />
        <EmpowerTrading />
        <SeamlessWithdrawals />
        <DailyUpdates />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
