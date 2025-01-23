const purposeBtn = document.querySelector('.purpose-btn');
        
function togglePurpose() {
    const profileSection = document.querySelector('.profile-section');
    const isVisible = profileSection.classList.contains('visible');
    
    profileSection.classList.toggle('visible');
    purposeBtn.textContent = isVisible ? 'Overview' : 'Hide';
}

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
    window.location.href = 'essentials/about.html';
}

function reasons() {
    window.location.href = 'essentials/reasons.html';
}

purposeBtn.addEventListener('click', togglePurpose);