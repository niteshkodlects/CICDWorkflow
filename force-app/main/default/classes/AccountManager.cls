public with sharing class AccountManager {
   

    @AuraEnabled(cacheable=true)
    public static list<account> getAccounts(Integer num) {

        return [select Id,Name,website,phone from account LIMIT :num];
    }


    @AuraEnabled
    public static string CreateAccount(string firstName,string lastName){
        try {

            
            account newAccount=new Account(Name=firstName+lastName);
            insert newAccount;
            return newAccount.id;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}