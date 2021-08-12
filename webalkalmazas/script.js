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
// [currentPhoto]    $('#thumbnail').css('width', '120px')
}
  
loadPhoto(currentPhoto);
  
$('#right-arrow').click(() => {
    if(currentPhoto < gallery.length-1) {
         currentPhoto++;
    } else {
        currentPhoto = 0;   
    }
    loadPhoto(currentPhoto);
}) 

$('#left-arrow').click(() => {
    if(currentPhoto > 0) {
        currentPhoto--;
    } else {
        currentPhoto = gallery.length-1;
    }
    loadPhoto(currentPhoto);
}) 

gallery.forEach((item, index) => {
    $('.thumbnails-container').append(`<img src="${item.photo}" class="thumbnails" data-index="${index}">`);
    $('.thumbnails').click((event) => {
        let indexClicked = $(event.target).attr('data-index');
        let numberIndex = parseInt(indexClicked);
        $('#photo').attr('src', gallery[indexClicked].photo);
        $('#photo-title').text(gallery[indexClicked].title);
        $('#photo-description').text(gallery[indexClicked].description);
    });
});

/*let thumbs = [
    {
    photo: 'thumbnails/windows_thumb_01.jpg',
    title: 'Ablakok',
    },
    {
    photo: 'thumbnails/windows_thumb_02.jpg',
    title: 'Rózsaablak',
    },
    {
    photo: 'thumbnails/windows_thumb_03.jpg',
    title: 'Magasban',
    },
    {
    photo: 'thumbnails/windows_thumb_04.jpg',
    title: 'Szédülés',
    },
    {
    photo: 'thumbnails/windows_thumb_05.jpg',
    title: 'Padok',
    }
]
for (let i = 0; i < thumbs.length; i++)  {
            $('.thumbnails-container').append(`<div class="thumbnail">${thumbs[i].photo}</div>`)
}
thumbs.forEach((photo, index) => {
  $('.thumbnails-container').append(`<div class="thumbnails" thumbs-index="${index}">${photo} (thumbs-index="${index}")</div>`);
  });


 
thumbs.forEach((item, index) => {
  $('.thumbnails').click((event) => {
    let indexClicked = $(event.target).attr('thumbs-index');
    let numberIndex = parseInt(indexClicked);
    $('#clicked').text(thumbs[indexClicked]);
  })

    thumbs.forEach((thumb) => {
    $('.thumbnails-container').attr('src', thumbs.photo);
    $('.thumbnails-title').text(thumbs.title)
})

gallery.forEach ((photo)=> {
    $('.thumbnails-container').attr('src', gallery.photo);

})


gallery.forEach(function (photo) {
	$('.thumbnails-container').append(`<img class"thumbnails">`);
	$('.thumbnails').attr('src', gallery.photo);
})
   */ 

