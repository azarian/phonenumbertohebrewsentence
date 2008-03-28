/*
 * Word.java
 *
 * Created on October 26, 2007, 4:13 PM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package PhoneNumberSpell.DatabaseApi;

/**
 *
 * @author Nadav
 */
public class Word {   
        
    public String word;
    public String type;    
    public Word(String word,String type){
            this.word = word;
            this.type= type;
    }
    public Word(Word hw){
            this.word = new String(hw.word);
            this.type= new String(hw.type);
    }
    public String toString(){
        return word;
    }
    
    
}
