;(() => {
  const HandleOrder = function () {
    this.$oGetInfo = $('.get-info')
    this.$oOrderList = $('.order-list')
    this.$oSpan = null
  }

  HandleOrder.prototype = {
    init () {
      this.bindEvents()
    },
    bindEvents () {
      this.$oGetInfo.on('click', this.getInfo.bind(this))
      $('  #dropdownMenu1').dropdown('toggle')
    },
    getInfo () {
      recoFetch('/getInfo').then((res, req) => {
        const data = res.data
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
        
        const $oBtnPlaceOrder = this.$oOrderList.find('li .place-order')
        $oBtnPlaceOrder.on('click', this.handleOrder)
      })
    },
    handleOrder (e) {
      const index = e.target.dataset.index
      const $oOrderList = $('.order-list')
      
      recoFetch(`/handleOrder/${index}`).then(res => {
        const overIndex = res.data.index
        alert(`订单${overIndex}：下单成功！`)
        $oOrderList.find('li').eq(overIndex).css({
          background: '#f2f2f2'
        })
      })
    }
  }

  const ho = new HandleOrder()
  ho.init()
})();  