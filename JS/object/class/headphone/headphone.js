const cibleHTML = document.getElementById("cible");

class Headphone {
  constructor(id, name, price, description, urlImg) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.urlImg = urlImg;
  }
}

const headphones = [
  new Headphone(
    1,
    "JBL",
    30.0,
    "Vivamus suscipit tortor eget felis",
    "https://boulanger.scene7.com/is/image/Boulanger/bfr_overlay?$product_id=6925281918742_h_f_l_0&bfr_overlay?layer=comp&$t1=&$product_id=Boulanger/6925281918742_h_f_l_0&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&id=eCpLA2&fmt=jpg&fit=constrain,1&wid=350&hei=350&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"
  ),
  new Headphone(
    2,
    "Apple",
    155154.0,
    " rutrum congue leo eget malesuada. Praesent sapien massa,",
    "https://boulanger.scene7.com/is/image/Boulanger/bfr_overlay?$product_id=0190199098572_h_f_l_0&bfr_overlay?layer=comp&$t1=&$product_id=Boulanger/0190199098572_h_f_l_0&$i6=overlay_vertical_vide&$i1=overlay_horizontal_vide&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&id=qiVKx0&fmt=jpg&fit=constrain,1&wid=350&hei=350&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"
  ),
  new Headphone(
    3,
    "Samsung",
    50.0,
    "e in ipsum id orci porta dapibus. Nulla quis lorem ut lib",
    "https://static.fnac-static.com/multimedia/Images/FR/MC/86/6d/ae/28208518/1540-1/tsp20170214191355/Samsung-Ecouteurs-Kit-Pieton-EO-EG920BW-Origine-Blanc-Samsung-Galaxy-S6-S6-Edge-G920-G925.jpg"
  ),
  new Headphone(
    4,
    "Honor",
    10.0,
    "titor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in,",
    "https://image.darty.com/accessoires/casque_ecouteurs/casque_intra-auriculaire/honor_am61_blue_t1712124383117A_115159276.jpg"
  ),
];

const affichage = () => {
  cibleHTML.innerHTML = "";
  headphones.map((headphone) => {
    cibleHTML.innerHTML += `  ${headphone.name}
                              <button onclick="showDescription(${headphone.id})">Voir details</button> <br>
                              <hr>
                              `;
  });
};

const showDescription = (id) => {
  const index = headphones.findIndex((headphone) => headphone.id === id);
  const headphone = headphones[index];
  cibleHTML.innerHTML = `<img src="${headphone.urlImg}">
                         Name: ${headphone.name} <br>
                         Price: ${headphone.price} <br>
                         Description: ${headphone.description} <br>
                         <button onclick="affichage()">Retour</button><br>
                         <hr>
                         `;
};
affichage();
