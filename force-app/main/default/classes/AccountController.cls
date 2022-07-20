public class AccountController {
   @AuraEnabled(cacheable=true)
   public static list<Account> getAccount(){
       try {
           return [select Id,Name from Account];
       } catch (Exception e) {  throw new AuraHandledException(e.getMessage());}
   }
}