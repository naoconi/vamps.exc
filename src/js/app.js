let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})




// document.addEventListener('contextmenu', (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
// return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
    
// if (
//     event.keyCode === 123 ||
//     ctrlShiftKey(e, 'I') ||
//     ctrlShiftKey(e, 'J') ||
//     ctrlShiftKey(e, 'C') ||
//     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
// )
//     return false;
// };


document.querySelector("#show-login").addEventListener('click', function(){
    document.querySelector(".entry-popup").classList.add('active');
});

document.querySelector(".entry-popup .close-btn").addEventListener('click', function(){
    document.querySelector(".entry-popup").classList.remove('active');
});

document.querySelector("#show-login").addEventListener('click', function(){
    document.querySelector(".close-btn").classList.add('active');
});

document.querySelector(".entry-popup .close-btn").addEventListener('click', function(){
    document.querySelector(".close-btn").classList.remove('active');
});




const firebaseConfig = {
    apiKey: "AIzaSyCPu5dwOG1bB6zkSB-Fraiff_S5uFG8r0k",
    authDomain: "vamps-943b5.firebaseapp.com",
    databaseURL: "https://vamps-943b5-default-rtdb.firebaseio.com",
    projectId: "vamps-943b5",
    storageBucket: "vamps-943b5.firebasestorage.app",
    messagingSenderId: "789163223840",
    appId: "1:789163223840:web:8b8681d9c6ee813032c545",
    measurementId: "G-TX40H82Z8H"
};

firebase.initializeApp(firebaseConfig);

var entryFormDB = firebase.database().ref('entryForm');

document.getElementById("entryForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var username = getElementVal('username');
    var contact = getElementVal('contact');
    var url = getElementVal('edit');

    saveMessage(username, contact, url);

    document.querySelector('.alert-wrapper').style.display = "block";

    setTimeout(() => {
        document.querySelector('.alert-wrapper').style.display = "none";
    }, 3000);

    document.getElementById("entryForm").reset();
}

const saveMessage = (username, contact, url) => {
    var newEntryForm = entryFormDB.push();

    newEntryForm.set({
        username : username,
        contact : contact,
        urlEdit : url,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};