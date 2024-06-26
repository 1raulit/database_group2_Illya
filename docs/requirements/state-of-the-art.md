# Аналіз предметної області

## Вступ

 У цьому документі міститься аналіз сфери управління відкритими даними. Документ включає:
 - [Основні визначення](#основні-визначення)
 - [Підходи та способи вирішення завдання](#підходи-та-способи-вирішення-завдання)
 - [Порівняльна характеристика існуючих засобів вирішення завдання](#підходи-та-способи-вирішення-завдання)
 - [Висновки](#висновки)
 - [Посилання](#посилання)

## Основні визначення

*Даний розділ містить визначення термінів та скорочень, які використовуються при аналізі предметної області, що не будуть розкриті далі.*

[**Відкриті дані**](https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%B4%D0%BA%D1%80%D0%B8%D1%82%D1%96_%D0%B4%D0%B0%D0%BD%D1%96) — це концепція, за якою певні дані мають бути вільними для використання та розповсюдження будь-якою особою з будь-якою метою.

[**Систе́ма управління ба́зами да́них**](https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D0%BA%D0%B5%D1%80%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F_%D0%B1%D0%B0%D0%B7%D0%B0%D0%BC%D0%B8_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85) (СУБД, СКБД англ. Database Management System, DBMS) — набір взаємопов'язаних даних (база даних) і програм для доступу до цих даних. Надає можливості створення, збереження, оновлення та пошуку інформації в базах даних з контролем доступу до даних.

[**Мова структурованих запитів**](https://acode.com.ua/sql-intro/) (скор. “SQL” від англ. “Structured Query Language”) — це стандартна мова запитів, яка використовується для роботи з реляційними базами даних.

[**Теорема CAP**](https://uk.wikipedia.org/wiki/%D0%A2%D0%B5%D0%BE%D1%80%D0%B5%D0%BC%D0%B0_CAP) (також відома як теорема Брюера, на честь науковця Еріка Брюера) — твердження, що для будь-якої розподіленої комп'ютерної системи неможливо одночасно забезпечити виконання більше двох із перелічених трьох властивостей:
- узгодженість даних (усі вузли бачать однакові дані у будь-який момент часу);
- доступність (гарантія того, що кожен запит отримає коректну відповідь);
- стійкість до розділення (попри розділення на ізольовані секції або втрати зв'язку з частиною вузлів, система не втрачає стабільність і здатність коректно відповідати на запити).

[**WAL-журналювання**](https://uk.wikipedia.org/wiki/WAL-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D1%8E%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F) або журналювання із записом наперед (англ. Write-Ahead Logging) — це сукупність технологій для забезпечення атомарності та довговічності даних в системах керування базами даних.

## Підходи та способи вирішення завдання

*Даний розділ містить опис підходів, моделей та способів вирішення завдання.*

### Методи збору даних

#### Web scraping

[*Web scraping*](https://astroproxy.com/ua/blog/shho-take-veb-skreiping-i-yak-vin-povyazanii-z-proksi) - це автоматизований спосіб отримання великого обсягу даних з інтернету. Цей процес нагадує пошук інформації в масштабах, тобто збирає дані, скануючи тисячі сайтів автоматичнов в інтернеті за заданими параметрами.

Навіщо потрібен [Web scraping](https://uk.wikipedia.org/wiki/Web_scraping):
- Вивчення ринку, його основних гравців, пропозицій та цін конкурентів, це може допомогти на етапі запуску бізнесу.  
- Відстеження потрібних новин повістки, стрічки новин.  
- Оцінка ефективності постів у соцмережах та блогах, що допоможе визначити актуальність обраної теми.  
- Налаштування машинного навчання, за допомогою [скрейпінгу](https://uk.wikipedia.org/wiki/Web_scraping) нейронні мережі отримують матеріал для розвитку.  

Плюси: 
- Доступність даних.    
- Автоматизація збору даних.     
- Широкий спектр даних.    

Мінуси: 
- Нестабільність структури сайту.    
- Юридичні обмеження.    
- Вимоги до обладнання і ресурсів.    

#### API

[*API*](https://hostiq.ua/blog/ukr/what-is-api/) - це набір програмного коду, який дозволяє взаємодіяти між програмами, запитувати та обмінюватися даними, спрощуючи комунікацію між різними програмними платформами.

Види [API](https://ru.wikipedia.org/wiki/API):
- Публічні.  
- Партнерські.  
- Приватні.  
- Складні.  

Плюси: 
- Економія: працюючи з уже готовим кодом заощаджується час та гроші.  
- Передбачуваність: у кожній новій програмі інтерфейс працює зрозумілим знайомим чином.  

Мінуси: 
- Поверхневість: коли розробник використовує чужий [API](https://ru.wikipedia.org/wiki/API), він може не знати як працює вихідний код, що може стати проблемою.  
- Обмеженість: готовий [API](https://ru.wikipedia.org/wiki/API) не вдасться вдосконалити новим функціоналом.  
 
#### Database extraction

*Витяг з бази даних* - це процес отримання даних з бази даних для подальшого використання. Він передбачає використання мови запитів, такої як SQL (мова структурованих запитів), для безпосередньої взаємодії з базою даних і вилучення необхідних даних. Ці витягнуті дані можуть бути використані для різних цілей, таких як аналіз, звітність або введення в інші системи. Процес вилучення можна налаштувати для отримання конкретних даних, які відповідають певним критеріям, що робить його гнучким і потужним інструментом для управління даними.

Особливості методу:
- Доступ до структурованих даних: Якщо система передбачає роботу зі структурованими даними, SQL дозволяє безпосередньо взаємодіяти з реляційними базами даних. Це означає, що ми можемо витягувати конкретні дані відповідно до наших потреб.
- Ефективний пошук даних: SQL призначена для керування даними, що зберігаються в реляційних системах керування базами даних. Вона дуже ефективна для швидкого вилучення великих обсягів даних. Це може бути особливо корисно, якщо система передбачає роботу з великими наборами даних.
- Гнучкість і потужність: SQL забезпечує велику гнучкість вилучення даних. Можна використовувати різні оператори (наприклад, SELECT, FROM, WHERE), щоб точно вказати, які дані потрібно отримати. Це робить SQL потужним інструментом для будь-якої системи де потрібно взаємодіяти з даними.
- Маніпулювання даними: Окрім вилучення даних, SQL також дозволяє оновлювати, видаляти або вставляти нові дані в базу даних. Це може бути корисно для підтримки та оновлення даних системи.
- Інтеграція з іншими технологіями: SQL можна використовувати в поєднанні з різними мовами програмування (наприклад, Python, Java тощо) та інструментами (наприклад, Excel, Tableau тощо), що робить її універсальним рішенням для багатьох систем.

### Зберігання даних

*База даних* - це структурований набір даних, сукупність інформації, яка організована таким чином, щоб до неї можна було легко отримати доступ, керувати нею та оновлювати. Бази даних можна класифікувати за типами вмісту: бібліографічні, повнотекстові, числові та графічні.

#### NoSQL databases:

*NoSQL* — база даних, яка забезпечує механізм зберігання та видобування даних відмінний від підходу таблиць-відношень в реляційних базах даних.

Мотиви цього підходу включають:
 - простоту дизайну схеми БД
 - значно спрощене горизонтальне масштабування на кластери машин (що є проблемою для реляційних баз даних)
 - тонкий контроль над доступністю.
Структури даних, що використовуються в NoSQL (такі як ключ-значення, сховище з широким стовпчиком, граф, документ) є відмінними від тих, що використовуються за замовчуванням в реляційних базах, що робить тим самим деякі операції над даними значно швидшими на NoSQL.

Особливості:
Багато NoSQL сховищ нехтують узгодженістю даних (у сенсі [теореми CAP](https://uk.wikipedia.org/wiki/%D0%A2%D0%B5%D0%BE%D1%80%D0%B5%D0%BC%D0%B0_CAP)) на противагу доступності, толерантності до партиціонування, та, звісно, швидкості. Бар'єрами прийняття парадигми NoSQL сховищ є використання низькорівневої мови запитів (замість добре розвиненого та стандартизованого SQL), брак стандартизованих інтерфейсів і значні інвестиції уже в існуючі реляційні бази.
Більшість NoSQL баз даних пропонують концепцію випадкового узгодження даних, в якому зміни в базі продубльовано на всі вузли «випадковим чином» (зазвичай така дія займає мілісекунди), що запити даних можуть не повернути оновлені дані моментально, або ж прочитані дані будуть не точними — давно знана проблема читання станів. На додаток, деякі NoSQL системи можуть демонструвати втрачені записи та інші форми втрати даних. На щастя, деякі NoSQL забезпечують принцип [WAL-журналювання](https://uk.wikipedia.org/wiki/WAL-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D1%8E%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F) для уникнення втрати даних. 

#### Relational databases (RDBMS):

*Реляційні бази даних* — це тип системи керування базами даних (RDBMS), яка використовується для ефективного та структурованого зберігання та організації великих обсягів інформації.

Реляційна база даних складається з однієї або кількох таблиць, які містять інформацію, пов’язану одна з одною. Кожна таблиця складається з рядків і стовпців, де кожен рядок представляє запис, а кожен стовпець представляє атрибут або поле інформації.

Основна мета реляційних баз даних — забезпечити структуровану та організовану форму зберігання даних, яка дозволяє легко шукати та оновлювати інформацію. Крім того, вони також дозволяють ефективно й точно виконувати складні запити, що включають кілька таблиць.

Однією з головних переваг реляційних баз даних є їх здатність забезпечувати цілісність даних і узгодженість інформації.. Визначивши зв’язки та обмеження між таблицями, ви можете переконатися, що дані, що зберігаються в базі даних, є точними та послідовними. Це особливо важливо в критичних бізнес-додатках, де обробляються великі обсяги інформації.

Ще однією важливою перевагою реляційних баз даних є їхня здатність масштабуватись і рости разом із бізнесом. Замість того, щоб переходити на нову платформу або систему керування базами даних, коли потрібна додаткова ємність, реляційні бази даних можна розширювати та коригувати в міру зростання бізнесу.

#### Гібридна база даних:

*Гібридна база даних* - це система керування базами даних (СКБД), яка об'єднує в собі реляційні та нереляційні (NoSQL) підходи до зберігання даних. Вона надає гнучкість у використанні структурованих, напівструктурованих та невідомих форматів даних. Гібридні бази даних забезпечують високу продуктивність та масштабованість, що дозволяє їм ефективно обробляти великі обсяги даних у реальному часі. Вони є ідеальним рішенням для компаній, які потребують зберігати та обробляти різноманітні дані від різних джерел.

Переваги Гібридних баз даних:

- Гнучкість: можливість працювати з різноманітними типами даних.
- Масштабованість: здатність розширювати обсяги даних та обсяги транзакцій для відповіді на зростаючі потреби бізнесу.
- Висока доступність: забезпечення доступності до даних за будь-яких обставин.
- Ефективність: оптимізація продуктивності та швидкості доступу до даних.

Недоліки:
- Складність управління: Завдяки комбінації різних моделей даних, гібридні бази даних можуть бути складними у розробці та управлінні.
- Витрати на обслуговування: Підтримка гібридної інфраструктури може призвести до збільшення витрат на обслуговування та підтримку.

#### Cloud Storage Systems:

*Системи зберігання в хмарі (Cloud Storage Systems)* - це спеціальні сервіси, які надають можливість зберігати дані в розподіленому, віддаленому середовищі через Інтернет. Вони дозволяють користувачам зберігати, керувати та отримувати доступ до своїх файлів і даних з будь-якого пристрою, підключеного до мережі Інтернет.

Основні переваги Cloud Storage Systems включають:
- Масштабованість: Системи зберігання в хмарі зазвичай мають велику потужність і можуть масштабуватися в залежності від потреб користувача. Це дозволяє зберігати великі обсяги даних та забезпечувати їх доступність.
- Доступність: Дані, збережені в хмарі, доступні з будь-якого місця з доступом до Інтернету. Це робить їх ідеальним варіантом для забезпечення доступу до даних з різних пристроїв та місць роботи.
- Надійність: Багато Cloud Storage Systems забезпечують резервне копіювання даних та механізми відновлення, що робить їх надійними для зберігання важливої інформації та даних.
- Безпека: Системи зберігання в хмарі часто надають різні заходи безпеки, такі як шифрування даних, двофакторна аутентифікація та контроль доступу, щоб забезпечити захист конфіденційної інформації.
- Еластичність вартості: Користувачі сплачують лише за фактичне використання обсягу даних, що дозволяє ефективно керувати витратами на зберігання.

Однак, існують деякі недоліки систем зберігання в хмарі:
- Залежність від Інтернет-з'єднання: Для доступу до даних, збережених в хмарі, потрібне постійне Інтернет-з'єднання. Відсутність зв'язку може призвести до недоступності даних.
- Обмеження управління: Не всі хмарні системи надають розширені можливості управління даними, такі як резервне копіювання, відновлення та архівування, що може обмежити можливості користувача в управлінні своїми даними.
- Несумісність з правовими вимогами: Використання хмарних систем зберігання даних може суперечити деяким правовим вимогам, таким як вимоги щодо зберігання даних в конкретних країнах або вимоги до захисту конфіденційної інформації.
- Обмежені можливості налаштування: У деяких випадках хмарні системи зберігання даних можуть мати обмежені можливості налаштування або адаптації під конкретні потреби користувача.

Не дивлячись на ці недоліки хмарні системи зберігання даних стали невід'ємною частиною сучасного бізнесу та інформаційних технологій, надаючи ефективність, гнучкість та безпеку в зберіганні та управлінні даними.

### Аналіз даних

[*TensorFlow*](https://uk.wikipedia.org/wiki/TensorFlow) — відкрита програмна бібліотека для машинного навчання цілій низці задач, розроблена компанією Google для задоволення її потреб у системах, здатних будувати та тренувати нейронні мережі для виявляння та розшифровування образів та кореляцій, аналогічно до навчання й розуміння, які застосовують люди.

[TensorFlow](https://ru.wikipedia.org/wiki/TensorFlow) застосовується як для досліджень, так і для розробки власних продуктів Google. Основний API для роботи з бібліотекою реалізований для Python, також існують реалізації для R, C#, C, Haskell, Java, Go, JavaScript та Swift.

Також на основі TensorFlow базується платформа машинного навчання [TFX](https://www.tensorflow.org/tfx/guide). Він надає структуру конфігурації та спільні бібліотеки для інтеграції загальних компонентів, необхідних для визначення, запуску та моніторингу вашої системи машинного навчання.

[Бібліотеки TFX включають:](https://www.tensorflow.org/tfx/guide)
- TensorFlow Data Validation (TFDV) – це бібліотека для аналізу та перевірки даних машинного навчання. Він розроблений з високою масштабованістю і добре працює з TensorFlow та TFX.
- TensorFlow Transform (TFT) – це бібліотека для попередньої обробки даних за допомогою TensorFlow.
- Аналіз моделей TensorFlow (TFMA) – це бібліотека для оцінки моделей TensorFlow. Це дозволяє користувачам оцінювати свої моделі на великих обсягах даних розподіленим чином.
- Метадані TensorFlow (TFMD) надають стандартні уявлення метаданих, які корисні для навчання моделей машинного навчання за допомогою TensorFlow. Метадані можуть створюватися вручну або автоматично під час аналізу вхідних даних та можуть використовуватися для перевірки, дослідження та перетворення даних.
- ML Metadata (MLMD) - це бібліотека для запису та вилучення метаданих, пов'язаних з робочими процесами розробників машинного навчання та фахівців за даними. Найчастіше метадані використовують уявлення TFMD.

### Візуалізація даних

#### D3.js

[*D3 (або D3.js)*](https://d3js.org/what-is-d3) — це безкоштовна бібліотека JavaScript із відкритим кодом для візуалізації даних. Його низькорівневий підхід, побудований на веб-стандартах, забезпечує неперевершену гнучкість у створенні динамічної графіки, керованої даними.

[D3.js](https://uk.wikipedia.org/wiki/D3.js) використовує широко реалізовані стандарти масштабованої векторної графіки (абревіація SVG), HTML5 та Каскадних Таблиць Стилів (CSS). На відміну від багатьох інших бібліотек, D3.js дозволяє чудово контролювати кінцевий візуальний результат.

[D3 — це низькорівневий інструментарій:](https://d3js.org/what-is-d3)  
D3 не є бібліотекою діаграм у традиційному розумінні. Він не має поняття «діаграми». Коли ви візуалізуєте дані за допомогою D3, ви створюєте різноманітні примітиви.

[D3 гнучкий:](https://d3js.org/what-is-d3)  
Оскільки D3 не має загальної абстракції «діаграма», навіть базова діаграма може потребувати кількох десятків рядків коду. З іншого боку, усі частини розкладені перед вами, і ви маєте повний контроль над тим, що відбувається. Ви можете налаштувати візуалізацію, щоб досягти саме того, чого хочете.

[D3 працює з Інтернетом:](https://d3js.org/what-is-d3)  
D3 не містить нового графічного представлення; замість цього ви використовуєте D3 безпосередньо з веб-стандартами, такими як SVG і Canvas. Прийняття D3 веб-стандартів приносить багато переваг. Наприклад, ви можете використовувати зовнішні таблиці стилів, щоб змінити вигляд діаграм.

#### Bokeh

[*Bokeh*](https://docs.bokeh.org/en/latest/index.html#) — це бібліотека Python для створення інтерактивних візуалізацій для сучасних веб-браузерів. Це допомагає вам створювати красиву графіку, починаючи від простих графіків і закінчуючи складними інформаційними панелями з потоковими наборами даних. За допомогою Bokeh ви можете створювати візуалізації на основі JavaScript, не пишучи на JavaScript самостійно.

[Поширені сценарії використання Bokeh](https://bokeh.org/):
1. **Створюйте потужні програми для аналізу даних**  
Python має чудову екосистему потужних інструментів для аналізу даних, а сервер Bokeh є мостом для з'єднання цих інструментів з багатими, інтерактивними візуалізаціями у браузері.
2. **Публікація складних інформаційних панелей**  
Bokeh надає базову сітку та макет рядків/стовпців для легкого початку роботи. Якщо вам потрібна складна, адаптивна інформаційна панель, ви можете вбудувати графіки та віджети Bokeh в загальний шаблон.
3. **Інтерактивно досліджуйте дані в Notebooks**  
Bokeh працює як з JupyterLab, так і з класичними Notebooks. Складні інтерактивні візуалізації для використання в блокнотах просто викликаються з output_notebook.
4. **Візуалізація потокових даних**  
Незалежно від того, чи це потокові дані з фінансових ринків, телеметрія Інтернету речей або фізичні датчики, Bokeh має ефективний потоковий API, який допоможе вам відстежувати дані.
5. **Додавання контенту на веб-сторінки**  
Можливо, ви створили веб-додаток на Flask або Django і вам потрібно включити в нього діаграми звітів - Bokeh надає безліч способів вбудовування контенту у ваші веб-сторінки.

### Доступ до даних

*Контроль доступу на основі атрибутів ([Attribute-Based Access Control, ABAC](https://en.wikipedia.org/wiki/Attribute-based_access_control))* - це модель авторизації, яка оцінює атрибути (або характеристики), а не ролі, щоб визначити доступ. Метою ABAC є захист таких об’єктів, як дані, мережеві пристрої та ІТ-ресурси, від неавторизованих користувачів і дій, які не мають «затверджених» характеристик, які визначено політикою безпеки організації.

ABAC як форма логічного контролю доступу стала помітною в останнє десятиліття, розвинувшись від простих списків контролю доступу та керування доступом на основі ролей ([RBAC](https://en.wikipedia.org/wiki/Role-based_access_control)). У рамках ініціативи, спрямованої на допомогу федеральним організаціям у вдосконаленні архітектури контролю доступу, у 2011 році Федеральна рада інформаційних директорів схвалила ABAC. Вони рекомендували ABAC як модель для безпечного обміну інформацією.

#### Головні компоненти ABAC

За допомогою ABAC політики доступу організації забезпечують виконання рішень щодо доступу на основі атрибутів суб’єкта(subject), ресурсу(resource), дії(action) та середовища(environment), які беруть участь у події доступу.
- Суб’єкт – це користувач, який запитує доступ до ресурсу для виконання дії. Атрибути суб’єкта в профілі користувача включають ідентифікатор, посадові ролі, членство в групах, членство у відділах і організаціях, рівень управління, дозвіл безпеки та інші ідентифікаційні критерії. Системи ABAC часто отримують ці дані з HR-системи чи каталогу або іншим чином збирають цю інформацію з маркерів автентифікації, які використовуються під час входу.
- Ресурс — це актив або об’єкт (наприклад, файл, програма, сервер або навіть API), до якого суб’єкт хоче отримати доступ. Атрибути ресурсу — це всі ідентифікаційні характеристики, як-от дата створення файлу, його власник, ім’я та тип файлу та конфіденційність даних. Наприклад, під час спроби отримати доступ до вашого онлайн-банківського рахунку ресурс буде «банківський рахунок = <правильний номер рахунку>».
- Дія – це те, що користувач намагається зробити з ресурсом. Загальні атрибути дій включають «читання», «запис», «редагування», «копіювання» та «видалення». У деяких випадках кілька атрибутів можуть описувати дію. Продовжуючи приклад онлайн-банкінгу, запит на переказ може мати характеристики «тип дії = переказ» і «сума = $200».
- Середовище – це ширший контекст кожного запиту на доступ. Усі атрибути навколишнього середовища пов’язані з такими контекстними факторами, як час і місце спроби доступу, пристрій суб’єкта, протокол зв’язку та потужність шифрування. Контекстна інформація також може включати сигнали ризику, встановлені організацією, такі як рівень автентифікації та нормальні моделі поведінки суб’єкта.

#### Використання атрибутів 

Атрибути — це характеристики або значення компонента, який бере участь у події доступу. Контроль доступу на основі атрибутів аналізує атрибути цих компонентів на відповідність правилам. Ці правила визначають, які комбінації атрибутів дозволені, щоб суб’єкт міг успішно виконати дію з об’єктом.

На основі того, як атрибути взаємодіють у середовищі, кожне рішення ABAC може оцінювати їх у середовищі та запроваджувати правила та зв’язки. Політики враховують атрибути, щоб визначити, які умови доступу дозволені чи ні.

## Порівняльна характеристика існуючих засобів вирішення завдання

*Даний розділ містить опис існуючих програм, інформаційних систем, сервісів, тощо, призначених для вирішення завдання. Дається порівняльна характеристика властивостей FURPS у вигляді таблиці:*
- *Functionality (функциональні вимоги)*
- *Usability (вимоги до зручності роботи)*
- *Reliability (вимоги до надійності)*
- *Performance (вимоги до продуктивності)*
- *Supportability (вимоги до підтримки)*

### [Gapminder](https://www.gapminder.org/)

*Gapminder* є незалежною шведською фундацією, яка не має політичних, релігійних чи економічних зв’язків.
Gapminder виявляє систематичні помилкові уявлення про важливі глобальні тенденції та пропорції та використовує надійні дані для розробки простих для розуміння навчальних матеріалів, щоб позбавити людей їхніх неправильних уявлень.

### [The World Bank DataBank](https://databank.worldbank.org/)

*DataBank* — це інструмент аналізу та візуалізації, який містить колекції даних часових рядів за різними темами. Ви можете створювати власні запити; створювати таблиці, діаграми та карти; і легко зберігати, вставляти та ділитися ними.

#### World Development Indicators

Індикатори світового розвитку ([WDI](https://databank.worldbank.org/source/world-development-indicators)) — це основна колекція показників розвитку Світового банку, зібрана з офіційно визнаних міжнародних джерел. Він представляє найновіші та найточніші доступні дані про глобальний розвиток, а також національні, регіональні та глобальні оцінки. Примітка: незважаючи на те, що фінансування глобального розвитку (GDF) більше не вказано в назві бази даних WDI, усі дані про зовнішній борг і фінансові потоки продовжують включатися в WDI. Публікація GDF була перейменована на International Debt Statistic (IDS), і також має власну окрему базу даних.

### [EuroStat](https://ec.europa.eu/eurostat/web/main/data/database)

*Євростат* є статистичним офісом Європейського Союзу, відповідальним за публікацію високоякісної загальноєвропейської статистики та показників, які дозволяють порівнювати між країнами та регіонами.

### [Google Public Data Explorer](https://www.google.com/publicdata/directory)
*Google Public Data Explorer* надає загальнодоступні дані та прогнози від низки міжнародних організацій і наукових установ, включаючи Світовий банк, ОЕСР, Євростат і Університет Денвера. Вони можуть відображатися у вигляді лінійних графіків, гістограм, діаграм поперечного перерізу або на картах. Продукт було запущено 8 березня 2010 року як експериментальний інструмент візуалізації в [Google Labs](https://en.wikipedia.org/wiki/Google_Labs).

У 2011 році Public Data Explorer став доступним для всіх. Мова публікації набору даних (DSPL) була створена для використання з платформою. Після імпорту даних набір даних можна візуалізувати, вставити на зовнішні веб-сайти та поділитися з іншими.

У травні 2016 року додавання [Google Analytics Suite](https://marketingplatform.google.com/about/) увімкнуло імпорт публічних або індивідуальних наборів даних і надало користувачам інструменти візуалізації даних без використання коду.

**Перетворення SDMX**

*Конвертер [SDMX](https://en.wikipedia.org/wiki/SDMX)* — це програма з відкритим вихідним кодом, яка пропонує можливість конвертувати повідомлення DSPL (Google's Dataset Publishing Language) у SDMX-ML і навпаки. Вихідним файлом набору даних DSPL є файл zip, що містить дані (у формі файлів CSV) і метадані (як файл XML). Набори даних у цьому форматі можна візуалізувати в Google Public Data Explorer.

### [Dataverse](https://dataverse.org/)

*Dataverse* — це веб-програма з відкритим вихідним кодом для обміну, збереження, цитування, вивчення та аналізу даних досліджень. Дослідники, автори даних, видавці, розповсюджувачі даних і афілійовані установи отримують належну оцінку через цитування даних із постійним ідентифікатором

Критерії:

- 🟢 - функція реалізована
- 🟡 - функція реалізована, проте має недоліки
- ❌ - функція не реалізована, або реалізована погано

|     Категорія      |              Критерій                        | Open Data Management System | Dataverse | Gapminder | The World Bank DataBank | Eurostat | Google Public Data Explorer |
| :----------------: | :------------------------------------------: | :-------------------------: | :-------: | :-------: | :---------------------: | :------: | :-------------------------: |
| **Functionality**  |  Створення, редагування датасетів            |             🟢              |    🟢    |    🟡    |           ❌            |    ❌   |             🟢             |
|                    | Інструменти для візуалізації данних          |             🟢              |    ❌    |    🟢    |           🟢            |    🟢   |             🟢             |
|                    |               Дозволи                        |             🟢              |    ❌    |    🟢    |           ❌            |    ❌   |             ❌             |
|                    |          Можливість пошуку                   |             🟢              |    🟢    |    🟡    |           🟢            |    🟢   |             🟡             |
|                    |        Поділ даних за темами                 |             🟢              |    🟢    |    🟢    |           🟢            |    🟢   |             🟢             |
|                    |      Можливість аторізовуватись              |             🟢              |    ❌    |    🟢    |           🟢            |    🟢   |             🟢             |
|   **Usability**    |     Підтримка англійської мови               |             🟢              |    🟢    |    🟢    |           🟢            |    🟢   |             🟢             |
|                    |       Наявність документації                 |             🟢              |    🟢    |    🟢    |           ❌            |    🟢   |             🟢             |
|                    |                UI/UX                         |             🟢              |    🟡    |    🟢    |           🟡            |    🟡   |             🟡             |
|  **Reliability**   |   Ліцензія та вказівка авторства             |             🟢              |    🟢    |    🟢    |           🟢            |    🟢   |             🟢             |
|                    |        Резервне копіювання                   |             🟢              |    🟢    |    🟢    |           🟢            |    🟢   |             🟢             |
|  **Performance**   |Оцінка продуктивності через PageSpeed Insights|             🟢              |    🟡62  |    🟢92  |           🟡79          |    ❌41 |             🟢95           |
| **Supportability** |    Можливість зворотнього звязку             |             🟢              |    🟢    |    🟢    |           🟡            |    🟢   |             🟢             |
|                    |                FAQ                           |             🟢              |    ❌    |    🟢    |           🟢            |    🟢   |             🟢             |
|                    |         Актуальність даних                   |             🟢              |    🟡    |    🟡    |           🟡            |    🟢   |             🟡             |

## Висновки

У сучасному цифровому світі ефективне управління даними має вирішальне значення для обробки інформації. Вивчаючи різні інструменти для роботи з даними, можна знайти велику кількість інструментів, які пропонують різні функціональні можливості для вилучення, аналізу та візуалізації даних. Ці інструменти надають користувачам доступ до великих обсягів даних, які можна використовувати в різних сферах нашого життя.  
Як наслідок, у сучасному світі управління даними та їх видобування відіграють важливу роль в аналізі, розумінні та передачі інформації. Але серед існуючих систем управління відкритими даними немає ідеального інструменту, тому є доцільним створення нової системи, що розширить функціонал існуючих інструментів.

## Посилання 

*Даний розділ містить повний список всіх документів, про які згадується.*

- [Відкриті дані](https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%B4%D0%BA%D1%80%D0%B8%D1%82%D1%96_%D0%B4%D0%B0%D0%BD%D1%96)
- [Мова структурованих запитів](https://acode.com.ua/sql-intro/)
- [Теорема CAP](https://uk.wikipedia.org/wiki/%D0%A2%D0%B5%D0%BE%D1%80%D0%B5%D0%BC%D0%B0_CAP)
- [WAL-журналювання](https://uk.wikipedia.org/wiki/WAL-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D1%8E%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)
- [Web scraping](https://astroproxy.com/ua/blog/shho-take-veb-skreiping-i-yak-vin-povyazanii-z-proksi)
- [API](https://hostiq.ua/blog/ukr/what-is-api/)
- [commission.europa.eu](https://commission.europa.eu/about-european-commission/departments-and-executive-agencies/eurostat-european-statistics_en#:~:text=Eurostat%20is%20the%20statistical%20office,Page%20contents)  
- [Dataverse](https://en.wikipedia.org/wiki/Dataverse)  
- [gapminder.org](https://www.gapminder.org/about/)  
- [ABAC wiki](https://en.wikipedia.org/wiki/Attribute-based_access_control)  
- [RBAC wiki](https://en.wikipedia.org/wiki/Role-based_access_control)  
- [TensorFlow wiki](https://uk.wikipedia.org/wiki/TensorFlow)  
- [TensorFlow wiki](https://ru.wikipedia.org/wiki/TensorFlow)  
- [TFX](https://www.tensorflow.org/tfx/guide)  
- [D3](https://d3js.org/what-is-d3)  
- [Bokeh](https://bokeh.org/)  
- [Bokeh docs](https://docs.bokeh.org/en/latest/index.html#)  
- [okta.com](https://www.okta.com/blog/2020/09/attribute-based-access-control-abac/)  
- [NoSQL](https://uk.wikipedia.org/wiki/NoSQL)  
- [Relational databases](https://polaridad.es/uk/%D1%89%D0%BE-%D1%82%D0%B0%D0%BA%D0%B5-rdbms-%D0%B2%D1%81%D0%B5%2C-%D1%89%D0%BE-%D0%B2%D0%B0%D0%BC-%D0%BF%D0%BE%D1%82%D1%80%D1%96%D0%B1%D0%BD%D0%BE-%D0%B7%D0%BD%D0%B0%D1%82%D0%B8-%D0%BF%D1%80%D0%BE-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B8-%D0%BA%D0%B5%D1%80%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F-%D1%80%D0%B5%D0%BB%D1%8F%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%BC%D0%B8-%D0%B1%D0%B0%D0%B7%D0%B0%D0%BC%D0%B8-%D0%B4%D0%B0%D0%BD%D0%B8%D1%85/)  
- [Cloud Storage Systems](https://uk.wikipedia.org/wiki/%D0%A5%D0%BC%D0%B0%D1%80%D0%BD%D1%96_%D1%81%D1%85%D0%BE%D0%B2%D0%B8%D1%89%D0%B0#:~:text=cloud%20storage%2C%20%D0%B0%D0%B1%D0%BE%20%D1%89%D0%B5%20%D1%85%D0%BC%D0%B0%D1%80%D0%B0,%D1%85%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%B8%D0%BC%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D1%96%D1%8F%D0%BC%2C%20%D1%8F%D0%BA%D1%96%20%D0%BD%D0%B8%D0%BC%20%D0%BA%D0%B5%D1%80%D1%83%D1%8E%D1%82%D1%8C.)  
