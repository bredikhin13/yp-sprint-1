# Анализ и планирование микрофронтендов для проекта Mesto

## 1. Предварительный анализ
Предположим, что данный проект представляет собой успешный стартап, который стремительно набрал популярность и привлек большое количество пользователей. Появилась необходимость масштабировать проект и подготовить его для внедрения новых, крупных функций. В связи с этим были сформированы несколько команд опытных разработчиков, обладающих значительным опытом работы с высоконагруженными приложениями, включая микрофронтенды.

## 2. Бизнес-функции
После анализа функционала и кода проекта Mesto можно выделить три основные бизнес-функции:
1. **Аутентификация**
2. **Работа с профилем пользователя**
3. **Работа со списком мест**

На основе этих функций предлагается сформировать команды, каждая из которых будет отвечать за определённые компоненты. Эти компоненты будут разбиты на три микрофронтенда: `auth`, `profile`, `places`.

## 3. Метод реализации
Сборка микрофронтендов в единое приложение будет осуществляться в режиме **Run-time** с использованием гибридной компоновки. Этот подход позволяет улучшить первоначальный отклик и предоставляет пользователям богатый интерактивный опыт — важное качество для приложений, связанных с отображением пользовательского контента.

## 4. Фреймворк для создания микрофронтендов
Для разделения проекта на микрофронтенды выбран фреймворк **Single SPA**. Его основные преимущества:
- Независимость от конкретного фреймворка, что позволяет легко добавлять новый функционал с использованием современных технологий.
- Поддержка ленивой загрузки, ускоряющей первоначальный отклик и улучшающей пользовательский опыт при работе с большими объемами данных.
- Возможность независимого деплоя, что упрощает и ускоряет доставку новых функций пользователям.

## 5. Межмодульное взаимодействие
С учётом выбранной гибридной компоновки и фреймворка Single SPA логичным выбором будет использование паттерна **Backend for Frontend (BFF)**. Преимущества данного подхода для нашего проекта:
- Настройка данных для конкретного фронтенда.
- Упрощение клиентской логики.
- Увеличение производительности.
- Усиление безопасности приложения.


Компоненты:
- Профиль пользователя
    - *User profile*
    - EditProfilePopup
    - EditAvatarPopup
- Страница логина и регистрации
    - InfoTooltip
    - *AuthMain*
    - Login
    - Register
- Список мест
    - AddPlacePopup
    - *PlacesGrid*
    - ImagePopup
    - Card
- Общая библиотека
    - Header
    - Footer
    - PopupWithForm

# Ссылка на второе заданик в draw.io
https://drive.google.com/file/d/1yAr4usvYuua2MbcFTpRtZb4_pDBKYUS9/view?usp=sharing