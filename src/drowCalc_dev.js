import myInitCode from "./app/drowCalc_init.js";



if (document.readyState !== 'loading') {
    myInitCode();

} else {
    document.addEventListener('DOMContentLoaded', function() {
        myInitCode();
    });
}