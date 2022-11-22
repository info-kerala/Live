const loaderContainer = document.querySelector('.loader-container');

window.addEventListener('load', () => {
  loaderContainer.style.display = 'none';
});


//POP UP START

$(function() {
  $('.play-1, .play-2, .play-3, .play-4, .play-5, .play-6, .play-7, .play-8, .play-9, .play-10, .play-11, .play-12, .play-13, .play-14, .play-15').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 0,
      preloader: false,
      fixedContentPos: false
  });
});

//POP UP END


//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}

//fullscreen image preview function
//selecting all required elements


var imageLibrary = [
  {'dt': '20221121', 'src': 'team-logo/Senegal_vs_Netherlands.jpg' }, 
  {'dt': '20221122', 'src': 'https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1920/-/0/65/63/da665da0675b11eda82fc3fdb6af0de0_1668860968058_l_medium.jpg' }, 
  {'dt': '20221123', 'src': '' }, 
  {'dt': '20221124', 'src': '' },
  {'dt': '20221125', 'src': '' }, 
  {'dt': '20221126', 'src': '' },
  {'dt': '20221127', 'src': '' }, 
  {'dt': '20221128', 'src': '' },
  {'dt': '20221129', 'src': '' }, 
  {'dt': '20221130', 'src': '' },
  {'dt': '20221201', 'src': '' },
  {'dt': '20221202', 'src': '' },
  {'dt': '20221203', 'src': '' },
  {'dt': '20221204', 'src': '' },
  {'dt': '20221205', 'src': '' },
  {'dt': '20221206', 'src': '' }
], 
showImage, img, today = new Date(), search, 
d = today.getDate().toString(), 
m = (today.getMonth() + 1).toString(), 
y = today.getFullYear().toString()
;
search = y + (m[1] ? m : "0" + m[0]) + (d[1] ? d : "0" + d[0]);
showImage = imageLibrary.filter(function(obj) { return (obj.dt === search); });
img = document.createElement('img');
img.src = showImage[0].src;
document.getElementById('slidy').appendChild(img);

var imageLibrary = [
  {'dt': '20221121', 'src': 'team-logo/Senegal_vs_Netherlands.jpg' }, 
  {'dt': '20221122', 'src': 'team-logo/argentina_vs_saudi_arabia.jpg' }, 
  {'dt': '20221123', 'src': '' }, 
  {'dt': '20221124', 'src': '' },
  {'dt': '20221125', 'src': '' }, 
  {'dt': '20221126', 'src': '' },
  {'dt': '20221127', 'src': '' }, 
  {'dt': '20221128', 'src': '' },
  {'dt': '20221129', 'src': '' }, 
  {'dt': '20221130', 'src': '' },
  {'dt': '20221201', 'src': '' },
  {'dt': '20221202', 'src': '' },
  {'dt': '20221203', 'src': '' },
  {'dt': '20221204', 'src': '' },
  {'dt': '20221205', 'src': '' },
  {'dt': '20221206', 'src': '' }
], 
showImage, img, today = new Date(), search, 
d = today.getDate().toString(), 
m = (today.getMonth() + 1).toString(), 
y = today.getFullYear().toString()
;
search = y + (m[1] ? m : "0" + m[0]) + (d[1] ? d : "0" + d[0]);
showImage = imageLibrary.filter(function(obj) { return (obj.dt === search); });
img = document.createElement('img');
img.src = showImage[0].src;
document.getElementById('slidy').appendChild(img);

var imageLibrary = [
  {'dt': '20221121', 'src': 'team-logo/Senegal_vs_Netherlands.jpg' }, 
  {'dt': '20221122', 'src': 'https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1920/-/0/91/78/9211d1e0698d11ed92d557190da430d2_1669057063547_l_medium.jpg' }, 
  {'dt': '20221123', 'src': '' }, 
  {'dt': '20221124', 'src': '' },
  {'dt': '20221125', 'src': '' }, 
  {'dt': '20221126', 'src': '' },
  {'dt': '20221127', 'src': '' }, 
  {'dt': '20221128', 'src': '' },
  {'dt': '20221129', 'src': '' }, 
  {'dt': '20221130', 'src': '' },
  {'dt': '20221201', 'src': '' },
  {'dt': '20221202', 'src': '' },
  {'dt': '20221203', 'src': '' },
  {'dt': '20221204', 'src': '' },
  {'dt': '20221205', 'src': '' },
  {'dt': '20221206', 'src': '' }
], 
showImage, img, today = new Date(), search, 
d = today.getDate().toString(), 
m = (today.getMonth() + 1).toString(), 
y = today.getFullYear().toString()
;
search = y + (m[1] ? m : "0" + m[0]) + (d[1] ? d : "0" + d[0]);
showImage = imageLibrary.filter(function(obj) { return (obj.dt === search); });
img = document.createElement('img');
img.src = showImage[0].src;
document.getElementById('slidy').appendChild(img);



document.addEventListener('contextmenu', event => event.preventDefault());





    /* user defined variables */
    var timeOnSlide = 3, 		
    // the time each image will remain static on the screen, measured in seconds
    timeBetweenSlides = 1, 	
    // the time taken to transition between images, measured in seconds
    
    // test if the browser supports animation, and if it needs a vendor prefix to do so
    animationstring = 'animation',
    animation = false,
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O Khtml'.split(' '), 
    // array of possible vendor prefixes
    pfx  = '',
    slidy = document.getElementById("slidy"); 
    if (slidy.style.animationName !== undefined) { animation = true; } 
    // browser supports keyframe animation w/o prefixes
    
    if( animation === false ) {
    for( var i = 0; i < domPrefixes.length; i++ ) {
    if( slidy.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
      pfx = domPrefixes[ i ];
      animationstring = pfx + 'Animation';
      keyframeprefix = '-' + pfx.toLowerCase() + '-';
      animation = true;
      break;
    }
    }
    }
    
    if( animation === false ) {
    // animate in JavaScript fallback
    } else {
    var images = slidy.getElementsByTagName("img"),
      firstImg = images[0], 
      // get the first image inside the "slidy" element.
      imgWrap = firstImg.cloneNode(false);  // copy it.
    slidy.appendChild(imgWrap); // add the clone to the end of the images
    var imgCount = images.length, // count the number of images in the slide, including the new cloned element
      totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
      slideRatio = (timeOnSlide / totalTime)*100, // determine the percentage of time an induvidual image is held static during the animation
      moveRatio = (timeBetweenSlides / totalTime)*100, // determine the percentage of time for an individual movement
      basePercentage = 100/imgCount, // work out how wide each image should be in the slidy, as a percentage.
      position = 0, // set the initial position of the slidy element
      css = document.createElement("style"); // start marking a new style sheet
    css.type = "text/css";
    css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n"; // set the width for the slidy container
    css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
    css.innerHTML += "@"+keyframeprefix+"keyframes slidy {\n"; 
    for (i=0;i<(imgCount-1); i++) { // 
    position+= slideRatio; // make the keyframe the position of the image
    css.innerHTML += position+"% { left: -"+(i * 100)+"%; }\n";
    position += moveRatio; // make the postion for the _next_ slide
    css.innerHTML += position+"% { left: -"+((i+1) * 100)+"%; }\n";
    }
    css.innerHTML += "}\n";
    css.innerHTML += "#slidy { left: 0%; "+keyframeprefix+"transform: translate3d(0,0,0); "+keyframeprefix+"animation: "+totalTime+"s slidy infinite; }\n"; // call on the completed keyframe animation sequence
    document.body.appendChild(css); // add the new stylesheet to the end of the document
    }
