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
import java.net.*;
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
public class gettotalsyears  extends JavaServiceSuperClass {
/* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public gettotalsyears() {
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
    public String main(String myoidin, String myowner, String mycontentmodel,String myday, String mymonth, 
    String myredcode, String myyear, String myaccesscode, String mystate, int instanceis) throws SQLException {
 String mypid="";
 String mytype="";
        String result = null;
        int lport = 5656;
        String rhost = "your.sql.host";
        String host = "yourssh.host";
        int rport = 3306;
        String user = "ssshuser";
        String password = "sshpass";
        String dbuserName = "";
        String dbpassword = "";
        String url = "jdbc:mysql://localhost:" + rport + "/phaidrastats";
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
              System.out.println("gettotalsyears #############################d");
            System.out.println("Database gettotalsyears established");
            System.out.println("DONE");
            String myyearsql = "";
            String mytypesql = "";
            
            String mymonthsql = "";
            if (mymonth.length() > 0) {
                mymonthsql = "  and month(created)="+mymonth;
            }
            String mydaysql = "";
            if (myday.length() > 0) {
                mydaysql = "  and day(created)="+myday;
            }
            
            String myoidsql = "";
            if (mypid.length() > 0) {
                myoidsql = "  custom_var_v1 like '" + mypid + "'  and ";
            }
            
            if (myyear.length() > 0) {
                myyearsql = " and year(created)=" + myyear + "   ";
            }
            if (mytype.length() > 0) {
                mytypesql = " ( lower(a.custom_var_v1) like '%" + mytype.toLowerCase() + "%' " + " or ( lower(a.custom_var_k1) like '%" + mytype.toLowerCase() + "%' " + " )" + " or ( lower(a.custom_var_k2) like '%" + mytype.toLowerCase() + "%' " + " )" + " or ( lower(a.custom_var_k3) like '%" + mytype.toLowerCase() + "%' " + " )" + " or ( lower(a.custom_var_k4) like '%" + mytype.toLowerCase() + "%' " + " )" + " or ( lower(a.custom_var_k5) like '%" + mytype.toLowerCase() + "%' " + " )" + " )  ";
            }

String mystatesql="";
            if (mystate.length() > 0) {
                mystatesql = "  and state like '" + mystate+"' " ;
            }
            String myredcodesql="";
            if (myredcode.length() > 0) {
                myredcodesql = "  and redcode like '" + myredcode+"' " ;
            }
            
               String myinstanceis="";
            if (instanceis > 0) {
                myinstanceis = "  and idsite = " + instanceis+"  " ;
            }
            String myowneris2 = "";
            if (myowner.length() > 0) {
                myowneris2 = "  and b.owner like '" + myowner + "' ";
            }

            
            mytype="view";
            mytypesql = " ( lower(a.custom_var_v1) like '%" + mytype.toLowerCase() + "%' " +
            " or ( lower(a.custom_var_k1) like '%" + mytype.toLowerCase() + "%' " + " )" + 
            " or ( lower(a.custom_var_k2) like '%" + mytype.toLowerCase() + "%' " + " )" +
            " or ( lower(a.custom_var_k3) like '%" + mytype.toLowerCase() + "%' " + " )" +
            " or ( lower(a.custom_var_k4) like '%" + mytype.toLowerCase() + "%' " + " )" + 
            " or ( lower(a.custom_var_k5) like '%" + mytype.toLowerCase() + "%' " + " )" + " )  ";
            
            
            result = "";
            st = conn.createStatement();

       
String sql= "select year(a.created)  as monthis, created as dateis, count(oid) as count, owner as owner"+
" from inventory as a " +
" where acccode like '%"+myaccesscode+"%' "+
" and cmodel like '%"+mycontentmodel+"%' "+
"  and cmodel!='Page' "+

" and oid like '%"+myoidin+"' "+
" and owner like '%"+myowner+"%' "+
mymonthsql+
mydaysql+
//mystatesql+
myyearsql+
myredcodesql+
myinstanceis+
" group by year(a.created)  order by 2;";


            System.out.println("sql:" + sql);

String sql2= "select concat(month(a.created),'-',year(a.created))  as monthis, created as dateis, count(oid) as count, owner as owner"+
" from inventory as a " +
" where acccode like '%"+myaccesscode+"%' "+
" and cmodel like '%"+mycontentmodel+"' "+

" and oid like '%"+myoidin+"' "+
" and owner like '%"+myowner+"%' "+
mymonthsql+
mydaysql+
mystatesql+
myyearsql+
myredcodesql+
myowneris2+
" group by month(a.created)  order by 2;";

if (myyear.length() > 0) {
                sql=sql2;
            }

            ResultSet rs = st.executeQuery(sql);
            // result=sql;
            while (rs.next()) {
               //  int totalcount = rs.getInt("totalcount");
                 int count = rs.getInt("count");
                String monthis = rs.getString("monthis");
               // String myowneris = rs.getString("owner");
               
               String myitemx = "{count:" + count + 
               ",cmodel:'" + monthis +
             //  ",owneris:'" + myowneris +
               "'},";
               result = result + myitemx;
                //result=result+v1+"--"+k1+"--"+v2+"--"+k2+"--"+"\r\n";
            }
        
        result = result.substring(0, result.length() - 1);
           //  System.out.println("resiult"+result);
            rs.close();
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