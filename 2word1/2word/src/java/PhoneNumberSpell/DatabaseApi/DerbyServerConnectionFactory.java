/*
 * DerbyServerConnectionFactory.java
 *
 * Created on October 27, 2007, 12:20 PM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package PhoneNumberSpell.DatabaseApi;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author Nadav
 */
public class DerbyServerConnectionFactory {
    
    
    private static Class driverClass;
    private String sqlServerName_,databaseName_,user_,passwd_,port_;


    public DerbyServerConnectionFactory(String sqlServerName, String databaseName, String user, String passwd, String port) {
        sqlServerName_ = sqlServerName;
        databaseName_ = databaseName;
        user_ = user;
        passwd_ = passwd;
        port_ =port;
    }

    private static String getURL(String sqlServerName, String databaseName, String userName, String password, String port) {
        return "jdbc:derby://" + sqlServerName + (port != null ? ":" + port : "") + (databaseName != null ? "/" + databaseName : "");
                    
    }

    public Connection getConnection() throws ClassNotFoundException, SQLException, InstantiationException, IllegalAccessException {
        /*
        if (driverClass == null) {
            driverClass = Class.forName("org.apache.derby.jdbc.EmbeddedDriver");
        }
        String url  = getURL(sqlServerName_, databaseName_, user_, passwd_, port_); 
        return DriverManager.getConnection(url,user_,passwd_);
         */
        Class.forName("org.apache.derby.jdbc.EmbeddedDriver").newInstance(); 
        //String url = getURL(sqlServerName_, databaseName_, user_, passwd_, port_); 
         //return DriverManager.getConnection(url,user_,passwd_);
        return DriverManager.getConnection("jdbc:derby:Database\\numbertoword",user_,passwd_);
    }

    public int hashCode(){
        int tresult;
        tresult = sqlServerName_.hashCode();
        tresult = 29 * tresult +databaseName_.hashCode();
        return tresult;
    }
    
}
