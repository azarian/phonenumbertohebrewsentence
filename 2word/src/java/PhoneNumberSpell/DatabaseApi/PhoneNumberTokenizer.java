/*
 * PhoneNumberTokenizer.java
 *
 * Created on November 29, 2007, 7:43 PM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package PhoneNumberSpell.DatabaseApi;

/**
 *
 * @author Nadav
 */
public class PhoneNumberTokenizer {
    
    String number;
    int reference = 0;
    /** Creates a new instance of PhoneNumberTokenizer */
    public PhoneNumberTokenizer(String number) {
        this.number = number;
    }
    
    public PhoneNumberToken next(){
        PhoneNumberToken result;
        if (isStartOftoken(number,reference)){
            result = new PhoneNumberToken(getTokenStartAt(number,reference),true);            
        }
        else{
            result = new PhoneNumberToken(getNonTokenStartAt(number,reference),false);
        }
        reference = reference + result.getNumber().length();
        return result;      
    }
    
    boolean isConvertableChar(String c){
        return (c.compareToIgnoreCase("0") != 0 && c.compareToIgnoreCase("1") != 0 );
    }
    
    boolean isStartOftoken(String t,int i){
        if (t.length() < i+2 )
            return false;
        else{
            String s1=t.substring(i,i+1);
            String s2 = t.substring(i+1,i+2);
            
            boolean b1 = isConvertableChar(s1);
            boolean b2 = isConvertableChar(s2);
            //System.out.println("isStartOftoken " + s1 + " " + s2 + " " + b1 + " " + b2);
            return  b1&&b2;
        }
    }
    String getTokenStartAt(String t, int i){
        for (int j = i + 2 ; j < t.length() ; j++ ){
            if (!isConvertableChar(t.substring(j,j+1)))
                return t.substring(i,j);
        }
        return t.substring(i);
    }

    String getNonTokenStartAt(String number, int reference) {
        int endsAt = reference+1;
        while (endsAt < number.length() && !isStartOftoken(number,endsAt)   ){
            endsAt++;
        }
        if (reference >= number.length()){
            return "";
        }
        return number.substring(reference,endsAt);
    }
    public class PhoneNumberToken{
        String number;
        boolean bConvertable;
        public PhoneNumberToken(String number,boolean bConvertable){
            this.setNumber(number);
            this.setBConvertable(bConvertable);   
            
        }

        public String getNumber() {
            return number;
        }

        public void setNumber(String number) {
            this.number = number;
        }

        public boolean isBConvertable() {
            return bConvertable;
        }

        public void setBConvertable(boolean bConvertable) {
            this.bConvertable = bConvertable;
        }
        
    }
    
    
    
}
