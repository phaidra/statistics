import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import java.sql. * ;
import java.util.Date;
import java.util.Calendar;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;
import java.sql.Connection;
import java.net. * ;
import  org.apache.commons.lang.StringEscapeUtils;
import java.util.Properties;
import com.wavemaker.runtime.RuntimeAccess; 
import java.io.FileInputStream;


/**
 * This is a client-facing service class.  All
 * public methods will be exposed to the client.  Their return
 * values and parameters will be passed to the client or taken
 * from the client, respectively.  This will be a singleton
 * instance, shared between all requests. 
 * 
 * To log, call the superclass method log(LOG_LEVEL, String) or log(LOG_LEVEL, String, Exception).
 * LOG_LEVEL is one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log level.
 * For info on these levels, look for tomcat/log4j documentation
 */
@ExposeToClient
public class getsearchesallfields extends JavaServiceSuperClass {
/* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public getsearchesallfields() {
        super(INFO);
    }

    public String sampleJavaOperation() {
        String result = null;
        try {
            log(INFO, "Starting sample operation");
            result = "Hello World";
            log(INFO, "Returning " + result);
        } catch (Exception e) {
            log(ERROR, "The sample java service operation has failed", e);
        }
        return result;
    }

    //    public String main(int mydate, String mypid, String mytype) throws SQLException {
    public String main(int myyear, String mysearch) throws SQLException {

        String result = null;
        int lport = 5656;
        String rhost = "your.sql.host";
        String host = "yourssh.host";
        int rport = 3306;
        String user = "ssshuser";
        String password = "sshpass";
        String dbuserName = "root";
        String dbpassword = "manager";
        String url = "jdbc:mysql://localhost:" + rport + "/piwiklocal";
        String driverName = "com.mysql.jdbc.Driver";
        Connection conn = null;
        Session session = null;
        Statement st = null;
        try {
            InetAddress address = java.net.InetAddress.getLocalHost();
            String hostname = address.getHostName();
            System.out.println("address:" + hostname);
          
          Properties prop = new Properties();
            
String diris = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("/");

         //   prop.load(new FileInputStream("/Users/jlpd/Documents/WaveMaker 6.7.0.RELEASE/projects/statistics/webapproot/Config.properties"));
    prop.load(new FileInputStream(diris+"/Config.properties"));
 
             driverName = prop.getProperty("db_driver");
            String localbox = prop.getProperty("localbox");
            String ip = prop.getProperty("db_ip");
            String dbName = prop.getProperty("db_name");
             String dataport = prop.getProperty("db_port");
             dbuserName = prop.getProperty("db_username");
             dbpassword = prop.getProperty("db_password");
        

 if (!hostname.toLowerCase().contains(localbox)) {
  driverName = prop.getProperty("remote_db_driver");
             ip = prop.getProperty("remote_db_ip");
             dbName = prop.getProperty("remote_db_name");
              dataport = prop.getProperty("remote_db_port");
              dbuserName = prop.getProperty("remote_db_username");
             dbpassword = prop.getProperty("remote_db_password");
        
            }
             url = "jdbc:mysql://"+ip+":" + dataport + "/"+dbName;


            String myyearsql="";
            if (myyear > 0) {
                myyearsql = "  and year(visit_first_action_time)='" + myyear+"' " ;
            }
            
/*
            //Set StrictHostKeyChecking property to no to avoid UnknownHostKey issue
            java.util.Properties config = new java.util.Properties(); 
            config.put("StrictHostKeyChecking", "no");
            JSch jsch = new JSch();
            session=jsch.getSession(user, host, 22);
            session.setPassword(password);
            session.setConfig(config);
          //  session.connect();
            System.out.println("Connected");
            //int assinged_port=session.setPortForwardingL(lport, rhost, rport);
            //System.out.println("localhost:"+assinged_port+" -> "+rhost+":"+rport);
            System.out.println("Port Forwarded");
             
             */

            //mysql database connectivity
            Class.forName(driverName).newInstance();
            conn = DriverManager.getConnection(url, dbuserName, dbpassword);
             System.out.println("getsearcheallfields  #################################");
            System.out.println("Database connection established");
mysearch="in allen felder";
String mysearch2="in all fields";
mysearch=mysearch.toLowerCase();
            String sql = "SELECT name as searchstring FROM search_pattern "+
             " where   lower(name) like '%"+mysearch+"%'"+
            " or lower(name) like '%"+mysearch2+"%'"+
           // myyearsql+
            " group by name order by name;";
            //" order by 2"+
           
            System.out.println("sql:" + sql);
            conn.prepareStatement(sql);
            Statement stmt = conn.createStatement();
            ResultSet rs2 = stmt.executeQuery(sql);
            result = "";
            // result=sql;
            while (rs2.next()) {
                //  int totalcount = rs.getInt("totalcount");
                //int count = rs2.getInt("count");
                String searchstring = rs2.getString("searchstring");
                searchstring=searchstring.replaceAll("ü", "ue").replaceAll("ö", "oe").replaceAll("ä", "ae")
                .replaceAll("ß", "ss")
             .replaceAll("Ü(?=[a-zäöüß ])", "Ue")
             .replaceAll("Ö(?=[a-zäöüß ])", "Oe")
             .replaceAll("Ä(?=[a-zäöüß ])", "Ae")
             .replaceAll("Ü", "UE")
             .replaceAll("Ö", "OE")
             .replaceAll("Ä", "AE")
             .replaceAll("-", " ")
              .replaceAll("&auml", "ae")
              .replaceAll("\\.", " ")
              .replaceAll("\\(", " ")
              .replaceAll("\\)", " ")
              .replaceAll("\\/", " ")
              .replaceAll("\\[", " ")
              .replaceAll("\\]", " ")
            //  .replaceAll("o:", "o")
              .replaceAll("enthae;lt", "enthaelt")
               .replaceAll("Eigent&uuml;mer", "Eigentuemer")
              
             .replaceAll("\"","");
             
                  searchstring=StringEscapeUtils.escapeJavaScript(searchstring);
                  
//System.out.println("searchstring:" + searchstring);
                //java.sql.Timestamp datevisit = rs2.getTimestamp("datevisit");
                //  java.sql.Date  timevisit = rs.getDate("datevisit");
                //  long timevisit = datevisit.getTime();
                //int monthis=datevisit.getMonth()+1;
                // int yearis=myyear;
              //  String myitem = "{count:'" + count + "',searchstring:'" + searchstring +
                  String myitem = "{ 'searchstring':'" + searchstring +
                //"'," + "year:'" + myyear +

/*
                + "',v2:'" + v2 + "'," + 
                "k3:'" + k3 +
                newtype+
             //   "',totalcount:'" + totalcount +
                //"',monthvisit:'" + monthvisit +
                "',howmany:'" + howmany +
                visitstring+
                 "',dayvisit:'" + dayvisit +
                "',v3:'" + v3 + "'," + "k4:'" + k4 + "',v4:'" + v4 + "'," + "datevisit:'" + datevisit + "'," +
                "timevisit:'" + timevisit + "'," + "k5:'" + k5 + "',v5:'" + v5 + 
                */
                "'},";
                //  "{datevisit:'"+datevisit+"'},";
                //  System.out.println("item:" + myitem);
                result = result + myitem;
                //result=result+v1+"--"+k1+"--"+v2+"--"+k2+"--"+"\r\n";
            }
            result = result.substring(0, result.length() - 1);
            rs2.close();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (conn != null && !conn.isClosed()) {
                System.out.println("Closing Database Connection");
                conn.close();

            }
            if (session != null && session.isConnected()) {
                System.out.println("Closing SSH Connection");
                session.disconnect();
            }
        }
        return result;
    }

}