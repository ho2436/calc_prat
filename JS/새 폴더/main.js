var res_hour = document.querySelector('.res_time .s0'),
      res_min = document.querySelector('.res_time .s1'),
      res_sec = document.querySelector('.res_time .s2'),
      res_time = document.querySelector('.res_time');
     
        var now = new Date(); 
        var hour = now.getHours(); 
        var min = now.getMinutes();
        var sec = now.getSeconds(); //console.dir(now)
  

 
console.log(now,hour,min,sec);

//        if(hour < 10){
//        res_hour.innerText('0'+hour+' : ')
//            if(min < 10){
//        res_min.innerText('0'+min+' : ')
//                if(sec < 10){
//        res_sec.innerText('0'+sec)
//        }else{
//        res_sec.innerText(sec)
//        }
//        }else{
//       res_min.innerText(min+' : ');
//        res_sec.innerText(sec)
//        }
//        }else if(min < 10){
//        res_hour.innerText(hour+' : ');  
//           
//        res_min.innerText('0'+min+' : ')   
//           if(sec < 10){
//        res_hour.innerText(hour+' : ');        
//        res_min.innerText(min+' : ');
//        res_sec.innerText('0'+sec)   
//        }else{
//            res_sec.innerText(sec)
//        }
//        }else if(sec < 10){
//        res_hour.innerText(hour+' : ');
//        res_min.innerText(min+' : ');    
//        res_sec.innerText('0'+sec)   
//        }else{
////        res_hour.innerText(hour+' : ');
//        res_hour=(hour+' : ');
//        
////        res_min.innerText(min+' : ');
//        res_min=(min+' : ');
////        res_sec.innerText(sec)
//        res_sec=(sec)
//        }

timecheck()
function timecheck(){
        var now = new Date(); 
        var hour = now.getHours(); 
        var min = now.getMinutes();
        var sec = now.getSeconds(); //console.dir(now)
        
    document.querySelector('.s0').innerText = hour;
    document.querySelector('.s1').innerText = min;
    document.querySelector('.s2').innerText = sec;
 //document.querySelector('span').innerHTML=hr+':'+min+':'+sec;
    
    } 
setInterval(timecheck,500); 
const headerh1img0 = document.querySelector('header h1 img:nth-child(0)'),
      headerh1img1 = document.querySelector('header h1 img:nth-child(1)'),
      bn_cover = document.querySelector('.bn_cover'),
    morningimg = document.querySelector('.bn_cover'),
    p_headspan = document.querySelector('.p_head span'),
    logi_b = document.querySelector('.logi_b'),
    logi_w = document.querySelector('.logi_w'), 
    gnbli = document.querySelector('header .gnb li'),
    snsli = document.querySelector('header .sns li'),
    bn_memop = document.querySelector('.bn_memo p'),
    phone_morning = document.querySelector('.phone_morning'), 
    phone_evening = document.querySelector('.phone_evening'), 
    phone_night = document.querySelector('.phone_night'), 
    phone_afternoon = document.querySelector('.phone_afternoon'), 
      bn_sel = document.querySelector('.bn_sel'), 
//      bn_seldiv = bn_sel.querySelectorAll('div'),
//      bn_seldiv0 = bn_sel.querySelectorAll('div')[0]; 뒤에 저걸 붙여서 순서를 정할수도있다.
      bn_seldiv = bn_sel.querySelectorAll('div');
      
//headerh1img0.classList.add('on').css({'display':'block'});
//headerh1img1.classList.remove('on').css({'display':'none'});

//bn_seldiv[0].addEventListener('click',function(){ 
//              
//              
//              this.classList.toggle('on');
//              bn_seldiv[1].classList.remove('on');
//              bn_seldiv[2].classList.remove('on');
//              bn_seldiv[3].classList.remove('on'); 
//          
//             bn_cover.style.marginLeft = '000%';
//            p_headspan.style.color='black';
//            logi_w.style.opacity = '1';
//            alert(000)
//    
//    });

var styles = [
    {
        phoneMorning : 1,
        phoneEvening : 0,
        phoneNight : 0,
        phoneAfternoon : 0,
        marginLeft : 0,
        logoB:0,
        logoW:1
    },
    
     {
        phoneMorning : 1,
        phoneEvening : 0,
        phoneNight : 0,
        phoneAfternoon : 0,
        marginLeft : 0,
        logoB:0,
        logoW:1
    },
        {
        phoneMorning : 1,
        phoneEvening : 0,
        phoneNight : 0,
        phoneAfternoon : 0,
        marginLeft : 0,
        logoB:0,
        logoW:1
    },
        {
        phoneMorning : 1,
        phoneEvening : 0,
        phoneNight : 0,
        phoneAfternoon : 0,
        marginLeft : 0,
        logoB:0,
        logoW:1
    }
];

앞에 e는 앞에 잡아놓은 div의 인덱스 갯수만큼 돌리겠다.로
i값은 해당 인덱스의 순번에 따라 0번째는 0번째 적은 내용을. 이런식으로 차례차례 들어감을 뜻함.
위에 4개내용을 정의하고 밑에 적용할 양식을 하나 정의하면
각각의 div들에게 이렇게 돌게 된다. 깔끔하게 정리하는 팁!
div.forEach(function(e,i){
    e.addEventListener('click',function(){
         bn_seldiv[0].classList.remove('on');
        bn_seldiv[1].classList.remove('on');
        bn_seldiv[2].classList.remove('on');
        bn_seldiv[3].classList.remove('on'); 
        bn_seldiv[e].classList.add('on');
         
        bn_cover.style.marginLeft = styles[i].marginLeft;
        logi_b.style.opacity = styles[i].logoB; 
        logi_w.style.opacity = styles[i].logoW; 
    
p_headspan.classList.remove('onn')
gnbli.classList.remove('onn')
snsli.classList.remove('onn')
bn_memop.classList.remove('onn')
    phone_morning.style.opacity = '1';  
    phone_evening.style.opacity = '0';  
    phone_night.style.opacity = '0';  
    phone_afternoon.style.opacity = '0';  
    });
});



function temp0(e){
   
        bn_seldiv[0].classList.remove('on');
        bn_seldiv[1].classList.remove('on');
        bn_seldiv[2].classList.remove('on');
        bn_seldiv[3].classList.remove('on'); 
        bn_seldiv[e].classList.add('on');
         
        bn_cover.style.marginLeft = e*'-100%';
        logi_b.style.opacity = calc(1-e*0.25); 
        logi_w.style.opacity = calc(e*0.25); 
    
p_headspan.classList.remove('onn')
gnbli.classList.remove('onn')
snsli.classList.remove('onn')
bn_memop.classList.remove('onn')
    phone_morning.style.opacity = '1';  
    phone_evening.style.opacity = '0';  
    phone_night.style.opacity = '0';  
    phone_afternoon.style.opacity = '0';  
}
bn_seldiv[0].addEventListener('click',function(){ 
              
              
               
              bn_seldiv[1].classList.remove('on');
              bn_seldiv[2].classList.remove('on');
              bn_seldiv[3].classList.remove('on'); 
            this.classList.toggle('on');
             bn_cover.style.marginLeft = '000%';
            
            logi_b.style.opacity = '1'; 
            logi_w.style.opacity = '0'; 
    
p_headspan.classList.remove('onn')
gnbli.classList.remove('onn')
snsli.classList.remove('onn')
bn_memop.classList.remove('onn')
    phone_morning.style.opacity = '1';  
    phone_evening.style.opacity = '0';  
    phone_night.style.opacity = '0';  
    phone_afternoon.style.opacity = '0';  
    
 
    });
bn_seldiv[1].addEventListener('click',function(){ 
              
              
              this.classList.toggle('on');
              bn_seldiv[0].classList.remove('on');
              bn_seldiv[2].classList.remove('on');
              bn_seldiv[3].classList.remove('on'); 
   
            bn_cover.style.marginLeft = '-100%';
            
p_headspan.classList.remove('onn');
gnbli.classList.remove('onn');
snsli.classList.remove('onn');
bn_memop.classList.remove('onn');
            logi_b.style.opacity = '0.75'; 
            logi_w.style.opacity = '0.25'; 
   phone_morning.style.opacity = '0';  
    phone_evening.style.opacity = '0';  
    phone_night.style.opacity = '0';  
    phone_afternoon.style.opacity = '1';   
    });
bn_seldiv[2].addEventListener('click',function(){ 
              
              
              this.classList.toggle('on');
              bn_seldiv[1].classList.remove('on');
              bn_seldiv[0].classList.remove('on');
              bn_seldiv[3].classList.remove('on'); 
   
            bn_cover.style.marginLeft = '-200%';
            
p_headspan.classList.add('onn');
gnbli.classList.add('onn');
snsli.classList.add('onn');
bn_memop.classList.add('onn');
 logi_b.style.opacity = '.25'; 
            logi_w.style.opacity = '.75';     
    phone_morning.style.opacity = '0';  
    phone_evening.style.opacity = '1';  
    phone_night.style.opacity = '0';  
    phone_afternoon.style.opacity = '0';  
    
    });
bn_seldiv[3].addEventListener('click',function(){ 
              
              
              this.classList.toggle('on');
              bn_seldiv[0].classList.remove('on');
              bn_seldiv[1].classList.remove('on');
              bn_seldiv[2].classList.remove('on'); 
   
            bn_cover.style.marginLeft = '-300%';
            
p_headspan.classList.add('onn');
gnbli.classList.add('onn');
snsli.classList.add('onn');
bn_memop.classList.add('onn');
     logi_b.style.opacity = '0'; 
            logi_w.style.opacity = '1'; 
    phone_morning.style.opacity = '0';  
    phone_evening.style.opacity = '0';  
    phone_night.style.opacity = '1';  
    phone_afternoon.style.opacity = '0';  
    
    });




//    
//                  $('header .gnb li').animate({'color':'rgba(0,0,0,0.7);'});
//                  $('header .sns li').animate({'color':'rgba(0,0,0,0.7);'}); 
//                  $('.bn_memo p').animate({'color':'rgba(0,0,0,0.8)'});
//                  $('.logi_b').animate({'opacity':'1'});
//                  $('.phone_morning').animate({'opacity':'1'}).siblings().animate({'opacity':'0'});
                  
//              }
                              
                              
                              
//                              else if(i==1){
//                   
//                   $('.bn_cover').stop().animate({'margin-left':'-100%'},1500,'easeOutCubic',function(){ 
//                        $('.afternoon img').stop().animate({'opacity':'.7','margin-left':'+100%'},15000,'easeInCirc',function(){
//                          $('.afternoon img').css({'opacity':'0','margin-left':'+0'})
//                      }); 
//                      $('.cloud_m img').stop().animate({'opacity':'.7','margin-left':'+100%'},15000,'easeInCirc',function(){
//                          $('.cloud_m img').css({'opacity':'0','margin-left':'+0'})
//                      });
//                  });
//                   $('.p_head span').animate({'color':'black'});
//                  $('header .gnb li').animate({'color':'rgba(0,0,0,0.7);'});
//                  $('header .sns li').animate({'color':'rgba(0,0,0,0.7);'}); 
//                  $('.bn_memo p').animate({'color':'rgba(0,0,0,0.7)'});
//                  $('.logi_b').animate({'opacity':'1'});
//                  $('.phone_afternoon').animate({'opacity':'1'}).siblings().animate({'opacity':'0'})
//              }else if(i==2){
//                   $('.bn_cover').stop().animate({'margin-left':'-200%'},1500,'easeOutCubic',function(){ 
//                       $('.evening img').stop().animate({'opacity':'.7','margin-left':'+100%'},15000,'easeInCirc',function(){
//                          $('.evening img').css({'opacity':'0','margin-left':'+0'})
//                      }); 
//                      $('.cloud_m img').stop().animate({'opacity':'.7','margin-left':'+100%'},15000,'easeInCirc',function(){
//                          $('.cloud_m img').css({'opacity':'0','margin-left':'+0'})
//                      });
//                   });
//                  $('.p_head span').animate({'color':'white'});
//                  $('header .gnb li').animate({'color':'rgba(255,255,255,255.7);'});
//                  $('header .sns li').animate({'color':'rgba(255,255,255,255.7);'});
//                  $('.bn_memo p').animate({'color':'rgba(255,255,255,0.7)'});
//                  $('.logi_b').animate({'opacity':'0'});
//                  $('.phone_evening').animate({'opacity':'1'}).siblings().animate({'opacity':'0'})
//                  
//              }else if(i==3){
//                  $('.bn_cover').stop().animate({'margin-left':'-300%'},1500,'easeOutCubic',function(){ 
//                       $('.night img').stop().animate({'opacity':'.7','margin-left':'+100%'},15000,'easeInCirc',function(){
//                          $('.night img').css({'opacity':'0','margin-left':'+0'})
//                      }); 
//                      $('.cloud_m img').stop().animate({'opacity':'.7','margin-left':'+100%'},15000,'easeInCirc',function(){
//                          $('.cloud_m img').css({'opacity':'0','margin-left':'+0'})
//                      });
//                  });
//                  $('.p_head span').animate({'color':'white'});
//                  $('header .gnb li').animate({'color':'rgba(255,255,255,255.7);'});
//                  $('header .sns li').animate({'color':'rgba(255,255,255,255.7);'});
//                  $('.bn_memo p').animate({'color':'rgba(255,255,255,0.8)'});
//                  $('.logi_b').animate({'opacity':'0'});
//                  $('.phone_night').animate({'opacity':'1'}).siblings().animate({'opacity':'0'})
//              }
//          })