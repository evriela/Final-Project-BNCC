let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyBCraVP5qKR27XrNnrN9_eobJUeQg5JMz0",
  authDomain: "finalprojectbncc2022.firebaseapp.com",
  databaseURL: "https://finalprojectbncc2022-default-rtdb.firebaseio.com",
  projectId: "finalprojectbncc2022",
  storageBucket: "finalprojectbncc2022.appspot.com",
  messagingSenderId: "54786903788",
  appId: "1:54786903788:web:90286475c1a80261e41fc9",
  measurementId: "G-9KPNVYD494"
};

//inisialisasi
firebase.initializeApp(firebaseConfig);

//akses database
let database = firebase.database().ref('regis');

//tinggal pake

const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
  const email = document.querySelector('#email').value;
  const nama = document.querySelector('#nama').value;
  const telepon = document.querySelector('#telepon').value;
  const event = changeType();

  let newContact = database.push();
  newContact.set({
    emailContact: email,
    namaContact: nama,
    teleponContact: telepon,
    eventContact: event,
  })
});

const nama = document.getElementById('nama')
const email = document.getElementById('email')
const telepon = document.getElementById('telepon')
const event = document.getElementById('event')

function changeType(){
  let opsi = document.getElementById('event');
  return opsi.value
}

form.addEventListener('submit', (e) =>{
  let messages = []
  if(nama.value == '' || nama.value == null){
    messages.push('name is required')
  }

  if (messages.length>0){
    e.preventDefault()
    errorElement.innertext = messages.join(',')
  }

  if (nama.value.length < 3){
    messages.push('nama harus minimal 3 karakter')
  }

})
