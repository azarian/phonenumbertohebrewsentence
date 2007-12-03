<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@ page  import="PhoneNumberSpell.DatabaseApi.NumberSentences" %>
<%@ page  import="PhoneNumberSpell.DatabaseApi.PhoneNumberSpellApi" %>
<%@ page  import="PhoneNumberSpell.DatabaseApi.DerbyServerConnectionFactory" %>
<%@ page  import="PhoneNumberSpell.DatabaseApi.NumberSentence" %>
<%@ page  import="PhoneNumberSpell.DatabaseApi.NumberWords" %>
<%@ page  import="PhoneNumberSpell.DatabaseApi.HebrewWord" %>
<%@ page  import="java.util.List" %>
<%@ page  import="java.util.ArrayList" %>
<%--
The taglib directive below imports the JSTL library. If you uncomment it,
you must also add the JSTL library to the project. The Add Library... action
on Libraries node in Projects view can be used to add the JSTL 1.1 library.
--%>
<%--
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
--%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>2word results</title>
        <script type = "text/javascript">
              //1.this function will calculat the ids for row number
              //and call calculate with the specific numbers
              function buildIdForCalulate(rowNumber,numOfElements)
              {
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
                  var output = document.getElementById("outText")
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
                   output.value = result
              }
        </script>
    </head>
    <body  background="images\bg1.gif>
        
     <%
    try{
           
           PhoneNumberSpellApi phoneApi;
           DerbyServerConnectionFactory db = new DerbyServerConnectionFactory();
           phoneApi  =  new PhoneNumberSpellApi(db.getConnection()); 
           String input = request.getParameter("textfield");
           NumberSentences ans =  phoneApi.getNumberSentences(input); 
           //build list of sntences
           List<NumberSentence> sentences = ans.getSentences();
      %>
     this is the data inserted:<% out.println( String.valueOf( input )) ;%>
    <div align = "center">
    <form  action="">
        <input id = outText type="text" caption = "result:" dir='rtl' lang='he' xml:lang='he' width = "150"></input>
        <table align="center" border="0">
        <% 
        //iterate list of sentences and create set of combo boxes for each
        for(int indexInSentences = 0 ;indexInSentences<sentences.size();indexInSentences++)
        {
                //open row
                %>
                <tr align = "right">
                 <%
                int numberOfCombos=0;
                NumberSentence currentSentence = sentences.get(indexInSentences);
                //build list of number words
                List<NumberWords> currentWordList = currentSentence.getNumberWords();
                numberOfCombos = currentWordList.size();
                for(int comboIndex = 0;comboIndex<numberOfCombos;comboIndex++)
                {
                    NumberWords currentWord = currentWordList.get(comboIndex);
                    ArrayList<HebrewWord> currentHebrewWordsList = currentWord.words;  
                    %>
                  <td align = "right" >
                      <select id =<%=indexInSentences%><%=comboIndex%> onchange=buildIdForCalulate(<%=indexInSentences%>,<%=numberOfCombos%>) onselect=buildIdForCalulate(<%=indexInSentences%>,<%=numberOfCombos%>) onfocus=buildIdForCalulate(<%=indexInSentences%>,<%=numberOfCombos%>) >
                          <%
                          for(int wordIndex = 0;wordIndex <currentHebrewWordsList.size();wordIndex++)
                              {
                              HebrewWord currentHebrewWord = currentHebrewWordsList.get(wordIndex);
                              String option = currentHebrewWord.toString();
                          %>
                          <option>
                                <%=option%> 
                          </option>
                          <%
                               }
                               //adding the word number
                          %>
                          <option><%= currentWord.number%></option>
                      </select>
                   </td>
                    <%
                }
                %>
                </tr>
                <%
                //close row
        }
        }//try
        catch (Exception e){
            out.println("An exception occurred: " + e.getMessage());
        }
            %>   
        </table>
    </form>
    </div>
    
    <%--
     //ans.getNumber();
        //listans.getSentences();
        //String res = ans.toString();
     <!--this is the data result <% //out.println( String.valueOf( res )) ;%>-->
    This example uses JSTL, uncomment the taglib directive above.
    To test, display the page like this: index.jsp?sayHello=true&name=Murphy
    --%>
    <%--
    <c:if test="${param.sayHello}">
        <!-- Let's welcome the user ${param.name} -->
        Hello ${param.name}!
    </c:if>
    --%>
    
    </body>
</html>
