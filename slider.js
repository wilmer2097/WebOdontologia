$("#slider").on("input change", (e)=>{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $('.foreground-img').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
  });

  $("#slider1").on("input change", (e)=>{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $('.foreground-img1').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.slider-button1').css('left', `calc(${sliderPos}% - 18px)`)
  });

  $("#slider2").on("input change", (e)=>{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $('.foreground-img2').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.slider-button2').css('left', `calc(${sliderPos}% - 18px)`)
  });

  $("#slider3").on("input change", (e)=>{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $('.foreground-img3').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.slider-button3').css('left', `calc(${sliderPos}% - 18px)`)
  });

  $("#slider4").on("input change", (e)=>{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $('.foreground-img4').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.slider-button4').css('left', `calc(${sliderPos}% - 18px)`)
  });

  $("#slider5").on("input change", (e)=>{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $('.foreground-img5').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.slider-button5').css('left', `calc(${sliderPos}% - 18px)`)
  });