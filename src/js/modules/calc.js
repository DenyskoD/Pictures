const calc = (size, material, options, promo, result) => {
    const sizeBlock = document.querySelector(size);
    const materialBlock = document.querySelector(material);
    const optionsBlock = document.querySelector(options);
    const promoBlock = document.querySelector(promo);
    const resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunction = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == "" || materialBlock.value == "") {
            resultBlock.textContent = "Please, select size and material";
        } else if (promoBlock.value === "IWANTPOPART") {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    promoBlock.addEventListener('input', calcFunction);

};  

export default calc;