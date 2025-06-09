'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle,
  Upload,
  X,
  FileImage,
  AlertCircle,
  Eye
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  location: string
  projectType: string
  message: string
  budget: string
}

interface UploadedFile {
  file: File
  preview?: string
  id: string
}

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [selectedServiceArea, setSelectedServiceArea] = useState<any>(null)

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>()

  // Check for service area information from ServiceAreaMap
  useEffect(() => {
    const areaInfo = sessionStorage.getItem('selectedServiceArea')
    if (areaInfo) {
      try {
        const parsedInfo = JSON.parse(areaInfo)
        setSelectedServiceArea(parsedInfo)
        setValue('location', `${parsedInfo.name}, ${parsedInfo.region}`)
        // Clear the session storage after using it
        sessionStorage.removeItem('selectedServiceArea')
      } catch (error) {
        console.error('Error parsing service area info:', error)
      }
    }
  }, [setValue])

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      primary: '0726 452055',
      secondary: ['0726 379289', '0714 995033', '0771 191801'],
      action: (number: string) => window.open(`tel:${number}`)
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick chat on WhatsApp',
      primary: '0726 452055',
      secondary: [],
      action: () => window.open('https://wa.me/254726452055')
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us a detailed message',
      primary: 'petricolimited@gmail.com',
      secondary: [],
      action: () => window.open('mailto:petricolimited@gmail.com')
    },
    {
      icon: MapPin,
      title: 'Address',
      description: 'Visit our office',
      primary: 'P.O BOX 817 00200',
      secondary: ['Nairobi, Kenya'],
      action: () => {}
    }
  ]

  const projectTypes = [
    'Interior Design',
    'Paint Works',
    'Stone Finish',
    'Special Effects',
    'Wallpaper Installation',
    'Complete Renovation',
    'Other'
  ]

  const budgetRanges = [
    'Under KSh 100,000',
    'KSh 100,000 - 500,000',
    'KSh 500,000 - 1,000,000',
    'KSh 1,000,000 - 2,000,000',
    'Over KSh 2,000,000'
  ]

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setUploadError(null)
    
    try {
      // Create FormData for API submission
      const formData = new window.FormData()
      
      // Add form fields
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('phone', data.phone)
      formData.append('location', data.location)
      formData.append('projectType', data.projectType)
      formData.append('message', data.message)
      formData.append('budget', data.budget || '')
      
      // Add uploaded files
      uploadedFiles.forEach((uploadedFile) => {
        formData.append('files', uploadedFile.file)
      })

      // Submit to API
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        // Clean up preview URLs
        uploadedFiles.forEach(file => {
          if (file.preview) {
            URL.revokeObjectURL(file.preview)
          }
        })
        
        setIsSubmitted(true)
        reset()
        setCurrentStep(1)
        setUploadedFiles([])
        setUploadError(null)
        setPreviewImage(null)
      } else {
        throw new Error(result.message || 'Failed to send quote request')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      
      // Show the specific error message from the API if available
      if (error instanceof Error) {
        setUploadError(error.message)
      } else {
        setUploadError('Failed to send quote request. Please try again or contact us directly at petricolimited@gmail.com or call 0726 452055.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    processFiles(files)
  }

  const processFiles = (files: File[]) => {
    // Filter for image files and limit size
    const maxSize = 10 * 1024 * 1024 // 10MB
    const validFiles = files.filter(file => {
      if (!file.type.startsWith('image/')) {
        setUploadError('Only image files are allowed')
        return false
      }
      if (file.size > maxSize) {
        setUploadError(`File ${file.name} is too large. Maximum size is 10MB.`)
        return false
      }
      return true
    })

    if (validFiles.length === 0) return

    setUploadError(null)
    const newUploadedFiles: UploadedFile[] = validFiles.map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      preview: URL.createObjectURL(file)
    }))
    setUploadedFiles(prev => [...prev, ...newUploadedFiles])
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(false)
    const files = Array.from(event.dataTransfer.files)
    processFiles(files)
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => {
      const fileToRemove = prev[index]
      // Clean up preview URL to prevent memory leaks
      if (fileToRemove.preview) {
        URL.revokeObjectURL(fileToRemove.preview)
      }
      return prev.filter((_, i) => i !== index)
    })
  }

  // Clean up preview URLs when component unmounts
  useEffect(() => {
    return () => {
      uploadedFiles.forEach(file => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview)
        }
      })
    }
  }, [uploadedFiles])

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-32 bg-apple-gray/30 dark:bg-apple-gray-dark/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-apple-gray-dark rounded-3xl p-12 shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
            </motion.div>
            <h3 className="text-3xl font-bold text-apple-text dark:text-apple-text-dark mb-4">
              Thank You!
            </h3>
            <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark mb-8">
              We&apos;ve received your quote request and will get back to you within 24 hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark text-white rounded-full font-semibold transition-all duration-200"
            >
              Send Another Request
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-apple-gray/30 dark:bg-apple-gray-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-h2-mobile md:text-h2-desktop font-bold text-apple-text dark:text-apple-text-dark mb-6"
          >
            Let&apos;s create something extraordinary.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-mobile md:text-body-desktop text-apple-text-secondary dark:text-apple-text-secondary-dark max-w-3xl mx-auto"
          >
            Ready to transform your space? Get in touch with us today for a free consultation 
            and personalized quote.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-apple-text dark:text-apple-text-dark mb-8">
              Get In Touch
            </h3>
            
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-apple-gray-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => method.action(method.primary)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-apple-blue dark:text-apple-blue-dark" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-apple-text dark:text-apple-text-dark mb-1">
                        {method.title}
                      </h4>
                      <p className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark mb-2">
                        {method.description}
                      </p>
                      <p className="text-apple-blue dark:text-apple-blue-dark font-medium">
                        {method.primary}
                      </p>
                      {method.secondary.map((item, idx) => (
                        <p key={idx} className="text-apple-text-secondary dark:text-apple-text-secondary-dark text-sm">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white dark:bg-apple-gray-dark rounded-3xl p-8 shadow-2xl"
          >
            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step <= currentStep 
                      ? 'bg-apple-blue text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-12 h-1 mx-2 ${
                      step < currentStep ? 'bg-apple-blue' : 'bg-gray-200 dark:bg-gray-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold text-apple-text dark:text-apple-text-dark">
                    Contact Information
                  </h3>
                  
                  <div>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-apple-gray-dark text-apple-text dark:text-apple-text-dark focus:border-apple-blue dark:focus:border-apple-blue-dark focus:outline-none transition-colors"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-apple-gray-dark text-apple-text dark:text-apple-text-dark focus:border-apple-blue dark:focus:border-apple-blue-dark focus:outline-none transition-colors"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <input
                      {...register('phone', { required: 'Phone number is required' })}
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-apple-gray-dark text-apple-text dark:text-apple-text-dark focus:border-apple-blue dark:focus:border-apple-blue-dark focus:outline-none transition-colors"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <input
                      {...register('location', { required: 'Location is required' })}
                      type="text"
                      placeholder="Project Location (City, County)"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-apple-gray-dark text-apple-text dark:text-apple-text-dark focus:border-apple-blue dark:focus:border-apple-blue-dark focus:outline-none transition-colors"
                    />
                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
                  </div>

                  {selectedServiceArea && (
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                          Service Area Selected
                        </span>
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-200">
                        {selectedServiceArea.name} - {selectedServiceArea.region}
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
                        Our local team will handle your project: {selectedServiceArea.phone}
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold text-apple-text dark:text-apple-text-dark">
                    Project Details
                  </h3>

                  <div>
                    <select
                      {...register('projectType', { required: 'Please select a project type' })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-apple-gray-dark text-apple-text dark:text-apple-text-dark focus:border-apple-blue dark:focus:border-apple-blue-dark focus:outline-none transition-colors"
                    >
                      <option value="">Select Service Type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>}
                  </div>

                  <div>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-apple-gray-dark text-apple-text dark:text-apple-text-dark focus:border-apple-blue dark:focus:border-apple-blue-dark focus:outline-none transition-colors"
                    >
                      <option value="">Select Budget Range (Optional)</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <textarea
                      {...register('message', { required: 'Please describe your project' })}
                      rows={4}
                      placeholder="Describe your project in detail..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-apple-gray-dark text-apple-text dark:text-apple-text-dark focus:border-apple-blue dark:focus:border-apple-blue-dark focus:outline-none transition-colors resize-none"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                </motion.div>
              )}

              {/* Step 3: File Upload */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold text-apple-text dark:text-apple-text-dark">
                    Upload Reference Images
                  </h3>
                  <p className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark">
                    Upload photos of your space or inspiration images (optional)
                  </p>

                  <div 
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                      isDragOver 
                        ? 'border-apple-blue bg-apple-blue/5 dark:bg-apple-blue-dark/5' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <Upload size={48} className={`mx-auto mb-4 ${
                      isDragOver ? 'text-apple-blue' : 'text-apple-blue dark:text-apple-blue-dark'
                    }`} />
                    <p className="text-apple-text dark:text-apple-text-dark mb-2">
                      {isDragOver ? 'Drop files here' : 'Drag and drop files here, or click to select'}
                    </p>
                    <p className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark mb-4">
                      Supported formats: JPG, PNG, GIF • Max size: 10MB per file
                    </p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-block px-6 py-2 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark text-white rounded-full cursor-pointer transition-colors"
                    >
                      Choose Files
                    </label>
                  </div>

                  {uploadError && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                      <span className="text-sm text-red-700 dark:text-red-300">{uploadError}</span>
                    </div>
                  )}

                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      {uploadedFiles.map((uploadedFile, index) => (
                        <div key={uploadedFile.id || index} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                          <div className="flex items-center space-x-3">
                            <FileImage size={16} className="text-apple-blue dark:text-apple-blue-dark" />
                            <span className="text-sm text-apple-text dark:text-apple-text-dark">
                              {uploadedFile.file.name}
                            </span>
                            <span className="text-xs text-apple-text-secondary dark:text-apple-text-secondary-dark">
                              ({(uploadedFile.file.size / 1024 / 1024).toFixed(1)} MB)
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {uploadedFile.preview && (
                              <button
                                type="button"
                                onClick={() => setPreviewImage(uploadedFile.preview!)}
                                className="text-apple-blue hover:text-blue-700 dark:text-apple-blue-dark"
                                title="Preview image"
                              >
                                <Eye size={16} />
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700"
                              title="Remove file"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold text-apple-text dark:text-apple-text-dark">
                    Review & Submit
                  </h3>
                  <div className="bg-apple-gray/50 dark:bg-gray-700/50 rounded-xl p-6 space-y-4">
                    <p className="text-apple-text dark:text-apple-text-dark">
                      <strong>Ready to submit your quote request?</strong>
                    </p>
                    <p className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark">
                      We&apos;ll review your request and get back to you within 24 hours with a detailed quote and consultation appointment.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                {uploadError && (
                  <div className="w-full mb-4 flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <span className="text-sm text-red-700 dark:text-red-300">{uploadError}</span>
                  </div>
                )}
                
                {currentStep > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-apple-text dark:text-apple-text-dark rounded-full font-semibold transition-all duration-200"
                  >
                    Previous
                  </motion.button>
                )}
                
                <div className="ml-auto">
                  {currentStep < 4 ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark text-white rounded-full font-semibold transition-all duration-200 flex items-center"
                    >
                      Next
                      <Send size={16} className="ml-2" />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark text-white rounded-full font-semibold transition-all duration-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </motion.button>
                  )}
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Image Preview Modal */}
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] bg-white dark:bg-apple-gray-dark rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setPreviewImage(null)}
                  className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Contact
