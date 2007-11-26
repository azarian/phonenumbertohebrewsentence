/*
 * NumberSentence.java
 *
 * Created on November 16, 2007, 11:41 AM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package PhoneNumberSpell.DatabaseApi;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Nadav
 */
public class NumberSentence {
    
    private String number;
    private List<NumberWords> numberWords = new ArrayList<NumberWords>();
        /**
     * Creates a new instance of NumberSentence
     */
    public NumberSentence(String number) {
        this.setNumber(number);
    }
    public NumberSentence(NumberSentence ns) {
        this.setNumber(new String(ns.number));
        for (int i = 0 ; i < numberWords.size() ; i++){
            numberWords.add(new NumberWords(ns.numberWords.get(i)));
        }       
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public List<NumberWords> getNumberWords() {
        return numberWords;
    }

    public void setNumberWords(List<NumberWords> numberWords) {
        this.numberWords = numberWords;
    }
    public static NumberSentence append(NumberSentence first,NumberSentence second){
        NumberSentence result = new NumberSentence(first.number + second.number); 
        //Add all first words.
        result.numberWords.addAll(first.numberWords)         ;
        //Add all second words 
        result.numberWords.addAll(second.numberWords);
        return result;          
    }
    
    public String toString(){
        String result = "{-number: " +number;
        String strWords = "[";
        for (int i = 0 ; i < numberWords.size() ; i++){
            strWords +=  numberWords.get(i) + ", ";
        }
        strWords +="]-}";
        return result + strWords;
    }
    
}
