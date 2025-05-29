import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Heart, 
  Users, 
  Lightbulb, 
  Shield,
  BookOpen,
  Gamepad2,
  ChefHat,
  Palette,
  Code,
  GraduationCap,
  PiggyBank,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react';
import './App.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('general');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Subsidiaries', href: '#subsidiaries' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' }
  ];

  const subsidiaries = [
    {
      icon: Gamepad2,
      name: 'Empire Haven Gameverse',
      description: 'Gaming lounges, events, console & PC gaming experiences that bring communities together',
      services: ['Gaming Lounges', 'Esports Events', 'Console & PC Gaming', 'Community Tournaments'],
      image: 'https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg',
      color: 'from-empire-turquoise-500 to-empire-turquoise-700'
    },
    {
      icon: ChefHat,
      name: 'Empire Haven Delicacies',
      description: 'Food services, catering, and hospitality that nourish both body and community spirit',
      services: ['Catering Services', 'Food Delivery', 'Agribusiness', 'Hospitality Management'],
      image: 'https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg',
      color: 'from-warm-500 to-warm-700'
    },
    {
      icon: Palette,
      name: 'Empire Haven Creatives',
      description: 'Media production, content creation, and branding that tells meaningful stories',
      services: ['Media Production', 'Content Creation', 'Branding', 'Streaming Services'],
      image: 'https://images.pexels.com/photos/18015187/pexels-photo-18015187.jpeg',
      color: 'from-empire-gold-500 to-empire-gold-700'
    },
    {
      icon: Code,
      name: 'Empire Haven Solutions',
      description: 'Tech consulting, software development, and digital infrastructure for transformation',
      services: ['Tech Consulting', 'Software Development', 'Training Programs', 'Wi-Fi Infrastructure'],
      image: 'https://images.unsplash.com/photo-1618329027137-a520b57c6606',
      color: 'from-empire-turquoise-600 to-empire-black-700'
    },
    {
      icon: GraduationCap,
      name: 'Empire Haven Research Hub',
      description: 'Skill development, publishing, and digital literacy for lifelong learning',
      services: ['Skill Development', 'Technical Publishing', 'Digital Literacy', 'Research Programs'],
      image: 'https://images.pexels.com/photos/6147381/pexels-photo-6147381.jpeg',
      color: 'from-empire-black-600 to-empire-black-800'
    },
    {
      icon: PiggyBank,
      name: 'Empire Haven Financial Stewardship',
      description: 'Ethical lending, investments, and financial education for sustainable prosperity',
      services: ['Ethical Lending', 'Investment Services', 'Savings Schemes', 'Financial Education'],
      image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86',
      color: 'from-empire-gold-600 to-warm-600'
    },
    {
      icon: Globe,
      name: 'Empire Haven Global Impact',
      description: 'Community outreach, empowerment programs, and sustainable social transformation',
      services: ['Community Outreach', 'Empowerment Programs', 'Training Initiatives', 'Social Impact'],
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca',
      color: 'from-empire-turquoise-500 to-empire-gold-500'
    }
  ];

  const testimonials = [
    {
      quote: "Haven Heights Empire has transformed how we approach community development. Their holistic vision brings hope and practical solutions.",
      author: "Sarah Johnson",
      role: "Community Leader",
      image: 'https://images.pexels.com/photos/7841452/pexels-photo-7841452.jpeg'
    },
    {
      quote: "The integration of business excellence with genuine care for people creates something truly special. This is leadership that matters.",
      author: "Michael Chen",
      role: "Business Partner",
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
    },
    {
      quote: "From gaming to financial stewardship, every subsidiary reflects values that build stronger communities and brighter futures.",
      author: "Rev. David Martinez",
      role: "Faith Leader",
      image: 'https://images.pexels.com/photos/6773652/pexels-photo-6773652.jpeg'
    }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Christ at the Center",
      description: "Every decision and action flows from foundational love and truth"
    },
    {
      icon: Users,
      title: "Generational Integrity",
      description: "Building legacy through authentic relationships and sustainable practices"
    },
    {
      icon: Shield,
      title: "Stewardship over Ownership",
      description: "Responsible management of resources for community benefit"
    },
    {
      icon: Lightbulb,
      title: "Excellence in Execution",
      description: "Delivering exceptional quality in every endeavor"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 to-empire-gold-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold text-gradient-gold">
                Haven Heights Empire
              </h1>
            </motion.div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-empire-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-empire-gold-400 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden glass-card-dark m-4 rounded-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-empire-gold-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-empire-black-900/70 to-empire-black-800/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-hero font-bold text-white leading-tight">
              Building a 
              <span className="text-gradient-gold"> Generational Haven </span>
              <br />Where Purpose Meets Progress
            </h1>
            
            <p className="text-xl md:text-2xl text-warm-100 max-w-4xl mx-auto leading-relaxed">
              A Christ-centered, multi-generational organization creating lasting impact through 
              Kingdom-driven innovation, stewardship, and community transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <motion.button
                className="btn-primary text-lg px-12 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Mission
              </motion.button>
              
              <motion.button
                className="btn-outline text-lg px-12 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner With Us
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-empire-gold-400" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-display font-bold text-empire-black-900 mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-empire-black-600 max-w-3xl mx-auto">
              Haven Heights Empire exists as a multi-generational, Christ-centered organization 
              dedicated to societal transformation through business excellence, education, and community impact.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div {...fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold text-empire-black-900">Our Vision</h3>
              <p className="text-lg text-empire-black-700 leading-relaxed">
                To build a generational haven where Kingdom-driven innovation, creativity, 
                discipline, stewardship, and leadership thrive.
              </p>
              
              <h3 className="text-2xl font-bold text-empire-black-900">Our Mission</h3>
              <p className="text-lg text-empire-black-700 leading-relaxed">
                To equip, empower, and establish Christ-centered societal impact through 
                business, education, innovation, and hospitality.
              </p>
            </motion.div>
            
            <motion.div
              {...fadeInUp}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1591197172062-c718f82aba20"
                alt="Community strength and unity"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-empire-black-900/50 to-transparent"></div>
            </motion.div>
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <value.icon className="text-empire-gold-500 mx-auto mb-4" size={48} />
                <h4 className="text-lg font-semibold text-empire-black-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-empire-black-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section id="subsidiaries" className="py-20 bg-gradient-to-br from-empire-black-50 to-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-display font-bold text-empire-black-900 mb-6">
              Our Seven Pillars
            </h2>
            <p className="text-xl text-empire-black-600 max-w-3xl mx-auto">
              Seven integrated subsidiaries working together to create comprehensive 
              community transformation and sustainable impact.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {subsidiaries.map((subsidiary, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group glass-card overflow-hidden hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={subsidiary.image}
                    alt={subsidiary.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${subsidiary.color} opacity-80`}></div>
                  <subsidiary.icon className="absolute top-4 right-4 text-white" size={32} />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-empire-black-900 mb-3">
                    {subsidiary.name}
                  </h3>
                  <p className="text-empire-black-600 mb-4 text-sm">
                    {subsidiary.description}
                  </p>
                  
                  <div className="space-y-2">
                    {subsidiary.services.map((service, serviceIndex) => (
                      <div 
                        key={serviceIndex}
                        className="flex items-center text-sm text-empire-black-500"
                      >
                        <ArrowRight size={14} className="text-empire-gold-500 mr-2" />
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-empire-black-900 to-empire-black-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-display font-bold text-white mb-6">
              Voices of Impact
            </h2>
            <p className="text-xl text-warm-100 max-w-3xl mx-auto">
              Hear from partners and community members whose lives have been transformed 
              through our collaborative approach to purposeful business.
            </p>
          </motion.div>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card-dark p-8 md:p-12 text-center max-w-4xl mx-auto"
              >
                <blockquote className="text-xl md:text-2xl text-white mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="text-empire-gold-400 font-semibold text-lg">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-warm-200 text-sm">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-empire-gold-500' 
                      : 'bg-empire-gold-500/30 hover:bg-empire-gold-500/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-warm-50 to-empire-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-display font-bold text-empire-black-900 mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-empire-black-600 max-w-3xl mx-auto">
              Whether you're a faith leader, business professional, or community member, 
              there's a place for you in building something meaningful together.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="glass-card p-6">
                <h3 className="text-2xl font-bold text-empire-black-900 mb-6">
                  Get Connected
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-empire-gold-500" size={20} />
                    <span className="text-empire-black-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-empire-gold-500" size={20} />
                    <span className="text-empire-black-700">connect@havenheights.org</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-empire-gold-500" size={20} />
                    <span className="text-empire-black-700">123 Kingdom Way, Hope City</span>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg"
                  alt="Community volunteers and outreach"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-empire-black-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Volunteer Opportunities</h4>
                  <p className="text-sm">Join our community impact initiatives</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="glass-card p-8">
              <h3 className="text-2xl font-bold text-empire-black-900 mb-6">
                Start a Conversation
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-empire-black-700 mb-2">
                    I'm interested in:
                  </label>
                  <select className="w-full px-4 py-3 border border-empire-black-200 rounded-xl focus:ring-2 focus:ring-empire-gold-500 focus:border-transparent">
                    <option>Partnership Opportunities</option>
                    <option>Investment Information</option>
                    <option>Volunteer Programs</option>
                    <option>Business Services</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-empire-black-700 mb-2">
                      First Name
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-empire-black-200 rounded-xl focus:ring-2 focus:ring-empire-gold-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-empire-black-700 mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-empire-black-200 rounded-xl focus:ring-2 focus:ring-empire-gold-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-empire-black-700 mb-2">
                    Email
                  </label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 border border-empire-black-200 rounded-xl focus:ring-2 focus:ring-empire-gold-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-empire-black-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 border border-empire-black-200 rounded-xl focus:ring-2 focus:ring-empire-gold-500 focus:border-transparent"
                    placeholder="Tell us about your interest in Haven Heights Empire..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-empire-black-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient-gold">
                Haven Heights Empire
              </h3>
              <p className="text-warm-200 text-sm">
                Building generational impact through Christ-centered innovation and community transformation.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Subsidiaries</h4>
              <ul className="space-y-2 text-sm text-warm-200">
                <li>Empire Haven Gameverse</li>
                <li>Empire Haven Delicacies</li>
                <li>Empire Haven Creatives</li>
                <li>Empire Haven Solutions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">More Subsidiaries</h4>
              <ul className="space-y-2 text-sm text-warm-200">
                <li>Empire Haven Research Hub</li>
                <li>Empire Haven Financial Stewardship</li>
                <li>Empire Haven Global Impact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-warm-200">
                <li>Partnership Opportunities</li>
                <li>Investment Information</li>
                <li>Volunteer Programs</li>
                <li>Media Inquiries</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-empire-black-700 mt-8 pt-8 text-center">
            <p className="text-warm-300 text-sm">
              © 2024 Haven Heights Empire. All rights reserved. | Building Kingdom impact across generations.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;