// Car Database
const carDatabase = [
  {
    id: 1,
    brand: 'BMW',
    name: 'BMW 3 Series',
    year: 2023,
    price: 45000,
    condition: 'New',
    model: '330i',
    mileage: 15,
    fuel: 'Petrol',
    transmission: 'Automatic',
    color: 'Jet Black',
    doors: 4,
    seats: 5,
    engine: '2.0L Twin-Turbo',
    horsepower: 255,
    description: 'Luxury sedan with premium features and advanced technology',
    features: ['Leather seats', 'Sunroof', 'Navigation system', 'Apple CarPlay', 'Adaptive cruise control'],
    images: ['🚗 BMW 3 Series']
  },
  {
    id: 2,
    brand: 'Mercedes',
    name: 'Mercedes C-Class',
    year: 2023,
    price: 52000,
    condition: 'New',
    model: 'C300',
    mileage: 10,
    fuel: 'Petrol',
    transmission: 'Automatic',
    color: 'Pearl White',
    doors: 4,
    seats: 5,
    engine: '2.0L Turbo',
    horsepower: 255,
    description: 'Premium German engineering with luxury appointments',
    features: ['Premium leather', 'Ambient lighting', 'Panoramic roof', 'Mercedes infotainment', 'Driver assistance'],
    images: ['🚗 Mercedes C-Class']
  },
  {
    id: 3,
    brand: 'Toyota',
    name: 'Toyota Camry',
    year: 2023,
    price: 32000,
    condition: 'New',
    model: 'SE',
    mileage: 20,
    fuel: 'Hybrid',
    transmission: 'Automatic',
    color: 'Silver',
    doors: 4,
    seats: 5,
    engine: '2.5L Hybrid',
    horsepower: 208,
    description: 'Reliable sedan with excellent fuel economy',
    features: ['Hybrid engine', 'Toyota Safety Sense', 'Touchscreen display', 'Bluetooth', 'Lane keeping assist'],
    images: ['🚗 Toyota Camry']
  },
  {
    id: 4,
    brand: 'Honda',
    name: 'Honda Accord',
    year: 2022,
    price: 30000,
    condition: 'Used',
    model: 'EX',
    mileage: 45000,
    fuel: 'Petrol',
    transmission: 'Automatic',
    color: 'Blue',
    doors: 4,
    seats: 5,
    engine: '1.5L Turbo',
    horsepower: 192,
    description: 'Spacious sedan with great reliability',
    features: ['Honda Sensing', 'Touchscreen', 'Backup camera', 'Apple CarPlay', 'Power windows'],
    images: ['🚗 Honda Accord']
  },
  {
    id: 5,
    brand: 'Audi',
    name: 'Audi A4',
    year: 2023,
    price: 48000,
    condition: 'New',
    model: 'Premium Plus',
    mileage: 5,
    fuel: 'Petrol',
    transmission: 'Automatic',
    color: 'Graphite Black',
    doors: 4,
    seats: 5,
    engine: '2.0L TFSI',
    horsepower: 261,
    description: 'Sophisticated luxury with Audi technology',
    features: ['Audi Virtual Cockpit', 'Bang & Olufsen sound', 'LED headlights', 'Quattro AWD', 'Adaptive suspension'],
    images: ['🚗 Audi A4']
  },
  {
    id: 6,
    brand: 'Hyundai',
    name: 'Hyundai Sonata',
    year: 2023,
    price: 28000,
    condition: 'New',
    model: 'SE',
    mileage: 12,
    fuel: 'Petrol',
    transmission: 'Automatic',
    color: 'Red',
    doors: 4,
    seats: 5,
    engine: '2.5L',
    horsepower: 191,
    description: 'Modern design with excellent value',
    features: ['Hyundai SmartSense', 'Touchscreen display', 'Wireless charging', 'Blue Link', 'Dual exhaust'],
    images: ['🚗 Hyundai Sonata']
  },
  {
    id: 7,
    brand: 'Tesla',
    name: 'Tesla Model 3',
    year: 2023,
    price: 55000,
    condition: 'New',
    model: 'Long Range',
    mileage: 0,
    fuel: 'Electric',
    transmission: 'Automatic',
    color: 'Midnight Silver',
    doors: 4,
    seats: 5,
    engine: 'Dual Motor Electric',
    horsepower: 358,
    description: 'Revolutionary electric sedan with autonomous features',
    features: ['Autopilot', 'Supercharging', 'Glass roof', 'Premium audio', 'Over-the-air updates'],
    images: ['🚗 Tesla Model 3']
  },
  {
    id: 8,
    brand: 'Mazda',
    name: 'Mazda CX-5',
    year: 2022,
    price: 34000,
    condition: 'Used',
    model: 'Premium Plus',
    mileage: 55000,
    fuel: 'Petrol',
    transmission: 'Automatic',
    color: 'Soul Red',
    doors: 5,
    seats: 5,
    engine: '2.5L',
    horsepower: 187,
    description: 'Stylish SUV with smooth handling',
    features: ['i-Activsense', 'Blind spot monitoring', 'Power liftgate', 'Premium sound', 'AWD'],
    images: ['🚗 Mazda CX-5']
  }
];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  initializePWA();
  initializeEventListeners();
  initializeURLBar();
  loadCarsData();
  setupFilterListeners();
});

// URL Bar functionality
function initializeURLBar() {
  const copyBtn = document.getElementById('copy-url-btn');
  const installBtn = document.getElementById('url-install-btn');
  const urlDisplay = document.getElementById('url-display');

  if (!copyBtn || !installBtn) return;

  // Copy URL functionality
  copyBtn.addEventListener('click', () => {
    const urlText = urlDisplay.textContent;
    navigator.clipboard.writeText(urlText).then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = '✓';
      copyBtn.style.color = '#27ae60';
      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.color = 'white';
      }, 2000);
      console.log('✓ URL copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy URL:', err);
    });
  });

  // Install button in URL bar
  installBtn.addEventListener('click', () => {
    const mainInstallBtn = document.getElementById('install-btn');
    if (mainInstallBtn) {
      mainInstallBtn.click();
    }
  });
}

// PWA Initialization
function initializePWA() {
  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then((registration) => {
        console.log('✓ Service Worker registered:', registration);
      })
      .catch((error) => {
        console.log('Service Worker registration info:', error.message);
      });
  } else {
    console.log('⚠ Service Worker not supported in this browser');
  }

  // Handle install prompt - Initialize when DOM is ready
  let deferredPrompt = null;
  let isAppInstalled = false;

  const initInstallButton = () => {
    const installBtn = document.getElementById('install-btn');
    
    if (!installBtn) {
      console.log('⚠ Install button not found in DOM');
      return;
    }

    console.log('✓ Install button found, initializing...');

    // Check if app is already in standalone mode
    const checkIfInstalled = () => {
      isAppInstalled = window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
      if (isAppInstalled) {
        console.log('✓ App running in standalone mode - install button hidden');
        installBtn.classList.remove('show');
      } else {
        console.log('✓ App not installed - install button available');
        // Only show if not already shown by beforeinstallprompt
        if (!deferredPrompt) {
          installBtn.classList.add('show');
          installBtn.textContent = '📥 Install App';
        }
      }
    };

    // Check protocol
    const isSecureContext = window.isSecureContext || location.protocol === 'https:' || location.hostname === 'localhost';
    console.log(`Protocol: ${location.protocol}, Secure Context: ${isSecureContext}`);

    checkIfInstalled();

    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      console.log('✓ Install prompt available - native browser install supported');
      installBtn.classList.add('show');
      installBtn.textContent = '📥 Install App';
    });

    // Handle click - Always works, either native prompt or instructions
    installBtn.addEventListener('click', async () => {
      console.log('→ Install button clicked, deferredPrompt:', !!deferredPrompt);
      
      if (deferredPrompt) {
        // Show native install prompt
        try {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          console.log(`User response: ${outcome}`);
          if (outcome === 'accepted') {
            console.log('✓ App installation initiated');
            deferredPrompt = null;
          }
        } catch (error) {
          console.error('Error during installation:', error);
          showInstallInstructions();
        }
      } else {
        // Show fallback instructions
        console.log('→ Showing installation instructions (no native prompt)');
        showInstallInstructions();
      }
    });

    // Handle app installed event
    window.addEventListener('appinstalled', () => {
      console.log('✓ PWA installed successfully');
      isAppInstalled = true;
      deferredPrompt = null;
      installBtn.classList.remove('show');
    });

    // Listen for visibility change
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        checkIfInstalled();
      }
    });

    // Check periodically if app status changed
    setInterval(checkIfInstalled, 5000);

    // Ensure button is visible on page load
    if (!isAppInstalled && !deferredPrompt) {
      console.log('✓ Showing install button on load (fallback)');
      installBtn.classList.add('show');
      installBtn.textContent = '📥 Install App';
    }

    console.log('✓ Install button initialization complete');
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInstallButton);
  } else {
    // DOM is already loaded
    initInstallButton();
  }
}

// Show manual install instructions
function showManualInstallButton() {
  const installBtn = document.getElementById('install-btn');
  if (installBtn) {
    installBtn.classList.add('show');
    installBtn.textContent = '📥 Install App';
    installBtn.addEventListener('click', showInstallInstructions);
  }
}

// Show installation instructions modal
function showInstallInstructions() {
  const modal = document.createElement('div');
  modal.className = 'modal active';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;

  const content = document.createElement('div');
  content.style.cssText = `
    background: white;
    padding: 2rem;
    border-radius: 10px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  `;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  let instructions = '<h3>How to Install DrivePro</h3>';
  
  if (isIOS) {
    instructions += `
      <p><strong>iOS Instructions:</strong></p>
      <ol style="text-align: left;">
        <li>Tap the Share button (↑) at the bottom</li>
        <li>Scroll down and tap "Add to Home Screen"</li>
        <li>Tap "Add" to confirm</li>
      </ol>
    `;
  } else if (isAndroid) {
    instructions += `
      <p><strong>Android Instructions:</strong></p>
      <ol style="text-align: left;">
        <li>Tap the menu (three dots) in the top right</li>
        <li>Select "Install app" or "Add to Home screen"</li>
        <li>Tap "Install" to confirm</li>
      </ol>
    `;
  } else {
    instructions += `
      <p><strong>Desktop Instructions:</strong></p>
      <ol style="text-align: left;">
        <li>Click the install icon in the address bar</li>
        <li>Or use the menu → "Install DrivePro"</li>
        <li>Or simply use this app in your browser!</li>
      </ol>
      <p style="color: #666; font-size: 0.9em;">
        <strong>Note:</strong> For full PWA features, run on localhost or HTTPS
      </p>
    `;
  }

  content.innerHTML = instructions + `
    <button onclick="this.parentElement.parentElement.remove()" style="
      background: #1a1a1a;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
      width: 100%;
      margin-top: 1rem;
    ">Got it!</button>
  `;

  modal.appendChild(content);
  document.body.appendChild(modal);
}

// Initialize event listeners
function initializeEventListeners() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

// Load cars data
function loadCarsData() {
  const carsList = document.getElementById('cars-list');
  const featuredCars = document.getElementById('featured-cars');

  if (carsList) {
    displayCars(carDatabase, carsList);
  }

  if (featuredCars) {
    const featured = carDatabase.slice(0, 3);
    displayCars(featured, featuredCars);
  }
}

// Display cars in grid
function displayCars(cars, container) {
  if (!container) return;

  container.innerHTML = '';

  if (cars.length === 0) {
    container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem;">No cars found matching your criteria</div>';
    return;
  }

  cars.forEach((car) => {
    const card = createCarCard(car);
    container.appendChild(card);
  });
}

// Create car card element
function createCarCard(car) {
  const card = document.createElement('div');
  card.className = 'car-card';

  card.innerHTML = `
    <div class="car-image">
      <span class="car-image-placeholder">${car.images[0]}</span>
    </div>
    <div class="car-info">
      <div class="car-brand">${car.brand}</div>
      <h3 class="car-name">${car.name}</h3>
      <div class="car-spec">
        <strong>${car.year}</strong> | 
        <strong>${car.condition}</strong> | 
        <strong>${car.fuel}</strong>
      </div>
      <div class="car-spec">${car.mileage}k miles</div>
      <div class="car-price">$${car.price.toLocaleString()}</div>
      <a href="car-detail.html?id=${car.id}" class="btn">View Details</a>
    </div>
  `;

  return card;
}

// Filter functionality
function setupFilterListeners() {
  const brandFilter = document.getElementById('brand-filter');
  const priceFilter = document.getElementById('price-filter');
  const conditionFilter = document.getElementById('condition-filter');
  const fuelFilter = document.getElementById('fuel-filter');

  const filterChange = () => {
    applyFilters();
  };

  if (brandFilter) brandFilter.addEventListener('change', filterChange);
  if (priceFilter) priceFilter.addEventListener('change', filterChange);
  if (conditionFilter) conditionFilter.addEventListener('change', filterChange);
  if (fuelFilter) fuelFilter.addEventListener('change', filterChange);
}

// Apply filters
function applyFilters() {
  const brandFilter = document.getElementById('brand-filter')?.value || '';
  const priceFilter = document.getElementById('price-filter')?.value || '';
  const conditionFilter = document.getElementById('condition-filter')?.value || '';
  const fuelFilter = document.getElementById('fuel-filter')?.value || '';

  let filtered = carDatabase;

  if (brandFilter) {
    filtered = filtered.filter((car) => car.brand.toLowerCase() === brandFilter.toLowerCase());
  }

  if (priceFilter) {
    const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
    filtered = filtered.filter((car) => car.price >= minPrice && (maxPrice ? car.price <= maxPrice : true));
  }

  if (conditionFilter) {
    filtered = filtered.filter((car) => car.condition.toLowerCase() === conditionFilter.toLowerCase());
  }

  if (fuelFilter) {
    filtered = filtered.filter((car) => car.fuel.toLowerCase() === fuelFilter.toLowerCase());
  }

  const carsList = document.getElementById('cars-list');
  displayCars(filtered, carsList);
}

// Car detail page
function loadCarDetail() {
  const params = new URLSearchParams(window.location.search);
  const carId = parseInt(params.get('id'));
  const car = carDatabase.find((c) => c.id === carId);

  if (!car) {
    window.location.href = './cars.html';
    return;
  }

  // Populate detail page
  const detailImage = document.querySelector('.detail-image img');
  const detailName = document.querySelector('.detail-info h1');
  const detailBrand = document.querySelector('.detail-brand');
  const detailPrice = document.querySelector('.car-price');
  const detailDescription = document.querySelector('.detail-info p');
  const specsGrid = document.querySelector('.specs-grid');
  const featuresList = document.querySelector('.features-list');

  if (detailImage) detailImage.alt = car.name;
  if (detailImage) detailImage.title = car.name;
  if (detailName) detailName.textContent = car.name;
  if (detailBrand) detailBrand.textContent = car.brand;
  if (detailPrice) detailPrice.textContent = `$${car.price.toLocaleString()}`;
  if (detailDescription) detailDescription.textContent = car.description;

  if (specsGrid) {
    specsGrid.innerHTML = `
      <div class="spec-item">
        <div class="spec-label">Year</div>
        <div class="spec-value">${car.year}</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Condition</div>
        <div class="spec-value">${car.condition}</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Mileage</div>
        <div class="spec-value">${car.mileage}k mi</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Transmission</div>
        <div class="spec-value">${car.transmission}</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Engine</div>
        <div class="spec-value">${car.engine}</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Horsepower</div>
        <div class="spec-value">${car.horsepower} HP</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Color</div>
        <div class="spec-value">${car.color}</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Doors</div>
        <div class="spec-value">${car.doors}</div>
      </div>
    `;
  }

  if (featuresList) {
    featuresList.innerHTML = car.features
      .map((feature) => `<li>✓ ${feature}</li>`)
      .join('');
  }

  // Setup contact buttons
  setupContactButtons();
}

// Setup contact buttons
function setupContactButtons() {
  const callBtn = document.querySelector('.contact-btn.call');
  const whatsappBtn = document.querySelector('.contact-btn.whatsapp');
  const emailBtn = document.querySelector('.contact-btn.email');

  if (callBtn) {
    callBtn.href = 'tel:+1234567890';
  }

  if (whatsappBtn) {
    whatsappBtn.href = 'https://wa.me/1234567890?text=I%20am%20interested%20in%20a%20car.';
    whatsappBtn.target = '_blank';
  }

  if (emailBtn) {
    emailBtn.href = 'mailto:sales@drivepro.com';
  }
}

// Contact form handling
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validation
    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Save to localStorage
    const submission = { name, email, phone, message, timestamp: new Date().toISOString() };
    const submissions = JSON.parse(localStorage.getItem('contact-submissions') || '[]');
    submissions.push(submission);
    localStorage.setItem('contact-submissions', JSON.stringify(submissions));

    // Show success message
    const successMsg = document.getElementById('success-message');
    if (successMsg) {
      successMsg.style.display = 'block';
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 3000);
    }

    // Reset form
    form.reset();

    // Send email simulation
    console.log('Contact form submitted:', submission);
  });
}

// Initialize contact form on contact page
if (document.body.id === 'contact-page') {
  document.addEventListener('DOMContentLoaded', setupContactForm);
}

// Initialize car detail on detail page
if (document.body.id === 'car-detail-page') {
  document.addEventListener('DOMContentLoaded', loadCarDetail);
}

// Check online/offline status
window.addEventListener('online', () => {
  console.log('You are back online');
  showNotification('You are back online!');
});

window.addEventListener('offline', () => {
  console.log('You are offline');
  showNotification('You are offline. Some features may be limited.');
});

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: var(--secondary-color);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    z-index: 9999;
    animation: slideUp 0.3s ease-out;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}
