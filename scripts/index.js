// Variables selecting sections of the website
const menu_btn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');
const menu_links = document.querySelectorAll('.menu a');
const website_section = document.querySelectorAll('.website_section');
const current_section = "current_section_open";
const current_link_visiting = "add_active_link_style";

// Strings to use with typeit element on screen to make message appear and disappear
const home_page_sentences = 
[
    'Software Developer', 
    'Communications Operator', 
    'Community Volunteer'
];
closeMenu();
setSectionToActive();
setDefaultLinkStyling();

// Definition of TypeIt element used on application to define characteristics
const typeit_element = new TypeIt("#text", {
    speed: 100,
    loop: true
});

// Iterates through the array home_page_sentences, inserting each one into the created TypeIt element
for (const sentence_string of home_page_sentences) {
    typeit_element.type(sentence_string).pause(400).delete(sentence_string.length).pause(400);
}
typeit_element.go();

// Defines dynamically changing styling by first definining the class styling definition in the CSS file, then applying that class to a given element
function setDefaultLinkStyling(){
    menu_links[0].classList.add(current_link_visiting);
}
// Close the navigation menu box
function closeMenu() {
    menu_links.forEach(link => 
        link.addEventListener("click", function() {
            menu_btn.checked = false;
    }));
}
// Sets a section as active so it appears in the content section of the website
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
// Functionality for changing the main page section
function addClassToSection(section, t) {
    section.classList.add(t);
}
// Functionality for changing the main page section
function removeClassFromSection(section, t) {
    section.classList.remove(t);
}
// Functionality for changing the menu link styling
function addStylingToActiveLink(link, t) {
    link.classList.add(t);
}
// Functionality for changing the menu link styling
function removeStylingFromActiveLink(link, t) {
    link.classList.remove(t);
}