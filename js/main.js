const memberTeam = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        ruole : 'Chief Editor',
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
    ${memberTeam[key].name}, ${memberTeam[key].role}, <img src="./img/${memberTeam[key].img}"></img>
    `;
}