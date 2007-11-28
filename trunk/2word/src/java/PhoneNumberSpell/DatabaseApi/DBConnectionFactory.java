package PhoneNumberSpell.DatabaseApi;

import java.sql.Connection;
import java.sql.SQLException;

public interface DBConnectionFactory {
    public Connection getConnection() throws ClassNotFoundException, SQLException;    
}
