$(function () {
  // 绑定需要拖拽改变大小的元素对象
  $('#test,#test1').on('mousemove',resizeMove)
  function resizeMove(e){
    e = e || window.event
    var x = event.clientX
    // var y = event.clientY
    var twidth = $('#test').offset().left + $('#test').width()
    if( (x >= twidth - 6) && (x <= twidth + 10)){
        $('#test').css('cursor', 'e-resize')
        bindResize(document.getElementById('test'))
    } else {
        $('#test').css('cursor', 'default') 
    }
  }
})

function bindResize(el) {
  // 初始化参数
  var els = el.style
  var x = 0
//   var y = 0

  $(el).on('mousedown', mouseDown)

  function mouseDown(e){
    x = e.clientX - el.offsetWidth
    // y = e.clientY - el.offsetHeight

    el.setCapture ? (
      el.setCapture(),
      el.onmousemove = function (ev) { 
          mouseMove(ev || event) 
        },
      el.onmouseup = mouseUp
    ) : (
      $(document).bind('mousemove', mouseMove).bind('mouseup', mouseUp)
    )
    e.preventDefault()
  }

  function mouseMove(e) {
    var wlen = els.width = e.clientX - x 
    if(wlen >= 600){
        els.width = 600 + 'px'
        mouseUp()
        return false
    }
    if(wlen <= 300){
        els.width = 300 + 'px'
        mouseUp()
        return false        
    }
    els.width = e.clientX - x  + 'px'
    // els.height = e.clientY - y + 'px'

   
  }

  function mouseUp() {
    el.releaseCapture ? (
      el.releaseCapture(),
      el.onmousemove = el.onmouseup = null
    ) : (
      $(document).unbind('mousemove', mouseMove).unbind('mouseup', mouseUp)
    )
  }
}
