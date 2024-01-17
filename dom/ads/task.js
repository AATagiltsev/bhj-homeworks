setInterval(function () {
    document.querySelectorAll(".rotator").forEach(function (rotator) {
        let index = +rotator.dataset.active || 0;
        index++;
        if (index >= rotator.children.length) {
            index = 0;
        }
        rotator.querySelector(".rotator__case_active").classList.remove("rotator__case_active");
        rotator.children[index].classList.add("rotator__case_active");
        rotator.dataset.active = index;
    })
}, 1000);