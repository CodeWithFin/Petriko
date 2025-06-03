'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Clock, Target } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
