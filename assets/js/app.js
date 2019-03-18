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
                $("#priceReg").text("$" + prices.travis_wilco.reg);
                $("#priceRush").text("$" + prices.travis_wilco.rush);
                $("#pricePriority").text("$" + prices.travis_wilco.priority);
                $("#priceSameDay").text("$" + prices.travis_wilco.sameday);
                break;

            case "statewide":
                $("#priceReg").text("$" + prices.statewide.reg);
                $("#priceRush").text("$" + prices.statewide.rush);
                $("#pricePriority").text("$" + prices.statewide.priority);
                $("#priceSameDay").text("$" + prices.statewide.sameday);
            break;

            case "nationwide":
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