// Extended course data
const courseDetails = {
  id: 1,
  title: "Complete Web Development Bootcamp",
  category: "web",
  price: 99.99,
  rating: 4.8,
  students: 15000,
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  level: "Beginner",
  duration: "12 weeks",
  description: "Master web development from scratch with this comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, and more through hands-on projects and real-world applications.",
  instructor: {
    name: "John Smith",
    title: "Senior Web Developer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",
    bio: "15+ years of experience in full-stack development"
  },
  curriculum: [
    {
      title: "Module 1: HTML & CSS Fundamentals",
      lessons: [
        "Introduction to HTML5",
        "CSS Styling and Layout",
        "Responsive Design Principles",
        "CSS Flexbox and Grid"
      ]
    },
    {
      title: "Module 2: JavaScript Essentials",
      lessons: [
        "JavaScript Basics",
        "DOM Manipulation",
        "Event Handling",
        "Async Programming"
      ]
    },
    {
      title: "Module 3: Modern Frontend Development",
      lessons: [
        "React Fundamentals",
        "State Management",
        "API Integration",
        "Performance Optimization"
      ]
    }
  ],
  features: [
    "60+ hours of video content",
    "100+ coding exercises",
    "12 real-world projects",
    "Certificate of completion",
    "Lifetime access",
    "Community support"
  ]
};

// Initialize the course details page
document.addEventListener('DOMContentLoaded', () => {
  displayCourseDetails();
  displayRelatedCourses();
});

// Display course details
function displayCourseDetails() {
  const courseDetailsElement = document.getElementById('courseDetails');
  
  courseDetailsElement.innerHTML = `
    <div class="course-header">
      <div class="container">
        <div class="course-content">
          <div class="course-info">
            <h1>${courseDetails.title}</h1>
            <div class="course-meta">
              <span>⭐ ${courseDetails.rating} Rating</span>
              <span>👥 ${courseDetails.students.toLocaleString()} Students</span>
              <span>📊 ${courseDetails.level}</span>
              <span>⏱️ ${courseDetails.duration}</span>
            </div>
            <p class="course-description">${courseDetails.description}</p>
            <div class="instructor-info">
              <img src="${courseDetails.instructor.image}" alt="${courseDetails.instructor.name}" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 1rem;">
              <div>
                <h3>${courseDetails.instructor.name}</h3>
                <p>${courseDetails.instructor.bio}</p>
              </div>
            </div>
          </div>
          <div class="course-sidebar">
            <div class="course-card">
              <div class="price-tag">$${courseDetails.price}</div>
              <ul class="features-list">
                ${courseDetails.features.map(feature => `
                  <li>✓ ${feature}</li>
                `).join('')}
              </ul>
               <button class="btn btn-primary btn-large" style="width: 100%;" onclick="window.location.href='checkout.html?id=${courseDetails.id}'">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="course-curriculum">
        <h2>Course Curriculum</h2>
        ${courseDetails.curriculum.map(module => `
          <div class="curriculum-module">
            <h3>${module.title}</h3>
            <ul>
              ${module.lessons.map(lesson => `
                <li>${lesson}</li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Display related courses
function displayRelatedCourses() {
  const relatedCourses = document.getElementById('relatedCourses');
  
  // Sample related courses data
  const courses = [
    {
      id: 2,
      title: "Advanced JavaScript Masterclass",
      category: "web",
      price: 89.99,
      rating: 4.7,
      students: 8000,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500",
      level: "Advanced"
    },
    {
      id: 3,
      title: "React & Redux Complete Guide",
      category: "web",
      price: 79.99,
      rating: 4.9,
      students: 12000,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
      level: "Intermediate"
    }
  ];

  relatedCourses.innerHTML = courses.map(course => `
    <div class="course-card">
      <img src="${course.image}" alt="${course.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem;">
      <div style="padding: 1.5rem;">
        <div style="display: inline-block; padding: 0.25rem 0.75rem; background: #e2e8f0; border-radius: 1rem; font-size: 0.875rem; margin-bottom: 0.5rem;">
          ${course.level}
        </div>
        <h3 style="margin-bottom: 0.5rem;">${course.title}</h3>
        <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-light); margin-bottom: 0.5rem;">
          <span>⭐ ${course.rating}</span>
          <span>•</span>
          <span>${course.students.toLocaleString()} students</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 1.25rem; font-weight: 600;">$${course.price}</span>
          <div class="button-group">
            
            <button class="btn btn-primary" onclick="window.location.href='checkout.html?id=${course.id}'">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}