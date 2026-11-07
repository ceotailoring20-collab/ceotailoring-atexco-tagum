import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { B2BPartnership } from './components/B2BPartnership';
import { PortfolioGallery } from './components/PortfolioGallery';
import { ContactAndQuote } from './components/ContactAndQuote';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedQuantity, setSelectedQuantity] = useState<number | undefined>(undefined);
  const [quoteNotes, setQuoteNotes] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setQuoteNotes(`Inquiring about specifications and lead time for ${serviceTitle}.`);
    scrollToContact();
  };

  const handleSelectPlan = (planId: string, serviceType: string) => {
    setSelectedService(serviceType);
    setQuoteNotes(`Selected pricing plan: ${serviceType}. Please provide sample confirmation and timeline.`);
    scrollToContact();
  };

  const handleApplyCalculation = (data: {
    service: string;
    quantity: number;
    estimatedCost: number;
    notes: string;
  }) => {
    setSelectedService(data.service);
    setSelectedQuantity(data.quantity);
    setQuoteNotes(`${data.notes} (Estimated Project Budget: ₱${data.estimatedCost.toLocaleString()})`);
    scrollToContact();
  };

  const handleSelectPortfolioItem = (itemTitle: string) => {
    setSelectedService('Custom Jersey Manufacturing');
    setQuoteNotes(`Interested in custom production similar to our portfolio work: "${itemTitle}".`);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Top Contact Bar */}
      <TopBar />

      {/* Main Sticky Header */}
      <Header onOpenQuote={scrollToContact} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenQuote={scrollToContact}
          onOpenCalculator={scrollToCalculator}
        />

        {/* About Section */}
        <AboutSection />

        {/* Core Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Transparent Printing Rates Section */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
          onOpenCalculator={scrollToCalculator}
        />

        {/* Interactive Production Cost Calculator */}
        <QuoteCalculator onApplyCalculation={handleApplyCalculation} />

        {/* B2B Partnership Section */}
        <B2BPartnership onOpenQuote={scrollToContact} />

        {/* Our Works & Portfolio Gallery */}
        <PortfolioGallery onSelectPortfolioItem={handleSelectPortfolioItem} />

        {/* Contact Us & Price Quotation Request Form */}
        <ContactAndQuote
          initialService={selectedService}
          initialQuantity={selectedQuantity}
          initialNotes={quoteNotes}
        />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
