import fetaChickenSoupImage from './feta-chicken-soup.jpg';
import ricottaSaladImage from './ricotta-salad.jpg';
import lambKormaImage from './lamb-korma.jpg';
import mangoVindalooImage from './mango-vindaloo.jpg';
import camembertCrepesImage from './camembert-crepes.jpg';
import chocolateCheesecakeImage from './chocolate-cheesecake.jpg';

let content = document.getElementById('content');
content.classList.add('content-menu');

const fetaChickenSoupImg = new Image();
fetaChickenSoupImg.src = fetaChickenSoupImage;
const ricottaSaladImg = new Image();
ricottaSaladImg.src = ricottaSaladImage;
const lambKormaImg = new Image();
lambKormaImg.src = lambKormaImage;
const mangoVindalooImg = new Image();
mangoVindalooImg.src = mangoVindalooImage;
const camembertCrepesImg = new Image();
camembertCrepesImg.src = camembertCrepesImage;
const chocolateCheesecakeImg = new Image();
chocolateCheesecakeImg.src = chocolateCheesecakeImage;

function Food (name, description, ingredients, image) {
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.image = image;
    this.renderFood = function() {
        const foodContainer = document.createElement('div');
        foodContainer.classList.add('food-container');
        const foodName = document.createElement('div');
        foodName.classList.add('food-name');
        foodName.textContent = this.name;
        const foodDescription = document.createElement('div');
        foodDescription.classList.add('food-description');
        foodDescription.textContent = this.description;
        const foodIngredients = document.createElement('div');
        foodIngredients.classList.add('food-ingredients');
        foodIngredients.textContent = this.ingredients;
        const foodImage = document.createElement('div');
        foodImage.classList.add('soup-image');
        foodImage.appendChild(this.image);

        foodContainer.appendChild(foodName);
        foodContainer.appendChild(foodDescription);
        foodContainer.appendChild(foodIngredients);
        foodContainer.appendChild(foodImage);

        content.appendChild(foodContainer);
    };
}

let fetaChickenSoup = new Food('Feta Chicken Soup', 'Tangy feta and free range chicken combined into chunky soup', 'onion | feta | chicken', fetaChickenSoupImg);
let ricottaSalad = new Food('Ricotta salad with butter dressing', 'A mouth-watering ricotta salad served with butter dressing', 'cucumber | lettuce | cress | ricotta | butter', ricottaSaladImg);
let lambKorma = new Food('Rambutan and lamb korma', 'Mild korma made with fresh rambutan and succulent lamb', 'lamb | onion | peppers | garlic | ginger | tumeric | coriander', lambKormaImg);
let mangoVindaloo = new Food('Mango and spinach vindaloo', 'Spicy vindaloo made with dried mango and fresh spinach', 'mango | spinach | onion | garlic | ginger | cayenne', mangoVindalooImg);
let camembertCrepes = new Food('Camembert and hazelnut crepes', 'Crispy crepes filled with camembert and hazelnut', 'flour | butter |  egg | milk | camembert | hazelnut', camembertCrepesImg);
let chocolateCheesecake = new Food('Chocolate and mascarpone cheesecake', 'A velvety cheesecake layered with plain chocolate and mascarpone', 'vanilla | double cream | mascarpone | chocolate', chocolateCheesecakeImg);

export default function loadMenuPage() {
    fetaChickenSoup.renderFood();
    ricottaSalad.renderFood();
    lambKorma.renderFood();
    mangoVindaloo.renderFood();
    camembertCrepes.renderFood();
    chocolateCheesecake.renderFood();
}
