const purposeBtn = document.querySelector('.purpose-btn');

function togglePurpose() {
    const profileSection = document.querySelector('.profile-section');
    const isVisible = profileSection.classList.contains('visible');
    profileSection.classList.toggle('visible');
    purposeBtn.textContent = isVisible ? 'Overview' : 'Hide';
}

purposeBtn.addEventListener('click', togglePurpose);

function about() {
    //window.location.href = 'essentials/about.html';
}

function reasons() {
    //window.location.href = 'essentials/reasons.html';
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const userToggledSections = new Set();

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const sectionId = entry.target.id;
        if (!userToggledSections.has(sectionId)) {
            if (entry.isIntersecting) {
                const correspondingButton = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
                entry.target.classList.add('active');
                
                if (correspondingButton) {
                    correspondingButton.textContent = 'Hide';
                }
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});

function showSection(sectionId) {
    const selectedSection = document.getElementById(sectionId);
    const button = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    userToggledSections.add(sectionId);
    
    selectedSection.classList.toggle('active');
    button.textContent = selectedSection.classList.contains('active') ? 'Hide' : selectedSection.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    if (selectedSection.classList.contains('active')) {
        requestAnimationFrame(() => {
            selectedSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
        });
    }

    setTimeout(() => {
        userToggledSections.delete(sectionId);
    }, 1000); 
}
