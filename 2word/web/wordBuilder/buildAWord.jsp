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
        .style3 {font-family: Arial, Helvetica, sans-serif}
         style4 {font-size:36pt}
        .style4 {font-family: Arial, Helvetica, sans-serif; font-weight: bold; }
        -->
    
        </style>
        <script src = "..\wordBuilder\buildAWord.js"> </script>
        <script src = "..\2Word.js"> </script>
    </head>
    <body >
        <div align="center" dir="rtl" lang="he">
            <table width="912" height="1012" border="0">
                <tr id="rG1">
                    <td height="112" colspan="4">
                        <img src="..\images\BGImages\barUp.gif" width="1034" height="147" longdesc="..\images\BGImages\barUp.gif" />
                    </td>
                </tr>
                <tr id="rG2">
                    <td id = "resultTd"  dir = "rtl" align = "center"  lang="he"  valign="middle"  style = "font-size: 30pt" background = "..\images\BGImages\resultBG.gif"  height="70" colspan="4">
                    </td>
                </tr>
                <tr id="rG3">  
                    <td width="171" align="middle" valign="top" style="style3">
                        <p>
                            <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="140" height="600" id="Bar" align="middle">
                                <param name="allowScriptAccess" value="sameDomain" />
                                <param name="movie" value="bar3.swf" />
                                <param name="menu" value="false" />
                                <param name="quality" value="high" />
                                <param name="bgcolor" value="#ffffff" />
                                <embed src="bar3.swf" menu="false" quality="high" bgcolor="#ffffff" width="140" height="600" name="Bar" align="middle" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />                                     
                            </object>
                        </p>
                    </td>    
                    <td width="671" align="middle" valign="top" style="style3">
                        <%
                        try{
                            PhoneNumberSpellApi phoneApi;
                            phoneApi  =  new PhoneNumberSpellApi();
                            String input = request.getParameter("numberString");
                            NumberSentences ans =  phoneApi.getNumberSentences(input);
                            //build list of sntences
                            List<NumberSentence> sentences = ans.getSentences();
                            int size = sentences.size();
                        %>
                        <script type="text/javascript"> setTableSizeParam(<%=size%>)</script> 
                        <%      
                        if(size<1){
                        %> 
                        <script type="text/javascript">  setTableDisplayRange(0,<%=size%>)</script>
                        <%
                        }else{
                        %>
                        <script type="text/javascript"> setTableDisplayRange(0,1)</script>
                        <%
                        }
                        %>
                        <table  id="topTableImage"  background="..\images\BGImages\TableImageBGtopOne.gif"width="552"height="101">
                            <tr>
                                <td align="right" dir="rtl" lang="he">
                                </td>
                            </tr>
                        </table>
                        <table  background="..\images\BGImages\TableImageBG.gif"  width="552">
                            <tr>
                                <td>  
                                    <% 
                                    //iterate list of sentences and create set of combo boxes for each
                                    for(int indexInSentences = 0 ;indexInSentences<sentences.size();indexInSentences++) {
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
                                            for(int comboIndex = 0;comboIndex<numberOfCombos;comboIndex++) {
                                                NumberWords currentWord = currentWordList.get(comboIndex);
                                                ArrayList<HebrewWord> currentHebrewWordsList = currentWord.words;  
                                            %>
                                            <td align = "center" height="35" >
                                                <select name="select" id =<%=indexInSentences%><%=comboIndex%> onFocus=buildIdForCalulate(<%=indexInSentences%>,<%=numberOfCombos%>) onChange=buildIdForCalulate(<%=indexInSentences%>,<%=numberOfCombos%>) onselect=buildIdForCalulate(<%=indexInSentences%>,<%=numberOfCombos%>) >
                                                        <%
                                                        for(int wordIndex = 0;wordIndex <currentHebrewWordsList.size();wordIndex++) {
                                                    HebrewWord currentHebrewWord = currentHebrewWordsList.get(wordIndex);
                                                    String option = currentHebrewWord.toString();
                                                        %>
                                                        <option><%=option+" "%></option>
                                                    <%
                                                        }
                                                //adding the word number
                                                    %>
                                                    <option><%= currentWord.number+" "%></option>
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
                        <table id="buttomTableImage" background="..\images\BGImages\TableImageBGbottom.gif"width="552"height="49">
                            <tr>
                                <td align = "left">
                                    <input type="button" name="Submit"  value='&#1513;&#1502;&#1493;&#1512; &#1514;&#1493;&#1510;&#1488;&#1492; &#1504;&#1493;&#1499;&#1495;&#1497;&#1514;' onclick= 'AdSelectedNumToTable()'>
                                    <input type="button" name="Submit2" value='&#1506;&#1489;&#1493;&#1512; &#1500;&#1514;&#1493;&#1510;&#1488;&#1492; &#1492;&#1489;&#1488;&#1492;' onclick="OnNextResultButton()">
                                    <input type="button" name="Submit3" value='&#1495;&#1494;&#1493;&#1512; &#1500;&#1514;&#1493;&#1510;&#1488;&#1492; &#1511;&#1493;&#1491;&#1502;&#1514;' onclick="OnPrevResultButton()">                                               
                                </td>
                            </tr>
                        </table>
                        <table  id="topTableImage2"  background="..\images\BGImages\TableImageBGtop.gif"width="552"height="101">
                            <tr>
                                <td align="right"  dir="rtl" lang="he"><h1 class="style3">
                                </td>
                            </tr>
                        </table>
                        <table  background="..\images\BGImages\TableImageBG.gif"  width="552" id="selectedNumbers" dir="rtl" lang="he">
                        </table>
                        <table id="buttomTableImage2" background="..\images\BGImages\TableImageBGbottom.gif"width="552"height="49">
                            <tr>
                                <td align = "left"> 
                                </td>
                            </tr>
                        </table>                               
                    </td>
                    <td width="180" height="313">
                    </td> 
                </tr>
                <tr id="rG4">
                    <td height="119" colspan="4"><img src="..\images\BGImages\barDown.gif" width="1034" height="149" longdesc="..\images\BGImages\barDown.gif" />
                    </td>
                </tr>  
            </table>
            <!--Show Only current row-->
            <script type="text/javascript"> ShowHideTable() </script>  
            <!--fix ie problem-->
            <script type="text/javascript" src="..\\ieupdate.js"></script>
        </div>
    </body>
</html>
