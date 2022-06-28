const memberTeam = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        img : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        img : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        img : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg'
    },
] 

let contentId = document.getElementById('content');

for (key in memberTeam) {
    console.log(`${memberTeam[key].name}, ${memberTeam[key].role}, ${memberTeam[key].img}`);
    contentId.innerHTML += `
    <div class="card m-3">
        <img class="card-img-top" src="./img/${memberTeam[key].img}"></img>
    
    <div class="card-body">
    <h5 class="card-title">${memberTeam[key].name}, ${memberTeam[key].role}</h5>
    </div>
    </div>
    `;
}