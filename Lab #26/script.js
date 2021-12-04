// ============================ [ Task #1 ] ============================
$('.img-box')
    .mouseover(() => {
        $(".image" ).css('opacity', "0");
    })
    .mouseleave(() => {
        $(".image" ).css('opacity', "1");
    })
// =====================================================================

// ============================ [ Task #2 ] ============================
$(".data-table tr").each(function () {
    $('td').each(function () {
        let cellValue = parseInt(this.textContent);

        if (cellValue === 0) {
            $(this).css({
                'background': "#e85858",
                'color': 'white'
            });
        }
    })

})
// =====================================================================

// ============================ [ Task #3 ] ============================
$('.task button')
    .click(() => {
        $('<input type="text"/>').hide().appendTo('.task').show('normal');
    })
// =====================================================================

// ============================ [ Task #4 ] ============================
$('.container')
    .mouseover(() => {
        $('.description').css('opacity', '1')
        $('.description button').click(() => {
            window.open("https://unsplash.com/s/photos/flowers");
        })
    })
    .mouseleave(() => {
        $('.description').css('opacity', '0')
    })
// =====================================================================

// ============================ [ Task #5 ] ============================
let count = 0;
$('input[type="checkbox"]').on("change", function() {
    count = 0;
    $('input[type="checkbox"]:checked').each(function() {
        count += parseFloat($(this).val());
    });
    $('.total-price').val(count);
});
// =====================================================================

// ============================ [ Task #6 ] ============================
$('.content button')
    .click(() => {
        const code = $('#code').val()
        eval(code);
    })
// =====================================================================