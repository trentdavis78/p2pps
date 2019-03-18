includeHTML();

$(document).ready(function(){
 
    var prices = {
        travis_wilco: {
            reg: 60,
            rush: 75,
            priority: 90,
            sameday: 110
        },
        statewide: {
            reg: 75,
            rush: 90,
            priority: 105,
            sameday: 125
        },
        nationwide: {
            reg: 90,
            rush: 105,
            priority: 120,
            sameday: 140
        }
    }
    
    $("#travis_wilco").on("click", function(e){
        e.preventDefault();
        priceInit(this.id);
        $(".price-nav__item__link").removeClass("active");
        $("#travis_wilco").addClass("active");
    })
    $("#statewide").on("click", function(e){
        e.preventDefault();
        priceInit(this.id);
        $(".price-nav__item__link").removeClass("active");
        $("#statewide").addClass("active");
    })
    $("#nationwide").on("click", function(e){
        e.preventDefault();
        priceInit(this.id);
        $(".price-nav__item__link").removeClass("active");
        $("#nationwide").addClass("active");
    })
    function priceInit(area) {
        switch (area) {
            case "travis_wilco":
                $(".price-table__row__price--text").removeClass('fadeIn');
                setTimeout(function(){
                    $(".price-table__row__price--text").addClass('fadeIn');
                }, 10);                
                $("#priceReg").text("$" + prices.travis_wilco.reg);
                $("#priceRush").text("$" + prices.travis_wilco.rush);
                $("#pricePriority").text("$" + prices.travis_wilco.priority);
                $("#priceSameDay").text("$" + prices.travis_wilco.sameday);
                break;

            case "statewide":
                $(".price-table__row__price--text").removeClass('fadeIn');
                setTimeout(function(){
                    $(".price-table__row__price--text").addClass('fadeIn');
                }, 10); 
                $("#priceReg").text("$" + prices.statewide.reg);
                $("#priceRush").text("$" + prices.statewide.rush);
                $("#pricePriority").text("$" + prices.statewide.priority);
                $("#priceSameDay").text("$" + prices.statewide.sameday);
            break;

            case "nationwide":
                $(".price-table__row__price--text").removeClass('fadeIn');
                setTimeout(function(){
                    $(".price-table__row__price--text").addClass('fadeIn');
                }, 10); 
                $("#priceReg").text("$" + prices.nationwide.reg);
                $("#priceRush").text("$" + prices.nationwide.rush);
                $("#pricePriority").text("$" + prices.nationwide.priority);
                $("#priceSameDay").text("$" + prices.nationwide.sameday);
            break;
        }       
    }

    function initPriceTables() {
       
        $("#travis_wilco").click();
    }

    initPriceTables();
});

(function ($) {
    'use strict';

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn()
        message.html(response);
        setTimeout(function () {
            message.fadeOut();
        }, 5000);
        
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn()
        message.html(data.responseText);
        setTimeout(function () {
            message.fadeOut(5000);
        }, 5000);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
})(jQuery);