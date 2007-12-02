/*
 * NumberSentences.java
 *
 * Created on November 16, 2007, 6:03 PM
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
public class NumberSentences {
    
    private List<NumberSentence> sentences = new ArrayList<NumberSentence>();
    private String number;
    /** Creates a new instance of NumberSentences */
    public NumberSentences(String number) {
        this.setNumber(number);
    }
    public static  NumberSentences append(NumberSentences first, NumberSentences second){
        NumberSentences result = new NumberSentences(first.getNumber() + second.getNumber());
        
        for(int i = 0 ; i < first.getSentences().size() ; i++){
            //Take one sentence from my list and remove it.
            NumberSentence firstNs = first.getSentences().get(i);
            for (int j = 0 ; j < second.getSentences().size() ; j++ ){
                NumberSentence secondNs = second.getSentences().get(j);
                NumberSentence newNs = NumberSentence.append(firstNs,secondNs);
                result.getSentences().add(newNs);         
            }
        }
        return result;
    }

    public List<NumberSentence> getSentences() {
        return sentences;
    }

    public void setSentences(List<NumberSentence> sentences) {
        this.sentences = sentences;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }
    
    public String toString(){
        String result = "{-number: " +number + "\n";
        String strWords = "[";
        for (int i = 0 ; i < sentences.size() ; i++){
            strWords +=  sentences.get(i) + "\n";
        }
        strWords +="]-}";
        return result + strWords;
    }
    
}
