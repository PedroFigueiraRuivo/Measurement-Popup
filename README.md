<h1>Measurement PopUp</h1>

<h2>Objetivo</h2>
<p>O desenvolvimento desse plugin tem como objetivo adicionar um botão de pop-up em todos os produtos, de modo em que após a interação do usuário com o botão seja aberta uma janela com uma imagem demonstrando uma tabela de medidas ensinando como o cliente pode tirar suas medidas para comprar a peça do tamanho que lhe seja apropriado.</p>
<br>

<h2>Expectativas futuras</h2>
<ol>
<li>Adicionar a possibilidade de adicionar o botão apenas em páginas específicas.</li>
<li>Adicionar ícone ao botão</li>
</ol>

<h1>Início</h1>
<h3>Configurando</h3>
<p>Se você já utilizou algum plugin loja integrada disponibilizado por mim significa que você já deve saber dos passos iniciais. Caso não saiba, basta clicar <a target="_blank" href="https://github.com/PedroFigueiraRuivo/pedrofigueiraruivo.github.io/blob/main/Docs/doc-plugins-lojaintegrada.md">aqui</a>.</p>
<br>

<p>Ok! Agora que você já sabe como funciona ( assim espero ), vamos entender o funcionamento do plugin.</p>
<br>
<br>

<p>Para começar você terá que incluir no script responsável pelas definições o seguinte código:</p>
<blockquote>
pfr__plugin__measurementTable = {<br>
	&nbsp;&nbsp;&nbsp;&nbsp;url_da_imagem_do_popup: '',<br>
	&nbsp;&nbsp;&nbsp;&nbsp;lista_de_produtos_a_ignorar: [ '', '' ]<br>
};
</blockquote>
<br>

<p>Agora basta definir na seção "url_da_imagem_do_popup", a url da imagem que aparecerá ao ocorrer a interação do usuário com o botão gerado. Ex.: https://meusite.com/caminho_da_imagem.extencao</p>
<p>Já na seção "lista_de_produtos_a_ignorar", você poderá usar uma listagem de páginas nas quais você não quer que o botão de pop-up apareça. Por padrão o plugin só funciona em páginas de produto, então não há necessidade de listar páginas externas, como por exemplo a home e páginas de categorias. A listagem de páginas deve ser realizada por listagem CSS. aconselho que procure por algum elemento que apresente a ID do produto com um identificador de que aquela página é a página do produto em si, como mostra a imagem abaixo.</p>
<img src="https://user-images.githubusercontent.com/93988164/145139146-9ae23244-c20b-4ee6-b832-d0bc007bfbfc.png">
<p>A exclusão de páginas pode aceitar N páginas, tome cuidado.</p>
<br>
<br>
<br>
<p>Agora que você já aprendeu... Bom proveito!</p>
