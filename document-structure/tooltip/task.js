const aTooltips = Array.from(document.querySelectorAll(".has-tooltip"));

aTooltips.forEach(function (tooltip) {
    tooltip.addEventListener("click", function (event) {
        event.preventDefault();
        aTooltips.forEach((elem) => { 
            if (elem.nextSibling.classList && elem.nextSibling.classList.contains("tooltip_active")) { 
                elem.nextSibling.classList.toggle("tooltip_active"); 
            } 
        });
        let sTitle = tooltip.title;
        let code = "<div class='tooltip'>" + sTitle + "</div>";
        if (tooltip.nextSibling.classList && tooltip.nextSibling.classList.contains("tooltip_active")) {
            tooltip.nextSibling.innerText = sTitle;
        } else {
            let newTooltip = tooltip.insertAdjacentHTML('afterend', code);
            newTooltip = tooltip.nextSibling;
        }
        let position = tooltip.getBoundingClientRect();
        tooltip.nextSibling.style.left = position.x + 'px';
        tooltip.nextSibling.style.top = (position.y + position.height) + 'px';
        tooltip.nextSibling.classList.toggle("tooltip_active");
    });
});