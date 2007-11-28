package PhoneNumberSpell.DatabaseApi;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;
/*
 * PhoneNumberSpellApi.java
 *
 * Created on November 16, 2007, 11:37 AM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

/**
 *
 * @author Nadav
 */
public class PhoneNumberSpellApi {
    NumberToWordsApi dbApi;
    
    
    /** Creates a new instance of PhoneNumberSpellApi */
    public PhoneNumberSpellApi(Connection con) {
        dbApi = new NumberToWordsApi(con);
    }
    //Definition: a consecunce number is a number which does not contain 0 or 1.
    private boolean isAConsecNumber(String number){
        return true;//number.matches("[2-9]?");
    }
    public NumberSentences getNumberSentences(String consecNumber) throws Exception{
        //Check that the input is legal.
        if( !isAConsecNumber(consecNumber) ||  consecNumber.length() < 2 ) {
            throw new Exception("Invalid input " + consecNumber + ". Input is not a consectuvie number or of lengh smaller then 2");       
        }
        //Init the result object
        NumberSentences result = new NumberSentences(consecNumber);
        //Get the all word sentence.
        NumberWords nw = dbApi.getNumberWords(consecNumber);
        NumberSentence ns = new NumberSentence(consecNumber);
        ns.getNumberWords().add(nw);
        result.getSentences().add(ns);                 
        //Get all other sentences.
        for (int i = 2 ; i < consecNumber.length()-1 ; i++ ){
            String first = consecNumber.substring(0,i);
            String second = consecNumber.substring(i);
            
            //Get sentence for the fist number.
            nw = dbApi.getNumberWords(first);
            ns = new NumberSentence(first);
            ns.getNumberWords().add(nw);
            NumberSentences firstSentences  = new  NumberSentences(first);
            firstSentences.getSentences().add(ns);
            //Get sentences for the second number.
            NumberSentences secondSentences =  getNumberSentences(second);
            //combine result
            NumberSentences combinedResult = NumberSentences.append(firstSentences,secondSentences);
            result.getSentences().addAll(combinedResult.getSentences());      
        }
        
        return result;   
    }
    
}
