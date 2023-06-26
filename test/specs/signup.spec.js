import LoginPage from '../../page/login.page.js';

describe('Feature: Sign up', () => {
    beforeEach(async function () {
        await driver.launchApp()
    })
    afterEach(async function () {
        await driver.closeApp()
    })

    it('Sign up with valid credentials', async () => {
        const email = "jagotester@yopmail.com"
        const password = "password" //for real purpose use env variable
        const expectedMessage = 'You successfully signed up!'

        await LoginPage.signUp(email, password)

        await expect(LoginPage.popupSuccessMessage).toBeExisting()
        await expect(LoginPage.popupSuccessMessage).toHaveTextContaining(expectedMessage)

        //Verify user are able to login with recently created account
        await LoginPage.okPopUp.click()
        await LoginPage.login(email, password)

        await expect(LoginPage.popupSuccessMessage).toBeExisting()
        await expect(LoginPage.popupSuccessMessage).toHaveTextContaining("You are logged in!")
    })

    it('Sign up with empty email', async () => {
        const email = ""
        const password = "password" //for real purpose use env variable
        const expectedMessage = "Please enter a valid email address";

        await LoginPage.signUp(email, password)
        await expect($('//*[contains(@text, "' + expectedMessage + '")]')).toBeExisting()
    })

    it('Sign up with empty password', async () => {
        const email = "jagotester@yopmail.com"
        const password = "" //for real purpose use env variable
        const expectedMessage = "Please enter at least 8 characters";

        await LoginPage.signUp(email, password)
        await expect($('//*[contains(@text, "' + expectedMessage + '")]')).toBeExisting()
    })

    it('Sign up but enter wrong password confirmation', async () => {
        const email = "jagotester@yopmail.com"
        const password = "password" //for real purpose use env variable
        const expectedMessage = "Please enter the same password";

        await LoginPage.signUp(email, password, "not_same")
        await expect($('//*[contains(@text, "' + expectedMessage + '")]')).toBeExisting()
    })

    it('Sign up with too short password', async () => {
        const email = "jagotester@yopmail.com"
        const password = "short" //for real purpose use env variable
        const expectedMessage = "Please enter at least 8 characters";

        await LoginPage.signUp(email, password)
        await expect($('//*[contains(@text, "' + expectedMessage + '")]')).toBeExisting()
    })

    it('Sign up with too long password', async () => {
        const email = "jagotester@yopmail.com"
        const password = "a".repeat(10000) //for real purpose use env variable
        const expectedMessage = "password too long";

        await LoginPage.signUp(email, password)
        await expect($('//*[contains(@text, "' + expectedMessage + '")]')).toBeExisting()
    })

    it('Sign up with invalid email format', async () => {
        const email = "not.email"
        const password = "password" //for real purpose use env variable
        const expectedMessage = "Please enter a valid email address";

        await LoginPage.signUp(email, password)
        await expect($('//*[contains(@text, "' + expectedMessage + '")]')).toBeExisting()
    })
})

