$('.form').submit (e=> {
  e.preventDefault();
  
  const form = $(e.currentTarget);
  const name = form.find("[name='name']");
  const phone = form.find("[name='phone']");
  const comment = form.find("[name='comment']");
  const to = form.find("[name='to']");

  const modal = $("#selectableModal");
  const content = modal.find("[data-selectable=true]");

  //modal.removeClass('error-modal');
  
  [name, phone, comment, to].forEach (field => {
    field.removeClass("input-error");
    if (field.val().trim() == "") {
      field.addClass("input-error");
    }
  });

  const errorFields = form.find(".input-error");

  if (errorFields.length == 0) {

    $.ajax({
      url: 'https://webdev-api.loftschool.com/sendmail',
      method: 'post',
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val(),
      },

      success: data => {
        //console.log (data);
        content.text(data.message);

        $.fancybox.open({
          src: "#selectableModal",
          type:"inline",
         });
      },

      error: data => {
        const message = data.responseJSON.message;
        content.text(message);
        //modal.addClass('error-modal');

        $.fancybox.open({
          src: "#selectableModal",
          type:"inline",
         });
      },
    });
  }
  e.target.reset();
})