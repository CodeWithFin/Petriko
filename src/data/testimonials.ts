export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  location: string
  image: string
  rating: number
  text: string
  project: string
  category: 'residential' | 'commercial' | 'featured'
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Mwangi",
    role: "Homeowner",
    company: "Private Residence",
    location: "Kiambu",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Petriko Designers transformed our home beyond our expectations. Their attention to detail and professional approach made the entire process seamless. The team was punctual, clean, and respectful of our space.",
    project: "Kiambu Modern Home",
    category: "residential"
  },
  {
    id: 2,
    name: "Sarah Njeri",
    role: "Operations Manager",
    company: "DCI Headquarters",
    location: "Nairobi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Working with Petriko on our headquarters was exceptional. They understood our corporate requirements and delivered a space that perfectly represents our brand while maintaining functionality.",
    project: "DCI Headquarters",
    category: "commercial"
  },
  {
    id: 3,
    name: "David Kamau",
    role: "Property Developer",
    company: "Kamau Properties",
    location: "Utawala",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I've worked with many contractors over the years, but Petriko stands out for their quality and reliability. They completed our residential project on time and within budget. Highly recommended!",
    project: "Utawala Residence",
    category: "residential"
  },
  {
    id: 4,
    name: "Grace Wanjiku",
    role: "Interior Designer",
    company: "Grace Interiors",
    location: "Ruiru",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "As a fellow designer, I appreciate quality work when I see it. Petriko's team executed our collaboration flawlessly, bringing our shared vision to life with precision and artistry.",
    project: "Ruiru Family Home",
    category: "residential"
  },
  {
    id: 5,
    name: "Michael Ochieng",
    role: "CEO",
    company: "Acceler Global Logistics",
    location: "Nairobi",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Petriko delivered a modern, professional office space that has impressed both our team and clients. Their understanding of corporate aesthetics is outstanding.",
    project: "Acceler Global Logistics Office",
    category: "commercial"
  },
  {
    id: 6,
    name: "Anne Mutindi",
    role: "Homeowner",
    company: "Private Villa",
    location: "Langata",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The luxury finishes and attention to detail in our villa renovation exceeded all expectations. Petriko's team maintained the highest standards throughout the project.",
    project: "Langata Villa",
    category: "featured"
  },
  {
    id: 7,
    name: "Peter Kimani",
    role: "Architect",
    company: "Kimani & Associates",
    location: "Babadogo",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Collaborating with Petriko on this contemporary home project was a pleasure. They understood the architectural vision and executed it with innovative techniques.",
    project: "Babadogo Residence",
    category: "residential"
  },
  {
    id: 8,
    name: "Lucy Wambui",
    role: "Restaurant Owner",
    company: "Wambui's Kitchen",
    location: "Westlands",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Petriko helped create the perfect ambiance for our restaurant. The commercial-grade finishes look stunning and have held up beautifully to heavy daily use.",
    project: "Westlands Restaurant",
    category: "commercial"
  }
]

export const getTestimonialsByCategory = (category: string): Testimonial[] => {
  if (category === 'all') {
    return testimonials
  }
  return testimonials.filter(testimonial => testimonial.category === category)
}

export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.slice(0, 6) // Return first 6 testimonials for the main section
}
