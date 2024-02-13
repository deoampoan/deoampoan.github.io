document.getElementById('contactBtn').addEventListener('click', function() {
    var contactInfo = document.getElementById('contactInfo');
    if (contactInfo.style.display === 'none') {
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
});
function sendEmail() {
    window.open('gwapzdhie@gmail.com');
}