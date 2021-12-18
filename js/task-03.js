const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
const listGalleryNode = document.querySelector('.gallery')

const galleryAdd = () => {
    const galleryReturn = images.map((image) => {

            return `<li class="img"><img src="${image.url}" alt="${image.alt}" width="1600px"></li>`

        })
        .join("")

    console.log(listGalleryNode)

    listGalleryNode.style.display = "flex"
    listGalleryNode.style.alignItems = "center";
    listGalleryNode.style.alignContent = "center";
    listGalleryNode.style.justifyContent = "center";
    listGalleryNode.style.flexDirection = "column";
    listGalleryNode.style.flexWrap = "wrap"
    listGalleryNode.style.width = "auto";



    listGalleryNode.insertAdjacentHTML('afterbegin', galleryReturn)

}
galleryAdd();