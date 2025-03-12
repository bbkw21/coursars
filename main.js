// Sample course data
const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    category: "web",
    price: 99.99,
    rating: 4.8,
    students: 15000,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    category: "data",
    price: 89.99,
    rating: 4.7,
    students: 12000,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
    level: "Intermediate"
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    category: "cloud",
    price: 79.99,
    rating: 4.9,
    students: 8000,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
    level: "Beginner"
  },
  // Add more courses as needed
];

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Developer",
    company: "Tech Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    text: "The web development course completely transformed my career. I went from a complete beginner to landing my dream job in just 6 months!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist",
    company: "Data Analytics Inc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    text: "The data science course provided me with practical skills that I use every day in my work. The hands-on projects were especially valuable."
  },
  // Add more testimonials as needed
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  displayCourses('all');
  displayTestimonials();
  initializeCategoryFilters();
});

// Display courses based on category
function displayCourses(category) {
  const coursesGrid = document.getElementById('coursesGrid');
  const filteredCourses = category === 'all' 
    ? courses 
    : courses.filter(course => course.category === category);

  coursesGrid.innerHTML = filteredCourses.map(course => `
    <div class="course-card" style="
      background: white;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: transform 0.2s;
    ">
      <img src="${course.image}" alt="${course.title}" style="
        width: 100%;
        height: 200px;
        object-fit: cover;
      ">
      <div style="padding: 1.5rem;">
        <div style="
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: #e2e8f0;
          border-radius: 1rem;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        ">${course.level}</div>
        <h3 style="margin-bottom: 0.5rem;">${course.title}</h3>
        <div style="
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-light);
          margin-bottom: 0.5rem;
        ">
          <span>⭐ ${course.rating}</span>
          <span>•</span>
          <span>${course.students.toLocaleString()} students</span>
        </div>
        <div style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        ">
          <span style="font-size: 1.25rem; font-weight: 600;">$${course.price}</span>
          <div style="display: flex; gap: 0.5rem;">
            
            <button class="btn btn-primary" onclick="window.location.href='checkout.html?id=${course.id}'">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Initialize category filters
function initializeCategoryFilters() {
  const categoryFilters = document.getElementById('categoryFilters');
  categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-btn')) {
      // Remove active class from all buttons
      document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Add active class to clicked button
      e.target.classList.add('active');
      
      // Display courses for selected category
      const category = e.target.dataset.category;
      displayCourses(category);
    }
  });
}

// Display testimonials
function displayTestimonials() {
  const testimonialSlider = document.getElementById('testimonialSlider');
  testimonialSlider.innerHTML = `
    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    ">
      ${testimonials.map(testimonial => `
        <div style="
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-md);
        ">
          <div style="
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
          ">
            <img src="${testimonial.image}" alt="${testimonial.name}" style="
              width: 60px;
              height: 60px;
              border-radius: 50%;
              object-fit: cover;
            ">
            <div>
              <h4 style="margin-bottom: 0.25rem;">${testimonial.name}</h4>
              <p style="color: var(--text-light);">${testimonial.role} at ${testimonial.company}</p>
            </div>
          </div>
          <p style="color: var(--text-light);">"${testimonial.text}"</p>
        </div>
      `).join('')}
    </div>
  `;
}