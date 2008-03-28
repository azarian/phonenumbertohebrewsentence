/*
 * NumberWords.java
 *
 * Created on October 25, 2007, 7:21 PM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package PhoneNumberSpell.DatabaseApi;

import java.util.ArrayList;

/**
 *
 * @author Nadav
 */
public class NumberWords {
    
    public String number;
    public ArrayList<Word> words = new ArrayList<Word>();
    /**
     * Creates a new instance of NumberWords
     */
    public NumberWords(String number) {
        this.number = number;        
    }
    
    public NumberWords(NumberWords nw) {
        this.number = number; 
        for (int i = 0 ; i < nw.words.size() ; i++){
            words.add(new Word(nw.words.get(i)));
        }
    }
    public String toString(){
        String result = "{-number: " +number;
        String strWords = "[";
        for (int i = 0 ; i < words.size() ; i++){
            strWords +=  words.get(i) + ", ";
        }
        strWords +="]-}";
        return result + strWords;
    }
    
    
    
}
