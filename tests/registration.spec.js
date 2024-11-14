// @ts-check
const { test, expect } = require("@playwright/test");
const { data } = require("../POM/data/data.helper");
const { RegisterPage } = require("../POM/pages/register.page");

test.beforeEach(async ({ page }) => {
  await page.goto("https://koshelek.ru/");
});

/** Имя пользователя **/

test("test1_1_Неуспешная попытка отправки формы регистрации с невалидным значением в поле имени пользователя(кириллица/верхний регист)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getInvalidNameCyrillicUpperCase);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(".v-messages__message > .css-grid").first()
  ).toHaveText(
    "Допустимые символы (от 6 до 32): a-z, 0-9, _. Имя должно начинаться с буквы"
  );
});

test("test1_2_Неуспешная попытка отправки формы регистрации с невалидным значением в поле имени пользователя(кириллица/нижний регистр)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getInvalidNameCyrillicLowerCase);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(".v-messages__message > .css-grid").first()
  ).toHaveText(
    "Допустимые символы (от 6 до 32): a-z, 0-9, _. Имя должно начинаться с буквы"
  );
});

test("test1_3_Неуспешная попытка отправки формы регистрации с невалидным значением в поле имени пользователя(спецсимволы)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getInvalidNameSpecialSymbol);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(".v-messages__message > .css-grid").first()
  ).toHaveText(
    "Допустимые символы (от 6 до 32): a-z, 0-9, _. Имя должно начинаться с буквы"
  );
});

test("test1_4_Неуспешная попытка отправки формы регистрации с невалидным значением в поле имени пользователя(5 символов)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getInvalidNameFiveSymbol);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(".v-messages__message > .css-grid").first()
  ).toHaveText(
    "Допустимые символы (от 6 до 32): a-z, 0-9, _. Имя должно начинаться с буквы"
  );
});

test("test1_5_Неуспешная попытка отправки формы регистрации с невалидным значением в поле имени пользователя(33 символа)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getInvalidNameThirtyThreeSymbol);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(".v-messages__message > .css-grid").first()
  ).toHaveText(
    "Допустимые символы (от 6 до 32): a-z, 0-9, _. Имя должно начинаться с буквы"
  );
});

test("test1_6_Неуспешная попытка отправки формы регистрации с невалидным значением в поле имени пользователя(2-ое имя через '-')", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getInvalidNameHyphenated);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(".v-messages__message > .css-grid").first()
  ).toHaveText(
    "Допустимые символы (от 6 до 32): a-z, 0-9, _. Имя должно начинаться с буквы"
  );
});

test("test1_7_Неуспешная попытка отправки формы регистрации с невалидным значением в поле имени пользователя(2-ое имя через пробел)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getInvalidNameSeparatedBySpace);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(".v-messages__message > .css-grid").first()
  ).toHaveText(
    "Допустимые символы (от 6 до 32): a-z, 0-9, _. Имя должно начинаться с буквы"
  );
});

test("test1_8_Неуспешная попытка отправки формы регистрации с невалидным значением в поле имени пользователя(цифры)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getInvalidNameNumbers);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(".v-messages__message > .css-grid").first()
  ).toHaveText(
    "Допустимые символы (от 6 до 32): a-z, 0-9, _. Имя должно начинаться с буквы"
  );
});

test("test1_9_Неуспешная попытка отправки формы регистрации с невалидным значением в поле имени пользователя(апостроф)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getInvalidNameApostrophe);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(".v-messages__message > .css-grid").first()
  ).toHaveText(
    "Допустимые символы (от 6 до 32): a-z, 0-9, _. Имя должно начинаться с буквы"
  );
});

test("test1_10_Неуспешная попытка отправки формы регистрации с невалидным значением в поле имени пользователя(имя через '.')", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getInvalidNamePoint);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(".v-messages__message > .css-grid").first()
  ).toHaveText(
    "Допустимые символы (от 6 до 32): a-z, 0-9, _. Имя должно начинаться с буквы"
  );
});

test("test1_11_Неуспешная попытка отправки формы регистрации с невалидным значением в поле имени пользователя(латиницца/верхний регистр)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getInvalidNameLatinUpperCase);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(".k-text-k-typography-body-2-regular").first()
  ).toHaveText("Имя пользователя недействительно");
});

test("test1_12_Неуспешная попытка отправки формы регистрации без указания имени пользователя", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getInvalidNameEmpty);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(".v-messages__message > .css-grid").first()
  ).toHaveText("Поле не заполнено");
});

/** Электронная почта **/

test("test1_13_Неуспешная попытка отправки формы регистрации с невалидным значением в поле электронная почта(кириллица в имени пользователя)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.getInvalidEmailCyrillicName);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message > .css-grid"
    )
  ).toHaveText("Формат e-mail: username@test.ru");
});

test("test1_14_Неуспешная попытка отправки формы регистрации с невалидным значением в поле электронная почта(кириллица в доменной части)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.getInvalidEmailCyrillicDomain);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message > .css-grid"
    )
  ).toHaveText("Формат e-mail: username@test.ru");
});

test("test1_15_Неуспешная попытка отправки формы регистрации с невалидным значением в поле электронная почта(без точки в доменной части)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.getInvalidEmailNoDotDomain);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message > .css-grid"
    )
  ).toHaveText("Формат e-mail: username@test.ru");
});

test("test1_16_Неуспешная попытка отправки формы регистрации с невалидным значением в поле электронная почта(отсутствие ' @ ')", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.getInvalidEmailAbsenceAt);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message > .css-grid"
    )
  ).toHaveText("Формат e-mail: username@test.ru");
});

test("test1_17_Неуспешная попытка отправки формы регистрации с невалидным значением в поле электронная почта(пробел в имени пользователя)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.getInvalidEmailSpaceName);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message > .css-grid"
    )
  ).toHaveText("Формат e-mail: username@test.ru");
});

test("test1_18_Неуспешная попытка отправки формы регистрации с невалидным значением в поле электронная почта(пробел в доменной части)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.getInvalidEmailSpaceDomain);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message > .css-grid"
    )
  ).toHaveText("Формат e-mail: username@test.ru");
});

test("test1_19_Неуспешная попытка отправки формы регистрации с невалидным значением в поле электронная почта(отсутствие имени пользователя)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.getInvalidEmailAbsenceName);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message > .css-grid"
    )
  ).toHaveText("Формат e-mail: username@test.ru");
});

test("test1_20_Неуспешная попытка отправки формы регистрации с невалидным значением в поле электронная почта(отсутствие доменной части)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.getInvalidEmailAbsenceDomain);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message > .css-grid"
    )
  ).toHaveText("Формат e-mail: username@test.ru");
});

test("test1_21_Неуспешная попытка отправки формы регистрации с невалидным значением в поле электронная почта(точка первым символом имени пользователя)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.getInvalidEmailFirstPointName);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message > .css-grid"
    )
  ).toHaveText("Формат e-mail: username@test.ru");
});

test("test1_22_Неуспешная попытка отправки формы регистрации с невалидным значением в поле электронная почта(точка последним символом имени пользователя)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.getInvalidEmailLastPointName);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message > .css-grid"
    )
  ).toHaveText("Формат e-mail: username@test.ru");
});

test("test1_23_Неуспешная попытка отправки формы регистрации с невалидным значением в поле электронная почта(точка первым символом доменной части)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.getInvalidEmailFirstPointDomain);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message > .css-grid"
    )
  ).toHaveText("Формат e-mail: username@test.ru");
});

test("test1_24_Неуспешная попытка отправки формы регистрации с невалидным значением в поле электронная почта(точка последним символом доменной части)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.getInvalidEmailLastPointDomain);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message > .css-grid"
    )
  ).toHaveText("Формат e-mail: username@test.ru");
});

test("test1_25_Неуспешная попытка отправки формы регистрации без указания электронной почты", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.getInvalidEmailEmpty);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message > .css-grid"
    )
  ).toHaveText("Поле не заполнено");
});

/** Пароль **/

test("test1_26_Неуспешная попытка отправки формы регистрации с невалидным значением в поле пароль(кириллица))", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.getInvalidPasswordCyrillic);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(3) > div > .k-text-field-primary > .v-input > .v-input__control > .v-text-field__details"
    )
  ).toHaveText(
    "Пароль должен содержать от 8 до 64 символов, включая заглавные буквы и цифры"
  );
});

test("test1_27_Неуспешная попытка отправки формы регистрации с невалидным значением в поле пароль(спецсимволы))", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.getInvalidPasswordSpecialSymbol);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(3) > div > .k-text-field-primary > .v-input > .v-input__control > .v-text-field__details"
    )
  ).toHaveText(
    "Пароль должен содержать от 8 до 64 символов, включая заглавные буквы и цифры"
  );
});

test("test1_28_Неуспешная попытка отправки формы регистрации с невалидным значением в поле пароль(7 символов))", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.getInvalidPasswordSevenSymbol);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(3) > div > .k-text-field-primary > .v-input > .v-input__control > .v-text-field__details"
    )
  ).toHaveText("Пароль должен содержать минимум 8 символов");
});

test("test1_29_Неуспешная попытка отправки формы регистрации с невалидным значением в поле пароль(65 символов))", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.getInvalidPasswordSixtyFiveSymbol);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(3) > div > .k-text-field-primary > .v-input > .v-input__control > .v-text-field__details"
    )
  ).toHaveText(
    "Пароль должен содержать от 8 до 64 символов, включая заглавные буквы и цифры"
  );
});

test("test1_30_Неуспешная попытка отправки формы регистрации с невалидным значением в поле пароль(без учета заглавных букв))", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.getInvalidPasswordNoCapitalLetters);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(3) > div > .k-text-field-primary > .v-input > .v-input__control > .v-text-field__details"
    )
  ).toHaveText(
    "Пароль должен содержать от 8 до 64 символов, включая заглавные буквы и цифры"
  );
});

test("test1_31_Неуспешная попытка отправки формы регистрации с невалидным значением в поле пароль(без учета цифр))", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.getInvalidPasswordExcludingNumbers);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(3) > div > .k-text-field-primary > .v-input > .v-input__control > .v-text-field__details"
    )
  ).toHaveText(
    "Пароль должен содержать от 8 до 64 символов, включая заглавные буквы и цифры"
  );
});

test("test1_32_Неуспешная попытка отправки формы регистрации с невалидным значением в поле пароль(цифры))", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.getInvalidPasswordNumbers);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(3) > div > .k-text-field-primary > .v-input > .v-input__control > .v-text-field__details"
    )
  ).toHaveText(
    "Пароль должен содержать от 8 до 64 символов, включая заглавные буквы и цифры"
  );
});

test("test1_33_Неуспешная попытка отправки формы регистрации без указания пароля)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.getInvalidPasswordEmpty);
  await registerPage.clickCheckbox();
  await registerPage.clickNextButton();

  await expect(
    page.locator(
      "div:nth-child(3) > div > .k-text-field-primary > .v-input > .v-input__control > .v-text-field__details"
    )
  ).toHaveText("Поле не заполнено");
});

/** Реферальный код **/

test("test1_34_Неуспешная попытка отправки формы регистрации с невалидным значением в поле реферальный код(3 символа))", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.enterReferralCode(data.getInvalidReferralCodeThreeSymbol);
  await registerPage.clickCheckbox();

  await expect(
    page.locator(
      "div:nth-child(4) > .v-input > .v-input__control > .v-text-field__details"
    )
  ).toHaveText("Неверный формат ссылки");
});

test("test1_35_Неуспешная попытка отправки формы регистрации с невалидным значением в поле реферальный код(9 символов))", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.enterReferralCode(data.getInvalidReferralCodeNineSymbol);
  await registerPage.clickCheckbox();

  await expect(
    page.locator(
      "div:nth-child(4) > .v-input > .v-input__control > .v-text-field__details"
    )
  ).toHaveText("Неверный формат ссылки");
});

/** Чек бокс **/

test("test1_36_Неуспешная попытка отправки формы регистрации без отмеченного чекбокса)", async ({
  page,
}) => {
  const registerPage = new RegisterPage(page);

  await registerPage.open();
  await registerPage.enterFirstName(data.getValidName);
  await registerPage.enterEmail(data.validEmail);
  await registerPage.enterPassword(data.validPassword);
  await registerPage.clickNextButton();

  await expect(page.locator("#input-1868")).toBeDisabled;
});
