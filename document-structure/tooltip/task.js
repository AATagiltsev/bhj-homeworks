const aTooltips = Array.from(document.querySelectorAll(".has-tooltip"));

aTooltips.forEach(function (tooltip) {
    tooltip.addEventListener("click", function (event) {
        event.preventDefault();

        let sTitle = tooltip.title;
        aTooltips.forEach((tooltip) => {
            if (sTitle !== tooltip.dataset.title) {
                tooltip.nextSibling.classList && tooltip.nextSibling.classList.remove("tooltip_active");
            }
        })
        if (sTitle === tooltip.dataset.title) {
            if (tooltip.nextSibling.classList.contains("tooltip_active")) {
                tooltip.nextSibling.classList.remove("tooltip_active");
            } else {
                tooltip.nextSibling.classList.add("tooltip_active");
            }
            return;
        }

        let code = "<div class='tooltip'>" + sTitle + "</div>";
        let newTooltip = tooltip.insertAdjacentHTML('afterend', code);
        newTooltip = tooltip.nextSibling;
        let position = tooltip.getBoundingClientRect();
        tooltip.dataset.title = sTitle;
        tooltip.nextSibling.style.left = position.x + 'px';
        tooltip.nextSibling.style.top = (position.y + position.height) + 'px';
        tooltip.nextSibling.classList.add("tooltip_active");
    });
});