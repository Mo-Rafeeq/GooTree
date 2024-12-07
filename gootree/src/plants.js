import croton from "../src/assets/plants img/low maintaince/croton petra/croton petra.jpg";
import croton2 from'../src/assets/plants img/low maintaince/croton petra/croton petra1.jpg'
import croton3 from'../src/assets/plants img/low maintaince/croton petra/croton petra2.jpg'
import zz from "../src/assets/plants img/low maintaince/zz plant/zz plant1.jpg";
import zz2 from '../src/assets/plants img/low maintaince/zz plant/zz plant2.jpg'
import zz3 from '../src/assets/plants img/low maintaince/zz plant/zz plant3.jpg'
import echeveria from "../src/assets/plants img/newly launched/echeveria succulent/echeveria1.jpg";
import echeveria2 from "../src/assets/plants img/newly launched/echeveria succulent/echeveria2.jpg";
import echeveria3 from "../src/assets/plants img/newly launched/echeveria succulent/echeveria3.jpg";
import italianstonepine from "../src/assets/plants img/newly launched/italian stone pine/italian pine1.jpg";
import italianstonepine2 from "../src/assets/plants img/newly launched/italian stone pine/italian pine2.jpg";
import italianstonepine3 from "../src/assets/plants img/newly launched/italian stone pine/italian pine3.jpg";
import GreyStarCalathe from "../src/assets/plants img/indoor plants/indoor plants/Grey Star Calathea/10-3.jpg";
import GreyStarCalathe2 from "../src/assets/plants img/indoor plants/indoor plants/Grey Star Calathea/10-4.jpg";
import GreyStarCalathe3 from "../src/assets/plants img/indoor plants/indoor plants/Grey Star Calathea/10-5-600x713.jpg";
import JadeSucculent from "../src/assets/plants img/indoor plants/indoor plants/Jade Succulent/4-1 (1).jpg";
import JadeSucculent2 from "../src/assets/plants img/indoor plants/indoor plants/Jade Succulent/4-1.jpg";
import JadeSucculent3 from "../src/assets/plants img/indoor plants/indoor plants/Jade Succulent/4-1.png";
import kangaroopawfern from "../src/assets/plants img/newly launched/kangaroo paw fern/kangaroo1.jpg";
import kangaroopawfern2 from "../src/assets/plants img/newly launched/kangaroo paw fern/kangaroo2.jpg";
import kangaroopawfern3 from "../src/assets/plants img/newly launched/kangaroo paw fern/kangaroo3.jpg"
import spiderplant from "../src/assets/plants img/low maintaince/spider plant/spider plant.jpg";
import spiderplant2 from "../src/assets/plants img/low maintaince/spider plant/spider plant1.jpg";
import spiderplant3 from "../src/assets/plants img/low maintaince/spider plant/spider plant2.jpg";

const plants = [
    {
      id: 1,
      name: "Croton Petra",
      rating: "4.8",
      price: "299",
      features: { s: "Moderate Water", d: "Low light" },
      description: "Croton Petra is a vibrant indoor plant known for its colorful, variegated leaves. It adds a tropical feel to any space.",
      image: croton,
      subimage:{img1:croton2,img2:croton3}
    },
    {
      id: 2,
      name: "ZZ Plant",
      rating: "4.9",
      price: "259",
      features: { s: "Moderate Water", d: "Low light" },
      description: "The ZZ Plant is a hardy indoor plant that requires minimal care, making it perfect for beginners.",
      image: zz,
      subimage:{img1:zz2,img2:zz3}
    },
    {
      id: 3,
      name: "Italian Stone Pine",
      rating: "4.8",
      price: "199",
      features: { s: "Moderate Water", d: "Low light" },
      description: "Italian Stone Pine is a small, ornamental pine tree that adds a touch of greenery to any indoor or outdoor setting.",
      image: italianstonepine,
      subimage:{img1:italianstonepine2,img2:italianstonepine3}
    },
    {
      id: 4,
      name: "Grey Star Calathe",
      rating: "4.8",
      price: "299",
      features: { s: "Moderate Water", d: "Low light" },
      description: "The Grey Star Calathe is known for its stunning leaf patterns and is perfect for adding a stylish look to your home.",
      image: GreyStarCalathe,
      subimage:{img1:GreyStarCalathe2,img2:GreyStarCalathe3}
    },
    {
      id: 5,
      name: "Jade Succulent",
      rating: "4.8",
      price: "299",
      features: { s: "Moderate Water", d: "Low light" },
      description: "The Jade Succulent is a low-maintenance, drought-tolerant plant with thick, green leaves and a compact form.",
      image: JadeSucculent,
      subimage:{img1:JadeSucculent2,img2:JadeSucculent3}
    },
    {
      id: 6,
      name: "Kangaroo Paw Fern",
      rating: "4.9",
      price: "259",
      features: { s: "Moderate Water", d: "Low light" },
      description: "The Kangaroo Paw Fern is an interesting, exotic fern with unique, textured leaves resembling kangaroo paws.",
      image: kangaroopawfern,
      subimage:{img1:kangaroopawfern2,img2:kangaroopawfern3}
    },
    {
      id: 7,
      name: "Spider Plant",
      rating: "4.8",
      price: "199",
      features: { s: "Moderate Water", d: "Low light" },
      description: "Spider Plants are resilient and known for their arching leaves and ability to thrive in various light conditions.",
      image: spiderplant,
      subimage:{img1:spiderplant2 ,img2:spiderplant3}
    },
    {
      id: 8,
      name: "Echeveria",
      rating: "4.8",
      price: "299",
      features: { s: "Moderate Water", d: "Low light" },
      description: "Echeveria is a beautiful succulent with rosette-shaped leaves that come in a variety of colors and textures.",
      image: echeveria,
      subimage:{img1:echeveria2,img2:echeveria3}

    }
];

export default plants;
