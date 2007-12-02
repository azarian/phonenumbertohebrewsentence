/*
 * PhoneNumberTokenizerTest.java
 * JUnit based test
 *
 * Created on November 29, 2007, 9:39 PM
 */

package PhoneNumberSpell.DatabaseApi;

import junit.framework.*;

/**
 *
 * @author Nadav
 */
public class PhoneNumberTokenizerTest extends TestCase {
    
    public PhoneNumberTokenizerTest(String testName) {
        super(testName);
    }

    protected void setUp() throws Exception {
    }

    protected void tearDown() throws Exception {
    }

    /**
     * Test of next method, of class PhoneNumberSpell.DatabaseApi.PhoneNumberTokenizer.
     */
    public void testNext1() {
        System.out.println("next1");
        
        PhoneNumberTokenizer instance = new PhoneNumberTokenizer("00115505033034514320");
        
        String expResult = "0011";
        PhoneNumberTokenizer.PhoneNumberToken result = instance.next();
        System.out.println(expResult + " " + result.getNumber());
        assertEquals(expResult, result.getNumber());  
        
        expResult = "55";
        result = instance.next();
        System.out.println(expResult + " " + result.getNumber());
        assertEquals(expResult, result.getNumber());       
        
        expResult = "050";
        result = instance.next();
        System.out.println(expResult + " " + result.getNumber());
        assertEquals(expResult, result.getNumber());       
        
        expResult = "33";
        result = instance.next();
        System.out.println(expResult + " " + result.getNumber());
        assertEquals(expResult, result.getNumber());       
        
        expResult = "0";
        result = instance.next();
        System.out.println(expResult + " " + result.getNumber());
        assertEquals(expResult, result.getNumber());  
        
        expResult = "345";
        result = instance.next();
        System.out.println(expResult + " " + result.getNumber());
        assertEquals(expResult, result.getNumber());  
        
        expResult = "1";
        result = instance.next();
        System.out.println(expResult + " " + result.getNumber());
        assertEquals(expResult, result.getNumber());  
        
        expResult = "432";
        result = instance.next();
        System.out.println(expResult + " " + result.getNumber());
        assertEquals(expResult, result.getNumber());  
        
        expResult = "0";
        result = instance.next();
        System.out.println(expResult + " " + result.getNumber());
        assertEquals(expResult, result.getNumber());  
        
        expResult = "";
        result = instance.next();
        System.out.println(expResult + " " + result.getNumber());
        assertEquals(expResult, result.getNumber());  
        
    }
    
    public void testisConvertableChar() {
        PhoneNumberTokenizer instance = new PhoneNumberTokenizer("001155");
         assertEquals(false,instance.isConvertableChar("0"));
         assertEquals(false,instance.isConvertableChar("1"));
         assertEquals(true,instance.isConvertableChar("2"));
         assertEquals(true,instance.isConvertableChar("3"));
         assertEquals(true,instance.isConvertableChar("4"));
         assertEquals(true,instance.isConvertableChar("5"));
         assertEquals(true,instance.isConvertableChar("6"));
         assertEquals(true,instance.isConvertableChar("7"));
         assertEquals(true,instance.isConvertableChar("8"));
         assertEquals(true,instance.isConvertableChar("9"));       
         
    }
    
    
    public void testisStartOftoken() {
               
        PhoneNumberTokenizer instance = new PhoneNumberTokenizer("010156");
        
        boolean expResult = true;
       System.out.println("start testisStartOftoken");
        boolean result = instance.isStartOftoken("010156",4);
        System.out.println("end testisStartOftoken");
        assertEquals(expResult, result);         
        expResult = false;
        result = instance.isStartOftoken("010156",0);
        assertEquals(expResult, result); 
        result = instance.isStartOftoken("010156",1);
        assertEquals(expResult, result); 
        result = instance.isStartOftoken("010156",2);
        assertEquals(expResult, result); 
        result = instance.isStartOftoken("010156",3);
        assertEquals(expResult, result);        
        
    }
    
}
