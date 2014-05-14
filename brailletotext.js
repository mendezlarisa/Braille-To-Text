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
            76: false, //L - 6
            90: false, //Z - Bold
            88: false, //X - Italic
            67: false  //C - Underline
        };
        var mayus = false;        
        var number = false;
        var bold = false;
        var italic = false;
        var underline = false;
        var textarea = document.getElementById("bloque");
        var punto1 = document.getElementById("punto1");  
        var punto2 = document.getElementById("punto2");  
        var punto3 = document.getElementById("punto3");  
        var punto4 = document.getElementById("punto4");  
        var punto5 = document.getElementById("punto5");  
        var punto6 = document.getElementById("punto6");  

              
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
        function Clear(textarea){
            strng = textarea.value;
            textarea.value=strng.substring(0,strng.length-1)
        }
        function Write(textarea, texto){
            if (bold & !italic & !underline)
                textarea.innerHTML+="<b>"+texto+"</b>"
            else if(italic &  !bold & !underline)
                textarea.innerHTML+="<i>"+texto+"</i>"
            else if(underline & !italic &  !bold)
                textarea.innerHTML+="<u>"+texto+"</u>"
            else if (bold & italic & !underline)
                textarea.innerHTML+="<b><i>" + texto + "</b></i>"
            else if (bold & !italic & underline)
                textarea.innerHTML+="<u><b>" + texto + "</u></b>"
            else if (bold & italic & underline)
                textarea.innerHTML+="<u><b><i>" + texto + "</u></b></i>";
            else
                textarea.innerHTML+=texto;                
        }
        function ChangeColor(puntoid){
            move(puntoid)
                .set('background-color', '#5BC0DE')
                .duration(300)
                .end(function(){
                    move(puntoid)
                        .set('background-color', '#1c1c1c')
                        .end();
                });
        }
        function Verify1(i){
            if (Count()==1 && tabla[i])
                return 1;
        }
        function Verify2(i,j){
            if (Count()==2 && tabla[i] && tabla[j])
                return 1;
        }
        function Verify3(i,j,k){
            if (Count()==3 && tabla[i] && tabla[j] && tabla[k])
                return 1;
        }
        function Verify4(i,j,k,w){
            if (Count()==4 && tabla[i] && tabla[j] && tabla[k] && tabla[w])
                return 1;
        }
        function Verify5(i,j,k,w,s){
            if (Count()==5 && tabla[i] && tabla[j] && tabla[k] && tabla[w] && tabla[s])
                return 1;
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
                if(Verify4(83,74,75,76)){
                    number = true;
                    ClearTabla();
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                    ChangeColor(punto6);
                } 
                //Mayuscula
                if(Verify2(74,76)){
                    mayus = true;          
                    ClearTabla(); 
                    ChangeColor(punto4);
                    ChangeColor(punto6);                   
                }    
                //Espacio            
                if (Verify1(72)){
                    Write(textarea, " ");
                    ClearTabla();
                }
                //Backspace
                if (Verify1(192)) {
                    Clear(textarea);
                    ClearTabla();
                }
                //Salto de Linea
                if (Verify1(65)) {
                    Write(textarea, "\n");
                    ClearTabla();
                }
                //Tabulador
                if (Verify1(71)) {
                    Write(textarea, "\t");
                    ClearTabla();
                }
                //Bold
                if (Verify1(90)) {
                    if(bold == false)
                        bold = true;
                    else 
                        bold = false;
                    ClearTabla();
                }
                //Italic
                if (Verify1(88)) {
                    if(italic == false)
                        italic = true;
                    else 
                        italic = false;
                    ClearTabla();
                }
                //Underline
                if (Verify1(67)) {
                    if(!underline)
                        underline = true;
                    else 
                        underline = false;
                    ClearTabla();
                }       
                // //Punto
                // if (tabla[83] && Count()==1) {
                //     textarea.value+=".";
                //     ClearTabla();
                // } 
                // //Coma 
                // if (tabla[68] && Count()==1) {
                //     textarea.value+=",";
                //     ClearTabla();
                // }          
                //Guion
                if(Verify2(83,76)){
                    Write(textarea, "-");                    
                    ClearTabla();
                    ChangeColor(punto3);
                    ChangeColor(punto6);
                }               
                //Comillas                                
                if(Verify3(68,83,76)){
                    Write(textarea, "\"");
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto6);
                }

                //Letra F-f-6
                if(Verify3(70,74,68)){
                    if(mayus){
                        Write(textarea, "F");                    
                        mayus = false;
                    }else if (number){
                        Write(textarea, "6");
                        number = false;
                    }
                    else{
                        Write(textarea, "f");
                    }
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto4);
                    ChangeColor(punto2);
                } 
                
                //Letra A-a-1
                if (Verify1(70)){
                    if(mayus){
                        Write(textarea, "A");
                        mayus = false;
                    } else if (number){
                        Write(textarea, "1");
                        number = false;
                    }                   
                    else
                        Write(textarea,"a");
                    ChangeColor(punto1);
                    ClearTabla();
                }
                //Letra B-b-2
                if(Verify2(70,68)){
                    if(mayus){
                        Write(textarea, "B");                    
                        mayus = false;
                    }else if (number){
                        Write(textarea, "2");
                        number = false;
                    }
                    else
                        Write(textarea, "b");
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ClearTabla();
                }                 
                //Letra C-c-3
                if(Verify2(70,74)){
                    if(mayus){
                        Write(textarea, "C");                    
                        mayus = false;
                    }else if (number){
                        Write(textarea, "3");
                        number = false;
                    }
                    else
                        Write(textarea, "c");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto4);
                }
                //Letra D-d-4                                  
                if(Verify3(70,74,75)){
                    if(mayus){
                        Write(textarea, "D");                    
                        mayus = false;
                    }else if(number){
                        Write(textarea, "4");
                        number = false;
                    }
                    else
                        Write(textarea, "d");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                }
                //Letra E-e-5
                if(Verify2(70,75)){
                    if(mayus){
                        Write(textarea, "E");                    
                        mayus = false;
                    }else if (number){
                        Write(textarea, "5");
                        number = false;
                    }
                    else
                        Write(textarea, "e");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto5);
                }                          
                  //Letra G-g-7
                if(Verify4(70,74,68,75)){
                    if(mayus){
                        Write(textarea, "G");                    
                        mayus = false;
                    }else if (number){
                        Write(textarea, "7");
                        number = false;
                    }
                    else
                        Write(textarea, "g");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                }  
                //Letra H-h-8
                if(Verify3(70,75,68)){
                    if(mayus){
                        Write(textarea, "H");                    
                        mayus = false;
                    }else if (number){
                        Write(textarea, "8");
                        number = false;
                    }
                    else
                        Write(textarea, "h");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto5);
                }                  
                //Letra I-i-9
                if(Verify2(68,74)){
                    if(mayus){
                        Write(textarea, "I");                    
                        mayus = false;
                    }else if (number){
                        Write(textarea, "9");
                        number = false;
                    }
                    else
                        Write(textarea, "i");
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto4);
                }   
                //Letra J-j-0
                if(Verify3(68,75,74)){
                    if(mayus){
                        Write(textarea, "J");                    
                        mayus = false;
                    }else if (number){
                        Write(textarea, "0");
                        number = false;
                    }
                    else
                        Write(textarea, "j");
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                }  
                //Letra K-k
                if(Verify2(70,83)){
                    if(mayus){
                        Write(textarea, "K");                    
                        mayus = false;
                    }else
                        Write(textarea, "k");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto3);
                } 
                //Letra L-l
                if(Verify3(70,68,83)){
                    if (mayus) {
                        Write(textarea, "L");
                        mayus = false;
                    }
                    else
                        Write(textarea, "l");     
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                }
                //Letra M-m
                 if(Verify3(70,74,83)){
                    if(mayus){
                        Write(textarea, "M");                    
                        mayus = false;
                    }else
                        Write(textarea, "m");
                    ClearTabla();
                    ChangeColor(punto3);
                    ChangeColor(punto1);
                    ChangeColor(punto4);
                }
                //Letra N-n
                 if(Verify4(70,74,75,83)){
                    if(mayus){
                        Write(textarea, "N");                    
                        mayus = false;
                    }else
                        Write(textarea, "n");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                }  
                 //Letra Ñ-ñ
                if(Verify5(70,74,75,76,68)){
                    if(mayus){
                        Write(textarea, "Ñ");                    
                        mayus = false;
                    }else
                        Write(textarea, "ñ");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                    ChangeColor(punto6);
                }                
                //Letra O-o
                 if(Verify3(70,75,83)){
                    if(mayus){
                        Write(textarea, "O");                    
                        mayus = false;
                    }else
                        Write(textarea, "o");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto3);
                    ChangeColor(punto5);
                }
                //Letra P-p
                 if(Verify4(70,68,83,74)){
                    if(mayus){
                        Write(textarea, "P");                    
                        mayus = false;
                    }else
                        Write(textarea, "p");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                }
                 //Letra Q-q
                if(Verify5(70,68,83,75,74)){
                    if(mayus){
                        Write(textarea, "Q");                    
                        mayus = false;
                    }else
                        Write(textarea, "q");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                }     
                //Letra R-r
                 if(Verify4(70,68,83,75)){
                    if(mayus){
                        Write(textarea, "R");                    
                        mayus = false;
                    }else
                        Write(textarea, "r");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto5);
                }
                //Letra S-s
                 if(Verify3(68,83,74)){
                    if(mayus){
                        Write(textarea, "S");                    
                        mayus = false;
                    }else
                        Write(textarea, "s");
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                }
                //Letra T-t
                 if(Verify4(68,83,74,75)){
                    if(mayus){
                        Write(textarea, "T");                    
                        mayus = false;
                    }else
                        Write(textarea, "t");
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                }
                //Letra U-u
                 if(Verify3(70,83,76)){
                    if(mayus){
                        Write(textarea, "U");                    
                        mayus = false;
                    }else
                        Write(textarea, "u");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto4);
                    ChangeColor(punto6);
                } 
                //Letra V-v
                 if(Verify4(70,68,83,76)){
                    if(mayus){
                        Write(textarea, "V");                    
                        mayus = false;
                    }else
                        Write(textarea, "v");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto6);
                }
                //Letra W-w
                 if(Verify4(68,74,75,76)){
                    if(mayus){
                        Write(textarea, "W");                    
                        mayus = false;
                    }else
                        Write(textarea, "w");
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                    ChangeColor(punto6);
                }
                //Letra X-x
                 if(Verify4(70,74,83,76)){
                    if(mayus){
                        Write(textarea, "X");                    
                        mayus = false;
                    }else
                        Write(textarea, "x");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto6);
                } 
                 //Letra Y-y
                if(Verify5(70,83,74,75,76)){
                    if(mayus){
                        Write(textarea, "Y");                    
                        mayus = false;
                    }else
                        Write(textarea, "y");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto6);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                } 
                //Letra Z-z
                 if(Verify4(70,83,75,76)){
                    if(mayus){
                        Write(textarea, "Z");                    
                        mayus = false;
                    }else
                        Write(textarea, "z");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto3);
                    ChangeColor(punto6);
                    ChangeColor(punto5);
                }     
                 //Letra Á-á
                if(Verify5(70,68,83,75,76)){
                    if(mayus){
                        Write(textarea, "Á");                    
                        mayus = false;
                    }else
                        Write(textarea, "á");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto6);
                    ChangeColor(punto5);
                }    
                //Letra É-é
                if(Verify4(68,83,74,76)){
                    if(mayus){
                        Write(textarea, "É");                    
                        mayus = false;
                    }else
                        Write(textarea, "é");
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto6);
                }
                //Letra Í-í
                if(Verify2(83,74)){
                    if(mayus){
                        Write(textarea, "Í");                    
                        mayus = false;
                    }else
                        Write(textarea, "í");
                    ClearTabla();
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                } 
                //Letra Ó-ó
                if(Verify3(83,76,74)){
                    if(mayus){
                        Write(textarea, "Ó");                    
                        mayus = false;
                    }else
                        Write(textarea, "ó");
                    ClearTabla();
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto6);
                } 
                //Letra Ú-ú
                if(Verify5(68,83,74,75,76)){
                    if(mayus){
                        Write(textarea, "Ú");                    
                        mayus = false;
                    }else
                        Write(textarea, "ú");
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                    ChangeColor(punto6);
                }    
                //Letra Ü-ü
                if(Verify4(70,68,75,76)){
                    if(mayus){
                        Write(textarea, "Ü");                    
                        mayus = false;
                    }else
                        Write(textarea, "ü");
                    ClearTabla();
                    ChangeColor(punto2);
                    ChangeColor(punto1);
                    ChangeColor(punto5);
                    ChangeColor(punto6);
                } 
                //Letra Signo de Interrogacion
                //Letra Signa de Exclamacion
                //Letra Parentesis Abierto
                if(Verify3(70,68,76)){
                    Write(textarea, "(");
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                } 
                //Letra Parentesis Cerrado
                if(Verify3(74,75,83)){
                    Write(textarea, ")");
                    ClearTabla();
                    ChangeColor(punto4);
                    ChangeColor(punto5);
                    ChangeColor(punto3);
                } 
                // //Punto y Coma
                // if(Verify2(83,68)){
                //     Write(textarea, ";");                    
                //     ClearTabla();
                //     ChangeColor(punto3);
                //     ChangeColor(punto2);
                // }
            }
        });
    });
