Feature('Create and delete playlist');

Scenario('Create and delete playlist', (I) => {
I.amOnPage('https://open.spotify.com/browse/featured');
I.resizeWindow(1800, 1500)
I.see('Your Library');
I.click('.btn-black');
I.waitForElement('#login-username',5);
I.fillField('#login-username','spotif.love@gmail.com');
I.fillField('#login-password', 'Spotify!');
I.click('#login-button');
I.wait(10);
I.see('PODCASTS');
I.click('Your Library');
I.scrollPageToBottom();
I.waitForElement('button.btn:nth-child(1)',5);
I.click('button.btn:nth-child(1)');
I.wait(5);
I.fillField('Start typing...', 'Test playlist');
I.pressKey('Enter');
I.wait(5);
I.see('Test playlist');
I.click('//*[@id="main"]/div/div[4]/div[1]/nav/div[1]/ul/li[2]/div/a');
I.fillField('//*[@id="main"]/div/div[4]/div[2]/div[1]/section/div[1]/div/div/input', 'Eye of the tiger');
I.waitForElement('//*[@id="main"]/div/div[4]/div[2]/div[1]/section/div[2]/div/div/div[1]/div[1]/div/div/div/div[1]/div[2]/div/a',10);
I.rightClick('//*[@id="main"]/div/div[4]/div[2]/div[1]/section/div[2]/div/div/div[1]/div[1]/div/div/div/div[1]/div[2]/div/a');
I.waitForElement('#main > div > nav.react-contextmenu.react-contextmenu--visible > div:nth-child(4)',5);
I.click('#main > div > nav.react-contextmenu.react-contextmenu--visible > div:nth-child(4)');
I.waitForElement('//*[@id="main"]/div/div[6]/div/div/div/div[2]/div/div/div/div/div/div/div',5);
I.click('//*[@id="main"]/div/div[6]/div/div/div/div[2]/div/div/div/div/div/div/div');
I.wait(5);
I.click('Your Library');
I.wait(5);
I.rightClick('Test playlist');
I.click('nav.react-contextmenu:nth-child(8) > div:nth-child(3)');
I.click('div.button-group__item:nth-child(2) > button:nth-child(1)');
I.wait(5);
I.dontSee('Test playlist');
});