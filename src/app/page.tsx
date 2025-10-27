"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Building, Calendar, Crown, MessageCircle, Phone, Sparkles, ThumbsUp, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Royal Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Indulge in world-class hospitality at Grand Royal Hotel, where every moment becomes an unforgettable memory"
          tag="5-Star Luxury"
          tagIcon={Crown}
          imageSrc="https://images.pexels.com/photos/14012107/pexels-photo-14012107.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Royal Hotel exterior with elegant architecture"
          imagePosition="right"
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Grand Royal"
          description={[
            "For over 50 years, Grand Royal Hotel has been synonymous with luxury, elegance, and exceptional service. Located in the heart of the city, we offer an oasis of comfort and sophistication.",
            "Our commitment to excellence has earned us prestigious awards and the loyalty of discerning travelers from around the world."
          ]}
          buttons={[
            {
              text: "Our History",
              href: "history"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Discover exceptional facilities designed to enhance every aspect of your stay"
          tag="Facilities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind at our award-winning spa with premium treatments and wellness programs",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa treatment room"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by our Michelin-starred chefs in an elegant dining atmosphere",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fine dining restaurant interior"
            },
            {
              title: "State-of-Art Fitness Center",
              description: "Maintain your fitness routine with premium equipment and personal training services",
              imageSrc: "https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern hotel fitness center"
            },
            {
              title: "Infinity Pool & Deck",
              description: "Relax by our stunning infinity pool with panoramic city views and poolside service",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel infinity pool with city views"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxurious Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites"
          tag="Premium Rooms"
          tagIcon={Building}
          products={[
            {
              id: "deluxe-room",
              brand: "Grand Royal",
              name: "Deluxe City View Room",
              price: "$299/night",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe hotel room with city view"
            },
            {
              id: "luxury-suite",
              brand: "Grand Royal",
              name: "Luxury Executive Suite",
              price: "$599/night",
              rating: 5,
              reviewCount: "2.8k",
              imageSrc: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury executive suite interior"
            },
            {
              id: "presidential-suite",
              brand: "Grand Royal",
              name: "Presidential Suite",
              price: "$1,299/night",
              rating: 5,
              reviewCount: "856",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential suite living area"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Our commitment to exceptional service reflected in guest satisfaction"
          tag="Achievements"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "98",
              title: "percent",
              description: "Guest satisfaction rate",
              icon: ThumbsUp
            },
            {
              id: "2",
              value: "50",
              title: "years",
              description: "Of luxury hospitality experience",
              icon: Calendar
            },
            {
              id: "3",
              value: "15",
              title: "awards",
              description: "Industry recognition received",
              icon: Trophy
            },
            {
              id: "4",
              value: "500K",
              title: "guests",
              description: "Satisfied visitors annually",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear from our valued guests about their unforgettable stays"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              testimonial: "The Grand Royal exceeded all my expectations. The attention to detail and personalized service made my business trip truly memorable. I'll definitely be returning.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Blogger",
              testimonial: "As someone who's stayed at luxury hotels worldwide, Grand Royal stands out for its impeccable service and stunning facilities. The spa experience alone is worth the visit.",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Wedding Planner",
              testimonial: "We chose Grand Royal for our destination wedding and it was perfect. The staff went above and beyond to make our special day absolutely flawless.",
              imageSrc: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Corporate Director",
              testimonial: "The presidential suite was magnificent and the dining experience exceptional. Grand Royal has set a new standard for luxury hospitality in my opinion.",
              imageSrc: "https://images.pexels.com/photos/7567213/pexels-photo-7567213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Thompson"
            },
            {
              id: "5",
              name: "Lisa Williams",
              role: "Interior Designer",
              testimonial: "The design aesthetic and attention to luxury details throughout the hotel is inspiring. Every space feels thoughtfully curated and beautifully executed.",
              imageSrc: "https://images.pexels.com/photos/34415337/pexels-photo-34415337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa Williams"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Phone}
          title="Ready to Experience Luxury?"
          description="Contact our reservations team to plan your perfect stay at Grand Royal Hotel. We're here to make your visit extraordinary."
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Royal Hotel elegant lobby reception area"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Get In Touch"
          termsText="By contacting us, you agree to receive information about our services and special offers."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Events", href: "events" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Spa & Wellness", href: "spa" },
                { label: "Concierge", href: "concierge" },
                { label: "Room Service", href: "room-service" },
                { label: "Valet Parking", href: "parking" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Reservations", href: "https://booking.example.com" },
                { label: "Guest Services", href: "guest-services" },
                { label: "Special Requests", href: "special-requests" }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Royal Hotel"
        />
      </div>
    </ThemeProvider>
  );
}