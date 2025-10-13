'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  email: string;
  phone?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ramadan Mansour BSc.",
    position: "Chief Executive",
    bio: "Ramadan Mansour was appointed Lorasco Libya's CEO in September 2019. Mr. Mansour brings over 24 years' upstream oil field services management expertise, in various roles and regions. He is also experienced in managing multi-billion value businesses. Earlier in his career, he held various management and engineering positions in Libya, Egypt, Sudan, Nigeria and UAE. Mr. Mansour holds a Bachelor of Science degree in Industrial Engineering from the University of Benghazi, Libya. Prior to his current role, he held various management positions in Schlumberger, including President for South & East Asia; Vice President Shared Services Organisation for Middle East & Asia; Vice President and General Manager for Libya; as well as Vice President, Drilling & Measurements, for Middle East & Asia.",
    image: "/assets/img/our team/ramadan.jpg",
    email: "ramadan@lorasco.com",
    linkedin: "#"
  },
  {
    id: 2,
    name: "Haitham I. Ben Ismail",
    position: "General Manager - Rigs",
    bio: "Haitham is the General Manager of Lorasco Rigs and your primary contact for our Libyan operation. Graduating with a B.Sc. in Geology from Garunis University in Benghazi, Libya, Haitham has had an accomplished 20 year career in the Oil & Gas upstream industry with international best-in-class services companies such as Schlumberger and Halliburton, working both locally to Libya and internationally (UAE & Kazakhstan). Prior to becoming Lorasco General Manager, Haitham has gained a broad experience in Oil and Gas from working as a field engineer, in sales and marketing, business development, to operations management of product lines. As a senior manager, Haitham has navigated company mergers and the set up of a new local service company. Technical specialties – Drilling and workover, drilling fluids, directional drilling and tool rental services and solutions, surface data logging.",
    image: "/assets/img/our team/haitham.jpg",
    email: "haitham@lorasco.com",
    linkedin: "#"
  },
  {
    id: 3,
    name: "Mahdi Elkrikshi",
    position: "General Manager - Wireline",
    bio: "Mahdi Elkrikshi was appointed Wireline General Manager in Jan 2021. Mahdi Elkrikshi brings over 20 years of Wireline Services management expertise, in various roles, companies and regions, along with a very expanded Wireline Operations Sales and Marketing domain. Prior to his current role, he held various positions in Schlumberger, including operations management and sales roles along with many years of field experience. He served in Baker Hughes managing sales for Asia Pacific Wireline Service for 11 countries and in North Africa as part of the biggest region of the Baker Hughes business. Earlier in his career, Mahdi Elkrikshi also has worked in Libya, Qatar, Malaysia. Mahdi Elkrikshi holds a Bachelor of Engineering degree in Computer Engineering from the University of Tripoli, Libya, in addition to an Executive Master of Business Administration from Quantic University in Washington DC.",
    image: "/assets/img/our team/mahdi.png",
    email: "mahdi@lorasco.com",
    linkedin: "#"
  },
  {
    id: 5,
    name: "Mohammed Eshelli",
    position: "Chief Financial Officer",
    bio: "Mohamed Eshelli was appointed as Chief Financial Officer in Oct 2020. Mr. Mohamed brings over 20 years of Finance, Controllership, and management expertise, in various roles and regions. Prior to his current role, He held various management positions in Schlumberger, including North Africa Production Group Controller, Libya Financial Controller, Treasury Manager, Financial and Business Analyst, Central West Africa Management Accountant leader in Malaysia and Accounts Payable and Receivable Leader. Earlier in his career, Mr. Mohamed held various Financial and Audit assignment in Malaysia, Romania, Netherland, Congo, Gabon and Algeria, Mr. Mohamed holds a Bachelor of Accounting degree from the University of Tripoli, Libya.",
    image: "/assets/img/our team/mohammed.jpg",
    email: "mohammed@lorasco.com",
    linkedin: "#"
  },
  {
    id: 4,
    name: "Habeib Elsaadi",
    position: "General Manager - Pressure Pumping",
    bio: "Habeib Elsaadi was appointed Pressure Pumping General Manager in Jan 2021. Mr. Elsaadi brings over 15 years of Pressure Pumping Services management expertise, in various roles, companies and regions, with a very expanded Pressure Pumping Operations Sales and Marketing domain. Prior to his current role, he held various positions in Schlumberger, including operations management and Sales management roles. Apart from many years of field experience, he worked in different countries and locations in North and West Africa. Earlier in his career, Mr. Elsaadi also worked in Libya and Algeria. Mr. Elsaadi holds a Bachelor of Engineering degree in Civil Engineering from the University of Benghazi, Libya.",
    image: "/assets/img/our team/habeib.jpg",
    email: "habeib@lorasco.com",
    linkedin: "#"
  }
];

const OurTeam = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component is mounted before rendering interactive elements
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-card">
      <div className="container px-4 mx-auto sm:px-6">
        {/* Section Header - Responsive */}
        <motion.div 
          className="mb-8 text-center sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 h3 text-foreground">Our Leadership Team</h2>
          <p className="max-w-3xl px-4 mx-auto text-lg text-muted-foreground font-secondary md:text-xl">
            Meet the experienced professionals driving our commitment to excellence 
            in the Libyan energy sector
          </p>
        </motion.div>

        {/* Team Grid - Responsive for all devices */}
        <div className="mx-auto max-w-7xl">
          {/* First 3 cards - Responsive grid */}
          <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8 sm:mb-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <motion.div
                key={member.id}
                className="relative h-full max-w-xs mx-auto overflow-hidden transition-all duration-500 transform border rounded-lg shadow-sm bg-background border-border group sm:rounded-xl sm:shadow-md hover:scale-102 sm:hover:scale-105 hover:shadow-lg sm:hover:shadow-xl sm:max-w-sm"
                onMouseEnter={isMounted ? () => setHoveredMember(member.id) : undefined}
                onMouseLeave={isMounted ? () => setHoveredMember(null) : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Card Background Pattern - Reversed: visible by default, hidden on hover */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-100 bg-gradient-to-br from-yellow-50 to-yellow-100 group-hover:opacity-0"></div>
                
                {/* Content Container - Responsive padding */}
                <div className="relative h-full p-4 transition-all duration-500 sm:p-6 group-hover:flex group-hover:items-center group-hover:justify-center">
                  {/* Main Content Wrapper */}
                  <div className="w-full">
                    {/* Avatar Section - Responsive size */}
                    <div className="relative mb-3 transition-all duration-500 sm:mb-4 group-hover:mb-2 sm:group-hover:mb-3">
                      <div className="w-20 h-20 mx-auto overflow-hidden transition-transform duration-500 transform border-yellow-400 rounded-full shadow-md sm:w-24 sm:h-24 border-3 sm:border-4 sm:shadow-lg group-hover:scale-110">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      
                      {/* Hover Badge - Responsive text */}
                      <div className="absolute px-2 py-1 text-xs font-semibold text-white transition-opacity duration-300 transform -translate-x-1/2 bg-yellow-400 rounded-full opacity-100 -bottom-2 left-1/2 sm:px-3 group-hover:opacity-0">
                        {member.position.split(' - ')[0]}
                      </div>
                    </div>

                    {/* Name and Position - Responsive text */}
                    <div className="mb-2 text-center transition-all duration-500 sm:mb-3 group-hover:mb-1 sm:group-hover:mb-2">
                      <h3 className="mb-1 text-base font-bold transition-colors duration-300 text-foreground sm:text-lg font-primary group-hover:text-yellow-400">
                        {member.name}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground font-secondary sm:text-sm">
                        {member.position}
                      </p>
                    </div>

                    {/* Bio - Responsive text and height */}
                    <div className="mb-3 text-center sm:mb-4">
                      <p className="overflow-hidden text-xs transition-all duration-500 opacity-100 text-muted-foreground max-h-32 sm:max-h-40 group-hover:max-h-0 group-hover:opacity-0 font-secondary">
                        {member.bio}
                      </p>
                    </div>

                    {/* Contact Icons - Only LinkedIn Icon with Larger Container */}
                    <div className="flex justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      {member.linkedin && (
                        <motion.a
                          href={member.linkedin}
                          className="flex items-center justify-center transition-all duration-300 transform -translate-y-2 bg-gray-100 rounded-full text-muted-foreground w-9 h-9 sm:w-10 sm:h-10 hover:bg-yellow-400 hover:text-foreground group-hover:translate-y-0"
                          style={{ transitionDelay: '100ms' }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Linkedin size={14} className="sm:size-16" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Accent - Responsive size */}
                <div className="absolute top-0 right-0 w-12 h-12 transition-opacity duration-500 rounded-bl-full sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-transparent opacity-20 group-hover:opacity-0"></div>
              </motion.div>
            ))}
          </div>

          {/* 4th and 5th cards side by side - Responsive */}
          <div className="grid max-w-4xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2 sm:gap-6 md:gap-8 sm:max-w-5xl">
            {teamMembers.slice(3, 5).map((member, index) => (
              <motion.div
                key={member.id}
                className="relative h-full max-w-xs mx-auto overflow-hidden transition-all duration-500 transform border rounded-lg shadow-sm bg-background border-border group sm:rounded-xl sm:shadow-md hover:scale-102 sm:hover:scale-105 hover:shadow-lg sm:hover:shadow-xl sm:max-w-sm"
                onMouseEnter={isMounted ? () => setHoveredMember(member.id) : undefined}
                onMouseLeave={isMounted ? () => setHoveredMember(null) : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Card Background Pattern - Reversed: visible by default, hidden on hover */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-100 bg-gradient-to-br from-yellow-50 to-yellow-100 group-hover:opacity-0"></div>
                
                {/* Content Container - Responsive padding */}
                <div className="relative h-full p-4 transition-all duration-500 sm:p-6 group-hover:flex group-hover:items-center group-hover:justify-center">
                  {/* Main Content Wrapper */}
                  <div className="w-full">
                    {/* Avatar Section - Responsive size */}
                    <div className="relative mb-3 transition-all duration-500 sm:mb-4 group-hover:mb-2 sm:group-hover:mb-3">
                      <div className="w-20 h-20 mx-auto overflow-hidden transition-transform duration-500 transform border-yellow-400 rounded-full shadow-md sm:w-24 sm:h-24 border-3 sm:border-4 sm:shadow-lg group-hover:scale-110">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      
                      {/* Hover Badge - Responsive text */}
                      <div className="absolute px-2 py-1 text-xs font-semibold text-white transition-opacity duration-300 transform -translate-x-1/2 bg-yellow-400 rounded-full opacity-100 -bottom-2 left-1/2 sm:px-3 group-hover:opacity-0">
                        {member.position.split(' - ')[0]}
                      </div>
                    </div>

                    {/* Name and Position - Responsive text */}
                    <div className="mb-2 text-center transition-all duration-500 sm:mb-3 group-hover:mb-1 sm:group-hover:mb-2">
                      <h3 className="mb-1 text-base font-bold transition-colors duration-300 text-foreground sm:text-lg font-primary group-hover:text-yellow-400">
                        {member.name}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground font-secondary sm:text-sm">
                        {member.position}
                      </p>
                    </div>

                    {/* Bio - Responsive text and height */}
                    <div className="mb-3 text-center sm:mb-4">
                      <p className="overflow-hidden text-xs transition-all duration-500 opacity-100 text-muted-foreground max-h-32 sm:max-h-40 group-hover:max-h-0 group-hover:opacity-0 font-secondary">
                        {member.bio}
                      </p>
                    </div>

                    {/* Contact Icons - Only LinkedIn Icon with Larger Container */}
                    <div className="flex justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      {member.linkedin && (
                        <motion.a
                          href={member.linkedin}
                          className="flex items-center justify-center transition-all duration-300 transform -translate-y-2 bg-gray-100 rounded-full text-muted-foreground w-9 h-9 sm:w-10 sm:h-10 hover:bg-yellow-400 hover:text-foreground group-hover:translate-y-0"
                          style={{ transitionDelay: '100ms' }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Linkedin size={14} className="sm:size-16" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Accent - Responsive size */}
                <div className="absolute top-0 right-0 w-12 h-12 transition-opacity duration-500 rounded-bl-full sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-transparent opacity-20 group-hover:opacity-0"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action - Responsive */}
        <motion.div 
          className="mt-12 text-center sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm text-muted-foreground font-secondary sm:mb-6 sm:text-base">
            Want to join our team of professionals?
          </p>
          <motion.button
            className="px-6 py-2 text-sm font-semibold transition-colors duration-300 bg-yellow-400 rounded-lg shadow-lg text-foreground sm:py-3 sm:px-8 hover:bg-yellow-300 hover:shadow-xl sm:text-base font-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Career Opportunities
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;