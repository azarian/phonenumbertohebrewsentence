package PhoneNumberSpell.DatabaseApi;
import java.lang.Class;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class MySQLServerConnectionFactory implements DBConnectionFactory{
    
    private static Class driverClass;
    private String sqlServerName_,databaseName_,user_,passwd_,port_;


    public MySQLServerConnectionFactory(String sqlServerName, String databaseName, String user, String passwd, String port) {
        sqlServerName_ = sqlServerName;
        databaseName_ = databaseName;
        user_ = user;
        passwd_ = passwd;
        port_ =port;
    }

    private static String getURL(String sqlServerName, String databaseName, String userName, String password, String port) {
        return "jdbc:mysql://" + sqlServerName + (port != null ? ":" + port : "") + (databaseName != null ? "/" + databaseName : "");
                    
    }

    public Connection getConnection() throws ClassNotFoundException, SQLException {
        if (driverClass == null) {
            driverClass = Class.forName("com.mysql.jdbc.Driver");
        }
        String url  = getURL(sqlServerName_, databaseName_, user_, passwd_, port_); 
        return DriverManager.getConnection(url,user_,passwd_);
    }

    public int hashCode(){
        int tresult;
        tresult = sqlServerName_.hashCode();
        tresult = 29 * tresult +databaseName_.hashCode();
        return tresult;
    }
}
