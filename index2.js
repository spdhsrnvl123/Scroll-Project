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

    const circle = document.querySelector(".circle");
    // const showing = document.querySelector(".showing");

    console.log(circle.firstElementChild);

    const slide_show = () => {
        const current_slide = document.querySelector(".showing");
        if (current_slide) {
            current_slide.classList.remove("showing");
            const next_slide = current_slide.nextElementSibling;
            if (next_slide) {
                next_slide.classList.add("showing");
            } else {
                circle.firstElementChild.classList.add("showing");
            }
        } else {
            circle.firstElementChild.classList.add("showing");
        }
    }

    setInterval(slide_show, 2000);
}