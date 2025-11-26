window.addEventListener("load", function () {

    const username = "YOUR LPU REG NUMBER";            // ADD YOUR ID HERE
    const password = "YOUR WIFI PASSWORD";             // ADD YOUR PASSWORD HERE

    const userField = document.querySelector("input[name='username']");
    const passField = document.querySelector("input[name='password']");
    const termsCheck = document.querySelector("input[type='checkbox']");
    const loginBtn = document.querySelector("#loginbtn");

    function fireAll(el) {
        ["input", "change", "keyup", "keydown", "keypress", "click"].forEach(
            (evt) => el.dispatchEvent(new Event(evt, { bubbles: true }))
        );
    }

    if (userField) {
        userField.value = username;
        fireAll(userField);
    }

    if (passField) {
        passField.value = password;
        fireAll(passField);
    }

    if (termsCheck) {
        termsCheck.checked = true;
        fireAll(termsCheck);
    }

    if (loginBtn) {
        loginBtn.disabled = false;
        loginBtn.removeAttribute("disabled");
        loginBtn.style.opacity = "1";
        loginBtn.style.pointerEvents = "auto";
    }

    try {
        if (typeof appendUserName === "function") {
            appendUserName();
        }
    } catch (e) {
        console.log("appendUserName() not accessible");
    }

    setTimeout(() => {
        if (loginBtn) {
            loginBtn.click();
            console.log("Auto Login Clicked.");
        }
    }, 500);
});
