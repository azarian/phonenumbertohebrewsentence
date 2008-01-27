
              //display indexes on the table
              var beginDisplay = 0
              var endDisplay = 0
              var tableSize = 0
              var howManyToDisplayAtOnce=1
              var resultDisplay = "";
              var displayRowIndex = 0;

              //set table display range
              function setTableDisplayRange(begin,end)
              {
                     beginDisplay = begin
                     endDisplay = end
              }

              //set table size param
              function setTableSizeParam(sentencesSize)
              {
                    tableSize = sentencesSize
              }

              //show or hide tabe bu the display range
              function ShowHideTable()
              {
                    for(var tableIndex = 0; tableIndex<tableSize; tableIndex++)
                    {
                            var currentIndex = "t" + tableIndex
                            var currnetTable = document.getElementById(currentIndex)
                            if(tableIndex<beginDisplay){
                                //hide
                                currnetTable.style.display = "none"
                             }else if( tableIndex>=beginDisplay && tableIndex < endDisplay ){
                                //show
                                currnetTable.style.display = "block"
                             }else{
                                  //hide
                                  currnetTable.style.display = "none"
                             }
                    }
              }
              
              //show next result
              function OnNextResultButton()
              {
                if(endDisplay+howManyToDisplayAtOnce<=tableSize)
                {
                    beginDisplay+=howManyToDisplayAtOnce
                    endDisplay    +=howManyToDisplayAtOnce
                     ShowHideTable()
                }else if(endDisplay<tableSize){
                    beginDisplay+=(tableSize-endDisplay)
                    endDisplay     +=(tableSize-endDisplay)
                    ShowHideTable()
                 }else{
                    alert(" \u05D0\u05D9\u05DF \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA" )
                 }
              }

              //show previos result
              function OnPrevResultButton()
              {
                if(beginDisplay - howManyToDisplayAtOnce>=0)
                {
                     endDisplay    -=howManyToDisplayAtOnce
                     beginDisplay-=howManyToDisplayAtOnce
                     ShowHideTable()
                 }else{
                    alert(" \u05D0\u05D9\u05DF \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA" )
                 }
              }

              

              //1.this function will calculat the ids for row number
              //and call calculate with the specific numbers
              var selectedRowId = ""
              function buildIdForCalulate(rowNumber,numOfElements)
              {
                   //alert("number of rows = " + rowNumber + "number of elements = " + numOfElements);
                   setTableBGSELECT(rowNumber) 
                   var arg1 = 0
                   var arg2 = 0
                   var arg3 = 0
                   var arg4 = 0
                   var arg5 = 0
                   var arg6 = 0
                   var arg7 = 0
                   var arg8 = 0
                   var args = ""
                   args = numOfElements
                   for(var i= 0;i<numOfElements;i++)
                   {
                        args+=" "
                        args+=rowNumber
                        args+=i                    
                   }
                   args+=" "
                   
                  //alert("list of arguments is" + args)

                   var indexInString = 0
                   if(args.length > 0){
                       indexInString = args.indexOf(" ")
                       arg1=args.substring(0,indexInString)
                       args = args.substring(indexInString+1,args.length)
                   }
                    if(args.length > 0){
                       indexInString = args.indexOf(" ")
                       arg2=args.substring(0,indexInString)
                       args = args.substring(indexInString+1,args.length)
                   }          
                    if(args.length > 0){
                       indexInString = args.indexOf(" ")
                       arg3=args.substring(0,indexInString)
                       args = args.substring(indexInString+1,args.length)
                   }      
                    if(args.length > 0){
                       indexInString = args.indexOf(" ")
                       arg4=args.substring(0,indexInString)
                       args= args.substring(indexInString+1,args.length)
                   }
                    if(args.length > 0){                                        
                       indexInString = args.indexOf(" ")
                       arg5=args.substring(0,indexInString)
                       args = args.substring(indexInString+1,args.length)
                   }
                     if(args.length > 0){                                        
                       indexInString = args.indexOf(" ")
                       arg6=args.substring(0,indexInString)
                       args = args.substring(indexInString+1,args.length)
                   }
                     if(args.length > 0){                                        
                       indexInString = args.indexOf(" ")
                       arg7=args.substring(0,indexInString)
                       args = args.substring(indexInString+1,args.length)
                   }
                     if(args.length > 0){                                        
                       indexInString = args.indexOf(" ")
                       arg8=args.substring(0,indexInString)
                       args = args.substring(indexInString+1,args.length)
                   }

                  calculate(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8 )
              }

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
              
              //2.this function will connect all combo boxes in a table row
              function calculate(numOfOptionBoxes,id1,id2,id3,id4,id5,id6,id7)
              {
                  var result = ""
                  //one combo
                  if(numOfOptionBoxes == 1){
                       var a = document.getElementById(id1)
                       //result = "\u05D4\u05DE\u05E1\u05E4\u05E8:  " 
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                result= "-" + a.options[a.selectedIndex].text  + "-" ;
                       }else{
                                result= a.options[a.selectedIndex].text              
                       }
                  }
                  //two combos
                  if(numOfOptionBoxes == 2){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)

                       //result = "\u05D4\u05DE\u05E1\u05E4\u05E8:  " 
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                result= "-" + a.options[a.selectedIndex].text + "-"  ;
                       }else{
                                result= a.options[a.selectedIndex].text;  
                       }
                       if(firstIndexOfNumber(b.options[b.selectedIndex].text)==-1){
                                result+= "-" + b.options[b.selectedIndex].text + "-" ;
                       }else{
                                result+= b.options[b.selectedIndex].text;
                       }
                  }
                  //three combos
                  if(numOfOptionBoxes == 3){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)
                       var c = document.getElementById(id3)

                       //result = "\u05D4\u05DE\u05E1\u05E4\u05E8:  " 
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                result= "-" + a.options[a.selectedIndex].text + "-"  ;
                       }else{
                                result= a.options[a.selectedIndex].text;  
                       }
                       if(firstIndexOfNumber(b.options[b.selectedIndex].text)==-1){
                                result+= "-" + b.options[b.selectedIndex].text + "-" ;
                       }else{
                                result+= b.options[b.selectedIndex].text;
                       }
                       if(firstIndexOfNumber(c.options[c.selectedIndex].text)==-1){
                                result+= "-" + c.options[c.selectedIndex].text + "-" ;
                       }else{
                                result+= c.options[c.selectedIndex].text;
                       }
                  }
                  //four combos
                  if(numOfOptionBoxes == 4){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)
                       var c = document.getElementById(id3)
                       var d = document.getElementById(id4)

                       //result = "\u05D4\u05DE\u05E1\u05E4\u05E8:  " 
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                result= "-" + a.options[a.selectedIndex].text + "-" ;
                       }else{
                                result= a.options[a.selectedIndex].text;  
                       }
                       if(firstIndexOfNumber(b.options[b.selectedIndex].text)==-1){
                                result+= "-" + b.options[b.selectedIndex].text + "-";
                       }else{
                                result+= b.options[b.selectedIndex].text;
                       }
                       if(firstIndexOfNumber(c.options[c.selectedIndex].text)==-1){
                                result+= "-" + c.options[c.selectedIndex].text + "-" ;
                       }else{
                                result+= c.options[c.selectedIndex].text;
                       }
                       if(firstIndexOfNumber(d.options[d.selectedIndex].text)==-1){
                                result+= "-" + d.options[d.selectedIndex].text + "-" ;
                       }else{
                                result+= d.options[d.selectedIndex].text;
                       }
                  }
                  //five combos
                  if(numOfOptionBoxes == 5){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)
                       var c = document.getElementById(id3)
                       var d = document.getElementById(id4)
                       var e = document.getElementById(id5)

                       //result = "\u05D4\u05DE\u05E1\u05E4\u05E8:  " 
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                result= "-" + a.options[a.selectedIndex].text + "-"  ;
                       }else{
                                result= a.options[a.selectedIndex].text;  
                       }
                       if(firstIndexOfNumber(b.options[b.selectedIndex].text)==-1){
                                result+= "-" + b.options[b.selectedIndex].text + "-" ;
                       }else{
                                result+= b.options[b.selectedIndex].text;
                       }
                       if(firstIndexOfNumber(c.options[c.selectedIndex].text)==-1){
                                result+= "-" + c.options[c.selectedIndex].text + "-" ;
                       }else{
                                result+= c.options[c.selectedIndex].text;
                       }
                       if(firstIndexOfNumber(d.options[d.selectedIndex].text)==-1){
                                result+= "-" + d.options[d.selectedIndex].text + "-" ;
                       }else{
                                result+= d.options[d.selectedIndex].text;
                       }
                       if(firstIndexOfNumber(e.options[e.selectedIndex].text)==-1){
                                result+= "-" + e.options[e.selectedIndex].text + "-" ;
                       }else{
                                result+= e.options[e.selectedIndex].text;
                       }
                  }
                  //six combos
                  if(numOfOptionBoxes == 6){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)
                       var c = document.getElementById(id3)
                       var d = document.getElementById(id4)
                       var e = document.getElementById(id5)
                       var f = document.getElementById(id6)

                       //result = "\u05D4\u05DE\u05E1\u05E4\u05E8:  " 
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                result= "-" + a.options[a.selectedIndex].text + "-"  ;
                       }else{
                                result= a.options[a.selectedIndex].text;  
                       }
                       if(firstIndexOfNumber(b.options[b.selectedIndex].text)==-1){
                                result+= "-" + b.options[b.selectedIndex].text + "-" ;
                       }else{
                                result+= b.options[b.selectedIndex].text;
                       }
                       if(firstIndexOfNumber(c.options[c.selectedIndex].text)==-1){
                                result+= "-" + c.options[c.selectedIndex].text + "-" ;
                       }else{
                                result+= c.options[c.selectedIndex].text;
                       }
                       if(firstIndexOfNumber(d.options[d.selectedIndex].text)==-1){
                                result+= "-" + d.options[d.selectedIndex].text + "-" ;
                       }else{
                                result+= d.options[d.selectedIndex].text;
                       }
                       if(firstIndexOfNumber(f.options[f.selectedIndex].text)==-1){
                                result+= "-" + f.options[f.selectedIndex].text + "-" ;
                       }else{
                                result+= f.options[f.selectedIndex].text;
                       }
                       
                  }
                  //seven combos
                  if(numOfOptionBoxes == 7){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)
                       var c = document.getElementById(id3)
                       var d = document.getElementById(id4)
                       var e = document.getElementById(id5)
                       var f = document.getElementById(id6)
                       var g = document.getElementById(id7)

                       //result = "\u05D4\u05DE\u05E1\u05E4\u05E8:  " 
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                result= "-" + a.options[a.selectedIndex].text + "-"  ;
                       }else{
                                result= a.options[a.selectedIndex].text;  
                       }
                       if(firstIndexOfNumber(b.options[b.selectedIndex].text)==-1){
                                result+= "-" + b.options[b.selectedIndex].text + "-" ;
                       }else{
                                result+= b.options[b.selectedIndex].text;
                       }
                       if(firstIndexOfNumber(c.options[c.selectedIndex].text)==-1){
                                result+= "-" + c.options[c.selectedIndex].text + "-" ;
                       }else{
                                result+= c.options[c.selectedIndex].text;
                       }
                       if(firstIndexOfNumber(d.options[d.selectedIndex].text)==-1){
                                result+= "-" + d.options[d.selectedIndex].text + "-" ;
                       }else{
                                result+= d.options[d.selectedIndex].text;
                       }
                       if(firstIndexOfNumber(f.options[f.selectedIndex].text)==-1){
                                result+= "-" + f.options[f.selectedIndex].text + "-" ;
                       }else{
                                result+= f.options[f.selectedIndex].text;
                       }
                       if(firstIndexOfNumber(g.options[g.selectedIndex].text)==-1){
                                result+= "-" + g.options[g.selectedIndex].text + "-" ;
                       }else{
                                result+= g.options[g.selectedIndex].text;
                       }
                  }
                  resultDisplay = result;
                  document.getElementById("resultTd").innerHTML =  "<div  valign='middle' dir='rtl' lang='he' style='style4'>" +  result  +" </div>"
              }

              function setTableBG(rowNum)
              {
                    if(rowNum==""){
                        return
                    }
                      if(selectedRowId==rowNum){
                        return
                    }
                    var row = document.getElementById(rowNum)
                    row.background ="..\\images\\BGImages\\tableBG.gif" 
              }

              function setTableBGHOVER(rowNum)
              {
                    if(rowNum==""){
                        return
                    }
                    if(selectedRowId==rowNum){
                         return
                    }
                    var row = document.getElementById(rowNum)
                    row.background = "..\\images\\BGImages\\tableBGS.gif"
              }

              function setTableBGSELECT(rowNum)
              {
                   if(rowNum==""){
                        if(rowNum!=0){
                            return
                        }
                   }
                   //save last selected row
                   var lastSelelctedRowId = selectedRowId
                   
                   selectedRowId="t"
                   selectedRowId+=rowNum

                   //reset last selected row id
                   setTableBG(lastSelelctedRowId)

                    var row = document.getElementById(selectedRowId)
                    row.background = "..\\images\\BGImages\\tableBGSH.gif"
              }
              function AdSelectedNumToTable()
              {
                    selectedNumbersTable = document.getElementById("selectedNumbers");
                    var row = selectedNumbersTable.insertRow(displayRowIndex);
                    displayRowIndex++;
                    var cell = row.insertCell(0);
                    cell.innerHTML = "<h3>" + resultDisplay + "<h3>";
                    var cell = row.insertCell(1);
                    cell.innerHTML = "<h3>:\u05DE\u05E1\u05E4\u05E8" + displayRowIndex + " <h3>";
              }
         






