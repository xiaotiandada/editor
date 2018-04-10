$(function () {
  // 绑定需要拖拽改变大小的元素对象
  var x = 0
  var els = null

  $('#test').on('mousemove', resizeMove)  
  function resizeMove(e) {
    e = e || window.event
    var x = e.clientX
    // var y = event.clientY
    var twidth = $('#test').offset().left + $('#test').width()
    if (x >= twidth ) {
      $('#test').css('cursor', 'e-resize')
      bindResize(document.getElementById('test'))
    } else {
      $('#test').css('cursor', 'default')
    }
  }

  function bindResize(el) {
    els = el
    $(el).on('mousedown', mouseDown)
  }

  function mouseDown(e) {
    x = e.clientX - els.offsetWidth
    // y = e.clientY - els.offsetHeight

    els.setCapture ? (
      els.setCapture(),
      els.onmousemove = function (ev) {
        mouseMove(ev || event)
      },
      els.onmouseup = mouseUp
    ) : (
      $(document).bind('mousemove', mouseMove).bind('mouseup', mouseUp)
    )
    e.preventDefault()
  }

  function mouseMove(e) {
    var wlen = e.clientX - x
    if (wlen >= 600) {
      $('#test').css('width','600px')
      mouseUp()
      return false
    }
    if (wlen <= 300) {
      $('#test').css('width','300px')
      mouseUp()
      return false
    }
    e.clientX - x + 'px'
    $('#test').css('width',wlen)
    // elss.height = e.clientY - y + 'px'
  }

  function mouseUp() {
    els.relseaseCapture ? (
      els.relseaseCapture(),
      els.onmousemove = els.onmouseup = null
    ) : (
      $(document).unbind('mousemove', mouseMove).unbind('mouseup', mouseUp)
    )
  }
})

