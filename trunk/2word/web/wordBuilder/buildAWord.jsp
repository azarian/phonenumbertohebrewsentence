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

        <style type="text/css">
        <!--

        body {
                background-color: #FFFFFF;
        }
        a:link {
                color: #3366CC;
                text-decoration: none;
        }
        a:visited {
                text-decoration: none;
                color: #006699;
        }
        a:hover {
                text-decoration: underline;
                color: #003366;
        }
        a:active {
                text-decoration: none;
                color: #000033;
        }
        .style2 {color: #E0DFE3}
        .style3 {font-family: Arial, Helvetica, sans-serif}
         style4 {font-size:36pt}
        -->

        </style>
        <script src = "..\wordBuilder\buildAWord.js"> </script>
</head>
    <div align="center">
    <body >
    <table width="936" height="711" border="0">
                                <tr id="rG1">
                                    <td height="112" colspan="4"><img src="..\images\BGImages\barUp.gif" width="906" height="129" longdesc="..\images\BGImages\barUp.gif" /></td>
                                </tr>
                                <tr id="rG2">
                                    <td id = "resultTd"  align = "center" valign="middle"  style = "style4"  background = "..\images\BGImages\resultBG.gif"  height="60" width = 906 colspan="4">
                                        <!--<input name="text" type="text" id = outText dir='rtl' lang='he' size = 42 caption = "result:" xml:lang='he'></input>-->                                
                                    </td>
                              </tr>
                                <tr id="rG3">
                                  <td width="5" height="313" rowspan="2"> </td>                                                       
                                  <td width="216" height="181">
                                  <image src="..\images\BGImages\PhoneIcon.gif" align = "left">                                  
                                  </td>
                                  <td width="612" rowspan="2" align="middle" valign="top">
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
                                                                  <table  id="topTableImage"  background="..\images\BGImages\TableImageBGtop.gif"width="552"height="101"><tr><td></td></tr></table>
                                                                  <table  background="..\images\BGImages\TableImageBG.gif"  width="552">
                                                                      <tr>
                                                                          <td>  
                                                                              <% 
                                                                              //iterate list of sentences and create set of combo boxes for each
                                                                              for(int indexInSentences = 0 ;indexInSentences<sentences.size();indexInSentences++)
                                                                              {
                                                                              //open row
                                                                              %>
                                                                              <table id="t<%=indexInSentences%>"  align="center"  onmouseout=setTableBG("t<%=indexInSentences%>")  onmouseover=setTableBGHOVER("t<%=indexInSentences%>")    background ="..\images\BGImages\tableBG.gif" width =300 >
                                                                                     <tr align = "center"  >
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
                                                                                      <td align = "center" height="35" >
                                                                                          <select id =<%=indexInSentences%><%=comboIndex%> onchange=buildIdForCalulate(<%=indexInSentences%>,<%=numberOfCombos%>) onselect=buildIdForCalulate(<%=indexInSentences%>,<%=numberOfCombos%>) onfocus=buildIdForCalulate(<%=indexInSentences%>,<%=numberOfCombos%>) >
                                                                                                  <%
                                                                                                  for(int wordIndex = 0;wordIndex <currentHebrewWordsList.size();wordIndex++)
                                                                                                  {
                                                                                                  HebrewWord currentHebrewWord = currentHebrewWordsList.get(wordIndex);
                                                                                                  String option = currentHebrewWord.toString();
                                                                                                  %>
                                                                                                  <option><%=option%> </option>
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
                                                                              </table>
                                                                              <%
                                                                              //close row
                                                                              }
                                                                              }//try
                                                                              catch (Exception e){
                                                                              out.println("An exception occurred: " + e.getMessage());
                                                                              }
                                                                              %>    
                                                                          </td>
                                                                      </tr>
                                              </table>
                                              <table id="buttomTableImage" background="..\images\BGImages\TableImageBGbottom.gif"width="552"height="49"><tr><td></td></tr></table>
                                   </td>
                                   <td width="1" rowspan="2"></td>         
                                </tr>
                                 <tr> <td height="200"> </td> </tr>
                                 <tr id="rG4">
                                        <td height="119" colspan="4"><img src="..\images\BGImages\barDown.gif" width="906" height="131" longdesc="..\images\BGImages\barDown.gif" /></td>
                                </tr>
	</table>
    </body>
    </div>
</html>
