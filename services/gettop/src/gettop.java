import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.RuntimeAccess;
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

import java.io.FileInputStream;

import java.util.Properties;

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
public class gettop extends JavaServiceSuperClass {
/* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public gettop() {
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
    //   public String main(String myowner, String myaccesscode, String mycmodel, String myday, String mymonth, String myredcode, String mystate, String mypid, String mytype, int myyear) throws SQLException {
    public String main(int instanceis, String myowner, String myaccesscode, 
    String mycmodel, String myday, String mymonth, String myredcode, String mystate, 
    String mypid, String mytype, String myyear) throws SQLException {
        String result = null;
        int lport = 5656;
        String rhost = "your.sql.host";
        String host = "yourssh.host";
        int rport = 3306;
        String user = "ssshuser";
        String password = "sshpass";
        String dbuserName = "";
        String dbpassword = "";
        String url = ""; // "jdbc:mysql://localhost:" + rport + "/phaidrastats";
        String driverName = "";
        //com.mysql.jdbc.Driver";
        Connection conn = null;
        Session session = null;
        Statement st = null;
        try {
            InetAddress address = java.net.InetAddress.getLocalHost();
            String hostname = address.getHostName();
            System.out.println("address:" + hostname);
            //if (!hostname.equals("JoseLuis-MacBook-Pro.local")) {
            Properties prop = new Properties();

            String diris = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("/");

            prop.load(new FileInputStream(diris + "/Config.properties"));

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
            url = "jdbc:mysql://" + ip + ":" + dataport + "/" + dbName;
            Class.forName(driverName).newInstance();
            conn = DriverManager.getConnection(url, dbuserName, dbpassword);
            System.out.println("getTOP #############################d");
            System.out.println("Database gettop established");
            System.out.println("DONE");
            String myyearsql = "";
            String mytypesql = "";

            String myaccesscodeis="";
            if (myaccesscode.length() > 0) {
                myaccesscodeis = "  and b.acccode like '" + myaccesscode+"' " ;
            }
            String myinstanceis="";
            if (instanceis > 0) {
                myinstanceis = "  and b.idsite = " + instanceis+"  " ;
                  myinstanceis = myinstanceis + "  and a.idsite = " + instanceis+"  " ;
            }
            String mymonthsql = "";
            if (mymonth.length() > 0) {
                mymonthsql = "  and month(a.server_time)=" + mymonth;
            }
            String mydaysql = "";
            if (myday.length() > 0) {
                mydaysql = "  and day(a.server_time)=" + myday;
            }
            String myoidsql = "";
            if (mypid.length() > 0) {
                myoidsql = "  and a.custom_var_v1 like '%" + mypid + "%'   ";
            }

            if (myyear.length() > 0) {
                myyearsql = " and  year(a.server_time)=" + myyear + "   ";
            }
            if (mytype.length() > 0) {
                mytypesql = " ( lower(a.custom_var_v1) like '%" + mytype.toLowerCase() + "%' " + " or ( lower(a.custom_var_k1) like '%" + mytype.toLowerCase() + "%' " + " )" + " or ( lower(a.custom_var_k2) like '%" + mytype.toLowerCase() + "%' " + " )" + " or ( lower(a.custom_var_k3) like '%" + mytype.toLowerCase() + "%' " + " )" + " or ( lower(a.custom_var_k4) like '%" + mytype.toLowerCase() + "%' " + " )" + " or ( lower(a.custom_var_k5) like '%" + mytype.toLowerCase() + "%' " + " )" + " )  ";
            }
            String mystatesql = "";
            if (mystate.length() > 0) {
                mystatesql = "  and b.state like '" + mystate + "' ";
            }
            String myredcodesql = "";
            if (myredcode.length() > 0) {
                myredcodesql = "  and b.redcode like '" + myredcode + "' ";
            }


String myowneris2 = "";
            if (myowner.length() > 0) {
                myowneris2 = "  and b.owner like '" + myowner + "' ";
            }



            result = "";
            st = conn.createStatement();

            String sql = "select b.cmodel cmodel, b.owner as owner, count(month(a.server_time)) as howmany, "
            + " concat(day(b.created),'-',month(b.created),'-',year(b.created) )   as created , " 
            + " a.server_time as datevisit , " + " a.custom_var_v1 as oid " 
            + " from piwik_log_link_visit_action as a  " + " ,inventory as b " +


            " where  " + " a.custom_var_v1=b.oid " +
            " and ( lower(a.custom_var_k1) = 'view'  )  " +
              myyearsql + myowneris2+
              myoidsql + mymonthsql + mydaysql + myinstanceis+ mystatesql +  myaccesscodeis+
              myredcodesql +
            " group by a.custom_var_v1   order by howmany desc limit 1 ;";
            // System.out.println("sql download:" + sql);
            ResultSet rs = st.executeQuery(sql);
            // result=sql;
            while (rs.next()) {

                String mycmodelis = rs.getString("cmodel");
                String myowneris = rs.getString("cmodel");
                int myhowmanyis = rs.getInt("howmany");
                String mycreatedis = rs.getString("created");
                String myoid = rs.getString("oid");

                String myitem = "{oid:'" + myoid +

                "',owneris:'" + myowneris + "'," + "created:'" + mycreatedis + "'," +

                "howmany:" + myhowmanyis + ",typeis:'View'" +


                ",cmodel:'" + mycmodelis +

                "'},";

                result = result + myitem;

            }
            //  System.out.println("sql download result:" + result);
            if (mypid.length() < 100000000) {

            
            if (mypid.length() > 0) {
                myoidsql = "  and a.custom_var_v2 like '%" + mypid + "%'   ";
            }






                sql = "select b.cmodel cmodel, b.owner as owner, count(month(a.server_time)) as howmany, " + " concat(day(b.created),'-',month(b.created),'-',year(b.created) )   as created , " + " a.server_time as datevisit , " + " a.custom_var_v2 as oid " + " from piwik_log_link_visit_action as a  " + " ,inventory as b " +


                " where  " + " a.custom_var_v2=b.oid " +
                //" and a.idvisit=c.idvisit " + 
                //     " and b.cmodel like '%" + mycmodel + "%'" + " and  b.acccode like '%" + myaccesscode +"%' "+
                " and ( lower(a.custom_var_k2) = 'download'  )  " +
                //     " and b.owner like '%" + myowner + "%'" +
                // " and b.oid like '%"+mypid+"%'" +
                            myyearsql + myoidsql + mymonthsql + mydaysql + mystatesql +  myaccesscodeis+  
                            myowneris2+
                            myredcodesql +
                //" group by v1 order by count(month(a.server_time)) desc  limit 10;";
                " group by a.custom_var_v2   order by howmany desc limit 1 ;";
                System.out.println("sql down:" + sql);

                ResultSet rs2 = st.executeQuery(sql);
                // result=sql;
                while (rs2.next()) {

                    String mycmodelis = rs2.getString("cmodel");
                    String myowneris = rs2.getString("cmodel");
                    int myhowmanyis = rs2.getInt("howmany");
                    String mycreatedis = rs2.getString("created");
                    String myoid = rs2.getString("oid");

                    String myitem = "{oid:'" + myoid +

                    "',owneris:'" + myowneris + "'," + "created:'" + mycreatedis + "'," +

                    "howmany:" + myhowmanyis + ",typeis:'Download'" +


                    ",cmodel:'" + mycmodelis +

                    "'},";

                    result = result + myitem;

                }

                myoidsql = "";
                if (mypid.length() > 0) {
                    myoidsql = "  and a.custom_var_v3 like '%" + mypid + "%'   ";
                }

                sql = "select b.cmodel cmodel, b.owner as owner, count(month(a.server_time)) as howmany, " + " concat(day(b.created),'-',month(b.created),'-',year(b.created) )   as created , " + " a.server_time as datevisit , " + " a.custom_var_v3 as oid " + " from piwik_log_link_visit_action as a  " + " ,inventory as b " +


                " where  " + " a.custom_var_v3=b.oid " +
                //" and a.idvisit=c.idvisit " + 
                //     " and b.cmodel like '%" + mycmodel + "%'" + " and  b.acccode like '%" + myaccesscode +"%' "+
                " and ( lower(a.custom_var_k3) = 'show metadata'  )  " +
                //     " and b.owner like '%" + myowner + "%'" +
                // " and b.oid like '%"+mypid+"%'" +
                            myyearsql + myoidsql + mymonthsql + mydaysql + mystatesql +            myredcodesql +
                //" group by v1 order by count(month(a.server_time)) desc  limit 10;";
                " group by a.custom_var_v3   order by howmany desc limit 1 ;";
                System.out.println("sql meta:" + sql);

                rs2 = st.executeQuery(sql);
                // result=sql;
                while (rs2.next()) {

                    String mycmodelis = rs2.getString("cmodel");
                    String myowneris = rs2.getString("cmodel");
                    int myhowmanyis = rs2.getInt("howmany");
                    String mycreatedis = rs2.getString("created");
                    String myoid = rs2.getString("oid");

                    String myitem = "{oid:'" + myoid +

                    "',owneris:'" + myowneris + "'," + "created:'" + mycreatedis + "'," +

                    "howmany:" + myhowmanyis + ",typeis:'Metadata'" +


                    ",cmodel:'" + mycmodelis +

                    "'},";

                    result = result + myitem;

                }
                rs.close();

                 if (mypid.length() > 0) {
                myoidsql = "  and a.custom_var_v4 like '%" + mypid + "%'   ";
            }

sql = "select b.cmodel cmodel, b.owner as owner, count(month(a.server_time)) as howmany, " + " concat(day(b.created),'-',month(b.created),'-',year(b.created) )   as created , " + " a.server_time as datevisit , " + " a.custom_var_v4 as oid " + " from piwik_log_link_visit_action as a  " + " ,inventory as b " +


                " where  " + " a.custom_var_v4=b.oid " +
                //" and a.idvisit=c.idvisit " + 
                //     " and b.cmodel like '%" + mycmodel + "%'" + " and  b.acccode like '%" + myaccesscode +"%' "+
                " and ( lower(a.custom_var_k4) = 'detail page'  )  " +
                //     " and b.owner like '%" + myowner + "%'" +
                // " and b.oid like '%"+mypid+"%'" +
                            myyearsql + myoidsql + mymonthsql + mydaysql + mystatesql +            myredcodesql +
                //" group by v1 order by count(month(a.server_time)) desc  limit 10;";
                " group by a.custom_var_v4   order by howmany desc limit 1 ;";
                System.out.println("sql detail:" + sql);

                rs2 = st.executeQuery(sql);
                // result=sql;
                while (rs2.next()) {

                    String mycmodelis = rs2.getString("cmodel");
                    String myowneris = rs2.getString("cmodel");
                    int myhowmanyis = rs2.getInt("howmany");
                    String mycreatedis = rs2.getString("created");
                    String myoid = rs2.getString("oid");

                    String myitem = "{oid:'" + myoid +

                    "',owneris:'" + myowneris + "'," + "created:'" + mycreatedis + "'," +

                    "howmany:" + myhowmanyis + ",typeis:'Detail Page'" +


                    ",cmodel:'" + mycmodelis +

                    "'},";

                    result = result + myitem;

                }
                rs2.close();
            } //if 10000000
            result = result.substring(0, result.length() - 1);
            System.out.println("resiult top" + result);



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