// ===================== Meniu mobil =====================
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}

// ===================== Formular Închiriază =====================
const rentButtons = document.querySelectorAll('.rent-btn');
const rentFormContainer = document.getElementById('rent-form-container');
const selectedCarText = document.getElementById('selected-car');
const rentDays = document.getElementById('rent-days');
const totalPrice = document.getElementById('total-price');
const sendWhatsappBtn = document.getElementById('send-rent-whatsapp');
const sendTelegramBtn = document.getElementById('send-rent-telegram');

// Funcție de verificare elemente
function isElement(el) { return el !== null && el !== undefined; }

if (rentButtons.length > 0 && isElement(rentFormContainer) && isElement(selectedCarText) && isElement(rentDays) && isElement(totalPrice)) {

  // Selectare mașină
  rentButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const carName = btn.dataset.car || 'Nedefinit';
      const price = parseFloat(btn.dataset.price) || 0;
      
      selectedCarText.textContent = `🚘 Mașina selectată: ${carName} - Preț/zi: ${price} lei`;
      rentFormContainer.style.display = 'block';
      rentFormContainer.dataset.car = carName;
      rentFormContainer.dataset.price = price;
      rentDays.value = 1;
      totalPrice.textContent = `Preț total: ${price} lei`;
      window.scrollTo({ top: rentFormContainer.offsetTop, behavior: 'smooth' });
    });
  });

  // Actualizare preț total
  rentDays.addEventListener('input', () => {
    const days = parseInt(rentDays.value) || 1;
    const pricePerDay = parseFloat(rentFormContainer.dataset.price) || 0;
    totalPrice.textContent = `Preț total: ${days * pricePerDay} lei`;
  });

  // Trimite WhatsApp
  if (isElement(sendWhatsappBtn)) {
    sendWhatsappBtn.addEventListener('click', () => {
      const name = document.getElementById('rent-name')?.value || '';
      const phone = document.getElementById('rent-phone')?.value || '';
      const car = rentFormContainer.dataset.car || 'Nedefinit';
      const price = parseFloat(rentFormContainer.dataset.price) || 0;
      const days = parseInt(rentDays.value) || 1;
      const total = price * days;

      if (!name || !phone) { alert('Completați toate câmpurile'); return; }

      const msg = `Bună, vreau să închiriez mașina ${car} pentru ${days} zile.%0A💰 Preț total: ${total} lei%0A📝 Nume: ${name}%0A📞 Telefon: ${phone}`;
      window.open('https://wa.me/37360248885?text=' + msg);
    });
  }

  // Trimite Telegram
  if (isElement(sendTelegramBtn)) {
    sendTelegramBtn.addEventListener('click', () => {
      const name = document.getElementById('rent-name')?.value || '';
      const phone = document.getElementById('rent-phone')?.value || '';
      const car = rentFormContainer.dataset.car || 'Nedefinit';
      const price = parseFloat(rentFormContainer.dataset.price) || 0;
      const days = parseInt(rentDays.value) || 1;
      const total = price * days;

      if (!name || !phone) { alert('Completați toate câmpurile'); return; }

      const msg = `Bună, vreau să închiriez mașina ${car} pentru ${days} zile.%0A💰 Preț total: ${total} lei%0A📝 Nume: ${name}%0A📞 Telefon: ${phone}`;
      window.open('https://t.me/daniieell_c?text=' + msg);
    });
  }
}

// ===================== Buton Comandă Taxi Acum =====================
const openTaxiAppTop = document.getElementById('openTaxiAppTop');
if (isElement(openTaxiAppTop)) {
  openTaxiAppTop.addEventListener('click', () => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(ua)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.boomerang.taxi";
    } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      window.location.href = "https://apps.apple.com/app/id6737691364";
    } else {
      alert("Accesează magazinul de aplicații pentru a instala Boomerang Taxi.");
    }
  });
}
