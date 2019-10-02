// $('.lightbox').on('click', function() {

//     var currentImage = $(this).html()

//     $('.modal-content').html(currentImage)

//     $('.modal').fadeIn(500)
//           return false
//   })

//   $('.modal-close, .modal-background').on('click', function() {
//     $('.modal').fadeOut(500)
//         return false
//   })


const lightboxTag = document.querySelectorAll(".lightbox")
const contentTag = document.querySelector(".modal-content")
const modalTag = document.querySelector(".modal")
const closeTag = document.querySelector(".modal-close")
const bgTag = document.querySelector(".modal-background")

lightboxTag.forEach((lightbox) => {
    lightbox.addEventListener("click", () => {

        let currentImage = lightbox.innerHTML
       
        console.log(lightboxTag)

        contentTag.innerHTML = currentImage

        console.log(contentTag)

        modalTag.classList.add('show')
        return false

    })
})

bgTag.addEventListener("click", () => {
    modalTag.classList.remove('show')
    return false
})

closeTag.addEventListener("click", () => {
    modalTag.classList.remove('show')
    return false
})