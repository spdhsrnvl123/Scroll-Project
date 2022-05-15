window.onload = () => {
    const title = document.querySelector(".title");
    const text_1 = document.querySelector(".text_1");
    const text_2 = document.querySelector(".text_2");
    const text_3 = document.querySelector(".text_3");

    for (let i = 0; i < title.querySelectorAll('div').length; i++){
        let text = title.querySelectorAll('div')[i];

        TweenMax.from(text, 1, {
            autoAlpha: 0,
            delay: Math.random() * 1,
            ease:Power3.easeInOut
        })
    }

        TweenMax.from(text_1, 1.7, {
            autoAlpha: 0,
            // delay: Math.random() * 1,
            ease:Power3.easeInOut
        })

        TweenMax.from(text_2, 2.4, {
            autoAlpha: 0,
            // delay: Math.random() * 1,
            ease:Power3.easeInOut
        })

        TweenMax.from(text_3, 3.1, {
            autoAlpha: 0,
            // delay: Math.random() * 1,
            ease:Power3.easeInOut
        })
    
    // ------------------------------------------------------------------------

    

}