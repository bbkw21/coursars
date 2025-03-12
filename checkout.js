document.addEventListener('DOMContentLoaded', function() {
    // Get course ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    
    // Get course details from courses array
    const course = courses.find(c => c.id === parseInt(courseId));
    
    if (!course) {
        alert('Course not found');
        window.location.href = 'index.html';
        return;
    }

    displayCourseSummary(course);

    // Handle form submission
    const form = document.getElementById('paymentForm');
    form.addEventListener('submit', handlePayment);
});

// Add the complete courses data
const courses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        category: "web",
        price: 99.99,
        rating: 4.8,
        students: 15000,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
        level: "Beginner",
        features: [
            "24/7 Access to Content",
            "Premium Support",
            "Project-Based Learning"
        ]
    },
    {
        id: 2,
        title: "Data Science Fundamentals",
        category: "data",
        price: 89.99,
        rating: 4.7,
        students: 12000,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
        level: "Intermediate",
        features: [
            "Real-world Projects",
            "Certificate of Completion",
            "Industry Expert Support"
        ]
    },
    {
        id: 3,
        title: "AWS Cloud Practitioner",
        category: "cloud",
        price: 79.99,
        rating: 4.9,
        students: 8000,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
        level: "Beginner",
        features: [
            "Hands-on Labs",
            "Certification Prep",
            "Community Access"
        ]
    },
    {
        id: 4,
        title: "Machine Learning Basics",
        category: "ai",
        price: 94.99,
        rating: 4.6,
        students: 10000,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500",
        level: "Intermediate",
        features: [
            "Python Programming",
            "Neural Networks",
            "Project Portfolio"
        ]
    }
];

function displayCourseSummary(course) {
    const coursePreview = document.getElementById('coursePreview');
    coursePreview.innerHTML = `
        <img src="${course.image}" alt="${course.title}">
        <h3>${course.title}</h3>
        <p>Level: ${course.level}</p>
        <div class="price-info">
            <h4>Total Price:</h4>
            <span class="price">$${course.price}</span>
        </div>
        <div class="course-features">
            <h4>What's Included:</h4>
            <ul>
                ${course.features.map(feature => `<li>✓ ${feature}</li>`).join('')}
            </ul>
        </div>
    `;
}

function handlePayment(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        cardNumber: document.getElementById('cardNumber').value,
        expiry: document.getElementById('expiry').value,
        cvv: document.getElementById('cvv').value
    };

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.cardNumber || !formData.expiry || !formData.cvv) {
        alert('Please fill in all fields');
        return;
    }

    // Here you would typically:
    // 1. Send payment details to your payment processor
    // 2. Create order in your database
    // 3. Send confirmation email
    
    // For demo purposes, we'll just show a success message and redirect
    alert('Payment processed successfully!');
    
    // Redirect to thank you page
    window.location.href = '/thankyou.html';
}

// Basic form validation
document.getElementById('cardNumber').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
    let formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
    e.target.value = formattedValue;
});

document.getElementById('expiry').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
        value = value.slice(0,2) + '/' + value.slice(2,4);
    }
    e.target.value = value;
});

document.getElementById('cvv').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0,4);
}); 