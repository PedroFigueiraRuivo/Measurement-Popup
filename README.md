<img src="https://user-images.githubusercontent.com/93988164/152078001-d9f116e9-f5d5-4ded-9efb-32e2c1af9823.jpg">
<h1>Measurement PopUp</h1>
<div>
  <img src="https://img.shields.io/badge/Status-Finalizando-blueviolet">
  <img src="https://img.shields.io/badge/Versão-1.7-blue">
</div>
<br/>
<p>Esse plugin tem como objetivo adicionar um botão de pop-up em todos os produtos, de modo em que após a interação do usuário com o botão, seja aberta uma janela com uma imagem demonstrando uma tabela de medidas ensinando como o cliente pode tirar suas medidas para comprar a peça do tamanho que lhe seja apropriado.</p>

<h2>Funcionalidades do projeto</h2>

<p><code>Funcionalidade 1</code>: <span>Adicionar um botão em todos os produtos para mostrar uma tabela de medidas dentro de um pop-up;</span></p>
<p><code>Funcionalidade 2</code>: <span>Possui um seletor CSS para que o usuário identifique páginas caso não queira que o plugin funcione em um ou mais produtos específicos</span></p>

<p><code>Funcionalidade 3</code>: <span>Possui um campo para que o usuário identifique categorias caso não queira que o plugin funcione em produtos que façam parte dessa categoria</span></p>

<div align="center">
<img src="https://user-images.githubusercontent.com/93988164/152079780-a5e2f89c-c75d-4e5f-9197-bf1b255fae8c.gif">
</div>

<h2>Acesso ao Projeto</h2>
<p>Os arquivos podem ser baixados diretamente desse repositório em "code&gtDownload ZIP" e um arquivo .zip será baixado para a sua máquina, ou basta que copie os arquivos localizados na raíz desse repositório ( style.css e script.js ).</p>

<h3>Configurando o ambiente</h3>
<p>Se você já utilizou algum plugin loja integrada disponibilizado por mim significa que você já deve saber dos passos iniciais. Caso não saiba, basta clicar <a target="_blank" href="https://github.com/PedroFigueiraRuivo/pedrofigueiraruivo.github.io/blob/main/Docs/doc-plugins-lojaintegrada.md">aqui</a>.</p>

<h3>Formas de uso</h3>

<p>Para utilizar esse plugin, é necessário que cole o código abaixo no arquivo js de configuração.</p>

<pre>
var pfr__plugin__measurementTable = {
    url_da_imagem_do_popup: '',
    lista_de_produtos_a_ignorar: [ '', '' ]
};
</pre>

<p>Com o código adicionado, basta que coloque um link da imagem da tabela de medidas dentro das aspas do compo <code>url_da_imagem_do_popup</code>. Lembre-se que sem essa url adicionada o plugin não será executado.</p>

<p>O segundo campo consiste em uma funcionalidade extra. Ele recebe uma lista ilimitada de seletores CSS adicionados dentro das aspas para que possam identificar uma página de produto específica, fazendo com que o plugin não seja executado nessas páginas.</p>

<p>O terceiro campo consiste em mais uma funcionalidade extra. Ele recebe uma lista ilimitada de nomes de categorias adicionados dentro das aspas para que possam identificar uma página de produto que faça parte dessa categoria específica, fazendo com que o plugin não seja executado nessas páginas.</p><strong>Exemplo de uso:</strong>
<pre>
    var pfr__plugin__measurementTable = {
        url_da_imagem_do_popup: 'https://urlficticia.com.br/caminho-ficticio',
        lista_de_produtos_a_ignorar: [ '.pagina-produto.produto-110746371', '.pagina-produto.produto-110746372' ],
        lista_de_categorias_a_ignorar: [ 'Cangas e Bolsas', 'Biquini' ],
    };
</pre>
<p>As configurações acima farão com que o plugin funcione em todas as páginas menos na página do produto de id = "110746371" e da página de id = "110746372". O plugin também não será executado nas páginas de produtos que façam parte dessas categorias. É importante ressaltar que o plugin tem nível de preferência para com o campo de categorias.</p>
<p><strong>NOTA:</strong> Você não precisa adicionar a página da home ou páginas personalizadas para serem ignoradas pois, por padrão, o plugin só funciona em páginas de produtos.</p>


<h2>Tecnologias utilizadas</h2>
<ul>
  <li><code>CSS</code></li>
  <li><code>JavaScript</code></li>
</ul>


<h2>Desenvolvedores</h2>
<a href="https://github.com/PedroFigueiraRuivo"><img width="100px" src="https://avatars.githubusercontent.com/u/93988164?v=4"><p>Pedro Figueira</p></a>
