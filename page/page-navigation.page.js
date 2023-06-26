export default class Page {
    get homePage() {
      return $('//*[@content-desc="Home"]');
    }
  
    get webviewPage() {
      return $('//*[@content-desc="Webview"]');
    }
  
    get loginPage() {
      return $("//*[@content-desc='Login']");
    }
  
    get formPage() {
      return $('//*[@content-desc="Forms"]');
    }
  
    get swipePage() {
      return $('//*[@content-desc="Swipe"]');
    }
  
    get dragPage() {
      return $('//*[@content-desc="Drag"]');
    }
  }
  