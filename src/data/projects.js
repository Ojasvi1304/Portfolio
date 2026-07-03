// Shape: { id, title, description, techStack[], liveUrl, repoUrl, imageUrl, featured }
// Set featured: true on at most one project — it renders as the large hero card.
// Leave liveUrl / repoUrl as empty strings to hide the corresponding button.
// Leave imageUrl empty to show an auto-generated letter placeholder.
export const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio built with React, Vite, and Tailwind CSS featuring a modern editorial design, dark mode, reusable components, and responsive layouts.',
    techStack: ['React', 'Vite', 'Tailwind CSS'],
    liveUrl: '',
    repoUrl: '', // TODO: Add GitHub URL
    imageUrl: '',
    featured: true,
  },
  {
    id: 2,
    title: 'Expense Tracker',
    description: 'A React-based expense tracker that allows users to add, edit, and manage expenses through a clean and responsive interface.',
    techStack: ['React', 'JavaScript'],
    liveUrl: '',
    repoUrl: '', // TODO: Add GitHub URL
    imageUrl: '',
    featured: false,
  },
  {
    id: 3,
    title: 'Dairich Ice Cream Website',
    description: 'A responsive website designed for an ice cream brand with emphasis on product presentation, clean layouts, and user experience.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '',
    repoUrl: 'https://github.com/sayeewagh-dotcom/Dairich-Icecream-Portal.git',
    imageUrl: '',
    featured: false,
  },
  {
    id: 4,
    title: 'Online Movie Ticket Booking',
    description: 'A movie ticket booking system inspired by modern cinema booking platforms, allowing users to browse movies, select seats, and simulate reservations.',
    techStack: ['TODO: Add tech stack'],
    liveUrl: '',
    repoUrl: '', // TODO: Add GitHub URL
    imageUrl: '',
    featured: false,
  },
]
