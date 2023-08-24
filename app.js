const thinkingIcon = '<i class="fa-solid fa-spinner fa-spin-pulse" style="color: #FFF;"></i> '
const solutionIcon = '<i class="fa-solid fa-lightbulb fa-fade" style="color: #FFF;"></i>'

document.getElementById('bored-button').addEventListener('click',function(){

    document.getElementById('activity-text').textContent = '.........'
    renderThinkingAnimation(thinkingIcon)
    setTimeout( fetchActivityText ,1000)

})

function fetchActivityText(){

    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(resource => resource.json())
            .then(data => render(data.activity))


    renderThinkingAnimation(solutionIcon)
}

function render(textData){

    document.getElementById('activity-text').textContent = textData

}

function renderThinkingAnimation(icon){

    document.querySelector('.thinking').innerHTML = icon

}