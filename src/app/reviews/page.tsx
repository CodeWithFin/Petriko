'use client'

import { Metadata } from 'next'
import ReviewForm from '../../components/ReviewForm'

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-apple-gray to-white dark:from-black dark:to-apple-gray-dark py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-apple-text dark:text-apple-text-dark mb-6">
            Share Your Experience
          </h1>
          <p className="text-xl text-apple-text-secondary dark:text-apple-text-secondary-dark max-w-2xl mx-auto">
            Your feedback helps us improve and helps others discover Petriko Designers. 
            Submit your review and see it appear live on our website!
          </p>
        </div>

        {/* Review Form */}
        <div className="max-w-2xl mx-auto">
          <ReviewForm />
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/80 dark:bg-apple-gray-dark/80 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-white/10">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-apple-text dark:text-apple-text-dark mb-2">Instant Publishing</h3>
            <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark">Your review appears on the website immediately after submission</p>
          </div>

          <div className="bg-white/80 dark:bg-apple-gray-dark/80 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-white/10">
            <div className="w-12 h-12 bg-apple-blue/10 dark:bg-apple-blue-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-apple-blue dark:text-apple-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-apple-text dark:text-apple-text-dark mb-2">Verified Reviews</h3>
            <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark">All reviews are from real clients who worked with Petriko Designers</p>
          </div>

          <div className="bg-white/80 dark:bg-apple-gray-dark/80 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-white/10">
            <div className="w-12 h-12 bg-apple-gold/20 dark:bg-apple-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-apple-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-apple-text dark:text-apple-text-dark mb-2">Help Others</h3>
            <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark">Your honest feedback helps future clients make informed decisions</p>
          </div>
        </div>
      </div>
    </div>
  )
}
