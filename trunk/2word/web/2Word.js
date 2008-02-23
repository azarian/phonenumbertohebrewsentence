
    var onLoadWindowState = 1;

    //1.returens the phone number suitable for currChar
    function char2num(currChar)
      {
        if(currChar =="\u05D4" || currChar == "\u05D3" || currChar =="\u05D5")
        {
          return ("2")
        }
         if(currChar == "\u05D0" || currChar == "\u05D1" || currChar == "\u05D2")
        {
          return ("3")
        }
         if(currChar == "\u05DE" || currChar == "\u05E0" || currChar == "\u05DD"  || currChar == "\u05DF" )
        {
          return ("4")
        }
         if(currChar == "\u05D9" || currChar == "\u05DB" || currChar == "\u05DC" || currChar == "\u05DA")
        {
          return ("5")
        }
         if(currChar == "\u05D6"|| currChar == "\u05D7" || currChar == "\u05D8")
        {
          return ("6")
        }
         if(currChar =="\u05E8" || currChar == "\u05E9" || currChar == "\u05EA")
        {
          return ("7")
        }
         if(currChar == "\u05E7" || currChar == "\u05E5"  || currChar == "\u05E6")
        {
          return ("8")
        }
         if(currChar == "\u05E4" || currChar == "\u05E3" || currChar == "\u05E1"  || currChar == "\u05E2")
        {
          return ("9")
        }
        if(validateNum(currChar) != "")
        {
          return validateNum(currChar)
        }
        return ("")
      }
      
      //2.validate given char is a number
      function validateNum(num)
      {
        if(num == "0" || num == "1" || num =="2" || num == "3" || num == "4" || num == "5" || num == "6" || num == "7" || num == "8" || num == "9")
        {
          return num
        }
      }
      
      //2.validate given char is a number
      function validateNumZeroOne(num)
      {
          for(var i=0; i < num.length; i++){
              if(num.charAt(i) == "0" || num.charAt(i) == "1")
              {
                return 0
              }
          }
          return 1
      }

     

      //3.this function will get input text & return the proper number
      function word2num(value)
      {
            var word = value
            var num = ""
            //validate length
            if(word.length > 11)
            {
              alert("\u05D0\u05D5\u05E8\u05DA \u05D4\u05DE\u05D9\u05DC\u05D4 \u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9 \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05E2\u05D3 10 \u05EA\u05D5\u05D9\u05DD")
             // input.value = "\u05D4\u05DB\u05E0\u05E1 \u05D1\u05D1\u05E7\u05E9\u05D4 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D0\u05D5 \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD"
              return
            }
            for(var i = 0 ; i<word.length ; i++)
            {
                if(char2num(word.charAt(i)) == undefined)
                {
                alert("\u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05EA\u05D5\u05D9\u05DD \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA \u05D0\u05D5 \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05DC\u05DC\u05D0 \u05E1\u05D9\u05DE\u05E0\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9\u05DD")
               // input.value="\u05D4\u05DB\u05E0\u05E1 \u05D1\u05D1\u05E7\u05E9\u05D4 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D0\u05D5 \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD"
                return
                }
                 num += char2num(word.charAt(i))
            }
            //input.value = num
            document.getElementById("board").background="images\\BGImages\\resultBGNum.gif"
            document.getElementById("board").hight="400"
            document.getElementById("board").width="670"
            document.getElementById("board").innerHTML = "<div align='center' valign='top' dir='rtl' lang='he'><h2>" + num + "</h2></div>"
      }
      
      //4.this function will validate & send content to jsp page
      function validatAndSendNumToJSP(value)
      {
           // var input =document.getElementById("Text1")
            var num = value//input.value
            //validate length
            if(num.length>10){
                alert("\u05D0\u05D5\u05E8\u05DA \u05D4\u05DE\u05D9\u05DC\u05D4 \u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9 \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05E2\u05D3 10 \u05EA\u05D5\u05D9\u05DD")
                //input.value = "\u05D4\u05DB\u05E0\u05E1 \u05D1\u05D1\u05E7\u05E9\u05D4 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D0\u05D5 \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD"
                return
            }
            //validate content
            if(firstIndexOfChar(num)!=-1){
                alert("\u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DE\u05D9\u05DC\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3")
               // input.value = "\u05D4\u05DB\u05E0\u05E1 \u05D1\u05D1\u05E7\u05E9\u05D4 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D0\u05D5 \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD"
                return
            }
            if(validateNumZeroOne(num)==0){
                //alert(" \u05D1\u05DE\u05E1\u05E4\u05E8 \u05E9\u05D4\u05D5\u05DB\u05E0\u05E1 \u05E7\u05D9\u05D9\u05DE\u05D5\u05EA \u05D4\u05E1\u05E4\u05E8\u05D5\u05EA 0 \u05D0\u05D5 1 \u05E1\u05E4\u05E8\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D0\u05D9\u05E0\u05DF \u05DE\u05D5\u05EA\u05D0\u05DE\u05D5\u05EA \u05DC\u05DE\u05D9\u05DC\u05D9\u05DD \u05E2\u05DC \u05DE\u05E7\u05E9\u05D9\u05DD \u05D1\u05D8\u05DC\u05E4\u05D5\u05DF \u05D5\u05DC\u05DB\u05DF \u05D9\u05E9\u05EA\u05DC\u05D1\u05D5 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D7\u05D3\u05E9 \u05DB\u05DE\u05D5 \u05E9\u05D4\u05DF")
            }
            var valueToJsp = document.getElementById("numberString")
            valueToJsp.value = value
            document.getElementById("form1").submit()
            return
      }

      //5.this function will init the body with a new data window - not used
      function init()
      { 
            updateDataWindow(onLoadWindowState);
      }

      //6.this function will manipulate commands from other pages - not fully implemented - not used
      function onExternIconClick(id)
     {
            onLoadWindowState = 3;
     }
      
     //7.this function will handle on mouse click operations
      function onMouseClick(id)
      {
            if(id == "HomePage"){
                 //setImageButtonSrc(id,"images\\home\\homep.gif")
                 updateDataWindow(1)
                 return
            }
           if(id=="About" || id=="AboutInBoard"){
                //setImageButtonSrc(id,"images\\about\\aboutp.gif")
                window.open("about.html","aboutWindow","width = 1037 height=900 resizable=yes scrollbars=yes bgcolor=#ffffff")
                return
            }
             if(id=="WhoAreWe" ){
                //setImageButtonSrc(id,"images\\theTeam\\theTeamp.gif")
                updateDataWindow(4)
                return
            }
             if(id=="Contact" ){
               // setImageButtonSrc(id,"images\\contact\\contactp.gif")
                updateDataWindow(3)
                return
            }
      }

      //8.this function will handle on mouse up operations - not used
      function onMouseUp(id)
      {
             if(id == "HomePage"){
                 //setImageButtonSrc(id,"images\\home\\home.gif")
                 return
            }
            if(id=="About" || id=="AboutInBoard"){
                //setImageButtonSrc(id,"images\\about\\about.gif")
                return
            }
             if(id=="WhoAreWe" ){
                //setImageButtonSrc(id,"images\\theTeam\\theTeam.gif")
                return
            }
             if(id=="Contact" ){
                //setImageButtonSrc(id,"images\\contact\\contact.gig")
                return
            }
      }   

      //9.this function will handle on mouse hover operations - not used
      function onMouseHover(id)
      {
             if(id == "HomePage"){
                 //setImageButtonSrc(id,"images\\home\\homec.gif")
                 return
            }
            if(id=="About" || id=="AboutInBoard"){
                //setImageButtonSrc(id,"images\\about\\aboutc.gif")
                return
            }
             if(id=="WhoAreWe" ){
                //setImageButtonSrc(id,"images\\theTeam\\theTeamc.gif")
                return
            }
             if(id=="Contact" ){
                //setImageButtonSrc(id,"images\\contact\\contactc.gif")
                return
            }
      }

      //10.this function will handle on mouse out operations - not used
      function onMouseOut(id)
      {
             if(id == "HomePage"){
                 //setImageButtonSrc(id,"images\\home\\home.gif")
                 return
            }
            if(id=="About" || id=="AboutInBoard"){
                //setImageButtonSrc(id,"images\\about\\about.gif")
                return
            }
             if(id=="WhoAreWe" ){
                //setImageButtonSrc(id,"images\\theTeam\\theTeam.gif")
                return
            }
             if(id=="Contact" ){
                //setImageButtonSrc(id,"images\\contact\\contact.gif")
                return
            }
      }
      
      //11.this function will dispatch between first method to second method
      function dispatchAction(send2jsp,value)
      {
            //var rb1 = document.getElementById("radiobutton1")
            //var rb2 = document.getElementById("radiobutton2")
            if(send2jsp == 1)
            {
                validatAndSendNumToJSP(value)
                return
            }
            if(send2jsp == 2)
            {
                word2num(value)
                return
            }
            else
            {
            //default function
                word2num(value)
                return
            }
      }
      
      //12.this function  will update the data window - table cell with new content
      function updateDataWindow(dataIndex)
      {
            var BoardRow          = document.getElementById("boardRow")
            var InterfaceRow = document.getElementById("InterfaceMovie")
            if(dataIndex == 1) //this text will not be used (flash help instead)
            {
              BoardRow.style.display='none';
              InterfaceRow.style.display='block';
              document.getElementById("board").innerHTML = "<br><br><div align='right' dir='rtl' lang='he'>"
              document.getElementById("board").innerHTML += "<div align='right' dir='rtl' lang='he'><p><strong> &#1489;&#1512;&#1493;&#1499;&#1497;&#1501; &#1492;&#1489;&#1488;&#1497;&#1501; &#1500;&#1488;&#1514;&#1512; 2word  !</strong><br />"
              document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he'>&#1502;&#1496;&#1512;&#1514; &#1492;&#1488;&#1514;&#1512; &#1500;&#1492;&#1493;&#1505;&#1497;&#1507; &#1495;&#1497;&#1497;&#1501; &#1500;&#1502;&#1505;&#1508;&#1512;&#1497; &#1492;&#1496;&#1500;&#1508;&#1493;&#1503; &#1513;&#1499;&#1493;&#1500;&#1504;&#1493; &#1492;&#1514;&#1512;&#1490;&#1500;&#1504;&#1493; &#1488;&#1500;&#1497;&#1492;&#1501; <br />"
              document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he'>&#1492;&#1488;&#1514;&#1512; &#1506;&#1493;&#1489;&#1491; &#1489;&#1513;&#1504;&#1497; &#1502;&#1505;&#1500;&#1493;&#1500;&#1497;&#1501;: <br />"
              document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he'>&#1502;&#1505;&#1500;&#1493;&#1500; &#1488;&#1495;&#1491; - &#1502;&#1514;&#1488;&#1497;&#1501; &#1500;&#1488;&#1504;&#1513;&#1497;&#1501; &#1513;&#1489;&#1512;&#1513;&#1493;&#1514;&#1501; &#1488;&#1497;&#1503; &#1506;&#1491;&#1497;&#1497;&#1503; &#1502;&#1505;&#1508;&#1512; &#1493;&#1492;&#1501; &#1512;&#1493;&#1510;&#1497;&#1501; &#1502;&#1505;&#1508;&#1512; &#1492;&#1502;&#1493;&#1512;&#1499;&#1489; &#1502;&#1502;&#1497;&#1500;&#1497;&#1501; &#1493;&#1502;&#1505;&#1508;&#1512;&#1497;&#1501; &#1489;&#1502;&#1511;&#1493;&#1501; &#1502;&#1505;&#1508;&#1512;&#1497;&#1501; &#1489;&#1500;&#1489;&#1491;<br />"
              document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he'>&#1502;&#1505;&#1500;&#1493;&#1500; &#1513;&#1504;&#1497; - &#1502;&#1514;&#1488;&#1497;&#1501; &#1500;&#1488;&#1504;&#1513;&#1497;&#1501; &#1513;&#1489;&#1512;&#1513;&#1493;&#1514;&#1501; &#1502;&#1505;&#1508;&#1512; &#1496;&#1500;&#1508;&#1493;&#1503; &#1511;&#1497;&#1497;&#1501; (&#1488;&#1495;&#1491; &#1488;&#1493; &#1497;&#1493;&#1514;&#1512;) &#1493;&#1492;&#1501; &#1502;&#1506;&#1493;&#1504;&#1497;&#1504;&#1497;&#1501; &#1500;&#1489;&#1491;&#1493;&#1511; &#1492;&#1488;&#1501; &#1492;&#1493;&#1488; &#1502;&#1514;&#1488;&#1497;&#1501; &#1500;&#1502;&#1497;&#1500;&#1497;&#1501; &#1489;&#1513;&#1508;&#1492; &#1492;&#1506;&#1489;&#1512;&#1497;&#1514;</p>"
              document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he'><p><strong>&#1500;&#1502;&#1492; &#1506;&#1499;&#1513;&#1497;&#1493; ? </strong><br />"
              document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he'>&#1489;&#1497;&#1502;&#1497;&#1501; &#1492;&#1488;&#1495;&#1512;&#1493;&#1504;&#1497;&#1501; &#1499;&#1493;&#1500;&#1501; &#1502;&#1491;&#1489;&#1512;&#1497;&#1501; &#1506;&#1500; &#1492;&#1495;&#1493;&#1511; &#1492;&#1495;&#1491;&#1513; &#1513;&#1511;&#1493;&#1489;&#1506; &#1513;&#1492;&#1495;&#1489;&#1512;&#1493;&#1514; &#1492;&#1505;&#1500;&#1493;&#1500;&#1512;&#1497;&#1493;&#1514; &#1502;&#1495;&#1493;&#1497;&#1497;&#1489;&#1493;&#1514; &#1500;&#1488;&#1508;&#1513;&#1512; &#1500;&#1500;&#1511;&#1493;&#1495;&#1493;&#1514;&#1497;&#1492;&#1501; &#1500;&#1492;&#1497;&#1513;&#1488;&#1512; &#1506;&#1501; &#1502;&#1505;&#1508;&#1512; &#1511;&#1489;&#1493;&#1506;<br />(&#1490;&#1501; &#1499;&#1488;&#1513;&#1512; &#1506;&#1493;&#1489;&#1512;&#1497;&#1501; &#1489;&#1497;&#1503; &#1495;&#1489;&#1512;&#1493;&#1514;)<br />"
              document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he'>&#1489;&#1512;&#1490;&#1506; &#1513;&#1492;&#1502;&#1505;&#1508;&#1512; &#1504;&#1492;&#1497;&#1492; &#1511;&#1489;&#1493;&#1506; &#1500;&#1488;&#1493;&#1512;&#1498; &#1492;&#1512;&#1489;&#1492; &#1513;&#1504;&#1497;&#1501; &#1499;&#1491;&#1488;&#1497; &#1500;&#1489;&#1495;&#1493;&#1512; &#1489;&#1502;&#1505;&#1508;&#1512; &#1513;&#1502;&#1514;&#1488;&#1497;&#1501; &#1500;&#1502;&#1497;&#1500;&#1492; <br />"
              document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he'>&#1490;&#1501; &#1511;&#1500; &#1500;&#1494;&#1499;&#1493;&#1512;<br />"
              document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he'>&#1493;&#1490;&#1501; &#1497;&#1493;&#1514;&#1512; &#1504;&#1495;&#1502;&#1491;  <strong> :-)</strong><br />"
              document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he'><br><strong>&#1497;&#1513; &#1500;&#1499;&#1501; &#1499;&#1489;&#1512; &#1502;&#1505;&#1508;&#1512; ? </strong><br />"
              document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he'>&#1500;&#1488; &#1510;&#1512;&#1497;&#1498; &#1500;&#1491;&#1488;&#1493;&#1490; &#1490;&#1501; &#1499;&#1488;&#1503; &#1514;&#1493;&#1499;&#1500;&#1493; &#1500;&#1492;&#1514;&#1488;&#1497;&#1501; &#1502;&#1497;&#1500;&#1497;&#1501; &#1500;&#1502;&#1505;&#1508;&#1512; &#1513;&#1499;&#1489;&#1512; &#1489;&#1512;&#1513;&#1493;&#1514;&#1499;&#1501; <br />"
              document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he'>&#1506;&#1500; &#1502;&#1504;&#1514; &#1500;&#1511;&#1489;&#1500; &#1492;&#1505;&#1489;&#1512; &#1502;&#1508;&#1493;&#1512;&#1496; &#1500;&#1513;&#1497;&#1502;&#1493;&#1513; &#1500;&#1495;&#1510;&#1493; &#1506;&#1500; : <br />"
              document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he'></p></div>"
              document.getElementById("board").innerHTML += "<img   id = 'AboutInBoard'   src = 'images\\about\\about.gif' width = '60' hight = '60' onclick = onMouseClick(id)  onmouseout=onMouseOut(id) onmouseover=onMouseHover(id) onmouseup=onMouseUp(id)  /></div></td>"
               document.getElementById("board").background=""
            }
             if(dataIndex == 2)
            {
            BoardRow.style.display='none';
            InterfaceRow.style.display='block';
            document.getElementById("board").innerHTML =""
            }
             if(dataIndex == 3)
            {
            BoardRow.style.display='block';
            InterfaceRow.style.display='none';
            document.getElementById("board").innerHTML = "<div align='right' dir='rtl' lang='he'>"
            document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he' style = 'font-size:18pt'><p>&#1504;&#1513;&#1502;&#1495; &#1488;&#1501; &#1514;&#1497;&#1510;&#1512;&#1493; &#1511;&#1513;&#1512; &#1489;&#1499;&#1500; &#1504;&#1493;&#1513;&#1488; <img  align = 'left' src = 'images\\Icon\\contactIcon.gif' <br />"
            document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he' style = 'font-size:16pt'>&#1491;&#1489;&#1512;&#1497;&#1501; &#1513;&#1488;&#1492;&#1489;&#1514;&#1501; , &#1502;&#1513;&#1493;&#1489; &#1506;&#1500; &#1492;&#1488;&#1514;&#1512;, &#1513;&#1488;&#1500;&#1492; &#1488;&#1493; &#1489;&#1506;&#1497;&#1492; &#1489;&#1492; &#1504;&#1514;&#1511;&#1500;&#1514;&#1501;<br />"
            document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he' style = 'font-size:16pt'>&#1512;&#1506;&#1497;&#1493;&#1504;&#1493;&#1514; &#1495;&#1491;&#1513;&#1497;&#1501; &#1500;&#1488;&#1514;&#1512; &#1488;&#1495;&#1512; &#1513;&#1492;&#1497;&#1497;&#1514;&#1501; &#1512;&#1493;&#1510;&#1497;&#1501; &#1513;&#1497;&#1506;&#1502;&#1493;&#1491; &#1500;&#1512;&#1513;&#1493;&#1514;&#1499;&#1501;<br />"
            document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he' style = 'font-size:16pt'>&#1493;&#1506;&#1493;&#1491; &#1499;&#1500; &#1491;&#1489;&#1512; &#1488;&#1495;&#1512; &#1513;&#1497;&#1506;&#1500;&#1492; &#1506;&#1491; &#1491;&#1506;&#1514;&#1499;&#1501;<br />"
            document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he' style = 'font-size:16pt'>&#1492;&#1502;&#1497;&#1497;&#1500; &#1513;&#1500;&#1504;&#1493; : <strong>contact2word@gmail.com </strong></p>"
            document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he' style = 'font-size:16pt'><p>&#1504;.&#1489;: &#1504;&#1513;&#1502;&#1495; &#1490;&#1501; &#1500;&#1513;&#1502;&#1493;&#1506; &#1506;&#1500; &#1502;&#1505;&#1508;&#1512;&#1497;&#1501; &#1502;&#1490;&#1504;&#1497;&#1489;&#1497;&#1501; &#1513;&#1492;&#1510;&#1500;&#1495;&#1514;&#1501; &#1500;&#1502;&#1510;&#1493;&#1488; &#1493;&#1488;&#1501; &#1514;&#1497;&#1512;&#1510;&#1493; &#1490;&#1501; &#1504;&#1508;&#1512;&#1505;&#1501; &#1488;&#1493;&#1514;&#1501;</p>"
            document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he' style = 'font-size:16pt'><p align='center'><br /><strong>the team :-)</strong></p><p><br /><br /></p>"
            document.getElementById("board").innerHTML +="<div align='right' dir='rtl' lang='he' style = 'font-size:16pt'></p></div>"
            document.getElementById("board").background=""
            }
             if(dataIndex == 4)
            {
            BoardRow.style.display='block';
            InterfaceRow.style.display='none';
           document.getElementById("board").innerHTML ="<div align='right' dir='rtl' lang='he' xml:lang='he' style = 'font-size:18pt'><h2>&#1502;&#1497; &#1488;&#1504;&#1495;&#1504;&#1493;?</h2><br />&#1488;&#1504;&#1495;&#1504;&#1493; &#1495;&#1489;&#1512;&#1492; &#1495;&#1491;&#1513;&#1492; &#1513;&#1502;&#1496;&#1512;&#1514;&#1492; &#1500;&#1497;&#1510;&#1493;&#1512; &#1488;&#1514;&#1512;&#1497;&#1501; &#1513;&#1493;&#1504;&#1497;&#1501; &#1493;&#1502;&#1490;&#1493;&#1493;&#1504;&#1497;&#1501; &#1489;&#1512;&#1513;&#1514; &#1493;&#1494;&#1493;&#1492;&#1497; &#1512;&#1511; &#1492;&#1496;&#1506;&#1497;&#1502;&#1492; &#1492;&#1512;&#1488;&#1513;&#1493;&#1504;&#1492; .<br />&#1504;&#1513;&#1502;&#1495; &#1500;&#1511;&#1489;&#1500; &#1492;&#1506;&#1512;&#1493;&#1514; &#1489;&#1499;&#1500; &#1504;&#1493;&#1513;&#1488; &#1500;&#1490;&#1489;&#1497; &#1514;&#1499;&#1504;&#1497;&#1501; &#1504;&#1493;&#1505;&#1508;&#1497;&#1501; &#1512;&#1506;&#1497;&#1493;&#1504;&#1493;&#1514; &#1513;&#1500;&#1499;&#1501; &#1493;&#1502;&#1513;&#1493;&#1489; &#1500;&#1490;&#1489;&#1497; &#1492;&#1488;&#1514;&#1512;.</div>"
           document.getElementById("board").innerHTML+="<img src='images\\theTeam\\theTeamc.gif'>"
           document.getElementById("board").background=""
            }
       }
       
       //13.this function will change order froma rtl to ltr
       function rtlToLtr(rtlString)
        {
            var ltrString = ""
            for(var i = rtlString.length ; i >= 0 ;i--)
            {
                ltrString+=rtlString.charAt(i);
            }
            return ltrString;
        }
        
        //14.this function will manage order recursivly - not used at the moment (for combining wrong orders between numbers & hebrew words
        function recursiveOrderManager(inputString)
        {
            var res = ""
            if(inputString.length > 0)
            {
                if(firstIndexOfNumber(inputString)==-1)
                {
                    //homogenic char reverse & return
                    res = rtlToLtr(inputString)
                    return res
                }
                else if(firstIndexOfChar(inputString)==-1)
                {
                    //homogenic num return
                    res =inputString
                    return res
                }
                //sting is non homogenic
                else if(firstIndexOfNumber(inputString)==0)
                {
                    //in that case first sub string is numberType
                    res = inputString.substring(0,firstIndexOfChar(inputString))
                    return res += recursiveOrderManager(inputString.substring(firstIndexOfChar(inputString),inputString.length))
                }
                else
                {
                    //in that case first sub string is charType
                    res = rtlToLtr(inputString.substring(0,firstIndexOfNumber(inputString)))
                    return res += recursiveOrderManager(inputString.substring(firstIndexOfNumber(inputString),inputString.length))
                }
            }
            else
            {
                return res 
            }
        }
        
        //15.will check what is the first index of a number in the string
        function firstIndexOfNumber(NonHomogenic)
        {
            for(var i = 0; i < NonHomogenic.length; i++)
            {
                if(IsNumber(NonHomogenic.charAt(i))==1){
                    //returns the first index of a number char
                    return NonHomogenic.indexOf(NonHomogenic.charAt(i))
                }
            }
            //string is homogenic(just chars)
            return -1
        }
        
        //16.will check what is the first index of a number in the string
        function firstIndexOfChar(NonHomogenic)
        {
            for(var i = 0; i<NonHomogenic.length; i++)
            {
                if(IsNumber(NonHomogenic.charAt(i))==0){
                    //returns the first index of a char
                    return NonHomogenic.indexOf(NonHomogenic.charAt(i))
                }
            }
            //string is homogenic(just nums)
            return -1
        }
        
        //17.will validate if string is a number
        function IsNumber(num)
        {
            if(num=="0" || num=="1" || num=="2" || num=="3" || num=="4" || num=="5" || num=="6" || num=="7" || num=="8" || num=="9")
            {
                return 1
            }
            else
            {
             return 0
            }
        }

