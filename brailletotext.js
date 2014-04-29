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
        var theDiv = document.getElementById("bloque");
        var punto1 = document.getElementById("1");  
        var punto2 = document.getElementById("2");  
        var punto3 = document.getElementById("3");  
        var punto4 = document.getElementById("4");  
        var punto5 = document.getElementById("5");  
        var punto6 = document.getElementById("6");  

              
        function ClearTabla(){
            for (var item in tabla)
                tabla[item] = false;
        } 
        function Count(){
            var i = 0;
            for (var item in tabla)
                if (tabla[item]){
                    i++;
                }
            return i;
        }
        function Clear(theDiv){
            strng = theDiv.value;
            theDiv.value=strng.substring(0,strng.length-1)
        }
        function Write(theDiv, texto){
            theDiv.value+=texto;
        }
        function ChangeColor(puntoid){
            move(puntoid)
                .set('background-color', '#FF8000')
                .duration(300)
                .end(function(){
                    move(puntoid)
                        .set('background-color', '#1c1c1c')
                        .end();
                });
        }

        $(document).keydown(function(event) {
            var keyCode = event.which;
            var keyChar = String.fromCharCode(keyCode);

            //Reset
            if (tabla.hasOwnProperty(keyCode)) {
                tabla[keyCode] = true;
            }else{
                ClearTabla();
            }

            if(Count()>5)             
                ClearTabla();

            for (var item in tabla){
                if(tabla[item])
                    console.log(Count(),item);
            }

            for (var item in tabla){ 
                //Numero                
                if(Count()==4 && tabla[83] && tabla[74] && tabla[75] && tabla[76]){
                    number = true;
                    ClearTabla();
                } 
                //Mayuscula
                if(Count()==2 && tabla[74] && tabla[76]){
                    mayus = true;          
                    ClearTabla();                    
                }    
                //Espacio            
                if (tabla[72]){
                    Write(theDiv, " ");
                    ClearTabla();
                }
                //Backspace
                if (tabla[192]) {
                    Clear(theDiv);
                    ClearTabla();
                }
                //Salto de Linea
                if (tabla[65]) {
                    Write(theDiv, "\n");
                    ClearTabla();
                }
                //Tabulador
                if (tabla[71]) {
                    Write(theDiv, "\t");
                    ClearTabla();
                }   
                // //Punto
                // if (tabla[83] && Count()==1) {
                //     theDiv.value+=".";
                //     ClearTabla();
                // } 
                // //Coma 
                // if (tabla[68] && Count()==1) {
                //     theDiv.value+=",";
                //     ClearTabla();
                // }          
                //Guion
                if(tabla[83] && tabla[76] && Count()==2){
                    Write(theDiv, "-");                    
                    ClearTabla();
                }               
                //Punto y Coma
                if(tabla[83] && tabla[68] && Count()==2){
                    Write(theDiv, ";");                    
                    ClearTabla();
                }
                //Comillas                                
                if(tabla[68] && tabla[83] && tabla[76] && Count()==3){
                    Write(theDiv, "\"");
                    ClearTabla();
                }

                //Letra F-f-6
                if(tabla[70] && tabla[74] && tabla[68] && Count()==3){
                    if(mayus){
                        Write(theDiv, "F");                    
                        mayus = false;
                    }else if (number){
                        Write(theDiv, "6");
                        number = false;
                    }
                    else
                        Write(theDiv, "f");
                    ClearTabla();
                } 
                
                //Letra A-a-1
                if (tabla[70] && Count()==1){
                    if(mayus){
                        Write(theDiv, "A");
                        mayus = false;
                    } else if (number){
                        Write(theDiv, "1");
                        number = false;
                    }                   
                    else{
                        Write(theDiv,"a");
                        ChangeColor(punto1);
                    }
                    ClearTabla();
                }
                //Letra B-b-2
                if(tabla[70] && tabla[68] && Count()==2){
                    if(mayus){
                        Write(theDiv, "B");                    
                        mayus = false;
                    }else if (number){
                        Write(theDiv, "2");
                        number = false;
                    }
                    else
                        Write(theDiv, "b");
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ClearTabla();
                }                 
                //Letra C-c-3
                if(tabla[70] && tabla[74] && Count()==2){
                    if(mayus){
                        Write(theDiv, "C");                    
                        mayus = false;
                    }else if (number){
                        Write(theDiv, "3");
                        number = false;
                    }
                    else
                        Write(theDiv, "c");
                    ClearTabla();
                }
                //Letra D-d-4                                  
                if(tabla[70] && tabla[74] && tabla[75] && Count()==3){
                    if(mayus){
                        Write(theDiv, "D");                    
                        mayus = false;
                    }else if(number){
                        Write(theDiv, "4");
                        number = false;
                    }
                    else
                        Write(theDiv, "d");
                    ClearTabla();
                }
                //Letra E-e-5
                if(tabla[70] && tabla[75] && Count()==2){
                    if(mayus){
                        Write(theDiv, "E");                    
                        mayus = false;
                    }else if (number){
                        Write(theDiv, "5");
                        number = false;
                    }
                    else
                        Write(theDiv, "e");
                    ClearTabla();
                }                          
                  //Letra G-g-7
                if(tabla[70] && tabla[74] && tabla[68] && tabla[75] && Count()==4){
                    if(mayus){
                        Write(theDiv, "G");                    
                        mayus = false;
                    }else if (number){
                        Write(theDiv, "7");
                        number = false;
                    }
                    else
                        Write(theDiv, "g");
                    ClearTabla();
                }  
                //Letra H-h-8
                if(tabla[70] && tabla[75] && tabla[68] && Count()==3){
                    if(mayus){
                        Write(theDiv, "H");                    
                        mayus = false;
                    }else if (number){
                        Write(theDiv, "8");
                        number = false;
                    }
                    else
                        Write(theDiv, "h");
                    ClearTabla();
                }                  
                //Letra I-i-9
                if(tabla[68] && tabla[74] && Count()==2){
                    if(mayus){
                        Write(theDiv, "I");                    
                        mayus = false;
                    }else if (number){
                        Write(theDiv, "9");
                        number = false;
                    }
                    else
                        Write(theDiv, "i");
                    ClearTabla();
                }   
                //Letra J-j-0
                if(tabla[68] && tabla[75] && tabla[74] && Count()==3){
                    if(mayus){
                        Write(theDiv, "J");                    
                        mayus = false;
                    }else if (number){
                        Write(theDiv, "0");
                        number = false;
                    }
                    else
                        Write(theDiv, "j");
                    ClearTabla();
                }  
                //Letra K-k
                if(tabla[70] && tabla[83] && Count()==2){
                    if(mayus){
                        Write(theDiv, "K");                    
                        mayus = false;
                    }else
                        Write(theDiv, "k");
                    ClearTabla();
                } 
                //Letra L-l
                if(tabla[70] && tabla[68] && tabla[83] && Count()==3){
                    if (mayus) {
                        Write(theDiv, "L");
                        mayus = false;
                    }
                    else
                        Write(theDiv, "l");     
                    ClearTabla();
                }
                //Letra M-m
                 if(tabla[70] && tabla[74] && tabla[83] && Count()==3){
                    if(mayus){
                        Write(theDiv, "M");                    
                        mayus = false;
                    }else
                        Write(theDiv, "m");
                    ClearTabla();
                }
                //Letra N-n
                 if(tabla[70] && tabla[74] && tabla[75] && tabla[83] && Count()==4){
                    if(mayus){
                        Write(theDiv, "N");                    
                        mayus = false;
                    }else
                        Write(theDiv, "n");
                    ClearTabla();
                }  
                 //Letra Ñ-ñ
                if(tabla[70] && tabla[74] && tabla[75] && tabla[76] && tabla[68] && Count()==5){
                    if(mayus){
                        Write(theDiv, "Ñ");                    
                        mayus = false;
                    }else
                        Write(theDiv, "ñ");
                    ClearTabla();
                }                
                //Letra O-o
                 if(tabla[70] && tabla[75] && tabla[83] && Count()==3){
                    if(mayus){
                        Write(theDiv, "O");                    
                        mayus = false;
                    }else
                        Write(theDiv, "o");
                    ClearTabla();
                }
                //Letra P-p
                 if(tabla[70] && tabla[68] && tabla[83] && tabla[74] && Count()==4){
                    if(mayus){
                        Write(theDiv, "P");                    
                        mayus = false;
                    }else
                        Write(theDiv, "p");
                    ClearTabla();
                }
                 //Letra Q-q
                if(tabla[70] && tabla[68] && tabla[83] && tabla[75] && tabla[74] && Count()==5){
                    if(mayus){
                        Write(theDiv, "Q");                    
                        mayus = false;
                    }else
                        Write(theDiv, "q");
                    ClearTabla();
                }     
                //Letra R-r
                 if(tabla[70] && tabla[68] && tabla[83] && tabla[75] && Count()==4){
                    if(mayus){
                        Write(theDiv, "R");                    
                        mayus = false;
                    }else
                        Write(theDiv, "r");
                    ClearTabla();
                }
                //Letra S-s
                 if(tabla[68] && tabla[83] && tabla[74] && Count()==3){
                    if(mayus){
                        Write(theDiv, "S");                    
                        mayus = false;
                    }else
                        Write(theDiv, "s");
                    ClearTabla();
                }
                //Letra T-t
                 if(tabla[68] && tabla[83] && tabla[74] && tabla[75] && Count()==4){
                    if(mayus){
                        Write(theDiv, "T");                    
                        mayus = false;
                    }else
                        Write(theDiv, "t");
                    ClearTabla();
                }
                //Letra U-u
                 if(tabla[70] && tabla[83] && tabla[76] && Count()==3){
                    if(mayus){
                        Write(theDiv, "U");                    
                        mayus = false;
                    }else
                        Write(theDiv, "u");
                    ClearTabla();
                } 
                //Letra V-v
                 if(tabla[70] && tabla[68] && tabla[83] && tabla[76] && Count()==4){
                    if(mayus){
                        Write(theDiv, "V");                    
                        mayus = false;
                    }else
                        Write(theDiv, "v");
                    ClearTabla();
                }
                //Letra W-w
                 if(tabla[68] && tabla[74] && tabla[75] && tabla[76] && Count()==4){
                    if(mayus){
                        Write(theDiv, "W");                    
                        mayus = false;
                    }else
                        Write(theDiv, "w");
                    ClearTabla();
                }
                //Letra X-x
                 if(tabla[70] && tabla[74] && tabla[83] && tabla[76] && Count()==4){
                    if(mayus){
                        Write(theDiv, "X");                    
                        mayus = false;
                    }else
                        Write(theDiv, "x");
                    ClearTabla();
                } 
                 //Letra Y-y
                if(tabla[70] && tabla[83] && tabla[74] && tabla[75] && tabla[76] && Count()==5){
                    if(mayus){
                        Write(theDiv, "Y");                    
                        mayus = false;
                    }else
                        Write(theDiv, "y");
                    ClearTabla();
                } 
                //Letra Z-z
                 if(tabla[70] && tabla[83] && tabla[75] && tabla[76] && Count()==4){
                    if(mayus){
                        Write(theDiv, "Z");                    
                        mayus = false;
                    }else
                        Write(theDiv, "z");
                    ClearTabla();
                }     
                 //Letra Á-á
                if(tabla[70] && tabla[68] && tabla[83] && tabla[75] && tabla[76] && Count()==5){
                    if(mayus){
                        Write(theDiv, "Á");                    
                        mayus = false;
                    }else
                        Write(theDiv, "á");
                    ClearTabla();
                }    
                //Letra É-é
                if(tabla[68] && tabla[83] && tabla[74] && tabla[76] && Count()==4){
                    if(mayus){
                        Write(theDiv, "É");                    
                        mayus = false;
                    }else
                        Write(theDiv, "é");
                    ClearTabla();
                }
                //Letra Í-í
                if(tabla[83] && tabla[74] && Count()==2){
                    if(mayus){
                        Write(theDiv, "Í");                    
                        mayus = false;
                    }else
                        Write(theDiv, "í");
                    ClearTabla();
                } 
                //Letra Ó-ó
                if(tabla[83] && tabla[76] && tabla[74] && Count()==3){
                    if(mayus){
                        Write(theDiv, "Ó");                    
                        mayus = false;
                    }else
                        Write(theDiv, "ó");
                    ClearTabla();
                } 
                //Letra Ú-ú
                if(tabla[68] && tabla[83] && tabla[74] && tabla[75] && tabla[76] && Count()==5){
                    if(mayus){
                        Write(theDiv, "Ú");                    
                        mayus = false;
                    }else
                        Write(theDiv, "ú");
                    ClearTabla();
                }    
                //Letra Signo de Interrogacion
                //Letra Signa de Exclamacion
                //Letra Parentesis Abierto
                if(tabla[70] && tabla[68] && tabla[76] && Count()==3){
                    Write(theDiv, "(");
                    ClearTabla();
                } 
                //Letra Parentesis Cerrado
                if(tabla[74] && tabla[75] && tabla[83] && Count()==3){
                    Write(theDiv, ")");
                    ClearTabla();
                } 
            }
        });
    });
