//Storing Announcements as an Array of Objects
const announcements = [{
    title: "IMPORTANT DISCLAIMER!!!",
    date: "Wed, 6th Aug 2025",
    content: `Dear All,
    
    FUTO does not have and has not authorized any Whatsapp group for admission. Candidates should beware of fraudsters. Do not pay anybody for admission.
    
    Thanks
    Registrar
    
    <b>FUTO ICTC<b>`
},{
    title: "CANDIDATES DETAILS FOR O'LEVEL VERIFICATION 2025/26",
    date: "Fri, 3rd Oct 2025",
    content: `The following link has been prepared for the collation of candidates' details for the purpose of O'Level result verification:
    
    https://forms.gle/cWXcykk3Twtem66Q9
    
    Among others, each candidate is required to provide scratch card PIN and NUMBER to enable the verification of O'Level results. Candidates are required to provide the right information and should note that wrong details will delay or deny clearance to anyone.
    
    <b>FUTO ICTC<b>`
}];

function openModal(index) {
    const announcement = announcements[index]; //Picks the right announcement by its index
    //Filling the modal's title, date and body with the announcement's data.
    document.getElementById('modalTitle').innerHTML = announcement.title;
    document.getElementById('modalDate').innerHTML = announcement.date;
    document.getElementById('modalBody').innerHTML = announcement.content;
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden'; //disables page scrolling while modal is active
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

//The below ensures that clicking outside the whitebox closes the modal
function closeModalOnBackdrop(event) {
    if (event.target.id === 'modal') {
        closeModal();
    }
}

//Close Modal with X button
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});