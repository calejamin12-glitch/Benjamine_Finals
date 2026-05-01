function showSection(sectionID) {
    const allSections = document.querySelectorAll('.content, .homecontent');

    allSections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionID);

    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

function clearFields() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');

    inputs.forEach(input => {
        input.value = '';
    });
}

window.onload = function () {
    const logo = document.getElementById("logo");

    if (logo) {
        logo.addEventListener("click", function () {
            const allSections = document.querySelectorAll('.content, .homecontent');

            allSections.forEach(section => {
                section.style.display = 'none';
            });
        });
    }

    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('status') === 'success') {
        const toast = document.getElementById('success-toast');

        if (toast) {
            toast.classList.remove('toast-hidden');

            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.classList.add('toast-hidden'), 500);
            }, 3000);
        }
function clearFields(sectionID) {
    const section = document.getElementById(sectionID);
    const inputs = section.querySelectorAll('input[type="text"], input[type="number"]');

    inputs.forEach(input => {
        input.value = '';
    });
}
        window.history.replaceState({}, document.title, window.location.pathname);
    }
};
