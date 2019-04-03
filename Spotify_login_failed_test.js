Feature('Spotify login failed');

Scenario('Spotify facebook login', (I) => {
I.amOnPage('https://open.spotify.com/browse/featured');
I.see('Your Library');
I.click('.btn-black');
I.wait(5);
I.fillField('#login-username','spotif.love@gmail.com');
I.fillField('#login-password', 'Spotify1!');
I.click('#login-button');
I.wait(10);
I.see('Forgot your password?');
I.see('Incorrect username or password.');
});
