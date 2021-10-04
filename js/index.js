var cart = document.getElementById('cart-container')
  function opencart(){
    cart.classList.toggle("show")
  }





  (function(){
    var changeh1 =[
         "find machines and tools near you",
         "quality weldling accessories",
         "Delivered directly to your doorstep"
    ],
    i = 0;
    setInterval(function(){
      $('#changeh1').fadeOut(function(){
        $(this).html(changeh1[( i =(i+1)  % changeh1.length )]).fadeIn() ;    
       })
    }, 3900)
  })();


  (function(){
    var changep =[
         "Explore readily available equipment and power solutions for your applications,supported by our world-class services.",
         "Electrical Accessories and Fittings at great price are available at our Online store.",
         " All of our offerings, no matter how big or small, include the option of delivery to your directly to your doorstep, all over Nigeria"
    ],
    i = 0;
    setInterval(function(){
      $('#changep').fadeOut(function(){
        $(this).html(changep[( i =(i+1)  % changep.length )]).fadeIn() ;    
       })
    }, 3900)
  })();

  (function(){
    var changebtn =[
         "shop now",
         "shop now",
         " read more"
    ],
    i = 0;
    setInterval(function(){
      $('#changebtn').fadeOut(function(){
        $(this).html(changebtn[( i =(i+1)  % changebtn.length )]).fadeIn() ;    
       })
    }, 3900)
  })();



var description = document.getElementById('description-page')
var reviews = document.getElementById('review-page')


 function descrip(){
   description.style.display='block';
   reviews.style.display="none";
 
 }
 function review(){
  description.style.display='none';
  reviews.style.display="block";

}

var welder = document.getElementById('welding')
var electrical = document.getElementById('electrical-supplies')
var power = document.getElementById('power-tools')
var industry = document.getElementById('industrial-machines')
var safety = document.getElementById('safety-supplies')
var measure = document.getElementById('measuring-tools')

function wel(){
  welder.style.display="block"
  electrical.style.display="none"
  power.style.display="none"
  industry.style.display="none"
  safety.style.display="none"
  measure.style.display="none"
}
function ele(){
  welder.style.display="none"
  electrical.style.display="block"
  power.style.display="none"
  industry.style.display="none"
  safety.style.display="none"
  measure.style.display="none"
}
function pow(){
  welder.style.display="none"
  electrical.style.display="none"
  power.style.display="block"
  industry.style.display="none"
  safety.style.display="none"
  measure.style.display="none"
}
function ind(){
  welder.style.display="none"
  electrical.style.display="none"
  power.style.display="none"
  industry.style.display="block"
  safety.style.display="none"
  measure.style.display="none"
}
function safe(){
  welder.style.display="none"
  electrical.style.display="none"
  power.style.display="none"
  industry.style.display="none"
  safety.style.display="block"
  measure.style.display="none"
}
function meas(){
  welder.style.display="none"
  electrical.style.display="none"
  power.style.display="none"
  industry.style.display="none"
  safety.style.display="none"
  measure.style.display="block"
}

function addToCart(){
  var button = document.querySelectorAll(".cart")
  var total = document.querySelector("#cart-total h3 span")
  var count = document.querySelector("#cart-count")

  var ttl_cost = 0;
  for(but of button){
    but.addEventListener('click', (e) => {
      var parent = e.target.parentNode.parentNode.parentNode
      var clone = parent.cloneNode(true)
      cart.appendChild(clone)

      var cost = parseInt(clone.children[2].children[0].children[0].children[0].textContent)
      ttl_cost = ttl_cost + cost

      total.textContent = ttl_cost

      count.textContent = cart.children.length-1
    })
  }
}


addToCart()



  function modal(){
    $('#pop').css('opacity', '1')
  }
 setTimeout(modal, 3000);
 $('.exit').click(function(){
  $('#pop').css('opacity', '0')
 })
