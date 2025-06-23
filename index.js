document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
                
                // Show the target section
                document.querySelectorAll('.section').forEach(section => {
                    section.classList.remove('active');
                });
                targetElement.classList.add('active');
            }
        });
    });
    
    // Show home section by default
    document.querySelector('#home').classList.add('active');
    document.querySelector('.nav-links li a[href="#home"]').classList.add('active');
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Show section based on URL hash
    window.addEventListener('load', function() {
        const hash = window.location.hash;
        if (hash) {
            const targetSection = document.querySelector(hash);
            if (targetSection) {
                document.querySelectorAll('.section').forEach(section => {
                    section.classList.remove('active');
                });
                targetSection.classList.add('active');
                
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === hash) {
                        item.classList.add('active');
                    }
                });
                
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});



// // Mobile Navigation Toggle
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

// // Close mobile menu when clicking a link
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         navLinks.classList.remove('active');
//     });
// });

// // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Navbar scroll effect
// window.addEventListener('scroll', () => {
//     const nav = document.getElementById('navbar');
//     if (window.scrollY > 50) {
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled');
//     }
// });

// // Animate elements when they come into view
// const animateOnScroll = () => {
//     const elements = document.querySelectorAll('.about-content');

//     elements.forEach(element => {
//         const elementPosition = element.getBoundingClientRect().top;
//         const screenPosition = window.innerHeight / 1.3;

//         if (elementPosition < screenPosition) {
//             element.style.opacity = '1';
//             element.style.transform = 'translateY(0)';
//         }
//     });
// };

// // Set initial state for animated elements
// document.querySelectorAll('.about-content').forEach(el => {
//     el.style.opacity = '0';
//     el.style.transform = 'translateY(20px)';
//     el.style.transition = 'all 0.6s ease';
// });

// window.addEventListener('scroll', animateOnScroll);
// window.addEventListener('load', animateOnScroll);

// // Animated Counter
// function animateCounters() {
//     const counters = document.querySelectorAll('.stat-number');
//     const speed = 200;

//     counters.forEach(counter => {
//         const target = +counter.getAttribute('data-count');
//         const count = +counter.innerText;
//         const increment = target / speed;

//         if (count < target) {
//             counter.innerText = Math.ceil(count + increment);
//             setTimeout(animateCounters, 1);
//         } else {
//             counter.innerText = target + '+';
//         }
//     });
// }

// // Intersection Observer for counters
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             animateCounters();
//             observer.unobserve(entry.target);
//         }
//     });
// }, { threshold: 0.5 });

// document.querySelectorAll('.ministry-stats').forEach(stats => {
//     observer.observe(stats);
// });

// // Quote rotation (optional)
// const quotes = [
//     {
//         text: "Faith is not the absence of doubt, but the courage to embrace God's promises despite our questions.",
//         author: "Pastor David Mitchell"
//     },
//     {
//         text: "In the tapestry of life, every thread of joy and sorrow is woven together by God's loving hand.",
//         author: "Pastor David Mitchell"
//     },
//     {
//         text: "The church is not a building, but a living body of believers called to reflect Christ's love to the world.",
//         author: "Pastor David Mitchell"
//     }
// ];

// let currentQuote = 0;
// const quoteElement = document.querySelector('.quote');
// const authorElement = document.querySelector('.quote-author');

// function rotateQuote() {
//     currentQuote = (currentQuote + 1) % quotes.length;
//     quoteElement.style.opacity = 0;
//     authorElement.style.opacity = 0;
    
//     setTimeout(() => {
//         quoteElement.textContent = quotes[currentQuote].text;
//         authorElement.textContent = `- ${quotes[currentQuote].author}`;
//         quoteElement.style.opacity = 1;
//         authorElement.style.opacity = 1;
//     }, 500);
// }

// // Rotate every 8 seconds
// setInterval(rotateQuote, 5000);

// // Testimonial Slider
// const track = document.querySelector('.testimonial-track');
// const dots = document.querySelectorAll('.testimonial-dot');
// let currentSlide = 0;

// function updateSlider() {
//     track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
//     dots.forEach((dot, index) => {
//         dot.classList.toggle('active', index === currentSlide);
//     });
// }

// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentSlide = index;
//         updateSlider();
//     });
// });

// // Auto-rotate testimonials
// setInterval(() => {
//     currentSlide = (currentSlide + 1) % dots.length;
//     updateSlider();
// }, 5000);

// // Sermon hover effect enhancement
// document.querySelectorAll('.sermon-card').forEach(card => {
//     card.addEventListener('mouseenter', () => {
//         card.querySelector('.sermon-link').style.color = 'var(--accent-color)';
//     });
    
//     card.addEventListener('mouseleave', () => {
//         card.querySelector('.sermon-link').style.color = 'var(--secondary-color)';
//     });
// });

// // Sermon card interaction
// document.querySelectorAll('.sermon-card').forEach(card => {
//     card.addEventListener('click', function() {
//         // Add your click behavior here (e.g., open sermon page)
//         console.log('Sermon clicked:', this.querySelector('.sermon-title').textContent);
//     });
// });

// // Gallery Filter
// const filterBtns = document.querySelectorAll('.filter-btn');
// const galleryItems = document.querySelectorAll('.gallery-item');

// filterBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         // Update active button
//         filterBtns.forEach(btn => btn.classList.remove('active'));
//         btn.classList.add('active');
        
//         const filter = btn.dataset.filter;
        
//         // Filter items
//         galleryItems.forEach(item => {
//             if (filter === 'all' || item.dataset.category === filter) {
//                 item.style.display = 'block';
//             } else {
//                 item.style.display = 'none';
//             }
//         });
//     });
// });

// // Lightbox
// const lightbox = document.getElementById('lightbox');
// const lightboxImg = document.getElementById('lightbox-img');
// const lightboxCaption = document.getElementById('lightbox-caption');
// const closeLightbox = document.querySelector('.close-lightbox');

// galleryItems.forEach(item => {
//     item.addEventListener('click', () => {
//         const imgSrc = item.querySelector('img').src;
//         const caption = item.querySelector('h3').textContent;
//         const desc = item.querySelector('p').textContent;
        
//         lightboxImg.src = imgSrc;
//         lightboxCaption.innerHTML = `<h3>${caption}</h3><p>${desc}</p>`;
//         lightbox.style.display = 'flex';
//         document.body.style.overflow = 'hidden';
//     });
// });

// closeLightbox.addEventListener('click', () => {
//     lightbox.style.display = 'none';
//     document.body.style.overflow = 'auto';
// });

// lightbox.addEventListener('click', (e) => {
//     if (e.target === lightbox) {
//         lightbox.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     }
// });

// // Ministry Card Interaction
// document.querySelectorAll('.ministry-card').forEach(card => {
//     card.addEventListener('click', function() {
//         const title = this.querySelector('h3').textContent;
//         console.log(`Ministry clicked: ${title}`);
//         // Add your click behavior here (e.g., expand details or navigate)
//     });
// });

// // Button hover effects
// document.querySelectorAll('.cta-btn').forEach(btn => {
//     btn.addEventListener('mouseenter', function() {
//         this.style.transform = 'translateY(-3px)';
//         this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
//     });
    
//     btn.addEventListener('mouseleave', function() {
//         this.style.transform = 'translateY(0)';
//         this.style.boxShadow = 'none';
//     });
// });

// // Form submission
// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     // Get form values
//     const formData = {
//         firstName: document.getElementById('firstName').value,
//         lastName: document.getElementById('lastName').value,
//         email: document.getElementById('email').value,
//         subject: document.getElementById('subject').value,
//         message: document.getElementById('message').value
//     };
    
//     // Here you would typically send the data to your server
//     console.log('Form submitted:', formData);
    
//     // Show success message
//     alert('Thank you for your message! We will get back to you soon.');
//     this.reset();
// });

