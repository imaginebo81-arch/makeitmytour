import React from 'react';
import { Hero } from '../components/Hero';
import { UpcomingTrips } from '../components/UpcomingTrips';
import { Destinations } from '../components/Destinations';
import { DomesticGetaways } from '../components/DomesticGetaways';
import { Testimonials } from '../components/Testimonials';
import { ContactUs } from '../components/ContactUs';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Destinations />
      <DomesticGetaways />
      <UpcomingTrips />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
