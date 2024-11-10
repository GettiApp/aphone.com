function goHome() {
    document.querySelectorAll('.app-screen').forEach(screen => screen.style.display = 'none');
    document.querySelector('.home-screen').style.display = 'flex';
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

function showApp(screenId) {
    document.querySelector('.home-screen').style.display = 'none';
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
    phoneScreen.style.display = 'block';
    splashScreen.style.display = 'flex';
    
    setTimeout(() => {
        splashScreen.style.display = 'none';
        goHome();
    }, 5000);
}
