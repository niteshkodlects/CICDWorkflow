public with sharing class SearchService {
    public SearchService() {

    }

    @AuraEnabled(cacheable=true)
    public static list<Account> getAccounts(string searchText){
        try {
            string text='%'+searchText+'%';
            return [select id,name from account where name like:text];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}