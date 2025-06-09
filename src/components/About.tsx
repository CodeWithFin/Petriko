'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Award, Users, Clock, Target, Trophy, Star, Calendar, ChevronDown, ChevronUp, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)
  const [showAllTeam, setShowAllTeam] = useState(false)

  const stats = [
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Target, value: '1000+', label: 'Projects Completed' },
    { icon: Award, value: '100%', label: 'Quality Guarantee' },
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every project receives our full attention to detail and commitment to excellence.'
    },
    {
      title: 'Timely Delivery',
      description: 'We respect your time and deadlines. Our projects are completed on schedule without sacrificing quality.'
    },
    {
      title: 'Client Satisfaction',
      description: 'Your satisfaction is our priority. We work closely with you to ensure your vision becomes reality.'
    },
    {
      title: 'Innovation',
      description: 'We stay current with the latest trends and techniques to provide cutting-edge design solutions.'
    }
  ]

  const timeline = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Petriko Designers was established with a vision to transform spaces across Kenya through exceptional craftsmanship.',
      milestone: 'First 10 Projects Completed'
    },
    {
      year: '2012',
      title: 'Major Expansion',
      description: 'Expanded our team and services, establishing ourselves as a leading interior design company in Nairobi.',
      milestone: '100+ Projects Milestone'
    },
    {
      year: '2016',
      title: 'Commercial Success',
      description: 'Secured major commercial contracts including government and corporate projects across Kenya.',
      milestone: 'DCI Headquarters Project'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Adopted new technologies and digital solutions to better serve our clients during challenging times.',
      milestone: '500+ Projects Completed'
    },
    {
      year: '2024',
      title: 'Premium Excellence',
      description: 'Achieved premium status with high-end residential and commercial projects, setting new industry standards.',
      milestone: '1000+ Projects Achievement'
    }
  ]

  const awards = [
    {
      icon: Trophy,
      title: 'Best Interior Design Company',
      year: '2023',
      description: 'Kenya Interior Design Awards'
    },
    {
      icon: Star,
      title: 'Excellence in Craftsmanship',
      year: '2022',
      description: 'East Africa Construction Awards'
    },
    {
      icon: Award,
      title: 'Client Satisfaction Excellence',
      year: '2023',
      description: 'Customer Service Awards Kenya'
    },
    {
      icon: Trophy,
      title: 'Innovation in Design',
      year: '2024',
      description: 'African Design Innovation Awards'
    }
  ]

  const teamMembers = [
    {
      name: 'Peter Kiprotich',
      role: 'Founder & Creative Director',
      bio: 'With over 15 years of experience, Peter leads our creative vision and ensures every project meets our highest standards.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      contact: {
        email: 'peter@petricodesigners.com',
        phone: '0726 452055',
        linkedin: '#'
      }
    },
    {
      name: 'Sarah Wanjiku',
      role: 'Senior Interior Designer',
      bio: 'Sarah specializes in residential design and has transformed over 200 homes across Kenya with her innovative approach.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      contact: {
        email: 'sarah@petricodesigners.com',
        phone: '0726 379289',
        linkedin: '#'
      }
    },
    {
      name: 'James Mwangi',
      role: 'Project Manager',
      bio: 'James ensures all projects are delivered on time and within budget, coordinating teams and managing client relationships.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      contact: {
        email: 'james@petricodesigners.com',
        phone: '0714 995033',
        linkedin: '#'
      }
    },
    {
      name: 'Grace Akinyi',
      role: 'Color Specialist',
      bio: 'Grace is our color expert, helping clients choose the perfect palettes that reflect their personality and style.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      contact: {
        email: 'grace@petricodesigners.com',
        phone: '0771 191801',
        linkedin: '#'
      }
    },
    {
      name: 'David Kamau',
      role: 'Master Craftsman',
      bio: 'David leads our team of skilled craftsmen, ensuring every finish meets our exacting standards for quality and durability.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
      contact: {
        email: 'david@petricodesigners.com',
        phone: '0726 452055',
        linkedin: '#'
      }
    },
    {
      name: 'Mary Njeri',
      role: 'Client Relations Manager',
      bio: 'Mary manages client relationships and ensures clear communication throughout every project phase.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face',
      contact: {
        email: 'mary@petricodesigners.com',
        phone: '0726 379289',
        linkedin: '#'
      }
    }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-h2-mobile md:text-h2-desktop font-bold text-apple-text dark:text-apple-text-dark mb-6"
          >
            Passion meets precision.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-mobile md:text-body-desktop text-apple-text-secondary dark:text-apple-text-secondary-dark max-w-3xl mx-auto"
          >
            Since 2008, Petriko Designers has been transforming spaces across Kenya with 
            unmatched craftsmanship and innovative design solutions.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-2xl mb-4">
                  <Icon size={32} className="text-apple-blue dark:text-apple-blue-dark" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-apple-text dark:text-apple-text-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-apple-text-secondary dark:text-apple-text-secondary-dark font-medium">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-h3-mobile md:text-h3-desktop font-bold text-apple-text dark:text-apple-text-dark mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-apple-text-secondary dark:text-apple-text-secondary-dark">
              <p>
                Founded in 2008, Petriko Designers began with a simple mission: to create 
                beautiful spaces that inspire and delight. What started as a small painting 
                service has evolved into one of Kenya&apos;s most trusted interior design companies.
              </p>
              <p>
                Our team of skilled craftsmen and designers brings together traditional 
                techniques with modern innovations. We take pride in our attention to detail 
                and commitment to using only the finest materials.
              </p>
              <p>
                From residential homes to commercial spaces, we&apos;ve had the privilege of 
                transforming over 1,000 projects across Kenya. Each project is a testament 
                to our dedication to excellence and client satisfaction.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-apple-blue/10 to-apple-gold/10 dark:from-apple-blue-dark/10 dark:to-apple-gold/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl lg:text-8xl font-bold text-apple-blue dark:text-apple-blue-dark mb-4">
                  15+
                </div>
                <div className="text-xl font-semibold text-apple-text dark:text-apple-text-dark">
                  Years of Excellence
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-20"
        >
          <h3 className="text-h3-mobile md:text-h3-desktop font-bold text-apple-text dark:text-apple-text-dark text-center mb-12">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon
              return (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gradient-to-br from-apple-blue/5 to-apple-gold/5 dark:from-apple-blue-dark/5 dark:to-apple-gold/5 rounded-2xl p-6 text-center border border-apple-blue/10 dark:border-apple-blue-dark/10 hover:border-apple-blue/20 dark:hover:border-apple-blue-dark/20 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-2xl mb-4">
                    <Icon size={28} className="text-apple-blue dark:text-apple-blue-dark" />
                  </div>
                  <h4 className="text-lg font-semibold text-apple-text dark:text-apple-text-dark mb-2">
                    {award.title}
                  </h4>
                  <p className="text-apple-blue dark:text-apple-blue-dark font-medium text-sm mb-1">
                    {award.year}
                  </p>
                  <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark text-sm">
                    {award.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-20"
        >
          <h3 className="text-h3-mobile md:text-h3-desktop font-bold text-apple-text dark:text-apple-text-dark text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-apple-blue to-apple-gold hidden lg:block" />
            
            <div className="space-y-12 lg:space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Point */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-apple-blue dark:bg-apple-blue-dark rounded-full border-4 border-white dark:border-black shadow-lg z-10" />
                  
                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-apple-gray-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-white/10"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar size={20} className="text-apple-blue dark:text-apple-blue-dark" />
                        <span className="text-2xl font-bold text-apple-blue dark:text-apple-blue-dark">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-apple-text dark:text-apple-text-dark mb-3">
                        {item.title}
                      </h4>
                      <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark mb-4">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-full">
                        <Star size={14} className="text-apple-blue dark:text-apple-blue-dark mr-2" />
                        <span className="text-sm font-medium text-apple-blue dark:text-apple-blue-dark">
                          {item.milestone}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mb-20"
        >
          <h3 className="text-h3-mobile md:text-h3-desktop font-bold text-apple-text dark:text-apple-text-dark text-center mb-4">
            Meet Our Team
          </h3>
          <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark text-center mb-12 max-w-2xl mx-auto">
            Our talented team of designers, craftsmen, and project managers work together to bring your vision to life.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, showAllTeam ? teamMembers.length : 3).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.4 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-apple-gray-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-white/10 group"
              >
                <div className="relative mb-6">
                  <div className="aspect-square relative rounded-2xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h4 className="text-xl font-semibold text-apple-text dark:text-apple-text-dark mb-2">
                  {member.name}
                </h4>
                <p className="text-apple-blue dark:text-apple-blue-dark font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Contact Icons */}
                <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.open(`mailto:${member.contact.email}`)}
                    className="w-8 h-8 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-full flex items-center justify-center hover:bg-apple-blue hover:text-white dark:hover:bg-apple-blue-dark transition-colors duration-200"
                  >
                    <Mail size={14} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.open(`tel:${member.contact.phone}`)}
                    className="w-8 h-8 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-full flex items-center justify-center hover:bg-apple-blue hover:text-white dark:hover:bg-apple-blue-dark transition-colors duration-200"
                  >
                    <Phone size={14} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.open(member.contact.linkedin)}
                    className="w-8 h-8 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-full flex items-center justify-center hover:bg-apple-blue hover:text-white dark:hover:bg-apple-blue-dark transition-colors duration-200"
                  >
                    <Linkedin size={14} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Show More Team Button */}
          {teamMembers.length > 3 && (
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllTeam(!showAllTeam)}
                className="inline-flex items-center px-6 py-3 bg-apple-gray hover:bg-gray-300 dark:bg-apple-gray-dark dark:hover:bg-gray-700 text-apple-text dark:text-apple-text-dark rounded-full font-medium transition-all duration-200"
              >
                {showAllTeam ? 'Show Less' : 'Meet Full Team'}
                {showAllTeam ? (
                  <ChevronUp size={18} className="ml-2" />
                ) : (
                  <ChevronDown size={18} className="ml-2" />
                )}
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-h3-mobile md:text-h3-desktop font-bold text-apple-text dark:text-apple-text-dark text-center mb-12">
            Our Values
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-apple-gray/50 dark:bg-apple-gray-dark/50 rounded-2xl p-6 apple-blur border border-gray-200/50 dark:border-white/10"
              >
                <h4 className="text-xl font-semibold text-apple-text dark:text-apple-text-dark mb-3">
                  {value.title}
                </h4>
                <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark dark:hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Work With Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default About
