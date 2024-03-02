function show() {

    try {
        const name1 = document.getElementById('name1').value;
        const name2 = document.getElementById('name2').value;
        const name3 = document.getElementById('name3').value;
        const name4 = document.getElementById('name4').value;
        const name5 = document.getElementById('name5').value;
        const name6 = document.getElementById('name6').value;

        if (name1.length > 0 && name2.length > 0 && name3.length > 0 && name4.length > 0 && name5.length > 0 && name6.length > 0) {

            localStorage.setItem('text1', name1);
            localStorage.setItem('text2', name2);
            localStorage.setItem('text3', name3);
            localStorage.setItem('text4', name4);
            localStorage.setItem('text5', name5);
            localStorage.setItem('text6', name6);

        }
        else {
            throw error;
        }

    } catch (error) {

        alert('You did a mistake. Check your inputs.');


    }

}

function deleteStorage() {

    localStorage.clear();
}

const upBtt = document.getElementById('updateBtt');

upBtt.addEventListener('click', () => {

    try {
        const text1 = document.getElementById('text1');
        const text2 = document.getElementById('text2');
        const text3 = document.getElementById('text3');
        const text4 = document.getElementById('text4');
        const text5 = document.getElementById('text5');
        const text6 = document.getElementById('text6');

        if (localStorage.length) {

            text1.innerHTML = localStorage.getItem('text1');
            text2.innerHTML = localStorage.getItem('text2');
            text3.innerHTML = localStorage.getItem('text3');
            text4.innerHTML = localStorage.getItem('text4');
            text5.innerHTML = localStorage.getItem('text5');
            text6.innerHTML = localStorage.getItem('text6');

        }
        else {
            throw new error;
        }
    }
    catch (error) {
        alert('Você não colocou palavras. Volte para as configurações e tente novamente')
    }
});








