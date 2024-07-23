function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open-menu');
}
    function enviarMensagemWhatsApp() {
        // Número de telefone no formato internacional (no exemplo, +55 63 9203-6652)
        var numeroTelefone = '556381565112';
        
        // Mensagem opcional
        var mensagem = 'Olá, estou entrando em contato pelo site.';

        // Montar o link do WhatsApp
        var linkWhatsApp = 'https://api.whatsapp.com/send?phone=' + numeroTelefone;

        // Adicionar a mensagem se desejar
        if (mensagem) {
            linkWhatsApp += '&text=' + encodeURIComponent(mensagem);
        }

        // Redirecionar o usuário para o link do WhatsApp
        window.location.href = linkWhatsApp;
}
    function abrirPerfilInstagram() {
        // Nome de usuário do Instagram (no exemplo, "ambientalanjos")
        var usuarioInstagram = '';

        // Montar o link do Instagram
        var linkInstagram = 'https://www.instagram.com/' + usuarioInstagram;

        // Redirecionar o usuário para o link do Instagram
        window.location.href = linkInstagram;
}









// Add a JavaScript animation to the list items
const listItems = document.querySelectorAll('li');

listItems.forEach((item, index) => {
  item.style.animation = `list-item-animation 1s ease-in-out ${index * 0.2}s infinite`;
});

// Add a JavaScript animation to the header
const headers = document.querySelectorAll('.animated-header');

headers.forEach((header, index) => {
  header.style.animation = `header-animation 2s ease-in-out ${index * 0.2}s infinite`;
});