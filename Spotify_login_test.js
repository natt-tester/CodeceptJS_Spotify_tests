
Feature('Spotify login');

Scenario('Spotify facebook login', (I) => {
I.amOnPage('https://open.spotify.com/browse/featured');
I.see('Your Library');
I.click('.btn-black');
I.wait(5);
I.fillField('#login-username','spotif.love@gmail.com');
I.fillField('#login-password', 'Spotify!');
I.click('#login-button');
I.wait(15);
I.see('PODCASTS');
});
