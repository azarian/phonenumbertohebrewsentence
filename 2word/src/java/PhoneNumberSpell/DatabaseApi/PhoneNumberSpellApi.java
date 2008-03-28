package PhoneNumberSpell.DatabaseApi;

import java.io.UnsupportedEncodingException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import javax.naming.NamingException;
import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;
import org.apache.log4j.spi.Configurator;


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
    private final static Logger logger = Logger.getLogger(PhoneNumberSpellApi.class);
    
    /** Creates a new instance of PhoneNumberSpellApi */
    public PhoneNumberSpellApi() throws ClassNotFoundException, SQLException, InstantiationException, IllegalAccessException, NamingException, UnsupportedEncodingException {
        //DerbyServerConnectionFactory dbFactory = new DerbyServerConnectionFactory();
        DerbyConnectionFactoryHC dbFactory  = new DerbyConnectionFactoryHC();
        dbApi = new NumberToWordsApi(dbFactory.getConnection());        
    }
    //Definition: a consecunce number is a number which does not contain 0 or 1.
    private boolean isAConsecNumber(String number){
        return true;//number.matches("[2-9]?");
    }
    
    public NumberSentences getNumberSentences(String phoneNumber) throws Exception{
        logger.info("getNumberSentences-> enter with " + phoneNumber);
        PhoneNumberTokenizer t= new PhoneNumberTokenizer(phoneNumber);
        NumberSentences result = getEmptyNumberSentences();
        while (true){
            PhoneNumberTokenizer.PhoneNumberToken token = t.next();
            logger.debug("getNumberSentences-> got token " + token.getNumber());
            if (token.getNumber().compareToIgnoreCase("") == 0){
                logger.debug("getNumberSentences-> got epmty token. break... ");
                break;
            }
                
            NumberSentences ns;
            if (token.isBConvertable()){
                logger.debug("The token is convertable..");
                ns = getNumberSentencesR(token.getNumber());                
            }else{
                ns  = getNonConvertableNumberSentences(token.getNumber());
                logger.debug("The token is not convertable convertable..");
            }
            result = NumberSentences.append(result,ns);
        }
        logger.debug("getNumberSentences-> sorting.... " );
        Collections.sort(result.getSentences());
        logger.info("getNumberSentences-> return with " + result.toString());
        return result;
    }    
    
    
    public NumberSentences getNumberSentencesR(String consecNumber) throws Exception{
        //Check that the input is legal.
        if( !isAConsecNumber(consecNumber) ||  consecNumber.length() < 2 ) {
            throw new Exception("Invalid input " + consecNumber + ". Input is not a consectuvie number or of lengh smaller then 2");       
        }
        //Init the result object
        NumberSentences result = new NumberSentences(consecNumber);
        //Get the all word sentence.
        NumberWords nw = dbApi.getNumberWords(consecNumber);
        NumberSentence ns = new NumberSentence(consecNumber);
        if (nw.words.size() > 0 ){
            ns.getNumberWords().add(nw);
            result.getSentences().add(ns);      
        }
                   
        //Get all other sentences.
        for (int i = 2 ; i < consecNumber.length()-1 ; i++ ){
            String first = consecNumber.substring(0,i);
            String second = consecNumber.substring(i);
            
            //Get sentence for the fist number.
            nw = dbApi.getNumberWords(first);
            if(nw.words.size() == 0)
                continue;
            ns = new NumberSentence(first);
            ns.getNumberWords().add(nw);
            NumberSentences firstSentences  = new  NumberSentences(first);
            firstSentences.getSentences().add(ns);
            //Get sentences for the second number.
            NumberSentences secondSentences =  getNumberSentencesR(second);
            //combine result
            NumberSentences combinedResult = NumberSentences.append(firstSentences,secondSentences);
            result.getSentences().addAll(combinedResult.getSentences());      
        }
        
        return result;   
    }
    
    public NumberSentences getNumberEnglishSentences(String phoneNumber) throws Exception{
        logger.info("getNumberEnglishSentences-> enter with " + phoneNumber);
        PhoneNumberTokenizer t= new PhoneNumberTokenizer(phoneNumber);
        NumberSentences result = getEmptyNumberSentences();
        while (true){
            PhoneNumberTokenizer.PhoneNumberToken token = t.next();
            logger.debug("getNumberEnglishSentences-> got token " + token.getNumber());
            if (token.getNumber().compareToIgnoreCase("") == 0){
                logger.debug("getNumberEnglishSentences-> got epmty token. break... ");
                break;
            }
                
            NumberSentences ns;
            if (token.isBConvertable()){
                logger.debug("The token is convertable..");
                ns = getNumberEnglishSentencesR(token.getNumber());                
            }else{
                ns  = getNonConvertableNumberSentences(token.getNumber());
                logger.debug("The token is not convertable convertable..");
            }
            result = NumberSentences.append(result,ns);
        }
        logger.debug("getNumberEnglishSentences-> sorting.... " );
        Collections.sort(result.getSentences());
        logger.info("getNumberEnglishSentences-> return with " + result.toString());
        return result;
    }    
    
    
    public NumberSentences getNumberEnglishSentencesR(String consecNumber) throws Exception{
        //Check that the input is legal.
        if( !isAConsecNumber(consecNumber) ||  consecNumber.length() < 2 ) {
            throw new Exception("Invalid input " + consecNumber + ". Input is not a consectuvie number or of lengh smaller then 2");       
        }
        //Init the result object
        NumberSentences result = new NumberSentences(consecNumber);
        //Get the all word sentence.
        NumberWords nw = dbApi.getNumberEnglishWords(consecNumber);
        NumberSentence ns = new NumberSentence(consecNumber);
        if (nw.words.size() > 0 ){
            ns.getNumberWords().add(nw);
            result.getSentences().add(ns);      
        }
                   
        //Get all other sentences.
        for (int i = 2 ; i < consecNumber.length()-1 ; i++ ){
            String first = consecNumber.substring(0,i);
            String second = consecNumber.substring(i);
            
            //Get sentence for the fist number.
            nw = dbApi.getNumberWords(first);
            if(nw.words.size() == 0)
                continue;
            ns = new NumberSentence(first);
            ns.getNumberWords().add(nw);
            NumberSentences firstSentences  = new  NumberSentences(first);
            firstSentences.getSentences().add(ns);
            //Get sentences for the second number.
            NumberSentences secondSentences =  getNumberEnglishSentencesR(second);
            //combine result
            NumberSentences combinedResult = NumberSentences.append(firstSentences,secondSentences);
            result.getSentences().addAll(combinedResult.getSentences());      
        }
        
        return result;   
    }

    private NumberSentences getNonConvertableNumberSentences(String number) {
        NumberWords nw = new NumberWords(number);
        NumberSentence ns = new NumberSentence(number);
        ns.getNumberWords().add(nw);
        NumberSentences nss = new NumberSentences(number);
        nss.getSentences().add(ns);
        return nss;
        
    }
    private NumberSentences getEmptyNumberSentences() {
        
        NumberSentence ns = new NumberSentence("");
        NumberSentences nss = new NumberSentences("");
        nss.getSentences().add(ns);
        return nss;
        
    }
    
}
