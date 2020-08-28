const accordion = (trigger, item) => {
    const btns = document.querySelectorAll(trigger);
    const items = document.querySelectorAll(item);

    items.forEach(item => {
        item.classList.add('animated', 'fadeInDown');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                });
                this.classList.add('active', 'active-style');
            }
        });
    });
};

export default accordion;