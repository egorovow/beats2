const openItem = item => {

  const container = item.closest ('.team__item');
  const contentBlock = container.find ('.member__desc');
  const textBlock = contentBlock.find ('.member__desc-block');
  const reqHeight = textBlock.height ();

  //const blockArrow = container.find ('.member__name-arrow');

  container.addClass ('active');
  contentBlock.height (reqHeight);  
}

const closeEveryItem = container => {
  const items = container.find ('.member__desc');
  const itemContainer = container.find ('.team__item');
  const itemArrow = container.find ('.member__name-arrow');

  itemContainer.removeClass ('active');
  itemArrow.removeClass ('member__name-arrow_rotated');
  items.height(0);
};

$('.member__name').click(e => {
  const $this = $(e.currentTarget);
  const container = $this.closest('.team__list');
  const elemContainer = $this.closest('.team__item');
  //const elemArrow = $this.closest('.member__name-arrow');

  if (elemContainer.hasClass('active')) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem ($this);
  }

  
});

const member_name = document.querySelectorAll('.member__name');

 member_name.forEach (item => {

   item.addEventListener ('click', function(event){
     const parentEl = event.target.parentElement.parentElement;
     const arrow = parentEl.querySelector('.member__name-arrow');

     if (arrow.classList.contains ('member__name-arrow_rotated')) {
       arrow.classList.remove ('member__name-arrow_rotated');
     } else {
       arrow.classList.add ('member__name-arrow_rotated');
     }
});

 })


// const member_name = document.querySelectorAll('.member__name');

// member_name.forEach(item => {

//   item.addEventListener ('click', function(event){
//     const parentEl = event.target.parentElement.parentElement;
//     const memberDesc = parentEl.querySelector('.member__desc');
//     const arrow = parentEl.querySelector('.member__name-arrow');
//     const memberPhoto = parentEl.querySelector('.member__photo-logo');
//     const teamItem = parentEl.querySelector('.team__item');

//     if (arrow.classList.contains ('member__name-arrow_rotated')) {
//       arrow.classList.remove ('member__name-arrow_rotated');
//     } else {
//       arrow.classList.add ('member__name-arrow_rotated');
//     }

//     if (memberDesc.classList.contains ('member__desc_visible')) {
//       memberDesc.classList.remove ('member__desc_visible');
//     } else {
//       memberDesc.classList.add ('member__desc_visible');
//     }

//     if (memberPhoto.classList.contains ('member__photo-logo_visible')) {
//       memberPhoto.classList.remove ('member__photo-logo_visible');
//     } else {
//       memberPhoto.classList.add ('member__photo-logo_visible');
//     }

//     if (teamItem.classList.contains ('team__item_visible')) {
//       teamItem.classList.remove ('team__item_visible');
//     } else {
//       teamItem.classList.add ('team__item_visible');
//     }
//   })
// })
