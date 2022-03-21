const btnSubmit = document.querySelector('.buttonSubmit');
const btns = document.querySelectorAll('.buttonRate');
const rating = document.getElementById('selectedRating');
const thanks = document.querySelector('.container__thanks');
const info = document.querySelector('.container__information');
const back = document.querySelector('.thanks');

back.addEventListener('click', function(){
    thanks.classList.add('hide');
    info.classList.remove('hide');
})

btnSubmit.addEventListener('click', function() {
    thanks.classList.remove('hide');
    info.classList.add('hide');
})

btns.forEach((btn) => {
    btn.addEventListener('click', e => {
        let selectedBtn = e.currentTarget;
        for(i=0; i<5; i++) {
            if (btns[i]) {
                rating.textContent = selectedBtn.id;
            } else {
                rating.textContent = selectedBtn.id;
            }
        }
    })
})