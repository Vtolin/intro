const purposeBtn = document.querySelector('.purpose-btn');

function togglePurpose() {
    const profileSection = document.querySelector('.profile-section');
    const isVisible = profileSection.classList.contains('visible');
    profileSection.classList.toggle('visible');
    purposeBtn.textContent = isVisible ? 'Overview' : 'Hide';
}

purposeBtn.addEventListener('click', togglePurpose);

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    const selectedSection = document.getElementById(sectionId);
    
    sections.forEach(section => {
        if (section === selectedSection) {
            section.classList.toggle('active');
        } else {
            section.classList.remove('active');
        }
    });
    
    if (selectedSection.classList.contains('active')) {
        setTimeout(() => {
            selectedSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 150);
    }
}
function about() {
    //window.location.href = 'essentials/about.html';
}

function reasons() {
    //window.location.href = 'essentials/reasons.html';
}
// Add this to the end of your existing script section
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const correspondingButton = document.querySelector(`[onclick="showSection('${sectionId}')"]`);

            entry.target.classList.add('active');

            if (correspondingButton) {
                correspondingButton.textContent = 'Hide';
            }
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});

function showSection(sectionId) {
    const selectedSection = document.getElementById(sectionId);
    const button = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    selectedSection.classList.toggle('active');
    button.textContent = selectedSection.classList.contains('active') ? 'Hide' : selectedSection.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    if (selectedSection.classList.contains('active')) {
        setTimeout(() => {
            selectedSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 150);
    }
}
