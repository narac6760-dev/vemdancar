
const dancas = [
    {
        nome: "Frevo",
        regiao: "Nordeste - Pernambuco",
        img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800",
        desc: "O Frevo é uma explosão de energia, cores e acrobacias. Nascido em Pernambuco, é Patrimônio Imaterial da Humanidade e mistura marcha, capoeira e alegria do carnaval."
    },
    {
        nome: "Forró",
        regiao: "Nordeste",
        img: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=800",
        desc: "O Forró é o ritmo que abraça. Dançado em pares, é símbolo das festas juninas e da cultura nordestina, com sanfona, zabumba e triângulo."
    },
    {
        nome: "Samba de Roda",
        regiao: "Sudeste / Bahia",
        img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800",
        desc: "Raiz de todo samba brasileiro, o Samba de Roda reúne música, dança e capoeira em uma roda cheia de ancestralidade afro-brasileira."
    },
    {
        nome: "Carimbó",
        regiao: "Norte - Pará",
        img: "https://images.unsplash.com/photo-1516450360452-9312abbf6f7e?q=80&w=800",
        desc: "Dança típica do Pará, o Carimbó é sensual e envolvente, com saias rodadas, pés descalços e tambores feitos de tronco de árvore."
    },
    {
        nome: "Bumba Meu Boi",
        regiao: "Nordeste - Maranhão",
        img: "https://images.unsplash.com/photo-1520095972714-909e91b038e4?q=80&w=800",
        desc: "Mais que dança, é teatro, música e festa popular. Conta a história da ressurreição do boi e é uma das maiores manifestações do Maranhão."
    },
    {
        nome: "Quadrilha Junina",
        regiao: "Nordeste - Todo Brasil",
        img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800",
        desc: "A Quadrilha anima o São João com seus passos coreografados, casamentos caipiras e muita alegria. É a dança que une todo o Brasil em junho."
    }
];

const grid = document.querySelector('.grid-dancas');
const modal = document.getElementById('modal');

dancas.forEach((danca, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${danca.img}" alt="${danca.nome}">
        <div class="card-info">
            <span>${danca.regiao}</span>
            <h3>${danca.nome}</h3>
            <p>${danca.desc}</p>
        </div>
    `;
    card.onclick = () => openModal(index);
    grid.appendChild(card);
});

function openModal(i) {
    document.getElementById('modal-img').src = dancas[i].img;
    document.getElementById('modal-title').innerText = dancas[i].nome;
    document.getElementById('modal-regiao').innerText = dancas[i].regiao;
    document.getElementById('modal-desc').innerText = dancas[i].desc;
    modal.style.display = 'flex';
}

document.querySelector('.close').onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }
