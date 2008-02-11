
              //display indexes on the table
              var beginDisplay = 0
              var endDisplay = 0
              var tableSize = 0
              var howManyToDisplayAtOnce=1
              var resultDisplay = "";
              var sourceDisplay="";
              var displayRowIndex = 0;


             //0.set sourde display
             //this fuction will set the source(number)
             //display (help to compare with result)
             function setSourceNumberDisplay(num)
             {
                    sourceDisplay = num;
                    document.getElementById("source").innerHTML =  "<div  valign='middle' dir='rtl'  >" +  sourceDisplay  +" </div>"
             }
             
              //1.set table display range
              function setTableDisplayRange(begin,end)
              {
                     beginDisplay = begin
                     endDisplay = end
              }
              

              //2.set table size param
              function setTableSizeParam(sentencesSize)
              {
                    tableSize = sentencesSize
              }

              //3.show or hide tabe bu the display range
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
              
              //4.show next result
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

              //5.show previos result
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

              

              //6.this function will calculate the ids for row number
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
              
              //7.this function will connect all combo boxes in a table row
              function calculate(numOfOptionBoxes,id1,id2,id3,id4,id5,id6,id7)
              {
                  var result = ""

                   ////////////////1111111111111111111111111111///////////////// 
                  //one combo
                  if(numOfOptionBoxes == 1){
                       var a = document.getElementById(id1)
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                result= "\u200F"+a.options[a.selectedIndex].text ;
                       }else{
                                result= "\u200F"+a.options[a.selectedIndex].text;              
                       }
                  }



                  ////////////////222222222222222222222222222/////////////////
                  //two combos
                  if(numOfOptionBoxes == 2){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)

                       if(firstIndexOfNumber(b.options[b.selectedIndex].text)==-1){
                                result="\u200F"+ b.options[b.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result="\u200F"+ b.options[b.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result= "\u200F"+b.options[b.selectedIndex].text;
                                }
                                
                       }
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                //last combo - no need to add "-"
                                result+= "\u200F"+a.options[a.selectedIndex].text ;
                       }else{
                                result+="\u200F"+ a.options[a.selectedIndex].text;  
                       }
                  }



                  ////////////////3333333333333333333333333333/////////////////
                  //three combos
                  if(numOfOptionBoxes == 3){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)
                       var c = document.getElementById(id3)

                       if(firstIndexOfNumber(c.options[c.selectedIndex].text)==-1){
                                result="\u200F"+c.options[c.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(b.options[b.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result="\u200F"+c.options[c.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result= "\u200F"+c.options[c.selectedIndex].text ;
                                }        
                       }
                       if(firstIndexOfNumber(b.options[b.selectedIndex].text)==-1){
                                result+="\u200F"+b.options[b.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+= "\u200F"+b.options[b.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+=  "\u200F"+b.options[b.selectedIndex].text;
                                }
                                
                       }
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                //last combo - no need to add "-"
                                result+="\u200F"+a.options[a.selectedIndex].text ;
                       }else{
                                result+= "\u200F"+a.options[a.selectedIndex].text;  
                       }
                       
                       
                  }

                  
                   ////////////////4444444444444444444444444444/////////////////
                  //four combos
                  if(numOfOptionBoxes == 4){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)
                       var c = document.getElementById(id3)
                       var d = document.getElementById(id4)

                       if(firstIndexOfNumber(d.options[d.selectedIndex].text)==-1){
                                result= "\u200F"+d.options[d.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(c.options[c.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result= "\u200F"+d.options[d.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result= "\u200F"+d.options[d.selectedIndex].text;
                                }        
                       }
                        if(firstIndexOfNumber(c.options[c.selectedIndex].text)==-1){
                                result+= "\u200F"+c.options[c.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(b.options[b.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+= "\u200F"+c.options[c.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+= "\u200F"+c.options[c.selectedIndex].text;
                                }        
                       }
                       if(firstIndexOfNumber(b.options[b.selectedIndex].text)==-1){
                                result+="\u200F"+ b.options[b.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+="\u200F"+ b.options[b.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+="\u200F"+ b.options[b.selectedIndex].text;
                                }
                                
                       }
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                //last combo - no need to add "-"
                                result+= "\u200F"+a.options[a.selectedIndex].text ;
                       }else{
                                result+="\u200F"+ a.options[a.selectedIndex].text;  
                       }            
                  }




                  ////////////////55555555555555555555555555555/////////////////
                  //five combos
                  if(numOfOptionBoxes == 5){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)
                       var c = document.getElementById(id3)
                       var d = document.getElementById(id4)
                       var e = document.getElementById(id5)

                       if(firstIndexOfNumber(e.options[e.selectedIndex].text)==-1){
                                result="\u200F"+ e.options[e.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(d.options[d.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result= "\u200F"+e.options[e.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result= "\u200F"+e.options[e.selectedIndex].text;
                                }        
                       }
                        if(firstIndexOfNumber(d.options[d.selectedIndex].text)==-1){
                                result+="\u200F"+ d.options[d.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(c.options[c.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+="\u200F"+ d.options[d.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+= "\u200F"+d.options[d.selectedIndex].text;
                                }        
                       }
                        if(firstIndexOfNumber(c.options[c.selectedIndex].text)==-1){
                                result+= "\u200F"+c.options[c.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(b.options[b.selectedIndex].text)== -1){
                                    //next value is a word - add "-"
                                    result+= "\u200F"+c.options[c.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+= "\u200F"+c.options[c.selectedIndex].text;
                                }        
                       }
                       if(firstIndexOfNumber(b.options[b.selectedIndex].text)==-1){
                                result+= "\u200F"+b.options[b.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+= "\u200F"+b.options[b.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+= "\u200F"+b.options[b.selectedIndex].text;
                                }
                                
                       }
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                //last combo - no need to add "-"
                                result+= "\u200F"+a.options[a.selectedIndex].text ;
                       }else{
                                result+= "\u200F"+a.options[a.selectedIndex].text;  
                       }       
                  }



                  
                   ////////////////6666666666666666666666666666/////////////////
                  //six combos
                  if(numOfOptionBoxes == 6){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)
                       var c = document.getElementById(id3)
                       var d = document.getElementById(id4)
                       var e = document.getElementById(id5)
                       var f = document.getElementById(id6)

                       if(firstIndexOfNumber(f.options[f.selectedIndex].text)==-1){
                                result= "\u200F"+f.options[f.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(e.options[e.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result= "\u200F"+f.options[f.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result="\u200F"+ f.options[f.selectedIndex].text;
                                }        
                       }

                       if(firstIndexOfNumber(e.options[e.selectedIndex].text)==-1){
                                result+= "\u200F"+e.options[e.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(d.options[d.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+= "\u200F"+e.options[e.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+= "\u200F"+e.options[e.selectedIndex].text;
                                }        
                       }
                        if(firstIndexOfNumber(d.options[d.selectedIndex].text)==-1){
                                result+= "\u200F"+d.options[d.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(c.options[c.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+= "\u200F"+d.options[d.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+= "\u200F"+d.options[d.selectedIndex].text;
                                }        
                       }
                        if(firstIndexOfNumber(c.options[c.selectedIndex].text)==-1){
                                result+="\u200F"+ c.options[c.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(b.options[b.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+= "\u200F"+c.options[c.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+= "\u200F"+c.options[c.selectedIndex].text;
                                }        
                       }
                       if(firstIndexOfNumber(b.options[b.selectedIndex].text)==-1){
                                result+="\u200F"+ b.options[b.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+="\u200F"+ b.options[b.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+="\u200F"+ b.options[b.selectedIndex].text;
                                }
                                
                       }
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                //last combo - no need to add "-"
                                result+="\u200F"+ a.options[a.selectedIndex].text ;
                       }else{
                                result+= "\u200F"+a.options[a.selectedIndex].text;  
                       }             
                  }




                   ////////////////777777777777777777777777777777777/////////////////
                  //seven combos
                  if(numOfOptionBoxes == 7){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)
                       var c = document.getElementById(id3)
                       var d = document.getElementById(id4)
                       var e = document.getElementById(id5)
                       var f = document.getElementById(id6)
                       var g = document.getElementById(id7)

                       if(firstIndexOfNumber(g.options[g.selectedIndex].text)==-1){
                                result="\u200F"+g.options[g.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(f.options[f.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result="\u200F"+g.options[g.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result="\u200F"+ g.options[g.selectedIndex].text;
                                }        
                       }
                       if(firstIndexOfNumber(f.options[f.selectedIndex].text)==-1){
                                result+= "\u200F"+f.options[f.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(e.options[e.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+="\u200F"+ f.options[f.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+= "\u200F"+f.options[f.selectedIndex].text;
                                }        
                       }

                       if(firstIndexOfNumber(e.options[e.selectedIndex].text)==-1){
                                result+="\u200F"+ e.options[e.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(d.options[d.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+="\u200F"+ e.options[e.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+="\u200F"+ e.options[e.selectedIndex].text;
                                }        
                       }
                        if(firstIndexOfNumber(d.options[d.selectedIndex].text)==-1){
                                result+= "\u200F"+d.options[d.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(c.options[c.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+= "\u200F"+d.options[d.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+= "\u200F"+d.options[d.selectedIndex].text;
                                }        
                       }
                        if(firstIndexOfNumber(c.options[c.selectedIndex].text)==-1){
                                result+= "\u200F"+c.options[c.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(b.options[b.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+= "\u200F"+c.options[c.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+= "\u200F"+c.options[c.selectedIndex].text;
                                }        
                       }
                       if(firstIndexOfNumber(b.options[b.selectedIndex].text)==-1){
                                result+= "\u200F"+b.options[b.selectedIndex].text + "-" ;
                       }else{
                                if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                    //next value is a word - add "-"
                                    result+="\u200F"+ b.options[b.selectedIndex].text + "-" ;
                                }else{
                                    //next value is also a number no need to add "-"
                                    result+= "\u200F"+b.options[b.selectedIndex].text;
                                }
                                
                       }
                       if(firstIndexOfNumber(a.options[a.selectedIndex].text) == -1){
                                //last combo - no need to add "-"
                                result+= "\u200F"+a.options[a.selectedIndex].text ;
                       }else{
                                result+= "\u200F"+a.options[a.selectedIndex].text;  
                       }            
                  }


                  resultDisplay = result;
                  document.getElementById("resultTd").innerHTML =  "<div  valign='middle'  dir = 'rtl'> \u200F " +  result  +" </div>"
              }
              
              //8.this function will set inner table background
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

              //9.this function sill set inner table background on hover
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

              //10.this function sill set inner table background on selected
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

              //11.this function will manipulate adding rows and cells to selected numbers table
              function AdSelectedNumToTable()
              {
                    selectedNumbersTable = document.getElementById("selectedNumbers");
                     var row = selectedNumbersTable.insertRow(displayRowIndex);
                    displayRowIndex++;
                    var cell = row.insertCell(0);
                    cell.innerHTML = "<h2>" + resultDisplay + "<h2>";
                    var cell = row.insertCell(1);
                    cell.innerHTML = "<h2>\u05DE\u05E1\u05E4\u05E8:" + displayRowIndex + " <h2>";
              }
         






