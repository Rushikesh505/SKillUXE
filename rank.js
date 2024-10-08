let sortOrder = 'desc'; // Initial sort order is descending

// Sort candidates by rating
document.getElementById('sort-rating-btn').addEventListener('click', function () {
    const candidateList = document.getElementById('candidate-list');
    let candidates = Array.from(candidateList.getElementsByClassName('candidate'));

    // Sort candidates based on current sort order
    candidates.sort((a, b) => {
        const ratingA = parseFloat(a.dataset.rating);
        const ratingB = parseFloat(b.dataset.rating);
        return sortOrder === 'desc' ? ratingB - ratingA : ratingA - ratingB;
    });

    // Re-arrange the sorted candidates in the DOM
    candidateList.innerHTML = '';
    candidates.forEach(candidate => candidateList.appendChild(candidate));

    // Toggle sort order
    sortOrder = sortOrder === 'desc' ? 'asc' : 'desc';

    // Update the sort icon
    const sortIcon = document.getElementById('sort-icon');
    sortIcon.innerHTML = sortOrder === 'desc' ? '&#9660;' : '&#9650;'; // Downward or upward arrow
});

// Filter candidates by skill
document.getElementById('skill-filter').addEventListener('change', function () {
    const selectedSkill = this.value;
    const candidates = document.getElementsByClassName('candidate');

    Array.from(candidates).forEach(candidate => {
        const skills = candidate.dataset.skills;
        if (selectedSkill === 'All' || skills.includes(selectedSkill)) {
            candidate.style.display = 'flex';
        } else {
            candidate.style.display = 'none';
        }
    });
});

// Filter candidates by level
document.getElementById('level-filter').addEventListener('change', function () {
    const selectedLevel = this.value;
    const candidates = document.getElementsByClassName('candidate');

    Array.from(candidates).forEach(candidate => {
        const level = candidate.dataset.level; // Assuming 'data-level' is added to each candidate
        if (selectedLevel === 'All' || level === selectedLevel) {
            candidate.style.display = 'flex';
        } else {
            candidate.style.display = 'none';
        }
    });
});
