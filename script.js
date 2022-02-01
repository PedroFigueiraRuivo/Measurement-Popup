var pfr__plugin__measurementTable = {
    url_da_imagem_do_popup: '',
    lista_de_produtos_a_ignorar: [ '', '' ]
};

function pfr__EXECUTE__measurementTable( img_popUp, exclude_of_popUp ){

	function pfr__measurementTable( URL_imgToPopUp ){
		
		// validação
		document.addEventListener("DOMContentLoaded", () => { //executa após o dom ser processado
		
			if( ( document.body ).classList.contains( 'pagina-produto' ) ){
				
				let base;
				let local = 'afterend';
				const theNameContent = 'div.secao-principal div.principal'; // elemento pai
				const options = [ '.atributos', '.info-principal-produto' ]; // nível de prioridade [ max, med, min, ... ]
				
				
				if( document.querySelector( theNameContent ) ){ // elemento pai existe ?
				
					for( let II = 0; II < ( options.length ); II++ ){ // percorre options
						
						if( document.querySelector( theNameContent + ' ' + options[ II ] ) ){
							
							base = theNameContent + ' ' + options[ II ];
							break;
							
						}// encerra quando encontra a option de max level
						
					}
					
					if( base == null || base == '' ){ // valida o resultado da busca de options
						
						base = theNameContent;
						local = 'afterbegin';
						
					}
					addButton( base, local );
					createPopUp( URL_imgToPopUp );
					pfr__measurementTable_closeAndOpen();
					
				
				}else{
					
					console.error( 'A estrutura base não foi encontrada. O plugin não será executado' );
					
				}
					
					
			}

		});

		// implementacao do botao
		function addButton( base, local ){
		
			const elementbase = document.querySelector( base ); // seleciona o elemento base + option no dom
			
			elementbase.insertAdjacentHTML( local, '<div id="pfr_tableMens_button"></div>' ); // Seta div após elemento base
			
			const newDiv = document.getElementById( 'pfr_tableMens_button' ); // seleciona a nova div
			
			const theNewButton = document.createElement( 'button' ); // cria o botap
			
			theNewButton.classList.add('pfr-btn-measurementTable'); // adiciona classe
			theNewButton.innerText = 'Guia de medidas'; // adiciona o texto
			
			newDiv.appendChild( theNewButton ); // adiciona o botão na div
		
		}
		
		// implementando pop-up
		function createPopUp( img ){
			
			const newDiv = document.createElement( 'div' );
			newDiv.id = 'pfr_tableMens_popUp';
			newDiv.classList.add( 'pfr-measurementTable-collapse' );
			( document.body ).appendChild( newDiv );
			
			const content = `
			<div class="pfr-tableMens-pop-up">
				<img src="${ img }">
				<button>X</button>
			</div>
			
			`;
			
			newDiv.insertAdjacentHTML( 'beforeend', content );
			
		}
		
		function pfr__measurementTable_closeAndOpen(){
			
			document.querySelector( '#pfr_tableMens_button button' ).addEventListener( 'click', () => {
				
				const thePopUp = document.getElementById( 'pfr_tableMens_popUp' );
				thePopUp.classList.remove( 'pfr-measurementTable-collapse' );
				
				
			} );
			
			
			document.getElementById( 'pfr_tableMens_popUp' ).addEventListener( 'click', event => {
				
				if ( ( event.target ) != ( document.querySelector( '#pfr_tableMens_popUp img' ) ) ){
					
					document.getElementById( 'pfr_tableMens_popUp' ).classList.add( 'pfr-measurementTable-collapse' );
			
				}
				
			
			} );
			
		}

	}

	if( img_popUp != null && img_popUp != '' ){
		
		let newArr = exclude_of_popUp.filter( ( exclude ) => {
			return exclude != '';
		} );
		
		if( newArr.length != 0 ){
			
			for( let II = 0; II < ( newArr.length ); II++ ){
				
				if( ! document.querySelector( newArr[ II ] ) ){
					
					pfr__measurementTable( img_popUp );
				
				}else{
					
					console.warn( 'Plugin PFR Measurement Table: Você definiu que o Plugin não será executado nesse produto.' )
					
				}
				
			}
			
		}else{
			
			pfr__measurementTable( img_popUp );
			
		}
		
		

	}else{
		
		console.error( 'O plugin não funcionará sem uma url de imagem definida!' );
		
	}

}

if( typeof( pfr__plugin__measurementTable ) != 'undefined' ){
	
	if( typeof(pfr__plugin__measurementTable.url_da_imagem_do_popup) != 'undefined' && typeof(pfr__plugin__measurementTable.lista_de_produtos_a_ignorar) != 'undefined' ){
	
		pfr__EXECUTE__measurementTable( pfr__plugin__measurementTable.url_da_imagem_do_popup, pfr__plugin__measurementTable.lista_de_produtos_a_ignorar );
		
	}else{
		
		console.info( 'Você immportou o plugin pfr-Measurement PopUp mas ele não será executado pois as variáveis de configurações não foram encontradas.' );
		
	}

}else{
	console.info( 'Você immportou o plugin pfr-Measurement PopUp mas ele não será executado pois o bloco de configuração não foi encontrado.' );
}