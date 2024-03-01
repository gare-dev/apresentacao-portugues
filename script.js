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
            return error;
        }



    } catch (error) {

        alert('You did a mistake. Check your inputs.');


    }

}

function deleteStorage () {

    localStorage.clear();
}