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
                    uzbek: "O'zbek"
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
                    uzbek: "Uzbek"
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
                    uzbek: "O'zbekcha"
                }
            };
            
            // Текущий язык
            let currentLang = 'ru';
            
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
                const flagClass = lang === 'ru' ? 'flag-ru' : (lang === 'en' ? 'flag-en' : 'flag-uz');
                const languageName = translations[lang][lang === 'ru' ? 'russian' : (lang === 'en' ? 'english' : 'uzbek')];
                
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
