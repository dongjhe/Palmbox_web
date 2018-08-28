var app = new Vue({
  el: '.main_container',
  data: {
    list: [
      { id: 'DHL' },
      { id: 'UPS' },
      { id: '宅配通' },
      { id: '便利帶' },
      { id: '全速配' },
      { id: '好運袋' },
      { id: '中華郵政' },
      { id: '順豐速運' },
      { id: '新竹物流' },
      { id: '嘉里大榮' },
      { id: '錸乾物流' },
      { id: '超峰快遞' },
      { id: '晉越快遞' },
      { id: '黑貓宅急便' },
      { id: '其他' }
    ],
    citys: [
      { area: '台北市' },
      { area: '基隆市' },
      { area: '新北市' },
      { area: '宜蘭縣' },
      { area: '桃園市' },
      { area: '新竹市' },
      { area: '新竹縣' },
      { area: '苗栗縣' },
      { area: '台中市' },
      { area: '彰化縣' },
      { area: '南投縣' },
      { area: '嘉義市' },
      { area: '嘉義縣' },
      { area: '雲林縣' },
      { area: '台南市' },
      { area: '高雄市' },
      { area: '屏東縣' }
    ],
    people: [
      { number: '20以下' },
      { number: '20~40' },
      { number: '40~60' },
      { number: '60~80' },
      { number: '80~100' },
      { number: ' 100以上' }
    ],
    edulev: [
      { level: '國中（含）以下' },
      { level: '高中(職)' },
      { level: '大學(專)' },
      { level: '研究所（含）以上' }
    ],
    careers: [
      { job: '學生' },
      { job: '軍公教' },
      { job: '服務業' },
      { job: '金融業' },
      { job: '資訊／科技' },
      { job: '傳播/廣告/設計' },
      { job: '藝文' },
      { job: '自由業' },
      { job: '醫療' },
      { job: '製造業' },
      { job: '農林漁牧' },
      { job: '家管／退休' },
      { job: '其他' }
    ],
    conditions: [
      { info: '收件人姓名' },
      { info: '收件人手機' },
      { info: '收件人地址' },
      { info: '運單號碼' }
    ]
  },
  methods: {}
})
