# Test project
Йоу, прийшов час показати свою скілуху і наскільки ти добре закріпив пройдені теми! 

## Завдання 
Полягає в тому, щоб маючи каркас невеликого апчику, повністю реалізувати його логіку. Апчик складається з однієї 
сторінки, на якій виводиться табличка з даними користувачів і парочки контролів, за допомогою яких можна фільтрувати 
і сортувати користувачів в таблиці.

Нічого супер складного, брав лише теми, які ти проходив + будуть покрокові підказки, так що проблем виникати не має.

## Підготовчі дії
Перед початком роботи треба виконати кілька підготовчих дій

### 1. Установка Node.js (виконується 1 раз)
Node.js - це середовище для запуску JS-коду на компі, не використовуючи 
браузер. Активно використовується як на бекенді (пишуться серваки, разні тулзи, апчики тощо), так і на фронтенді - для 
удобної установки бібліотек, зборки статіки для сайта і т.д. Разом з собою тягне NPM (Node Package Manager) - тулзу для простого
менеджменту бібліотек, які використовуються в проекті. 

В нашому випадку я юзаю ноду саме для установки і запуска
деяких тулзів, які зроблять розробку простішою:
   1. Топай сюда - https://nodejs.org/en/download/ (не скам)
   2. Качаєш LTS версію для вінди
   3. Устанавлюєш, все дефолтнінько там, нічо мінять не треба
   4. Після установки провіряєш: откриваєш любий термінал (CMD/VSCode/GIT bash), вводиш `node -v`, ентер (показать версію ноди) i `npm -v`, ентер 
   (показать версію NPM). Якшо все ок, має бути схожий аутпут (версії можуть відрізнятись трохи, це норм) - https://i.imgur.com/RNnC5Ai.png

### 2. Скачування проекту собі на комп (виконується 1 раз)
Для скачування проекту собі на комп будем юзать GIT (в тебе наче вже встановлений). Для впевненості бахни `git --version`
в термінал, має відобразитись версія гіта, встановленого на комп. Я буду юзать гітовський термінал, він краще, чим віндовий:
1. Топай в папку, де в тебе буде лежати проект
2. ПКМ по білій області в папкі
3. Git bash here - https://i.imgur.com/QYueZPL.png
4. Виконай команду `git clone https://github.com/v3il/TestProject.git`. Юзай `Ctrl/Shift + Insert` замість `Ctrl + C/V` або `ПКМ -> Copy/Paste`. 
Результат має бути +- такий - https://i.imgur.com/gxODzW8.png
5. В папкі, де викликав термінал з'явиться папка `TestProject`, залітай туди: `cd TestProject`

### 3. Установка бібліотек (виконується 1 раз)
Серцем будь-якого серйозного JS-проекту є файл `package.json`. Він містить в собі інфо про проект (назву, автор, версію і тд), а також
`dependencies` - список бібліотек, які використовуються в проекті (пусте в цьому проекті, бо я писав все з нуля). 
Поле `devDependencies` схоже на `dependencies`, але сюди включаються бібліотеки, які потрібні для розробки/збірки 
проекту, а не для повноцінної роботи його функціоналу. 

Якшо відкриєш цей файл, побачиш секцію `devDependencies`, де вже прописані кілька бібліотек. 
`Rollup` використовується для упаковки всіх JS файлів в один для удобного його підключення в HTML файл, `eslint` використовується
для лінтінгу скриптів (щоб стиль написання всіх JS файлів був однаковий і підпорядковувався певним правилам).
Всіх їх я заюзав в проекті і зараз треба їх скачать собі локально. Для цього в терміналі виконай `npm install`. Результат
має бути приблизно такий - https://i.imgur.com/glqV2uc.png 

В корні проекта в тебе з'явилась папка `node_modules`, куди скачались всі потрібні бібліотеки і бібліотеки, які юзають ті бібліотеки.
Папки немає в гіті і править ніякі файли в ній не треба, бо
1. Можеш нарушить роботу бібліотек і потім отримати десь неочікувані результати
2. Всі правки будуть затерті при оновленні бібліотеки, наприклад

### 4. Запуск проекту (виконується кожного разу)
В `package.json` також є секція `scripts`, де описані команди, які потрібні для запуску проекту, запуску тестів і тд.

У нас є скрипт, який називається `lint`. Використовується для того, щоб прогнати `eslint` по всіх файлах в проекті і автоматом 
підфіксить проблеми, які в них є. Виконай його **один** раз: `npm run lint` - https://i.imgur.com/zceuocP.png.

Також у нас є скрипт, який називається `dev` і потрібен для запуску проекту. Він запускає бібліотеку `Rollup`, яка збирає всі скрипти 
в папкі `src` в один файлік, який ми підключаємо в хтмл файл. 
Для запуску скрипта виконай `npm run dev`. Цей термінал не закривай поки работаєш над проектом, 
бо там буде висіть процес `Rollup-у` і при змінах в файлах автоматом пересобирать той основний js-файл і примінять зміни на сторінці.
Шоб стопнуть - `Ctrl + C` 

Файл знаходиться за шляхом `build/bundle.js`, редачити його не нада, бо всі зміни будуть затерті ролапом при змінах в скриптах.

Далі просто відкрий `build/index.html` через VSCode в браузері, я юзнув екстеншен `Live Server` (https://i.imgur.com/Q5KgNOJ.png), 
всі зміни в файлах будуть автоматом показуватись в браузері (інколи може залагать і знадобиться оновити сторінку). 

Всьо, можна писать код 🎉

## Реалізація проекту
Йди по вказаному порядку, уважно читай шо треба зробить і все має ізі запрацювати.

### 1. Генерація даних про користувачів
Потрібний файл знаходиться за шляхом `src/services/DataGeneratorService.js`.
Потрібно реалізувати методи класу і згенерувати дані про користувачів, використовуючи ці методи.

`class` - це новий простіший спосіб опису функцій-конструкторів, які ти вже проходив. Познайомишся трохи пізніше, зараз деталі неважливі. \
`export/import` - це штуки, які дозволяють писати модульний JS (типу 1 модуль = 1 клас / 1 функція / 1 константа тощо, тобто, грубо кажучи,
1 ізольована штука, яка робить щось своє). За допомогою цих ключових слів можна використовувати одні модулі в інших. Це робить код
чистішим, ізольованим і немає каші, яка була б тоді, коли ти написав в одному файлі все. Теж пізніше познайомишся.

**Завдання:** 
1. Реалізувати метод `generateUpperCase`. Має повертати 1 рандомну літеру латинського алфавіту в діапазоні [A-Z]
2. Реалізувати метод `generateLowerCase`. Має повертати 1 рандомну літеру латинського алфавіту в діапазоні [a-z]
3. Реалізувати метод `generateDigit`. Має повертати 1 рандомну цифру
4. Реалізувати метод `generateId`. Має повертати рядок з `ID_LENGTH` (константа описана в тому файлі) символів, де кожен символ 
генерується по такій формулі:
   1. Якщо `випадкове число < 0.33`, символ буде результатом виклику метода `generateUpperCase`
   2. Якщо `0.33 < випадкове число < 0.66`, символ буде результатом виклику метода `generateLowerCase`
   3. Якщо `випадкове число > 0.66`, символ буде результатом виклику метода `generateDigit`
5. Реалізувати метод `generateName`. У файл імпортована константа `NAMES`, яка описана в файлі `src/consts/index.js` і
являє собою масив рядків, які є іменами. Метод має повертати рандомне ім'я з цього масиву.
6. Реалізувати метод `generateLastName`. У файл імпортована константа `LAST_NAMES`, яка описана в файлі `src/consts/index.js` і
являє собою масив рядків, які є прізвищами. Метод має повертати рандомне прізвище з цього масиву.
7. Реалізувати метод `generateAvatarId`. Має повертати рандомне число в діапазоні [1-11]
8. Реалізувати метод `generateBirthDate`. Має повертати дату з сьогоднішнім числом і місяцем. Рік має бути вибраний випадково
в діапазоні [1975-2000]
9. Реалізувати метод `generateUsersData`. Має повертати масив, що складається з `USERS_COUNT` (константа описана в тому файлі)
об'єктів. Кожен об'єкт має містити такі поля:
   1. `id` - результат виклику методу `generateId`
   2. `name` - результат виклику методу `generateName`
   3. `lastName` - результат виклику методу `generateLastName`
   4. `avatarId` - результат виклику методу `generateAvatarId`
   5. `birthDate` - результат виклику методу `generateBirthDate`

### 2. Фікс даних
Потрібний файл знаходиться за шляхом `src/services/FixDataService.js`.
Один злобний чєл (я) перехватив твої дані про юзерів і трошки їх поламав. Потрібно реалізувати метод класу і відновити 
дані користувачів.

**Завдання:**

Реалізувати метод `fixData`, який відновить поламані дані. Метод приймає 1 параметр - `brokenUsers` - масив об'єктів з 
поламаними даними про користувачів, закодований в форматі **JSON (JSON-рядок)**. Кожен об'єкт в цьому масиві містить такі поля:
   1. `id` - масив з двома елементами, останній з яких містить оригінальний `id`, до якого додали трохи пробілів попереду і позаду
   2. `name` - рядок, в якому оригінальний `name` продублювали 3 рази і склеїли їх за допомогою '__' (2 андерскора)
   3. `lastName` - оригінальний `lastName`, в якому першу літеру зробити маленькою, всі інші - великими
   4. `avatarId` - об'єкт, в якому є поле `value`, значення якого є значенням оригінального `avatarId`, піднесеного в квадрат
   5. `birthDate` - число, в якому мілісекунди з оригінальної `birthDate` поділили на 1000, а потім ще на 2.25
   6. `rand` - просто рандомно згенероване число, це поле ніде не юзається і його треба буде відсіяти
   
Кожне поле треба буде "очистити", якось діставши оригінальне значення поля. Можеш подебажить `brokenUsers`, буде більш
понятна його структура. Метод має повернути масив об'єктів з полями `id, name, lastName, avatarId, birthDate` з 
відповідними оригінальними (очищеними) значеннями. Для удобства можеш створювати в класі якісь допоміжні методи по аналогії з
`src/services/DataGeneratorService.js`, якщо є така потреба.

### 3. Створення моделей користувачів
Потрібний файл знаходиться за шляхом `src/services/UsersService.js`. Потрібно створити моделі для користувачів.

**Завдання:**

Твої очищені дані про користувачів попадають в клас, який служить для того, щоб робити з ними різні операції. 
Працювати з простими об'єктами не дуже зручно, оскільки складно розширити його функціонал (додати нові поля, провести якісь
операції над існуючими даними, додати методи тощо). 

Щоб спростити собі життя, перетворимо об'єкти з даними про користувачів в екземпляри класа. Це дозволить легко 
додавати в них нові поля і методи, що знадобиться нам у майбутньому.

Для цього я створив клас `User` і імпортував його в `UsersService`. Конструктор цього класу приймає в себе об'єкт з очищеними даними
про користувача.

Суть задачі полягає в тому, щоб в конструкторі `UsersService` кожен об'єкт з масиву `cleanedUsers` перетворити в екземпляр
класу `User` (`new User(...)`) і масив створених екземплярів присвоїти в поле `users` класу `UsersService`.

В подальшому будемо проводити операції над створеним масивом екземплярів.
