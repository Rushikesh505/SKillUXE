// Experience Level toggle (single select)
document.querySelectorAll('#experience .toggle-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('#experience .toggle-option').forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
    });
});

// Employment toggle (multi-select)
document.querySelectorAll('#employment .toggle-option').forEach(option => {
    option.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

