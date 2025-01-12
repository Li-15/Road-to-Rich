//Game settings
let gameData = null
let trashLeft = null
let interval;

window.addEventListener("load", function () {
    loadContent()
    startTrashRegeneration()
})

window.addEventListener("beforeunload", function () {
    saveGame();
});

function loadContent() {
    const gameContent = JSON.parse(localStorage.getItem("gameContentsaved"));
    const trashLeftt = JSON.parse(localStorage.getItem("trashLeftsaved"));

    if (gameContent && trashLeftt) {
        console.log("Game found: loading...")
        gameData = gameContent
        trashLeft = trashLeftt
        updateContent()
    } else {
        console.log("New game creating...")
        createData()
    }
}

function createData() {
    gameData = {
        playerName: "New Player",
        level: 0,
        prestige: 0,
        trash: 0,
        locationName: "oakroad",
        cash: 0,
        shopPurchased: [null],
    };

    trashLeft = {
        oakroad: 200,
        oakroadGoal: 200,
        oakroadRegenSpeed: 5000,
        newland: 100,
        newlandGoal: 100,
        newlandRegenSpeed: 2000,
        mansion: 150,
        mansionGoal: 150,
        mansionRegenSpeed: 15000,
        shoppingMall: 75,
        shoppingMallGoal: 75,
        shoppingMallRegenSpeed: 10000,
        groceryStore: 50,
        groceryStoreGoal: 50,
        groceryStoreRegenSpeed: 1000,
        apartment: 150,
        apartmentGoal: 150,
        apartmentRegenSpeed: 5000,
    };

    saveGame();
}

function saveGame() {
    localStorage.setItem("gameContentsaved", JSON.stringify(gameData))
    localStorage.setItem("trashLeftsaved", JSON.stringify(trashLeft))
}

function updateContent() {
    const stats = document.getElementById("list");

    stats.innerHTML = `
        <li>Neighborhood: ${gameData.locationName}</li>
        <li>Trash left: ${trashLeft[gameData.locationName]}</li>
        <li>Lvl: ${gameData.level}</li>
        <li>Prestige: ${gameData.prestige}</li>
    `;

    document.getElementById("trashDisplay").innerText = `Trash: ${gameData.trash}
    Cash: ${gameData.cash}
    `
    updateImage()
}

function updateImage() {
    let imageURL = {
        oakroad: "./graphics/oakland nh.png",
        newland: "./graphics/newland nh.png",
        mansion: "./graphics/manion.png",
        shoppingMall: "./graphics/shopping man.png",
        groceryStore: "./graphics/grocery store.png",
        apartment: "./graphics/apartment.png"
    };
    const imageLocation = imageURL[gameData.locationName];
    document.getElementById("map").src = imageLocation
}

function startTrashRegeneration() {
    interval = setInterval(() => {
        if (trashLeft[gameData.locationName] < trashLeft[gameData.locationName + "Goal"]) {
            trashLeft[gameData.locationName] += 1; // Add 1 trash
            updateContent(); // Update the UI
        }
    }, trashLeft[gameData.locationName + "RegenSpeed"]); // 5000 milliseconds = 5 seconds
}

function reset() {
    const confirmReset = confirm("Are you sure you want to reset? This action is not reversible!");
    if (confirmReset) {
        localStorage.clear();
        createData()
        updateContent()
    } else return
}
// reset action
document.getElementById("settingSvg").addEventListener("click", reset)

//Clicked the trash
const btn = document.getElementById("trash");

btn.addEventListener("click", function () {
    if (gameData.trashLeft != 0) {
        gameData.trash += 1;
        trashLeft[gameData.locationName] -= 1;
    } else alert("no trash left")
    updateContent()
})

//sell function 
document.getElementById("sell").addEventListener("click", function () {
    if (gameData.trash >= 50) {
        document.getElementById("cashIn").play()
        const cash = Math.floor(gameData.trash / 50)
        const left = gameData.trash % 50

        gameData.cash += cash * 10
        gameData.trash = left

        updateContent()
    } else alert("not enough trash!")
})

//Change location
function changeLocation(location) {
    gameData.locationName = location
    clearInterval(interval)
    startTrashRegeneration()
    document.getElementById("modal").style.display = "none"
    updateContent()
}

document.getElementById("newland").addEventListener("click", function () {
    changeLocation("newland")
})

document.getElementById("oakroad").addEventListener("click", function () {
    changeLocation("oakroad")
})

document.getElementById("mansion").addEventListener("click", function () {
    changeLocation("mansion")
})

document.getElementById("shoppingMall").addEventListener("click", function () {
    changeLocation("shoppingMall")
})

document.getElementById("groceryStore").addEventListener("click", function () {
    changeLocation("groceryStore")
})

document.getElementById("apartment").addEventListener("click", function () {
    changeLocation("apartment")
})

