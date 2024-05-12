window.onload = function() {
    var myModal = new bootstrap.Modal(document.getElementById('popupModal'), {
      backdrop: 'static',
      keyboard: false
    });
    myModal.show();
  };