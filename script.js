function goHome() {
    document.querySelectorAll('.app-screen').forEach(screen => screen.style.display = 'none');
    document.getElementById('home-screen').style.display = 'flex';
}

function showApp(screenId) {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById(screenId).style.display = 'flex';
}

function solveMath() {
    const input = document.getElementById('math-input').value;
    try {
        const result = eval(input);
        document.getElementById('result').textContent = `Result: ${result}`;
    } catch (error) {
        document.getElementById('result').textContent = 'Invalid input!';
    }
}

function turnOnPhone() {
    const splashScreen = document.getElementById('splash-screen');
    const phoneScreen = document.getElementById('phone-screen');
    const homeScreen = document.getElementById('home-screen');

    // Show the phone screen and splash screen initially
    phoneScreen.style.display = 'block';
    splashScreen.style.display = 'flex';
    homeScreen.style.display = 'none';

    // Wait 5 seconds, then hide the splash screen and show the home screen
    setTimeout(() => {
        splashScreen.style.display = 'none';
        homeScreen.style.display = 'flex';
    }, 5000);
}

document.getElementById('math-solver').onclick = function() {
    showApp('math-solver-screen');
};

document.getElementById('abrowse').onclick = function() {
    showApp('abrowse-screen');
};

document.getElementById('dailymotion').onclick = function() {
    showApp('dailymotion-screen');
};

document.getElementById('settings').onclick = function() {
    showApp('settings-screen');
};

document.getElementById('help').onclick = function() {
    showApp('help-screen');
};

document.getElementById('notepad').onclick = function() {
    showApp('notepad-screen');
};
