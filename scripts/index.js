const overlay = document.querySelector('.overlay');
const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');
const menu_links = document.querySelectorAll('.menu a');
const website_section = document.querySelectorAll('.website_section');
const current_section = "current_section_open";
const current_link_visiting = "add_active_link_style";
const project_divs = document.querySelectorAll('.project_div');
const home_page_sentences = 
[
    'Honours Computer Science graduate', 
    'Communications Operator', 
    'Software Developer',
    'Community Volunteer'
];
menuBtn.addEventListener('change', function() {
    if (menuBtn.checked) {
        menu.style.left = '0';
    } else {
        menu.style.left = '-100%';
    }
});
const typeit_element = new TypeIt("#text", {
    speed: 100,
    loop: true
});

for (const sentence_string of home_page_sentences) {
    typeit_element.type(sentence_string).pause(400).delete(sentence_string.length).pause(400);
}
typeit_element.go();

closeMenu();
setSectionToActive();
setDefaultLinkStyling();

function setDefaultLinkStyling(){
    menu_links[0].classList.add(current_link_visiting);
}

function closeMenu() {
    menu_links.forEach(link => 
        link.addEventListener("click", function() {
            menuBtn.checked = false;
    }));
}
function setSectionToActive() {
    menu_links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSectionId = link.getAttribute('data-section');
            const targetSection = document.querySelector(targetSectionId);
            
            website_section.forEach(section => removeClassFromSection(section, current_section));
            menu_links.forEach(link =>  removeStylingFromActiveLink(link, current_link_visiting));
            
            addClassToSection(targetSection, current_section);
            addStylingToActiveLink(link, current_link_visiting);
        });
    });
}
function addClassToSection(section, t) {
    section.classList.add(t);
}
function removeClassFromSection(section, t) {
    section.classList.remove(t);
}
function addStylingToActiveLink(link, t) {
    link.classList.add(t);
}
function removeStylingFromActiveLink(link, t) {
    link.classList.remove(t);
}
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.timeline-item').forEach(innerItem => {
            innerItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});