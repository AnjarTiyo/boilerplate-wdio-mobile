# Example of Mobile App Automated Testing using WebDriverIO and Appium

<p>This is basic example of using WDIO for Mobile Automation testing. Application under test is WDIO Demo App. </p>

## Test Scenario
Feature: Sign Up
Test Cases:
1. Sign up with valid data
2. Sign up with empty email
3. Sign up with empty password
4. Sign up but enter wrong password confirmation

## Usage

### Pre-requisite (Setup)
Make sure you have installed below:
1. Node.js
2. Android Emulator and running
3. ADB installed
4. Application Under Test: Native Demo Apps [Download](https://github.com/webdriverio/native-demo-app/releases) 

### 1. Clone this Repo
```
git clone https://github.com/AnjarTiyo/boilerplate-wdio-mobile.git
```

### 2. Change directory
```
cd boilerplate-wdio-mobile
```

### 3. Install
Install all automation script dependency
```
npm install --save-dev
```

### 4. Run test
Before starting test, make sure your emulator or real devices connected. Verify using
```
avd devices
```
and make sure list of attached devices is shown. 

Install the apps you downloaded from [here](https://github.com/webdriverio/native-demo-app/releases) to your devices

Then you can continue to run test with following script
```
npm run test
```

## Author
Anjar Tiyo Saputro [Github](https://github.com/AnjarTiyo) | [LinkedIn](https://id.linkedin.com/in/anjartiyo)
<anjar.jog@gmail.com>