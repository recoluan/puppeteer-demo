;(() => {
  const HandleOrder = function () {
    this.$oGetInfo = $('.get-info')
    this.$oOrderList = $('.order-list')
    this.$oHostBusiness = $('.host-business')
    this.$oSpan = null
    this.id = ''
  }

  HandleOrder.prototype = {
    init () {
      this.bindEvents()
    },
    bindEvents () {
      this.$oGetInfo.on('click', this.getInfo.bind(this))
      this.$oHostBusiness.on('click', this.getHostBusiness.bind(this))
    },
    // 获取订单列表
    getInfo () {
      if (this.id == '') {
        alert('请先选择主机厂商')
        return
      }
      recoFetch('/getInfo').then(res => {
        const data = res.data
        this.initPlaceOrder(data)
      })
    },
    // 初始化订单列表和绑定下单事件
    initPlaceOrder (data) {
      let domStr = ''
      for(let i = 0, len = data.length; i < len; i++) {
        domStr = domStr + `<tr>
          <td>${i}</td>
          <td>${data[i].title}</td>
          <td>${data[i].date}</td>
          <td><button class="btn btn-primary place-order" data-index="${i}">下单</button></td>
        </tr>`
      }
      this.$oOrderList.html(domStr)

      const $oBtnPlaceOrder = this.$oOrderList.find('tr .place-order')
      $oBtnPlaceOrder.on('click', this.handleOrder)
    },
    // 下单
    handleOrder (e) {
      const index = e.target.dataset.index
      const $oOrderList = $('.order-list')
      $oOrderList.find('tr').eq(index).find('place-order').text('进行中').css({
        disabled: 'disabled'
      })
      
      recoFetch(`/handleOrder/${index}`).then(res => {
        const overIndex = res.data.index
        alert(`订单${overIndex}：下单成功！`)
        $oOrderList.find('tr').eq(overIndex).find('place-order').text('完成')
        $oOrderList.find('tr').eq(overIndex).css({
          background: '#f2f2f2'
        })
      })
    },
    // 获取主机厂商
    getHostBusiness (e) {
      const id = e.target.dataset.id
      const  text = e.target.outerText
      $('.order-wrapper .screen-wrapper button').html(`${text}<span class="caret"></span>`)
      this.id = id
    }
  }

  const ho = new HandleOrder()
  ho.init()
})();  