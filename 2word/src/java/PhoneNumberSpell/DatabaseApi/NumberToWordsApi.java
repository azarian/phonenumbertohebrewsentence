/*
 * NumberToWordsApi.java
 *
 * Created on October 25, 2007, 7:17 PM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package PhoneNumberSpell.DatabaseApi;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.MessageFormat;

/**
 *
 * @author Nadav
 */
public class NumberToWordsApi {
    
    private Connection con = null;
    /**
     * Creates a new instance of NumberToWordsApi
     */
    public NumberToWordsApi(Connection con)  {
        
        this.con = con;
    }
    
    //public interface
    public  void addNumberWord(final String number,final String word,final String type) throws SQLException{
        //create sql query.
        String query = MessageFormat.format("INSERT INTO \"numbertoword\"" +
                "(\"number\", \"word_type\", \"hebrew_word\")" +
                " VALUES ({0},{1},{2}) ",
                number,
                type,
                quote(word));
        
        Statement stmt = null;
        stmt = con.createStatement();            
        stmt.executeUpdate(query);            
        stmt.close();                   
    }
    public  void addNumberEnglishWord(final String number,final String word,final String type) throws SQLException{
        //create sql query.
        String query = MessageFormat.format("INSERT INTO \"numbertoenglishword\"" +
                "(\"number\", \"word_type\", \"english_word\")" +
                " VALUES ({0},{1},{2}) ",
                number,
                type,
                quote(word));
        
        Statement stmt = null;
        stmt = con.createStatement();            
        stmt.executeUpdate(query);            
        stmt.close();                   
    }    
    
    public NumberWords getNumberWords(String number) throws SQLException{
        NumberWords result = new NumberWords(number);
        //create sql query.
        StringBuffer query = new StringBuffer();
        query.append("SELECT \"word_type\", \"hebrew_word\" FROM \"numbertoword\" WHERE \"number\"=" + number);
        Statement stmt = con.createStatement();
        ResultSet rs = stmt.executeQuery(query.toString());
        while (rs.next()){            
            String word_type = String.valueOf(rs.getInt("word_type"));
            String hebrew_word = rs.getString("hebrew_word");
            result.words.add(new Word(hebrew_word,word_type));
        }
        return result;
    }
    public NumberWords getNumberEnglishWords(String number) throws SQLException{
        NumberWords result = new NumberWords(number);
        //create sql query.
        StringBuffer query = new StringBuffer();
        query.append("SELECT \"word_type\", \"english_word\" FROM \"numbertoenglishword\" WHERE \"number\"=" + number);
        Statement stmt = con.createStatement();
        ResultSet rs = stmt.executeQuery(query.toString());
        while (rs.next()){            
            String word_type = String.valueOf(rs.getInt("word_type"));
            String english_word = rs.getString("english_word");
            result.words.add(new Word(english_word,word_type));
        }
        return result;
    }
    
    public void closeConnection() {
        if (con != null) {
            try {
                con.close();
            } catch (SQLException e) {
                
            }
        }
    }
    
    //private methods.
    private  String quote(String str) {
        if (str == null)
            str = new String();
        str = str.replace("'", "");
        return "'" + str + "'";
    }
    
}
