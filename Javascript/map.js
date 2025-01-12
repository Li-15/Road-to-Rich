const map = document.getElementById("map")
const gameContent = JSON.parse(localStorage.getItem("gameContent"));

map.addEventListener("click", function () {
    document.getElementById("modal").style.display = "block"
})

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* 
    These functions are used to show the player what location they are teleporting to if they 
    click on it.
*/
document.getElementById("closebtn").onclick = function () {
    modal.style.display = "none";
}

document.getElementById("newland").addEventListener("mouseover", function () {
    document.getElementById("mapLocationDes").innerText = `Teleport to: [Newland]`
}
)

document.getElementById("newland").addEventListener("mouseleave", function () {
    document.getElementById("mapLocationDes").innerText = `Teleport to: [choose a waypoint]`
}
)

document.getElementById("oakroad").addEventListener("mouseover", function () {
    document.getElementById("mapLocationDes").innerText = `Teleport to: [Oakroad]`
})

document.getElementById("oakroad").addEventListener("mouseleave", function () {
    document.getElementById("mapLocationDes").innerText = `Teleport to: [choose a waypoint]`
})

document.getElementById("mansion").addEventListener("mouseover", function () {
    document.getElementById("mapLocationDes").innerText = `Teleport to: [mansion]`
}
)

document.getElementById("mansion").addEventListener("mouseleave", function () {
    document.getElementById("mapLocationDes").innerText = `Teleport to: [choose a waypoint]`
}
)

document.getElementById("apartment").addEventListener("mouseover", function () {
    document.getElementById("mapLocationDes").innerText = `Teleport to: [apartment]`
}
)

document.getElementById("apartment").addEventListener("mouseleave", function () {
    document.getElementById("mapLocationDes").innerText = `Teleport to: [choose a waypoint]`
})


document.getElementById("shoppingMall").addEventListener("mouseover", function () {
    document.getElementById("mapLocationDes").innerText = `Teleport to: [shopping mall]`
}
)

document.getElementById("shoppingMall").addEventListener("mouseleave", function () {
    document.getElementById("mapLocationDes").innerText = `Teleport to: [choose a waypoint]`
})

document.getElementById("groceryStore").addEventListener("mouseover", function () {
    document.getElementById("mapLocationDes").innerText = `Teleport to: [grocery store]`
}
)

document.getElementById("groceryStore").addEventListener("mouseleave", function () {
    document.getElementById("mapLocationDes").innerText = `Teleport to: [choose a waypoint]`
})