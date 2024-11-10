function goHome() {
    document.querySelectorAll('.app-screen').forEach(screen => screen.style.display = 'none');
    document.querySelector('.home-screen').style.display = 'flex';
}

document.getElementById('math-solver').onclick = function() {
    document.querySelector('.home-screen').style.display = 'none';
    document.getElementById('math-solver-screen').style.display = 'flex';
};

document.getElementById('abrowse').onclick = function() {
    document.querySelector('.home-screen').style.display = 'none';
    document.getElementById('abrowse-screen').style.display = 'flex';
};

function solveMath() {
    const input = document.getElementById('math-input').value;
    try {
        const result = eval(input);
        document.getElementById('result').textContent = `Result: ${result}`;
    } catch (error) {
        document.getElementById('result').textContent = 'Invalid input!';
    }
}

// Initial display setup
goHome();
