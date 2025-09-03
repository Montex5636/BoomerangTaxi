// Meniu mobil
const menuToggle=document.getElementById('mobile-menu');
const navList=document.querySelector('.nav-list');
menuToggle.addEventListener('click',()=>{navList.classList.toggle('active');});

/// Butoane Închiriază
const rentButtons = document.querySelectorAll('.rent-btn');
const rentFormContainer = document.getElementById('rent-form-container');
const selectedCarText = document.getElementById('selected-car');
const rentDays = document.getElementById('rent-days');
const totalPrice = document.getElementById('total-price');

rentButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const carName = btn.dataset.car;
        const price = parseFloat(btn.dataset.price);
        selectedCarText.textContent = `Mașina aleasă: ${carName} - Preț/zi: ${price} lei`;
        rentFormContainer.style.display = 'block';
        rentFormContainer.dataset.car = carName;
        rentFormContainer.dataset.price = price;
        rentDays.value = 1;
        totalPrice.textContent = `Preț total: ${price} lei`;
        window.scrollTo({top: rentFormContainer.offsetTop, behavior: 'smooth'});
    });
});

// Actualizare preț total la schimbarea numărului de zile
rentDays.addEventListener('input', () => {
    const days = parseInt(rentDays.value) || 1;
    const pricePerDay = parseFloat(rentFormContainer.dataset.price);
    totalPrice.textContent = `Preț total: ${days * pricePerDay} lei`;
});

// Trimite pe WhatsApp
document.getElementById('send-rent-whatsapp').addEventListener('click', () => {
    const name = document.getElementById('rent-name').value;
    const phone = document.getElementById('rent-phone').value;
    const car = rentFormContainer.dataset.car;
    const price = parseFloat(rentFormContainer.dataset.price);
    const days = parseInt(rentDays.value) || 1;
    const total = price * days;

    if(!name || !phone){ alert('Completați toate câmpurile'); return; }
    const msg = `Buna, vreau sa inchiriez masina ${car} pentru ${days} zile. Preț total: ${total} lei. Nume: ${name}, Telefon: ${phone}`;
    window.open('https://wa.me/37360248885?text='+encodeURIComponent(msg));
});

// Telegram
document.getElementById('send-telegram-form').addEventListener('click', () => {
    const msg = buildMessageExcursie();
    if(!msg) return;
    // Trimite mesaj către Telegram (folosește username-ul firmei)
    window.open('https://t.me/@daniieell_c?text=' + encodeURIComponent(msg));
  });
  

