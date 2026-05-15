AOS.init({ duration: 800, once: true, offset: 100 });

const banners = [
    { imgId: '1015', subtitle: 'Welcome to Syed Ammal College | Legacy of Excellence' },
    { imgId: '104', subtitle: 'State-of-the-art Campus Infrastructure' },
    { imgId: '106', subtitle: 'Global Research Collaborations' },
    { imgId: '15', subtitle: 'Modern Libraries & Digital Resources' },
    { imgId: '169', subtitle: 'Student-Centric Learning Environment' },
    { imgId: '20', subtitle: 'Sports & Cultural Excellence' },
    { imgId: '26', subtitle: 'Industry-Ready Placements' },
    { imgId: '42', subtitle: 'International Student Exchange' },
    { imgId: '96', subtitle: 'Research & Innovation Centers' },
    { imgId: '99', subtitle: 'Join the Legacy Since 1881' }
];

const indicatorsContainer = document.getElementById('carouselIndicators');
const innerContainer = document.getElementById('carouselInner');

if (indicatorsContainer && innerContainer) {
    indicatorsContainer.innerHTML = '';
    innerContainer.innerHTML = '';
    
    banners.forEach((banner, index) => {
        const isActive = index === 0;
        const imgUrl = `https://picsum.photos/id/${banner.imgId}/1920/800`;
        
        const indicatorBtn = document.createElement('button');
        indicatorBtn.setAttribute('type', 'button');
        indicatorBtn.setAttribute('data-bs-target', '#heroCarousel');
        indicatorBtn.setAttribute('data-bs-slide-to', index);
        if (isActive) {
            indicatorBtn.classList.add('active');
            indicatorBtn.setAttribute('aria-current', 'true');
        }
        indicatorsContainer.appendChild(indicatorBtn);
        
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${isActive ? 'active' : ''}`;
        carouselItem.style.backgroundImage = `url('${imgUrl}')`;
        carouselItem.style.backgroundSize = 'cover';
        carouselItem.style.backgroundPosition = 'center';
        carouselItem.innerHTML = `<div class="carousel-caption"><p>${banner.subtitle}</p></div>`;
        innerContainer.appendChild(carouselItem);
    });
    
    const carouselElement = document.getElementById('heroCarousel');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, { interval: 4000, wrap: true, pause: 'hover', ride: 'carousel' });
    }
}

const navItems = ['Home', 'Research', 'Placements', 'Contact'];

const megaMenus = {
    About: {
        University: ['History & Legacy', 'Vision Mission', "Chancellor's Desk"],
        Leadership: ['Board of Governors', 'Administration', 'Committees'],
        Facts: ['Accreditations', 'NIRF Ranking', 'Annual Report'],
        Campus: ['Virtual Tour', 'Map & Directions']
    },
    Academics: {
        Schools: ['Engineering', 'Management', 'Sciences', 'Humanities'],
        Programs: ['Undergraduate', 'Postgraduate', 'Doctoral', 'Online Learning'],
        Resources: ['Library', 'Research Centers', 'International Collab'],
        Exams: ['Schedule', 'Results', 'Scholarships']
    },
    Admissions: {
        'Apply Now': ['UG Admission 2026', 'PG Admission 2026', 'International Students'],
        Information: ['Eligibility', 'Fee Structure', 'Scholarships & Aid'],
        'Important Dates': ['Application Deadlines', 'Entrance Exam Dates', 'Merit List']
    }
};

function generateCompactMenu() {
    const container = document.getElementById('navMenu');
    if (!container) return;
    
    navItems.forEach(item => {
        container.innerHTML += `<li class="nav-item"><a class="nav-link" href="home.html">${item}</a></li>`;
    });
    
    Object.entries(megaMenus).forEach(([menuName, columns]) => {
        const colCount = Object.keys(columns).length;
        const colSize = Math.floor(12 / colCount);
        let megaHtml = `<li class="nav-item dropdown-hover"><a class="nav-link" href="#">${menuName} <i class="fas fa-chevron-down ms-1 small"></i></a><div class="mega-dropdown"><div class="row">`;
        Object.entries(columns).forEach(([title, links]) => {
            megaHtml += `<div class="col-md-${colSize}"><h6>${title}</h6>`;
            links.forEach(link => { megaHtml += `<a href="#">${link}</a>`; });
            megaHtml += `</div>`;
        });
        megaHtml += `</div></div></li>`;
        container.innerHTML += megaHtml;
    });
}
generateCompactMenu();

const readMoreBtn = document.getElementById('readMoreBtn');
const fullMessage = document.getElementById('fullMessage');
let isExpanded = false;

if (readMoreBtn && fullMessage) {
    readMoreBtn.addEventListener('click', function() {
        if (!isExpanded) {
            fullMessage.classList.add('show');
            readMoreBtn.innerHTML = 'Read Less <i class="fas fa-arrow-up ms-2"></i>';
            isExpanded = true;
        } else {
            fullMessage.classList.remove('show');
            readMoreBtn.innerHTML = 'Read More <i class="fas fa-arrow-right ms-2"></i>';
            isExpanded = false;
        }
    });
}

const courses = [
    { id:1, name:"Undergraduate", level:"UG", duration:"3-4 Years", programs:12, image:"26", color:"ug", desc:"Bachelor's degree programs in various disciplines" },
    { id:2, name:"Postgraduate", level:"PG", duration:"2 Years", programs:8, image:"91", color:"pg", desc:"Master's degree programs for specialization" },
    { id:3, name:"Doctoral", level:"PhD", duration:"3-5 Years", programs:6, image:"64", color:"phd", desc:"Research programs for doctoral scholars" }
];

function renderCourses() {
    const container = document.getElementById('coursesContainer');
    if(!container) return;
    
    container.innerHTML = courses.map((c, i) => `
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="${i*100}">
            <div class="card course-card h-100 shadow-sm" data-level="${c.level.toLowerCase()}">
                <div class="position-relative">
                    <img src="https://picsum.photos/id/${c.image}/600/400" class="card-img-top" alt="${c.name}">
                    <span class="badge position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill badge-${c.color} fs-6">${c.level}</span>
                    <span class="badge bg-dark position-absolute bottom-0 start-0 m-3 px-3 py-2 rounded-pill">${c.duration}</span>
                </div>
                <div class="card-body text-center">
                    <h3 class="card-title fw-bold mb-2">${c.name}</h3>
                    <p class="card-text text-secondary">${c.desc}</p>
                     
                    <div class="card-footer bg-transparent border-0 text-center pb-4">
                        <button class="btn explore-course-btn" data-level="${c.level.toLowerCase()}">Explore →</button>
                    </div>
                </div>
               
            </div>
        </div>
    `).join('');
    
    const counterElements = document.querySelectorAll('.counter-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                animateNumber(element, target);
                counterObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    counterElements.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    document.querySelectorAll('.explore-course-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const level = btn.getAttribute('data-level');
            window.location.href = `courses.html?level=${level}`;
        });
    });
    
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if(e.target.closest('.explore-course-btn')) return;
            const level = card.getAttribute('data-level');
            window.location.href = `courses.html?level=${level}`;
        });
    });
}

function animateNumber(element, target) {
    let current = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

renderCourses();

const recruiters = [
    'TCS', 'Infosys', 'Wipro', 'Google', 'Microsoft', 'Amazon', 'Deloitte', 'Accenture', 'IBM', 'Intel', 'Cognizant', 'HCL'
];

const recruiterIcons = [
    'fa-building', 'fa-code', 'fa-laptop-code', 'fa-google', 'fa-microsoft', 'fa-amazon', 
    'fa-chart-line', 'fa-brain', 'fa-cloud', 'fa-microchip', 'fa-database', 'fa-globe'
];

function renderRecruiters() {
    const container = document.getElementById('recruitersMarquee');
    if(!container) return;
    let content = '';
    for(let i = 0; i < 4; i++) {
        recruiters.forEach((rec, idx) => {
            content += `
            <div class="recruiter-logo">
                <i class="fab ${recruiterIcons[idx % recruiterIcons.length]}"></i><span>${rec}</span>
            </div>`;
        });
    }
    container.innerHTML = content;
}
renderRecruiters();

const campusFacilityData = [
    { id:1, name:"Central Library", type:"Library", description:"Vast collection of 50,000+ books, digital resources, study halls", imageId:"15", capacity:"1000+ Students", timing:"24x7 Open", features:"Digital Section, Reading Halls" },
    { id:2, name:"Sports Complex", type:"Playground", description:"International standard cricket ground, football field, basketball courts", imageId:"42", capacity:"2000+ Students", timing:"6 AM - 8 PM", features:"Cricket, Football, Basketball" },
    { id:3, name:"Science Labs", type:"Laboratory", description:"State-of-the-art laboratories for Physics, Chemistry, Biology", imageId:"26", capacity:"500+ Students", timing:"8 AM - 8 PM", features:"Advanced Equipment" },
    { id:4, name:"Auditorium", type:"Auditorium", description:"AC auditorium with 2000+ seating for conferences and cultural events", imageId:"96", capacity:"2000 Seats", timing:"As per schedule", features:"AC, Sound System" },
    { id:5, name:"Student Hostel", type:"Hostel", description:"Separate hostels with modern amenities, Wi-Fi, and 24/7 security", imageId:"169", capacity:"1500+ Beds", timing:"24x7", features:"Wi-Fi, Mess, Gym" },
    { id:6, name:"Food Court", type:"Canteen", description:"Multi-cuisine food court serving hygienic meals", imageId:"20", capacity:"500+ Seats", timing:"7 AM - 10 PM", features:"Multi-cuisine" },
    { id:7, name:"Medical Center", type:"Healthcare", description:"24/7 medical facility with experienced doctors", imageId:"64", capacity:"Emergency Care", timing:"24x7", features:"Doctor On-call" }
];

const facilityIndicators = document.getElementById('facilityIndicators');
const facilityInner = document.getElementById('facilityCarouselInner');

if (facilityIndicators && facilityInner) {
    facilityIndicators.innerHTML = '';
    facilityInner.innerHTML = '';
    
    campusFacilityData.forEach((item, idx) => {
        const isActive = idx === 0;
        const indicator = document.createElement('button');
        indicator.setAttribute('type', 'button');
        indicator.setAttribute('data-bs-target', '#campusFacilityCarousel');
        indicator.setAttribute('data-bs-slide-to', idx);
        if (isActive) indicator.classList.add('active');
        facilityIndicators.appendChild(indicator);
        
        const slide = document.createElement('div');
        slide.className = `facility-carousel-item carousel-item ${isActive ? 'active' : ''}`;
        slide.style.backgroundImage = `url('https://picsum.photos/id/${item.imageId}/1920/1080')`;
        
        
        
        slide.innerHTML = `
        <div class="carousel-caption facility-carousel-caption">
            
            <h1>${item.name}</h1>
            <p>${item.description}</p>
            <div class="facility-stats">
                <span class="facility-stat"><i class="fas fa-users"></i> ${item.capacity}</span>
                <span class="facility-stat"><i class="fas fa-clock"></i> ${item.timing}</span>
            </div>
            <button class="facility-explore-btn" data-id="${item.id}">Explore ${item.type} <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>`;
        facilityInner.appendChild(slide);
    });
    
    if(document.getElementById('campusFacilityCarousel')) {
        new bootstrap.Carousel(document.getElementById('campusFacilityCarousel'), { interval: 5000, wrap: true, pause: 'hover' });
    }
}

const announcements = [
    { id:1, title:"NIRF Ranking 2025 - College ranked 56th among top colleges", date:"April 15, 2026", badge:" Ranking" },
    { id:2, title:"Admissions Open for UG & PG Programs 2026-27", date:"April 10, 2026", badge:" Admission" },
    { id:3, title:"Final Examination Schedule for April 2026 Released", date:"April 5, 2026", badge:" Exam" },
    { id:4, title:"International Conference on Emerging Technologies", date:"March 28, 2026", badge:" Conference" },
    { id:5, title:"Campus Placement Drive - 50+ Companies Participating", date:"March 20, 2026", badge:"Placement" },
    { id:6, title:"Scholarship Applications Open for Meritorious Students", date:"March 15, 2026", badge:" Scholarship" },
    { id:7, title:"Sports Day Celebration - Inter-College Tournament", date:"March 10, 2026", badge:" Sports" },
    { id:8, title:"Library Extended Hours During Examination", date:"March 5, 2026", badge:"Library" }
];

const tickerList = document.getElementById('tickerList');
if(tickerList) {
    announcements.forEach(a => {
        tickerList.innerHTML += `
        <li class="ticker-item"> <span class="news-date"><i class="far fa-calendar-alt me-1"></i>${a.date}</span>
        <span class="news-title">${a.title}</span>
        <a href="#" class="read-more-link" data-id="${a.id}">Read More <i class="fas fa-angle-right"></i></a>
        </li>`;
    });
    announcements.forEach(a => {
        tickerList.innerHTML += `
        <li class="ticker-item"> <span class="news-date"><i class="far fa-calendar-alt me-1"></i>${a.date}</span>
        <span class="news-title">${a.title}</span><a href="#" class="read-more-link" data-id="${a.id}">Read More <i class="fas fa-angle-right"></i></a>
        </li>`;
    });
    
    const items = document.querySelectorAll('.ticker-list .ticker-item');
    const duration = Math.max(15, items.length * 1.2);
    document.querySelector('.ticker-list').style.animationDuration = `${duration}s`;
}

document.querySelectorAll('.read-more-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Announcement details - Coming Soon');
    });
});

document.getElementById('viewAllBtn')?.addEventListener('click', () => alert('All announcements page - Coming Soon'));