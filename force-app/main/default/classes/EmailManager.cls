public class EmailManager {
    public static void SendEmail(string address,string subject,string body){
        Messaging.SingleEmailMessage mail=new Messaging.SingleEmailMessage();
        string[] addresses =new string[] {address};
        mail.settoaddresses(addresses);
        mail.setSubject(subject);
        mail.setplaintextbody(body);
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] {mail});
        
        
        
        
        
    }
}