

           var x=0;
        var y=0;
            var z=0;
            
            setInterval(function(){
	var dataString = "";
                var dataString2 = "";
                var dataString3 = "";
	$.ajax({
      
				type: "GET",
				url: "http://192.168.195.101/index.php",
				data: dataString,
               	cache: false,
				success: function(data) {
                 x=JSON.parse(data);
                    document.getElementById("fr").innerHTML = x.a;
                    document.getElementById("upt").innerHTML = x.b; 
                  document.getElementById("vol").innerHTML = x.c;
                   if(x.a<46)
              {
                  document.getElementById("finalpipe").style.display="block";
              }
                    else  if(x.a>46)
              {
                  document.getElementById("finalpipe").style.display="none";
              }
               
				},
        
				error: function(data)
				{
					alert("Connect Raspberry");
				}   
		});
            
            
}, 1000);
                   
                            
              
         
    



function openmodal()
{
    document.getElementById("modal").style.display="block";
}
function closemodal()
{
    document.getElementById("modal").style.display="none";
}
function abc()
{
    document.getElementById("modal1").style.display="block";
}
function bcd()
{
    document.getElementById("modal1").style.display="none";
}
function a() {
    document.getElementById("mainpipe1").style.display="block";

    setTimeout(function(){     document.getElementById("sub1in").style.display="block";document.getElementById("circout1").style.backgroundColor="green"; }, 2000);
    
    setTimeout(function(){ document.getElementById("circout12").style.backgroundColor="green";document.getElementById("branch2in").style.display="block"; }, 5000);
    
    setTimeout(function(){ document.getElementById("circout11").style.backgroundColor="green";
document.getElementById("branch1in").style.display="block"; }, 7000);
    
    setTimeout(function(){ 
document.getElementById("circout1").style.backgroundColor="orange";
document.getElementById("circout12").style.backgroundColor="orange";
document.getElementById("circout11").style.backgroundColor="orange";

; }, 10000);
    
    setTimeout(function(){
        document.getElementById("sub4in").style.display="block";
        document.getElementById("circout4").style.backgroundColor="green"; }, 13000);
    
    setTimeout(function(){ document.getElementById("circout15").style.backgroundColor="green";
document.getElementById("branch6in").style.display="block"; }, 16000);
    
    setTimeout(function(){ document.getElementById("circout16").style.backgroundColor="green";
document.getElementById("branch5in").style.display="block"; }, 18000);
    
    setTimeout(function(){ 
document.getElementById("circout4").style.backgroundColor="orange";
document.getElementById("circout15").style.backgroundColor="orange";
document.getElementById("circout16").style.backgroundColor="orange";

; }, 22000);
    
    
     setTimeout(function(){ document.getElementById("circout2").style.backgroundColor="green" }, 25000);
    setTimeout(function(){ document.getElementById("sub2in").style.display="block"
}, 25000);
    
     setTimeout(function(){ document.getElementById("circout3").style.backgroundColor="green" }, 25000);
    setTimeout(function(){ document.getElementById("sub3in").style.display="block"
}, 25000);   
    setTimeout(function(){     

    document.getElementById("branch3in").style.display="block";
    document.getElementById("branch4in").style.display="block";
    document.getElementById("circout13").style.backgroundColor="green";
    document.getElementById("circout14").style.backgroundColor="green";
    
}, 30000);   
    setTimeout(function(){     
    document.getElementById("circout2").style.backgroundColor="orange";
    document.getElementById("circout3").style.backgroundColor="orange";
    document.getElementById("circout13").style.backgroundColor="orange";
    document.getElementById("circout14").style.backgroundColor="orange";
    
}, 35000);   
}
