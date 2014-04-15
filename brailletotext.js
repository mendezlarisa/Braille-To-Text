$(document).ready(function() {
        var tabla = {
            65: false, //A - Salto de Linea
            72: false, //H - Space
            71: false, //G - Tabulador
            192: false, //; - Backspace
            70: false, //F - 1
            68: false, //D - 2
            83: false, //S - 3
            74: false, //J - 4
            75: false, //K - 5
            76: false  //L - 6
        };
        var mayus = false;        
        var number = false;
        function cleartabla(){
            for (var item in tabla)
                tabla[item] = false;
        } 
        function count(){
            var i = 0;
            for (var item in tabla)
                if (tabla[item]){
                    i++;
                }
            return i;
        }
        function clear(theDiv){
            strng = theDiv.value;
            theDiv.value=strng.substring(0,strng.length-1)
        }
        $(document).keydown(function(event) {
            var keyCode = event.which;
            var keyChar = String.fromCharCode(keyCode);

            //Reset
            if (tabla.hasOwnProperty(keyCode)) {
                tabla[keyCode] = true;
            }else{
                cleartabla();
            }

            var theDiv = document.getElementById("bloque");

            if(count()>5)             
                cleartabla();

            for (var item in tabla){
                if(tabla[item])
                    console.log(count(),item);
            }

            for (var item in tabla){ 
                //Numero                
                if(count()==4 && tabla[83] && tabla[74] && tabla[75] && tabla[76]){
                    number = true;
                    cleartabla();
                } 
                //Mayuscula
                if(count()==2 && tabla[74] && tabla[76]){
                    mayus = true;          
                    cleartabla();                    
                }    
                //Espacio            
                if (tabla[72]){
                    theDiv.value+=" ";
                    cleartabla();
                }
                //Backspace
                if (tabla[192]) {
                    clear(theDiv);
                    cleartabla();
                }
                //Salto de Linea
                if (tabla[65]) {
                    theDiv.value+="\n";
                    cleartabla();
                }
                //Tabulador
                if (tabla[71]) {
                    theDiv.value+="\t";
                    cleartabla();
                }   
                // //Punto
                // if (tabla[83] && count()==1) {
                //     theDiv.value+=".";
                //     cleartabla();
                // } 
                // //Coma 
                // if (tabla[68] && count()==1) {
                //     theDiv.value+=",";
                //     cleartabla();
                // }          
                //Guion
                if(tabla[83] && tabla[76] && count()==2){
                    theDiv.value+="-";                    
                    cleartabla();
                }               
                //Punto y Coma
                if(tabla[83] && tabla[68] && count()==2){
                    theDiv.value+=";";                    
                    cleartabla();
                }
                //Comillas                                
                if(tabla[68] && tabla[83] && tabla[76] && count()==3){
                    theDiv.value+="\"";
                    cleartabla();
                }

                //Letra F-f-6
                if(tabla[70] && tabla[74] && tabla[68] && count()==3){
                    if(mayus){
                        theDiv.value+="F";                    
                        mayus = false;
                    }else if (number){
                        theDiv.value+="6";
                        number = false;
                    }
                    else
                        theDiv.value+="f";
                    cleartabla();
                } 
                
                //Letra A-a-1
                if (tabla[70] && count()==1){
                    if(mayus){
                        theDiv.value+="A";
                        mayus = false;
                    } else if (number){
                        theDiv.value+="1";
                        number = false;
                    }                   
                    else
                        theDiv.value+="a";
                    cleartabla();
                }
                //Letra B-b-2
                if(tabla[70] && tabla[68] && count()==2){
                    if(mayus){
                        theDiv.value+="B";                    
                        mayus = false;
                    }else if (number){
                        theDiv.value+="2";
                        number = false;
                    }
                    else
                        theDiv.value+="b";
                    cleartabla();
                }                 
                //Letra C-c-3
                if(tabla[70] && tabla[74] && count()==2){
                    if(mayus){
                        theDiv.value+="C";                    
                        mayus = false;
                    }else if (number){
                        theDiv.value+="3";
                        number = false;
                    }
                    else
                        theDiv.value+="c";
                    cleartabla();
                }
                //Letra D-d-4                                  
                if(tabla[70] && tabla[74] && tabla[75] && count()==3){
                    if(mayus){
                        theDiv.value+="D";                    
                        mayus = false;
                    }else if(number){
                        theDiv.value+="4";
                        number = false;
                    }
                    else
                        theDiv.value+="d";
                    cleartabla();
                }
                //Letra E-e-5
                if(tabla[70] && tabla[75] && count()==2){
                    if(mayus){
                        theDiv.value+="E";                    
                        mayus = false;
                    }else if (number){
                        theDiv.value+="5";
                        number = false;
                    }
                    else
                        theDiv.value+="e";
                    cleartabla();
                }                          
                  //Letra G-g-7
                if(tabla[70] && tabla[74] && tabla[68] && tabla[75] && count()==4){
                    if(mayus){
                        theDiv.value+="G";                    
                        mayus = false;
                    }else if (number){
                        theDiv.value+="7";
                        number = false;
                    }
                    else
                        theDiv.value+="g";
                    cleartabla();
                }  
                //Letra H-h-8
                if(tabla[70] && tabla[75] && tabla[68] && count()==3){
                    if(mayus){
                        theDiv.value+="H";                    
                        mayus = false;
                    }else if (number){
                        theDiv.value+="8";
                        number = false;
                    }
                    else
                        theDiv.value+="h";
                    cleartabla();
                }                  
                //Letra I-i-9
                if(tabla[68] && tabla[74] && count()==2){
                    if(mayus){
                        theDiv.value+="I";                    
                        mayus = false;
                    }else if (number){
                        theDiv.value+="9";
                        number = false;
                    }
                    else
                        theDiv.value+="i";
                    cleartabla();
                }   
                //Letra J-j-0
                if(tabla[68] && tabla[75] && tabla[74] && count()==3){
                    if(mayus){
                        theDiv.value+="J";                    
                        mayus = false;
                    }else if (number){
                        theDiv.value+="0";
                        number = false;
                    }
                    else
                        theDiv.value+="j";
                    cleartabla();
                }  
                //Letra K-k
                if(tabla[70] && tabla[83] && count()==2){
                    if(mayus){
                        theDiv.value+="J";                    
                        mayus = false;
                    }else
                        theDiv.value+="j";
                    cleartabla();
                } 
                //Letra L-l
                if(tabla[70] && tabla[68] && tabla[83] && count()==3){
                    if (mayus) {
                        theDiv.value+="L"
                        mayus = false;
                    }
                    else
                        theDiv.value+="l";     
                    cleartabla();
                }
                //Letra M-m
                 if(tabla[70] && tabla[74] && tabla[83] && count()==3){
                    if(mayus){
                        theDiv.value+="M";                    
                        mayus = false;
                    }else
                        theDiv.value+="m";
                    cleartabla();
                }
                //Letra N-n
                 if(tabla[70] && tabla[74] && tabla[75] && tabla[83] && count()==4){
                    if(mayus){
                        theDiv.value+="N";                    
                        mayus = false;
                    }else
                        theDiv.value+="n";
                    cleartabla();
                }  
                 //Letra Ñ-ñ
                if(tabla[70] && tabla[74] && tabla[75] && tabla[76] && tabla[68] && count()==5){
                    if(mayus){
                        theDiv.value+="Ñ";                    
                        mayus = false;
                    }else
                        theDiv.value+="ñ";
                    cleartabla();
                }                
                //Letra O-o
                 if(tabla[70] && tabla[75] && tabla[83] && count()==3){
                    if(mayus){
                        theDiv.value+="O";                    
                        mayus = false;
                    }else
                        theDiv.value+="o";
                    cleartabla();
                }
                //Letra P-p
                 if(tabla[70] && tabla[68] && tabla[83] && tabla[74] && count()==4){
                    if(mayus){
                        theDiv.value+="P";                    
                        mayus = false;
                    }else
                        theDiv.value+="p";
                    cleartabla();
                }
                 //Letra Q-q
                if(tabla[70] && tabla[68] && tabla[83] && tabla[75] && tabla[74] && count()==5){
                    if(mayus){
                        theDiv.value+="Q";                    
                        mayus = false;
                    }else
                        theDiv.value+="q";
                    cleartabla();
                }     
                //Letra R-r
                 if(tabla[70] && tabla[68] && tabla[83] && tabla[75] && count()==4){
                    if(mayus){
                        theDiv.value+="R";                    
                        mayus = false;
                    }else
                        theDiv.value+="r";
                    cleartabla();
                }
                //Letra S-s
                 if(tabla[68] && tabla[83] && tabla[74] && count()==3){
                    if(mayus){
                        theDiv.value+="S";                    
                        mayus = false;
                    }else
                        theDiv.value+="s";
                    cleartabla();
                }
                //Letra T-t
                 if(tabla[68] && tabla[83] && tabla[74] && tabla[75] && count()==4){
                    if(mayus){
                        theDiv.value+="T";                    
                        mayus = false;
                    }else
                        theDiv.value+="t";
                    cleartabla();
                }
                //Letra U-u
                 if(tabla[70] && tabla[83] && tabla[76] && count()==3){
                    if(mayus){
                        theDiv.value+="U";                    
                        mayus = false;
                    }else
                        theDiv.value+="u";
                    cleartabla();
                } 
                //Letra V-v
                 if(tabla[70] && tabla[68] && tabla[83] && tabla[76] && count()==4){
                    if(mayus){
                        theDiv.value+="V";                    
                        mayus = false;
                    }else
                        theDiv.value+="v";
                    cleartabla();
                }
                //Letra W-w
                 if(tabla[68] && tabla[74] && tabla[75] && tabla[76] && count()==4){
                    if(mayus){
                        theDiv.value+="W";                    
                        mayus = false;
                    }else
                        theDiv.value+="w";
                    cleartabla();
                }
                //Letra X-x
                 if(tabla[70] && tabla[74] && tabla[83] && tabla[76] && count()==4){
                    if(mayus){
                        theDiv.value+="X";                    
                        mayus = false;
                    }else
                        theDiv.value+="x";
                    cleartabla();
                } 
                 //Letra Y-y
                if(tabla[70] && tabla[83] && tabla[74] && tabla[75] && tabla[76] && count()==5){
                    if(mayus){
                        theDiv.value+="Y";                    
                        mayus = false;
                    }else
                        theDiv.value+="y";
                    cleartabla();
                } 
                //Letra Z-z
                 if(tabla[70] && tabla[83] && tabla[75] && tabla[76] && count()==4){
                    if(mayus){
                        theDiv.value+="Z";                    
                        mayus = false;
                    }else
                        theDiv.value+="z";
                    cleartabla();
                }     
                 //Letra Á-á
                if(tabla[70] && tabla[68] && tabla[83] && tabla[75] && tabla[76] && count()==5){
                    if(mayus){
                        theDiv.value+="Á";                    
                        mayus = false;
                    }else
                        theDiv.value+="á";
                    cleartabla();
                }    
                //Letra É-é
                if(tabla[68] && tabla[83] && tabla[74] && tabla[76] && count()==4){
                    if(mayus){
                        theDiv.value+="É";                    
                        mayus = false;
                    }else
                        theDiv.value+="é";
                    cleartabla();
                }
                //Letra Í-í
                if(tabla[83] && tabla[74] && count()==2){
                    if(mayus){
                        theDiv.value+="Í";                    
                        mayus = false;
                    }else
                        theDiv.value+="í";
                    cleartabla();
                } 
                //Letra Ó-ó
                if(tabla[83] && tabla[76] && tabla[74] && count()==3){
                    if(mayus){
                        theDiv.value+="Ó";                    
                        mayus = false;
                    }else
                        theDiv.value+="ó";
                    cleartabla();
                } 
                //Letra Ú-ú
                if(tabla[68] && tabla[83] && tabla[74] && tabla[75] && tabla[76] && count()==5){
                    if(mayus){
                        theDiv.value+="Ú";                    
                        mayus = false;
                    }else
                        theDiv.value+="ú";
                    cleartabla();
                }    
                //Letra Signo de Interrogacion
                //Letra Signa de Exclamacion
                //Letra Parentesis Abierto
                if(tabla[70] && tabla[68] && tabla[76] && count()==3){
                    theDiv.value+="(";
                    cleartabla();
                } 
                //Letra Parentesis Cerrado
                if(tabla[74] && tabla[75] && tabla[83] && count()==3){
                    theDiv.value+=")";
                    cleartabla();
                } 
            }
        });
    });
