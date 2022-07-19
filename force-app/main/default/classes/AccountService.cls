public class with sharing AccountService {
    @AuraEnabled
    public static string methodName(){
        try {
            return '';
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable=true)
    public static list<account> getAccounts(string Type) {

        return [select id,Name from Account where type=:Type];

    }

    @AuraEnabled(cacheable=true)
    public static list<account> getAccountWithSearch(string searchText) {
      searchText='%' +searchText+'%';
        return [select id,Name from Account where name like:searchText];

    }

    @AuraEnabled(cacheable=true)
    public static list<account> getAccount(string searchText) {
        list<list<sObject>> acc =[FIND :searchText IN ALL fields returning Account(Name) ];
        return (list<account>)acc[0];

    }
}