const aTooltips = Array.from(document.querySelectorAll(".has-tooltip"));

aTooltips.forEach(function (tooltip) {
    let sTitle = tooltip.title;
    let code = "<div class='tooltip'>" + sTitle + "</div>";
    let newTooltip = tooltip.insertAdjacentHTML('afterend', code);

    tooltip.addEventListener("click", function (event) {
        event.preventDefault();
        newTooltip = tooltip.nextSibling;
        newTooltip.classList.toggle("tooltip_active");
    });
});