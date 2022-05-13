
(() => {
    let currentScene = 0;
    let prevScrollHeight = 0;
    let yOffset = 0;
    let totalHeight = 0;
    let error_protect = false;

    const scene = [
        { //section-0
            type: "normal",
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-0"),
            }
        },
        { //section-1
            type: "scrollEvent",
            height_add: 3,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-1"),
                message_A: document.querySelector("#scroll-section-1 .message_A")
            },
            value: [0, 1, { start: 0.1, end: 0.3 }]
        },
        {
            //section-2
            type: "normal",
            scrollHeight: 0,
            objs: {
                container:document.querySelector("#scroll-section-2")
            }
        }
    ]

    const set_Height = () => {
        for (let i = 0; i < scene.length; i++){
            if (scene[i].type === "scrollEvent") {
                scene[i].scrollHeight = scene[i].height_add * window.innerHeight
            } else if (scene[i].type === "normal") {
                scene[i].scrollHeight = scene[i].objs.container.offsetHeight;
            }
            // console.log(scene[i].scrollHeight);
            scene[i].objs.container.style.height = `${scene[i].scrollHeight}px`
        }

        totalHeight = 0;
        for (let i = 0; i < scene.length; i++){
            totalHeight += scene[i].scrollHeight;
            if (totalHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);
    }
    set_Height();

    const calculate = (value,currentYOffset) => {
        let result;
        let start_point = value[2].start * scene[currentScene].scrollHeight;
        let end_point = value[2].end * scene[currentScene].scrollHeight;
        let animation_point = end_point - start_point;

        console.log(animation_point)

        result = currentYOffset / animation_point;
        return result;
    }

    const playAnimaition = () => {
        let currentYOffset = 0;
        currentYOffset = yOffset - prevScrollHeight;
        scrollRatio = currentYOffset / scene[currentScene].scrollHeight //현재 씬의 비율.
        let value = scene[1].value;
        // console.log(value)
        switch (currentScene) {
            case 0:
                // console.log('0 paly');
                break;
            case 1:
                scene[1].objs.message_A.style.opacity = calculate(value, currentYOffset)
                // console.log('1 paly'); 
                break;
            case 2:
                // console.log('2 paly');
                break;
        }
    }

    const update = () => {
        // console.log(yOffset);
        prevScrollHeight = 0;
        error_protect = false;
        for (let i = 0; i < currentScene; i++){
            prevScrollHeight = prevScrollHeight + scene[i].scrollHeight;
        }
        if (yOffset > prevScrollHeight + scene[currentScene].scrollHeight) {
            error_protect =true
            currentScene++;
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }
        if (yOffset < prevScrollHeight) {
            error_protect = true;
            if (currentScene === 0) return;
            currentScene--;
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }
        // playAnimaition()
        // console.log(currentScene);

        if (error_protect) return; //playAnimaition()함수가 실행되지 않는다.

        playAnimaition()
    }

    window.addEventListener("scroll", () => {
        yOffset = pageYOffset;
        update();
    })
    

})();