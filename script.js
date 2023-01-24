
$(document).ready(function()
{
  const shirts_cost = 24.95;
  const pants_cost = 44.95;
  const shoes_cost = 94.95;
  const jackets_cost = 149.95;
  const hats_cost = 29.95;
  const tax_percentage = 0.08875;
  
  let shirts_in_cart;
  let pants_in_cart;
  let shoes_in_cart;
  let jackets_in_cart;
  let hats_in_cart;
  let total_cart_items; 

  let shirts_subtotal;
  let pants_subtotal;
  let shoes_subtotal;
  let jackets_subtotal;
  let hats_subtotal;
  let subtotal_sum;

  if (isNaN(shirts_in_cart) || (shirts_in_cart == null)) 
  {
    shirts_in_cart = 0;
  }

  if (isNaN(pants_in_cart) || (pants_in_cart == null)) 
  {
    pants_in_cart = 0;
  }

  if (isNaN(shoes_in_cart) || (shoes_in_cart == null)) 
  {
    shoes_in_cart = 0;
  }

  if (isNaN(jackets_in_cart) || (jackets_in_cart == null)) 
  {
    jackets_in_cart = 0;
  }

  if (isNaN(hats_in_cart) || (hats_in_cart == null)) 
  {
    hats_in_cart = 0;
  }

  if (isNaN(total_cart_items) || (total_cart_items == null))  
  {
    total_cart_items = 0;
  }

  if (isNaN(shirts_subtotal) || (shirts_subtotal == null)) 
  {
    shirts_subtotal = 0;
  }

  if (isNaN(pants_subtotal) || (pants_subtotal == null)) 
  {
    pants_subtotal = 0;
  }

  if (isNaN(shoes_subtotal) || (shoes_subtotal == null)) 
  {
    shoes_subtotal = 0;
  }

  if (isNaN(jackets_subtotal) || (jackets_subtotal == null)) 
  {
    jackets_subtotal = 0;
  }

  if (isNaN(hats_subtotal) || (hats_subtotal == null)) 
  {
    hats_subtotal = 0;
  }

  if (sessionStorage.getItem("shirts") != null)
  {
    shirts_in_cart += Number(sessionStorage.getItem("shirts"));
    shirts_in_cart = Number(shirts_in_cart);
  }
  
  if (sessionStorage.getItem("pants") != null)
  {
    pants_in_cart += Number(sessionStorage.getItem("pants"));
    pants_in_cart = Number(pants_in_cart);
  }
  
  if (sessionStorage.getItem("shoes") != null)
  {
    shoes_in_cart += Number(sessionStorage.getItem("shoes"));
    shoes_in_cart = Number(shoes_in_cart);
  }
  
  if (sessionStorage.getItem("jackets") != null)
  {
    jackets_in_cart += Number(sessionStorage.getItem("jackets"));
    jackets_in_cart = Number(jackets_in_cart);
  }
  
  if (sessionStorage.getItem("hats") != null)
  {
    hats_in_cart += Number(sessionStorage.getItem("hats"));
    hats_in_cart = Number(hats_in_cart);
  }

  if (sessionStorage.getItem("total") != null)
  {
    total_cart_items += Number(sessionStorage.getItem("total"));
    total_cart_items = Number(total_cart_items);
  }

  if (Number(sessionStorage.getItem("total")) > 0)
  {
    $("#badge").text(Number(sessionStorage.getItem("total"))).removeClass("hidden");
  }

  //index.html/add to cart/shirts/cart badge--------------------------------------------------------------------------------------
  $("#shirts_submit").click(function()
    {
      let shirts_quantity = Number($("#shirts_quantity").val());
      let confirm_shirts;
      if (shirts_quantity == 1)
      {
        confirm_shirts = confirm("Add " + shirts_quantity + " shirt to your cart?");
      }
      else if (shirts_quantity > 1)
      {
        confirm_shirts = confirm("Add " + shirts_quantity + " shirts to your cart?");
      }

      if (confirm_shirts)
      {
        shirts_in_cart += Number(shirts_quantity);
        $("#shirts_quantity").val("").focus();
        console.log("Shirts: " + shirts_in_cart);
        total_cart_items += Number(shirts_quantity);
        console.log("Total items: " + total_cart_items);


        sessionStorage.setItem("shirts",shirts_in_cart);
        console.log(sessionStorage.getItem("shirts"));

        if (!((isNaN(shirts_in_cart)) || (shirts_in_cart == null)))
        {
          shirts_in_cart += Number(sessionStorage.getItem("shirts"));
        }

        sessionStorage.setItem("total",total_cart_items);
        console.log(sessionStorage.getItem("total"));

        if (!((isNaN(total_cart_items)) || (total_cart_items == null)))  
        {
          total_cart_items = Number(sessionStorage.getItem("total"));
        }
        
        $("#badge").text(total_cart_items).removeClass("hidden");

        //location.reload();
      } 
      
    })

//index.html/add to cart/pants/cart badge--------------------------------------------------------------------------------------
  $("#pants_submit").click(function()
    {
      let pants_quantity = Number($("#pants_quantity").val());
      let confirm_pants;
      if (pants_quantity == 1)
      {
        confirm_pants = confirm("Add " + pants_quantity + " pair of pants to your cart?");
      }
      else if (pants_quantity > 1)
      {
        confirm_pants = confirm("Add " + pants_quantity + " pairs pants to your cart?");
      }  
      
      if (confirm_pants)
      {
        console.log("----------------------");
        console.log(typeof pants_in_cart);
        console.log(typeof Number(pants_quantity));
        console.log(typeof total_cart_items);
        console.log("----------------------");
        pants_in_cart += Number(pants_quantity);
        $("#pants_quantity").val("").focus();
        console.log("Pants " + pants_in_cart);
        total_cart_items += Number(pants_quantity);
        console.log("total items " + total_cart_items);

        sessionStorage.setItem("pants",pants_in_cart);
        console.log(sessionStorage.getItem("pants"));

        if (!((isNaN(pants_in_cart)) || (pants_in_cart == null)))
        {
          pants_in_cart += Number(sessionStorage.getItem("pants"));
        }

        sessionStorage.setItem("total",total_cart_items);
        console.log(typeof sessionStorage.getItem("total"));

        if (!((isNaN(total_cart_items)) || (total_cart_items == null)))  
        {
          total_cart_items = Number(sessionStorage.getItem("total"));
        }
        
        $("#badge").text(total_cart_items).removeClass("hidden");
        //location.reload();
      } 
    })

 //index.html/add to cart/shoes/cart badge--------------------------------------------------------------------------------------
  $("#shoes_submit").click(function()
    {
      let shoes_quantity = Number($("#shoes_quantity").val());
      let confirm_shoes;
      if (shoes_quantity == 1)
      {
        confirm_shoes = confirm("Add " + shoes_quantity + " pair of shoes to your cart?");
      }
      else if (shoes_quantity > 1)
      {
        confirm_shoes = confirm("Add " + shoes_quantity + " pairs shoes to your cart?");
      }
      
      if (confirm_shoes)
      {
        shoes_in_cart += Number(shoes_quantity);
        $("#shoes_quantity").val("").focus();
        console.log("Shoes " + shoes_in_cart);
        total_cart_items += Number(shoes_quantity);
        console.log("total items " + total_cart_items);

        sessionStorage.setItem("shoes",shoes_in_cart);
        console.log(sessionStorage.getItem("shoes"));

        if (!((isNaN(shoes_in_cart)) || (shoes_in_cart == null)))
        {
          shoes_in_cart += Number(sessionStorage.getItem("shoes"));
        }

        sessionStorage.setItem("total",total_cart_items);
        console.log(sessionStorage.getItem("total"));

        if (!((isNaN(total_cart_items)) || (total_cart_items == null)))  
        {
          total_cart_items = Number(sessionStorage.getItem("total"));
        }
        
        $("#badge").text(total_cart_items).removeClass("hidden");

        //location.reload();
      } 
    })

//index.html/add to cart/jackets/cart badge--------------------------------------------------------------------------------------  
  $("#jackets_submit").click(function()
    {
      let jackets_quantity = Number($("#jackets_quantity").val());
      let confirm_jackets;
      if (jackets_quantity == 1)
      {
        confirm_jackets = confirm("Add " + jackets_quantity + " jacket to your cart?");
      }
      else if (jackets_quantity > 1)
      {
        confirm_jackets = confirm("Add " + jackets_quantity + " jackets to your cart?");
      }
    
      if (confirm_jackets)
      {
        jackets_in_cart += Number(jackets_quantity);
        $("#jackets_quantity").val("").focus();
        console.log("Jackets " + jackets_in_cart);
        total_cart_items += Number(jackets_quantity);
        console.log("total items " + total_cart_items);

        sessionStorage.setItem("jackets",jackets_in_cart);
        console.log(sessionStorage.getItem("jackets"));

        if (!((isNaN(jackets_in_cart)) || (jackets_in_cart == null)))
        {
          jackets_in_cart += Number(sessionStorage.getItem("jackets"));
        }

        sessionStorage.setItem("total",total_cart_items);
        console.log(sessionStorage.getItem("total"));

        if (!((isNaN(total_cart_items)) || (total_cart_items == null)))  
        {
          total_cart_items = Number(sessionStorage.getItem("total"));
        }
        
        $("#badge").text(total_cart_items).removeClass("hidden");

        //location.reload();
      } 
    })
  
//index.html/add to cart/hats/cart badge--------------------------------------------------------------------------------------
  $("#hats_submit").click(function()
    {
      let hats_quantity = Number($("#hats_quantity").val());
      let confirm_hats;
      if (hats_quantity == 1)
      {
        confirm_hats = confirm("Add " + hats_quantity + " hat to your cart?");
      }
      else if (hats_quantity > 1)
      {
        confirm_hats = confirm("Add " + hats_quantity + " hats to your cart?");
      }
      
      if (confirm_hats)
      {
        hats_in_cart += Number(hats_quantity);
        $("#hats_quantity").val("").focus();
        console.log("Hats " + hats_in_cart);
        total_cart_items += Number(hats_quantity);
        console.log("total items " + total_cart_items);

        sessionStorage.setItem("hats",hats_in_cart);
        console.log(sessionStorage.getItem("hats"));

        if (!((isNaN(hats_in_cart)) || (hats_in_cart == null)))
        {
          hats_in_cart += Number(sessionStorage.getItem("hats"));
        }

        sessionStorage.setItem("total",total_cart_items);
        console.log(sessionStorage.getItem("total"));

        if (!((isNaN(total_cart_items)) || (total_cart_items == null)))  
        {
          total_cart_items = Number(sessionStorage.getItem("total"));
        }
        
        $("#badge").text(total_cart_items).removeClass("hidden");

        //location.reload();
      } 
    })
//index.html/add all to cart/cart badge--------------------------------------------------------------------------------------
  $("#add_all").click(function()
    {
      let shirts_quantity = Number($("#shirts_quantity").val());
      let pants_quantity = Number($("#pants_quantity").val());
      let shoes_quantity = Number($("#shoes_quantity").val());
      let jackets_quantity = Number($("#jackets_quantity").val());
      let hats_quantity = Number($("#hats_quantity").val());
      let total_quantity = shirts_quantity + pants_quantity + shoes_quantity + jackets_quantity + hats_quantity;
      
      let confirm_all;
      if (total_quantity > 0)
      {
        confirm_all = confirm("Add " + total_quantity + " items to your cart?")
      }  
      
      if (confirm_all)
      {
        shirts_in_cart += Number(shirts_quantity);
        $("#shirts_quantity").val("").focus();
        console.log("Shirts: " + shirts_in_cart);
        total_cart_items += Number(shirts_quantity);
        console.log("Total items: " + total_cart_items);

        pants_in_cart += Number(pants_quantity);
        $("#pants_quantity").val("").focus();
        console.log("Pants " + pants_in_cart);
        total_cart_items += Number(pants_quantity);
        console.log("total items " + total_cart_items);

        shoes_in_cart += Number(shoes_quantity);
        $("#shoes_quantity").val("").focus();
        console.log("Shoes " + shoes_in_cart);
        total_cart_items += Number(shoes_quantity);
        console.log("total items " + total_cart_items);

        jackets_in_cart += Number(jackets_quantity);
        $("#jackets_quantity").val("").focus();
        console.log("Jackets " + jackets_in_cart);
        total_cart_items += Number(jackets_quantity);
        console.log("total items " + total_cart_items);
        
        hats_in_cart += Number(hats_quantity);
        $("#hats_quantity").val("").focus();
        console.log("Hats " + hats_in_cart);
        total_cart_items += Number(hats_quantity);
        console.log("total items " + total_cart_items);

        sessionStorage.setItem("shirts",shirts_in_cart);
        console.log(sessionStorage.getItem("shirts"));

        sessionStorage.setItem("pants",pants_in_cart);
        console.log(sessionStorage.getItem("pants"));

        sessionStorage.setItem("shoes",shoes_in_cart);
        console.log(sessionStorage.getItem("shoes"));

        sessionStorage.setItem("jackets",jackets_in_cart);
        console.log(sessionStorage.getItem("jackets"));

        sessionStorage.setItem("hats",hats_in_cart);
        console.log(sessionStorage.getItem("hats"));

        if (!((isNaN(shirts_in_cart)) || (shirts_in_cart == null)))
        {
          shirts_in_cart += Number(sessionStorage.getItem("shirts"));
        }

        if (!((isNaN(pants_in_cart)) || (pants_in_cart == null)))
        {
          pants_in_cart += Number(sessionStorage.getItem("pants"));
        }

        if (!((isNaN(shoes_in_cart)) || (shoes_in_cart == null)))
        {
          shoes_in_cart += Number(sessionStorage.getItem("shoes"));
        }

        if (!((isNaN(jackets_in_cart)) || (jackets_in_cart == null)))
        {
          jackets_in_cart += Number(sessionStorage.getItem("jackets"));
        }

        if (!((isNaN(hats_in_cart)) || (hats_in_cart == null)))
        {
          hats_in_cart += Number(sessionStorage.getItem("hats"));
        }

        sessionStorage.setItem("total",total_cart_items);
        console.log(sessionStorage.getItem("total"));

        if (!((isNaN(total_cart_items)) || (total_cart_items == null)))  
        {
          total_cart_items = Number(sessionStorage.getItem("total"));
        }

        $("#badge").text(total_cart_items).removeClass("hidden");

        //location.reload();
      } 
    })  

//cart.html/appending items--------------------------------------------------------------------------------------  
  
  if (total_cart_items == 0)
  {  
    $("#cart_empty").removeClass("hidden");
  }
  else
  {
    $("#empty_cart").removeClass("hidden");
    $("#checkout_link").removeClass("hidden");
  }

  if (shirts_in_cart != 0)
  {
    $("#cart_shirts").removeClass("hidden");
    $("#shirts_x_qty").text("x" + shirts_in_cart);
    shirts_subtotal = shirts_in_cart * shirts_cost;
    $("#shirts_subtotal").text(shirts_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  }

  if (pants_in_cart != 0)
  {
    $("#cart_pants").removeClass("hidden");
    $("#pants_x_qty").text("x" + pants_in_cart);
    pants_subtotal = pants_in_cart * pants_cost;
    $("#pants_subtotal").text(pants_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  }

  if (shoes_in_cart != 0)
  {
    $("#cart_shoes").removeClass("hidden");
    $("#shoes_x_qty").text("x" + shoes_in_cart);
    shoes_subtotal = shoes_in_cart * shoes_cost;
    $("#shoes_subtotal").text(shoes_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  }

  if (jackets_in_cart != 0)
  {
    $("#cart_jackets").removeClass("hidden");
    $("#jackets_x_qty").text("x" + jackets_in_cart);
    jackets_subtotal = jackets_in_cart * jackets_cost;
    $("#jackets_subtotal").text(jackets_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  }
  
  if (hats_in_cart != 0)
  {
    $("#cart_hats").removeClass("hidden");
    $("#hats_x_qty").text("x" + hats_in_cart);
    hats_subtotal = hats_in_cart * hats_cost;
    $("#hats_subtotal").text(hats_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  }
  
  subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;

//cart.html/minus--------------------------------------------------------------------------------------

 $("#shirts_minus").click(function()
 {
   if (shirts_in_cart > 0)
   {
     shirts_in_cart -= 1;
     total_cart_items -= 1;
   }
   else
   {
     shirts_in_cart = 0;
     total_cart_items = pants_in_cart + shoes_in_cart + jackets_in_cart + hats_in_cart;
   }
   
   if (shirts_in_cart == 0)
   {
     //$("#cart_shirts").addClass("hidden");
     $("#cart_shirts").fadeOut(1000);
   }

   $("#shirts_x_qty").text("x" + shirts_in_cart);
   shirts_subtotal = shirts_in_cart * shirts_cost;
   $("#shirts_subtotal").text(shirts_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#badge").text(total_cart_items);
   
   sessionStorage.setItem("shirts",shirts_in_cart);
   sessionStorage.setItem("total",total_cart_items);

   if (total_cart_items == 0)
   {
     $("#badge").addClass("hidden");
   }

   subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
   tax = subtotal_sum * tax_percentage;
   wardrobe_total = subtotal_sum + tax;

  if (total_cart_items > 0)
  {
    $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  }
  else
  {
    $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    
    //$("#badge, #bill, #checkout, #empty_cart").addClass("hidden");
    //$("#cart_empty").removeClass("hidden");
    $("#badge, #bill, #checkout, #empty_cart").fadeOut(1000);
    $("#cart_empty").fadeIn(1000);
  }  
  
   //location.reload();  
 }); 

$("#pants_minus").click(function()
 {
   if (pants_in_cart > 0)
   {
     pants_in_cart -= 1;
     total_cart_items -= 1;
   }
   else
   {
     pants_in_cart = 0;
     total_cart_items = shirts_in_cart + shoes_in_cart + jackets_in_cart + hats_in_cart;
   }

   if (pants_in_cart == 0)
   {
     //$("#cart_pants").addClass("hidden");
     $("#cart_pants").fadeOut(1000);
   }

   $("#pants_x_qty").text("x" + pants_in_cart);
   pants_subtotal = pants_in_cart * pants_cost;
   $("#pants_subtotal").text(pants_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#badge").text(total_cart_items);
   
   sessionStorage.setItem("pants",pants_in_cart);
   sessionStorage.setItem("total",total_cart_items);

   if (total_cart_items == 0)
   {
     $("#badge").addClass("hidden");
   }

   subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
   tax = subtotal_sum * tax_percentage;
   wardrobe_total = subtotal_sum + tax;

  if (total_cart_items > 0)
  {
    $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  }
  else
  {
    $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    
    //$("#badge, #bill, #checkout, #empty_cart").addClass("hidden");
    //$("#cart_empty").removeClass("hidden");
    $("#badge, #bill, #checkout, #empty_cart").fadeOut(1000);
    $("#cart_empty").fadeIn(1000);
  }
   
   //location.reload();  
 }); 

 $("#shoes_minus").click(function()
 {
   if (shoes_in_cart > 0)
   {
     shoes_in_cart -= 1;
     total_cart_items -= 1;
   }
   else
   {
     shoes_in_cart = 0;
     total_cart_items = pants_in_cart + shirts_in_cart + jackets_in_cart + hats_in_cart;
   }

   if (shoes_in_cart == 0)
   {
     //$("#cart_shoes").addClass("hidden");
     $("#cart_shoes").fadeOut(1000);
   }

   $("#shoes_x_qty").text("x" + shoes_in_cart);
   shoes_subtotal = shoes_in_cart * shoes_cost;
   $("#shoes_subtotal").text(shoes_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#badge").text(total_cart_items);
   
   sessionStorage.setItem("shoes",shoes_in_cart);
   sessionStorage.setItem("total",total_cart_items);

   if (total_cart_items == 0)
   {
     $("#badge").addClass("hidden");
   }

   subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
   tax = subtotal_sum * tax_percentage;
   wardrobe_total = subtotal_sum + tax;

  if (total_cart_items > 0)
  {
    $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  }
  else
  {
    $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    
    //$("#badge, #bill, #checkout, #empty_cart").addClass("hidden");
    //$("#cart_empty").removeClass("hidden");
    $("#badge, #bill, #checkout, #empty_cart").fadeOut(1000);
    $("#cart_empty").fadeIn(1000);
  }
   
   //location.reload();  
 });  

 $("#jackets_minus").click(function()
 {
   if (jackets_in_cart > 0)
   {
     jackets_in_cart -= 1;
     total_cart_items -= 1;
   }
   else
   {
     jackets_in_cart = 0;
     total_cart_items = pants_in_cart + shoes_in_cart + shirts_in_cart + hats_in_cart;
   }

   if (jackets_in_cart == 0)
   {
     //$("#cart_jackets").addClass("hidden");
     $("#cart_jackets").fadeOut(1000);
   }

   $("#jackets_x_qty").text("x" + jackets_in_cart);
   jackets_subtotal = jackets_in_cart * jackets_cost;
   $("#jackets_subtotal").text(jackets_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#badge").text(total_cart_items);
   
   sessionStorage.setItem("jackets",jackets_in_cart);
   sessionStorage.setItem("total",total_cart_items);

   if (total_cart_items == 0)
   {
     $("#badge").addClass("hidden");
   }

   subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
   tax = subtotal_sum * tax_percentage;
   wardrobe_total = subtotal_sum + tax;

  if (total_cart_items > 0)
  {
    $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  }
  else
  {
    $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    
    //$("#badge, #bill, #checkout, #empty_cart").addClass("hidden");
    //$("#cart_empty").removeClass("hidden");
    $("#badge, #bill, #checkout, #empty_cart").fadeOut(1000);
    $("#cart_empty").fadeIn(1000);
  }
   
   //location.reload();  
 });  

 $("#hats_minus").click(function()
 {
   if (hats_in_cart > 0)
   {
     hats_in_cart -= 1;
     total_cart_items -= 1;
   }
   else
   {
     hats_in_cart = 0;
     total_cart_items = pants_in_cart + shoes_in_cart + jackets_in_cart + shirts_in_cart;
   }

   if (hats_in_cart == 0)
   {
     $("#cart_hats").addClass("hidden");
     $("#cart_hats").fadeOut(1000);
   }

   $("#hats_x_qty").text("x" + hats_in_cart);
   hats_subtotal = hats_in_cart * hats_cost;
   $("#hats_subtotal").text(hats_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#badge").text(total_cart_items);
   
   sessionStorage.setItem("hats",hats_in_cart);
   sessionStorage.setItem("total",total_cart_items);

   if (total_cart_items == 0)
   {
     $("#badge").addClass("hidden");
   }

   subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
   tax = subtotal_sum * tax_percentage;
   wardrobe_total = subtotal_sum + tax;

  if (total_cart_items > 0)
  {
    $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  }
  else
  {
    $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    
    //$("#badge, #bill, #checkout, #empty_cart").addClass("hidden");
    //$("#cart_empty").removeClass("hidden");
    $("#badge, #bill, #checkout, #empty_cart").fadeOut(1000);
    $("#cart_empty").fadeIn(1000);
  }
   
   //location.reload();  
 });  

//cart.html/plus--------------------------------------------------------------------------------------

 $("#shirts_plus").click(function()
 {  
   shirts_in_cart += 1;
   total_cart_items += 1;

   if (shirts_in_cart > 0)
   {
     $("#cart_shirts").fadeIn();
   } 

   $("#shirts_x_qty").text("x" + shirts_in_cart);
   shirts_subtotal = shirts_in_cart * shirts_cost;
   $("#shirts_subtotal").text(shirts_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#badge").text(total_cart_items);
   
   sessionStorage.setItem("shirts",shirts_in_cart);
   sessionStorage.setItem("total",total_cart_items);

   subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
   tax = subtotal_sum * tax_percentage;
   wardrobe_total = subtotal_sum + tax;

   $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   
   //location.reload();  
 }); 

$("#pants_plus").click(function()
 {
   pants_in_cart += 1;
   total_cart_items += 1;

   if (pants_in_cart > 0)
   {
     $("#cart_pants").fadeIn();
   }

   $("#pants_x_qty").text("x" + pants_in_cart);
   pants_subtotal = pants_in_cart * pants_cost;
   $("#pants_subtotal").text(pants_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#badge").text(total_cart_items);
   
   sessionStorage.setItem("pants",pants_in_cart);
   sessionStorage.setItem("total",total_cart_items);

   subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
   tax = subtotal_sum * tax_percentage;
   wardrobe_total = subtotal_sum + tax;

   $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   
   //location.reload();  
 }); 

 $("#shoes_plus").click(function()
 {
   shoes_in_cart += 1;
   total_cart_items += 1;

   if (shoes_in_cart > 0)
   {
     $("#cart_shoes").fadeIn();
   }

   $("#shoes_x_qty").text("x" + shoes_in_cart);
   shoes_subtotal = shoes_in_cart * shoes_cost;
   $("#shoes_subtotal").text(shoes_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#badge").text(total_cart_items);
   
   sessionStorage.setItem("shoes",shoes_in_cart);
   sessionStorage.setItem("total",total_cart_items);

   subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
   tax = subtotal_sum * tax_percentage;
   wardrobe_total = subtotal_sum + tax;

   $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   
   //location.reload();  
 });  

 $("#jackets_plus").click(function()
 {
   jackets_in_cart += 1;
   total_cart_items += 1;

   if (jackets_in_cart > 0)
   {
     $("#cart_jackets").fadeIn();
   }

   $("#jackets_x_qty").text("x" + jackets_in_cart);
   jackets_subtotal = jackets_in_cart * jackets_cost;
   $("#jackets_subtotal").text(jackets_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#badge").text(total_cart_items);
   
   sessionStorage.setItem("jackets",jackets_in_cart);
   sessionStorage.setItem("total",total_cart_items);

   subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
   tax = subtotal_sum * tax_percentage;
   wardrobe_total = subtotal_sum + tax;

   $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   
   //location.reload();  
 });  

 $("#hats_plus").click(function()
 {
   hats_in_cart += 1;
   total_cart_items += 1;

   if (hats_in_cart > 0)
   {
     $("#cart_hats").fadeIn();
   }

   $("#hats_x_qty").text("x" + hats_in_cart);
   hats_subtotal = hats_in_cart * hats_cost;
   $("#hats_subtotal").text(hats_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#badge").text(total_cart_items);
   
   sessionStorage.setItem("hats",hats_in_cart);
   sessionStorage.setItem("total",total_cart_items);

   subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
   tax = subtotal_sum * tax_percentage;
   wardrobe_total = subtotal_sum + tax;

   $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
   
   //location.reload();  
 });  
    
  
//cart.html/clear buttons/empty cart--------------------------------------------------------------------------------------
  
$("#shirts_clear").click(function()
{
  let confirm_shirts_clear = confirm("Are you sure you want to remove all shirts in your cart?");

  if (confirm_shirts_clear)
  {
    shirts_in_cart = 0;
    //$("#cart_shirts").addClass("hidden");
    $("#cart_shirts").fadeOut(1000);
    total_cart_items = shirts_in_cart + pants_in_cart + shoes_in_cart + jackets_in_cart + hats_in_cart;
    $("#badge").text(total_cart_items);

    sessionStorage.setItem("shirts",shirts_in_cart);
    console.log(sessionStorage.getItem("shirts"));

    sessionStorage.setItem("total",total_cart_items);
    console.log(sessionStorage.getItem("total"));

    shirts_subtotal = 0;

    subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
    tax = subtotal_sum * tax_percentage;
    wardrobe_total = subtotal_sum + tax;

    if (total_cart_items > 0)
    {
      $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    }
    else
    {
      $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      
      //$("#badge, #bill, #checkout, #empty_cart").addClass("hidden");
      //$("#cart_empty").removeClass("hidden");
      $("#badge, #bill, #checkout, #empty_cart").fadeOut(1000);
      $("#cart_empty").fadeIn(1000);
    }
    
    //location.reload();
  }
  
})

$("#pants_clear").click(function()
{
  let confirm_pants_clear = confirm("Are you sure you want to remove all pants in your cart?");

  if (confirm_pants_clear)
  {
    pants_in_cart = 0;
    //$("#cart_pants").addClass("hidden");
    $("#cart_pants").fadeOut(1000);
    total_cart_items = shirts_in_cart + pants_in_cart + shoes_in_cart + jackets_in_cart + hats_in_cart;
    $("#badge").text(total_cart_items);

    sessionStorage.setItem("pants",pants_in_cart);
    console.log(sessionStorage.getItem("pants"));

    sessionStorage.setItem("total",total_cart_items);
    console.log(sessionStorage.getItem("total"));

    pants_subtotal = 0;

    subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
    tax = subtotal_sum * tax_percentage;
    wardrobe_total = subtotal_sum + tax;

    if (total_cart_items > 0)
    {
      $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    }
    else
    {
      $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      
      //$("#badge, #bill, #checkout, #empty_cart").addClass("hidden");
      //$("#cart_empty").removeClass("hidden");
      $("#badge, #bill, #checkout, #empty_cart").fadeOut(1000);
      $("#cart_empty").fadeIn(1000);
    }
    
    //location.reload();
  }
})

$("#shoes_clear").click(function()
{
  let confirm_shoes_clear = confirm("Are you sure you want to remove all shoes in your cart?");

  if (confirm_shoes_clear)
  {
    shoes_in_cart = 0;
    //$("#cart_shoes").addClass("hidden");
    $("#cart_shoes").fadeOut(1000);
    total_cart_items = shirts_in_cart + pants_in_cart + shoes_in_cart + jackets_in_cart + hats_in_cart; 
    $("#badge").text(total_cart_items);

    sessionStorage.setItem("shoes",shoes_in_cart);
    console.log(sessionStorage.getItem("shoes"));

    sessionStorage.setItem("total",total_cart_items);
    console.log(sessionStorage.getItem("total"));

    shoes_subtotal = 0;

    subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
    tax = subtotal_sum * tax_percentage;
    wardrobe_total = subtotal_sum + tax;

    if (total_cart_items > 0)
    {
      $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    }
    else
    {
      $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      
      //$("#badge, #bill, #checkout, #empty_cart").addClass("hidden");
      //$("#cart_empty").removeClass("hidden");
      $("#badge, #bill, #checkout, #empty_cart").fadeOut(1000);
      $("#cart_empty").fadeIn(1000);
    }
    
    //location.reload();
  }
})

$("#jackets_clear").click(function()
{
  let confirm_jackets_clear = confirm("Are you sure you want to remove all jackets in your cart?");

  if (confirm_jackets_clear)
  {
    jackets_in_cart = 0;
    //$("#cart_jackets").addClass("hidden");
    $("#cart_jackets").fadeOut(1000);
    total_cart_items = shirts_in_cart + pants_in_cart + shoes_in_cart + jackets_in_cart + hats_in_cart; 
    $("#badge").text(total_cart_items);

    sessionStorage.setItem("jackets", jackets_in_cart);
    console.log(sessionStorage.getItem("jackets"));

    sessionStorage.setItem("total",total_cart_items);
    console.log(sessionStorage.getItem("total"));

    jackets_subtotal = 0;

    subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
    tax = subtotal_sum * tax_percentage;
    wardrobe_total = subtotal_sum + tax;

    if (total_cart_items > 0)
    {
      $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    }
    else
    {
      $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      
      //$("#badge, #bill, #checkout, #empty_cart").addClass("hidden");
      //$("#cart_empty").removeClass("hidden");
      $("#badge, #bill, #checkout, #empty_cart").fadeOut(1000);
      $("#cart_empty").fadeIn(1000);
    }
    
    //location.reload();
  }
})

$("#hats_clear").click(function()
{
  let confirm_hats_clear = confirm("Are you sure you want to remove all hats in your cart?");

  if (confirm_hats_clear)
  {
    hats_in_cart = 0;
    //$("#cart_hats").addClass("hidden");
    $("#cart_hats").fadeOut(1000);
    total_cart_items = shirts_in_cart + pants_in_cart + shoes_in_cart + jackets_in_cart + hats_in_cart;
    $("#badge").text(total_cart_items);

    sessionStorage.setItem("hats",hats_in_cart);
    console.log(sessionStorage.getItem("hats"));

    sessionStorage.setItem("total",total_cart_items);
    console.log(sessionStorage.getItem("total"));

    hats_subtotal = 0;

    subtotal_sum = shirts_subtotal + pants_subtotal + shoes_subtotal + jackets_subtotal + hats_subtotal;
    tax = subtotal_sum * tax_percentage;
    wardrobe_total = subtotal_sum + tax;

    if (total_cart_items > 0)
    {
      $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    }
    else
    {
      $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
      
      //$("#badge, #bill, #checkout, #empty_cart").addClass("hidden");
      //$("#cart_empty").removeClass("hidden");
      $("#badge, #bill, #checkout, #empty_cart").fadeOut(1000);
      $("#cart_empty").fadeIn(1000);
    }
    
    //location.reload();
  }
})  

$("#empty_button").click(function()
{
  let confirm_all_clear = confirm("Are you sure you want to empty your cart?");

  if (confirm_all_clear)
  {
    shirts_in_cart = 0;
    pants_in_cart = 0;
    shoes_in_cart = 0;
    jackets_in_cart = 0;
    hats_in_cart = 0;
    total_cart_items = 0; 

    //$("#cart_shirts, #cart_pants, #cart_shoes, #cart_jackets, #cart_hats").addClass("hidden");
    $("#cart_shirts, #cart_pants, #cart_shoes, #cart_jackets, #cart_hats").fadeOut(1000);
    
    //$("#badge, #bill, #checkout, #empty_cart").addClass("hidden");
    //$("#cart_empty").removeClass("hidden");
    $("#badge, #bill, #checkout, #empty_cart").fadeOut(1000);
    $("#cart_empty").fadeIn(1000);

    sessionStorage.setItem("shirts",shirts_in_cart);
    console.log(sessionStorage.getItem("shirts"));
    
    sessionStorage.setItem("pants",pants_in_cart);
    console.log(sessionStorage.getItem("pants"));
    
    sessionStorage.setItem("shoes",shoes_in_cart);
    console.log(sessionStorage.getItem("shoes"));

    sessionStorage.setItem("jackets", jackets_in_cart);
    console.log(sessionStorage.getItem("jackets"));

    sessionStorage.setItem("hats",hats_in_cart);
    console.log(sessionStorage.getItem("hats"));

    sessionStorage.setItem("total",total_cart_items);
    console.log(sessionStorage.getItem("total"));
    
    //location.reload();
  }
})  
  
//cart.html/HTML bill string/bill--------------------------------------------------------------------------------------  

  let tax = subtotal_sum * tax_percentage;

  let wardrobe_total = subtotal_sum + tax;

  if (total_cart_items > 0)
  {
    $("#bill").removeClass("hidden");
    $("#bill_subtotal").text(subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_tax").text(tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#bill_total").text(wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  }
  
  
//--------------------------------------------------------------------------------------  
  console.log("shirts: " + shirts_in_cart);
  console.log("pants: " + pants_in_cart);
  console.log("shoes: " + shoes_in_cart);
  console.log("jackets: " + jackets_in_cart);
  console.log("hats: " + hats_in_cart);
  console.log("total items: " + total_cart_items);
  console.log("-----------------------");
  console.log("shirts: " + shirts_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  console.log("pants: " + pants_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  console.log("shoes: " + shoes_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  console.log("jackets: " + jackets_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  console.log("hats: " + hats_subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  console.log("subtotal: " + subtotal_sum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  console.log("tax: " + tax.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  console.log("total: " + wardrobe_total.toLocaleString("en-US", {style: "currency", currency: "USD"}));
  
//--------------------------------------------------------------------------------------  

  
});

