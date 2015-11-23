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
public class getdownloaddetail2 extends JavaServiceSuperClass {
/* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public getdownloaddetail2() {
        super(INFO);
    }

    public String sampleJavaOperation() {
        String result = null;
        try {
         //   log(INFO, "Starting sample operation");
            result = "Hello World";
        //    log(INFO, "Returning " + result);
        } catch (Exception e) {
            log(ERROR, "The sample java service operation has failed", e);
        }
        return result;
    }

    //    public String main(int mydate, String mypid, String mytype) throws SQLException {
    public String main(String myowner, String myaccesscode,String mycmodel, String myday, String mymonth, 
     String myredcode, String mystate, String mypid, String mytype, String myyear, int myinstance) throws SQLException {

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
              System.out.println("getDownload   DETAIL2 #############################d");
            System.out.println("Database getDownloaddetail2 established");
            System.out.println("DONE");
            String myyearsql = "";
            String mytypesql = "";
            
            String mymonthsql = "";
            if (mymonth.length() > 0) {
                mymonthsql = "  and month(a.server_time)="+mymonth;
            }
            String mydaysql = "";
            if (myday.length() > 0) {
                mydaysql = "  and day(a.server_time)="+myday;
            }
            String myoidsql = "";
            if (mypid.length() > 0) {
                myoidsql = "  and a.custom_var_v2 like '%" + mypid + "%'   ";
            }
            
            if (myyear.length() > 0) {
                myyearsql = " and  year(a.server_time)=" + myyear + "   ";
            }
            if (mytype.length() > 0) {
                mytypesql = " ( lower(a.custom_var_v1) like '%" + mytype.toLowerCase() + "%' " + " or ( lower(a.custom_var_k1) like '%" + mytype.toLowerCase() + "%' " + " )" + " or ( lower(a.custom_var_k2) like '%" + mytype.toLowerCase() + "%' " + " )" + " or ( lower(a.custom_var_k3) like '%" + mytype.toLowerCase() + "%' " + " )" + " or ( lower(a.custom_var_k4) like '%" + mytype.toLowerCase() + "%' " + " )" + " or ( lower(a.custom_var_k5) like '%" + mytype.toLowerCase() + "%' " + " )" + " )  ";
            }
            String mystatesql="";
            if (mystate.length() > 0) {
                mystatesql = "  and b.state like '" + mystate+"' " ;
            }
            String myredcodesql="";
            if (myredcode.length() > 0) {
                myredcodesql = "  and b.redcode like '" + myredcode+"' " ;
            }
            
             String myinstanceis="";
if (myinstance > 0) {
                myinstanceis = "  and b.idsite like '" + myinstance+"' " ;
                  myinstanceis = myinstanceis + "  and a.idsite = " + myinstance+"  " ;
            }

            mytype="download";
            mytypesql = " ( lower(a.custom_var_v1) like '%" + mytype.toLowerCase() + "%' " +
            " or ( lower(a.custom_var_k1) like '%" + mytype.toLowerCase() + "%' " + " )" + 
            " or ( lower(a.custom_var_k2) like '%" + mytype.toLowerCase() + "%' " + " )" +
            " or ( lower(a.custom_var_k3) like '%" + mytype.toLowerCase() + "%' " + " )" +
            " or ( lower(a.custom_var_k4) like '%" + mytype.toLowerCase() + "%' " + " )" + 
            " or ( lower(a.custom_var_k5) like '%" + mytype.toLowerCase() + "%' " + " )" + " )  ";
            
            
            result = "";
            st = conn.createStatement();

            String sql ="";
            /*"select b.cmodel as cmodel, count(a.custom_var_v1) as howmany,month(a.server_time) as monthofvisit,"+
            " a.custom_var_v1 as v1 ,a.custom_var_k1 as k1,a.custom_var_v2 as v2,a.custom_var_k2 as k2" +
            ", a.custom_var_v3 as v3,a.custom_var_k3 as k3," + 
            " a.custom_var_v4 as v4,a.custom_var_k4 as k4,a.custom_var_v5 as v5,a.custom_var_k5 as k5 " + 
            ", a.server_time as datevisit " + 
            " from piwik_log_link_visit_action as a " +
            " , inventory as b "+
            "where b.oid=a.custom_var_v1 and b.cmodel like '%"+mycmodel+"'" +
            " and b.owner like '%"+myowner+"'" +
            myyearsql + 
            myoidsql+
            mytypesql +
            mymonthsql+
            " and (a.custom_var_v1 is not null or a.custom_var_v2 is not null or a.custom_var_v3 is not null) "+
            " and a.custom_var_k1 !='Object Links' group by a.custom_var_v1 order by howmany desc limit 200000000";
            */

sql="select b.cmodel, b.owner as owner, (month(a.server_time)) as howmany, concat(day(a.server_time),'-',month(a.server_time),'-',year(a.server_time) )  "+
" as monthofvisit , a.custom_var_v1 as v1 ,a.custom_var_k1 as k1,a.custom_var_v2 as v2,a.custom_var_k2 as k2,"+
 " a.custom_var_v3 as v3,a.custom_var_k3 as k3, a.custom_var_v4 as v4,a.custom_var_k4 as k4, "+
" a.custom_var_v5 as v5,a.custom_var_k5 as k5 , a.server_time as datevisit  "+
",c.location_country as country "+
" from piwik_log_link_visit_action as a  "+
" ,inventory as b "+
" ,piwik_log_visit as c "+

" where  "+
 " a.custom_var_v2=b.oid "+
 " and a.idvisit=c.idvisit "+
 " and b.cmodel like '%"+mycmodel+"%'" +
 " and  b.acccode like '%"+myaccesscode+"%' and ( lower(a.custom_var_k2) like '%"+mytype.toLowerCase()+"%'  )  "+
 " and b.owner like '%"+myowner+"%'" +
 "  and b.cmodel!='Page' "+

 // " and b.oid like '%"+mypid+"%'" +
            myyearsql + 
            myoidsql+
            mymonthsql+
            mydaysql+
            mystatesql+
myinstanceis+
myredcodesql+
//" group by v1 order by count(month(a.server_time)) desc  limit 10;";
"   order by (a.server_time) ;";

//" and (a.custom_var_v1 is not null or a.custom_var_v2 is not null or a.custom_var_v3 is not null) "+
 //" group by v2 order by 1 desc limit 200000";
 

//System.out.println("mytype.toLowerCase()l:" + mytype.toLowerCase());
            System.out.println("sql:" + sql);

            ResultSet rs = st.executeQuery(sql);
            // result=sql;
            while (rs.next()) {
               //  int totalcount = rs.getInt("totalcount");
                String v1 = rs.getString("v1");
//String myowneris = rs.getString("owner");
String myowneris="aa";
                String k1 = rs.getString("k1");
                String k2 = rs.getString("k2");
                // if(k2.equals("null"))
                // {k2="";}
                
                String v2 = rs.getString("v2");
                String k3 = rs.getString("k3");
                String v3 = rs.getString("v3");
                String k4 = rs.getString("k4");
                String v4 = rs.getString("v4");
                String k5 = rs.getString("k5");
                String v5 = rs.getString("v5");
                String mycountry = rs.getString("country");
                v4=mycountry;
                if (k2 == null) {
                    k2 = "";
                }
                if (k3 == null) {
                    k3 = "";
                }
                if (k4 == null) {
                    k4 = "";
                }
                if (k5 == null) {
                    k5 = "";
                }
                if (v2 == null) {
                    v2 = "";
                }
                if (v3 == null) {
                    v3 = "";
                }
                if (v4 == null) {
                    v4 = "";
                }
                if (v5 == null) {
                    v5 = "";
                }
                String newtype= "";
                if (mytype.length() > 0)
                {
                     newtype= "',typeis:'" + mytype ;
                    }
                java.sql.Timestamp datevisit = rs.getTimestamp("datevisit");
                //  java.sql.Date  timevisit = rs.getDate("datevisit");
                long timevisit = datevisit.getTime();
                // long monthvisit = datevisit.getMonth()+1;
                String monthvisit=rs.getString("monthofvisit");
                
                String newmonth="";
                String  visitstring= "',monthvisit:'" + monthvisit;
               
             /*
             if(myyear>1)
                {
                      visitstring= "',monthvisit:'" + monthvisit;
                      }
                else
                {
                   newmonth=monthvisit+"/"+datevisit.getYear();
                   visitstring= "',monthvisit:'" + newmonth ;
                   }
                   */
                   
                 int howmany=rs.getInt("howmany");
               //   long dayvisit = datevisit.getDay();
                  Calendar now = Calendar.getInstance();
                    now.setTime(datevisit);
int dayvisit=now.get(Calendar.DAY_OF_MONTH);

                String myitem = "{k1:'" + k1 + 
                "',v1:'" + v1 + "'," + 
              "owneris:'" + myowneris + "'," + 
                "k2:'" + k2 + "',v2:'" + v2 + "'," + 
                "k3:'" + k3 +
                newtype+
            
                "',howmany:" + howmany +
               
                 ",dayvisit:'" + dayvisit +
                visitstring+
                "',v3:'" + v3 + "'," + "k4:'" + k4 + "',v4:'" + v4 + "'," + "datevisit:'" + datevisit + 
                "'," + "timevisit:'" + timevisit + "'," + "k5:'" + k5 + "',v5:'" + v5 + "'},";
              
                result = result + myitem;
                
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