$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $('#open');
    var btn_reset = $('#reset');
  
    // Clique no envelope
    envelope.click(function () {
      openEnvelope();
    });
  
    // Botão "Open"
    btn_open.click(function () {
      openEnvelope();
    });
  
    // Botão "Reset"
    btn_reset.click(function () {
      closeEnvelope();
    });
  
    // Função para abrir o envelope
    function openEnvelope() {
      envelope.addClass('open').removeClass('close');
    }
  
    // Função para fechar o envelope
    function closeEnvelope() {
      envelope.addClass('close').removeClass('open');
    }
  });
  