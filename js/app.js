// YTUHAVK App Logic - Vanilla JS SPA Routing

// Sayfa Verileri
const pages = {
    home: `
        <div class="page-enter">
            <h1 class="text-title">YTUHAVK'a Hoş Geldin! 🪂</h1>
            <p class="text-subtitle">YTÜ Havacılık Kulübü yamaç paraşütü etkinlikleri ve uçuş kayıtları mobil uygulaması.</p>
            
            <div class="stat-grid">
                <div class="stat-card">
                    <div class="stat-num">50+</div>
                    <div class="stat-label">Aktif Üye</div>
                </div>
                <div class="stat-card">
                    <div class="stat-num">10+</div>
                    <div class="stat-label">Uçuş Bölgesi</div>
                </div>
            </div>

            <!-- Hava Durumu Alanı -->
            <div class="glass-card" id="weather-widget">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <h2 style="font-size: 1.1rem; margin: 0;">Bölge Rüzgar Durumu</h2>
                    <div class="spinner" style="width: 16px; height: 16px; border-width: 2px;" id="weather-loader"></div>
                </div>
                <div id="weather-content" style="display: flex; flex-direction: column; gap: 8px;">
                    <!-- JS ile doldurulacak -->
                </div>
            </div>

            <div class="glass-card">
                <h2 style="font-size: 1.1rem; margin-bottom: 10px;">En Yakın Etkinlik</h2>
                <p style="color: var(--color-gray-400); font-size: 0.9rem; margin-bottom: 1rem;">Bu hafta sonu hava durumu uçuş için çok uygun görünüyor!</p>
                <button class="btn-primary" onclick="app.navigate('apply')">
                    Hemen Başvur <i data-lucide="arrow-right"></i>
                </button>
            </div>
            
            <div class="glass-card" style="margin-top: 10px;">
                <h2 style="font-size: 1.1rem; margin-bottom: 10px;">Uçuşunu Mu Tamamladın?</h2>
                <p style="color: var(--color-gray-400); font-size: 0.9rem; margin-bottom: 1rem;">Kayıtlarını girmeyi unutma.</p>
                <button class="btn-primary" style="background: rgba(255,255,255,0.1); color: white;" onclick="app.navigate('flightLog')">
                    Kayıt Formu <i data-lucide="clipboard-edit"></i>
                </button>
            </div>
        </div>
    `,
    apply: `
        <div class="page-enter" style="height: 100%; display: flex; flex-direction: column;">
            <h1 class="text-title" style="font-size: 1.3rem;">Etkinlik Başvurusu 📝</h1>
            <p class="text-subtitle" style="font-size: 0.85rem;">Formu doldurarak haftalık eğitim/etkinlik planlamasında yerini al.</p>
            <div class="form-container">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdlE3_jkDGy3ZHvtLf5cH9Cs0Ct7ygkFqrdvYwQVpUVqd4I-g/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Yükleniyor…</iframe>
            </div>
        </div>
    `,
    flightLog: `
         <div class="page-enter" style="height: 100%; display: flex; flex-direction: column;">
            <h1 class="text-title" style="font-size: 1.3rem;">Uçuş Kaydı ✈️</h1>
            <p class="text-subtitle" style="font-size: 0.85rem;">Gerçekleştirdiğin uçuşların kaydını sisteme işle.</p>
            <div class="form-container">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdoMzTucJZmo-M1o6-XL1JwbdcswXgNTfQKYZdkB9yizw6ZIw/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Yükleniyor…</iframe>
            </div>
        </div>
    `,
    announcements: `
        <div class="page-enter">
            <h1 class="text-title">Duyurular & Forum 📢</h1>
            <p class="text-subtitle">Uçuş planlamaları ve hava durumu hakkında son duyurular.</p>
            
            <div class="glass-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                    <h3 class="text-gold">Hafta Sonu Uçuş Planı</h3>
                    <span style="font-size: 0.7rem; color: var(--color-gray-400);">Bugün</span>
                </div>
                <p style="font-size: 0.9rem; line-height: 1.5;">Arkadaşlar selam, meteoroloji raporlarına göre cumartesi günü rüzgarın çok stabil (10-15km) esmesi bekleniyor. Tüm başlangıç seviyesi üyelerimizi etkinliğe bekliyoruz!</p>
            </div>
            
            <div class="glass-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                    <h3 class="text-gold">Meteoroloji Brifingi</h3>
                    <span style="font-size: 0.7rem; color: var(--color-gray-400);">2 gün önce</span>
                </div>
                <p style="font-size: 0.9rem; line-height: 1.5;">Bu perşembe kulüp odasında genel meteoroloji analizi brifingimiz olacaktır. Katılım zorunludur.</p>
            </div>
            
            <!-- İleride PHPBB entegrasyonu JS ile bu listeye dinamik item ekleyecek -->
        </div>
    `,
    profile: `
        <div class="page-enter">
            <h1 class="text-title">Profil 👤</h1>
            <p class="text-subtitle">Ayarlar ve bilgiler.</p>
            
            <div class="glass-card" style="text-align: center; margin-top: 20px;">
                <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.1); border-radius: 50%; margin: 0 auto 15px auto; display: flex; align-items: center; justify-content: center;">
                    <i data-lucide="user" style="width: 40px; height: 40px; color: var(--color-gray-400);"></i>
                </div>
                <h3>Kulüp Üyesi</h3>
                <p style="color: var(--color-gray-400); font-size: 0.9rem;">ytuhavk@yildiz.edu.tr</p>
            </div>
            
            <div class="glass-card">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span>Bildirimler</span>
                    <button id="toggle-notifications" class="btn-primary" style="width: auto; padding: 0.5rem 1rem; font-size: 0.8rem;">
                        İzin Ver
                    </button>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 40px;">
                <p style="font-size: 0.7rem; color: var(--color-gray-400);">YTUHAVK PWA v1.0.0</p>
            </div>
        </div>
    `
};

const app = {
    contentDiv: null,
    navItems: null,
    
    init() {
        this.contentDiv = document.getElementById('app-content');
        this.navItems = document.querySelectorAll('.nav-item');
        
        // Navigation Click Listeners
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const targetPage = item.getAttribute('data-target');
                this.navigate(targetPage);
            });
        });

        // Setup Notifications System
        this.setupNotifications();
        
        // Initial Render
        this.navigate('home');
    },

    async fetchWeatherData() {
        const spots = [
            { name: "Serdivan", lat: 40.758, lon: 30.334 },
            { name: "Uçmakdere", lat: 40.803, lon: 27.359 },
            { name: "Fadıllı", lat: 40.176, lon: 28.647 }, // Bursa Fadıllı
            { name: "Ormanlı", lat: 41.366, lon: 28.266 }
        ];

        const weatherContent = document.getElementById('weather-content');
        const loader = document.getElementById('weather-loader');
        
        if (!weatherContent) return;

        try {
            weatherContent.innerHTML = '';
            for (const spot of spots) {
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${spot.lat}&longitude=${spot.lon}&current=weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=kmh`);
                const data = await response.json();
                
                const windSpeed = data.current.wind_speed_10m;
                const windDir = data.current.wind_direction_10m;
                const weatherCode = data.current.weather_code;
                
                // Rüzgar şiddetine göre renk (Uçuşa uygunluk görselleştirmesi)
                let statusColor = "var(--color-gold)"; // Uygun
                if(windSpeed > 25) statusColor = "#EF4444"; // Kırmızı (Çok sert)
                if(windSpeed < 5) statusColor = "#6B7280"; // Gri (Çok zayıf)
                
                // Hava Durumu İkonu Belirleme (WMO Kodlarına göre)
                let iconName = "sun";
                if(weatherCode >= 1 && weatherCode <= 3) iconName = "cloud";
                else if(weatherCode >= 45 && weatherCode <= 48) iconName = "cloud-fog";
                else if(weatherCode >= 51 && weatherCode <= 67) iconName = "cloud-rain";
                else if(weatherCode >= 71 && weatherCode <= 86) iconName = "cloud-snow";
                else if(weatherCode >= 95) iconName = "cloud-lightning";

                weatherContent.innerHTML += `
                    <div style="background: rgba(0,0,0,0.2); padding: 8px 12px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-weight: 500;">${spot.name}</span>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <i data-lucide="${iconName}" style="width: 18px; height: 18px; color: var(--color-gray-300);"></i>
                            <span style="font-size: 0.9rem;">${windSpeed} km/h</span>
                            <div style="width: 24px; height: 24px; border-radius: 50%; background: ${statusColor}; display: flex; align-items: center; justify-content: center; transform: rotate(${windDir}deg);" title="Rüzgar Yönü: ${windDir}°">
                                <i data-lucide="navigation-2" style="width: 14px; height: 14px; color: #fff;"></i>
                            </div>
                        </div>
                    </div>
                `;
            }
            if(loader) loader.style.display = 'none';
            if (window.lucide) window.lucide.createIcons();
            
        } catch (error) {
            console.error("Hava durumu çekilemedi", error);
            weatherContent.innerHTML = '<span style="font-size: 0.8rem; color: var(--color-gray-400);">Hava durumu verisine ulaşılamadı.</span>';
            if(loader) loader.style.display = 'none';
        }
    },
    
    navigate(pageId) {
        if (!pages[pageId]) return;
        
        // Update Nav State
        this.navItems.forEach(item => {
            if (item.getAttribute('data-target') === pageId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Render Content
        this.contentDiv.innerHTML = pages[pageId];
        
        // Setup Profile Page Buttons if navigated there
        if (pageId === 'profile') {
            const btn = document.getElementById('toggle-notifications');
            if (btn) {
                btn.addEventListener('click', () => {
                   this.requestNotificationPermission();
                });
            }
        }

        // Setup Weather widget if navigated to home
        if (pageId === 'home') {
            this.fetchWeatherData();
        }

        // Setup Header Notification Bell
        const headerBtn = document.getElementById('btn-notification');
        if (headerBtn) {
           headerBtn.onclick = () => this.requestNotificationPermission();
        }

        // Re-initialize Lucide Icons for the newly loaded content
        if (window.lucide) {
            window.lucide.createIcons();
        }
    },

    setupNotifications() {
        // OneSignal Web Push Skeleton
        window.OneSignalDeferred = window.OneSignalDeferred || [];
        window.OneSignalDeferred.push(async function(OneSignal) {
            await OneSignal.init({
                appId: "78f5ca67-7cd6-4d5e-b521-25f6ea54e38d", 
            });
        });

        // Inject OneSignal SDK
        const script = document.createElement('script');
        script.src = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";
        script.defer = true;
        document.head.appendChild(script);
    },

    async requestNotificationPermission() {
        try {
            if (!window.OneSignalDeferred) return;
            
            window.OneSignalDeferred.push(async function(OneSignal) {
                await OneSignal.Slidedown.promptPush();
            });
            alert("Bildirim izni istendi. Lütfen tarayıcı penceresinden onaylayın.");
        } catch(e) {
            console.error(e);
            alert("Bildirim sistemi yüklenemedi.");
        }
    }
};

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// Global scope for HTML onclick events
window.app = app;
