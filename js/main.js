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

    // 浮層打開關
    $('#Courier').on('click', function() {
      $('html body').css('overflow-y', 'hidden')
      $('#Courier_alert').toggleClass('ishow')
    })
    $('#Plambox_Service').on('click', function() {
      $('html body').css('overflow-y', 'hidden')
      $('#Plambox_Service_alert').toggleClass('ishow')
    })

    $('#agree').on('click', function() {
      $('html body').css('overflow-y', 'hidden')
      $('#Plambox_Service_alert').toggleClass('ishow')
    })

    $('.alertpopup .closeclose ').on('click', function() {
      $('html body').css('overflow-y', 'inherit')
      $(this).parents('.alertpopup').toggleClass('ishow')
    })

    $('.couriercontainer >table td').on('click', function() {
      $('html body').css('overflow-y', 'hidden')
      $('.popu_tr').toggleClass('ishow')
    })

    $('.popu_tr .closeclose').on('click', function () {
      $('html body').css('overflow-y', 'inherit')
      $(this).parents('.popu_tr').toggleClass('ishow')      
    })



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
    $('.couriertop .togglebut a').on('click', function () {
      $(this).addClass('active').siblings('a').removeClass('active') 
    })

    // 會員使用者狀態切換
    $('.click_bt a').on('click', function() {
      let indexa = $(this).index()
      let click_box_d = $('.click_box > div')
      $(this).addClass('active').siblings('a').removeClass('active')
      click_box_d.eq(indexa).css('display', 'block').siblings('div').css('display', 'none')
    })
  })()
})
