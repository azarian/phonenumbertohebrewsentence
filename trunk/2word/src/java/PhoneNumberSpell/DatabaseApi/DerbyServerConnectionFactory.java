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
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

/**
 *
 * @author Nadav
 */
public class DerbyServerConnectionFactory {
    
    
    private static Class driverClass;    


    public DerbyServerConnectionFactory() {        
    }    

    public Connection getConnection() throws ClassNotFoundException, SQLException, InstantiationException, IllegalAccessException, NamingException {
        
        Class.forName("org.apache.derby.jdbc.EmbeddedDriver").newInstance();         
        DataSource ds = getNumberToWordDB();
        return ds.getConnection();        
    }    

    private DataSource getNumberToWordDB() throws NamingException {
        Context c = new InitialContext();
        return (DataSource) c.lookup("java:comp/env/NumberToWordDB");
    }
    
}
