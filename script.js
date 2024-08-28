/*
MILESTONE 0: -V-
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: -V-
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

// Recupero gli elementi dal DOM
const team = document.getElementById('team');

// Creo un array di oggetti
const ourTeam = [
    { fullName: 'Wayne Barnett', role: 'Founder & CEO', image: 'wayne-barnett-founder-ceo.jng' },
    { fullName: 'Angela Caroll', role: 'Chief Editor', image: 'angela-caroll-chief-editor.jng' },
    { fullName: 'Walter Gordon', role: 'Office Manager', image: 'walter-gordon-office-manager.jpg' },
    { fullName: 'Angela Lopez', role: 'Social Media Manager', image: 'angela-lopez-social-media-manager.jpg' },
    { fullName: 'Scott Estrada', role: 'Developer', image: 'scott-estrada-developer.jpg' },
    { fullName: 'Barbara Ramos', role: 'Graphic Designer', image: 'barbara-ramos-graphic-designer.jpg' }
]

let fullNameMember = '';
let roleMember = '';
let imageMember = '';
let members = '';



for (let i = 0; i < ourTeam.length; i++) {
    const member = ourTeam[i];
    console.log(member['fullName'], member['role'], member['image']);

    fullNameMember = member['fullName'];
    console.log(fullNameMember)

    roleMember = member['role'];
    console.log(roleMember)

    imageMember = member['image'];
    console.log(imageMember)

    members += `
    <li>
     <h3> Nome: ${fullNameMember}</h3>
     <h4> Ruolo: ${roleMember}</h4>
     <h4> Immagine: ${imageMember}</h4>
     </li> `;
}

team.innerHTML = members;



/*
for (let member of ourTeam) {
    console.log(member.fullName, member.role, member.image);
} */