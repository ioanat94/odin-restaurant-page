import fetaChickenSoupImage from './feta-chicken-soup.jpg';
import ricottaSaladImage from './ricotta-salad.jpg';
import lambKormaImage from './lamb-korma.jpg';
import mangoVindalooImage from './mango-vindaloo.jpg';
import camembertCrepesImage from './camembert-crepes.jpg';
import chocolateCheesecakeImage from './chocolate-cheesecake.jpg';

export default function loadMenuPage() {
    let content = document.getElementById('content');

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

    function Food (name, description, ingredients = [], image) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.image = image;
    }

    let fetaChickenSoup = new Food('Feta Chicken Soup', 'Tangy feta and free range chicken combined into chunky soup', ['onion', 'feta', 'chicken'], fetaChickenSoupImg);

    const soupContainer = document.createElement('div');
    soupContainer.id = 'soup-container';
    const soupName = document.createElement('div');
    soupName.id = 'soup-name';
    soupName.textContent = fetaChickenSoup.name;
    const soupDescription = document.createElement('div');
    soupDescription.id = 'soup-description';
    soupDescription.textContent = fetaChickenSoup.description;
    const soupIngredients = document.createElement('div');
    soupIngredients.id = 'soup-ingredients';
    soupIngredients.textContent = fetaChickenSoup.ingredients;
    const soupImage = document.createElement('div');
    soupImage.id = 'soup-image';
    soupImage.appendChild(fetaChickenSoup.image);

    soupContainer.appendChild(soupName);
    soupContainer.appendChild(soupDescription);
    soupContainer.appendChild(soupIngredients);
    soupContainer.appendChild(soupImage);

    content.appendChild(soupContainer);
    console.log(fetaChickenSoup);
}
