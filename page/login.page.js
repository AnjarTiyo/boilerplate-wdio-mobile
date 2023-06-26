import Page from '../page/page-navigation.page.js';

class LoginPage extends Page {
  get tabSignUp() {
    return $('//*[@content-desc="button-sign-up-container"]');
  }

  get tabLogin() {
    return $('//*[@content-desc="button-login-container"]');
  }

//   get touchId() {
//     return $('');
//   }

//   get cancelTouchId() {
//     return $('');
//   }

  get inputEmail() {
    return $('~input-email');
  }

  get inputPassword() {
    return $('~input-password');
  }

  get inputConfirmPassword() {
    return $('~input-repeat-password');
  }

  get btnLogin() {
    return $('//*[@content-desc="button-LOGIN"]');
  }

  get btnSignUp() {
    return $('//*[@content-desc="button-SIGN UP"]');
  }

  get popupSuccessMessage() {
    return $('//*[@resource-id="android:id/message"]');
  }

  get loginScreen() {
    return $('//*[@content-desc="Login-screen"]');
  }

  get okPopUp() {
    return $('#button1');
  }

  async login(email, password, use_touch_id = false, touch_id = "") {
    await super.loginPage.click();
    await this.tabLogin.click();
    if (use_touch_id) {
      await this.touchId.click();
      await this.touchId.setValue(touch_id);
    } else {
      await this.inputEmail.setValue(email);
      await this.inputPassword.setValue(password);
      await this.btnLogin.click();
    }
  }

  async signUp(email, password, confirm_password = password) {
    await super.loginPage.click();
    await this.tabSignUp.click();
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.inputConfirmPassword.setValue(confirm_password);
    await this.btnSignUp.click();
  }
}

export default new LoginPage();
