jQuery(document).ready(function ($) {
    jQuery(document).on("click", ".deletar", function () {
        deletar($(this).attr('id'));
    });
});
jQuery(document).ready(function ($) {
    jQuery(document).on("click", ".editar", function () {
        window.location = "cadastro.html?id=" + $(this).attr('id');
    });
});