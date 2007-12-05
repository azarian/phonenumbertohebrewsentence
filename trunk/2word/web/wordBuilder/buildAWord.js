             //1.this function will calculat the ids for row number
              //and call calculate with the specific numbers
              var selectedRowId = ""
              function buildIdForCalulate(rowNumber,numOfElements)
              {
                   setTableBGSELECT(rowNumber) 
                   var arg1 = 0
                   var arg2 = 0
                   var arg3 = 0
                   var arg4 = 0
                   var arg5 = 0
                   var args = ""
                   args = numOfElements
                   for(var i= 0;i<numOfElements;i++)
                   {
                        args+=" "
                        args+=rowNumber
                        args+=i                    
                   }
                   args+=" "
                   
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

                  calculate(arg1,arg2,arg3,arg4,arg5)
              }
              
              //2.this function will connect all combo boxes in a table row
              function calculate(numOfOptionBoxes,id1,id2,id3,id4)
              {
                  var result = ""
                  //one combo
                  if(numOfOptionBoxes == 1){
                       var a = document.getElementById(id1)
                       result =   "\u05D4\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D7\u05D3\u05E9 \u05E9\u05DC\u05DA \u05D4\u05D5\u05D0:"  + a.options[a.selectedIndex].text 
                  }
                  //two combos
                  if(numOfOptionBoxes == 2){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)
                       result =     "\u05D4\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D7\u05D3\u05E9 \u05E9\u05DC\u05DA \u05D4\u05D5\u05D0:"  + a.options[a.selectedIndex].text  + "-" + b.options[b.selectedIndex].text 
                  }
                  //three combos
                  if(numOfOptionBoxes == 3){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)
                       var c = document.getElementById(id3)
                       result = "\u05D4\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D7\u05D3\u05E9 \u05E9\u05DC\u05DA \u05D4\u05D5\u05D0:"  + a.options[a.selectedIndex].text +"-" + b.options[b.selectedIndex].text  + "-" + c.options[c.selectedIndex].text 
                  }
                  //four combos
                  if(numOfOptionBoxes == 4){
                       var a = document.getElementById(id1)
                       var b = document.getElementById(id2)
                       var c = document.getElementById(id3)
                       var d = document.getElementById(id4)
                       result = "\u05D4\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D7\u05D3\u05E9 \u05E9\u05DC\u05DA \u05D4\u05D5\u05D0:"  +  a.options[a.selectedIndex].text  + "-" + b.options[b.selectedIndex].text  + "-" + c.options[c.selectedIndex].text + "-" +d.options[d.selectedIndex].text
                  }
                  document.getElementById("resultTd").innerHTML =  result 
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






