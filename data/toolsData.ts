import { 
  FaRobot, 
  FaImage, 
  FaChartBar, 
  FaFileAlt, 
  FaCode, 
  FaPenFancy, 
  FaBrain,
  FaMusic,
  FaRegLightbulb,
  FaBookOpen,
  FaChartLine,
  FaClipboardList,
  FaSearchPlus,
  FaRegFileCode,
  FaPencilAlt,
  FaEnvelope,
  FaRegComments,
  FaMagic
} from 'react-icons/fa'

export const toolCategories = [
  {
    id: 'content',
    name: 'Content Creation',
    icon: FaPenFancy,
    description: 'Generate blog posts, articles, social media content, and more with AI assistance.'
  },
  {
    id: 'business',
    name: 'Business Tools',
    icon: FaChartLine,
    description: 'Enhance your business communications, marketing, and analysis with specialized AI tools.'
  },
  {
    id: 'media',
    name: 'Media & Creative',
    icon: FaImage,
    description: 'Create, analyze, and enhance visual and audio content with AI-powered tools.'
  },
  {
    id: 'dev',
    name: 'Developer Tools',
    icon: FaCode,
    description: 'Boost your programming workflow with code generation, debugging, and analysis tools.'
  },
  {
    id: 'academic',
    name: 'Academic & Research',
    icon: FaBookOpen,
    description: 'Accelerate your research, enhance your writing, and generate insights from complex data.'
  }
]

export const toolsData = [
  // Content Creation
  {
    id: 'blog-writer',
    title: 'Blog Article Generator',
    shortDescription: 'Create engaging blog posts quickly',
    description: 'Generate professionally written, SEO-optimized blog posts and articles on any topic.',
    icon: FaPenFancy,
    category: 'content',
    isPopular: true
  },
  {
    id: 'social-media',
    title: 'Social Media Content',
    shortDescription: 'Create platform-specific content',
    description: 'Generate engaging posts for Instagram, Twitter, LinkedIn, and other social platforms.',
    icon: FaRegComments,
    category: 'content'
  },
  {
    id: 'content-rewriter',
    title: 'Content Rewriter',
    shortDescription: 'Rewrite content in different styles',
    description: 'Transform existing content into new formats or styles while preserving the core message.',
    icon: FaPencilAlt,
    category: 'content'
  },
  {
    id: 'summarizer',
    title: 'Content Summarizer',
    shortDescription: 'Create concise summaries of long texts',
    description: 'Quickly summarize long articles, research papers, and documents with AI.',
    icon: FaFileAlt,
    category: 'content'
  },
  
  // Business Tools
  {
    id: 'email-writer',
    title: 'Email Assistant',
    shortDescription: 'Draft professional emails quickly',
    description: 'Generate professional, well-structured emails for various business purposes.',
    icon: FaEnvelope,
    category: 'business',
    isPopular: true
  },
  {
    id: 'marketing-copy',
    title: 'Marketing Copy',
    shortDescription: 'Create persuasive marketing materials',
    description: 'Generate compelling marketing copy for ads, landing pages, and product descriptions.',
    icon: FaMagic,
    category: 'business'
  },
  {
    id: 'data-analyzer',
    title: 'Business Data Analyzer',
    shortDescription: 'Extract insights from business data',
    description: 'Analyze business metrics and generate insights, reports, and recommendations.',
    icon: FaChartLine,
    category: 'business'
  },
  {
    id: 'meeting-assistant',
    title: 'Meeting Assistant',
    shortDescription: 'Prepare agendas and summarize meetings',
    description: 'Create meeting agendas, generate talking points, and summarize meeting outcomes.',
    icon: FaClipboardList,
    category: 'business'
  },
  
  // Media & Creative
  {
    id: 'image-analyzer',
    title: 'Image Analyzer',
    shortDescription: 'Extract information from images',
    description: 'Analyze and extract information from images using computer vision technology.',
    icon: FaImage,
    category: 'media'
  },
  {
    id: 'creative-writer',
    title: 'Creative Writing Assistant',
    shortDescription: 'Generate creative content and stories',
    description: 'Create stories, poems, scripts, and other creative content with AI assistance.',
    icon: FaRegLightbulb,
    category: 'media',
    isNew: true
  },
  {
    id: 'music-creator',
    title: 'Music Creator',
    shortDescription: 'Generate music and audio',
    description: 'Generate unique musical compositions and sound effects based on your specifications.',
    icon: FaMusic,
    category: 'media',
    isNew: true
  },
  
  // Developer Tools
  {
    id: 'code-generator',
    title: 'Code Generator',
    shortDescription: 'Generate code in multiple languages',
    description: 'Generate code snippets, functions, and boilerplate for various programming languages.',
    icon: FaCode,
    category: 'dev',
    isNew: true
  },
  {
    id: 'code-explainer',
    title: 'Code Explainer',
    shortDescription: 'Get detailed explanations of code',
    description: 'Receive clear, detailed explanations of complex code blocks and algorithms.',
    icon: FaRegFileCode,
    category: 'dev'
  },
  {
    id: 'code-debugger',
    title: 'Code Debugger',
    shortDescription: 'Identify and fix code issues',
    description: 'Find and fix bugs in your code with AI-powered debugging suggestions.',
    icon: FaSearchPlus,
    category: 'dev'
  },
  
  // Academic & Research
  {
    id: 'research-assistant',
    title: 'Research Assistant',
    shortDescription: 'Generate research questions and analysis',
    description: 'Generate research questions, literature review summaries, and analysis frameworks.',
    icon: FaBookOpen,
    category: 'academic',
    isPopular: true
  },
  {
    id: 'data-visualizer',
    title: 'Data Visualizer',
    shortDescription: 'Create visualizations from data',
    description: 'Transform your data into insightful visualizations with AI-powered analysis.',
    icon: FaChartBar,
    category: 'academic'
  },
  {
    id: 'study-helper',
    title: 'Study Helper',
    shortDescription: 'Create study materials and quizzes',
    description: 'Generate study guides, practice questions, and educational content for any subject.',
    icon: FaBrain,
    category: 'academic'
  }
]

// Popular Prompts
export const popularPrompts = [
  {
    id: 'blog-outline',
    title: 'Blog Post Outline',
    description: 'Generate a detailed outline for a blog post on any topic with sections and key points.',
    icon: FaClipboardList,
    category: 'content'
  },
  {
    id: 'email-cold-outreach',
    title: 'Cold Outreach Email',
    description: 'Create a personalized cold outreach email template that gets responses.',
    icon: FaEnvelope,
    category: 'business'
  },
  {
    id: 'linkedin-post',
    title: 'LinkedIn Post',
    description: 'Generate an engaging LinkedIn post that drives engagement and showcases expertise.',
    icon: FaRegComments,
    category: 'content'
  },
  {
    id: 'code-review',
    title: 'Code Review',
    description: 'Get a detailed review of your code with suggestions for improvements and optimizations.',
    icon: FaCode,
    category: 'dev'
  },
  {
    id: 'research-summary',
    title: 'Research Paper Summary',
    description: 'Create a concise summary of any research paper highlighting key findings and methodologies.',
    icon: FaFileAlt,
    category: 'academic'
  },
  {
    id: 'product-description',
    title: 'Product Description',
    description: 'Generate compelling product descriptions that highlight benefits and features.',
    icon: FaMagic,
    category: 'business'
  }
]

/**
 * Tool interface and data definitions
 */

// Define the Tool interface
export interface Tool {
  id: string;
  name?: string;        // Make optional since toolsData uses title instead
  title?: string;       // From toolsData
  description: string;
  shortDescription?: string;
  icon?: any;           // Changed from string to any to accommodate IconType
  category?: string;
  enabled?: boolean;    // Make optional since toolsData doesn't have this
  isPopular?: boolean;  // Add other properties from toolsData
  isNew?: boolean;
}

// Utility function to convert a toolsData item to a Tool
export function convertToTool(toolData: any): Tool {
  return {
    id: toolData.id,
    name: toolData.title || toolData.name, // Use title as name if available
    title: toolData.title,
    description: toolData.description,
    shortDescription: toolData.shortDescription,
    icon: toolData.icon,
    category: toolData.category,
    enabled: true, // Default to enabled
    isPopular: toolData.isPopular,
    isNew: toolData.isNew
  };
}

// Example tool data
export const tools: Tool[] = [
  {
    id: 'search',
    name: 'Web Search',
    description: 'Search the internet for information',
    enabled: true
  },
  {
    id: 'calculator',
    name: 'Calculator',
    description: 'Perform mathematical calculations',
    enabled: true
  },
  {
    id: 'docs',
    name: 'Document Retrieval',
    description: 'Access and search through documents',
    enabled: true
  }
];

// Default export for convenience
export default tools;
