$(document).ready(function(){
 
    // counter plugin
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
    // counter plugin
   
    /**
     * Demo 3
     */
    var bezier = function (t)
    {
        var px = [100.0, 350.0, 500.0, 900.0],
            py = [400.0,  50.0, 500.0, 200.0],
            ax = [px[0], 3.0 * (px[1] - px[0]), 3.0 * (px[2] - 2.0 * px[1] + px[0]), px[3] - 3.0 * px[2] + 3.0 * px[1] - px[0]],
            ay = [py[0], 3.0 * (py[1] - py[0]), 3.0 * (py[2] - 2.0 * py[1] + py[0]), py[3] - 3.0 * py[2] + 3.0 * py[1] - py[0]],
            cx = ax[0] + ax[1] * t + ax[2] * t * t + ax[3] * t * t * t,
            cy = ay[0] + ay[1] * t + ay[2] * t * t + ay[3] * t * t * t;

        return {
            x: cx,
            y: cy
        };
    };

    $('#text3').curvedText({
        curve:    bezier,
        domain:   [0.0, 1.0],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 500.0 }
    });

    $.supermodal();

     $.supermodal({
          lazyLoading:true

       });
   
    $.supermodal({

        backButton:false

      });
    
   


});
new WOW().init();
 var literal = {
    req1: { selector: $('#req1'), required: { message: 'Required Field.' } },
    req2: { selector: $('#req2'), digit: { message: 'Must be a digit.' } },
    req3: { selector: $('#req3'), length: { value: 3, message: 'Only 3 characters are allowed.' } },
    req4: { selector: $('#req4'), from: { value: 3, message: 'At least 3 numbers.' } },
    req5: { selector: $('#req5'), to: { value: 3, message: '3 numbers or less.' } },
    req6: { selector: $('#req6'), range: { value: [5, 10], message: 'From 5 To 10.' } },
    req7: { selector: $('#req7'), email: { message: 'Must be a valid email.' } },
    req8: { selector: $('#req8'), mobile: { message: 'Must be a valid phone number.\nEX) 01012341234' } },
    req9: { selector: $('#req9'), compare: { value: 'test', message: 'Must match the string: text.' } },
    req10: { selector: $('#req10'), date: { message: 'Must be a valid date.\nEX) 2021-01-12' } },
    req11: { selector: $('#req11'), regex: { value: /^[0-9]+$/, message: 'Custom validator using Regext.' } }
};

                var result = $.validate.rules(literal, { mode: 'bootstrap' });
                console.log(result);
