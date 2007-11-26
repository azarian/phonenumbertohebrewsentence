/*
 * Main.java
 *
 * Created on October 20, 2007, 4:29 PM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package tablegenerator;

import PhoneNumberSpell.DatabaseApi.DBConnectionFactory;
import PhoneNumberSpell.DatabaseApi.DerbyServerConnectionFactory;
import PhoneNumberSpell.DatabaseApi.MySQLServerConnectionFactory;
import PhoneNumberSpell.DatabaseApi.NumberSentences;
import PhoneNumberSpell.DatabaseApi.NumberToWordsApi;
import PhoneNumberSpell.DatabaseApi.NumberWords;
import PhoneNumberSpell.DatabaseApi.PhoneNumberSpellApi;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.io.Writer;
import java.sql.SQLException;
import java.util.Date;
import java.util.HashMap;
import java.util.StringTokenizer;

/**
 *
 * @author Nadav
 */
public class Main {
    
    HashMap<String,String> charToNumber = new HashMap<String,String>();
    NumberToWordsApi api;
    PhoneNumberSpellApi phoneApi;
    
    /** Creates a new instance of Main */
    
    public Main() {
        charToNumber.put("\u05D3","2");
        charToNumber.put("\u05D4","2");
        charToNumber.put("\u05D5","2");
        charToNumber.put("\u05D0","3");
        charToNumber.put("\u05D1","3");
        charToNumber.put("\u05D2","3");
        charToNumber.put("\u05DD","4");
        charToNumber.put("\u05DE","4");
        charToNumber.put("\u05DF","4");
        charToNumber.put("\u05E0","4");
        charToNumber.put("\u05D9","5");
        charToNumber.put("\u05DA","5");
        charToNumber.put("\u05DB","5");
        charToNumber.put("\u05DC","5");
        charToNumber.put("\u05D6","6");
        charToNumber.put("\u05D7","6");
        charToNumber.put("\u05D8","6");
        charToNumber.put("\u05E8","7");
        charToNumber.put("\u05E9","7");
        charToNumber.put("\u05EA","7");
        charToNumber.put("\u05E5","8");
        charToNumber.put("\u05E6","8");
        charToNumber.put("\u05E7","8");
        charToNumber.put("\u05E1","9");
        charToNumber.put("\u05E2","9");
        charToNumber.put("\u05E3","9");
        charToNumber.put("\u05E4","9");
        
        //init db connection 
        DerbyServerConnectionFactory db = new DerbyServerConnectionFactory("localhost","numbertoword","root","nbuser","1527");
        //MySQLServerConnectionFactory db = new MySQLServerConnectionFactory("localhost","numbertoword","root","nbuser","3306");
        
        try {
            api = new NumberToWordsApi(db.getConnection());
            phoneApi  =  new PhoneNumberSpellApi(db.getConnection());
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        } catch (IllegalAccessException ex) {
            ex.printStackTrace();
        } catch (InstantiationException ex) {
            ex.printStackTrace();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
    }
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        System.out.println("Startig running.");
        Main m = new Main();
        //m.readFile();
        //m.test();
        m.test2();
    }
    public  String wordToNumber(String word){
        StringBuffer result = new StringBuffer();
        for (int i = 0 ; i < word.length() ; i++){
            
            String charAt = word.substring(i,i+1);
            if(charToNumber.containsKey(charAt)){
                String currenNumber = charToNumber.get(charAt); 
                result.append(currenNumber);
            }else{
                sop("character " + word.charAt(i) + " does not exists in the map");
            }
        }
        return result.toString();
    }
    
    public void readFile(){
        //declared here only to make visible to finally clause
        BufferedReader input = null;
        try {
        //use buffering, reading one line at a time
        //FileReader always assumes default encoding is OK!
        //input = new BufferedReader( new FileReader(new File("C:\\Documents and Settings\\Nadav\\tableGenerator\\wl\\tests2.txt")) );
        input = new BufferedReader(new InputStreamReader(new FileInputStream("C:\\Documents and Settings\\Nadav\\tableGenerator\\wl\\he_unicode.txt"),"UNICODE"));
  //String line = rdr.readLine();
        String line = null; //not declared within while loop
        /*
          * readLine is a bit quirky :
        * it returns the content of a line MINUS the newline.
        * it returns null only for the END of the stream.
        * it returns an empty String if two newlines appear in a row.
        */
        int nLines = 20;
        int currentLine= 0;
        while (( line = input.readLine()) != null){
            processLine(line);            
          }
        }
        catch (FileNotFoundException ex) {
          ex.printStackTrace();
        }
        catch (IOException ex){
          ex.printStackTrace();
        }
        finally {
          try {
            if (input!= null) {
              //flush and close both "input" and its underlying FileReader
              input.close();
            }
          }
          catch (IOException ex) {
            ex.printStackTrace();
          }
        }        
    }

    private void processLine(String line) {
        StringTokenizer st = new StringTokenizer(line,"/");
        if (st.countTokens() != 2){
            sop("Illigal number of tokens");
        }
        else{
            String word = st.nextToken();
            String number = wordToNumber(word);
            String type  = getWordTypeNumber(st.nextToken());
            try {
                //Add it to the database
                api.addNumberWord(number,word,type);
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
            
        }
        
    }
    private static void sop(String s){
        Writer w = null;
        try {
            w = new BufferedWriter(new OutputStreamWriter(System.out, "UNICODE"));
            w.write(s);
            w.flush();
            w.close();  
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        
    }
    private String getWordTypeNumber(String type){
        if (type.compareToIgnoreCase("a") == 0)
            return String.valueOf(1);
        else if (type.compareToIgnoreCase("b") == 0)
            return String.valueOf(2);
        else if (type.compareToIgnoreCase("c") == 0)
            return String.valueOf(3);
        else if (type.compareToIgnoreCase("d") == 0)
            return String.valueOf(4);
        else return String.valueOf(5);
        
    }

    private void test() {
        try {
            long startNumber = 35;
            System.out.println("Startig query." + new Date().toString());
            for(int i = 0 ; i < 1000; i++ ) {
                
                NumberWords res = api.getNumberWords(String.valueOf(startNumber));           
                
                startNumber++;
            }
            System.out.println("ending query. " + new Date().toString());
                    
            
                
            System.out.print("Finish");
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
    }
    private void test2() {
        try {
            String startNumber = "2345";
            System.out.println("Startig query." + new Date().toString());
            NumberSentences ans = phoneApi.getNumberSentences(startNumber);            
            System.out.println("ending query. " + new Date().toString());
            sop(ans.toString());                  
            
                
            System.out.print("Finish");
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        
    }
    
}
;