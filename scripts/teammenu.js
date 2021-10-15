const member_name = document.querySelectorAll('.member__name');

member_name.forEach(item => {

  item.addEventListener ('click', function(event){
    const parentEl = event.target.parentElement.parentElement;
    const memberDesc = parentEl.querySelector('.member__desc');
    const arrow = parentEl.querySelector('.member__name-arrow');
    const memberPhoto = parentEl.querySelector('.member__photo-logo');
    const teamItem = parentEl.querySelector('.team__item');

    if (arrow.classList.contains ('member__name-arrow_rotated')) {
      arrow.classList.remove ('member__name-arrow_rotated');
    } else {
      arrow.classList.add ('member__name-arrow_rotated');
    }

    if (memberDesc.classList.contains ('member__desc_visible')) {
      memberDesc.classList.remove ('member__desc_visible');
    } else {
      memberDesc.classList.add ('member__desc_visible');
    }

    if (memberPhoto.classList.contains ('member__photo-logo_visible')) {
      memberPhoto.classList.remove ('member__photo-logo_visible');
    } else {
      memberPhoto.classList.add ('member__photo-logo_visible');
    }

    if (teamItem.classList.contains ('team__item_visible')) {
      teamItem.classList.remove ('team__item_visible');
    } else {
      teamItem.classList.add ('team__item_visible');
    }
  })
})