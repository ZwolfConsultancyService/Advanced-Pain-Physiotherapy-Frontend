import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";


//sharma
import chiropractorImage from "../../../assets/sharma/1.png";
import Physiotherapy01 from "../../../assets/sharma/2.png";
import Physiotherapy from "../../../assets/sharma/3.png";
import backpain from "../../../assets/sharma/4.png";
import lymphatic from "../../../assets/sharma/5.png";
import sciatic from "../../../assets/sharma/6.png";
import slipdisc from "../../../assets/sharma/7.png";
import arthritis from "../../../assets/sharma/8.png";
import KneePain from "../../../assets/sharma/9.png";
import cervical from "../../../assets/sharma/10.png";
import ShoulderPain from "../../../assets/sharma/11.png";
import neck from "../../../assets/sharma/12.png";
import Cupping from "../../../assets/sharma/13.png";
import sportsMassageImage from "../../../assets/sharma/14.png";
import pain from "../../../assets/sharma/15.png";
import orthopedic from "../../../assets/sharma/16.png";
import parkinsons from "../../../assets/sharma/17.png";
import op from "../../../assets/sharma/18.png";
import Home from "../../../assets/sharma/19.png";
import affordablehome from "../../../assets/sharma/20.png";
// Dr. Ashish Sharma clinic template
const ashishClinicTemplate = {
  name: "Dr. Ashish Sharma",
  slug: "Ashish-physiotherapy-centre",
  rating: 5.0,
  tagline: "Excellence in Pain Management & Rehabilitation",
  specialty: "Advanced Pain Management & Holistic Rehabilitation",
  address: "10/16, Block 10 Nehru Enclave East, Kalkaji, New Delhi 110019",
  phone: "9220385419",
  hours: "8am To 8pm",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Advanced+Pain+Physiotherapy+Centre+Kalkaji+Delhi",
  image:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop",
   services: [
        {
          name: "Best Chiropractor",
          image:
            chiropractorImage,
        },
        {
          name: "Best Physiotherapy Center",
          image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
        },
        {
          name: "Best Physiotherapist",
          image:
            "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop",
        },
        {
          name: "Best Back Pain Treatment",
          image:
           backpain,
        },
        {
          name: "Best Lymphatic Drainage Therapy",
          image:
            "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=300&fit=crop",
        },
        {
          name: "Best Sciatica Pain Treatment",
          image:
           sciatic,
        },
        {
          name: "Best Slip Disc Treatment",
          image:
            slipdisc,
        },
        {
          name: "Best Arthritis Treatment",
          image:
            arthritis,
        },
        {
          name: "Best Knee Pain Treatment",
          image:
            KneePain,
        },
        {
          name: "Best Cervical Pain Treatment",
          image:
           cervical,
        },
        {
          name: "Best Shoulder Pain Treatment",
          image:
            ShoulderPain,
        },
        {
          name: "Best Neck Spasm Treatment",
          image:
            neck,
        },
        {
          name: "Best Cupping Therapy",
          image:
           Cupping,
        },
        {
          name: "Best Sports Massage Therapy",
          image:
            sportsMassageImage,
        },
        {
          name: "Best Pain Relief Treatment",
          image:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        },
        {
          name: "Best Orthopedic Rehab",
          image:
           orthopedic,
        },
        {
          name: "Best Parkinson's Treatment",
          image:
            parkinsons,
        },
        {
          name: "Best Post-Op Physiotherapy Treatment",
          image:
            "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&h=300&fit=crop",
        },
        {
          name: "Best Home Physiotherapy",
          image:
            Home,
        },
        {
          name: "Affordable Home Physiotherapy",
          image:
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
        },
      ],
};

// Sharma Orthopedic clinic template
const sharmaClinicTemplate = {
  name: "Sharma Orthopedic and Rehab Centre",
  slug: "sharma-orthopedic-rehab-centre",
  rating: 4.9,
  tagline: "Your Partner in Complete Recovery",
  specialty: "Specialized Spine & Back Pain Treatment",
  address:
    "G 243 40 Feet Road, Near Aggarwal Medical Store, Badarpur, New Delhi 110044",
  phone: "9220385419",
  hours: "8am To 10pm",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Sharma+Orthopedic+Rehab+Center+G+241+40+Feet+Road+Badarpur+Delhi",
  image:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop",
  
   services: [
        {
          name: "Best Chiropractor",
          image: chiropractorImage,
        },
        {
          name: "Best Physiotherapy Center",
          image: Physiotherapy01,
        },
        {
          name: "Best Physiotherapist",
          image: Physiotherapy,
        },
        {
          name: "Best Back Pain Treatment",
          image: backpain,
        },
        {
          name: "Best Lymphatic Massage Therapist",
          image: lymphatic,
        },
        {
          name: "Best Sciatica Pain Treatment",
          image: sciatic,
        },
        {
          name: "Best Slip Disc Treatment",
          image: slipdisc,
        },
        {
          name: "Best Arthritis Treatment",
          image: arthritis,
        },
        {
          name: "Best Knee Pain Treatment",
          image: KneePain,
        },
        {
          name: "Best Cervical Pain Treatment",
          image: cervical,
        },
        {
          name: "Best Shoulder Pain Treatment",
          image: ShoulderPain,
        },
        {
          name: "Best Neck Spasm Treatment",
          image: neck,
        },
        {
          name: "Best Cupping Therapy",
          image: Cupping,
        },
        {
          name: "Best Sports Massage Therapy",
          image: sportsMassageImage,
        },
        {
          name: "Best Pain Relief Treatment",
          image: pain,
        },
        {
          name: "Best Orthopedic Rehab",
          image: orthopedic,
        },
        {
          name: "Best Parkinson's Treatment",
          image: parkinsons,
        },
        {
          name: "Best Post-Op Physiotherapy Treatment",
          image: op,
        },
        {
          name: "Best Home Physiotherapy",
          image: Home,
        },
        {
          name: "Affordable Home Physiotherapy",
          image: affordablehome,
        },
      ],
};

// South Delhi locations for Dr. Ashish Sharma
const southDelhiLocations = {
  // Kalkaji and surrounding areas
  "golf-links": {
    name: "Golf Links",
    title: "Best Physiotherapist Near Me In Golf Links",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Khan Market",
      "Jor Bagh",
      "Lodhi Road",
      "Pragati Vihar",
      "Nizamuddin East",
      "India Gate",
      "Sunder Nagar",
      "Lodhi Colony",
      "Delhi Golf Club",
    ],
  },

  "jor-bagh": {
    name: "Jor Bagh",
    title: "Best Physiotherapist Near Me In Jor Bagh",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Golf Links",
      "Khan Market",
      "Lodhi Road",
      "Lodhi Colony",
      "Safdarjung Road",
      "India Gate",
      "Nizamuddin East",
      "Pragati Vihar",
      "Sunder Nagar",
    ],
  },

  "nizamuddin-east": {
    name: "Nizamuddin East",
    title: "Best Physiotherapist Near Me In Nizamuddin East",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Nizamuddin West",
      "Jor Bagh",
      "Golf Links",
      "Sunder Nagar",
      "Khan Market",
      "Lodhi Road",
      "Pragati Vihar",
      "India Gate",
      "Lodhi Colony",
    ],
  },

  "nizamuddin-west": {
    name: "Nizamuddin West",
    title: "Best Physiotherapist Near Me In Nizamuddin West",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Nizamuddin East",
      "Hazrat Nizamuddin",
      "Lajpat Nagar",
      "Jangpura",
      "Bhogal",
      "Sunder Nagar",
      "Pragati Vihar",
      "India Gate",
    ],
  },

  kalkaji: {
    name: "Kalkaji",
    title: "Best Physiotherapist Near Me In Kalkaji",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Nehru Enclave",
      "Kalkaji DDA Flats",
      "Govind Puri",
      "Okhla",
      "East of Kailash",
      "CR Park",
      "Greater Kailash",
      "Nehru Place",
      "Moolchand",
    ],
  },
  "nehru-enclave": {
    name: "Nehru Enclave",
    title: "Best Physiotherapist Near Me In Nehru Enclave",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji",
      "Kalkaji DDA Flats",
      "East of Kailash",
      "CR Park",
      "Greater Kailash",
      "Nehru Place",
      "Govind Puri",
      "Okhla",
    ],
  },

  "kalkaji-dda-flats": {
    name: "Kalkaji DDA Flats",
    title: "Best Physiotherapist Near Me In Kalkaji DDA Flats",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji",
      "Govind Puri",
      "Nehru Enclave",
      "Okhla",
      "CR Park",
      "Greater Kailash",
      "Nehru Place",
      "East of Kailash",
      "Alaknanda",
    ],
  },

  "greater-kailash": {
    name: "Greater Kailash",
    title: "Best Physiotherapist Near Me In Greater Kailash",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji",
      "Nehru Enclave",
      "East of Kailash",
      "CR Park",
      "South Extension",
      "Alaknanda",
      "Nehru Place",
      "Kailash Colony",
    ],
  },
  "cr-park": {
    name: "CR Park",
    title: "Best Physiotherapist Near Me In CR Park (Chittaranjan Park)",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji",
      "Nehru Enclave",
      "Greater Kailash",
      "East of Kailash",
      "Alaknanda",
      "Govind Puri",
      "Nehru Place",
      "Kailash Colony",
    ],
  },
  "east-of-kailash": {
    name: "East of Kailash",
    title: "Best Physiotherapist Near Me In East of Kailash",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji",
      "Nehru Enclave",
      "Greater Kailash",
      "CR Park",
      "Kailash Colony",
      "Nehru Place",
      "Moolchand",
      "Govind Puri",
    ],
  },
  "south-extension": {
    name: "South Extension",
    title: "Best Physiotherapist Near Me In South Extension",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Greater Kailash",
      "Lajpat Nagar",
      "Defence Colony",
      "Jangpura",
      "Kailash Colony",
      "Nehru Place",
      "Kalkaji",
      "East of Kailash",
    ],
  },
  "lajpat-nagar": {
    name: "Lajpat Nagar",
    title: "Best Physiotherapist Near Me In Lajpat Nagar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "South Extension",
      "Defence Colony",
      "Jangpura",
      "Moolchand",
      "Kalkaji",
      "Nehru Place",
      "Greater Kailash",
      "Kailash Colony",
    ],
  },
  "defence-colony": {
    name: "Defence Colony",
    title: "Best Physiotherapist Near Me In Defence Colony",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Lajpat Nagar",
      "South Extension",
      "Jangpura",
      "Nizamuddin",
      "Greater Kailash",
      "Kalkaji",
      "Moolchand",
      "Kailash Colony",
    ],
  },
  "green-park": {
    name: "Green Park",
    title: "Best Physiotherapist Near Me In Green Park",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Hauz Khas",
      "Safdarjung",
      "South Extension",
      "Malviya Nagar",
      "Saket",
      "Aurobindo Marg",
      "Greater Kailash",
      "Kalkaji",
    ],
  },
  "hauz-khas": {
    name: "Hauz Khas",
    title: "Best Physiotherapist Near Me In Hauz Khas",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Green Park",
      "Safdarjung",
      "Malviya Nagar",
      "Saket",
      "South Extension",
      "Greater Kailash",
      "Aurobindo Marg",
      "Kalkaji",
    ],
  },
  saket: {
    name: "Saket",
    title: "Best Physiotherapist Near Me In Saket",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Malviya Nagar",
      "Hauz Khas",
      "Green Park",
      "Greater Kailash",
      "Mehrauli",
      "Panchsheel Park",
      "Alaknanda",
      "Kalkaji",
    ],
  },
  "malviya-nagar": {
    name: "Malviya Nagar",
    title: "Best Physiotherapist Near Me In Malviya Nagar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Saket",
      "Hauz Khas",
      "Green Park",
      "Panchsheel Park",
      "Greater Kailash",
      "Mehrauli",
      "Safdarjung",
      "Kalkaji",
    ],
  },
  "nehru-place": {
    name: "Nehru Place",
    title: "Best Physiotherapist Near Me In Nehru Place",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji",
      "Nehru Enclave",
      "Greater Kailash",
      "East of Kailash",
      "Moolchand",
      "Kailash Colony",
      "Okhla",
      "Govind Puri",
    ],
  },
  okhla: {
    name: "Okhla",
    title: "Best Physiotherapist Near Me In Okhla",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji",
      "Nehru Place",
      "Govind Puri",
      "New Friends Colony",
      "Jasola",
      "Nehru Enclave",
      "East of Kailash",
      "Moolchand",
    ],
  },
  "new-friends-colony": {
    name: "New Friends Colony",
    title: "Best Physiotherapist Near Me In New Friends Colony",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Okhla",
      "Maharani Bagh",
      "East of Kailash",
      "Nehru Place",
      "Kalkaji",
      "Jasola",
      "Greater Kailash",
      "Govind Puri",
    ],
  },
  moolchand: {
    name: "Moolchand",
    title: "Best Physiotherapist Near Me In Moolchand",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kailash Colony",
      "East of Kailash",
      "Lajpat Nagar",
      "Kalkaji",
      "Nehru Place",
      "Alaknanda",
      "CR Park",
      "AIIMS",
    ],
  },

  "kailash-colony": {
    name: "Kailash Colony",
    title: "Best Physiotherapist Near Me In Kailash Colony",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Moolchand",
      "East of Kailash",
      "Greater Kailash",
      "Lajpat Nagar",
      "Nehru Place",
      "Kalkaji",
      "CR Park",
    ],
  },

  alaknanda: {
    name: "Alaknanda",
    title: "Best Physiotherapist Near Me In Alaknanda",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji",
      "Govind Puri",
      "CR Park",
      "Greater Kailash",
      "Chittaranjan Park",
      "Nehru Place",
      "Okhla",
    ],
  },

  "panchsheel-Park": {
    name: "Panchsheel Park",
    title: "Best Physiotherapist Near Me In Panchsheel Park",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Malviya Nagar",
      "Hauz Khas",
      "Sheikh Sarai",
      "Greater Kailash",
      "Saket",
      "Chirag Delhi",
      "Green Park",
    ],
  },

  "safdarjung-enclave": {
    name: "Safdarjung Enclave",
    title: "Best Physiotherapist Near Me In Safdarjung Enclave",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Green Park",
      "Hauz Khas",
      "AIIMS",
      "Sarojini Nagar",
      "South Extension",
      "Vasant Vihar",
      "INA",
    ],
  },

  "andrews-ganj": {
    name: "Andrews Ganj",
    title: "Best Physiotherapist Near Me In Andrews Ganj",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "South Extension",
      "Lajpat Nagar",
      "AIIMS",
      "Ansari Nagar",
      "Sadiq Nagar",
      "Niti Bagh",
      "Green Park",
    ],
  },

  "govind-puri": {
    name: "Govind Puri",
    title: "Best Physiotherapist Near Me In Govind Puri",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji",
      "Kalkaji DDA Flats",
      "Alaknanda",
      "CR Park",
      "Okhla",
      "Nehru Place",
      "Greater Kailash",
    ],
  },

  "maharani-bagh": {
    name: "Maharani Bagh",
    title: "Best Physiotherapist Near Me In Maharani Bagh",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "New Friends Colony",
      "Jangpura",
      "Ashram",
      "Sukhdev Vihar",
      "Nizamuddin East",
      "Okhla",
      "Bhogal",
    ],
  },

  jangpura: {
    name: "Jangpura",
    title: "Best Physiotherapist Near Me In Jangpura",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Bhogal",
      "Maharani Bagh",
      "Nizamuddin West",
      "Ashram",
      "Lajpat Nagar",
      "New Friends Colony",
    ],
  },

  "siri-fort": {
    name: "Siri Fort",
    title: "Best Physiotherapist Near Me In Siri Fort",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Hauz Khas",
      "Panchsheel Park",
      "Green Park",
      "Sheikh Sarai",
      "Malviya Nagar",
    ],
  },

  "moti-bagh": {
    name: "Moti Bagh",
    title: "Best Physiotherapist Near Me In Moti Bagh",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Chanakyapuri",
      "Dhaula Kuan",
      "Niti Bagh",
      "Vasant Vihar",
      "Safdarjung Enclave",
    ],
  },

  "niti-bagh": {
    name: "Niti Bagh",
    title: "Best Physiotherapist Near Me In Niti Bagh",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Gulmohar Park",
      "Green Park",
      "South Extension",
      "Safdarjung Enclave",
      "AIIMS",
    ],
  },

  "sadiq-nagar": {
    name: "Sadiq Nagar",
    title: "Best Physiotherapist Near Me In Sadiq Nagar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Ansari Nagar",
      "AIIMS",
      "South Extension",
      "Green Park",
      "Andrews Ganj",
    ],
  },

  aiims: {
    name: "AIIMS",
    title: "Best Physiotherapist Near Me In AIIMS",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Ansari Nagar",
      "Safdarjung Enclave",
      "Green Park",
      "South Extension",
      "Sadiq Nagar",
    ],
  },

  "ansari-nagar": {
    name: "Ansari Nagar",
    title: "Best Physiotherapist Near Me In Ansari Nagar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "AIIMS",
      "Sadiq Nagar",
      "Green Park",
      "South Extension",
      "Andrews Ganj",
    ],
  },
  sda: {
    name: "SDA",
    title: "Best Physiotherapist Near Me In SDA",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Hauz Khas",
      "Safdarjung Enclave",
      "Green Park",
      "AIIMS",
      "Sarojini Nagar",
    ],
  },

  "ring-road": {
    name: "Ring Road",
    title: "Best Physiotherapist Near Me Near Ring Road",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["AIIMS", "South Extension", "Lajpat Nagar", "Ashram", "INA"],
  },

  "jasola-apollo": {
    name: "Jasola Apollo",
    title: "Best Physiotherapist Near Me In Jasola Apollo",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Apollo Hospital",
      "Sarita Vihar",
      "New Friends Colony",
      "Okhla",
      "Sukhdev Vihar",
    ],
  },

  "katwaria-sarai": {
    name: "Katwaria Sarai",
    title: "Best Physiotherapist Near Me In Katwaria Sarai",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "IIT Delhi",
      "Hauz Khas",
      "Munirka",
      "Vasant Vihar",
      "R.K. Puram",
    ],
  },

  chanakyapuri: {
    name: "Chanakyapuri",
    title: "Best Physiotherapist Near Me In Chanakyapuri",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Moti Bagh",
      "Niti Bagh",
      "Dhaula Kuan",
      "Shantipath",
      "Vasant Vihar",
    ],
  },

  "jln-stadium": {
    name: "JLN Stadium",
    title: "Best Physiotherapist Near Me Near JLN Stadium",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "India Gate",
      "Lodhi Road",
      "Pragati Maidan",
      "Sunder Nagar",
      "Nizamuddin East",
    ],
  },

  "kidwai-nagar": {
    name: "Kidwai Nagar",
    title: "Best Physiotherapist Near Me In Kidwai Nagar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "AIIMS",
      "INA",
      "South Extension",
      "Safdarjung Enclave",
      "Ansari Nagar",
    ],
  },

  "dakshin-puri": {
    name: "Dakshin Puri",
    title: "Best Physiotherapist Near Me In Dakshin Puri",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Ambedkar Nagar",
      "Khanpur",
      "Malviya Nagar",
      "Saket",
      "Tigri",
    ],
  },
  "mahipal-pur": {
    name: "Mahipal Pur",
    title: "Best Physiotherapist Near Me In Mahipal Pur",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Vasant Kunj", "Dhaula Kuan", "Aerocity", "Munirka", "Palam"],
  },

  "vasant-kunj": {
    name: "Vasant Kunj",
    title: "Best Physiotherapist Near Me In Vasant Kunj",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Mehrauli",
      "Chhatarpur",
      "Saket",
      "Katwaria Sarai",
      "Munirka",
    ],
  },

  "fatehpur-beri": {
    name: "Fatehpur Beri",
    title: "Best Physiotherapist Near Me In Fatehpur Beri",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Chhatarpur",
      "Mehrauli",
      "Ghitorni",
      "Vasant Kunj",
      "Aya Nagar",
    ],
  },

  mehrauli: {
    name: "Mehrauli",
    title: "Best Physiotherapist Near Me In Mehrauli",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Saket",
      "Qutub Minar",
      "Chhatarpur",
      "Vasant Kunj",
      "Neb Sarai",
    ],
  },

  "sarojini-nagar": {
    name: "Sarojini Nagar",
    title: "Best Physiotherapist Near Me In Sarojini Nagar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Safdarjung Enclave",
      "INA",
      "AIIMS",
      "South Extension",
      "Chanakyapuri",
    ],
  },

  "yusuf-sarai": {
    name: "Yusuf Sarai",
    title: "Best Physiotherapist Near Me In Yusuf Sarai",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Green Park",
      "AIIMS",
      "Gautam Nagar",
      "Hauz Khas",
      "Safdarjung Enclave",
    ],
  },

  "aurobindo-marg": {
    name: "Aurobindo Marg",
    title: "Best Physiotherapist Near Me Near Aurobindo Marg",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Green Park", "Hauz Khas", "Saket", "AIIMS", "Mehrauli"],
  },

  "sheikh-sarai": {
    name: "Sheikh Sarai",
    title: "Best Physiotherapist Near Me In Sheikh Sarai",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Panchsheel Park",
      "Malviya Nagar",
      "Saket",
      "Hauz Khas",
      "Neb Sarai",
    ],
  },

  "neb-sarai": {
    name: "Neb Sarai",
    title: "Best Physiotherapist Near Me In Neb Sarai",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Saket",
      "Sheikh Sarai",
      "Mehrauli",
      "IGNOU Road",
      "Chhatarpur",
    ],
  },

  "ignou-road": {
    name: "IGNOU Road",
    title: "Best Physiotherapist Near Me Near IGNOU Road",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Neb Sarai",
      "Saket",
      "Mehrauli",
      "Sheikh Sarai",
      "Chhatarpur",
    ],
  },

  "delhi-haat": {
    name: "Delhi Haat",
    title: "Best Physiotherapist Near Me Near Delhi Haat",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "INA",
      "AIIMS",
      "South Extension",
      "Sarojini Nagar",
      "Kidwai Nagar",
    ],
  },
  devli: {
    name: "Devli",
    title: "Best Physiotherapist Near Me In Devli",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Khanpur",
      "Sangam Vihar",
      "Tigri",
      "Dakshin Puri",
      "Madangiri",
    ],
  },

  tigri: {
    name: "Tigri",
    title: "Best Physiotherapist Near Me In Tigri",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Dakshin Puri",
      "Khanpur",
      "Madangiri",
      "Sangam Vihar",
      "Devli",
    ],
  },

  khanpur: {
    name: "Khanpur",
    title: "Best Physiotherapist Near Me In Khanpur",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Devli",
      "Tigri",
      "Madangiri",
      "Sangam Vihar",
      "Malviya Nagar",
    ],
  },

  madangiri: {
    name: "Madangiri",
    title: "Best Physiotherapist Near Me In Madangiri",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Tigri",
      "Dakshin Puri",
      "Khanpur",
      "Devli",
      "Ambedkar Nagar",
    ],
  },

  "sant-nagar": {
    name: "Sant Nagar",
    title: "Best Physiotherapist Near Me In Sant Nagar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Burari",
      "Civil Lines",
      "Malka Ganj",
      "Mukherjee Nagar",
      "Timarpur",
    ],
  },

  "sainik-farm": {
    name: "Sainik Farm",
    title: "Best Physiotherapist Near Me In Sainik Farm",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Neb Sarai",
      "Malviya Nagar",
      "Saket",
      "Khanpur",
      "Chhatarpur",
    ],
  },

  ashram: {
    name: "Ashram",
    title: "Best Physiotherapist Near Me In Ashram",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Maharani Bagh",
      "Jangpura",
      "Bhogal",
      "New Friends Colony",
      "Lajpat Nagar",
    ],
  },

  "lutyens-delhi": {
    name: "Lutyens Delhi",
    title: "Best Physiotherapist Near Me In Lutyens Delhi",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "India Gate",
      "Connaught Place",
      "Chanakyapuri",
      "JLN Stadium",
      "Lodhi Road",
    ],
  },

  humayunpur: {
    name: "Humayunpur",
    title: "Best Physiotherapist Near Me In Humayunpur",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Safdarjung Enclave",
      "Green Park",
      "Hauz Khas",
      "Sarojini Nagar",
      "Yusuf Sarai",
    ],
  },

  "shahpur-jaat": {
    name: "Shahpur Jaat",
    title: "Best Physiotherapist Near Me In Shahpur Jaat",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Hauz Khas",
      "Panchsheel Park",
      "Green Park",
      "Sheikh Sarai",
      "Malviya Nagar",
    ],
  },

  "sangam-vihar": {
    name: "Sangam Vihar",
    title: "Best Physiotherapist Near Me In Sangam Vihar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Khanpur", "Devli", "Tigri", "Sainik Farm", "Neb Sarai"],
  },

  "chirag-delhi": {
    name: "Chirag Delhi",
    title: "Best Physiotherapist Near Me In Chirag Delhi",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Panchsheel Park",
      "Greater Kailash",
      "Hauz Khas",
      "Sheikh Sarai",
      "Malviya Nagar",
    ],
  },
  "kalkaji-block-b": {
    name: "Kalkaji Block B",
    title: "Best Physiotherapist Near Me In Kalkaji Block B",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji",
      "Kalkaji Block A",
      "Kalkaji Block C",
      "Nehru Place",
      "Govind Puri",
    ],
  },

  "kalkaji-block-a": {
    name: "Kalkaji Block A",
    title: "Best Physiotherapist Near Me In Kalkaji Block A",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji Block B",
      "Kalkaji Block C",
      "Nehru Place",
      "CR Park",
    ],
  },

  "kalkaji-block-e": {
    name: "Kalkaji Block E",
    title: "Best Physiotherapist Near Me In Kalkaji Block E",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji Block C",
      "Kalkaji Block G",
      "Govind Puri",
      "Nehru Place",
    ],
  },

  "kalkaji-block-c": {
    name: "Kalkaji Block C",
    title: "Best Physiotherapist Near Me In Kalkaji Block C",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji Block A",
      "Kalkaji Block B",
      "Kalkaji Block E",
      "CR Park",
    ],
  },

  "kalkaji-block-g": {
    name: "Kalkaji Block G",
    title: "Best Physiotherapist Near Me In Kalkaji Block G",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji Block H",
      "Kalkaji Block E",
      "Govind Puri",
      "Alaknanda",
    ],
  },

  "kalkaji-block-h": {
    name: "Kalkaji Block H",
    title: "Best Physiotherapist Near Me In Kalkaji Block H",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Kalkaji Block G", "Kalkaji Block I", "Alaknanda", "CR Park"],
  },

  "kalkaji-block-i": {
    name: "Kalkaji Block I",
    title: "Best Physiotherapist Near Me In Kalkaji Block I",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji Block H",
      "Kalkaji Block D",
      "Govind Puri",
      "Alaknanda",
    ],
  },

  "kalkaji-block-d": {
    name: "Kalkaji Block D",
    title: "Best Physiotherapist Near Me In Kalkaji Block D",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji Block C",
      "Kalkaji Block I",
      "Nehru Place",
      "CR Park",
    ],
  },

  "kalkaji-block-l": {
    name: "Kalkaji Block L",
    title: "Best Physiotherapist Near Me In Kalkaji Block L",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Kalkaji Block M", "Govind Puri", "Alaknanda", "CR Park"],
  },

  "kalkaji-block-m": {
    name: "Kalkaji Block M",
    title: "Best Physiotherapist Near Me In Kalkaji Block M",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji Block L",
      "Govind Puri",
      "Sangam Vihar",
      "Alaknanda",
    ],
  },

  "kalkaji-block-cc": {
    name: "Kalkaji Block CC",
    title: "Best Physiotherapist Near Me In Kalkaji Block CC",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Kalkaji Extension", "Govind Puri", "CR Park", "Nehru Place"],
  },

  "kalkaji-block-r": {
    name: "Kalkaji Block R",
    title: "Best Physiotherapist Near Me In Kalkaji Block R",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Kalkaji Extension", "Alaknanda", "Govind Puri", "CR Park"],
  },

  "kalkaji-block-16": {
    name: "Kalkaji Block 16",
    title: "Best Physiotherapist Near Me In Kalkaji Block 16",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Kalkaji Extension", "Govind Puri", "CR Park", "Alaknanda"],
  },

  "kalkaji-block-14": {
    name: "Kalkaji Block 14",
    title: "Best Physiotherapist Near Me In Kalkaji Block 14",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Kalkaji Extension", "Nehru Place", "CR Park", "Govind Puri"],
  },

  "kalkaji-block-17": {
    name: "Kalkaji Block 17",
    title: "Best Physiotherapist Near Me In Kalkaji Block 17",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Kalkaji Extension", "Alaknanda", "CR Park", "Govind Puri"],
  },

  "kalkaji-block-19": {
    name: "Kalkaji Block 19",
    title: "Best Physiotherapist Near Me In Kalkaji Block 19",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Kalkaji Extension", "Govind Puri", "Alaknanda", "CR Park"],
  },

  "kalkaji-extension": {
    name: "Kalkaji Extension",
    title: "Best Physiotherapist Near Me In Kalkaji Extension",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji Block CC",
      "Kalkaji Block R",
      "Kalkaji Block 14",
      "Kalkaji Block 16",
      "Govind Puri",
      "Alaknanda",
    ],
  },
  "-giri-nagar": {
    name: "Giri Nagar",
    title: "Best Physiotherapist Near Me In Giri Nagar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji",
      "Govind Puri",
      "Alaknanda",
      "CR Park",
      "Nehru Place",
    ],
  },

  "shyam-nagar": {
    name: "Shyam Nagar",
    title: "Best Physiotherapist Near Me In Shyam Nagar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Tilak Nagar",
      "Subhash Nagar",
      "Rajouri Garden",
      "Vishnu Garden",
      "Tagore Garden",
    ],
  },

  vinobhapuri: {
    name: "Vinobhapuri",
    title: "Best Physiotherapist Near Me In Vinobhapuri",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Lajpat Nagar", "Moolchand", "Ashram", "Jangpura", "Bhogal"],
  },

  "south-extension-i": {
    name: "South Extension I",
    title: "Best Physiotherapist Near Me In South Extension I",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "South Extension II",
      "AIIMS",
      "Green Park",
      "Lajpat Nagar",
      "Safdarjung Enclave",
    ],
  },

  "south-extension-ii": {
    name: "South Extension II",
    title: "Best Physiotherapist Near Me In South Extension II",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "South Extension I",
      "AIIMS",
      "Kotla Mubarakpur",
      "Green Park",
      "Lajpat Nagar",
    ],
  },
  "greater-kailash-i": {
    name: "Greater Kailash I",
    title: "Best Physiotherapist Near Me In Greater Kailash I",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kailash Colony",
      "CR Park",
      "Nehru Place",
      "East of Kailash",
      "Greater Kailash II",
    ],
  },

  "greater-kailash-i-block-a": {
    name: "Greater Kailash I Block A",
    title: "Best Physiotherapist Near Me In Greater Kailash I Block A",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Greater Kailash I", "Kailash Colony", "CR Park"],
  },

  "greater-kailash-i-block-b": {
    name: "Greater Kailash I Block B",
    title: "Best Physiotherapist Near Me In Greater Kailash I Block B",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Greater Kailash I", "Nehru Place", "East of Kailash"],
  },

  "greater-kailash-i-block-c": {
    name: "Greater Kailash I Block C",
    title: "Best Physiotherapist Near Me In Greater Kailash I Block C",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Greater Kailash I", "CR Park", "Kailash Colony"],
  },

  "greater-kailash-i-block-e": {
    name: "Greater Kailash I Block E",
    title: "Best Physiotherapist Near Me In Greater Kailash I Block E",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Greater Kailash I", "Nehru Place", "CR Park"],
  },

  "greater-kailash-i-block-m": {
    name: "Greater Kailash I Block M",
    title: "Best Physiotherapist Near Me In Greater Kailash I Block M",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Greater Kailash I", "East of Kailash", "Kailash Colony"],
  },

  "greater-kailash-i-block-n": {
    name: "Greater Kailash I Block N",
    title: "Best Physiotherapist Near Me In Greater Kailash I Block N",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Greater Kailash I", "CR Park", "Alaknanda"],
  },

  "greater-kailash-i-block-r": {
    name: "Greater Kailash I Block R",
    title: "Best Physiotherapist Near Me In Greater Kailash I Block R",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Greater Kailash I", "Nehru Place", "East of Kailash"],
  },

  "greater-kailash-i-block-s": {
    name: "Greater Kailash I Block S",
    title: "Best Physiotherapist Near Me In Greater Kailash I Block S",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Greater Kailash I", "CR Park", "Kailash Colony"],
  },

  "greater-kailash-i-block-w": {
    name: "Greater Kailash I Block W",
    title: "Best Physiotherapist Near Me In Greater Kailash I Block W",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Greater Kailash I", "East of Kailash", "Nehru Place"],
  },
  "greater-kailash-ii": {
    name: "Greater Kailash II",
    title: "Best Physiotherapist Near Me In Greater Kailash II",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Greater Kailash I",
      "Alaknanda",
      "CR Park",
      "Kalkaji",
      "East of Kailash",
    ],
  },

  "greater-kailash-enclave": {
    name: "Greater Kailash Enclave",
    title: "Best Physiotherapist Near Me In Greater Kailash Enclave",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Greater Kailash II", "Alaknanda", "CR Park", "Kalkaji"],
  },
  "cr-park-block-a": {
    name: "CR Park Block A",
    title: "Best Physiotherapist Near Me In CR Park Block A",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Block B", "Greater Kailash I", "Alaknanda"],
  },

  "cr-park-block-b": {
    name: "CR Park Block B",
    title: "Best Physiotherapist Near Me In CR Park Block B",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Block A", "CR Park Block C", "Greater Kailash I"],
  },

  "cr-park-block-c": {
    name: "CR Park Block C",
    title: "Best Physiotherapist Near Me In CR Park Block C",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Block B", "CR Park Block D", "Alaknanda"],
  },

  "cr-park-block-d": {
    name: "CR Park Block D",
    title: "Best Physiotherapist Near Me In CR Park Block D",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Block C", "CR Park Block E", "Greater Kailash II"],
  },

  "cr-park-block-e": {
    name: "CR Park Block E",
    title: "Best Physiotherapist Near Me In CR Park Block E",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Block D", "CR Park Block F", "Alaknanda"],
  },

  "cr-park-block-f": {
    name: "CR Park Block F",
    title: "Best Physiotherapist Near Me In CR Park Block F",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Block E", "CR Park Block G", "Greater Kailash II"],
  },

  "cr-park-block-g": {
    name: "CR Park Block G",
    title: "Best Physiotherapist Near Me In CR Park Block G",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Block F", "CR Park Block H", "Alaknanda"],
  },

  "cr-park-block-h": {
    name: "CR Park Block H",
    title: "Best Physiotherapist Near Me In CR Park Block H",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Block G", "CR Park Block I", "Greater Kailash II"],
  },

  "cr-park-block-i": {
    name: "CR Park Block I",
    title: "Best Physiotherapist Near Me In CR Park Block I",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Block H", "CR Park Block J", "Alaknanda"],
  },

  "cr-park-block-j": {
    name: "CR Park Block J",
    title: "Best Physiotherapist Near Me In CR Park Block J",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Block I", "CR Park Block K", "Greater Kailash II"],
  },

  "cr-park-block-k": {
    name: "CR Park Block K",
    title: "Best Physiotherapist Near Me In CR Park Block K",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Block J", "CR Park Pocket K-1", "Alaknanda"],
  },

  "cr-park-block-pocket-k-1": {
    name: "CR Park Block Pocket K-1",
    title: "Best Physiotherapist Near Me In CR Park Block Pocket K-1",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Block K", "CR Park Pocket 40", "Alaknanda"],
  },

  "cr-park-block-pocket-40": {
    name: "CR Park Block Pocket 40",
    title: "Best Physiotherapist Near Me In CR Park Block Pocket 40",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "CR Park Pocket K-1",
      "CR Park Pocket 52",
      "Greater Kailash II",
    ],
  },

  "cr-park-block-pocket-52": {
    name: "CR Park Block Pocket 52",
    title: "Best Physiotherapist Near Me In CR Park Block Pocket 52",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Pocket 40", "CR Park Pocket M", "Alaknanda"],
  },

  "cr-park-block-pocket-m": {
    name: "CR Park Block Pocket M",
    title: "Best Physiotherapist Near Me In CR Park Block Pocket M",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "CR Park Pocket 52",
      "CR Park Pocket N",
      "Greater Kailash II",
    ],
  },

  "cr-park-block-pocket-n": {
    name: "CR Park Block Pocket N",
    title: "Best Physiotherapist Near Me In CR Park Block Pocket N",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["CR Park Pocket M", "Alaknanda", "Greater Kailash II"],
  },
  "harkesh-nagar": {
    name: "Harkesh Nagar",
    title: "Best Physiotherapist Near Me In Harkesh Nagar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Okhla",
      "Govind Puri",
      "Kalkaji",
      "Jasola",
      "New Friends Colony",
    ],
  },
  "west-land-avenue": {
    name: "West Land Avenue",
    title: "Best Physiotherapist Near Me In West Land Avenue",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Chirag Delhi",
      "Greater Kailash",
      "Hauz Khas",
      "Sheikh Sarai",
      "Panchsheel Park",
    ],
  },

  "adhi-chini": {
    name: "Adhi Chini",
    title: "Best Physiotherapist Near Me In Adhi Chini",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Malviya Nagar",
      "Saket",
      "Hauz Khas",
      "Panchsheel Park",
      "Sheikh Sarai",
    ],
  },

  "okhla-phase-i": {
    name: "Okhla Phase I",
    title: "Best Physiotherapist Near Me In Okhla Phase I",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Okhla Phase II",
      "Harkesh Nagar",
      "Govind Puri",
      "Kalkaji",
      "Jasola",
    ],
  },

  "okhla-phase-ii": {
    name: "Okhla Phase II",
    title: "Best Physiotherapist Near Me In Okhla Phase II",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Okhla Phase I",
      "Harkesh Nagar",
      "Jasola",
      "New Friends Colony",
      "Kalkaji",
    ],
  },

  "new-friends-colony-east": {
    name: "New Friends Colony East",
    title: "Best Physiotherapist Near Me In New Friends Colony East",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Ashram",
      "Maharani Bagh",
      "Jangpura",
      "Okhla",
      "Sukhdev Vihar",
    ],
  },

  "new-friends-colony-west": {
    name: "New Friends Colony West",
    title: "Best Physiotherapist Near Me In New Friends Colony West",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Ashram", "Bhogal", "Jangpura", "Maharani Bagh", "Okhla"],
  },

  "hauz-khas-enclave": {
    name: "Hauz Khas Enclave",
    title: "Best Physiotherapist Near Me In Hauz Khas Enclave",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Hauz Khas",
      "Green Park",
      "Gulmohar Park",
      "Deer Park",
      "Safdarjung Enclave",
    ],
  },

  "deer-park": {
    name: "Deer Park",
    title: "Best Physiotherapist Near Me Near Deer Park",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Hauz Khas",
      "Gulmohar Park",
      "Green Park",
      "Safdarjung Enclave",
      "AIIMS",
    ],
  },

  "gulmohar-park": {
    name: "Gulmohar Park",
    title: "Best Physiotherapist Near Me In Gulmohar Park",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Hauz Khas",
      "Green Park",
      "Safdarjung Enclave",
      "Deer Park",
      "Yusuf Sarai",
    ],
  },

  "gautam-nagar": {
    name: "Gautam Nagar",
    title: "Best Physiotherapist Near Me In Gautam Nagar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "AIIMS",
      "Green Park",
      "Hauz Khas",
      "Yusuf Sarai",
      "Safdarjung Enclave",
    ],
  },

  rohini: {
    name: "Rohini",
    title: "Best Physiotherapist Near Me In Rohini",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Pitampura",
      "Shalimar Bagh",
      "Budh Vihar",
      "Rithala",
      "Kanjhawala",
    ],
  },

  kharera: {
    name: "Kharera",
    title: "Best Physiotherapist Near Me In Kharera",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Najafgarh", "Dwarka", "Jharoda Kalan", "Chhawla", "Dhansa"],
  },
  "masjid-moth": {
    name: "Masjid Moth",
    title: "Best Physiotherapist Near Me In Masjid Moth",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Greater Kailash",
      "Kalkaji",
      "CR Park",
      "Govind Puri",
      "Alaknanda",
    ],
  },

  "shahoorpur-extension": {
    name: "Shahoorpur Extension",
    title: "Best Physiotherapist Near Me In Shahoorpur Extension",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Preet Vihar",
      "Karkarduma",
      "Laxmi Nagar",
      "Ghonda",
      "Patparganj",
    ],
  },

  kotla: {
    name: "Kotla",
    title: "Best Physiotherapist Near Me In Kotla",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Ashram",
      "JLN Stadium",
      "Bhogal",
      "Pragati Maidan",
      "India Gate",
    ],
  },

  "preet-vihar": {
    name: "Preet Vihar",
    title: "Best Physiotherapist Near Me In Preet Vihar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Shahoorpur Extension",
      "Karkarduma",
      "Vivek Vihar",
      "Mayur Vihar",
      "Laxmi Nagar",
    ],
  },

  "dera-mandi": {
    name: "Dera Mandi",
    title: "Best Physiotherapist Near Me In Dera Mandi",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Jama Masjid",
      "Bhogal",
      "Kotla",
      "Old Delhi",
      "Chandni Chowk",
    ],
  },

  jamroodpur: {
    name: "Jamroodpur",
    title: "Best Physiotherapist Near Me In Jamroodpur",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Bhogal", "Kotla", "Ashram", "JLN Stadium", "CR Park"],
  },

  bhogal: {
    name: "Bhogal",
    title: "Best Physiotherapist Near Me In Bhogal",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Ashram", "JLN Stadium", "Jamroodpur", "Dera Mandi", "Kotla"],
  },

  "tughlakbad-railway-colony": {
    name: "Tughlakbad Railway Colony",
    title: "Best Physiotherapist Near Me In Tughlakbad Railway Colony",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Okhla Phase I",
      "Okhla Phase II",
      "Pul Pehladpur",
      "Sewa Nagar",
      "Masjid Moth",
    ],
  },

  "pul-pehladpur": {
    name: "Pul Pehladpur",
    title: "Best Physiotherapist Near Me In Pul Pehladpur",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Tughlakbad Railway Colony",
      "Sewa Nagar",
      "Okhla Phase I",
      "Okhla Phase II",
      "Masjid Moth",
    ],
  },

  "sewa-nagar": {
    name: "Sewa Nagar",
    title: "Best Physiotherapist Near Me In Sewa Nagar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Tughlakbad Railway Colony",
      "Pul Pehladpur",
      "Okhla Phase I",
      "Okhla Phase II",
      "Masjid Moth",
    ],
  },

  "pragati-maidan": {
    name: "Pragati Maidan",
    title: "Best Physiotherapist Near Me Near Pragati Maidan",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["JLN Stadium", "Bhogal", "Kotla", "India Gate", "Ashram"],
  },

  "durga-vihar": {
    name: "Durga Vihar",
    title: "Best Physiotherapist Near Me In Durga Vihar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Preet Vihar",
      "Shahoorpur Extension",
      "Patparganj",
      "Mayur Vihar",
      "Vivek Vihar",
    ],
  },
  "sat-beri": {
    name: "Sat Beri",
    title: "Best Physiotherapist Near Me In Sat Beri",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Fatehpur Beri",
      "Chhatarpur",
      "Vasant Kunj",
      "Mehrauli",
      "Aya Nagar",
    ],
  },

  sahoarpur: {
    name: "Sahoarpur",
    title: "Best Physiotherapist Near Me In Sahoarpur",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Preet Vihar",
      "Shahoorpur Extension",
      "Patparganj",
      "Laxmi Nagar",
      "Mayur Vihar",
    ],
  },

  jonapur: {
    name: "Jonapur",
    title: "Best Physiotherapist Near Me In Jonapur",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Devli", "Tigri", "Khanpur", "Sangam Vihar", "Pul Pehladpur"],
  },

  "aya-nagar": {
    name: "Aya Nagar",
    title: "Best Physiotherapist Near Me In Aya Nagar",
    clinics: [ashishClinicTemplate],
    nearbyAreas: ["Sat Beri", "Chhatarpur", "Vasant Kunj", "Mehrauli", "Devli"],
  },

  sultanpur: {
    name: "Sultanpur",
    title: "Best Physiotherapist Near Me In Sultanpur",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Vasant Kunj",
      "Chhatarpur",
      "Mehrauli",
      "Gurgaon Border",
      "Sat Beri",
    ],
  },

  "ladha-sarai": {
    name: "Ladha Sarai",
    title: "Best Physiotherapist Near Me In Ladha Sarai",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Mehrauli",
      "Chhatarpur",
      "Vasant Kunj",
      "Neb Sarai",
      "Sultanpur",
    ],
  },

  gadaipur: {
    name: "Gadaipur",
    title: "Best Physiotherapist Near Me In Gadaipur",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Kalkaji",
      "Govind Puri",
      "Alaknanda",
      "CR Park",
      "Sangam Vihar",
    ],
  },

  khirki: {
    name: "Khirki",
    title: "Best Physiotherapist Near Me In Khirki",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "Malviya Nagar",
      "Hauz Khas",
      "Sheikh Sarai",
      "Saket",
      "Green Park",
    ],
  },

  "connaught-place": {
    name: "Connaught Place",
    title: "Best Physiotherapist Near Me In Connaught Place",
    clinics: [ashishClinicTemplate],
    nearbyAreas: [
      "India Gate",
      "Janpath",
      "Barakhamba Road",
      "Rajiv Chowk",
      "Lutyens Delhi",
    ],
  },
};

// Badarpur/Faridabad locations for Sharma Orthopedic
// const badarpur_faridabadLocations = {
//   // Main locations
//   badarpur: {
//     name: "Badarpur",
//     title: "Best Physiotherapist Centre In Badarpur",
//     clinics: [sharmaClinicTemplate],
//     nearbyAreas: [
//       "Jaitpur",
//       "Tughlakabad",
//       "Molarband",
//       "Sarita Vihar",
//       "Railway Colony",
//       "Jasola",
//       "Meethapur",
//       "Pehladpur",
//       "Tajpur Pahadi",
//     ],
//   },
//   faridabad: {
//     name: "Faridabad",
//     title: "Best Physiotherapist  In Faridabad",
//     clinics: [sharmaClinicTemplate],
//     nearbyAreas: [
//       "Sector 15 Faridabad",
//       "Sector 16 Faridabad",
//       "Sector 21 Faridabad",
//       "NIT",
//       "Old Faridabad",
//       "Neharpar",
//       "Sector 37 Faridabad",
//       "Sarai",
//       "Ashoka Enclave",
//     ],
//   },

//   // Badarpur sub-areas
//   jaitpur: {
//     name: "Jaitpur",
//     title: "Best Physiotherapist Near Me In Jaitpur",
//     parentLocation: "Badarpur",
//     clinics: [sharmaClinicTemplate],
//     nearbyAreas: [
//       "Badarpur",
//       "Tughlakabad",
//       "Molarband",
//       "Sarita Vihar",
//       "Railway Colony",
//     ],
//   },
//   tughlakabad: {
//     name: "Tughlakabad",
//     title: "Best Physiotherapist Near Me In Tughlakabad",
//     parentLocation: "Badarpur",
//     clinics: [sharmaClinicTemplate],
//     nearbyAreas: ["Badarpur", "Jaitpur", "Molarband", "Jasola", "Meethapur"],
//   },
//   molarband: {
//     name: "Molarband",
//     title: "Best Physiotherapist Near Me In Molarband",
//     parentLocation: "Badarpur",
//     clinics: [sharmaClinicTemplate],
//     nearbyAreas: [
//       "Badarpur",
//       "Tughlakabad",
//       "Jaitpur",
//       "Sarita Vihar",
//       "Pehladpur",
//     ],
//   },
//   "sarita-vihar": {
//     name: "Sarita Vihar",
//     title: "Best Physiotherapist Near Me In Sarita Vihar",
//     parentLocation: "Badarpur",
//     clinics: [sharmaClinicTemplate],
//     nearbyAreas: [
//       "Badarpur",
//       "Jasola",
//       "Molarband",
//       "Railway Colony",
//       "Jaitpur",
//     ],
//   },
// };

// Badarpur/Faridabad locations for Sharma Orthopedic
const badarpur_faridabadLocations = {
  // Main locations
  badarpur: {
    name: "Badarpur",
    title: "Best Physiotherapist Centre In Badarpur",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Jaitpur",
      "Tughlakabad",
      "Molarband",
      "Sarita Vihar",
      "Railway Colony",
      "Jasola",
      "Meethapur",
      "Pehladpur",
      "Tajpur Pahadi",
    ],
  },
  faridabad: {
    name: "Faridabad",
    title: "Best Physiotherapist In Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 15 Faridabad",
      "Sector 16 Faridabad",
      "Sector 21 Faridabad",
      "NIT Faridabad",
      "Old Faridabad",
      "Neharpar",
      "Sector 37 Faridabad",
      "Sarai Khwaja",
      "Ashoka Enclave",
    ],
  },

  // Badarpur sub-areas (existing - no change)
  jaitpur: {
    name: "Jaitpur",
    title: "Best Physiotherapist Near Me In Jaitpur",
    parentLocation: "Badarpur",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Badarpur",
      "Tughlakabad",
      "Molarband",
      "Sarita Vihar",
      "Railway Colony",
    ],
  },
  tughlakabad: {
    name: "Tughlakabad",
    title: "Best Physiotherapist Near Me In Tughlakabad",
    parentLocation: "Badarpur",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: ["Badarpur", "Jaitpur", "Molarband", "Jasola", "Meethapur"],
  },
  molarband: {
    name: "Molarband",
    title: "Best Physiotherapist Near Me In Molarband",
    parentLocation: "Badarpur",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Badarpur",
      "Tughlakabad",
      "Jaitpur",
      "Sarita Vihar",
      "Pehladpur",
    ],
  },
  "sarita-vihar": {
    name: "Sarita Vihar",
    title: "Best Physiotherapist Near Me In Sarita Vihar",
    parentLocation: "Badarpur",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Badarpur",
      "Jasola",
      "Molarband",
      "Railway Colony",
      "Jaitpur",
    ],
  },

  // ✅ FARIDABAD SUB-LOCATIONS - YEH SAB NAYE LOCATIONS HAIN
  "sector-15-faridabad": {
    name: "Sector 15 Faridabad",
    title: "Best Physiotherapist Near Me In Sector 15 Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 16 Faridabad",
      "Sector 12 Faridabad",
      "NIT Faridabad",
      "Old Faridabad",
      "Ajronda",
      "Sector 14 Faridabad",
      "Ashoka Enclave",
      "Sarai Khwaja",
    ],
  },

  "sector-16-faridabad": {
    name: "Sector 16 Faridabad",
    title: "Best Physiotherapist Near Me In Sector 16 Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 15 Faridabad",
      "Sector 17 Faridabad",
      "NIT Faridabad",
      "Old Faridabad",
      "Sector 21 Faridabad",
      "Sector 12 Faridabad",
      "Neharpar",
      "Ajronda",
    ],
  },

  "sector-21-faridabad": {
    name: "Sector 21 Faridabad",
    title: "Best Physiotherapist Near Me In Sector 21 Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 16 Faridabad",
      "Sector 22 Faridabad",
      "NIT Faridabad",
      "Sector 28 Faridabad",
      "Neharpar",
      "Sector 17 Faridabad",
      "Sector 27 Faridabad",
      "Old Faridabad",
    ],
  },

  "nit-faridabad": {
    name: "NIT Faridabad",
    title: "Best Physiotherapist Near Me In NIT Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 15 Faridabad",
      "Sector 16 Faridabad",
      "Sector 21 Faridabad",
      "Old Faridabad",
      "Neharpar",
      "Sector 12 Faridabad",
      "Ajronda",
      "Ashoka Enclave",
    ],
  },

  "old-faridabad": {
    name: "Old Faridabad",
    title: "Best Physiotherapist Near Me In Old Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "NIT Faridabad",
      "Sector 15 Faridabad",
      "Ajronda",
      "Sarai Khwaja",
      "Neharpar",
      "Sector 16 Faridabad",
      "Ashoka Enclave",
      "Sector 12 Faridabad",
    ],
  },

  neharpar: {
    name: "Neharpar",
    title: "Best Physiotherapist Near Me In Neharpar",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "NIT Faridabad",
      "Sector 21 Faridabad",
      "Old Faridabad",
      "Sector 28 Faridabad",
      "Sector 37 Faridabad",
      "Sector 16 Faridabad",
      "Greater Faridabad",
      "Sector 27 Faridabad",
    ],
  },

  "sector-37-faridabad": {
    name: "Sector 37 Faridabad",
    title: "Best Physiotherapist Near Me In Sector 37 Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Neharpar",
      "Sector 28 Faridabad",
      "Sector 21 Faridabad",
      "Greater Faridabad",
      "Ballabgarh",
      "Sector 27 Faridabad",
      "Sector 31 Faridabad",
      "NIT Faridabad",
    ],
  },

  "sarai-khwaja": {
    name: "Sarai Khwaja",
    title: "Best Physiotherapist Near Me In Sarai Khwaja",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Old Faridabad",
      "NIT Faridabad",
      "Ajronda",
      "Ashoka Enclave",
      "Neharpar",
      "Sector 15 Faridabad",
      "Sector 12 Faridabad",
      "Sector 16 Faridabad",
    ],
  },

  "ashoka-enclave": {
    name: "Ashoka Enclave",
    title: "Best Physiotherapist Near Me In Ashoka Enclave",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Old Faridabad",
      "Sarai Khwaja",
      "NIT Faridabad",
      "Sector 15 Faridabad",
      "Ajronda",
      "Sector 12 Faridabad",
      "Sector 16 Faridabad",
      "Neharpar",
    ],
  },

  // Additional popular Faridabad sectors
  "sector-12-faridabad": {
    name: "Sector 12 Faridabad",
    title: "Best Physiotherapist Near Me In Sector 12 Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 15 Faridabad",
      "Sector 16 Faridabad",
      "Old Faridabad",
      "NIT Faridabad",
      "Ajronda",
      "Ashoka Enclave",
      "Sarai Khwaja",
      "Sector 11 Faridabad",
    ],
  },

  "sector-28-faridabad": {
    name: "Sector 28 Faridabad",
    title: "Best Physiotherapist Near Me In Sector 28 Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 21 Faridabad",
      "Sector 37 Faridabad",
      "Neharpar",
      "Greater Faridabad",
      "Sector 27 Faridabad",
      "Sector 31 Faridabad",
      "NIT Faridabad",
      "Ballabgarh",
    ],
  },

  ajronda: {
    name: "Ajronda",
    title: "Best Physiotherapist Near Me In Ajronda",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Old Faridabad",
      "Sector 12 Faridabad",
      "Sector 15 Faridabad",
      "Sarai Khwaja",
      "Ashoka Enclave",
      "NIT Faridabad",
      "Sector 16 Faridabad",
      "Neharpar",
    ],
  },

  ballabgarh: {
    name: "Ballabgarh",
    title: "Best Physiotherapist Near Me In Ballabgarh",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 37 Faridabad",
      "Greater Faridabad",
      "Sector 28 Faridabad",
      "Neharpar",
      "Faridabad",
      "Sector 31 Faridabad",
      "Sector 27 Faridabad",
      "Sector 21 Faridabad",
    ],
  },

  "greater-faridabad": {
    name: "Greater Faridabad",
    title: "Best Physiotherapist Near Me In Greater Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 37 Faridabad",
      "Sector 28 Faridabad",
      "Ballabgarh",
      "Neharpar",
      "Faridabad",
      "Sector 31 Faridabad",
      "Sector 27 Faridabad",
      "Sector 21 Faridabad",
    ],
  },

  // Additional sectors for complete coverage
  "sector-11-faridabad": {
    name: "Sector 11 Faridabad",
    title: "Best Physiotherapist Near Me In Sector 11 Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 12 Faridabad",
      "Sector 15 Faridabad",
      "Old Faridabad",
      "NIT Faridabad",
      "Ajronda",
      "Sector 10 Faridabad",
      "Ashoka Enclave",
      "Sector 16 Faridabad",
    ],
  },

  "sector-14-faridabad": {
    name: "Sector 14 Faridabad",
    title: "Best Physiotherapist Near Me In Sector 14 Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 15 Faridabad",
      "Sector 12 Faridabad",
      "NIT Faridabad",
      "Old Faridabad",
      "Sector 16 Faridabad",
      "Ajronda",
      "Ashoka Enclave",
      "Sector 11 Faridabad",
    ],
  },

  "sector-17-faridabad": {
    name: "Sector 17 Faridabad",
    title: "Best Physiotherapist Near Me In Sector 17 Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 16 Faridabad",
      "Sector 21 Faridabad",
      "NIT Faridabad",
      "Neharpar",
      "Sector 15 Faridabad",
      "Sector 22 Faridabad",
      "Old Faridabad",
      "Sector 28 Faridabad",
    ],
  },

  "sector-22-faridabad": {
    name: "Sector 22 Faridabad",
    title: "Best Physiotherapist Near Me In Sector 22 Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 21 Faridabad",
      "Sector 17 Faridabad",
      "Sector 28 Faridabad",
      "Neharpar",
      "NIT Faridabad",
      "Sector 27 Faridabad",
      "Sector 16 Faridabad",
      "Greater Faridabad",
    ],
  },

  "sector-27-faridabad": {
    name: "Sector 27 Faridabad",
    title: "Best Physiotherapist Near Me In Sector 27 Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 28 Faridabad",
      "Sector 22 Faridabad",
      "Sector 21 Faridabad",
      "Neharpar",
      "Sector 31 Faridabad",
      "Sector 37 Faridabad",
      "Greater Faridabad",
      "NIT Faridabad",
    ],
  },

  "sector-31-faridabad": {
    name: "Sector 31 Faridabad",
    title: "Best Physiotherapist Near Me In Sector 31 Faridabad",
    parentLocation: "Faridabad",
    clinics: [sharmaClinicTemplate],
    nearbyAreas: [
      "Sector 28 Faridabad",
      "Sector 37 Faridabad",
      "Sector 27 Faridabad",
      "Greater Faridabad",
      "Neharpar",
      "Ballabgarh",
      "Sector 21 Faridabad",
      "Sector 22 Faridabad",
    ],
  },
};

// Combine all location data
const locationData = {
  ...southDelhiLocations,
  ...badarpur_faridabadLocations,
};

// Nearby Areas Slider Component
const NearbyAreasSlider = ({ areas }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(areas.length / itemsPerPage);
  const slideDuration = 4000;

  useEffect(() => {
    if (totalPages > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
      }, slideDuration);
      return () => clearInterval(interval);
    }
  }, [totalPages]);

  const visibleAreas = areas.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage,
  );

  return (
    <div
      className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-16"
      data-aos="fade-up"
    >
      <h3 className="text-3xl md:text-4xl text-gray-900 mb-8 text-center">
        We Also Serve Nearby Areas
      </h3>

      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 transition-opacity duration-500">
          {visibleAreas.map((area, idx) => {
            const areaSlug = area.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link
                key={`${currentIndex}-${idx}`}
                to={`/location/${areaSlug}`}
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center text-gray-700 hover:from-orange-600 hover:to-orange-500 hover:text-white transition-all cursor-pointer hover:scale-105 shadow-md hover:shadow-xl">
                  {area}
                </div>
              </Link>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="relative"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === idx
                      ? "bg-blue-200"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
                {currentIndex === idx && (
                  <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    width="20"
                    height="20"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2"
                      strokeDasharray="50.27"
                      strokeDashoffset="50.27"
                      className="animate-progress"
                      style={{
                        animation: `progress ${slideDuration}ms linear forwards`,
                      }}
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes progress {
          from { stroke-dashoffset: 50.27; }
          to { stroke-dashoffset: 0; }
        }
        .animate-progress {
          transform: rotate(-90deg);
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};

export default function LocationDetailPage() {
  const { slug } = useParams();
  const locationSlug = slug || "kalkaji";
  const location = locationData[locationSlug];
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  if (!location) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl text-gray-800 mb-4">Location Not Found</h1>
          <a href="/" className="text-blue-600 hover:underline">
            Go back to home
          </a>
        </div>
      </div>
    );
  }

  // Determine which clinic we're showing based on the location
  const clinic = location.clinics[0];
  const isAshishClinic = clinic.slug === "Ashish-physiotherapy-centre";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner */}
      <div
        className={`${
          isAshishClinic
            ? "bg-gradient-to-r from-[#8ab72e] to-[#7aa625]"
            : "bg-gradient-to-r from-orange-400 to-green-800"
        } text-white py-16`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={`/clinic/${clinic.slug}`}
            className="inline-flex items-center gap-2 text-white hover:text-blue-100 mb-6 transition-colors group"
            data-aos="fade-right"
          >
            <svg
              className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-3 mb-4" data-aos="fade-down">
            <MapPin className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl">{location.title}</h1>
          </div>
          <p
            className="text-xl text-blue-100"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Expert Physiotherapy Services in {location.name}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {location.clinics.map((clinic, idx) => (
          <div key={idx} className="mb-16">
            {/* Clinic Hero Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div data-aos="fade-right">
                <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
                  {clinic.name}
                </h2>
                <p
                  className={`text-xl md:text-2xl mb-6 ${
                    isAshishClinic ? "text-[#8ab72e]" : "text-orange-400"
                  }`}
                >
                  {clinic.tagline}
                </p>
                <p className="text-lg text-gray-700 mb-4">{clinic.specialty}</p>

                <Link to="/contact">
                  <button
                    className={`${
                      isAshishClinic
                        ? "bg-[#8ab72e] hover:bg-[#7aa625]"
                        : "bg-orange-500 hover:bg-orange-600"
                    } text-white px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105`}
                  >
                    Book Appointment Now
                  </button>
                </Link>
              </div>

              <div data-aos="fade-left">
                <img
                  src={clinic.image}
                  alt={clinic.name}
                  className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
                data-aos="zoom-in"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-14 h-14 ${
                        isAshishClinic ? "bg-[#8ab72e]" : "bg-orange-500"
                      } rounded-full flex items-center justify-center`}
                    >
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl text-gray-900 mb-2">Address</h3>
                    <a
                      href={clinic.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-600 ${
                        isAshishClinic
                          ? "hover:text-[#8ab72e]"
                          : "hover:text-orange-500"
                      } hover:underline break-words`}
                    >
                      {clinic.address}
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-14 h-14 ${
                        isAshishClinic ? "bg-[#8ab72e]" : "bg-orange-500"
                      } rounded-full flex items-center justify-center`}
                    >
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-gray-900 mb-2">Phone</h3>
                    <a
                      href={`tel:${clinic.phone}`}
                      className={`text-gray-600 ${
                        isAshishClinic
                          ? "hover:text-[#8ab72e]"
                          : "hover:text-orange-600"
                      } hover:underline text-xl`}
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-14 h-14 ${
                        isAshishClinic ? "bg-[#8ab72e]" : "bg-orange-500"
                      } rounded-full flex items-center justify-center`}
                    >
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-gray-900 mb-2">Hours</h3>
                    <p className="text-gray-600 text-xl">{clinic.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section - WITH LOCATION NAME */}
            <div
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
              data-aos="fade-up"
            >
              <h3 className="text-3xl md:text-4xl text-gray-900 mb-8 text-center">
                Our Services in {location.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(showAllServices
                  ? clinic.services
                  : clinic.services.slice(0, 6)
                ).map((service, idx) => {
                  const clinicSlug = clinic.slug;

                  // Remove "Best " prefix and convert to slug
                  const serviceSlug = service.name
                    .replace(/^Best\s+/i, "")
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]/g, "");

                  // Add location name to service title
                  const serviceTitle = `${service.name.replace(/^Best\s+/i, "")} `;

                  return (
                    <Link
                      key={idx}
                      to={`/clinic/${clinicSlug}/service/${serviceSlug}?location=${locationSlug}`}
                      data-aos="zoom-in"
                      data-aos-delay={idx * 50}
                    >
                      <div className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={service.image}
                            alt={serviceTitle}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg text-gray-800 text-center">
                            {serviceTitle}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {clinic.services.length > 6 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllServices(!showAllServices)}
                    className={`${
                      isAshishClinic
                        ? "bg-[#8ab72e] hover:bg-[#7aa625]"
                        : "bg-orange-600 hover:bg-orange-500"
                    } text-white px-8 py-3 rounded-full text-lg shadow-lg transition-all hover:scale-105`}
                  >
                    {showAllServices
                      ? "View Less Services"
                      : "View More Services"}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        <NearbyAreasSlider areas={location.nearbyAreas} />
      </div>
    </div>
  );
}

