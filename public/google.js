const data = [{
    id: 1,
    name: 'Gotan',
    isAd: true,
    score: 4.3,
    reviews: 162,
    type: 'Argentinian',
    address: 'Pedro Baranda 17',
    schedule: '10:00',
    convention: 'PM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipNbll3bcdehLKoB59TTUazzA0KyzNHjpXkTxB5h=w160-h184-p-k-no'
}, {
    id: 2,
    name: 'Santo Domingo',
    isAd: true,
    score: 4.0,
    type: 'Restaurant',
    schedule: '11:00',
    convention: 'PM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipOSPwUoGq8W9I0x75ZC6ElJ3mb8f9deWNbOFUgT=w160-h184-p-k-no'
}, {
    id: 3,
    name: 'San Angel Inn',
    isAd: false,
    score: 4.7,
    reviews: 2795,
    type: 'Mexican',
    address: 'Diego Rivera 50',
    schedule: '1:00',
    convention: 'AM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipMw_culrX2DTl-hK2tfz_XRc8ZZIE6uKWqO-kg=w160-h184-p-k-no'
}, {
    id: 4,
    name: 'Saks',
    isAd: false,
    score: 4.6,
    reviews: 894,
    type: 'Mexican',
    address: 'Plaza San Jacinto 9',
    schedule: '11:00',
    convention: 'PM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipPu01e2rJuElpO30B2Lyhvtf27-tLXunOnPNc1-=w160-h184-p-k-no'
}, {
    id: 5,
    name: 'El Cardenal',
    isAd: false,
    score: 4.7,
    reviews: 3162,
    type: 'Mexican',
    address: 'Avenida de la Paz 32',
    schedule: '8:00',
    convention: 'PM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipMRvGyMRqMyv2G-93VgpmNuP2mcsYrvOFKvIEz_=w160-h184-p-k-no'
}, {
    id: 6,
    name: 'Sir Winston Churchill’s',
    isAd: false,
    score: 4.7,
    reviews: 659,
    type: 'English',
    address: 'Perif. Blvd. Manuél Ávila Camacho 67',
    schedule: '12:00',
    convention: 'AM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipNE8_d1x-5K9OKFCrsBy1iDPUMiOWYpIX1PL-o=w160-h184-p-k-no'
}, {
    id: 7,
    name: 'El Bajío',
    isAd: false,
    score: 4.4,
    reviews: 1469,
    type: 'Mexican',
    address: 'Alejandro Dumas 7',
    schedule: '11:00',
    convention: 'PM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipO_-4nLDOV5Z1Mde8dOAI_CxXyGdHh1fVX4utA1=w160-h184-p-k-no'
}, {
    id: 8,
    name: 'Tori Tori',
    isAd: false,
    score: 4.5,
    reviews: 100,
    type: 'Japanese',
    address: 'Av. Altavista 147',
    schedule: '2:00',
    convention: 'AM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipMDaZIVunLRTUsrFNdhmx64ixpdp6uuF83RFUK1=w160-h184-p-k-no'
}, {
    id: 9,
    name: 'Contramar',
    isAd: false,
    score: 4.6,
    reviews: 1176,
    type: 'Seafood',
    address: 'Calle de Durango 200',
    schedule: '8:00',
    convention: 'PM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipNLGZX7eouM9NipnM2FgkFBT5fDKgSfKMLagrn-=w160-h184-p-k-no'
}, {
    id: 10,
    name: 'Agua & Sal',
    isAd: false,
    score: 4.6,
    reviews: 500,
    type: 'Seafood',
    address: 'Campos Elíseos 199-A, Polanco IV Sección',
    schedule: '10:00',
    convention: 'PM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipMijA19mN4SSYjeuMDNVHjuFuTtNTFYyV4-QDpH=w160-h184-p-k-no'
}, {
    id: 11,
    name: 'Saks',
    isAd: false,
    score: 4.5,
    reviews: 696,
    type: 'Mexican',
    address: 'Av. de los Insurgentes Sur 1641',
    schedule: '12:00',
    convention: 'AM',
    cover: 'https://lh5.googleusercontent.com/proxy/-k4SqSvti4pEZ_6jFVojTHtyfT46CMlegGSG_TcstpJstpqyRDVDuxHb9P1LE8oDdb4w0S0DMKTZAKeMFDgCgUkZ7S58Ng47bQYkMycXKFrjxDcwde-ycElXQAw1nTle7M87SuvtabKQ7nbpstABmnEQP3SwR7o=w160-h184-p-k-no'
}, {
    id: 12,
    name: 'Pujol',
    isAd: false,
    score: 4.6,
    reviews: 1421,
    type: 'Mexican',
    address: 'Tennyson 133',
    schedule: '10:45',
    convention: 'PM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipMy6M1Prz-TQgixcJRYJmbgY3JM21T_22HGabY7=w160-h184-p-k-no'
}, {
    id: 13,
    name: 'Quintonil',
    isAd: false,
    score: 4.5,
    reviews: 688,
    type: 'Mexican',
    address: 'Av. Isaac Newton 55',
    schedule: '6:30',
    convention: 'PM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipNE7fqYkCEXVqKLuZ2C9AFodbn3jcJO2SfSNvtP=w160-h184-p-k-no'
}, {
    id: 14,
    name: 'Asador Libanés',
    isAd: false,
    score: 4.4,
    reviews: 262,
    type: 'Lebanese',
    address: 'Calle Kansas 19',
    schedule: '11:00',
    convention: 'PM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipPQANA4ZkACWrGXHTI7sIIu5jNokxIq54RyYZA=w160-h184-p-k-no'
}, {
    id: 15,
    name: 'Quattro',
    isAd: false,
    score: 4.6,
    reviews: 181,
    type: 'Italian',
    address: 'Av. Santa Fe 160, Álvaro Obregón',
    schedule: '12:30',
    convention: 'AM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipNVQXdqL8FXM0N5nXTm0AeVGmkWfMo-PbH6IsVi=w160-h184-p-k-no'
}, {
    id: 16,
    name: 'La Capital',
    isAd: false,
    score: 4.5,
    reviews: 708,
    type: 'Mexican',
    address: 'Av. Nuevo León 137',
    schedule: '1:00',
    convention: 'AM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipPydrJMY7kgS06IjdYvqNF4aqVkXxpxop6KpVwW=w160-h184-p-k-no'
}, {
    id: 17,
    name: 'Fisher’s',
    isAd: false,
    score: 4.3,
    reviews: 1159,
    type: 'Seafood',
    address: 'Av. Antonio Dovali Jaime #75',
    schedule: '11:00',
    convention: 'PM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipO1Szu2573dr50zc1pxIDezU1SEFPmVDJ0I4_Bj=w160-h184-p-k-no'
}, {
    id: 18,
    name: 'Los Danzantes',
    isAd: false,
    score: 4.4,
    reviews: 1122,
    type: 'Mexican',
    address: 'Parque Centenario 12',
    schedule: '12:00',
    convention: 'AM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipNUTyrJLhIjxOf-xtlSrpK7uzLqsF6eQDSyjBB5=w160-h184-p-k-no'
}, {
    id: 19,
    name: 'Saks',
    isAd: false,
    score: 4.5,
    reviews: 450,
    type: 'Eclectic',
    address: 'José María Velasco 110',
    schedule: '12:00',
    convention: 'AM',
    cover: 'https://lh3.googleusercontent.com/proxy/zyNW88gKlTWznjoHKUVA0ikeOhJA4ZAAV9Q1-eUvILQ7jDsAZg4B1tpgymZZPY-4i28fUIH2_mhZl03b6XKUwrgf-072-CaOpdkIKf_QKRBCoHnOP4fNJJ6xdVsSNjjK0tgecqRpldHrr9yLaQMtqIgQfKsvZaQ=w160-h184-p-k-no'
}, {
    id: 20,
    name: 'La Mansión',
    isAd: false,
    score: 4.4,
    reviews: 437,
    type: 'Grill',
    address: 'Insurgentes Sur 1891',
    schedule: '12:30',
    convention: 'AM',
    cover: 'https://lh5.googleusercontent.com/p/AF1QipP8I1J3Us_rsuknmbZ4ISmE2iyRPVXwCGRrDXGj=w160-h184-p-k-no'
}];


const container = document.querySelector("#restaurant");


function renderAd(isAd) {
    if (isAd) {
        return "<span class='restaurant__ad'>Ad</span>"
    }
}

function renderReviews(reviews) {
    if (typeof reviews === "undefined") {
        return "(" + reviews + ")";
    }

    return "";

}


function renderAdress(address) {
    if (typeof address === "undefined") {
        return "." + address;
    }

    return "";
}

const html = data.map(function(r) {
    return "<li class='restaurant__item'>" +
        "<div>" +
        "<h4 class='restaurant__name'>" + r.name + "</h4>" +
        "<p>" +
        renderAd(r.isAd) +
        "<span>" +
        r.score +

        "<i class='fa fa-star'></i>" +
        "<i class='fa fa-star'></i>" +
        "<i class='fa fa-star'></i>" +
        "<i class='fa fa-star'></i>" +
        "<i class='fa fa-star'></i>" +
        "</span>" +
        "<span class='restaurant__rating'>" + renderReviews(r.reviews) + "</span>" +
        "</p>" +
        "<p>" + r.type + "." + r.address + "</p>" +
        "<p>Open until" + r.schedule + r.convention + "</p>" +
        "</div>" +
        "<div>" +
        "<img class='restaurant__cover' src='" + r.cover + "'/>" +
        "</div>" +
        "</li>";
})



container.innerHTML = html;


/*const tag = `<p>Hello </p>`; */