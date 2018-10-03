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
    document.querySelector('.user_name >a').addEventListener('click', e => {
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
    $('#Plambox_Service').on('click', function() {
      overflow()
      $('.popu_palmbox_service').toggleClass('ishow')
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
        $('#distribution').css('display', 'flex')
        $('#unfetched').css('display', 'none')
      } else {
        $('#distribution').css('display', 'none')
        $('#unfetched').css('display', 'flex')
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

        console.log(tablenum, tablethis, tr_num);
      
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


  })()
})

