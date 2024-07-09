
const text_container = document.getElementById("text-container");

    const colorboxInput = document.getElementById("colorbox");

    const colorchangeBtn = document.getElementById("colorchange");

    const fontsizeInput = document.getElementById("fontsize");

    const italicBtn = document.getElementById("italic");

    const underlineBtn = document.getElementById("underline");

    const boldBtn = document.getElementById("bold");

    const fontList = document.getElementById("list");

    const getstyleBtn = document.getElementById("getstyle");

    const css_props = document.getElementById("css-props");


    colorchangeBtn.addEventListener('click', () => {
        let color = colorboxInput.value;
        text_container.style.color = color;
    });


    fontsizeInput.addEventListener('input', () => {
        let rangeValue = fontsizeInput.value;
        text_container.style.fontSize = rangeValue + "px";
    });

   
    italicBtn.addEventListener('click', () => {
        if (text_container.style.fontStyle == "italic") {
            text_container.style.fontStyle = "normal";
        } else {
            text_container.style.fontStyle = "italic";
        }
    });

    underlineBtn.addEventListener('click', () => {
        if (text_container.style.textDecoration == "underline") {
            text_container.style.textDecoration = "none";
        } else {
            text_container.style.textDecoration = "underline";
        }
    });

    
    boldBtn.addEventListener('click', () => {
        if (text_container.style.fontWeight == "bold") {
            text_container.style.fontWeight = "normal";
        } else {
            text_container.style.fontWeight = "bold";
        }
    });

    fontList.addEventListener('input', () => {
        text_container.style.fontFamily = fontList.value;
    });

    
    document.getElementById('getstyle').addEventListener('click', function () {
        let cssProps = '';
        let textStyles =text_container.style;
        console.log(textStyles)
        for (let i = 0; i < textStyles.length; i++) {
            let prop = textStyles[i];
            let value = textStyles.getPropertyValue(prop);
            if (value) {
                cssProps += prop + ': ' + value + '; ';
            }
        }
        css_props.textContent = cssProps;
    });