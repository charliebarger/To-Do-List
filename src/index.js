let parent = document.querySelectorAll('.toggle-btn span')
let ids = ['line1', 'line2', 'line3']
loopItems(parent, ids)

function loopItems(itemArray, idList){
    let counter = 0
    itemArray.forEach(child => {
        appendIds(child, idList[counter])
        counter++
});
}

function appendIds(item, idValue){
    console.log(idValue)
    item.id = idValue;
}