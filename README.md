# CodeceptJS_Spotify_tests

## How to run the tests
1. Follow steps 1-3 from [the official CodeceptJS quickstart guide](https://codecept.io/quickstart#using-selenium-webdriver); set 'https://open.spotify.com/browse/featured' as the default URL and 'chrome' as the default browser. The config should look similar to the one in **codecept.conf.js**
2. Follow step 7 to run Selenium Server
3. Run ```npx codeceptjs run ./[chosen test name]``` to run a specific test or ```npx codeceptjs run --steps``` to run all tests
4. Check the output in the console
