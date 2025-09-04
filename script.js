document.addEventListener('DOMContentLoaded', function() {
            // Инициализация Telegram Web App
            let tg = window.Telegram.WebApp;
            tg.expand();
            tg.enableClosingConfirmation();
            tg.setHeaderColor('#2b8ef6');
            tg.backgroundColor = '#18222d';
            
            // Список всех инструментов
            const allInstruments = [
                "AUD/CAD OTC", "GBP/USD OTC", "USD/CAD OTC", "EUR/GBP OTC", 
                "EUR/JPY OTC", "GBP/JPY OTC", "AUD/NZD OTC", "USD/RUB OTC", 
                "CAD/JPY OTC", "CHF/JPY OTC", "EUR/CHF OTC", "AED/CNY OTC", 
                "EUR/USD", "BTC/USD", "XAU/USD", "ETH/USD", "USD/RUB", 
                "USD/JPY", "GBP/USD", "USD/CHF", "AUD/USD", "USD/CAD", 
                "NZD/USD", "EUR/GBP", "EUR/JPY", "GBP/JPY", "AUD/JPY", 
                "CHF/JPY", "EUR/AUD", "EUR/CAD", "GBP/AUD", "GBP/CAD", 
                "AUD/CAD", "AUD/CHF", "NZD/JPY", "NZD/CHF"
            ];
            
            // Система переводов
            const translations = {
                ru: {
                    app_title: "Pocket AI",
                    select_instrument: "Выберите инструмент",
                    search_placeholder: "Поиск инструмента...",
                    select_model: "Модель",
                    expiration_h4: "Время экспирации H4",
                    expiration_time: "Время экспирации",
                    "5_seconds": "5 секунд",
                    "10_seconds": "10 секунд",
                    "15_seconds": "15 секунд",
                    "1_minute": "1 минута",
                    "3_minutes": "3 минуты",
                    "5_minutes": "5 минут",
                    "10_minutes": "10 минут",
                    get_signal: "Получить сигнал",
                    signal: "Сигнал",
                    model: "Модель:",
                    timeframe: "Таймфрейм:",
                    accuracy: "Точность:",
                    analyzing: "Анализ...",
                    no_results: "Инструменты не найдены",
                    buy: "ПОКУПАТЬ",
                    sell: "ПРОДАВАТЬ",
                    russian: "Русский",
                    english: "English",
                    uzbek: "O'zbek",
                    german: "Deutsch",
                    french: "Français",
                    spanish: "Español",
                    chinese: "中文",
                    turkish: "Türkçe",
                    hindi: "हिन्दी",
                    arabic: "العربية",
                    kazakh: "Қазақша",
                    portuguese: "Português",
                    japanese: "日本語",
                    korean: "한국어"
                },
                en: {
                    app_title: "Pocket AI",
                    select_instrument: "Select instrument",
                    search_placeholder: "Search instrument...",
                    select_model: "Model",
                    expiration_h4: "Expiration time H4",
                    expiration_time: "Expiration time",
                    "5_seconds": "5 seconds",
                    "10_seconds": "10 seconds",
                    "15_seconds": "15 seconds",
                    "1_minute": "1 minute",
                    "3_minutes": "3 minutes",
                    "5_minutes": "5 minutes",
                    "10_minutes": "10 minutes",
                    get_signal: "Get signal",
                    signal: "Signal",
                    model: "Model:",
                    timeframe: "Timeframe:",
                    accuracy: "Accuracy:",
                    analyzing: "Analyzing...",
                    no_results: "No instruments found",
                    buy: "BUY",
                    sell: "SELL",
                    russian: "Russian",
                    english: "English",
                    uzbek: "Uzbek",
                    german: "German",
                    french: "French",
                    spanish: "Spanish",
                    chinese: "Chinese",
                    turkish: "Turkish",
                    hindi: "Hindi",
                    arabic: "Arabic",
                    kazakh: "Kazakh",
                    portuguese: "Portuguese",
                    japanese: "Japanese",
                    korean: "Korean"
                },
                uz: {
                    app_title: "Pocket AI",
                    select_instrument: "Instrumentni tanlang",
                    search_placeholder: "Instrumentni qidirish...",
                    select_model: "Model",
                    expiration_h4: "Muddati H4",
                    expiration_time: "Muddati",
                    "5_seconds": "5 soniya",
                    "10_seconds": "10 soniya",
                    "15_seconds": "15 soniya",
                    "1_minute": "1 daqiqa",
                    "3_minutes": "3 daqiqa",
                    "5_minutes": "5 daqiqa",
                    "10_minutes": "10 daqiqa",
                    get_signal: "Signal olish",
                    signal: "Signal",
                    model: "Model:",
                    timeframe: "Vaqt oraligi:",
                    accuracy: "Aniqlik:",
                    analyzing: "Tahlil qilinmoqda...",
                    no_results: "Instrumentlar topilmadi",
                    buy: "SOTIB OLISH",
                    sell: "SOTISH",
                    russian: "Ruscha",
                    english: "Inglizcha",
                    uzbek: "O'zbekcha",
                    german: "Nemischa",
                    french: "Fransuzcha",
                    spanish: "Ispancha",
                    chinese: "Xitoycha",
                    turkish: "Turkcha",
                    hindi: "Hindcha",
                    arabic: "Arabcha",
                    kazakh: "Qozoqcha",
                    portuguese: "Portugalcha",
                    japanese: "Yaponcha",
                    korean: "Koreyscha"
                },
                de: {
                    app_title: "Pocket AI",
                    select_instrument: "Instrument wählen",
                    search_placeholder: "Instrument suchen...",
                    select_model: "Modell",
                    expiration_h4: "Ablaufzeit H4",
                    expiration_time: "Ablaufzeit",
                    "5_seconds": "5 Sekunden",
                    "10_seconds": "10 Sekunden",
                    "15_seconds": "15 Sekunden",
                    "1_minute": "1 Minute",
                    "3_minutes": "3 Minuten",
                    "5_minutes": "5 Minuten",
                    "10_minutes": "10 Minuten",
                    get_signal: "Signal erhalten",
                    signal: "Signal",
                    model: "Modell:",
                    timeframe: "Zeitrahmen:",
                    accuracy: "Genauigkeit:",
                    analyzing: "Analyse...",
                    no_results: "Keine Instrumente gefunden",
                    buy: "KAUFEN",
                    sell: "VERKAUFEN"
                },
                fr: {
                    app_title: "Pocket AI",
                    select_instrument: "Sélectionner l'instrument",
                    search_placeholder: "Rechercher un instrument...",
                    select_model: "Modèle",
                    expiration_h4: "Temps d'expiration H4",
                    expiration_time: "Temps d'expiration",
                    "5_seconds": "5 secondes",
                    "10_seconds": "10 secondes",
                    "15_seconds": "15 secondes",
                    "1_minute": "1 minute",
                    "3_minutes": "3 minutes",
                    "5_minutes": "5 minutes",
                    "10_minutes": "10 minutes",
                    get_signal: "Obtenir le signal",
                    signal: "Signal",
                    model: "Modèle:",
                    timeframe: "Cadre temporel:",
                    accuracy: "Précision:",
                    analyzing: "Analyse...",
                    no_results: "Aucun instrument trouvé",
                    buy: "ACHETER",
                    sell: "VENDRE"
                },
                es: {
                    app_title: "Pocket AI",
                    select_instrument: "Seleccionar instrumento",
                    search_placeholder: "Buscar instrumento...",
                    select_model: "Modelo",
                    expiration_h4: "Tiempo de expiración H4",
                    expiration_time: "Tiempo de expiración",
                    "5_seconds": "5 segundos",
                    "10_seconds": "10 segundos",
                    "15_seconds": "15 segundos",
                    "1_minute": "1 minuto",
                    "3_minutes": "3 minutos",
                    "5_minutes": "5 minutos",
                    "10_minutes": "10 minutos",
                    get_signal: "Obtener señal",
                    signal: "Señal",
                    model: "Modelo:",
                    timeframe: "Marco temporal:",
                    accuracy: "Precisión:",
                    analyzing: "Analizando...",
                    no_results: "No se encontraron instrumentos",
                    buy: "COMPRAR",
                    sell: "VENDER"
                },
                cn: {
                    app_title: "信号机器人",
                    select_instrument: "选择工具",
                    search_placeholder: "搜索工具...",
                    select_model: "模型",
                    expiration_h4: "到期时间 H4",
                    expiration_time: "到期时间",
                    "5_seconds": "5秒",
                    "10_seconds": "10秒",
                    "15_seconds": "15秒",
                    "1_minute": "1分钟",
                    "3_minutes": "3分钟",
                    "5_minutes": "5分钟",
                    "10_minutes": "10分钟",
                    get_signal: "获取信号",
                    signal: "信号",
                    model: "模型:",
                    timeframe: "时间框架:",
                    accuracy: "准确率:",
                    analyzing: "分析中...",
                    no_results: "未找到工具",
                    buy: "买入",
                    sell: "卖出"
                },
                tr: {
                    app_title: "Sinyal Botu",
                    select_instrument: "Araç seçin",
                    search_placeholder: "Araç ara...",
                    select_model: "Model",
                    expiration_h4: "Son kullanma süresi H4",
                    expiration_time: "Son kullanma süresi",
                    "5_seconds": "5 saniye",
                    "10_seconds": "10 saniye",
                    "15_seconds": "15 saniye",
                    "1_minute": "1 dakika",
                    "3_minutes": "3 dakika",
                    "5_minutes": "5 dakika",
                    "10_minutes": "10 dakika",
                    get_signal: "Sinyal al",
                    signal: "Sinyal",
                    model: "Model:",
                    timeframe: "Zaman dilimi:",
                    accuracy: "Doğruluk:",
                    analyzing: "Analiz ediliyor...",
                    no_results: "Araç bulunamadı",
                    buy: "AL",
                    sell: "SAT"
                },
                in: {
                    app_title: "सिग्नल बॉट",
                    select_instrument: "इंस्ट्रूमेंट चुनें",
                    search_placeholder: "इंस्ट्रूमेंट खोजें...",
                    select_model: "मॉडल",
                    expiration_h4: "एक्सपायरी समय H4",
                    expiration_time: "एक्सपायरी समय",
                    "5_seconds": "5 सेकंड",
                    "10_seconds": "10 सेकंड",
                    "15_seconds": "15 सेकंड",
                    "1_minute": "1 मिनट",
                    "3_minutes": "3 मिनट",
                    "5_minutes": "5 मिनट",
                    "10_minutes": "10 मिनट",
                    get_signal: "सिग्नल प्राप्त करें",
                    signal: "सिग्नल",
                    model: "मॉडल:",
                    timeframe: "टाइमफ्रेम:",
                    accuracy: "सटीकता:",
                    analyzing: "विश्लेषण...",
                    no_results: "कोई इंस्ट्रूमेंट नहीं मिला",
                    buy: "खरीदें",
                    sell: "बेचें"
                },
                ae: {
                    app_title: "بوت الإشارة",
                    select_instrument: "اختر الأداة",
                    search_placeholder: "ابحث عن أداة...",
                    select_model: "النموذج",
                    expiration_h4: "وقت الانتهاء H4",
                    expiration_time: "وقت الانتهاء",
                    "5_seconds": "5 ثوان",
                    "10_seconds": "10 ثوان",
                    "15_seconds": "15 ثوان",
                    "1_minute": "1 دقيقة",
                    "3_minutes": "3 دقائق",
                    "5_minutes": "5 دقائق",
                    "10_minutes": "10 دقائق",
                    get_signal: "الحصول على إشارة",
                    signal: "إشارة",
                    model: "النموذج:",
                    timeframe: "الإطار الزمني:",
                    accuracy: "الدقة:",
                    analyzing: "جاري التحليل...",
                    no_results: "لم يتم العثور على أدوات",
                    buy: "شراء",
                    sell: "بيع"
                },
                kz: {
                    app_title: "Сигнал Боты",
                    select_instrument: "Құралды таңдаңыз",
                    search_placeholder: "Құралды іздеу...",
                    select_model: "Модель",
                    expiration_h4: "Мерзімі H4",
                    expiration_time: "Мерзімі",
                    "5_seconds": "5 секунд",
                    "10_seconds": "10 секунд",
                    "15_seconds": "15 секунд",
                    "1_minute": "1 минут",
                    "3_minutes": "3 минут",
                    "5_minutes": "5 минут",
                    "10_minutes": "10 минут",
                    get_signal: "Сигнал алу",
                    signal: "Сигнал",
                    model: "Модель:",
                    timeframe: "Уақыт аралығы:",
                    accuracy: "Дәлдік:",
                    analyzing: "Талдау...",
                    no_results: "Құралдар табылмады",
                    buy: "САТЫП АЛУ",
                    sell: "САТУ"
                },
                br: {
                    app_title: "Bot de Sinal",
                    select_instrument: "Selecionar instrumento",
                    search_placeholder: "Pesquisar instrumento...",
                    select_model: "Modelo",
                    expiration_h4: "Tempo de expiração H4",
                    expiration_time: "Tempo de expiração",
                    "5_seconds": "5 segundos",
                    "10_seconds": "10 segundos",
                    "15_seconds": "15 segundos",
                    "1_minute": "1 minuto",
                    "3_minutes": "3 minutos",
                    "5_minutes": "5 minutos",
                    "10_minutes": "10 minutos",
                    get_signal: "Obter sinal",
                    signal: "Sinal",
                    model: "Modelo:",
                    timeframe: "Período de tempo:",
                    accuracy: "Precisão:",
                    analyzing: "Analisando...",
                    no_results: "Nenhum instrumento encontrado",
                    buy: "COMPRAR",
                    sell: "VENDER"
                },
                jp: {
                    app_title: "シグナルボット",
                    select_instrument: "銘柄を選択",
                    search_placeholder: "銘柄を検索...",
                    select_model: "モデル",
                    expiration_h4: "有効期限 H4",
                    expiration_time: "有効期限",
                    "5_seconds": "5秒",
                    "10_seconds": "10秒",
                    "15_seconds": "15秒",
                    "1_minute": "1分",
                    "3_minutes": "3分",
                    "5_minutes": "5分",
                    "10_minutes": "10分",
                    get_signal: "シグナルを取得",
                    signal: "シグナル",
                    model: "モデル:",
                    timeframe: "時間枠:",
                    accuracy: "精度:",
                    analyzing: "分析中...",
                    no_results: "銘柄が見つかりません",
                    buy: "買い",
                    sell: "売り"
                },
                kr: {
                    app_title: "신호 봇",
                    select_instrument: "도구 선택",
                    search_placeholder: "도구 검색...",
                    select_model: "모델",
                    expiration_h4: "만료 시간 H4",
                    expiration_time: "만료 시간",
                    "5_seconds": "5초",
                    "10_seconds": "10초",
                    "15_seconds": "15초",
                    "1_minute": "1분",
                    "3_minutes": "3분",
                    "5_minutes": "5분",
                    "10_minutes": "10분",
                    get_signal: "신호 받기",
                    signal: "신호",
                    model: "모델:",
                    timeframe: "시간 범위:",
                    accuracy: "정확도:",
                    analyzing: "분석 중...",
                    no_results: "도구를 찾을 수 없습니다",
                    buy: "매수",
                    sell: "매도"
                }
            };
            
            // Текущий язык
            let currentLang = 'en';
            
            // Элементы DOM
            const languageDropdownBtn = document.getElementById('language-dropdown-btn');
            const languageDropdown = document.getElementById('language-dropdown');
            const languageOptions = document.querySelectorAll('.language-option');
            const overlay = document.getElementById('overlay');
            const timeOptions = document.querySelectorAll('.time-option');
            const modelCheckboxes = document.querySelectorAll('.model-checkbox');
            const getSignalBtn = document.getElementById('get-signal');
            const resultDiv = document.getElementById('result');
            const signalText = document.getElementById('signal-text');
            const timeframeText = document.getElementById('timeframe');
            const accuracyText = document.getElementById('accuracy');
            const searchInput = document.getElementById('instrument-search');
            const instrumentsList = document.getElementById('instruments-list');
            
            // Текущий выбранный инструмент
            let selectedInstrument = "AUD/CAD OTC";
            
            // Функция перевода интерфейса
           function translatePage(lang) {
    currentLang = lang;
    
    // Обновляем все элементы с атрибутом data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.hasAttribute('data-placeholder')) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Обновляем кнопку выбора языка
    const flagClass = `flag-${lang}`;
    let languageKey;
    switch(lang) {
        case 'ru': languageKey = 'russian'; break;
        case 'en': languageKey = 'english'; break;
        case 'uz': languageKey = 'uzbek'; break;
        case 'de': languageKey = 'german'; break;
        case 'fr': languageKey = 'french'; break;
        case 'es': languageKey = 'spanish'; break;
        case 'cn': languageKey = 'chinese'; break;
        case 'tr': languageKey = 'turkish'; break;
        case 'in': languageKey = 'hindi'; break;
        case 'ae': languageKey = 'arabic'; break;
        case 'kz': languageKey = 'kazakh'; break;
        case 'br': languageKey = 'portuguese'; break;
        case 'jp': languageKey = 'japanese'; break;
        case 'kr': languageKey = 'korean'; break;
        default: languageKey = 'english';
    }
    const languageName = translations[lang][languageKey];
    
    languageDropdownBtn.innerHTML = `
        <div class="language-flag ${flagClass}"></div>
        <span>${languageName}</span>
    `;
    
    // Переводим кнопки времени
    timeOptions.forEach(option => {
        const timeKey = option.querySelector('.time-label').getAttribute('data-translate');
        if (timeKey && translations[lang][timeKey]) {
            option.querySelector('.time-label').textContent = translations[lang][timeKey];
        }
    });
    
    // Обновляем список инструментов при поиске
    const searchText = searchInput.value.toLowerCase();
    const filteredInstruments = allInstruments.filter(instrument => 
        instrument.toLowerCase().includes(searchText)
    );
    populateInstrumentsList(filteredInstruments);
}

            
            // Заполняем список инструментов
            function populateInstrumentsList(instruments) {
                instrumentsList.innerHTML = '';
                
                if (instruments.length === 0) {
                    instrumentsList.innerHTML = `<div class="no-results">${translations[currentLang].no_results}</div>`;
                    return;
                }
                
                instruments.forEach(instrument => {
                    const item = document.createElement('div');
                    item.className = `instrument-item ${instrument === selectedInstrument ? 'selected' : ''}`;
                    item.textContent = instrument;
                    item.addEventListener('click', () => {
                        document.querySelectorAll('.instrument-item').forEach(i => i.classList.remove('selected'));
                        item.classList.add('selected');
                        selectedInstrument = instrument;
                    });
                    instrumentsList.appendChild(item);
                });
            }
            
            // Переключение видимости выпадающего списка языков
            function toggleLanguageDropdown() {
                languageDropdown.classList.toggle('show');
                overlay.style.display = languageDropdown.classList.contains('show') ? 'block' : 'none';
            }
            
            // Инициализация списка инструментов
            populateInstrumentsList(allInstruments);
            
            // Обработчики событий для выбора языка
            languageDropdownBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleLanguageDropdown();
            });
            
            languageOptions.forEach(option => {
                option.addEventListener('click', function() {
                    const lang = this.getAttribute('data-lang');
                    translatePage(lang);
                    toggleLanguageDropdown();
                });
            });
            
            overlay.addEventListener('click', function() {
                toggleLanguageDropdown();
            });
            
            // Поиск инструментов
            searchInput.addEventListener('input', function() {
                const searchText = this.value.toLowerCase();
                const filteredInstruments = allInstruments.filter(instrument => 
                    instrument.toLowerCase().includes(searchText)
                );
                populateInstrumentsList(filteredInstruments);
            });
            
            // Выбор времени
            timeOptions.forEach(option => {
                option.addEventListener('click', function() {
                    timeOptions.forEach(o => o.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
            
            // Выбор модели
            modelCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    modelCheckboxes.forEach(c => c.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
            
            // Получение сигналов
            getSignalBtn.addEventListener('click', function() {
                // Показываем анимацию загрузки
                const originalText = getSignalBtn.textContent;
                getSignalBtn.innerHTML = `<span class="loading"></span>${translations[currentLang].analyzing}`;
                getSignalBtn.disabled = true;
                
                // Получаем выбранную модель
                const selectedModel = document.querySelector('.model-checkbox.selected').dataset.model;
                
                // Получаем выбранное время и соответствующий таймфрейм
                const selectedTimeOption = document.querySelector('.time-option.selected');
                const timeframe = selectedTimeOption ? selectedTimeOption.getAttribute('data-timeframe') : 'H4';
                
                // Имитируем задержку анализа
                setTimeout(function() {
                    // Генерируем случайный сигнал
                    const randomSignal = Math.random() > 0.5 ? 'BUY' : 'SELL';
                    const randomAccuracy = Math.floor(Math.random() * 12) + 78; // от 78 до 89%
                    
                    // Обновляем текст сигнала
                    signalText.textContent = `${selectedInstrument} ${randomSignal === 'BUY' ? translations[currentLang].buy : translations[currentLang].sell}`;
                    signalText.className = randomSignal === 'BUY' ? 'signal signal-buy' : 'signal signal-sell';
                    
                    // Обновляем детали
                    timeframeText.textContent = `${translations[currentLang].timeframe} ${timeframe}`;
                    accuracyText.textContent = `${translations[currentLang].accuracy} ${randomAccuracy}%`;
                    
                    // Обновляем модель в результате
                    document.querySelector('.model-badge').textContent = selectedModel;
                    
                    // Показываем результат
                    resultDiv.style.display = 'block';
                    
                    // Прокручиваем к результату
                    resultDiv.scrollIntoView({ behavior: 'smooth' });
                    
                    // Восстанавливаем кнопку
                    getSignalBtn.innerHTML = originalText;
                    getSignalBtn.disabled = false;
                    
                    // Вибрация для обратной связи (если поддерживается)
                    if (navigator.vibrate) {
                        navigator.vibrate(100);
                    }
                }, 2000); // Задержка в 2 секунды для имитации анализа
            });

        });
