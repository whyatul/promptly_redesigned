'use client'

import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Content Creator",
    quote: "Promptly has completely transformed my content creation process. I'm able to produce high-quality articles in half the time it used to take me.",
    avatarInitial: "S",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    quote: "Our marketing team has seen a 40% increase in productivity since we started using these AI tools. The prompt library is especially valuable.",
    avatarInitial: "M",
  },
  {
    id: 3,
    name: "David Wilson",
    role: "Software Developer",
    quote: "The code generation tools have helped me solve complex problems much faster. It's like having an expert programmer looking over my shoulder.",
    avatarInitial: "D",
  },
  {
    id: 4,
    name: "Emily Carter",
    role: "Freelance Writer",
    quote: "The variety of content creation tools is amazing. From blog posts to social media captions, Promptly handles it all efficiently.",
    avatarInitial: "E",
  },
  {
    id: 5,
    name: "Raj Patel",
    role: "Small Business Owner",
    quote: "As a small business owner, Promptly saves me hours each week on marketing tasks. The email assistant is a lifesaver!",
    avatarInitial: "R",
  },
  {
    id: 6,
    name: "Jessica Lee",
    role: "Student",
    quote: "The research assistant and summarizer tools have been invaluable for my studies. It helps me process information much faster.",
    avatarInitial: "J",
  },
  {
    id: 7,
    name: "Kevin Garcia",
    role: "Web Developer",
    quote: "I use the code explainer daily. It makes understanding legacy code or new libraries so much easier.",
    avatarInitial: "K",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    role: "Social Media Manager",
    quote: "Generating creative and platform-specific content is a breeze with Promptly. My engagement rates have improved significantly.",
    avatarInitial: "O",
  },
  {
    id: 9,
    name: "Daniel Rodriguez",
    role: "Data Analyst",
    quote: "The data visualization tool helps me quickly create insightful charts from raw data. It's great for presentations.",
    avatarInitial: "D",
  },
  {
    id: 10,
    name: "Sophia Brown",
    role: "Academic Researcher",
    quote: "Promptly's academic tools assist me in drafting papers and summarizing complex research articles, saving me valuable time.",
    avatarInitial: "S",
  },
  {
    id: 11,
    name: "Ethan Nguyen",
    role: "UX Designer",
    quote: "I use Promptly to generate user personas and draft copy for interfaces. It speeds up the initial stages of design.",
    avatarInitial: "E",
  },
  {
    id: 12,
    name: "Chloe Kim",
    role: "E-commerce Manager",
    quote: "Writing compelling product descriptions used to be tedious. Now, Promptly helps me create effective copy quickly.",
    avatarInitial: "C",
  },
  {
    id: 13,
    name: "Marcus Thompson",
    role: "Technical Writer",
    quote: "The ability to rewrite content in different tones and styles is incredibly useful for creating documentation for various audiences.",
    avatarInitial: "M",
  },
]

// Duplicate the array for infinite scroll effect
const duplicatedTestimonials = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden"> {/* Changed background here */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Trusted by Professionals</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Hear what our users have to say about Promptly enhancing their workflow.
          </p>
        </div>
        
        {/* Wrapper to prevent overflow issues with animation */}
        <div className="w-full overflow-hidden"> 
          {/* Adjust padding on the scrolling container */}
          <div className="flex space-x-8 pb-8 scrollbar-hide px-4 sm:px-6 lg:px-8 animate-scroll-x-infinite hover:[animation-play-state:paused]"> 
            {/* Map over the duplicated array */}
            {duplicatedTestimonials.map((testimonial, index) => ( 
              <div 
                key={`${testimonial.id}-${index}`} 
                className="bg-card/80 border border-border/50 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 w-[350px] md:w-[400px] flex-shrink-0"
              >
                <div className="flex-grow mb-6">
                  <FaQuoteLeft className="text-primary/20 text-4xl mb-4" />
                  <p className="text-foreground/90 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center mt-auto pt-6 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-medium text-lg mr-4 flex-shrink-0">
                    {testimonial.avatarInitial}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
