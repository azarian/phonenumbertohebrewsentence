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
import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

/**
 *
 * @author Nadav
 */
public class DerbyServerConnectionFactory {
    private final static Logger logger = Logger.getLogger(DerbyServerConnectionFactory.class);
    private static int instanceCounter = 0;
    private static Class driverClass; 
    private static Connection con_ = null;


    public DerbyServerConnectionFactory() {
        
    }    

    public Connection getConnection() throws ClassNotFoundException, SQLException, InstantiationException, IllegalAccessException, NamingException {
        
        if (con_ == null || con_.isClosed() ){
            BasicConfigurator.configure();
            Class.forName("org.apache.derby.jdbc.EmbeddedDriver").newInstance();         
            DataSource ds = getNumberToWordDB();
            instanceCounter++;
            logger.info("getConnection - return new connection. -  "+instanceCounter);                
            con_ = ds.getConnection();             
        }
        logger.info("getConnection - return exsting connection. -  " + instanceCounter);  
        return con_;         
    }    

    private DataSource getNumberToWordDB() throws NamingException {
        Context c = new InitialContext();
        return (DataSource) c.lookup("java:comp/env/NumberToWordDB");
    }
    
}
