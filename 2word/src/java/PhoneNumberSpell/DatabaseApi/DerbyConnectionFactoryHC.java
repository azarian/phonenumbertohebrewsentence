/*
 * DerbyServerConnectionFactory.java
 *
 * Created on October 27, 2007, 12:20 PM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package PhoneNumberSpell.DatabaseApi;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;





/**
 *
 * @author Nadav
 */
public class DerbyConnectionFactoryHC {
    
    private final static Logger logger = Logger.getLogger(DerbyServerConnectionFactory.class);
    private static Class driverClass; 
    private static Connection con_ = null;    
    private static int instanceCounter = 0;
    


    public DerbyConnectionFactoryHC() {        
    }

    public Connection getConnection() throws ClassNotFoundException, SQLException, InstantiationException, IllegalAccessException, UnsupportedEncodingException {
        if (con_ == null || con_.isClosed() ){
            BasicConfigurator.configure();
            Class.forName("org.apache.derby.jdbc.EmbeddedDriver").newInstance();        
            String path = "jdbc:derby:" + getDbPath();
            con_ = DriverManager.getConnection(path ,"root","nbuser");
        } 
        return con_;
    }
    private String getDbPath() throws UnsupportedEncodingException{
        return "/home/azarian/public_html/WEB-INF/Database/numbertoword";
        /*String str = URLDecoder.decode(getClass().getClassLoader().getResource("PhoneNumberSpell/DatabaseApi").toString(), "UTF-8");
        // Create a path pointing to WEB-INF/db/flexdemodb/flexdemodb
        String path = str.substring(6, str.indexOf("classes/PhoneNumberSpell/DatabaseApi")) + "Database/numbertoword";
        //path = path.replace("/","\\");
        //home\azarian\public_html\WEB-INF\Database\numbertoword
        return path;*/

    }
    
}