const filter = () => {
    const menu = document.querySelector('.portfolio-menu');
    const items = menu.querySelectorAll("li");
    const btnAll = menu.querySelector(".all");
    const btnLovers = menu.querySelector('.lovers');
    const btnChef = menu.querySelector('.chef');
    const btnGirl = menu.querySelector(".girl");
    const btnGuy = menu.querySelector(".guy");
    const btnGrandMother = menu.querySelector(".grandmother");
    const btnGrandDad = menu.querySelector(".granddad");
    const wrapper = document.querySelector(".portfolio-wrapper");
    const MarkAll = wrapper.querySelectorAll(".all");
    const MarkGirl = wrapper.querySelectorAll(".girl");
    const MarkLovers = wrapper.querySelectorAll(".lovers");
    const MarkChef = wrapper.querySelectorAll(".chef");
    const MarkGuy = wrapper.querySelectorAll(".guy");
    const no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        MarkAll.forEach(mark => {
            mark.style.display = "none";
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = "block";
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = "block";
            no.classList.add('animated', 'fadeIn');
        }
    };

    btnAll.addEventListener('click', () => {
        typeFilter(MarkAll);
    });

    btnLovers.addEventListener('click', () => {
        typeFilter(MarkLovers);
    });

    btnChef.addEventListener('click', () => {
        typeFilter(MarkChef);
    });

    btnGuy.addEventListener('click', () => {
        typeFilter(MarkGuy);
    });

    btnGirl.addEventListener('click', () => {
        typeFilter(MarkGirl);
    });

    btnGrandMother.addEventListener('click', () => {
        typeFilter();
    });

    btnGrandDad.addEventListener('click', () => {
        typeFilter();
    });

    menu.addEventListener('click', (e) => {
        let target = e.target;
        
        if(target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });


};

export default filter;