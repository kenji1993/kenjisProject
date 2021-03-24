window.onload = function () {
						  var botones = document.getElementsByTagName('span'),
							  result = document.querySelectorAll('.result p')[0],
							  clear = document.getElementsByClassName('clear')[0];
						  
						  for (var i = 0; i < botones.length; i++) {
							if (botones[i].innerHTML === '=') {
							  botones[i].addEventListener("click", calculate(i));
							} else {
							  botones[i].addEventListener("click", addValue(i));
							}
						  }
						  
						  clear.onclick = function () {
							result.innerHTML = '';
						  };  
						  
						  function addValue(i) {
							return function () {
							    
								result.innerHTML += botones[i].innerHTML;
									
							};
						  }
						  
						  function calculate(i) {
							return function () {
									var final_res = result.innerHTML;
                                     
																	  
							  result.innerHTML = eval(final_res);
							};
						  }
						};