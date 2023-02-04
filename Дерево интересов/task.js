const interest = document.querySelector('.interests_main');

interest.addEventListener('change', event => {
    const target = event.target.closest('.interest'),
        childrens = target.querySelectorAll('.interests'),
        parent = target.querySelector('.interest__check');

    childrens.forEach(interest => {
        const checkBoxes = interest.querySelectorAll('.interest__check');
        checkBoxes.forEach((el) => {
            if (parent.checked) el.checked = true;
            else el.checked = false;
        });
    });
});