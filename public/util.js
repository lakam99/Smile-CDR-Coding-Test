const fadeOutTime = 50;
const fadeInTime = 30;

function convertTypeToHTMLType (type) {
    if (type == 'boolean') return 'radio';
    if (type == 'choice') return 'select';
    if (type == 'string') return 'text';
    return type;
}

function render_datepickers() {
    var identifier = '[og-type="date"]';
    $('input[type="text"]').toArray().forEach((e)=>{$(e).data('datepicker')?.destroy()});
    var await_dates = setInterval(()=>{
        if ($(identifier).length) {
            clearInterval(await_dates);
            $(identifier).toArray().forEach((date_elem)=>{
                if ($(date_elem).data('datepicker')) return;
                $(date_elem).data('datepicker', new Datepicker(date_elem, {maxDate: new Date()}));
            })
        }
    }, 100)
}

/* Why not use CSS transition for fade transitions?
It doesn't seem to work with React Components */

function fadeOut(elem) {
    return new Promise((resolve)=>{
        var fade = setInterval(()=>{
            if (elem.style.opacity == "") elem.style.opacity = 1; 
            if (elem.style.opacity <= 0) {
                clearInterval(fade);
                resolve(true);
            } else {
                elem.style.opacity -= 0.1;
            }
        }, fadeOutTime);
    })
}

function fadeIn(elem) {
    return new Promise((resolve)=>{
        var fade = setInterval(()=>{
            if (elem.style.opacity == "") elem.style.opacity = 0; 
            if (elem.style.opacity >= 1) {
                clearInterval(fade);
                resolve(true);
            } else {
                elem.style.opacity = Number.parseFloat(elem.style.opacity) + 0.1; //opacity is string, + operator will concat
            }
        }, fadeInTime)
    })
}

function shakeElem(elem) {
    return new Promise((resolve)=>{
        $(elem).addClass('shake');
        setTimeout(()=>$(elem).removeClass('shake'), 820);
    })
}
