document.getElementById("sell").addEventListener("mouseover", () => {
    document.getElementById("des").style.opacity = "0.5"
    document.getElementById("des").style.transition = "opacity 0.2s linear"
});

document.getElementById("sell").addEventListener("mouseleave", () => {
    document.getElementById("des").style.opacity = "0"
});

document.getElementById("shop").addEventListener("mouseover", function () {
    document.getElementById("popupi4").style.visibility = "visible"
    document.getElementById("popupi4").innerText = "shop"
})

document.getElementById("shop").addEventListener("mouseleave", function () {
    document.getElementById("popupi4").innerText = "hello"
    document.getElementById("popupi4").style.visibility = "hidden"

})

document.getElementById("prestige").addEventListener("mouseover", function () {
    document.getElementById("popupi4").style.visibility = "visible"
    document.getElementById("popupi4").innerText = "prestige"
})

document.getElementById("prestige").addEventListener("mouseleave", function () {
    document.getElementById("popupi4").innerText = "hello"
    document.getElementById("popupi4").style.visibility = "hidden"
})