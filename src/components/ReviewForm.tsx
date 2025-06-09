'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Send, User, Mail, MapPin, Briefcase, MessageSquare } from 'lucide-react'

interface ReviewFormProps {
  onSubmit?: (review: any) => void
}

const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: '',
    project: '',
    location: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [hoveredStar, setHoveredStar] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          rating: 5,
          comment: '',
          project: '',
          location: ''
        })
        onSubmit?.(result.review)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting review:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 dark:bg-apple-gray-dark/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-200/50 dark:border-white/10"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-apple-text dark:text-apple-text-dark mb-2">
          Share Your Experience
        </h3>
        <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark">
          Help others by sharing your experience with Petriko Designers
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-apple-text dark:text-apple-text-dark mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-apple-gray-dark rounded-lg focus:ring-2 focus:ring-apple-blue dark:focus:ring-apple-blue-dark focus:border-apple-blue dark:focus:border-apple-blue-dark transition-colors text-apple-text dark:text-apple-text-dark"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-apple-text dark:text-apple-text-dark mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-apple-gray-dark rounded-lg focus:ring-2 focus:ring-apple-blue dark:focus:ring-apple-blue-dark focus:border-apple-blue dark:focus:border-apple-blue-dark transition-colors text-apple-text dark:text-apple-text-dark"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Project and Location */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="project" className="block text-sm font-medium text-apple-text dark:text-apple-text-dark mb-2">
              <Briefcase className="w-4 h-4 inline mr-2" />
              Project Name
            </label>
            <input
              type="text"
              id="project"
              name="project"
              value={formData.project}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-apple-gray-dark rounded-lg focus:ring-2 focus:ring-apple-blue dark:focus:ring-apple-blue-dark focus:border-apple-blue dark:focus:border-apple-blue-dark transition-colors text-apple-text dark:text-apple-text-dark"
              placeholder="e.g., Modern Kitchen Renovation"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-apple-text dark:text-apple-text-dark mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-apple-gray-dark rounded-lg focus:ring-2 focus:ring-apple-blue dark:focus:ring-apple-blue-dark focus:border-apple-blue dark:focus:border-apple-blue-dark transition-colors text-apple-text dark:text-apple-text-dark"
              placeholder="e.g., Nairobi, Kenya"
            />
          </div>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-apple-text dark:text-apple-text-dark mb-2">
            Rating *
          </label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                className="p-1 hover:scale-110 transition-transform"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredStar || formData.rating)
                      ? 'text-apple-gold fill-current'
                      : 'text-gray-300 dark:text-gray-600'
                  } transition-colors`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Comment */}
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-apple-text dark:text-apple-text-dark mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Your Review *
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-apple-gray-dark rounded-lg focus:ring-2 focus:ring-apple-blue dark:focus:ring-apple-blue-dark focus:border-apple-blue dark:focus:border-apple-blue-dark transition-colors resize-none text-apple-text dark:text-apple-text-dark"
            placeholder="Share your experience with Petriko Designers..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark dark:hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Submit Review</span>
            </>
          )}
        </motion.button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-400 px-4 py-3 rounded-lg text-center"
          >
            Thank you! Your review has been submitted and will appear live on the website.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-400 px-4 py-3 rounded-lg text-center"
          >
            Something went wrong. Please try again later.
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}

export default ReviewForm
