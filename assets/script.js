const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Définir les constantes et les variables
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')
let defaultImage = 0

// Ajouter les événements de click
arrowLeft.addEventListener('click', () => {

	// Décrémenter l'indice de l'image
	defaultImage--;

	// Retourner à la fin des images s'il n'y a plus d'images précédentes
	if (defaultImage < 0) {
		defaultImage = slides.length - 1;
	}

	// appeler la fonction qui gére l'affichage des images
	displayPicture(defaultImage);
});

arrowRight.addEventListener('click', () => {

	// Incrémenter l'indice de l'image
	defaultImage++;

	// Retourner au début des images s'il n'y a plus d'images suivantes
	if (defaultImage >= slides.length) {
		defaultImage = 0;
	}

	// appeler la fonction qui gére l'affichage des images
	displayPicture(defaultImage);
});


// la fonction pour afficher les points en ajoutant la classe "dot"
const displayBullets = () => {
	const dots = document.querySelector('.dots')
	for (let i = 0; i < slides.length; i++) {
		dots.insertAdjacentHTML('beforeend', '<div class="dot"></div>')
	}	
}
displayBullets()


// la fonction qui gére l'affichage des images
const displayPicture = (numImage) =>{

// Sélectionner le conteneur de la bannière et l'image courante
	const banner = document.querySelector('#banner')
	const currentImage = banner.firstChild 

// Insérer la nouvelle image et le Tagline
	banner.insertAdjacentHTML('afterbegin', `<img class="banner-img" src ="assets/images/slideshow/${slides[numImage].image}" alt="banner Print-it">`);
	document.querySelector('p').innerHTML = `${slides[numImage].tagLine}`
	
// supprimer l'image précédente
	currentImage.remove()

// Sélectionner tous les points et ajouter la classe "dot_selected" au point correspondant à l'image courante
	const bullets = document.querySelectorAll('.dot')
	bullets.forEach((bullet, index) => {
		if (index === numImage) {
			bullet.classList.add('dot_selected')
		} else {
			bullet.classList.remove('dot_selected')
		}
		})
}

// Afficher l'image par défaut
displayPicture(defaultImage)
