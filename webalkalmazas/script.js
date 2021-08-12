let gallery = [
    {
    photo: 'images/windows_01.jpg',
    title: 'Ablakok',
    description: 'Fény és árnyék játéka.'
    },
    {
    photo: 'images/windows_02.jpg',
    title: 'Rózsaablak',
    description: 'Uralja a teret, beengedi a napfényt.'
    },
    {
    photo: 'images/windows_03.jpg',
    title: 'Magasban',
    description: 'A magasból minden napszakban árad a világosság.'
    },
    {
    photo: 'images/windows_04.jpg',
    title: 'Szédülés',
    description: 'Fel a fejjel és forogjunk körbe.'
    },
    {
    photo: 'images/windows_05.jpg',
    title: 'Padok',
    description: 'Ezt látjuk ültő helyünkből.'
    },
]

let currentPhoto = 0

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', gallery[currentPhoto].photo)
    $('#photo-title').text(gallery[currentPhoto].title)
    $('#photo-description').text(gallery[currentPhoto].description)
}
  
loadPhoto(currentPhoto);
  
$('#right-arrow').click(() => {
    if(currentPhoto < 4) {
         currentPhoto++;
    } else {
        (currentPhoto--);
        (currentPhoto--);
        (currentPhoto--);
        (currentPhoto--);
   }
    loadPhoto(currentPhoto);
}) 

loadPhoto(currentPhoto);
  
$('#left-arrow').click(() => {
    if(currentPhoto > 0) {
        currentPhoto--;
    } else {
        currentPhoto++;
        currentPhoto++;
        currentPhoto++;
        currentPhoto++;
    }
    loadPhoto(currentPhoto);
}) 

/*gallery.forEach(function (photo) {
	$('.thumbnails-container').append(`<img class"thumbnails">`);
	$('.thumbnails').attr('src', gallery.photo);
})*/
    
gallery.forEach((item, index) => {
    $('#thumbnails-container').append(`<div class="thumbnails" data-index="${index}">${item} (data-index="${index}")</div>`);
})