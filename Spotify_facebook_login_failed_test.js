Feature('Spotify facebook login_failed');

Scenario('Spotify facebook login', (I) => {
I.amOnPage('https://open.spotify.com/browse/featured');
I.see('Your Library');
I.click('.btn-black');
I.wait(5);
I.click('.btn-facebook');
I.waitForElement('//*[@id="email"]', 20);
I.fillField('email','spoti.lov@gmail.com');
I.fillField('pass', 'Spotify1!');
I.click('//*[@id="loginbutton"]');
I.wait(2);
I.see('spoti.lov@gmail.com');
I.see('Not you?');
});