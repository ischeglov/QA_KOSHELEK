## Задача
Дан стенд [Кошелек](https://koshelek.ru/)<br/>
Написать автотесты для тестирования негативных сценариев для полей на странице [Регистрация](https://koshelek.ru/authorization/signup)

## Тестовая документация:

1. [План автоматизации тестирования](documentation/Plan.md)
2. [Отчет по итогам тестирования](documentation/Report.md)
3. [Отчет по итогам автоматизации](documentation/AutomationReport.md)

## Шаги для воспроизведения:

### Подготовительный этап

1. Установить Node.js, следуя [инструкции](https://nodejs.org/ru/download/current/)
2. Установить [Visual Studio Code](https://code.visualstudio.com/download)
3. Склонировать репозиторий с Github командой через терминал:
```
git clone git@github.com:ischeglov/QA_KOSHELEK.git
```
4. Открыть проект в Visual Studio Code
5. В новой вкладке терминала по очереди выполнить следующие команды:
```
npm install
```
```
npx playwright install
```

### Запуск тестов

6. Во вкладке терминала запустить тесты следующей командой:
 ```
npx playwright test
```

### Формирование отчёта

7. Для формирования отчета во вкладке терминала ввести команду:
```
npx playwright show-report
```
