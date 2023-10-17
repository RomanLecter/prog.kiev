
        // геометрия
        document.write("<div style='color: orange;'>")
        document.write("Прямоугольник <br><br>")
        for(var a = 0; a < 10; a++){
            if(a == 0 || a == 9){
                for(var b = 0; b < 10; b++){
                    document.write("$ &nbsp");       
                }
            }
            else{
                document.write("$ &nbsp"); 
                for(var c = 0; c < 8; c++){
                    document.write(" &nbsp &nbsp");
                }
                document.write("$ &nbsp");
            }
            document.write("<br>");
        }
        document.write("<div style='color: blue;'>")
        document.write("<br>Прямоугольный треугольник <br>")
        for(var d = 0; d < 10; d++){
            for(var e = 0; e < d; e++){
                document.write("$ &nbsp");
            }
            document.write("<br>");
        }
        document.write("<div style='color: green; text-align:center;'>")
        document.write("<br>Равносторонний треугольник<br>")
        document.write("<div style='text-align:center;'>")
        for(var f = 0; f < 10; f++){
            for(var g = 0;g < f; g++){
                document.write("&nbsp $ &nbsp");  
            }
            document.write("<br>");
        }
        document.write("</div>")

        document.write("<div style='color: red; text-align:center'>")
        document.write("<br>Ромб<br>")
        document.write("<div style='text-align:center;'>")
        for(var h = 0; h < 8; h++){
            for(var i = 0; i < h; i++){
                document.write("&nbsp $ &nbsp");   
            }
            document.write("<br>");
        }
        for(var j = 0; j < 8; j++){
            for(var k = 8; k > j; k--){
                document.write("&nbsp $ &nbsp");  
            }
            document.write("<br>");
        }
        document.write("</div>")
