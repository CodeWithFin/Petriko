export interface Project {
  id: number
  title: string
  category: 'featured' | 'residential' | 'commercial'
  type: string
  description: string
  longDescription: string
  image: string
  beforeImage?: string
  afterImage?: string
  gallery?: string[]
  details: string
  year: string
  location: string
  client: string
  services: string[]
  duration: string
  area?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Mirema Luxury Apartments',
    category: 'featured',
    type: 'Residential Complex',
    description: 'Complete interior design and painting transformation of luxury apartments in Mirema.',
    longDescription: 'A comprehensive renovation project that transformed 24 luxury apartments in Mirema Drive. Our team worked closely with the property developers to create modern, sophisticated living spaces that appeal to young professionals and families. The project involved custom color schemes, premium finishes, and smart space planning to maximize the available area.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&blur=10',
    afterImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1631179910002-93edd2f8b605?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4f0?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=400&fit=crop'
    ],
    details: 'Modern interior design with premium finishes and custom color schemes.',
    year: '2024',
    location: 'Mirema Drive, Nairobi',
    client: 'Mirema Properties Ltd',
    services: ['Interior Design', 'Paint Works', 'Wallpaper Installation', 'Stone Finish'],
    duration: '3 months',
    area: '2,400 sq ft per unit'
  },
  {
    id: 2,
    title: 'DCI Headquarters Office',
    category: 'featured',
    type: 'Government Office',
    description: 'Professional office space design for DCI headquarters with corporate aesthetics.',
    longDescription: 'A prestigious project to redesign the Directorate of Criminal Investigations headquarters office spaces. The project required balancing professionalism with approachability while maintaining security considerations. We implemented a modern corporate design with neutral color palettes and high-quality finishes that reflect the institution\'s authority and trustworthiness.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&blur=10',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1486312338219-ce68ba2de57a?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop'
    ],
    details: 'Sophisticated government office design emphasizing professionalism and security.',
    year: '2024',
    location: 'Kiambu Road, Nairobi',
    client: 'Directorate of Criminal Investigations',
    services: ['Interior Design', 'Paint Works', 'Special Effects', 'Skimming'],
    duration: '4 months',
    area: '15,000 sq ft'
  },
  {
    id: 3,
    title: 'Utawala Family Residence',
    category: 'residential',
    type: 'Private Home',
    description: 'Elegant residential interior with custom stone finishes and modern amenities.',
    longDescription: 'This beautiful family home in Utawala received a complete makeover focusing on creating warm, inviting spaces for family living. The project incorporated natural stone finishes, custom-built furniture, and a sophisticated color palette that complements the home\'s architecture. Special attention was paid to creating child-friendly spaces while maintaining elegance throughout.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&blur=10',
    afterImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1631179910002-93edd2f8b605?w=400&h=400&fit=crop'
    ],
    details: 'Luxury family home design featuring natural materials and premium craftsmanship.',
    year: '2023',
    location: 'Utawala, Nairobi',
    client: 'Private Client',
    services: ['Interior Design', 'Stone Finish', 'Paint Works', 'Wallpaper Installation'],
    duration: '2 months',
    area: '3,200 sq ft'
  },
  {
    id: 4,
    title: 'Westlands Corporate Plaza',
    category: 'commercial',
    type: 'Office Complex',
    description: 'Modern corporate office design with premium finishes and state-of-the-art facilities.',
    longDescription: 'A landmark commercial project in the heart of Westlands business district. The 12-story office complex required a cohesive design theme that would appeal to international corporations while reflecting Kenyan sophistication. Our team created flexible office spaces with premium finishes, innovative lighting solutions, and sustainable materials.',
    image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop&blur=10',
    afterImage: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1486312338219-ce68ba2de57a?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop'
    ],
    details: 'International standard office complex with premium corporate aesthetics.',
    year: '2023',
    location: 'Westlands, Nairobi',
    client: 'Westlands Properties Ltd',
    services: ['Interior Design', 'Paint Works', 'Special Effects', 'Stone Finish', 'Ruff & Tuff'],
    duration: '8 months',
    area: '45,000 sq ft'
  },
  {
    id: 5,
    title: 'Karen Luxury Villa',
    category: 'residential',
    type: 'Luxury Home',
    description: 'Opulent villa renovation with imported finishes and custom artistic elements.',
    longDescription: 'An exclusive project in Karen\'s prestigious neighborhood, this luxury villa renovation showcased our capability to work with high-end materials and sophisticated design concepts. The project included imported Italian marble, custom murals, gold leaf accents, and smart home integration while respecting the property\'s colonial architectural heritage.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&blur=10',
    afterImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop'
    ],
    details: 'Ultra-luxury villa renovation with imported materials and artistic finishes.',
    year: '2023',
    location: 'Karen, Nairobi',
    client: 'Private Client',
    services: ['Interior Design', 'Stone Finish', 'Special Effects', 'Paint Works', 'Wallpaper Installation'],
    duration: '5 months',
    area: '8,500 sq ft'
  },
  {
    id: 6,
    title: 'Kilimani Modern Apartments',
    category: 'residential',
    type: 'Apartment Complex',
    description: 'Contemporary apartment complex with smart space utilization and modern aesthetics.',
    longDescription: 'This project involved the complete interior finishing of 36 modern apartments in Kilimani. Our focus was on creating contemporary living spaces that maximize natural light and optimize the relatively compact floor plans. We used neutral color palettes with bold accent walls and incorporated built-in storage solutions throughout.',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop&blur=10',
    afterImage: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1631179910002-93edd2f8b605?w=400&h=400&fit=crop'
    ],
    details: 'Smart contemporary design maximizing space and natural light.',
    year: '2024',
    location: 'Kilimani, Nairobi',
    client: 'Kilimani Developers',
    services: ['Interior Design', 'Paint Works', 'Skimming', 'Wallpaper Installation'],
    duration: '4 months',
    area: '1,200 sq ft per unit'
  },
  {
    id: 7,
    title: 'CBD Bank Branch',
    category: 'commercial',
    type: 'Financial Institution',
    description: 'Secure and welcoming bank branch design with premium customer experience focus.',
    longDescription: 'A challenging project that required balancing security requirements with customer comfort and brand representation. The bank branch design incorporated advanced security features while creating a welcoming atmosphere for customers. Premium materials, sophisticated lighting, and efficient space planning were key elements of this successful commercial project.',
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&h=600&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&h=600&fit=crop&blur=10',
    afterImage: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1486312338219-ce68ba2de57a?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop'
    ],
    details: 'Premium financial institution design balancing security with customer comfort.',
    year: '2024',
    location: 'CBD, Nairobi',
    client: 'Confidential Bank Client',
    services: ['Interior Design', 'Paint Works', 'Stone Finish', 'Ruff & Tuff', 'Special Effects'],
    duration: '3 months',
    area: '4,500 sq ft'
  },
  {
    id: 8,
    title: 'Runda Executive Home',
    category: 'residential',
    type: 'Executive Residence',
    description: 'Sophisticated executive home with international standard finishes and smart features.',
    longDescription: 'This executive residence in Runda represents the pinnacle of residential design in Kenya. The project incorporated international design standards with local craftsmanship, featuring smart home technology, premium imported materials, and custom artistic elements. Every detail was carefully planned to create a sophisticated yet comfortable family environment.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&blur=10',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop'
    ],
    details: 'International standard executive residence with smart home integration.',
    year: '2023',
    location: 'Runda, Nairobi',
    client: 'Private Executive Client',
    services: ['Interior Design', 'Stone Finish', 'Special Effects', 'Paint Works', 'Wallpaper Installation'],
    duration: '6 months',
    area: '6,800 sq ft'
  }
]

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

export const getFeaturedProjects = () => {
  return projects.filter(project => project.category === 'featured')
}
