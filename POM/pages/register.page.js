exports.RegisterPage = class RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.getByLabel("Имя пользователя");
    this.emailField = page.getByLabel("Электронная почта");
    this.passwordField = page.getByLabel("Пароль");
    this.referralCodeField = page.getByLabel("Реферальный код");
    this.сheckbox = page.locator(
      ".k-checkbox-auth > .v-input > .v-input__control > .v-input__slot"
    );
    this.nextButton = page.getByRole("button", { name: "Далее" });
    this.registerButton = page.getByRole("link", {
      name: "Зарегистрироваться",
    });
  }

  async open() {
    await this.registerButton.click();
  }

  async submittingForm(firstName, email, password) {
    await this.firstNameField.fill(firstName);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
  }

  async clickFirstName() {
    await this.firstNameField.click();
  }

  async clickEmail() {
    await this.emailField.click();
  }

  async clickPassword() {
    await this.passwordField.click();
  }

  async clickCheckbox() {
    await this.сheckbox.click();
  }

  async clickNextButton() {
    await this.nextButton.click();
  }

  async enterFirstName(firstName) {
    await this.firstNameField.fill(firstName);
  }

  async enterEmail(email) {
    await this.emailField.fill(email);
  }

  async enterPassword(password) {
    await this.passwordField.fill(password);
  }

  async enterReferralCode(referral) {
    await this.referralCodeField.fill(referral);
  }
};
