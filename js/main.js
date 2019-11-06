

$('#addSkill').on('click', function (evt) {
    let skill = $('.addText').val();

     $('ul').append(`<li><button>X</button>  ${skill}</li>`);
    $('.addText').val('');
    
});

$('ul').on('click', 'button', function() {
    $(this).closest('li').remove();
});


