const openMenu = () => {
    document.querySelector(".backdrop").className = "backdrop active";
    document.querySelector("aside").className = "aside active";
}

const closeMenu = () => {
    document.querySelector(".backdrop").className = "backdrop";
    document.querySelector(".aside").className = "";
}

document.getElementById("menuBtn").onclick = e => {
    e.preventDefault();
    openMenu();
}

// preventDefault we use because of we don't triggered the link redirection

document.querySelector("aside button.close").onclick = e => {
    closeMenu();
};

document.querySelector(".backdrop").onclick = e => {
    closeMenu();
}



// Now we code scroll snapping script
// If we scroll just a little bit it snaps to the next or previous section
// first we need to register a scroll event
// So add eventlistener
// Users scroll, now we want to know on which direction user is scrolling
// So first we need a direction and to get direction we need to compare  the current
// scroll position with the previous
// We have current scroll position in window.pageYOffset, but we don't have the previous
// So we can save the current one and compare it with when the scroll occurs again
// When we scroll everytime, then we can save the current scroll position to the "lastScrollPosition"

document.lastScrollPosition = 0;

document.lastCentered = 0;

document.onWayTo = null;

// Now we want to get the direction, So to get the direction we can compare the current
// scroll position with the previous
// If we are in the middle of the page, but previous scroll position was 0, then we know that
// we scrolled to the bottom otherwise we scroll to the top
// For ex. if the last scroll position was 0 and the current position is 100px then we know that
// we scroll to the bottom because 100px is bigger than 0
// So to calculate this we can take,,,
// "const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up' "

document.addEventListener("scroll", () => {
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';

    const sections = [...document.querySelectorAll("section")];

    const destIndex = direction === "up" ? document.lastCentered - 1 : document.lastCentered + 1;

    if(document.onWayTo === null) {
        if(destIndex >= 0 && destIndex < sections.length) {
            console.log({destIndex, direction});
            document.onWayTo =  destIndex;
            window.scroll(0, sections[destIndex].offsetTop);
        };
    }


    sections.forEach((section, index) => {
        if(window.pageYOffset === section.offsetTop) {
            document.lastCentered = index;
            // section.className = "active";
            if(document.onWayTo === index) {
                document.onWayTo = null;
            }
        } 
        // else {
        //     section.className = "";
        // }
    })

    document.lastScrollPosition = window.pageYOffset;
});

// So if our current position is 100px but the previous was 50px then the difference of this
// is 50px and it's bigger that 0 then we are scrolling down

// Next we need to know which section we are currently at, right now we are at first
// section so the index is 0
// But user can open the page with already scrolled website
// Now we need to know what is the current position and what is the current section that user
// sees, so to do this we need to get all the sections (const sections = document....)
// this will return an object of document node list but we don't want an object we want
// an array so we make a function to convert in array
// we can do this by typing three dots before the document for extraction of an array
// Now we have sections
// Now we need to compare each section if the current scroll position is exactly at the top
// of any section so lets do sections for each section and lets also use index here so for each
// window we need to check if the window.pageYOffset so our current scroll position is exactly the
// same as section of set top then we know that we are at this section so to save this information
// lets create a variable on a document (document.lastCentered = index)
// So here we are looping through all sections and we are checking if the current scroll
// position is exactly the same as the position of the section
// Then the document last centered section is the index of the section so on the beginning it will
// be zero here because the index of the first section will be zero


// Now we know where we are at and we know the direction now we need to do the scrolling
// So let's calculate what will be the next section if we are scrolling down then the next
// section will be last centered plus one otherwise if we are scrolling up the next section will
// be last centered minus one
// Now call the destination index (const destIndex) and the destination index will equal the
// depending on the direction so if direction is up then the destination index will be a
// document last centered minus one because we are scrolling up otherwise it will be document
// last centered plus one


// Now we know the destination of the section so we can check if this destination is okay
// First we need to check if the destination index is not smaller than zero so bigger or equal
// than zero so we can't scroll to section - 1 because it doesn't exist and same with
// destination index needs to be smaller than the sections length because if we have five sections
// we can't scroll to the tenth section 