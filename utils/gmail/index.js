async function signIn(page) {
    await clickElement(page, "#headerSignIn > span");
    await clickElement(page, "#googleSignIn");
}

async function login(page, email, password) {

    await page.waitForSelector(`[type="email"]`);
    await enterText(page, `[type="email"]`, email);
    
    await clickElement(page, "#identifierNext > div > button");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    await page.waitForSelector("#password input");
    await enterText(page, "#password input", password);


    await page.waitForTimeout(3000);
    await page.waitForSelector("#passwordNext > div > button");
    await clickElement(page, "#passwordNext > div > button");

    await page.waitForSelector(`[data-testid="pageHeader"]`);
}

async function clickElement(page, selector) {
    await page.waitForSelector(selector);
    await page.click(selector);
}

async function enterText(page, selector, text) {
    await page.waitForSelector(selector);
    await page.evaluate((selector, text) => {
        document.querySelector(selector).value = text;
    }, selector, text);
}

async function googleLogin(page, email, password) {
    await signIn(page);
    await login(page, email, password);
}
//await report(page, data)
module.exports = googleLogin;