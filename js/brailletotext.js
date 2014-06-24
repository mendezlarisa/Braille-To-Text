// $(document).ready(function() {
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
        var div = document.getElementById("bloque");
        var punto1 = document.getElementById("punto1");  
        var punto2 = document.getElementById("punto2");  
        var punto3 = document.getElementById("punto3");  
        var punto4 = document.getElementById("punto4");  
        var punto5 = document.getElementById("punto5");  
        var punto6 = document.getElementById("punto6");  

        function boldb(){
            if(bold == false){
                bold = true;
                NegritaA.play();}
            else{ 
                bold = false;
                NegritaD.play();}
        }
        function italicb(){
            if(italic == false){
                italic = true;
                CursivaA.play();}
            else{ 
                italic = false;
                CursivaD.play();}
        }
        function underlineb(){
            if(!underline){
                underline = true;
                SubrayadoA.play();}
            else{ 
                underline = false;
                SubrayadoD.play();}
        }

        function tal(){
            $('#bloque').css('text-align', 'left');
        }
        function tar(){
            $('#bloque').css('text-align', 'right');
        }
        function tac(){
            $('#bloque').css('text-align', 'center');
        }
        function taj(){
            $('#bloque').css('text-align', 'justify');
        }
        function almacenar(){
            localStorage.documento=div.innerHTML;
        }
        function viñeta(){
            div.innerHTML+="-";
        }
        function carga(){
            div.innerHTML=localStorage.documento;
        }

        document.getElementById("boldn").onclick = boldb;
        document.getElementById("italicn").onclick = italicb;
        document.getElementById("underlinen").onclick = underlineb;
        document.getElementById("alignl").onclick= tal;
        document.getElementById("alignr").onclick=tar;
        document.getElementById("alignc").onclick=tac;
        document.getElementById("alignj").onclick=taj;
        document.getElementById("guardar").onclick=almacenar;
        document.getElementById("listar").onclick=viñeta;
        document.getElementById("cargar").onclick=carga;

        $('#menu li a').css('color', 'blue');
     
        var A = new Audio('audio/A.mp3');
        var B = new Audio('audio/B.mp3');
        var C = new Audio('audio/C.mp3');
        var D = new Audio('audio/D.mp3');
        var E = new Audio('audio/E.mp3');
        var F = new Audio('audio/F.mp3');
        var G = new Audio('audio/G.mp3');
        var H = new Audio('audio/H.mp3');
        var I = new Audio('audio/I.mp3');
        var J = new Audio('audio/J.mp3');
        var K = new Audio('audio/K.mp3');
        var L = new Audio('audio/L.mp3');
        var M = new Audio('audio/M.mp3');
        var N = new Audio('audio/N.mp3');
        var Ñ = new Audio('audio/Ñ.mp3');
        var O = new Audio('audio/O.mp3');
        var P = new Audio('audio/P.mp3');
        var Q = new Audio('audio/Q.mp3');
        var R = new Audio('audio/R.mp3');
        var S = new Audio('audio/S.mp3');
        var T = new Audio('audio/T.mp3');
        var U = new Audio('audio/U.mp3');
        var V = new Audio('audio/V.mp3');
        var W = new Audio('audio/W.mp3');
        var X = new Audio('audio/X.mp3');
        var Y = new Audio('audio/Y.mp3');
        var Z = new Audio('audio/Z.mp3');
        var Aacentuada = new Audio('audio/a.acentuada.mp3');
        var Eacentuada = new Audio('audio/e.acentuada.mp3');
        var Iacentuada = new Audio('audio/i.acentuada.mp3');
        var Oacentuada = new Audio('audio/o.acentuada.mp3');
        var Uacentuada = new Audio('audio/u.acentuada.mp3');
        var AbreParentesis = new Audio('audio/AbreParentesis.mp3');
        var CierraParentesis = new Audio('audio/CierraParentesis.mp3');
        var MayusculaA = new Audio('audio/MayusculaActivado.mp3');
        var NegritaA = new Audio('audio/NegritaActivado.mp3');
        var NegritaD = new Audio('audio/NegritaDesactivado.mp3');
        var SubrayadoA = new Audio('audio/SubrayadoActivado.mp3');
        var SubrayadoD = new Audio('audio/SubrayadoDesactivado.mp3');
        var CursivaA = new Audio('audio/CursivaActivado.mp3');
        var CursivaD = new Audio('audio/CursivaDesactivado.mp3');
        var Uno = new Audio('audio/1.mp3');
        var Dos = new Audio('audio/2.mp3');
        var Tres = new Audio('audio/3.mp3');
        var Cuatro = new Audio('audio/4.mp3');
        var Cinco = new Audio('audio/5.mp3');
        var Seis = new Audio('audio/6.mp3');
        var Siete = new Audio('audio/7.mp3');
        var Ocho = new Audio('audio/8.mp3');
        var Nueve = new Audio('audio/9.mp3');
        var Cero = new Audio('audio/0.mp3');
        var NumeroA = new Audio('audio/NumerosA.mp3');


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
        function Clear(div){
            strng = div.innerHTML;
            div.innerHTML=strng.substring(0,strng.length-1)
        }
        function Write(div, texto){
            if (bold & !italic & !underline)
                div.innerHTML+="<b>"+texto+"</b>"
            else if(italic &  !bold & !underline)
                div.innerHTML+="<i>"+texto+"</i>"
            else if(underline & !italic &  !bold)
                div.innerHTML+="<u>"+texto+"</u>"
            else if (bold & italic & !underline)
                div.innerHTML+="<b><i>" + texto + "</b></i>"
            else if (bold & !italic & underline)
                div.innerHTML+="<u><b>" + texto + "</u></b>"
            else if (!bold & italic & underline)
                div.innerHTML+="<u><i>" + texto + "</u></i>"
            else if (bold & italic & underline)
                div.innerHTML+="<u><b><i>" + texto + "</u></b></i>";
            else
                div.innerHTML+=texto;             
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
        function VerificaP(){
            if(Verify4(70,68,83,74)){
                    if(mayus){
                        Write(div, "P");                    
                        mayus = false;
                    }else
                        Write(div, "p");
                    P.play();
                    ClearTabla();
                    ChangeColor(punto1);
                    ChangeColor(punto2);
                    ChangeColor(punto3);
                    ChangeColor(punto4);
            }
        }
        function VerificaQ(){
         //Letra Q-q
            if(Verify5(70,68,83,75,74)){
                if(mayus){
                    Write(div, "Q");                    
                    mayus = false;
                }else
                    Write(div, "q");
                ClearTabla();
                P.play();
                ChangeColor(punto1);
                ChangeColor(punto2);
                ChangeColor(punto3);
                ChangeColor(punto4);
                ChangeColor(punto5);
            } 
        }
        function VerificaA(){
        //Letra A-a-1
            if (Verify1(70)){
                if(mayus){
                    Write(div, "A");
                    mayus = false;
                    A.play();
                } else if (number){
                    Write(div, "1");
                    Uno.play();
                    number = false;
                }                   
                else{
                    Write(div,"a");
                    A.play();}
                ChangeColor(punto1);
                ClearTabla();
            }            
        }
        function VerificaB(){
        //Letra B-b-2
            if(Verify2(70,68)){
                if(mayus){
                    Write(div, "B");                    
                    mayus = false;
                    B.play();
                }else if (number){
                    Write(div, "2");
                    Dos.play();
                    number = false;
                }
                else{
                    Write(div, "b");
                    B.play();}
                ChangeColor(punto1);
                ChangeColor(punto2);
                ClearTabla();
            }             
        }
        function VerificaC(){
        //Letra C-c-3
            if(Verify2(70,74)){
                if(mayus){
                    Write(div, "C");                    
                    mayus = false;
                    C.play();
                }else if (number){
                    Write(div, "3");
                    Tres.play();
                    number = false;
                }
                else{
                    Write(div, "c");
                    C.play();}
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto4);
            }
        }
        function VerificaD(){
        //Letra D-d-4                                  
            if(Verify3(70,74,75)){
                if(mayus){
                    Write(div, "D");                    
                    mayus = false;
                    D.play();
                }else if(number){
                    Write(div, "4");
                    Cuatro.play();
                    number = false;
                }
                else{
                    Write(div, "d");
                    D.play();}
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto4);
                ChangeColor(punto5);
            }    
        }
        function VerificaE(){
        //Letra E-e-5
            if(Verify2(70,75)){
                if(mayus){
                    Write(div, "E");
                    E.play();                    
                    mayus = false;
                }else if (number){
                    Write(div, "5");
                    Cinco.play();
                    number = false;
                }
                else{
                    Write(div, "e");
                    E.play();}
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto5);
            }          
        }
        function VerificaF(){
            //Letra F-f-6
            if(Verify3(70,74,68)){
                if(mayus){
                    Write(div, "F");                    
                    mayus = false;
                    F.play();
                }else if (number){
                    Write(div, "6");
                    Seis.play();
                    number = false;
                }
                else{
                    Write(div, "f");
                    F.play();
                }
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto4);
                ChangeColor(punto2);
            } 
        }
        function VerificaG(){
          //Letra G-g-7
            if(Verify4(70,74,68,75)){
                if(mayus){
                    Write(div, "G"); 
                    G.play();                   
                    mayus = false;
                }else if (number){
                    Write(div, "7");
                    Siete.play();
                    number = false;
                }
                else{
                    Write(div, "g");
                    G.play();}
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto2);
                ChangeColor(punto4);
                ChangeColor(punto5);
            } 
        }
        function VerificaH(){
            //Letra H-h-8
            if(Verify3(70,75,68)){
                if(mayus){
                    Write(div, "H");
                    H.play();                    
                    mayus = false;
                }else if (number){
                    Write(div, "8");
                    Ocho.play();
                    number = false;
                }
                else{
                    Write(div, "h");
                    H.play();}
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto2);
                ChangeColor(punto5);
            } 
        }
        function VerificaI(){
            //Letra I-i-9
            if(Verify2(68,74)){
                if(mayus){
                    Write(div, "I"); 
                    I.play();                   
                    mayus = false;
                }else if (number){
                    Write(div, "9");
                    Nueve.play();
                    number = false;
                }
                else{
                    Write(div, "i");
                    I.play();}
                ClearTabla();
                ChangeColor(punto2);
                ChangeColor(punto4);
            }   
        }
        function VerificaJ(){
            //Letra J-j-0
            if(Verify3(68,75,74)){
                if(mayus){
                    Write(div, "J");                    
                    mayus = false;
                    J.play();
                }else if (number){
                    Write(div, "0");
                    Cero.play();
                    number = false;
                }
                else{
                    Write(div, "j");
                    J.play();}
                ClearTabla();
                ChangeColor(punto2);
                ChangeColor(punto4);
                ChangeColor(punto5);
            }
        }
        function VerificaK(){
            //Letra K-k
            if(Verify2(70,83)){
                if(mayus){
                    Write(div, "K");                    
                    mayus = false;
                }else
                    Write(div, "k");
                K.play();
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto3);
            } 
        }
        function VerificaL(){
            //Letra L-l
            if(Verify3(70,68,83)){
                if (mayus) {
                    Write(div, "L");
                    mayus = false;
                }
                else
                    Write(div, "l"); 
                L.play();    
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto2);
                ChangeColor(punto3);
            }
        }
        //Letra M-m
        function VerificaM(){
            if(Verify3(70,74,83)){
                if(mayus){
                    Write(div, "M");                    
                    mayus = false;
                }else
                    Write(div, "m");
                M.play();
                ClearTabla();
                ChangeColor(punto3);
                ChangeColor(punto1);
                ChangeColor(punto4);
            }
        }
        function VerificaN(){
            //Letra N-n
            if(Verify4(70,74,75,83)){
                if(mayus){
                    Write(div, "N");                    
                    mayus = false;
                }else
                    Write(div, "n");
                ClearTabla();
                N.play();
                ChangeColor(punto1);
                ChangeColor(punto3);
                ChangeColor(punto4);
                ChangeColor(punto5);
            } 
        } 
        function Verifica_N(){
             //Letra Ñ-ñ
            if(Verify5(70,74,75,76,68)){
                if(mayus){
                    Write(div, "Ñ");                    
                    mayus = false;
                }else
                    Write(div, "ñ");
                ClearTabla();
                Ñ.play();
                ChangeColor(punto1);
                ChangeColor(punto2);
                ChangeColor(punto4);
                ChangeColor(punto5);
                ChangeColor(punto6);
            }                
        }
        function VerificaO(){
            //Letra O-o
            if(Verify3(70,75,83)){
                if(mayus){
                    Write(div, "O");                    
                    mayus = false;
                }else
                    Write(div, "o");
                O.play();
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto3);
                ChangeColor(punto5);
            }
        }
        function VerificaR(){     
            //Letra R-r
            if(Verify4(70,68,83,75)){
                if(mayus){
                    Write(div, "R");                    
                    mayus = false;
                }else
                    Write(div, "r");
                R.play();
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto2);
                ChangeColor(punto3);
                ChangeColor(punto5);
            }
        }
        function VerificaS(){
            //Letra S-s
            if(Verify3(68,83,74)){
                if(mayus){
                    Write(div, "S");                    
                    mayus = false;
                }else
                    Write(div, "s");
                S.play();
                ClearTabla();
                ChangeColor(punto2);
                ChangeColor(punto3);
                ChangeColor(punto4);
            }
        }
        function VerificaT(){
            //Letra T-t
            if(Verify4(68,83,74,75)){
                if(mayus){
                    Write(div, "T");                    
                    mayus = false;
                }else
                    Write(div, "t");
                T.play();
                ClearTabla();
                ChangeColor(punto2);
                ChangeColor(punto3);
                ChangeColor(punto4);
                ChangeColor(punto5);
            }
        }
        function VerificaU(){
            //Letra U-u
            if(Verify3(70,83,76)){
                if(mayus){
                    Write(div, "U");                    
                    mayus = false;
                }else
                    Write(div, "u");
                U.play();
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto4);
                ChangeColor(punto6);
            } 
        }
        function VerificaV(){
            //Letra V-v
            if(Verify4(70,68,83,76)){
                if(mayus){
                    Write(div, "V");                    
                    mayus = false;
                }else
                    Write(div, "v");
                V.play();
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto2);
                ChangeColor(punto3);
                ChangeColor(punto6);
            }
        }
        function VerificaW(){
            //Letra W-w
            if(Verify4(68,74,75,76)){
                if(mayus){
                    Write(div, "W");                    
                    mayus = false;
                }else
                    Write(div, "w");
                W.play();
                ClearTabla();
                ChangeColor(punto2);
                ChangeColor(punto4);
                ChangeColor(punto5);
                ChangeColor(punto6);
            }
        }
        function VerificaX(){
            //Letra X-x
            if(Verify4(70,74,83,76)){
                if(mayus){
                    Write(div, "X");                    
                    mayus = false;
                }else
                    Write(div, "x");
                X.play();
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto3);
                ChangeColor(punto4);
                ChangeColor(punto6);
            } 
        }
        function VerificaY(){
             //Letra Y-y
            if(Verify5(70,83,74,75,76)){
                if(mayus){
                    Write(div, "Y");                    
                    mayus = false;
                }else
                    Write(div, "y");
                Y.play();
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto6);
                ChangeColor(punto3);
                ChangeColor(punto4);
                ChangeColor(punto5);
            } 
        }
        function VerificaZ(){
            //Letra Z-z
            if(Verify4(70,83,75,76)){
                if(mayus){
                    Write(div, "Z");                    
                    mayus = false;
                }else
                    Write(div, "z");
                Z.play();
                ClearTabla();
                ChangeColor(punto1);
                ChangeColor(punto3);
                ChangeColor(punto6);
                ChangeColor(punto5);
            }   
        }
        function VerificaNumero(){
            //Numero                
            if(Verify4(83,74,75,76)){
                number = true;
                // NumerosA.play();
                console.log("Numero");
                ClearTabla();
                ChangeColor(punto3);
                ChangeColor(punto4);
                ChangeColor(punto5);
                ChangeColor(punto6);
                t1 = 0;
                t2 = 0;
                t3 = 0; 
                t4 = 0;
                t5 = 0;
                cuenta = 0; 
            } 
        }
        function VerificaMayuscula(){
            //Mayuscula
            if(Verify2(74,76)){
                mayus = true; 
                MayusculaA.play();         
                ClearTabla(); 
                ChangeColor(punto4);
                ChangeColor(punto6);                   
            }    
        }
        function VerificaMultiples(){
            //Espacio            
            if (Verify1(72)){
                Write(div, " ");
                ClearTabla();
            }
            //Backspace
            if (Verify1(192)) {
                Clear(div);
                ClearTabla();
            }
            //Salto de Linea
            if (Verify1(65)) {
                Write(div, "<br>");
                ClearTabla();
            }
            //Tabulador
            if (Verify1(71)) {
                Write(div, "  ");
                ClearTabla();
            }
            //Bold
            if (Verify1(90)) {
                if(bold == false){
                    bold = true;
                    NegritaA.play();}
                else{ 
                    bold = false;
                    NegritaD.play();}
                ClearTabla();
            }
            //Italic
            if (Verify1(88)) {
                if(italic == false){
                    italic = true;
                    CursivaA.play();}
                else{ 
                    italic = false;
                    CursivaD.play();}
                ClearTabla();
            }
            //Underline
            if (Verify1(67)) {
                if(!underline){
                    underline = true;
                    SubrayadoA.play();}
                else{ 
                    underline = false;
                    SubrayadoD.play();}
                ClearTabla();
            }
        }

        var t1 = 0;
        var t2 = 0;
        var t3 = 0;
        var t4 = 0;
        var t5 = 0;

        var cuenta = 0;

        $(document).keydown(function(event) {
            var keyCode = event.which;
            var keyChar = String.fromCharCode(keyCode);

            //Reset
            if (tabla.hasOwnProperty(keyCode)) {
                tabla[keyCode] = true;
            }else{
                ClearTabla();
                t1 = 0;
                t2 = 0;
                t3 = 0; 
                t4 = 0;
                t5 = 0;
                cuenta = 0;  
            }

            if (Count()>5) {
                ClearTabla();
            };

            if (t1 == 0) {
                t1 = 1; cuenta++;
            }else if (t2 == 0) {
                t2 = 1; cuenta++;
            }else if (t3 == 0) {
                t3 = 1; cuenta++;
            }else if (t4 == 0){
                t4 = 1; cuenta++;
            }else if (t5 == 0){
                t5 = 1; cuenta++;
            }

            VerificaNumero();

            console.log(Count()+" "+cuenta);
            if (Count() == cuenta) {
                console.log("hola"+cuenta);  

            switch(cuenta){
                case 1: VerificaMultiples(); 
                        VerificaA();
                        break;
                case 2: VerificaMayuscula();
                        VerificaB(); VerificaC(); 
                        VerificaE(); VerificaI(); 
                        VerificaK(); ClearTabla(); 
                        break;
                case 3: VerificaD(); VerificaF(); 
                        VerificaH(); VerificaJ(); 
                        VerificaL(); VerificaM(); 
                        VerificaO(); VerificaS(); 
                        VerificaU(); ClearTabla();
                        break;
                case 4: 
                        VerificaP(); VerificaG(); 
                        VerificaN(); VerificaR(); 
                        VerificaT(); 
                        VerificaV(); VerificaW();
                        VerificaX(); VerificaZ();
                        ClearTabla();
                        break;
                case 5: VerificaQ(); Verifica_N(); 
                        VerificaY(); ClearTabla();
                        break;
            }
                t1 = 0;
                t2 = 0;
                t3 = 0; 
                t4 = 0;
                t5 = 0;
                cuenta = 0;  
            }

        });