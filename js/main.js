// JQ
// $(function() {

// })
// JS
$(window).on('load', function() {
  $(function() {
    // 生日
    $.ms_DatePicker({
      YearSelector: '.sel_year',
      MonthSelector: '.sel_month',
      DaySelector: '.sel_day'
    })
    $.ms_DatePicker()

    // 地址
    new TwCitySelector({
      el: '.my-selector-c',
      elCounty: '.county', // 在 el 裡查找 dom
      elDistrict: '.district', // 在 el 裡查找 dom
      elZipcode: '.zipcode' // 在 el 裡查找 dom
    })
  })
  ;(function() {
    //設定捲軸大於300px才顯示GOTOP
    $(window).scroll(function() {
      if (jQuery(this).scrollTop() > 300) {
        jQuery('#gotop').addClass('ishow')
      } else {
        jQuery('#gotop').removeClass('ishow')
      }
    })
    $('#gotop').click(function() {
      jQuery('html,body')
        .stop(true, false)
        .animate({ scrollTop: 0 }, 700) //設定回頁面頂端
      return false
    })

    // 漢堡線功能
    document.querySelector('#menuBtn').addEventListener('click', e => {
      document.querySelector('html').classList.toggle('active')
    })

    document.querySelector('.mask').addEventListener('click', e => {
      document.querySelector('html').classList.toggle('active')
    })

    // 開關user的下拉功能Bar

    $('.user_name >a').on('click',function(){
      document.querySelector('.user_name >a').classList.toggle('active')
      document.querySelector('.user_more').classList.toggle('active')
    })

    document.querySelector('main').addEventListener('click', e => {
      if ($('.user_more').attr('class') ==='user_more active') {
        document.querySelector('.user_name >a').classList.toggle('active')
        document.querySelector('.user_more').classList.toggle('active')
      }
    })



    // 浮層打開關
    $('#Courier').on('click', function() {
      overflow()
      $('.popu_courier').toggleClass('ishow')

    })
    $('#Plambox_Service,#agreePalmbox').on('click', function() {
      overflow()
      $('.popu_palmbox_service').toggleClass('ishow')
    })
    $('#agreelogistics').on('click', function () {
      overflow()
      $('.logisticscompany').toggleClass('ishow')
    })

    $('#agree').on('click', function() {
      overflow()
      $('.popu_palmbox_service').toggleClass('ishow')
    })

    $('.popu >table:nth-child(1) td').on('click', function() {
      overflow()
      $('.popu_table_tr').toggleClass('ishow')
    })

    $('.containerbox .item').on('click', function() {
      overflow()
      $('.popu_order').toggleClass('ishow')
    })

    $('.modifybt').on('click', function () {
      overflow()
      $('.popu_modify').toggleClass('ishow')
    })

    $('.modal-content .closeclose ').on('click', function () {
      let poputhis = $(this).parents('.openclose').parent('div')
      closeclose(poputhis)
    })    


    // 關閉共用function
    function closeclose(res) {
      $('html body').css('overflow-y', 'inherit')
      res.toggleClass('ishow')
    }
    
    // 關掉html | body 捲軸
    function overflow(res) {
      $('html body').css('overflow-y', 'hidden')
    }
    
    // 登入 | 註冊 | 忘記密碼切換
    $('.login > a').on('click', function() {
      $(this).addClass('active').parent('div').siblings('.register').find('a').removeClass('active')
      $('.loginbox').css('display', 'block').siblings('.registerbox').css('display', 'none')
    })
    $('.register > a').on('click', function() {
      $(this).addClass('active').parent('div').siblings('.login').find('a').removeClass('active')
      $('.registerbox').css('display', 'block').siblings('.loginbox').css('display', 'none')
    })

    $('#forget').on('click', function() {
      $('.itembox2').css('display', 'block').siblings('.itembox1').css('display', 'none')
    })

    // 配送進度查詢配送中和未取件按鈕功能
    $('.deliverytop .togglebut a').on('click', function() {
      let index = $(this).index()
      $(this).addClass('active').siblings('a').removeClass('active')
      if (index === 0) {
        $('#unfetched').css('display', 'flex')
        $('#distribution').css('display', 'none')
      } else {
        $('#unfetched').css('display', 'none')
        $('#distribution').css('display', 'flex')
      }
    })

    // 快遞員派件紀錄查詢
    $('.featuresbox .togglebut a').on('click', function() {
      $(this).addClass('active').siblings('a').removeClass('active')
    })

    // 發票收據按鈕
    $('.etickettop #nameinfo').html('發票')
    $('.etickettop .featuresbox a').on('click',function(){
      let ebutindex = $(this).index()
      if ( ebutindex === 0) {
        $('.invoice').css('display', 'block')
        $('.receipt').css('display', 'none')
        $('.etickettop #nameinfo').html('發票')
      } else {
        $('.invoice').css('display', 'none')
        $('.receipt').css('display', 'block')  
        $('.etickettop #nameinfo').html('收據')      
      }
    })

    // 會員使用者狀態切換
    $('.click_bt a').on('click', function() {
      let indexa = $(this).index()
      let click_box_d = $('.click_box > div')
      $(this).addClass('active').siblings('a').removeClass('active')
      click_box_d.eq(indexa).css('display', 'block').siblings('div').css('display', 'none')
    })

    //表格陰影
    let tr_num, tablethis, tablenum
    let table = $('.popu >table')

    table.find('tr').hover(function() {
        // over
        tablenum = $(this).parents('table').index()
        tablethis = $(this)
        tr_num = $(this).index()
        addmouse(tablenum,tablethis, tr_num)
      
      }, function() {
        // out
        table.find('tr').removeClass('mousetouch') 
      })

    function addmouse(tablenum, tablethis, tr_num) {
      if (tablenum == 0 && tr_num > 0) {
        tablethis.addClass('mousetouch')
        // table.eq(1).find('tr').eq(tr_num).addClass('mousetouch')
        tablethis.parents('table').siblings('table').find('tr').eq(tr_num).addClass('mousetouch')

      } else if (tablenum == 1 && tr_num > 0){
        tablethis.addClass('mousetouch')
        // table.eq(0).find('tr').eq(tr_num).addClass('mousetouch')
        tablethis.parents('table').siblings('table').find('tr').eq(tr_num).addClass('mousetouch')

      }

    }

    // 複製訂單連結
    $('.copy').on('click',function () {
      let textArea = document.createElement("textarea");
      textArea.value = $(this).prev('input').val()
      textArea.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("Copy");
      textArea.remove();
      document.execCommand("Copy")

      alert('已複製訂單連結於您的剪貼簿\n請傳送給您的客戶進行填單')
      return false 
    })


    //立即歸戶alert
    $('.e_invoice >a ,.eticket_but >input').on('click', function() {
      if (confirm('確認是否要進行電子發票歸戶？')) {
      } else {
      }
    })

    // 產品服務按鈕切換
    $('.productoggle li').on('click',function(){
      let li_index = $(this).index()
      let tabarry= $('.productab .tab')

      $(this).find('a').addClass('active').parents('li').siblings().find('a').removeClass('active');
      tabarry.eq(li_index).show().siblings().hide();
      
    })

    $('.cabinetorderinfo .ordertoggle a').on('click',function(){
      $(this).addClass('active').siblings('a').removeClass('active')
      let ordertoggleindex = $(this).index()
      if (ordertoggleindex === 0) {
        $('.cabinetorderinfo .one_order').show().siblings('.more_order').hide()
        $('.neworder').show()
        $('.checkmoney .single').show()
        $('.checkmoney .batch').hide()
      } else {
        $('.cabinetorderinfo .more_order').show().siblings('.one_order').hide()
        $('.neworder').hide()
        $('.checkmoney .single').hide()
        $('.checkmoney .batch').show()
      }
    })


    // 櫃機條件篩選開關
    $('.cabinetfilter .arrow .filter,.filterbox .checkbut a').on('click', function() {
      $('.cabinetfilter .arrow .filterbox').toggleClass('active')
      $(this).parents('.arrow').toggleClass('active')
    })

    // 判斷櫃取還是宅配
    $('.pick_method .form__radio label').on('click', function () {
      let pickname = $(this).html()
      if (pickname == '宅配') {
        $(this).parents('.orderselect').find('.logistics_method,.home_address').css('display', 'block')
        $(this).parents('.orderselect').find('.cabinet_address').css('display', 'none')
      } else {
        $(this).parents('.orderselect').find('.logistics_method,.home_address').css('display', 'none')
        $(this).parents('.orderselect').find('.cabinet_address').css('display', 'block')
      }
    })

    // 判斷是否代收
    // $('.collection .form__radio label').on('click', function () {
    //   let collectioname = $(this).html()
    //   if (collectioname =='是') {
    //     $('.collection_amount').css('display', 'block')
    //   } else {
    //     $('.collection_amount').css('display', 'none')
    //   }
    // })


    // 發票資訊
    // $('.invoice_radio label').on('click',function(){
    //   let label_name = $(this).html()
    //   if (label_name == '個人電子發票') {
    //     $(this).parents('.orderselect').find('.member_vehicle').show().siblings('div').hide()
    //   } else if(label_name == '捐贈發票') {
    //     $(this).parents('.orderselect').find('.donate_text').show().siblings('div').hide()
    //   }else{
    //     $(this).parents('.orderselect').find('.triple_text').show().siblings('div').hide()
    //   }
    // })
    // 個人電子發票切換
    $('.vehicle_toggle a').on('click',function () {
      // let a_index = $(this).index()
      $(this).removeClass('active').siblings('a').addClass('active')
      // $(this).parent('.vehicle_toggle').siblings('.vehicle_text').find('div').eq(a_index).fadeIn(0).siblings().fadeOut(0)
    })

    // 我的常用櫃點下拉區塊
    $('.myusual .arrow > p').on('click',function(){
      $(this).parents('.arrow').toggleClass('active')
      $(this).siblings('.filterbox').toggleClass('active')
      $(this).parents('.mapquerycontainer').find('.blackblack').toggleClass('active')
    })

    $('.datacheck button').on('click',function(){
      $(this).parents('.arrow').toggleClass('active')
      $(this).parents('.filterbox').toggleClass('active')
      $(this).parents('.mapquerycontainer').find('.blackblack').toggleClass('active')
    })

    $('.arrow select').on('click',function(){
      $(this).parents('.arrow').toggleClass('active')
    })


    $('.issue h3').on('click',function(){
      $(this).parent('div').toggleClass('active').siblings().removeClass('active').find('h3').removeClass('green orange')
      $(this).parents('.issue').siblings().find('div').removeClass('active').find('h3').removeClass('green orange')
      let issueindex = $(this).parents('.issue').index()
      if (issueindex == 0 | issueindex == 2) {
        $(this).toggleClass('green')
      }else{
        $(this).toggleClass('orange')
      }
    })

    // 判斷常見問答長度開關
    issuelength()
    function issuelength() {
      for (let index = 0; index <= 4; index++) {
        let h3length = $('.issuebox .issue').eq(index).find('h3')
        let expand = $('.issuebox .issue').eq(index).find('.expand_more')

        if (expand.attr('class') === 'expand_more activea') {
          expand.toggleClass('activea').html('<span></span>展開更多')
        }
        if (h3length.length > 4) {
          for (let index1 = 4; index1 < h3length.length; index1++) {
            h3length.eq(index1).attr('class', '').parent('div').attr('class', '').hide()
          }
        }
      }
    }

    // 展開更多和收合
    $('.expand_more').on('click', function() {
      let a_class = $(this).attr('class')
      if (a_class === 'expand_more') {
        $(this).toggleClass('activea').html('<span></span>收合')
        $(this).siblings('div').show()
      } else {
        // $(this).toggleClass('activea').html('<span></span>展開更多')
        issuelength()
      }
    })

    // 判斷最新消息內文字數>125 加more
      let $len = 150; // 超過125個字以"..."取代
      $('.newcontainer .list p').each(function () {
        if ($(this).text().length > $len) {
          let $text = $(this).text().substring(0, $len - 1) + "...more";
          $(this).text($text);
        }
      });
      
    // 判斷首頁最新消息字數>10 加more
      let $lens = 10; // 超過125個字以"..."取代
      $('.hotbox .marquee a').each(function () {
        if ($(this).text().length > $lens) {
          let $text = $(this).text().substring(0, $lens - 1) + "...more";
          $(this).text($text);
        }
      });

      // 首頁最新消息跑馬燈
      let $marqueeUl = $('.hotbox .marquee ul'),
        $marqueeli = $marqueeUl.append($marqueeUl.html()).children(),
        _height = $('.hotbox .marquee').height() * -1,
        scrollSpeed = 600,
        timer,
        speed = 2000 + scrollSpeed
    
        $marqueeli.hover(function () {
          clearTimeout(timer);
        }, function () {
          timer = setTimeout(showad, speed);
        });
        
        // 控制跑馬燈移動的處理函式
        function showad() {
          let _now = $marqueeUl.position().top / _height
          
          _now = (_now + 1) % $marqueeli.length;
          // $marqueeUl 移動
          $marqueeUl.animate({
            top: _now * _height
          }, scrollSpeed, function () {
            // 如果已經移動到第二組時...則馬上把 top 設 0 來回到第一組
            // 藉此產生不間斷的輪播
            if (_now == $marqueeli.length / 2) {
              $marqueeUl.css('top', 0);
            }
          });

          // 再啟動計時器
          timer = setTimeout(showad, speed);

        }

        // 啟動計時器
        timer = setTimeout(showad, speed);

        // 捲軸到配送進度櫃機圖出現      
        // $(window).scroll(function () {

        //   let bannerH = $('.navbanner').outerHeight(true) / 1.2

        //   if ($(window).scrollTop() > bannerH) {

        //   } else {
        //     var percent = $(window).scrollTop() / bannerH
        //     if (percent > 1) percent = 1

        //     $('.containerLeft').css({
        //       // opacity: percent,
        //       'background-position-x': percent * 600 - 600 + 'px'
        //     })
        //   }

        //   // 440~800
        //   if ($(window).scrollTop() < bannerH) {
        //     var percent = 0
        //   } else if ($(window).scrollTop() > bannerH) {
        //     var percent = 1
        //   } else {
        //     var percent = ($(window).scrollTop() - bannerH) / 360
        //   }

        // })  

        // 手機載具加/
        $('.phonetext input[type="text"]').on('keydown',function(){
          
          let valStr = $(this).val()
          if (valStr.length < 9) {
            let subvalStr = valStr.substr(1)
            let selectstart = '/'
            let endVal = selectstart + subvalStr
            $(this).val(endVal)
          }
        })



  })()



})

